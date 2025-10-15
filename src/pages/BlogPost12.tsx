import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostFooter from "@/components/blog/BlogPostFooter";
import BlogPost12Content from "@/components/blog/BlogPost12Content";
import RelatedPosts from "@/components/blog/RelatedPosts";
import ArticleLike from "@/components/blog/ArticleLike";
import TableOfContents from "@/components/blog/TableOfContents";
import { useViewCounter } from "@/components/blog/useViewCounter";
import { useBlogPostMeta } from "@/components/blog/useBlogPostMeta";

const BlogPost12 = () => {
  const postSlug = 'zajm-na-kartu-sberbanka-onlajn';
  const viewCount = useViewCounter(postSlug);
  
  useBlogPostMeta({
    title: "Займ на карту Сбербанка онлайн — быстро и без отказа в 2025",
    description: "Оформите займ на карту Сбербанка онлайн в 2025 году — срочно, без проверки и с высокой вероятностью одобрения. Первый займ под 0% в надёжных МФО.",
    ogTitle: "Займ на карту Сбербанка онлайн — быстро и без отказа в 2025",
    ogDescription: "Оформите займ на карту Сбербанка онлайн в 2025 году — срочно, без проверки и с высокой вероятностью одобрения. Первый займ под 0% в надёжных МФО.",
    ogImage: "https://mikrofinru.ru/img/27a7256b-9570-4cf4-8afc-9ac4caa43c42.jpg",
    twitterImage: "https://mikrofinru.ru/img/27a7256b-9570-4cf4-8afc-9ac4caa43c42.jpg",
    url: "https://mikrofinru.ru/blog/zajm-na-kartu-sberbanka-onlajn",
    datePublished: "2025-10-15",
    dateModified: "2025-10-15",
    category: "Советы",
    keywords: ["займ на карту сбербанка", "займ на карту сбербанка онлайн", "срочный займ на карту сбербанка", "займ без отказа на карту сбербанка", "займ под 0% на карту сбербанка"],
    wordCount: 2800,
    timeRequired: "PT14M",
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
        name: "Займ на карту Сбербанка онлайн",
        item: "https://mikrofinru.ru/blog/zajm-na-kartu-sberbanka-onlajn"
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
                date="15 октября 2025"
                readTime="14 мин"
                viewCount={viewCount}
                title="Займ на карту Сбербанка онлайн — быстро и без отказа в 2025"
                imageUrl="/img/27a7256b-9570-4cf4-8afc-9ac4caa43c42.jpg"
                imageAlt="Займ на карту Сбербанка онлайн"
                breadcrumbs={{
                  home: "Главная",
                  blog: "Блог",
                  current: "Займ на карту Сбербанка"
                }}
              />
            </div>

            <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-8 max-w-7xl mx-auto">
              <div className="max-w-4xl">
                <div className="bg-white rounded-b-2xl shadow-xl px-8 md:px-12 pb-4">
                  <div className="lg:hidden mb-6">
                    <TableOfContents />
                  </div>
                  <BlogPost12Content />
                  <ArticleLike postSlug={postSlug} />
                  <BlogPostFooter />
                </div>
                
                <RelatedPosts currentPostUrl="/blog/zajm-na-kartu-sberbanka-onlajn" />
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

export default BlogPost12;
