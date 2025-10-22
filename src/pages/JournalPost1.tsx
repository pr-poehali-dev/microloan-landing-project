import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostFooter from "@/components/blog/BlogPostFooter";
import JournalPost1Content from "@/components/journal/JournalPost1Content";
import ArticleLike from "@/components/blog/ArticleLike";
import TableOfContents from "@/components/blog/TableOfContents";
import { useViewCounter } from "@/components/blog/useViewCounter";
import { useBlogPostMeta } from "@/components/blog/useBlogPostMeta";

const JournalPost1 = () => {
  const postSlug = 'novye-pravila-mikrozajmov-2025';
  const viewCount = useViewCounter(postSlug);
  
  useBlogPostMeta({
    title: "Новые правила микрозаймов с 2025 года: что изменилось для заёмщиков",
    description: "Центробанк ужесточил требования к МФО. Разбираем главные изменения законодательства, которые влияют на заёмщиков: ставки, пролонгации, проверка доходов.",
    ogTitle: "Новые правила микрозаймов 2025: что изменилось",
    ogDescription: "Центробанк изменил правила работы МФО. Снижение ставок, ограничение пролонгаций, усиление проверок. Что нужно знать заёмщикам.",
    ogImage: "https://mikrofinru.ru/img/b12b359a-2234-487b-a7ec-1a54f978f94d.jpg",
    twitterImage: "https://mikrofinru.ru/img/b12b359a-2234-487b-a7ec-1a54f978f94d.jpg",
    url: "https://mikrofinru.ru/journal/novye-pravila-mikrozajmov-2025",
    datePublished: "2025-10-22",
    dateModified: "2025-10-22",
    category: "Новости",
    keywords: ["новые правила микрозаймов", "изменения МФО 2025", "Центробанк МФО", "ставки микрозаймов", "пролонгация займа"],
    wordCount: 1800,
    timeRequired: "PT7M",
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
        name: "Новые правила микрозаймов с 2025 года",
        item: "https://mikrofinru.ru/journal/novye-pravila-mikrozajmov-2025"
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
                category="Новости"
                date="22 октября 2025"
                readTime="7 мин"
                viewCount={viewCount}
                title="Новые правила микрозаймов с 2025 года: что изменилось"
                imageUrl="/img/b12b359a-2234-487b-a7ec-1a54f978f94d.jpg"
                imageAlt="Новые правила микрозаймов 2025 - обложка статьи"
                breadcrumbs={{
                  home: "Главная",
                  blog: "Журнал",
                  current: "Новые правила микрозаймов с 2025 года"
                }}
              />
            </div>

            <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-8 max-w-7xl mx-auto">
              <div className="max-w-4xl">
                <div className="bg-white rounded-b-2xl shadow-xl px-8 md:px-12 pb-4">
                  <div className="lg:hidden mb-6">
                    <TableOfContents />
                  </div>
                  <JournalPost1Content />
                  <ArticleLike postSlug={postSlug} />
                  <BlogPostFooter />
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

export default JournalPost1;
