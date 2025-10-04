import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostContent3 from "@/components/blog/BlogPost3Content";
import BlogPostFAQ from "@/components/blog/BlogPostFAQ";
import BlogPostFooter from "@/components/blog/BlogPostFooter";

const BlogPost3 = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-teal-50">
        <div className="container mx-auto px-4 py-8">
          <BlogPostHeader 
            category="Безопасность"
            date="4 октября 2024"
            readTime="12 мин"
            viewCount={null}
            title="Как выбрать надёжную МФО: полное руководство для безопасного получения займа"
            imageUrl="/img/670e08ee-8e93-4dc6-bd7b-47c842ffc93e.jpg"
            imageAlt="Как выбрать надёжную МФО"
            breadcrumbs={{
              home: "Главная",
              blog: "Блог",
              current: "Как выбрать надёжную МФО"
            }}
          />
        </div>
        <BlogPostContent3 />
        <BlogPostFAQ items={faqItems} />
        <BlogPostFooter postUrl={postUrl} postTitle={postTitle} />
      </div>
  );
};

export default BlogPost3;