import Icon from "@/components/ui/icon";
import { Card } from "@/components/ui/card";

const WhatIsMicroloan = () => {
  const advantages = [
    {
      icon: "Clock",
      text: "Получение денег за 5-15 минут"
    },
    {
      icon: "FileText",
      text: "Минимальные требования к заемщику"
    },
    {
      icon: "Gift",
      text: "Возможность оформить первый займ без процентов"
    },
    {
      icon: "Globe",
      text: "Доступность 24/7 через интернет"
    },
    {
      icon: "ShieldOff",
      text: "Не требуется справка о доходах"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
            Что такое микрозайм и почему это выгодно?
          </h2>
          
          <Card className="p-8 md:p-10 mb-8 shadow-xl bg-gradient-to-br from-white to-primary/5 border-2">
            <p className="text-lg leading-relaxed text-foreground/90">
              Микрозайм — это небольшая денежная сумма, которую можно взять микрозайм онлайн за считанные минуты. В отличие от банковского кредита, здесь минимум документов, быстрое рассмотрение заявки и моментальное зачисление денег на карту.
            </p>
          </Card>

          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Главные преимущества микрозаймов:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <Icon name={advantage.icon as any} size={24} className="text-white" />
                  </div>
                  <p className="text-base font-medium pt-2">{advantage.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsMicroloan;
