import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostFooter from "@/components/blog/BlogPostFooter";
import BlogPost7Content from "@/components/blog/BlogPost7Content";
import RelatedPosts from "@/components/blog/RelatedPosts";
import ArticleLike from "@/components/blog/ArticleLike";
import TableOfContents from "@/components/blog/TableOfContents";
import { useViewCounter } from "@/components/blog/useViewCounter";
import { useBlogPostMeta } from "@/components/blog/useBlogPostMeta";

const BlogPost7 = () => {
  const postSlug = 'kak-vzyat-mikrozajm-i-ne-popast-v-dolgovuyu-yamu';
  const viewCount = useViewCounter(postSlug);
  
  useBlogPostMeta({
    title: "Как взять микрозайм и не попасть в долговую яму - советы заемщикам",
    description: "✅ Узнайте, как безопасно взять микрозайм и избежать долговой ямы. Основные ошибки заемщиков, советы по выбору МФО и альтернативы микрозаймам.",
    ogTitle: "Как взять микрозайм и не попасть в долговую яму - советы заемщикам",
    ogDescription: "✅ Узнайте, как безопасно взять микрозайм и избежать долговой ямы. Основные ошибки заемщиков, советы по выбору МФО и альтернативы микрозаймам",
    ogImage: "https://mikrofinru.ru/img/75826ede-4073-4327-905a-4148e15193c9.jpg",
    twitterImage: "https://mikrofinru.ru/img/75826ede-4073-4327-905a-4148e15193c9.jpg",
    url: "https://mikrofinru.ru/blog/kak-vzyat-mikrozajm-i-ne-popast-v-dolgovuyu-yamu",
    datePublished: "2025-10-07",
    dateModified: "2025-10-07",
    category: "Советы",
    keywords: ["как взять микрозайм", "долговая яма", "ошибки заемщиков", "безопасный займ", "альтернативы микрозайму"],
    wordCount: 2700,
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
        name: "Как взять микрозайм и не попасть в долговую яму",
        item: "https://mikrofinru.ru/blog/kak-vzyat-mikrozajm-i-ne-popast-v-dolgovuyu-yamu"
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
                title="Как взять микрозайм и не попасть в долговую яму"
                imageUrl="/img/75826ede-4073-4327-905a-4148e15193c9.jpg"
                imageAlt="Как взять микрозайм и не попасть в долговую яму"
                breadcrumbs={{
                  home: "Главная",
                  blog: "Блог",
                  current: "Как взять микрозайм и не попасть в долговую яму"
                }}
              />
            </div>

            <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-8 max-w-7xl mx-auto">
              <div className="max-w-4xl">
                <div className="bg-white rounded-b-2xl shadow-xl px-8 md:px-12 pb-4">
                  <div className="lg:hidden mb-6">
                    <TableOfContents />
                  </div>
                  <BlogPost7Content />
                  <ArticleLike postSlug={postSlug} />
                </div>
              </div>
              
              <aside className="hidden lg:block">
                <TableOfContents />
              </aside>
            </div>

            <div className="max-w-4xl">
              <BlogPostFooter
                postUrl="https://mikrofinru.ru/blog/kak-vzyat-mikrozajm-i-ne-popast-v-dolgovuyu-yamu"
                postTitle="Как взять микрозайм и не попасть в долговую яму"
              />
              
              <RelatedPosts currentPostId={7} />
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost7;
