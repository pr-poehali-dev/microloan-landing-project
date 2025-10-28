import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JournalPost6Content from '@/components/journal/JournalPost6Content';

const JournalPost6 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const publishDate = "22 октября 2025";
  const readTime = "8 мин";

  return (
    <>
      <Helmet>
        <title>Штраф за просроченный паспорт РФ — сколько платить и как избежать?</title>
        <meta name="description" content="Не знаете, когда менять паспорт и чем грозит просрочка? Рассказываем, как избежать штрафа до 5000 ₽, что делать при замене и какие последствия ждут за несвоевременную подачу документов." />
        <meta name="keywords" content="штраф за просроченный паспорт, замена паспорта в 20 лет, замена паспорта в 45 лет, как поменять паспорт, срок замены паспорта, КоАП 19.15, госпошлина за паспорт, паспорт РФ просрочен" />
        
        <meta property="og:title" content="Штраф за просроченный паспорт РФ — сколько платить и как избежать?" />
        <meta property="og:description" content="Не знаете, когда менять паспорт и чем грозит просрочка? Рассказываем, как избежать штрафа до 5000 ₽" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://mikrofinru.ru/journal/shtraf-za-prosrochennyj-pasport" />
        <meta property="og:image" content="https://cdn.poehali.dev/files/9f39c8d0-b6e1-445d-bcd0-b598183531d0.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Штраф за просроченный паспорт РФ — сколько платить и как избежать?" />
        <meta name="twitter:description" content="Не знаете, когда менять паспорт и чем грозит просрочка? Рассказываем, как избежать штрафа до 5000 ₽" />
        <meta name="twitter:image" content="https://cdn.poehali.dev/files/9f39c8d0-b6e1-445d-bcd0-b598183531d0.jpg" />

        <link rel="canonical" href="https://mikrofinru.ru/journal/shtraf-za-prosrochennyj-pasport" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Штраф за просроченный паспорт РФ — сколько платить и как избежать?",
            "description": "Не знаете, когда менять паспорт и чем грозит просрочка? Рассказываем, как избежать штрафа до 5000 ₽, что делать при замене и какие последствия ждут за несвоевременную подачу документов.",
            "image": "https://cdn.poehali.dev/files/9f39c8d0-b6e1-445d-bcd0-b598183531d0.jpg",
            "datePublished": "2025-10-22",
            "dateModified": "2025-10-22",
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
                <time dateTime="2025-10-22">{publishDate}</time>
                <span>•</span>
                <span>{readTime} чтения</span>
                <span>•</span>
                <span className="text-primary font-medium">Гайды</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Штраф за просроченный паспорт РФ — сколько платить и как избежать?
              </h1>

              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-8 shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/files/9f39c8d0-b6e1-445d-bcd0-b598183531d0.jpg"
                  alt="Паспорт гражданина Российской Федерации в руках"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <JournalPost6Content />

            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-muted-foreground">Теги:</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Паспорт</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Штрафы</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Госуслуги</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">МВД</span>
              </div>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default JournalPost6;
