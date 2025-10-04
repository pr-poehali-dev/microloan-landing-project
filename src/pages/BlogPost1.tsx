import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const BlogPost1 = () => {
  const [viewCount, setViewCount] = useState<number | null>(null);
  const postSlug = 'chto-takoe-mikrozajmy';

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Increment view count
    const incrementView = async () => {
      try {
        const response = await fetch(`https://functions.poehali.dev/d23c653d-0229-4d5c-89fc-42c4195e0442?post_slug=${postSlug}`, {
          method: 'POST'
        });
        const data = await response.json();
        if (data.success) {
          setViewCount(data.view_count);
        }
      } catch (error) {
        console.error('Failed to increment view:', error);
      }
    };
    
    incrementView();
    
    document.title = "Что такое микрозаймы и как они работают: простыми словами о займах онлайн";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Что такое микрозаймы простыми словами: как работают займы онлайн, условия получения микрозайма на карту, процесс оформления, плюсы и минусы. Полное руководство для заемщиков.');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Что такое микрозаймы и как они работают: простыми словами о займах онлайн');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Что такое микрозаймы простыми словами: как работают займы онлайн, условия получения микрозайма на карту, процесс оформления, плюсы и минусы.');
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', 'https://mikrofinru.ru/img/b12b359a-2234-487b-a7ec-1a54f978f94d.jpg');
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', 'https://mikrofinru.ru/img/b12b359a-2234-487b-a7ec-1a54f978f94d.jpg');
    }

    // Add Schema.org structured data
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Что такое микрозаймы и как они работают",
      "description": "Что такое микрозаймы простыми словами: как работают займы онлайн, условия получения микрозайма на карту, процесс оформления, плюсы и минусы.",
      "image": "https://mikrofinru.ru/img/b12b359a-2234-487b-a7ec-1a54f978f94d.jpg",
      "author": {
        "@type": "Organization",
        "name": "МикроФин.ру"
      },
      "publisher": {
        "@type": "Organization",
        "name": "МикроФин.ру",
        "logo": {
          "@type": "ImageObject",
          "url": "https://mikrofinru.ru/logo.png"
        }
      },
      "datePublished": "2024-03-15",
      "dateModified": "2024-03-15",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://mikrofinru.ru/blog/chto-takoe-mikrozajmy"
      },
      "articleSection": "Советы",
      "keywords": ["микрозаймы", "микрозайм онлайн", "займ на карту", "МФО", "быстрый займ"],
      "wordCount": 2500,
      "timeRequired": "PT10M"
    });
    document.head.appendChild(schemaScript);

    // Add BreadcrumbList schema
    const breadcrumbSchema = document.createElement('script');
    breadcrumbSchema.type = 'application/ld+json';
    breadcrumbSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Главная",
          "item": "https://mikrofinru.ru/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Блог",
          "item": "https://mikrofinru.ru/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Что такое микрозаймы и как они работают",
          "item": "https://mikrofinru.ru/blog/chto-takoe-mikrozajmy"
        }
      ]
    });
    document.head.appendChild(breadcrumbSchema);

    return () => {
      // Cleanup schemas on unmount
      const scripts = document.head.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-8" aria-label="Навигационная цепочка">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
                <li>
                  <Link to="/" className="hover:text-primary transition-colors">
                    Главная
                  </Link>
                </li>
                <li>
                  <Icon name="ChevronRight" size={16} />
                </li>
                <li>
                  <Link to="/blog" className="hover:text-primary transition-colors">
                    Блог
                  </Link>
                </li>
                <li>
                  <Icon name="ChevronRight" size={16} />
                </li>
                <li className="text-foreground font-medium">
                  Что такое микрозаймы и как они работают
                </li>
              </ol>
            </nav>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in">
              <div className="relative w-full h-64 md:h-80 bg-gradient-to-br from-orange-100 via-pink-50 to-teal-50 flex items-center justify-center">
                <img 
                  src="/img/b12b359a-2234-487b-a7ec-1a54f978f94d.jpg" 
                  alt="Что такое микрозаймы и как они работают - обложка статьи"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-primary shadow-lg">
                    Советы
                  </span>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground flex-wrap">
                  <div className="flex items-center gap-1">
                    <Icon name="Calendar" size={16} />
                    <span>15 марта 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={16} />
                    <span>10 мин</span>
                  </div>
                  {viewCount !== null && (
                    <div className="flex items-center gap-1">
                      <Icon name="Eye" size={16} />
                      <span>{viewCount.toLocaleString('ru-RU')} просмотров</span>
                    </div>
                  )}
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
                  Что такое микрозаймы и как они работают
                </h1>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  В современной жизни ситуации, когда срочно нужны деньги до зарплаты, возникают у каждого. Сломалась стиральная машина, неожиданный счет за коммунальные услуги или просто не хватает средств на неотложные покупки – знакомо? Именно для таких случаев существуют микрозаймы. За последние годы они стали одним из самых популярных способов получить быстрые деньги, но важно понимать, как они устроены и какие подводные камни могут ждать заемщика.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">
                  Что такое микрозайм
                </h2>
                
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Что такое микрозаймы простыми словами? Это небольшая сумма денег (обычно от 1 000 до 100 000 рублей), которую можно получить очень быстро и на короткий срок. Представьте, что вы занимаете деньги у друга, но вместо друга выступает микрофинансовая организация (МФО).
                </p>

                <p className="text-foreground/80 leading-relaxed mb-4 font-semibold">
                  Главные отличия микрозайма от банковского кредита:
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex gap-3 text-foreground/80">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span><strong>Скорость получения:</strong> микрозайм можно получить за 15-30 минут, кредит в банке – за несколько дней</span>
                  </li>
                  <li className="flex gap-3 text-foreground/80">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span><strong>Документы:</strong> для микрозайма нужен только паспорт, для кредита – справки о доходах и другие документы</span>
                  </li>
                  <li className="flex gap-3 text-foreground/80">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span><strong>Сумма:</strong> микрозаймы обычно до 100 000 рублей, кредиты могут быть на миллионы</span>
                  </li>
                  <li className="flex gap-3 text-foreground/80">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span><strong>Срок:</strong> микрозаймы выдаются на 5-30 дней, кредиты – на месяцы и годы</span>
                  </li>
                  <li className="flex gap-3 text-foreground/80">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span><strong>Проценты:</strong> у микрозаймов они выше, но срок короче</span>
                  </li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">
                  Как работают микрозаймы
                </h2>

                <p className="text-foreground/80 leading-relaxed mb-6">
                  Процесс получения микрозайма выглядит предельно просто:
                </p>

                <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-foreground">
                  Шаг 1. Подача заявки
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Заходите на сайт МФО, заполняете простую анкету: ФИО, номер телефона, паспортные данные, сумма и срок займа. Многие компании предлагают микрозайм онлайн – весь процесс происходит через интернет.
                </p>

                <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-foreground">
                  Шаг 2. Рассмотрение заявки
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  МФО проверяет ваши данные и кредитную историю. Это занимает от 5 до 30 минут. Даже если у вас плохая кредитная история, шансы на одобрение остаются высокими.
                </p>

                <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-foreground">
                  Шаг 3. Одобрение и получение денег
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  При одобрении вы получаете микрозайм на карту в течение нескольких минут, либо можете забрать наличные в офисе компании.
                </p>

                <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-foreground">
                  Сроки и проценты
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Микрозаймы выдаются на срок от 5 до 30 дней. Проценты рассчитываются за каждый день пользования деньгами. Например:
                </p>

                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 mb-6 border-l-4 border-primary">
                  <ul className="space-y-2 text-foreground/80">
                    <li>Взяли 10 000 рублей на 14 дней под 1% в день</li>
                    <li>Переплата составит: 10 000 × 1% × 14 дней = 1 400 рублей</li>
                    <li className="font-semibold">Вернуть нужно: 11 400 рублей</li>
                  </ul>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-xl mb-8">
                  <p className="text-orange-900 font-semibold mb-2 flex items-center gap-2">
                    <Icon name="AlertTriangle" size={20} />
                    Важно!
                  </p>
                  <p className="text-orange-800">
                    Проценты по микрозаймам действительно высокие. Годовая ставка может достигать 365-700%. Но учитывайте, что берете деньги на очень короткий срок.
                  </p>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">
                  Условия получения микрозайма
                </h2>

                <p className="text-foreground/80 leading-relaxed mb-4">
                  Условия получения микрозайма максимально простые:
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex gap-3 text-foreground/80">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span><strong>Возраст:</strong> от 18 до 70 лет (в зависимости от МФО)</span>
                  </li>
                  <li className="flex gap-3 text-foreground/80">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span><strong>Гражданство:</strong> РФ</span>
                  </li>
                  <li className="flex gap-3 text-foreground/80">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span><strong>Документы:</strong> только паспорт</span>
                  </li>
                  <li className="flex gap-3 text-foreground/80">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span><strong>Банковская карта:</strong> нужна для получения денег онлайн</span>
                  </li>
                  <li className="flex gap-3 text-foreground/80">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span><strong>Мобильный телефон:</strong> для связи и подтверждения заявки</span>
                  </li>
                </ul>

                <p className="text-foreground/80 leading-relaxed mb-8 font-semibold text-lg">
                  Справки о доходах не требуются! Это главное преимущество микрозаймов для людей с неофициальным заработком, студентов, пенсионеров.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">
                  Плюсы и минусы микрозаймов
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                    <h3 className="text-xl font-bold mb-4 text-green-900 flex items-center gap-2">
                      <Icon name="ThumbsUp" size={24} />
                      Плюсы ✓
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex gap-2 text-green-800">
                        <Icon name="Check" className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                        <span>Получение денег за 15-30 минут</span>
                      </li>
                      <li className="flex gap-2 text-green-800">
                        <Icon name="Check" className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                        <span>Минимум документов</span>
                      </li>
                      <li className="flex gap-2 text-green-800">
                        <Icon name="Check" className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                        <span>Одобрение даже с плохой кредитной историей</span>
                      </li>
                      <li className="flex gap-2 text-green-800">
                        <Icon name="Check" className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                        <span>Не нужно искать поручителей</span>
                      </li>
                      <li className="flex gap-2 text-green-800">
                        <Icon name="Check" className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                        <span>Можно получить круглосуточно онлайн</span>
                      </li>
                      <li className="flex gap-2 text-green-800">
                        <Icon name="Check" className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                        <span>Первый займ часто под 0% или по льготной ставке</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
                    <h3 className="text-xl font-bold mb-4 text-red-900 flex items-center gap-2">
                      <Icon name="ThumbsDown" size={24} />
                      Минусы ✗
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex gap-2 text-red-800">
                        <Icon name="X" className="text-red-600 flex-shrink-0 mt-0.5" size={18} />
                        <span>Очень высокие проценты</span>
                      </li>
                      <li className="flex gap-2 text-red-800">
                        <Icon name="X" className="text-red-600 flex-shrink-0 mt-0.5" size={18} />
                        <span>Короткий срок возврата</span>
                      </li>
                      <li className="flex gap-2 text-red-800">
                        <Icon name="X" className="text-red-600 flex-shrink-0 mt-0.5" size={18} />
                        <span>Риск попасть в долговую яму</span>
                      </li>
                      <li className="flex gap-2 text-red-800">
                        <Icon name="X" className="text-red-600 flex-shrink-0 mt-0.5" size={18} />
                        <span>Высокие штрафы за просрочку</span>
                      </li>
                      <li className="flex gap-2 text-red-800">
                        <Icon name="X" className="text-red-600 flex-shrink-0 mt-0.5" size={18} />
                        <span>Небольшие суммы</span>
                      </li>
                      <li className="flex gap-2 text-red-800">
                        <Icon name="X" className="text-red-600 flex-shrink-0 mt-0.5" size={18} />
                        <span>Влияние на кредитную историю при неуплате</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">
                  Советы заемщикам
                </h2>

                <p className="text-foreground/80 leading-relaxed mb-6">
                  Чтобы микрозайм стал помощником, а не проблемой, следуйте простым правилам:
                </p>

                <div className="space-y-6 mb-8">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-2 text-blue-900">
                      1. Берите только при крайней необходимости
                    </h3>
                    <p className="text-blue-800">
                      Микрозайм – это экстренная помощь, а не способ жить от зарплаты до зарплаты.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-2 text-blue-900">
                      2. Сравнивайте условия разных МФО
                    </h3>
                    <p className="text-blue-800">
                      Ставки могут отличаться в 2-3 раза. Изучите предложения минимум 3-5 компаний.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-2 text-blue-900">
                      3. Рассчитывайте свои возможности
                    </h3>
                    <p className="text-blue-800">
                      Берите столько, сколько точно сможете вернуть в срок. Лучше взять меньше, чем потом доплачивать штрафы.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-2 text-blue-900">
                      4. Погашайте вовремя
                    </h3>
                    <p className="text-blue-800">
                      Даже один день просрочки может увеличить долг на 10-20%. Ставьте напоминания в телефоне.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-2 text-blue-900">
                      5. Изучите договор
                    </h3>
                    <p className="text-blue-800">
                      Обращайте внимание на размер штрафов, способы погашения, возможность досрочного возврата.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 mb-8 border-l-4 border-purple-500">
                  <p className="text-purple-900 font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Lightbulb" size={20} />
                    Пример из жизни:
                  </p>
                  <p className="text-purple-800">
                    Анна взяла 15 000 рублей на ремонт холодильника на 10 дней под 1,5% в день. Переплата составила 2 250 рублей. Она вернула долг вовремя и решила проблему. Но если бы она просрочила на неделю, переплата увеличилась бы до 4-5 тысяч рублей.
                  </p>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">
                  Заключение
                </h2>

                <p className="text-foreground/80 leading-relaxed mb-6">
                  Микрозайм может стать полезным финансовым инструментом для решения срочных вопросов, если пользоваться им ответственно. Это быстрый способ получить нужную сумму без походов в банк и сбора справок. Однако высокие проценты и короткие сроки требуют четкого понимания своих финансовых возможностей.
                </p>

                <p className="text-foreground/80 leading-relaxed mb-6">
                  Помните: микрозайм – это краткосрочное решение для экстренных ситуаций. Используйте его разумно, всегда возвращайте деньги в срок, и тогда этот финансовый инструмент станет вашим надежным помощником, а не источником проблем.
                </p>

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center mb-8">
                  <p className="text-xl font-bold text-foreground">
                    Главное правило: занимаете сегодня – возвращаете завтра. Именно для этого созданы микрозаймы.
                  </p>
                </div>
              </div>
              </div>

              <div className="mt-12 pt-8 border-t px-8 md:px-12 pb-8">
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4 text-foreground">Поделиться статьей:</h3>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`https://vk.com/share.php?url=${encodeURIComponent('https://mikrofinru.ru/blog/chto-takoe-mikrozajmy')}&title=${encodeURIComponent('Что такое микрозаймы и как они работают')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#0077FF] hover:bg-[#0066DD] text-white rounded-lg transition-all hover:scale-105 font-medium"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.45 14.98c-.15.4-.78.76-1.63.76-.57 0-1.27-.13-2.1-.52-1.04-.48-2.06-1.38-2.87-2.53-.47-.67-.82-1.33-1.03-1.93-.18-.49-.18-.87-.04-1.09.15-.24.42-.36.81-.36.27 0 .52.07.76.2.41.22.69.58.87 1.07.2.54.42 1.02.64 1.43.41.75.86 1.37 1.34 1.85.35.35.69.58 1.02.68.24.08.44.08.58 0 .19-.1.29-.33.29-.67v-2.42c0-.28-.02-.51-.05-.68-.03-.15-.09-.29-.18-.4-.17-.21-.48-.32-.92-.32h-.45c-.21 0-.32-.13-.32-.38 0-.13.06-.24.18-.32.29-.2.58-.3.87-.3h2.54c.48 0 .82.1 1.03.31.2.2.31.54.31 1.02v3.17c0 .34.1.57.29.67.14.08.34.08.58 0 .33-.1.67-.33 1.02-.68.48-.48.93-1.1 1.34-1.85.22-.41.44-.89.64-1.43.18-.49.46-.85.87-1.07.24-.13.49-.2.76-.2.39 0 .66.12.81.36.14.22.14.6-.04 1.09-.21.6-.56 1.26-1.03 1.93-.81 1.15-1.83 2.05-2.87 2.53-.83.39-1.53.52-2.1.52-.85 0-1.48-.36-1.63-.76z"/>
                      </svg>
                      ВКонтакте
                    </a>

                    <a
                      href={`https://t.me/share/url?url=${encodeURIComponent('https://mikrofinru.ru/blog/chto-takoe-mikrozajmy')}&text=${encodeURIComponent('Что такое микрозаймы и как они работают')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#0088CC] hover:bg-[#0077BB] text-white rounded-lg transition-all hover:scale-105 font-medium"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                      </svg>
                      Telegram
                    </a>

                    <a
                      href={`https://wa.me/?text=${encodeURIComponent('Что такое микрозаймы и как они работают https://mikrofinru.ru/blog/chto-takoe-mikrozajmy')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-lg transition-all hover:scale-105 font-medium"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp
                    </a>

                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://mikrofinru.ru/blog/chto-takoe-mikrozajmy')}&text=${encodeURIComponent('Что такое микрозаймы и как они работают')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] hover:bg-[#1A91DA] text-white rounded-lg transition-all hover:scale-105 font-medium"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                      Twitter
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <Link to="/blog">
                    <Button variant="outline" className="gap-2">
                      <Icon name="ArrowLeft" size={20} />
                      Все статьи блога
                    </Button>
                  </Link>
                  
                  <Link to="/">
                    <Button className="bg-gradient-to-r from-orange-400 via-pink-400 to-teal-400 gap-2">
                      Получить займ сейчас
                      <Icon name="Sparkles" size={20} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost1;