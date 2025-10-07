import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostFooter from "@/components/blog/BlogPostFooter";
import BlogPost6Content from "@/components/blog/BlogPost6Content";
import RelatedPosts from "@/components/blog/RelatedPosts";
import ArticleLike from "@/components/blog/ArticleLike";
import TableOfContents from "@/components/blog/TableOfContents";
import { useViewCounter } from "@/components/blog/useViewCounter";
import { useBlogPostMeta } from "@/components/blog/useBlogPostMeta";

const BlogPost6 = () => {
  const postSlug = 'kakie-dokumenty-nuzhny-dlya-mikrozajma';
  const viewCount = useViewCounter(postSlug);
  
  useBlogPostMeta({
    title: "Какие документы нужны для микрозайма в МФО - полный список требований",
    description: "✅ Узнайте, какие документы требуются для получения микрозайма в МФО. Паспорт, дополнительные справки, особенности онлайн-оформления.",
    ogTitle: "Какие документы нужны для микрозайма в МФО - полный список требований",
    ogDescription: "✅ Узнайте, какие документы требуются для получения микрозайма в МФО. Паспорт, дополнительные справки, особенности онлайн-оформления",
    ogImage: "https://mikrofinru.ru/img/421ccd30-dc7e-46c0-a5d1-9beed22a4725.jpg",
    twitterImage: "https://mikrofinru.ru/img/421ccd30-dc7e-46c0-a5d1-9beed22a4725.jpg",
    url: "https://mikrofinru.ru/blog/kakie-dokumenty-nuzhny-dlya-mikrozajma",
    datePublished: "2025-10-07",
    dateModified: "2025-10-07",
    category: "Советы",
    keywords: ["документы для микрозайма", "что нужно для микрозайма", "паспорт для займа", "требования МФО", "онлайн займ документы"],
    wordCount: 2600,
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
        name: "Какие документы нужны для микрозайма",
        item: "https://mikrofinru.ru/blog/kakie-dokumenty-nuzhny-dlya-mikrozajma"
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
                readTime="11 мин"
                viewCount={viewCount}
                title="Какие документы нужны для микрозайма в МФО"
                imageUrl="/img/421ccd30-dc7e-46c0-a5d1-9beed22a4725.jpg"
                imageAlt="Какие документы нужны для микрозайма"
                breadcrumbs={{
                  home: "Главная",
                  blog: "Блог",
                  current: "Какие документы нужны для микрозайма"
                }}
              />
            </div>

            <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-8 max-w-7xl mx-auto">
              <div className="max-w-4xl">
                <div className="bg-white rounded-b-2xl shadow-xl px-8 md:px-12 pb-4">
                  <div className="lg:hidden mb-6">
                    <TableOfContents />
                  </div>
                  <BlogPost6Content />
                  <ArticleLike postSlug={postSlug} />
                </div>
              </div>
              
              <aside className="hidden lg:block">
                <TableOfContents />
              </aside>
            </div>

            <div className="max-w-4xl">
              <BlogPostFooter
                postUrl="https://mikrofinru.ru/blog/kakie-dokumenty-nuzhny-dlya-mikrozajma"
                postTitle="Какие документы нужны для микрозайма в МФО"
              />
              
              <RelatedPosts currentPostId={6} />
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost6;
