import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostFooter from "@/components/blog/BlogPostFooter";
import BlogPost5Content from "@/components/blog/BlogPost5Content";
import RelatedPosts from "@/components/blog/RelatedPosts";
import ArticleLike from "@/components/blog/ArticleLike";
import TableOfContents from "@/components/blog/TableOfContents";
import { useViewCounter } from "@/components/blog/useViewCounter";
import { useBlogPostMeta } from "@/components/blog/useBlogPostMeta";

const BlogPost5 = () => {
  const postSlug = 'prolongatsiya-i-refinansirovanie-mikrozajmov';
  const viewCount = useViewCounter(postSlug);
  
  useBlogPostMeta({
    title: "Пролонгация и рефинансирование микрозаймов — что выбрать",
    description: "📊 Разбираем разницу между пролонгацией и рефинансированием микрозаймов. Плюсы, минусы, условия и советы экспертов — как выбрать лучший вариант для погашения долга.",
    ogTitle: "Пролонгация и рефинансирование микрозаймов — что выбрать",
    ogDescription: "📊 Разбираем разницу между пролонгацией и рефинансированием микрозаймов. Плюсы, минусы, условия и советы экспертов",
    ogImage: "https://mikrofinru.ru/img/b12b359a-2234-487b-a7ec-1a54f978f94d.jpg",
    twitterImage: "https://mikrofinru.ru/img/b12b359a-2234-487b-a7ec-1a54f978f94d.jpg",
    url: "https://mikrofinru.ru/blog/prolongatsiya-i-refinansirovanie-mikrozajmov",
    datePublished: "2025-10-07",
    dateModified: "2025-10-07",
    category: "Советы",
    keywords: ["пролонгация микрозайма", "рефинансирование микрозайма", "продление займа", "как продлить микрозайм", "переоформление займа"],
    wordCount: 2800,
    timeRequired: "PT12M",
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
        name: "Пролонгация и рефинансирование микрозаймов",
        item: "https://mikrofinru.ru/blog/prolongatsiya-i-refinansirovanie-mikrozajmov"
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
                date="7 октября 2025"
                readTime="12 мин"
                viewCount={viewCount}
                title="Пролонгация и рефинансирование микрозаймов — что выбрать"
                imageUrl="/img/b12b359a-2234-487b-a7ec-1a54f978f94d.jpg"
                imageAlt="Пролонгация и рефинансирование микрозаймов"
                breadcrumbs={{
                  home: "Главная",
                  blog: "Блог",
                  current: "Пролонгация и рефинансирование микрозаймов"
                }}
              />
            </div>

            <div className="lg:hidden mb-6 max-w-4xl mx-auto">
              <TableOfContents />
            </div>

            <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-8 max-w-7xl mx-auto">
              <div className="max-w-4xl">
                <div className="bg-white rounded-b-2xl shadow-xl px-8 md:px-12 pb-4">
                  <BlogPost5Content />
                  <ArticleLike postSlug={postSlug} />
                </div>
              </div>
              
              <aside className="hidden lg:block">
                <TableOfContents />
              </aside>
            </div>

            <div className="max-w-4xl">
              <BlogPostFooter
                postUrl="https://mikrofinru.ru/blog/prolongatsiya-i-refinansirovanie-mikrozajmov"
                postTitle="Пролонгация и рефинансирование микрозаймов — что выбрать"
              />
              
              <RelatedPosts currentPostId={5} />
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost5;