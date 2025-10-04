import { blogPosts } from '@/data/blogPosts';

const DOMAIN = 'https://mikrofinru.ru';

export function generateSitemapXML(): string {
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

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
}

export function updateSitemap() {
  const sitemapContent = generateSitemapXML();
  
  fetch('/sitemap.xml', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/xml',
    },
    body: sitemapContent
  }).catch(() => {
    console.log('Sitemap will be generated during build');
  });
}
