import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostFooter from "@/components/blog/BlogPostFooter";
import JournalPost5Content from "@/components/journal/JournalPost5Content";
import ArticleLike from "@/components/blog/ArticleLike";
import TableOfContents from "@/components/blog/TableOfContents";
import { useViewCounter } from "@/components/blog/useViewCounter";
import { useBlogPostMeta } from "@/components/blog/useBlogPostMeta";

const JournalPost5 = () => {
  const postSlug = 'kak-vstupit-v-nasledstvo-2025';
  const viewCount = useViewCounter(postSlug);
  
  useBlogPostMeta({
    title: "Как вступить в наследство в 2025: пошаговая инструкция и 4 способа наследования",
    description: "Полное руководство по вступлению в наследство: по закону, по завещанию, обязательная доля, наследственный договор. Сроки, документы, госпошлина, недостойные наследники. Что делать при просрочке.",
    ogTitle: "Как вступить в наследство: 4 способа и пошаговый алгоритм 2025",
    ogDescription: "Наследование по закону и завещанию, обязательная доля, наследственный договор. Инструкция: документы, сроки 6 месяцев, госпошлина 0,3-0,6%, фактическое принятие.",
    ogImage: "https://cdn.poehali.dev/projects/e9a3fa0a-9ed6-45a2-8cf3-d090c021105f/files/08e3d478-58f5-45e6-b92c-4dfe9db6e1fe.jpg",
    twitterImage: "https://cdn.poehali.dev/projects/e9a3fa0a-9ed6-45a2-8cf3-d090c021105f/files/08e3d478-58f5-45e6-b92c-4dfe9db6e1fe.jpg",
    url: "https://mikrofinru.ru/journal/kak-vstupit-v-nasledstvo-2025",
    datePublished: "2025-10-22",
    dateModified: "2025-10-22",
    category: "Гайды",
    keywords: ["вступить в наследство", "наследство по закону", "наследство по завещанию", "обязательная доля", "наследственный договор", "оформление наследства", "госпошлина наследство", "срок вступления в наследство"],
    wordCount: 2200,
    timeRequired: "PT9M",
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
        name: "Как вступить в наследство",
        item: "https://mikrofinru.ru/journal/kak-vstupit-v-nasledstvo-2025"
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
                readTime="9 мин"
                viewCount={viewCount}
                title="Как вступить в наследство: четыре пути, которые нельзя пропустить"
                imageUrl="https://cdn.poehali.dev/projects/e9a3fa0a-9ed6-45a2-8cf3-d090c021105f/files/08e3d478-58f5-45e6-b92c-4dfe9db6e1fe.jpg"
                imageAlt="Как вступить в наследство - пошаговая инструкция и способы наследования"
                breadcrumbs={{
                  home: "Главная",
                  blog: "Журнал",
                  current: "Как вступить в наследство"
                }}
              />
            </div>

            <div className="lg:hidden mb-6 max-w-4xl mx-auto">
              <TableOfContents />
            </div>

            <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-8 max-w-7xl mx-auto">
              <div className="max-w-4xl">
                <div className="bg-white rounded-b-2xl shadow-xl px-8 md:px-12 pb-4">
                  <JournalPost5Content />
                  <ArticleLike postSlug={postSlug} />
                  <BlogPostFooter
                    postUrl="https://mikrofinru.ru/journal/kak-vstupit-v-nasledstvo-2025"
                    postTitle="Как вступить в наследство в 2025: пошаговая инструкция и 4 способа наследования"
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

export default JournalPost5;