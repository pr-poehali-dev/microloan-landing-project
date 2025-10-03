import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Как быстро я получу деньги?",
      answer: "После одобрения заявки деньги поступают на вашу карту в течение 5-15 минут. В некоторых случаях зачисление может занять до 24 часов в зависимости от банка-получателя."
    },
    {
      question: "Какие документы нужны для получения займа?",
      answer: "Для оформления займа вам потребуется только паспорт РФ. Не нужны справки о доходах, поручители или залог. Весь процесс проходит онлайн."
    },
    {
      question: "Можно ли получить займ с плохой кредитной историей?",
      answer: "Да, мы работаем с клиентами с любой кредитной историей. Каждая заявка рассматривается индивидуально с учетом множества факторов, а не только кредитной истории."
    },
    {
      question: "Как происходит погашение займа?",
      answer: "Вы можете погасить займ досрочно или в установленный срок любым удобным способом: через личный кабинет, банковским переводом или через терминалы оплаты. Досрочное погашение без комиссий."
    },
    {
      question: "Что будет, если я не смогу вернуть займ вовремя?",
      answer: "Если возникли сложности с погашением, свяжитесь с нами заранее. Мы можем предложить реструктуризацию долга или продление срока займа. Работаем с каждым клиентом индивидуально."
    },
    {
      question: "Безопасно ли оставлять свои данные?",
      answer: "Абсолютно безопасно. Мы используем банковский уровень шифрования данных. Ваша информация защищена протоколом SSL и не передается третьим лицам."
    },
    {
      question: "Можно ли взять несколько займов одновременно?",
      answer: "Вы можете оформить повторный займ после полного погашения текущего. Для постоянных клиентов действуют улучшенные условия и увеличенный лимит."
    },
    {
      question: "Есть ли скрытые комиссии?",
      answer: "Нет, все условия прозрачны. Вы видите полную стоимость займа еще до подписания договора. Никаких скрытых платежей и дополнительных комиссий."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Вопросы и ответы
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о наших микрозаймах
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-none px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Не нашли ответ на свой вопрос?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:88001234567"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span>📞</span>
              8 800 123-45-67
            </a>
            <a
              href="mailto:support@microloan.ru"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/5 transition-all duration-300"
            >
              <span>✉️</span>
              support@microloan.ru
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
