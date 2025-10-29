import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostFooter from "@/components/blog/BlogPostFooter";
import JournalPost2Content from "@/components/journal/JournalPost2Content";
import ArticleLike from "@/components/blog/ArticleLike";
import TableOfContents from "@/components/blog/TableOfContents";
import { useViewCounter } from "@/components/blog/useViewCounter";
import { useBlogPostMeta } from "@/components/blog/useBlogPostMeta";

const JournalPost2 = () => {
  const postSlug = 'ipoteka-ot-mfo-2025';
  const viewCount = useViewCounter(postSlug);
  
  useBlogPostMeta({
    title: "Ипотека от МФО с 22 октября 2025: революция или маркетинг?",
    description: "С 22 октября 2025 года МФО получают право выдавать ипотеку по льготным программам. Разбираем условия, ставки и стоит ли брать жилищный кредит в микрофинансовой организации вместо банка.",
    ogTitle: "Ипотека от МФО 2025: новые правила жилищного кредитования",
    ogDescription: "Региональные МФО могут выдавать ипотеку с 22 октября. Условия льготных программ, сравнение с банками, риски и преимущества. Экспертное мнение.",
    ogImage: "https://cdn.poehali.dev/files/935f8375-31c7-4a7b-b7dc-0ad5de0f81bf.jpg",
    twitterImage: "https://cdn.poehali.dev/files/935f8375-31c7-4a7b-b7dc-0ad5de0f81bf.jpg",
    url: "https://mikrofinru.ru/journal/ipoteka-ot-mfo-2025",
    datePublished: "2025-10-22",
    dateModified: "2025-10-22",
    category: "Новости",
    keywords: ["ипотека от МФО", "жилищный кредит 2025", "льготная ипотека", "региональные МФО", "семейная ипотека", "ипотека в регионах", "новые правила ипотеки"],
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
        name: "Ипотека от МФО",
        item: "https://mikrofinru.ru/journal/ipoteka-ot-mfo-2025"
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
                title="Ипотека от МФО: революция или маркетинговый ход?"
                imageUrl="https://cdn.poehali.dev/files/935f8375-31c7-4a7b-b7dc-0ad5de0f81bf.jpg"
                imageAlt="Ипотека от МФО - новые правила жилищного кредитования с 22 октября 2025"
                breadcrumbs={{
                  home: "Главная",
                  blog: "Журнал",
                  current: "Ипотека от МФО"
                }}
              />
            </div>

            <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-8 max-w-7xl mx-auto">
              <div className="max-w-4xl">
                <div className="bg-white rounded-b-2xl shadow-xl px-8 md:px-12 pb-4">
                  <div className="lg:hidden mb-6">
                    <TableOfContents />
                  </div>
                  <JournalPost2Content />
                  <ArticleLike postSlug={postSlug} />
                  <BlogPostFooter
                    postUrl="https://mikrofinru.ru/journal/ipoteka-ot-mfo-2025"
                    postTitle="Ипотека от МФО с 22 октября 2025: революция или маркетинг?"
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

export default JournalPost2;