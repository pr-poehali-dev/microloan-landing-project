import { blogPosts } from '../src/data/blogPosts';
import { writeFileSync } from 'fs';
import { join } from 'path';

const SITE_URL = 'https://mikrofinru.ru';

function generateSitemap(): string {
  const today = new Date().toISOString().split('T')[0];

  const staticPages = [
    {
      loc: SITE_URL,
      lastmod: today,
      changefreq: 'daily',
      priority: '1.0'
    },
    {
      loc: `${SITE_URL}/blog`,
      lastmod: today,
      changefreq: 'weekly',
      priority: '0.8'
    }
  ];

  const blogPages = blogPosts.map(post => ({
    loc: `${SITE_URL}${post.url}`,
    lastmod: today,
    changefreq: 'monthly',
    priority: '0.7'
  }));

  const allPages = [...staticPages, ...blogPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xml;
}

const sitemap = generateSitemap();
const sitemapPath = join(process.cwd(), 'public', 'sitemap.xml');

writeFileSync(sitemapPath, sitemap, 'utf-8');

console.log('✅ Sitemap generated successfully!');
console.log(`📍 Location: ${sitemapPath}`);
console.log(`📊 Total pages: ${blogPosts.length + 2}`);

// Auto-submit to search engines
async function submitToSearchEngines() {
  const sitemapUrl = encodeURIComponent(`${SITE_URL}/sitemap.xml`);
  
  console.log('\n🚀 Отправка sitemap в поисковые системы...');
  
  try {
    await Promise.all([
      fetch(`https://webmaster.yandex.ru/ping?sitemap=${sitemapUrl}`),
      fetch(`https://www.google.com/ping?sitemap=${sitemapUrl}`)
    ]);
    console.log('✅ Яндекс и Google уведомлены об обновлении sitemap');
  } catch (error) {
    console.log('⚠️ Не удалось отправить уведомления (проверьте интернет-соединение)');
  }
}

submitToSearchEngines();