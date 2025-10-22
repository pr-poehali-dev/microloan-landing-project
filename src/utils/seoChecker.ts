import { blogPosts } from '@/data/blogPosts';

export interface SEOCheckResult {
  url: string;
  title: string;
  inSitemap: boolean;
  hasRoute: boolean;
  status: 'ok' | 'warning' | 'error';
}

export const checkAllBlogPostsSEO = async (): Promise<SEOCheckResult[]> => {
  const results: SEOCheckResult[] = [];
  
  try {
    const sitemapResponse = await fetch('/sitemap.xml');
    const sitemapText = await sitemapResponse.text();
    
    for (const post of blogPosts) {
      const url = post.url || `/blog/${post.slug}`;
      const fullUrl = `https://mikrofinru.ru${url}`;
      
      const inSitemap = sitemapText.includes(fullUrl);
      const hasRoute = !!post.url || !!post.slug;
      
      let status: 'ok' | 'warning' | 'error' = 'ok';
      if (!inSitemap || !hasRoute) {
        status = 'error';
      }
      
      results.push({
        url: fullUrl,
        title: post.title,
        inSitemap,
        hasRoute,
        status
      });
    }
  } catch (error) {
    console.error('Ошибка проверки SEO:', error);
  }
  
  return results;
};

export const generateSitemapContent = (): string => {
  const baseUrl = 'https://mikrofinru.ru';
  const today = new Date().toISOString().split('T')[0];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;

  blogPosts.forEach(post => {
    const url = post.url || `/blog/${post.slug}`;
    const dateStr = post.date.split(' ')[0];
    const [day, month, year] = dateStr.split(' ');
    const monthMap: Record<string, string> = {
      'января': '01', 'февраля': '02', 'марта': '03', 'апреля': '04',
      'мая': '05', 'июня': '06', 'июля': '07', 'августа': '08',
      'сентября': '09', 'октября': '10', 'ноября': '11', 'декабря': '12'
    };
    
    sitemap += `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  });

  sitemap += '</urlset>';
  return sitemap;
};
