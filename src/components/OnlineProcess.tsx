import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const OnlineProcess = () => {
  const documents = [
    { icon: "CreditCard", text: "Паспорт РФ (возраст от 18 лет)" },
    { icon: "Wallet", text: "Банковская карта любого банка" },
    { icon: "Smartphone", text: "Мобильный телефон" }
  ];

  const processSteps = [
    {
      title: "Выбор суммы и срока",
      description: "от 1000 до 100000 рублей на период от 7 дней до 1 года"
    },
    {
      title: "Заполнение заявки",
      description: "указываете личные данные и контакты"
    },
    {
      title: "Автоматическое решение",
      description: "система принимает решение за несколько минут"
    },
    {
      title: "Получение денег",
      description: "мгновенное зачисление на любую карту"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            Как взять микрозайм онлайн на карту за 5 минут
          </h2>
          
          <p className="text-lg leading-relaxed text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            «Взять микрозайм онлайн на карту» стало проще чем когда-либо. Весь процесс происходит дистанционно, не выходя из дома.
          </p>

          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Необходимые документы:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {documents.map((doc, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-primary/5"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                    <Icon name={doc.icon as any} size={32} className="text-white" />
                  </div>
                  <p className="font-semibold text-base">{doc.text}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Процесс оформления:
            </h3>
            
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary hidden md:block"></div>
              
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 font-bold text-white text-2xl shadow-xl relative z-10">
                      {index + 1}
                    </div>
                    <Card className="flex-1 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <h4 className="text-xl font-bold mb-2 text-primary">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineProcess;
