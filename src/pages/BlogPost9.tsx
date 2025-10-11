import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostFooter from "@/components/blog/BlogPostFooter";
import BlogPost9Content from "@/components/blog/BlogPost9Content";
import RelatedPosts from "@/components/blog/RelatedPosts";
import ArticleLike from "@/components/blog/ArticleLike";
import TableOfContents from "@/components/blog/TableOfContents";
import { useViewCounter } from "@/components/blog/useViewCounter";
import { useBlogPostMeta } from "@/components/blog/useBlogPostMeta";

const BlogPost9 = () => {
  const postSlug = 'mfo-s-momentalnym-odobreniem';
  const viewCount = useViewCounter(postSlug);
  
  useBlogPostMeta({
    title: "МФО с моментальным одобрением — топ-5 лучших в 2025 году",
    description: "Сравнение 5 лучших МФО с моментальным одобрением. Условия, суммы, ставки и особенности. Выберите лучший онлайн-займ!",
    ogTitle: "МФО с моментальным одобрением — топ-5 лучших в 2025 году",
    ogDescription: "Сравнение 5 лучших МФО с моментальным одобрением. Условия, суммы, ставки и особенности. Выберите лучший онлайн-займ!",
    ogImage: "https://mikrofinru.ru/img/27a7256b-9570-4cf4-8afc-9ac4caa43c42.jpg",
    twitterImage: "https://mikrofinru.ru/img/27a7256b-9570-4cf4-8afc-9ac4caa43c42.jpg",
    url: "https://mikrofinru.ru/blog/mfo-s-momentalnym-odobreniem",
    datePublished: "2025-10-11",
    dateModified: "2025-10-11",
    category: "Советы",
    keywords: ["МФО с моментальным одобрением", "мгновенный займ", "быстрый онлайн-займ", "займ за 5 минут", "топ МФО"],
    wordCount: 1500,
    timeRequired: "PT8M",
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
        name: "МФО с моментальным одобрением",
        item: "https://mikrofinru.ru/blog/mfo-s-momentalnym-odobreniem"
      }
    ]
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      <main className="container mx-auto px-4 py-8 mt-16">
        <div className="max-w-4xl mx-auto">
          <BlogPostHeader
            title="МФО с моментальным одобрением — топ-5 лучших в 2025 году"
            date="11 октября 2025"
            readTime="8 мин"
            views={viewCount}
            coverImage="https://mikrofinru.ru/img/27a7256b-9570-4cf4-8afc-9ac4caa43c42.jpg"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-8 mt-8">
            <div>
              <BlogPost9Content />
              <ArticleLike postSlug={postSlug} />
              <BlogPostFooter />
            </div>
            
            <aside className="lg:sticky lg:top-24 h-fit">
              <TableOfContents />
            </aside>
          </div>
          
          <RelatedPosts currentPostUrl="/blog/mfo-s-momentalnym-odobreniem" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost9;
