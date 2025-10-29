import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostFooter from "@/components/blog/BlogPostFooter";
import BlogPost8Content from "@/components/blog/BlogPost8Content";
import RelatedPosts from "@/components/blog/RelatedPosts";
import ArticleLike from "@/components/blog/ArticleLike";
import TableOfContents from "@/components/blog/TableOfContents";
import { useViewCounter } from "@/components/blog/useViewCounter";
import { useBlogPostMeta } from "@/components/blog/useBlogPostMeta";

const BlogPost8 = () => {
  const postSlug = 'top-oshibok-pri-oformlenii-mikrozajmov';
  const viewCount = useViewCounter(postSlug);
  
  useBlogPostMeta({
    title: "Топ ошибок при оформлении микрозаймов: как избежать переплат и долгов",
    description: "5 главных ошибок заемщиков при оформлении микрозайма онлайн. Узнайте, как избежать скрытых комиссий, переплат и долговой ямы. Практические советы по выбору МФО и безопасному займу.",
    ogTitle: "Топ ошибок при оформлении микрозаймов: как избежать переплат и долгов",
    ogDescription: "5 главных ошибок заемщиков при оформлении микрозайма онлайн. Узнайте, как избежать скрытых комиссий, переплат и долговой ямы. Практические советы по выбору МФО и безопасному займу.",
    ogImage: "https://mikrofinru.ru/img/27a7256b-9570-4cf4-8afc-9ac4caa43c42.jpg",
    twitterImage: "https://mikrofinru.ru/img/27a7256b-9570-4cf4-8afc-9ac4caa43c42.jpg",
    url: "https://mikrofinru.ru/blog/top-oshibok-pri-oformlenii-mikrozajmov",
    datePublished: "2025-10-08",
    dateModified: "2025-10-08",
    category: "Советы",
    keywords: ["ошибки при оформлении микрозайма", "как избежать переплат", "безопасный займ", "выбор МФО", "долговая яма"],
    wordCount: 1800,
    timeRequired: "PT9M",
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
        name: "Топ ошибок при оформлении микрозаймов",
        item: "https://mikrofinru.ru/blog/top-oshibok-pri-oformlenii-mikrozajmov"
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
                date="8 октября 2025"
                readTime="9 мин"
                viewCount={viewCount}
                title="Топ ошибок при оформлении микрозаймов"
                imageUrl="/img/27a7256b-9570-4cf4-8afc-9ac4caa43c42.jpg"
                imageAlt="Топ ошибок при оформлении микрозаймов"
                breadcrumbs={{
                  home: "Главная",
                  blog: "Блог",
                  current: "Топ ошибок при оформлении микрозаймов"
                }}
              />
            </div>

            <div className="lg:hidden mb-6 max-w-4xl mx-auto">
              <TableOfContents />
            </div>

            <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-8 max-w-7xl mx-auto">
              <div className="max-w-4xl">
                <div className="bg-white rounded-b-2xl shadow-xl px-8 md:px-12 pb-4">
                  <BlogPost8Content />
                  <ArticleLike postSlug={postSlug} />
                </div>
              </div>
              
              <aside className="hidden lg:block">
                <TableOfContents />
              </aside>
            </div>

            <div className="max-w-4xl">
              <BlogPostFooter
                postUrl="https://mikrofinru.ru/blog/top-oshibok-pri-oformlenii-mikrozajmov"
                postTitle="Топ ошибок при оформлении микрозаймов"
              />
              
              <RelatedPosts currentPostId={8} />
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost8;