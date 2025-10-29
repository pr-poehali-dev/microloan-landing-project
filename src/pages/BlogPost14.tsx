import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostFooter from "@/components/blog/BlogPostFooter";
import BlogPost14Content from "@/components/blog/BlogPost14Content";
import RelatedPosts from "@/components/blog/RelatedPosts";
import ArticleLike from "@/components/blog/ArticleLike";
import TableOfContents from "@/components/blog/TableOfContents";
import { useViewCounter } from "@/components/blog/useViewCounter";
import { useBlogPostMeta } from "@/components/blog/useBlogPostMeta";

const BlogPost14 = () => {
  const postSlug = 'kak-vybratsya-iz-dolgov-po-mikrozajmam';
  const viewCount = useViewCounter(postSlug);
  
  useBlogPostMeta({
    title: "Как выбраться из долгов по микрозаймам? Реальная история из Москвы",
    description: "История Тимофея из Москвы: как долг в 120 тыс. ₽ превратился в 450 тыс., и что помогло выйти из долговой ямы. Практические советы — как не попасть в капкан и погасить всё за год.",
    ogTitle: "Как выбраться из долгов по микрозаймам? Реальная история из Москвы",
    ogDescription: "История студента из Москвы: как долг в 120 тыс. ₽ превратился в 450 тыс., и что помогло выйти из долговой ямы за 1,2 года",
    ogImage: "https://cdn.poehali.dev/projects/e9a3fa0a-9ed6-45a2-8cf3-d090c021105f/files/6f0fa51d-2ea9-4195-978c-0d684229063f.jpg",
    twitterImage: "https://cdn.poehali.dev/projects/e9a3fa0a-9ed6-45a2-8cf3-d090c021105f/files/6f0fa51d-2ea9-4195-978c-0d684229063f.jpg",
    url: "https://mikrofinru.ru/blog/kak-vybratsya-iz-dolgov-po-mikrozajmam",
    datePublished: "2025-10-28",
    dateModified: "2025-10-28",
    category: "Советы",
    keywords: ["выход из долговой ямы", "как погасить микрозаймы", "долг по микрозаймам", "рефинансирование займов", "кредитные каникулы", "реструктуризация долга", "коллекторы что делать", "личный опыт долги"],
    wordCount: 3200,
    timeRequired: "PT16M",
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
        name: "Как выбраться из долгов по микрозаймам",
        item: "https://mikrofinru.ru/blog/kak-vybratsya-iz-dolgov-po-mikrozajmam"
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
                date="28 октября 2025"
                readTime="16 мин"
                viewCount={viewCount}
                title="Как выбраться из долгов по микрозаймам? Реальная история из Москвы"
                imageUrl="https://cdn.poehali.dev/projects/e9a3fa0a-9ed6-45a2-8cf3-d090c021105f/files/6f0fa51d-2ea9-4195-978c-0d684229063f.jpg"
                imageAlt="Выход из долговой ямы - реальная история студента"
                breadcrumbs={{
                  home: "Главная",
                  blog: "Блог",
                  current: "Выход из долгов"
                }}
              />
            </div>

            <div className="lg:hidden mb-6 max-w-4xl mx-auto">
              <TableOfContents />
            </div>

            <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-8 max-w-7xl mx-auto">
              <div className="max-w-4xl">
                <div className="bg-white rounded-b-2xl shadow-xl px-8 md:px-12 pb-4">
                  <BlogPost14Content />
                  <ArticleLike postSlug={postSlug} />
                  <BlogPostFooter
                    postUrl="https://mikrofinru.ru/blog/kak-vybratsya-iz-dolgov-po-mikrozajmam"
                    postTitle="Как выбраться из долгов по микрозаймам? Реальная история из Москвы"
                  />
                </div>
                
                <RelatedPosts currentPostUrl="/blog/kak-vybratsya-iz-dolgov-po-mikrozajmam" />
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

export default BlogPost14;