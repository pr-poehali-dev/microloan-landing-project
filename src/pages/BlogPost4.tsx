import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostFooter from "@/components/blog/BlogPostFooter";
import BlogPost4Content from "@/components/blog/BlogPost4Content";
import BlogPostFAQ from "@/components/blog/BlogPostFAQ";
import { useViewCounter } from "@/components/blog/useViewCounter";
import { useBlogPostMeta } from "@/components/blog/useBlogPostMeta";

const BlogPost4 = () => {
  const postSlug = 'kak-rasschitat-pereplatu-po-mikrozajmu';
  const viewCount = useViewCounter(postSlug);
  
  const faqItems = [
    {
      question: "Как рассчитать переплату по микрозайму?",
      answer: "Используйте формулу: Переплата = Сумма займа × Процент в день × Количество дней. Например, для займа 10 000 рублей на 20 дней под 1% в день: 10 000 × 0,01 × 20 = 2 000 рублей переплаты."
    },
    {
      question: "Что входит в переплату по микрозайму?",
      answer: "Переплата состоит из: процентов за пользование займом, комиссий за оформление и обслуживание, штрафов за просрочку (если есть), стоимости дополнительных услуг (страховки, SMS и т.д.)."
    },
    {
      question: "Можно ли уменьшить переплату по микрозайму?",
      answer: "Да, есть несколько способов: выбирайте МФО с акцией 'первый займ под 0%', погашайте займ досрочно (каждый день экономит проценты), сравнивайте условия разных МФО, откажитесь от необязательных услуг."
    },
    {
      question: "Сколько составляет переплата по микрозайму в процентах?",
      answer: "Стандартная ставка 0,8-1,5% в день, что составляет 292-548% годовых. Например, при ставке 1% в день на 30 дней переплата составит 30% от суммы займа (10 000 рублей займ = 3 000 рублей переплата)."
    },
    {
      question: "Пересчитывается ли переплата при досрочном погашении?",
      answer: "Да, при досрочном погашении вы платите проценты только за фактические дни пользования займом. Если взяли на 25 дней, а вернули через 10 — заплатите проценты только за 10 дней, что существенно экономит деньги."
    }
  ];
  
  useBlogPostMeta({
    title: "Как рассчитать переплату по микрозайму: формула и примеры",
    description: "📊 Простая формула расчёта переплаты по микрозайму с примерами. Узнайте реальную сумму возврата и проценты по микрозайму заранее. Калькулятор в статье",
    ogTitle: "Как рассчитать переплату по микрозайму: формула и примеры",
    ogDescription: "📊 Простая формула расчёта переплаты по микрозайму с примерами. Узнайте реальную сумму возврата и проценты по микрозайму заранее",
    ogImage: "https://mikrofinru.ru/img/27a7256b-9570-4cf4-8afc-9ac4caa43c42.jpg",
    twitterImage: "https://mikrofinru.ru/img/27a7256b-9570-4cf4-8afc-9ac4caa43c42.jpg",
    url: "https://mikrofinru.ru/blog/kak-rasschitat-pereplatu-po-mikrozajmu",
    datePublished: "2025-10-04",
    dateModified: "2025-10-04",
    category: "Советы",
    keywords: ["переплата по микрозайму", "как рассчитать микрозайм", "проценты по микрозайму", "формула расчета займа", "калькулятор микрозайма"],
    wordCount: 2900,
    timeRequired: "PT13M",
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
        name: "Как рассчитать переплату по микрозайму",
        item: "https://mikrofinru.ru/blog/kak-rasschitat-pereplatu-po-mikrozajmu"
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
              category="Советы"
              date="4 октября 2025"
              readTime="13 мин"
              viewCount={viewCount}
              title="Как рассчитать переплату по микрозайму"
              imageUrl="/img/27a7256b-9570-4cf4-8afc-9ac4caa43c42.jpg"
              imageAlt="Как рассчитать переплату по микрозайму"
              breadcrumbs={{
                home: "Главная",
                blog: "Блог",
                current: "Как рассчитать переплату по микрозайму"
              }}
            />

            <div className="bg-white rounded-b-2xl shadow-xl px-8 md:px-12 pb-4">
              <BlogPost4Content />
              <BlogPostFAQ items={faqItems} />
            </div>

            <BlogPostFooter
              postUrl="https://mikrofinru.ru/blog/kak-rasschitat-pereplatu-po-mikrozajmu"
              postTitle="Как рассчитать переплату по микрозайму"
            />
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost4;
