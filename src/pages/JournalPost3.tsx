import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostFooter from "@/components/blog/BlogPostFooter";
import JournalPost3Content from "@/components/journal/JournalPost3Content";
import ArticleLike from "@/components/blog/ArticleLike";
import TableOfContents from "@/components/blog/TableOfContents";
import { useViewCounter } from "@/components/blog/useViewCounter";
import { useBlogPostMeta } from "@/components/blog/useBlogPostMeta";

const JournalPost3 = () => {
  const postSlug = 'transportnyj-nalog-tri-regiona-2025';
  const viewCount = useViewCounter(postSlug);
  
  useBlogPostMeta({
    title: "Транспортный налог 2025: три региона повышают ставки | Оренбург, Новосибирск, Красноярск",
    description: "Оренбургская, Новосибирская области и Красноярский край повышают транспортный налог в 2025 году. Новые ставки, расчёты и суммы доплат для автовладельцев по мощности авто.",
    ogTitle: "Транспортный налог 2025: кто заплатит больше за машину",
    ogDescription: "Повышение транспортного налога в 3 регионах: Оренбург отменяет льготу на 100 л.с., Новосибирск индексирует на 10,9%, Красноярск поднимает ставки для всех.",
    ogImage: "https://cdn.poehali.dev/files/42fef705-92d7-4075-88d7-1983eaa53552.jpg",
    twitterImage: "https://cdn.poehali.dev/files/42fef705-92d7-4075-88d7-1983eaa53552.jpg",
    url: "https://mikrofinru.ru/journal/transportnyj-nalog-tri-regiona-2025",
    datePublished: "2025-10-22",
    dateModified: "2025-10-22",
    category: "Новости",
    keywords: ["транспортный налог 2025", "повышение транспортного налога", "Оренбургская область", "Новосибирская область", "Красноярский край", "налог на машину", "ставки транспортного налога"],
    wordCount: 1600,
    timeRequired: "PT6M",
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
        name: "Транспортный налог в трёх регионах",
        item: "https://mikrofinru.ru/journal/transportnyj-nalog-tri-regiona-2025"
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
                readTime="6 мин"
                viewCount={viewCount}
                title="Три региона, три повышения: кому придётся платить больше за машину"
                imageUrl="https://cdn.poehali.dev/files/42fef705-92d7-4075-88d7-1983eaa53552.jpg"
                imageAlt="Транспортный налог 2025 - повышение ставок в трёх регионах России"
                breadcrumbs={{
                  home: "Главная",
                  blog: "Журнал",
                  current: "Транспортный налог 2025"
                }}
              />
            </div>

            <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-8 max-w-7xl mx-auto">
              <div className="max-w-4xl">
                <div className="bg-white rounded-b-2xl shadow-xl px-8 md:px-12 pb-4">
                  <div className="lg:hidden mb-6">
                    <TableOfContents />
                  </div>
                  <JournalPost3Content />
                  <ArticleLike postSlug={postSlug} />
                  <BlogPostFooter
                    postUrl="https://mikrofinru.ru/journal/transportnyj-nalog-tri-regiona-2025"
                    postTitle="Транспортный налог 2025: три региона повышают ставки | Оренбург, Новосибирск, Красноярск"
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

export default JournalPost3;