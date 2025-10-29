import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostFooter from "@/components/blog/BlogPostFooter";
import BlogPost13Content from "@/components/blog/BlogPost13Content";
import RelatedPosts from "@/components/blog/RelatedPosts";
import ArticleLike from "@/components/blog/ArticleLike";
import TableOfContents from "@/components/blog/TableOfContents";
import { useViewCounter } from "@/components/blog/useViewCounter";
import { useBlogPostMeta } from "@/components/blog/useBlogPostMeta";

const BlogPost13 = () => {
  const postSlug = 'zajm-30000-rublej-srochno';
  const viewCount = useViewCounter(postSlug);
  
  useBlogPostMeta({
    title: "Займ 30 000 рублей на карту срочно — где одобрят за 5 минут в 2025",
    description: "Нужны срочно 30 тысяч рублей? ТОП-5 МФО с моментальным одобрением, без отказа и проверки КИ. Сравниваем условия, ставки и способы получения денег за 5 минут на карту.",
    ogTitle: "Займ 30 000 рублей на карту срочно — где одобрят за 5 минут",
    ogDescription: "ТОП-5 МФО с моментальным одобрением займа 30000 рублей. Сравниваем условия, ставки и способы получения денег за 5 минут",
    ogImage: "https://cdn.poehali.dev/files/9080e042-ac90-4dba-9904-cf9d82114dd0.jpg",
    twitterImage: "https://cdn.poehali.dev/files/9080e042-ac90-4dba-9904-cf9d82114dd0.jpg",
    url: "https://mikrofinru.ru/blog/zajm-30000-rublej-srochno",
    datePublished: "2025-10-28",
    dateModified: "2025-10-28",
    category: "Советы",
    keywords: ["займ 30000 рублей", "займ 30 тысяч на карту", "срочный займ 30000", "микрозайм 30000 рублей", "где взять 30000 срочно", "займ без отказа 30000", "МФО 30000 рублей", "быстрый займ 30 тысяч", "онлайн займ 30000"],
    wordCount: 2500,
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
        name: "Займ 30 000 рублей срочно",
        item: "https://mikrofinru.ru/blog/zajm-30000-rublej-srochno"
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
                readTime="12 мин"
                viewCount={viewCount}
                title="Займ 30 000 рублей на карту срочно — где одобрят за 5 минут"
                imageUrl="https://cdn.poehali.dev/files/9080e042-ac90-4dba-9904-cf9d82114dd0.jpg"
                imageAlt="30000 рублей на карту Сбербанка - быстрый займ онлайн"
                breadcrumbs={{
                  home: "Главная",
                  blog: "Блог",
                  current: "Займ 30 000 рублей"
                }}
              />
            </div>

            <div className="lg:hidden mb-6 max-w-4xl mx-auto">
              <TableOfContents />
            </div>

            <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-8 max-w-7xl mx-auto">
              <div className="max-w-4xl">
                <div className="bg-white rounded-b-2xl shadow-xl px-8 md:px-12 pb-4">
                  <BlogPost13Content />
                  <ArticleLike postSlug={postSlug} />
                  <BlogPostFooter
                    postUrl="https://mikrofinru.ru/blog/zajm-30000-rublej-srochno"
                    postTitle="Займ 30 000 рублей на карту срочно — где одобрят за 5 минут в 2025"
                  />
                </div>
                
                <RelatedPosts currentPostUrl="/blog/zajm-30000-rublej-srochno" />
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

export default BlogPost13;