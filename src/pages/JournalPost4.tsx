import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostFooter from "@/components/blog/BlogPostFooter";
import JournalPost4Content from "@/components/journal/JournalPost4Content";
import ArticleLike from "@/components/blog/ArticleLike";
import TableOfContents from "@/components/blog/TableOfContents";
import { useViewCounter } from "@/components/blog/useViewCounter";
import { useBlogPostMeta } from "@/components/blog/useBlogPostMeta";

const JournalPost4 = () => {
  const postSlug = 'reshenie-cb-24-oktyabrya-vklady-obligacii';
  const viewCount = useViewCounter(postSlug);
  
  useBlogPostMeta({
    title: "Что решит ЦБ 24 октября: как это ударит по вашим вкладам и облигациям",
    description: "Сохранит ли Центробанк ключевую ставку на 17% или снизит её? Анализ влияния решения ЦБ на доходность вкладов и облигаций. Мнения экспертов, прогнозы и стратегии для инвесторов.",
    ogTitle: "Решение ЦБ 24 октября: что будет с вкладами и облигациями",
    ogDescription: "Ключевая ставка 17%: сохранит или снизит? Разбираем влияние на вклады (13-15%) и облигации. Прогнозы экспертов БКС, Финам, мнения аналитиков.",
    ogImage: "https://cdn.poehali.dev/files/42bc6b2d-3302-47b3-b4bf-5f4e889fe11c.jpg",
    twitterImage: "https://cdn.poehali.dev/files/42bc6b2d-3302-47b3-b4bf-5f4e889fe11c.jpg",
    url: "https://mikrofinru.ru/journal/reshenie-cb-24-oktyabrya-vklady-obligacii",
    datePublished: "2025-10-22",
    dateModified: "2025-10-22",
    category: "Аналитика",
    keywords: ["ЦБ", "ключевая ставка", "вклады", "облигации", "Центробанк", "доходность вкладов", "инвестиции", "17 процентов"],
    wordCount: 2100,
    timeRequired: "PT8M",
    breadcrumbs: [
      {
        position: 1,
        name: "Главная",
        item: "https://mikrofinru.ru/"
      },
      {
        position: 2,
        name: "Журнал",
        item: "https://mikrofinru.ru/journal"
      },
      {
        position: 3,
        name: "Решение ЦБ 24 октября",
        item: "https://mikrofinru.ru/journal/reshenie-cb-24-oktyabrya-vklady-obligacii"
      }
    ]
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <BlogPostHeader
                category="Аналитика"
                date="22 октября 2025"
                readTime="8 мин"
                viewCount={viewCount}
                title="Что решит ЦБ 24 октября: как это ударит по вашим вкладам и облигациям"
                imageUrl="https://cdn.poehali.dev/files/42bc6b2d-3302-47b3-b4bf-5f4e889fe11c.jpg"
                imageAlt="Решение ЦБ по ключевой ставке - влияние на вклады и облигации"
                breadcrumbs={{
                  home: "Главная",
                  blog: "Журнал",
                  current: "Решение ЦБ 24 октября"
                }}
              />
            </div>

            <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-8 max-w-7xl mx-auto">
              <div className="max-w-4xl">
                <div className="bg-white rounded-b-2xl shadow-xl px-8 md:px-12 pb-4">
                  <div className="lg:hidden mb-6">
                    <TableOfContents />
                  </div>
                  <JournalPost4Content />
                  <ArticleLike postSlug={postSlug} />
                  <BlogPostFooter
                    postUrl="https://mikrofinru.ru/journal/reshenie-cb-24-oktyabrya-vklady-obligacii"
                    postTitle="Что решит ЦБ 24 октября: как это ударит по вашим вкладам и облигациям"
                  />
                </div>
              </div>

              <aside className="hidden lg:block lg:sticky lg:top-32 h-fit">
                <TableOfContents />
              </aside>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default JournalPost4;