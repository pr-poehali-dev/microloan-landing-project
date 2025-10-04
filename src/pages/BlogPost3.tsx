import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostContent3 from "@/components/blog/BlogPost3Content";
import BlogPostFAQ from "@/components/blog/BlogPostFAQ";
import BlogPostFooter from "@/components/blog/BlogPostFooter";
import RelatedPosts from "@/components/blog/RelatedPosts";
import ArticleLike from "@/components/blog/ArticleLike";
import { useViewCounter } from "@/components/blog/useViewCounter";
import { useBlogPostMeta } from "@/components/blog/useBlogPostMeta";

const BlogPost3 = () => {
  const postSlug = 'kak-vybrat-nadezhnuyu-mfo';
  const viewCount = useViewCounter(postSlug);
  const postUrl = `${window.location.origin}/blog/kak-vybrat-nadezhnuyu-mfo`;
  const postTitle = "Как выбрать надёжную МФО: проверенная инструкция";

  const faqItems = [
    {
      question: "Как проверить МФО на легальность?",
      answer: "Проверить МФО можно на официальном сайте Центрального банка РФ (cbr.ru) в разделе 'Реестр субъектов финансового рынка'. Все легальные микрофинансовые организации обязаны быть зарегистрированы в этом реестре."
    },
    {
      question: "Какие признаки указывают на мошенническую МФО?",
      answer: "Основные признаки мошенников: отсутствие в реестре ЦБ РФ, требование предоплаты, обещание 'гарантированного одобрения' всем, отсутствие официального сайта с реквизитами, агрессивная реклама с нереалистичными условиями."
    },
    {
      question: "Что делать, если МФО нарушает условия договора?",
      answer: "Сначала направьте письменную претензию в саму МФО. Если проблема не решается — обратитесь в Банк России, Роспотребнадзор или в суд. Сохраняйте все документы и переписку как доказательства."
    },
    {
      question: "Обязательно ли МФО должна иметь физический офис?",
      answer: "Законодательство не требует обязательного наличия офиса для приёма клиентов, но у легальной МФО должен быть юридический адрес, указанный в реестре ЦБ РФ. Наличие физического офиса — дополнительный плюс к надёжности."
    },
    {
      question: "Как проверить отзывы о МФО?",
      answer: "Ищите отзывы на независимых платформах: Банки.ру, Сравни.ру, форумах и в социальных сетях. Обращайте внимание на детальные отзывы с конкретными фактами. Избегайте сайтов с только положительными или только отрицательными отзывами."
    }
  ];

  useBlogPostMeta({
    title: "Как выбрать надёжную МФО: полное руководство для безопасного получения займа",
    description: "✅ Пошаговая инструкция как выбрать надёжную МФО и проверить микрофинансовую организацию. Избегайте мошенников - проверяйте МФО в реестре ЦБ РФ",
    ogTitle: "Как выбрать надёжную МФО: проверенная инструкция",
    ogDescription: "✅ Пошаговая инструкция как выбрать надёжную МФО и проверить микрофинансовую организацию. Избегайте мошенников - проверяйте МФО в реестре ЦБ РФ",
    ogImage: "https://mikrofinru.ru/img/75826ede-4073-4327-905a-4148e15193c9.jpg",
    twitterImage: "https://mikrofinru.ru/img/75826ede-4073-4327-905a-4148e15193c9.jpg",
    url: "https://mikrofinru.ru/blog/kak-vybrat-nadezhnuyu-mfo",
    datePublished: "2025-10-04",
    dateModified: "2025-10-04",
    category: "Безопасность",
    keywords: ["как выбрать МФО", "проверить МФО", "надёжная МФО", "реестр ЦБ РФ"],
    wordCount: 2800,
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
        name: "Как выбрать надёжную МФО",
        item: "https://mikrofinru.ru/blog/kak-vybrat-nadezhnuyu-mfo"
      }
    ],
    faqItems: faqItems
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <BlogPostHeader 
              category="Безопасность"
              date="4 октября 2025"
              readTime="12 мин"
              viewCount={viewCount}
              title="Как выбрать надёжную МФО: полное руководство для безопасного получения займа"
              imageUrl="/img/75826ede-4073-4327-905a-4148e15193c9.jpg"
              imageAlt="Как выбрать надёжную МФО"
              breadcrumbs={{
                home: "Главная",
                blog: "Блог",
                current: "Как выбрать надёжную МФО"
              }}
            />

            <div className="bg-white rounded-b-2xl shadow-xl px-8 md:px-12 pb-4">
              <BlogPostContent3 />
              <BlogPostFAQ items={faqItems} />
              <ArticleLike postSlug={postSlug} />
            </div>

            <BlogPostFooter postUrl={postUrl} postTitle={postTitle} />
            
            <RelatedPosts currentPostId={3} />
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost3;