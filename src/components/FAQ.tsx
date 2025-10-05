import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Как быстро я получу деньги после одобрения?",
      answer: "После одобрения заявки деньги поступают на вашу карту в течение 5-15 минут. В редких случаях зачисление может занять до 24 часов в зависимости от банка-получателя и времени суток."
    },
    {
      question: "Какие документы нужны для оформления микрозайма?",
      answer: "Для оформления микрозайма онлайн вам потребуется только паспорт РФ и банковская карта любого банка. Не нужны справки о доходах, поручители, залог или другие документы. Весь процесс проходит дистанционно."
    },
    {
      question: "Можно ли получить микрозайм с плохой кредитной историей?",
      answer: "Да, получить микрозайм с плохой кредитной историей вполне реально. МФО рассматривают каждую заявку индивидуально и одобряют до 95% заявок даже при наличии просрочек в прошлом. Кредитная история не является критичным фактором."
    },
    {
      question: "Есть ли скрытые комиссии и платежи?",
      answer: "Нет, все условия микрозайма полностью прозрачны. Вы видите полную стоимость займа, процентную ставку и график платежей еще до подписания договора. Никаких скрытых комиссий, дополнительных платежей или неожиданных списаний."
    },
    {
      question: "Как работает первый займ под 0%?",
      answer: "Для новых клиентов действует специальное предложение — первый микрозайм без процентов на срок до 30 дней. Вы берете деньги и возвращаете ровно ту же сумму без переплат. Это отличная возможность познакомиться с услугой без рисков."
    },
    {
      question: "Что будет, если я не смогу вернуть займ вовремя?",
      answer: "Если возникли сложности с погашением, обязательно свяжитесь с МФО заранее. Мы можем предложить продление срока займа, реструктуризацию долга или индивидуальный график платежей. Главное — не игнорировать проблему и выйти на связь."
    },
    {
      question: "Безопасно ли оформлять микрозайм онлайн?",
      answer: "Абсолютно безопасно, если вы пользуетесь услугами проверенных МФО с лицензией ЦБ РФ. Мы используем банковский уровень шифрования данных SSL, а вся информация надежно защищена и не передается третьим лицам."
    },
    {
      question: "Можно ли взять несколько займов одновременно?",
      answer: "Вы можете оформить повторный займ после полного погашения текущего. Для постоянных клиентов доступны улучшенные условия: увеличенный лимит, сниженная ставка и бонусы программы лояльности."
    },
    {
      question: "Как происходит погашение микрозайма?",
      answer: "Погасить микрозайм можно несколькими способами: через личный кабинет на сайте МФО, банковским переводом, через терминалы оплаты или мобильное приложение. Досрочное погашение возможно в любой момент без штрафов и комиссий."
    },
    {
      question: "Какая максимальная сумма микрозайма доступна?",
      answer: "Для новых клиентов доступна сумма до 30 000 рублей. Для постоянных заемщиков с хорошей историей погашения лимит может быть увеличен до 100 000 рублей. Сумма зависит от вашей платежеспособности и кредитной истории."
    }
  ];

  useEffect(() => {
    const faqStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://mikrofinru.ru/#faq",
      "url": "https://mikrofinru.ru/#faq",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-structured-data';
    script.text = JSON.stringify(faqStructuredData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('faq-structured-data');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [faqs]);

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-background to-secondary/5" itemScope itemType="https://schema.org/FAQPage">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ответы на самые популярные вопросы о микрозаймах онлайн
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-none px-6 overflow-hidden"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary hover:no-underline py-6">
                  <span itemProp="name">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent 
                  className="text-muted-foreground leading-relaxed pb-6 text-base"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20 text-center">
            <h3 className="text-2xl font-bold mb-3">Не нашли ответ на свой вопрос?</h3>
            <p className="text-muted-foreground mb-6">
              Наша служба поддержки работает круглосуточно и готова помочь вам в любое время
            </p>
            <div className="flex justify-center">
              <a
                href="https://t.me/Microfinzaim"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                📱 Написать в Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;