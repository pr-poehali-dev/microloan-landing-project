import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostFooter from "@/components/blog/BlogPostFooter";
import JournalPost7Content from "@/components/journal/JournalPost7Content";
import ArticleLike from "@/components/blog/ArticleLike";
import TableOfContents from "@/components/blog/TableOfContents";
import { useViewCounter } from "@/components/blog/useViewCounter";
import { useBlogPostMeta } from "@/components/blog/useBlogPostMeta";

const JournalPost7 = () => {
  const postSlug = 'kak-sekonomit-na-mikrozajme';
  const viewCount = useViewCounter(postSlug);
  
  useBlogPostMeta({
    title: "Как сэкономить на микрозайме: 3 рабочих способа уменьшить переплату",
    description: "Узнайте, как снизить переплату по микрозайму: беспроцентные займы, отказ от допуслуг и досрочное погашение. Практические советы и реальный пример расчёта.",
    ogTitle: "Как уменьшить переплату по микрозайму: 3 проверенных способа",
    ogDescription: "Беспроцентные займы, отказ от допуслуг и досрочное погашение — три эффективных метода снизить расходы по микрозайму. Реальный пример экономии 840 рублей.",
    ogImage: "https://cdn.poehali.dev/files/935f8375-31c7-4a7b-b7dc-0ad5de0f81bf.jpg",
    twitterImage: "https://cdn.poehali.dev/files/935f8375-31c7-4a7b-b7dc-0ad5de0f81bf.jpg",
    url: "https://mikrofinru.ru/journal/kak-sekonomit-na-mikrozajme",
    datePublished: "2025-10-29",
    dateModified: "2025-10-29",
    category: "Советы",
    keywords: ["экономия на микрозайме", "снизить переплату", "беспроцентный займ", "досрочное погашение", "дополнительные услуги МФО", "как сэкономить деньги", "микрозайм без переплаты"],
    wordCount: 1200,
    timeRequired: "PT5M",
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
        name: "Как сэкономить на микрозайме",
        item: "https://mikrofinru.ru/journal/kak-sekonomit-na-mikrozajme"
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
                category="Советы"
                date="29 октября 2025"
                readTime="5 мин"
                viewCount={viewCount}
                title="Как уменьшить переплату по микрозайму: 3 проверенных способа"
                imageUrl="https://cdn.poehali.dev/files/935f8375-31c7-4a7b-b7dc-0ad5de0f81bf.jpg"
                imageAlt="Экономия на микрозайме - 3 способа снизить переплату"
                breadcrumbs={{
                  home: "Главная",
                  blog: "Журнал",
                  current: "Как сэкономить на микрозайме"
                }}
              />
            </div>

            <div className="lg:hidden mb-6 max-w-4xl mx-auto">
              <TableOfContents />
            </div>

            <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-8 max-w-7xl mx-auto">
              <div className="max-w-4xl">
                <div className="bg-white rounded-b-2xl shadow-xl px-8 md:px-12 pb-4">
                  <JournalPost7Content />
                  <ArticleLike postSlug={postSlug} />
                  <BlogPostFooter
                    postUrl="https://mikrofinru.ru/journal/kak-sekonomit-na-mikrozajme"
                    postTitle="Как сэкономить на микрозайме: 3 рабочих способа уменьшить переплату"
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

export default JournalPost7;