import { useEffect } from 'react';
import { generateSitemapXML } from '@/utils/generateSitemap';

const Sitemap = () => {
  useEffect(() => {
    const sitemapXML = generateSitemapXML();
    
    const blob = new Blob([sitemapXML], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    
    window.location.href = url;
  }, []);

  return null;
};

export default Sitemap;
