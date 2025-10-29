import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostFooter from "@/components/blog/BlogPostFooter";
import BlogPost11Content from "@/components/blog/BlogPost11Content";
import RelatedPosts from "@/components/blog/RelatedPosts";
import ArticleLike from "@/components/blog/ArticleLike";
import TableOfContents from "@/components/blog/TableOfContents";
import { useViewCounter } from "@/components/blog/useViewCounter";
import { useBlogPostMeta } from "@/components/blog/useBlogPostMeta";

const BlogPost11 = () => {
  const postSlug = 'pochemu-banki-i-mfo-otkazyvayut';
  const viewCount = useViewCounter(postSlug);
  
  useBlogPostMeta({
    title: "Почему банки и МФО отказывают в кредитах: анализ причин",
    description: "Разбор основных причин отказов банков и МФО в выдаче кредитов и займов. Советы, как повысить шанс одобрения и избежать отказа.",
    ogTitle: "Анализ отказов: почему банки и МФО чаще всего отказывают в кредитах",
    ogDescription: "Разбор основных причин отказов банков и МФО в выдаче кредитов и займов. Советы, как повысить шанс одобрения.",
    ogImage: "https://mikrofinru.ru/img/75826ede-4073-4327-905a-4148e15193c9.jpg",
    twitterImage: "https://mikrofinru.ru/img/75826ede-4073-4327-905a-4148e15193c9.jpg",
    url: "https://mikrofinru.ru/blog/pochemu-banki-i-mfo-otkazyvayut",
    datePublished: "2025-10-11",
    dateModified: "2025-10-11",
    category: "Советы",
    keywords: ["почему банки отказывают", "почему МФО отказывают", "причины отказа в микрозайме", "как получить займ", "плохая кредитная история"],
    wordCount: 2400,
    timeRequired: "PT11M",
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
        name: "Почему банки и МФО отказывают",
        item: "https://mikrofinru.ru/blog/pochemu-banki-i-mfo-otkazyvayut"
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
                date="11 октября 2025"
                readTime="11 мин"
                viewCount={viewCount}
                title="Анализ отказов: почему банки и МФО чаще всего отказывают в кредитах"
                imageUrl="/img/75826ede-4073-4327-905a-4148e15193c9.jpg"
                imageAlt="Почему банки и МФО отказывают в кредитах"
                breadcrumbs={{
                  home: "Главная",
                  blog: "Блог",
                  current: "Почему банки и МФО отказывают"
                }}
              />
            </div>

            <div className="lg:hidden mb-6 max-w-4xl mx-auto">
              <TableOfContents />
            </div>

            <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-8 max-w-7xl mx-auto">
              <div className="max-w-4xl">
                <div className="bg-white rounded-b-2xl shadow-xl px-8 md:px-12 pb-4">
                  <BlogPost11Content />
                  <ArticleLike postSlug={postSlug} />
                  <BlogPostFooter
                    postUrl="https://mikrofinru.ru/blog/pochemu-banki-i-mfo-otkazyvayut"
                    postTitle="Почему банки и МФО отказывают в кредитах: анализ причин"
                  />
                </div>
                
                <RelatedPosts currentPostUrl="/blog/pochemu-banki-i-mfo-otkazyvayut" />
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

export default BlogPost11;