import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostFooter from "@/components/blog/BlogPostFooter";
import BlogPost2Content from "@/components/blog/BlogPost2Content";
import { useViewCounter } from "@/components/blog/useViewCounter";
import { useBlogPostMeta } from "@/components/blog/useBlogPostMeta";

const BlogPost2 = () => {
  const postSlug = 'raznitsa-mikrozajm-kredit-karta';
  const viewCount = useViewCounter(postSlug);
  
  useBlogPostMeta({
    title: "Разница между микрозаймом, кредитом и кредитной картой 2025 — что выгоднее выбрать",
    description: "Подробное сравнение микрозайма, потребительского кредита и кредитной карты: проценты, сроки, документы, требования. Таблица различий, примеры расчетов и советы по выбору оптимального варианта для разных ситуаций.",
    ogTitle: "Микрозайм vs кредит vs кредитная карта — полное сравнение 2025",
    ogDescription: "Детальное сравнение финансовых инструментов: микрозаймы (1-2% в день), кредиты (6-25% годовых), кредитные карты (льготный период). Узнайте, что выгоднее в вашей ситуации.",
    ogImage: "https://mikrofinru.ru/img/421ccd30-dc7e-46c0-a5d1-9beed22a4725.jpg",
    twitterImage: "https://mikrofinru.ru/img/421ccd30-dc7e-46c0-a5d1-9beed22a4725.jpg",
    url: "https://mikrofinru.ru/blog/raznitsa-mikrozajm-kredit-karta",
    datePublished: "2025-10-04",
    dateModified: "2025-10-04",
    category: "Советы",
    keywords: ["микрозайм", "потребительский кредит", "кредитная карта", "разница", "сравнение"],
    wordCount: 3200,
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
        name: "В чём разница между микрозаймом, потребкредитом и кредитной картой",
        item: "https://mikrofinru.ru/blog/raznitsa-mikrozajm-kredit-karta"
      }
    ],
    faqItems: []
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <BlogPostHeader
              category="Советы"
              date="4 октября 2025"
              readTime="12 мин"
              viewCount={viewCount}
              title="В чём разница между микрозаймом, потребкредитом и кредитной картой"
              imageUrl="/img/421ccd30-dc7e-46c0-a5d1-9beed22a4725.jpg"
              imageAlt="В чём разница между микрозаймом, потребкредитом и кредитной картой - обложка статьи"
              breadcrumbs={{
                home: "Главная",
                blog: "Блог",
                current: "В чём разница между микрозаймом, потребкредитом и кредитной картой"
              }}
            />

            <div className="bg-white rounded-b-2xl shadow-xl px-8 md:px-12 pb-4">
              <BlogPost2Content />
            </div>

            <BlogPostFooter
              postUrl="https://mikrofinru.ru/blog/raznitsa-mikrozajm-kredit-karta"
              postTitle="В чём разница между микрозаймом, потребкредитом и кредитной картой"
            />
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost2;