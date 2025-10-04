const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://mikrofinru.ru';

const blogPosts = [
  {
    url: "/blog/chto-takoe-mikrozajmy",
    date: "2024-03-15"
  }
];

function generateSitemap() {
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
    ...blogPosts.map(post => ({
      loc: DOMAIN + post.url,
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.7'
    }))
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemap, 'utf-8');
  console.log('✅ Sitemap generated with', urls.length, 'URLs');
}

if (require.main === module) {
  generateSitemap();
}

module.exports = { generateSitemap, blogPosts };
