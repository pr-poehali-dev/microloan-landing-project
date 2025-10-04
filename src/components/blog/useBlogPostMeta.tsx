import { useEffect } from 'react';

interface BlogPostMetaData {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterImage: string;
  url: string;
  datePublished: string;
  dateModified: string;
  category: string;
  keywords: string[];
  wordCount: number;
  timeRequired: string;
  breadcrumbs: Array<{
    position: number;
    name: string;
    item: string;
  }>;
  faqItems?: Array<{
    question: string;
    answer: string;
  }>;
}

export const useBlogPostMeta = (metadata: BlogPostMetaData) => {
  useEffect(() => {
    document.title = metadata.title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', metadata.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', metadata.ogTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', metadata.ogDescription);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', metadata.ogImage);
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', metadata.twitterImage);
    }

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": metadata.title,
      "description": metadata.description,
      "image": metadata.ogImage,
      "author": {
        "@type": "Organization",
        "name": "МикроФин.ру"
      },
      "publisher": {
        "@type": "Organization",
        "name": "МикроФин.ру",
        "logo": {
          "@type": "ImageObject",
          "url": "https://mikrofinru.ru/logo.png"
        }
      },
      "datePublished": metadata.datePublished,
      "dateModified": metadata.dateModified,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": metadata.url
      },
      "articleSection": metadata.category,
      "keywords": metadata.keywords,
      "wordCount": metadata.wordCount,
      "timeRequired": metadata.timeRequired
    });
    document.head.appendChild(schemaScript);

    const breadcrumbSchema = document.createElement('script');
    breadcrumbSchema.type = 'application/ld+json';
    breadcrumbSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": metadata.breadcrumbs.map(item => ({
        "@type": "ListItem",
        "position": item.position,
        "name": item.name,
        "item": item.item
      }))
    });
    document.head.appendChild(breadcrumbSchema);

    if (metadata.faqItems && metadata.faqItems.length > 0) {
      const faqSchema = document.createElement('script');
      faqSchema.type = 'application/ld+json';
      faqSchema.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": metadata.faqItems.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      });
      document.head.appendChild(faqSchema);
    }

    return () => {
      const scripts = document.head.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => script.remove());
    };
  }, [metadata]);
};