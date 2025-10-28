import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost13Content from '@/components/blog/BlogPost13Content';

const BlogPost13 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const publishDate = "28 октября 2025";
  const readTime = "12 мин";

  return (
    <>
      <Helmet>
        <title>Займ 30 000 рублей на карту срочно — где одобрят за 5 минут в 2025</title>
        <meta name="description" content="Нужны срочно 30 тысяч рублей? ТОП-5 МФО с моментальным одобрением, без отказа и проверки КИ. Сравниваем условия, ставки и способы получения денег за 5 минут на карту." />
        <meta name="keywords" content="займ 30000 рублей, займ 30 тысяч на карту, срочный займ 30000, микрозайм 30000 рублей, где взять 30000 срочно, займ без отказа 30000, МФО 30000 рублей, быстрый займ 30 тысяч, онлайн займ 30000" />
        
        <meta property="og:title" content="Займ 30 000 рублей на карту срочно — где одобрят за 5 минут" />
        <meta property="og:description" content="ТОП-5 МФО с моментальным одобрением займа 30000 рублей. Сравниваем условия, ставки и способы получения денег за 5 минут" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://mikrofinru.ru/blog/zajm-30000-rublej-srochno" />
        <meta property="og:image" content="https://cdn.poehali.dev/projects/e9a3fa0a-9ed6-45a2-8cf3-d090c021105f/files/ac6a1890-ddb1-427f-af5d-cf9643f0bc32.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Займ 30 000 рублей на карту срочно — где одобрят за 5 минут" />
        <meta name="twitter:description" content="ТОП-5 МФО с моментальным одобрением займа 30000 рублей" />
        <meta name="twitter:image" content="https://cdn.poehali.dev/projects/e9a3fa0a-9ed6-45a2-8cf3-d090c021105f/files/ac6a1890-ddb1-427f-af5d-cf9643f0bc32.jpg" />

        <link rel="canonical" href="https://mikrofinru.ru/blog/zajm-30000-rublej-srochno" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Займ 30 000 рублей на карту срочно — где одобрят за 5 минут",
            "description": "Нужны срочно 30 тысяч рублей? ТОП-5 МФО с моментальным одобрением, без отказа и проверки КИ. Сравниваем условия, ставки и способы получения денег за 5 минут на карту.",
            "image": "https://cdn.poehali.dev/projects/e9a3fa0a-9ed6-45a2-8cf3-d090c021105f/files/ac6a1890-ddb1-427f-af5d-cf9643f0bc32.jpg",
            "datePublished": "2025-10-28",
            "dateModified": "2025-10-28",
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
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <Header />
        
        <main className="container mx-auto px-4 py-8 mt-16">
          <article className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <time dateTime="2025-10-28">{publishDate}</time>
                <span>•</span>
                <span>{readTime} чтения</span>
                <span>•</span>
                <span className="text-primary font-medium">Советы</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Займ 30 000 рублей на карту срочно — где одобрят за 5 минут
              </h1>

              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-8 shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/e9a3fa0a-9ed6-45a2-8cf3-d090c021105f/files/ac6a1890-ddb1-427f-af5d-cf9643f0bc32.jpg"
                  alt="30000 рублей на карту - быстрый займ онлайн"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <BlogPost13Content />

            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-muted-foreground">Теги:</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Займы</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">30000 рублей</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Срочно</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">МФО</span>
              </div>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost13;
