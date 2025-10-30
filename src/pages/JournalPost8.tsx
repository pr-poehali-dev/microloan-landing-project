import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostFooter from "@/components/blog/BlogPostFooter";
import JournalPost8Content from "@/components/journal/JournalPost8Content";
import ArticleLike from "@/components/blog/ArticleLike";
import TableOfContents from "@/components/blog/TableOfContents";
import { useViewCounter } from "@/components/blog/useViewCounter";
import { useBlogPostMeta } from "@/components/blog/useBlogPostMeta";

const JournalPost8 = () => {
  const postSlug = 'kuda-zhalovatsya-na-mfo-bank-strahovuyu';
  const viewCount = useViewCounter(postSlug);
  
  useBlogPostMeta({
    title: "Куда жаловаться на МФО, банк или страховую: все инстанции и порядок действий",
    description: "Подробная инструкция, куда и как подать жалобу на банк, МФО или страховую компанию. Разбираем все инстанции: Центробанк, Роспотребнадзор, суд и другие. Примеры ситуаций и сроки рассмотрения.",
    ogTitle: "Куда жаловаться на МФО, банк или страховую: полное руководство",
    ogDescription: "Пошаговая инструкция: куда обращаться при конфликте с банком, МФО или страховой. Все инстанции, сроки и способы подачи жалоб.",
    ogImage: "https://cdn.poehali.dev/files/133a4cd5-ca9a-49e7-a1ea-80fe862bdd45.jpg",
    twitterImage: "https://cdn.poehali.dev/files/133a4cd5-ca9a-49e7-a1ea-80fe862bdd45.jpg",
    url: "https://mikrofinru.ru/journal/kuda-zhalovatsya-na-mfo-bank-strahovuyu",
    datePublished: "2025-10-30",
    dateModified: "2025-10-30",
    category: "Гайды",
    keywords: ["жалоба на банк", "жалоба на МФО", "жалоба на страховую", "Центробанк жалоба", "Роспотребнадзор", "финансовый омбудсмен", "куда жаловаться", "защита прав потребителей"],
    wordCount: 1800,
    timeRequired: "PT10M",
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
        name: "Куда жаловаться на МФО, банк или страховую",
        item: "https://mikrofinru.ru/journal/kuda-zhalovatsya-na-mfo-bank-strahovuyu"
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
                category="Гайды"
                date="30 октября 2025"
                readTime="10 мин"
                viewCount={viewCount}
                title="Куда жаловаться на МФО, банк или страховую: все инстанции и порядок действий"
                imageUrl="https://cdn.poehali.dev/files/133a4cd5-ca9a-49e7-a1ea-80fe862bdd45.jpg"
                imageAlt="Жалоба на банк, МФО или страховую - инструкция и инстанции"
                breadcrumbs={{
                  home: "Главная",
                  blog: "Журнал",
                  current: "Куда жаловаться на МФО, банк или страховую"
                }}
              />
            </div>

            <div className="lg:hidden mb-6 max-w-4xl mx-auto">
              <TableOfContents />
            </div>

            <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-8 max-w-7xl mx-auto">
              <div className="max-w-4xl">
                <div className="bg-white rounded-b-2xl shadow-xl px-8 md:px-12 pb-4">
                  <JournalPost8Content />
                  <ArticleLike postSlug={postSlug} />
                  <BlogPostFooter
                    postUrl="https://mikrofinru.ru/journal/kuda-zhalovatsya-na-mfo-bank-strahovuyu"
                    postTitle="Куда жаловаться на МФО, банк или страховую: все инстанции и порядок действий"
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

export default JournalPost8;