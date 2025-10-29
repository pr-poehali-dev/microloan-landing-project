import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostFooter from "@/components/blog/BlogPostFooter";
import JournalPost6Content from "@/components/journal/JournalPost6Content";
import ArticleLike from "@/components/blog/ArticleLike";
import TableOfContents from "@/components/blog/TableOfContents";
import { useViewCounter } from "@/components/blog/useViewCounter";
import { useBlogPostMeta } from "@/components/blog/useBlogPostMeta";

const JournalPost6 = () => {
  const postSlug = 'shtraf-za-prosrochennyj-pasport';
  const viewCount = useViewCounter(postSlug);
  
  useBlogPostMeta({
    title: "Штраф за просроченный паспорт РФ — сколько платить и как избежать?",
    description: "Не знаете, когда менять паспорт и чем грозит просрочка? Рассказываем, как избежать штрафа до 5000 ₽, что делать при замене и какие последствия ждут за несвоевременную подачу документов.",
    ogTitle: "Штраф за просроченный паспорт РФ — сколько платить и как избежать?",
    ogDescription: "Не знаете, когда менять паспорт и чем грозит просрочка? Рассказываем, как избежать штрафа до 5000 ₽",
    ogImage: "https://cdn.poehali.dev/files/9f39c8d0-b6e1-445d-bcd0-b598183531d0.jpg",
    twitterImage: "https://cdn.poehali.dev/files/9f39c8d0-b6e1-445d-bcd0-b598183531d0.jpg",
    url: "https://mikrofinru.ru/journal/shtraf-za-prosrochennyj-pasport",
    datePublished: "2025-10-22",
    dateModified: "2025-10-22",
    category: "Гайды",
    keywords: ["штраф за просроченный паспорт", "замена паспорта в 20 лет", "замена паспорта в 45 лет", "как поменять паспорт", "срок замены паспорта", "КоАП 19.15", "госпошлина за паспорт", "паспорт РФ просрочен"],
    wordCount: 1800,
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
        name: "Штраф за просроченный паспорт",
        item: "https://mikrofinru.ru/journal/shtraf-za-prosrochennyj-pasport"
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
                date="22 октября 2025"
                readTime="8 мин"
                viewCount={viewCount}
                title="Штраф за просроченный паспорт РФ — сколько платить и как избежать?"
                imageUrl="https://cdn.poehali.dev/files/9f39c8d0-b6e1-445d-bcd0-b598183531d0.jpg"
                imageAlt="Паспорт гражданина Российской Федерации в руках"
                breadcrumbs={{
                  home: "Главная",
                  blog: "Журнал",
                  current: "Штраф за просроченный паспорт"
                }}
              />
            </div>

            <div className="lg:hidden mb-6 max-w-4xl mx-auto">
              <TableOfContents />
            </div>

            <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-8 max-w-7xl mx-auto">
              <div className="max-w-4xl">
                <div className="bg-white rounded-b-2xl shadow-xl px-8 md:px-12 pb-4">
                  <JournalPost6Content />
                  <ArticleLike postSlug={postSlug} />
                  <BlogPostFooter
                    postUrl="https://mikrofinru.ru/journal/shtraf-za-prosrochennyj-pasport"
                    postTitle="Штраф за просроченный паспорт РФ — сколько платить и как избежать?"
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

export default JournalPost6;