#!/usr/bin/env node

import { writeFileSync, readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DOMAIN = 'https://mikrofinru.ru';

async function generateSitemap() {
  try {
    const blogPostsPath = join(__dirname, '../src/data/blogPosts.ts');
    const content = readFileSync(blogPostsPath, 'utf-8');
    
    const blogPostsMatch = content.match(/export const blogPosts.*?=\s*(\[[\s\S]*?\]);/);
    if (!blogPostsMatch) {
      console.error('❌ Could not find blogPosts array in blogPosts.ts');
      process.exit(1);
    }
    
    const blogPostsStr = blogPostsMatch[1]
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/\/\/.*/g, '')
      .replace(/(['"])?(\w+)(['"])?:/g, '"$2":')
      .replace(/,(\s*[}\]])/g, '$1');
    
    const blogPosts = JSON.parse(blogPostsStr);
    
    const today = new Date().toISOString().split('T')[0];
    
    const urls = [
      {
        loc: DOMAIN + '/',
        lastmod: today,
        changefreq: 'daily',
        priority: '1.0'
      },
      {
        loc: DOMAIN + '/blog',
        lastmod: today,
        changefreq: 'weekly',
        priority: '0.8'
      },
      ...blogPosts
        .filter(post => post.url)
        .map(post => ({
          loc: DOMAIN + post.url,
          lastmod: today,
          changefreq: 'monthly',
          priority: '0.7'
        }))
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<!-- This file is auto-generated from src/data/blogPosts.ts -->
<!-- To regenerate: npm run sitemap -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    const outputPath = join(__dirname, '../public/sitemap.xml');
    writeFileSync(outputPath, sitemap, 'utf-8');
    
    console.log('✅ Sitemap successfully generated!');
    console.log(`📍 Location: public/sitemap.xml`);
    console.log(`📊 Total URLs: ${urls.length}`);
    console.log(`📝 Blog posts: ${blogPosts.length}`);
    
    blogPosts.forEach((post, index) => {
      console.log(`   ${index + 1}. ${post.url || '(no url)'}`);
    });
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message);
    process.exit(1);
  }
}

generateSitemap();
