import { blogPosts } from '../data/blogPosts';

const SITE_URL = 'https://mikrofinru.ru';

export function generateSitemapXML(): string {
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
