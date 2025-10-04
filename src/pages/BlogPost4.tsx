import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostFooter from "@/components/blog/BlogPostFooter";
import BlogPost4Content from "@/components/blog/BlogPost4Content";
import OverpaymentCalculator from "@/components/blog/OverpaymentCalculator";
import RelatedPosts from "@/components/blog/RelatedPosts";
import ArticleLike from "@/components/blog/ArticleLike";
import TableOfContents from "@/components/blog/TableOfContents";
import { useViewCounter } from "@/components/blog/useViewCounter";
import { useBlogPostMeta } from "@/components/blog/useBlogPostMeta";

const BlogPost4 = () => {
  const postSlug = 'kak-rasschitat-pereplatu-po-mikrozajmu';
  const viewCount = useViewCounter(postSlug);
  
  useBlogPostMeta({
    title: "Как рассчитать переплату по микрозайму: формула и примеры",
    description: "📊 Простая формула расчёта переплаты по микрозайму с примерами. Узнайте реальную сумму возврата и проценты по микрозайму заранее. Калькулятор в статье",
    ogTitle: "Как рассчитать переплату по микрозайму: формула и примеры",
    ogDescription: "📊 Простая формула расчёта переплаты по микрозайму с примерами. Узнайте реальную сумму возврата и проценты по микрозайму заранее",
    ogImage: "https://mikrofinru.ru/img/27a7256b-9570-4cf4-8afc-9ac4caa43c42.jpg",
    twitterImage: "https://mikrofinru.ru/img/27a7256b-9570-4cf4-8afc-9ac4caa43c42.jpg",
    url: "https://mikrofinru.ru/blog/kak-rasschitat-pereplatu-po-mikrozajmu",
    datePublished: "2025-10-04",
    dateModified: "2025-10-04",
    category: "Советы",
    keywords: ["переплата по микрозайму", "как рассчитать микрозайм", "проценты по микрозайму", "формула расчета займа", "калькулятор микрозайма"],
    wordCount: 2900,
    timeRequired: "PT13M",
    breadcrumbs: [
      {
        position: 1,
        name: "Главная",
        item: "https://mikrofinru.ru/"
      },
      {
        position: 2,
        name: "Блог",
        item: "https://mikrofinru.ru/blog"
      },
      {
        position: 3,
        name: "Как рассчитать переплату по микрозайму",
        item: "https://mikrofinru.ru/blog/kak-rasschitat-pereplatu-po-mikrozajmu"
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
                date="4 октября 2025"
                readTime="13 мин"
                viewCount={viewCount}
                title="Как рассчитать переплату по микрозайму"
                imageUrl="/img/27a7256b-9570-4cf4-8afc-9ac4caa43c42.jpg"
                imageAlt="Как рассчитать переплату по микрозайму"
                breadcrumbs={{
                  home: "Главная",
                  blog: "Блог",
                  current: "Как рассчитать переплату по микрозайму"
                }}
              />
            </div>

            <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-8 max-w-7xl mx-auto">
              <div className="max-w-4xl">
                <div className="bg-white rounded-b-2xl shadow-xl px-8 md:px-12 pb-4">
                  <BlogPost4Content />
                  <OverpaymentCalculator />
                  <ArticleLike postSlug={postSlug} />
                </div>
              </div>
              
              <aside className="hidden lg:block">
                <TableOfContents />
              </aside>
            </div>

            <div className="max-w-4xl">
              <BlogPostFooter
                postUrl="https://mikrofinru.ru/blog/kak-rasschitat-pereplatu-po-mikrozajmu"
                postTitle="Как рассчитать переплату по микрозайму"
              />
              
              <RelatedPosts currentPostId={4} />
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost4;