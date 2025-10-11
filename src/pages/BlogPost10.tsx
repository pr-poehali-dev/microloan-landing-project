import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostFooter from "@/components/blog/BlogPostFooter";
import BlogPost10Content from "@/components/blog/BlogPost10Content";
import RelatedPosts from "@/components/blog/RelatedPosts";
import ArticleLike from "@/components/blog/ArticleLike";
import TableOfContents from "@/components/blog/TableOfContents";
import { useViewCounter } from "@/components/blog/useViewCounter";
import { useBlogPostMeta } from "@/components/blog/useBlogPostMeta";

const BlogPost10 = () => {
  const postSlug = 'mfo-kredit-s-plohoj-kreditnoj-istoriej';
  const viewCount = useViewCounter(postSlug);
  
  useBlogPostMeta({
    title: "МФО-кредит с плохой кредитной историей: как я получил займ онлайн",
    description: "Личный опыт: как оформить МФО-кредит с плохой кредитной историей. Советы, ошибки, на что обратить внимание, чтобы получить онлайн-займ без отказа.",
    ogTitle: "Как я получил МФО-кредит с плохой кредитной историей: личный опыт",
    ogDescription: "Личный опыт: как оформить МФО-кредит с плохой кредитной историей. Советы, ошибки, на что обратить внимание, чтобы получить онлайн-займ без отказа.",
    ogImage: "https://mikrofinru.ru/img/421ccd30-dc7e-46c0-a5d1-9beed22a4725.jpg",
    twitterImage: "https://mikrofinru.ru/img/421ccd30-dc7e-46c0-a5d1-9beed22a4725.jpg",
    url: "https://mikrofinru.ru/blog/mfo-kredit-s-plohoj-kreditnoj-istoriej",
    datePublished: "2025-10-11",
    dateModified: "2025-10-11",
    category: "Советы",
    keywords: ["МФО-кредит с плохой кредитной историей", "микрозайм с плохой КИ", "онлайн-займ без отказа", "займ с просрочками", "как получить займ"],
    wordCount: 2200,
    timeRequired: "PT10M",
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
        name: "МФО-кредит с плохой кредитной историей",
        item: "https://mikrofinru.ru/blog/mfo-kredit-s-plohoj-kreditnoj-istoriej"
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
                readTime="10 мин"
                viewCount={viewCount}
                title="Как я получил МФО-кредит с плохой кредитной историей: личный опыт"
                imageUrl="/img/421ccd30-dc7e-46c0-a5d1-9beed22a4725.jpg"
                imageAlt="МФО-кредит с плохой кредитной историей"
                breadcrumbs={{
                  home: "Главная",
                  blog: "Блог",
                  current: "МФО-кредит с плохой кредитной историей"
                }}
              />
            </div>

            <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-8 max-w-7xl mx-auto">
              <div className="max-w-4xl">
                <div className="bg-white rounded-b-2xl shadow-xl px-8 md:px-12 pb-4">
                  <div className="lg:hidden mb-6">
                    <TableOfContents />
                  </div>
                  <BlogPost10Content />
                  <ArticleLike postSlug={postSlug} />
                  <BlogPostFooter />
                </div>
                
                <RelatedPosts currentPostUrl="/blog/mfo-kredit-s-plohoj-kreditnoj-istoriej" />
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

export default BlogPost10;
