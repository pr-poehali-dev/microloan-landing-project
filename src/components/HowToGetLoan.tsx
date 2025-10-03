import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const HowToGetLoan = () => {
  const steps = [
    "Выберите надежную МФО из нашего рейтинга",
    "Заполните простую онлайн-заявку (3-5 минут)",
    "Дождитесь одобрения (обычно 1-10 минут)",
    "Получите деньги на карту мгновенно"
  ];

  const badHistoryPrograms = [
    "Микрозайм без отказа — одобрение до 95% заявок",
    "Займы с текущими просрочками",
    "Рефинансирование существующих долгов"
  ];

  return (
    <section id="how-to-get" className="py-20 bg-gradient-to-b from-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            Где взять микрозайм без отказа: пошаговая инструкция
          </h2>
          
          <p className="text-lg leading-relaxed text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Многие люди задаются вопросом: «где взять микрозайм» с максимальной вероятностью одобрения? Современные МФО предлагают различные программы, адаптированные под разные жизненные ситуации.
          </p>

          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Для новичков: первый микрозайм без процентов
            </h3>
            
            <Card className="p-8 mb-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
              <p className="text-lg leading-relaxed">
                Если вы впервые обращаетесь за микрозаймом, то можете взять микрозайм без процентов на срок до 30 дней. Это отличная возможность решить временные финансовые трудности без переплат.
              </p>
            </Card>

            <h4 className="text-xl font-semibold mb-6 text-primary">
              Как оформить первый займ:
            </h4>
            
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:translate-x-2"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="text-base pt-1.5">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Микрозаймы с плохой кредитной историей
            </h3>
            
            <Card className="p-8 mb-8 bg-gradient-to-br from-secondary/10 to-primary/10 border-2 border-secondary/20">
              <p className="text-lg leading-relaxed">
                «Взять микрозайм с плохой кредитной историей» — реальная возможность даже для тех, кому банки отказали. МФО лояльнее относятся к заемщикам с просрочками и способны предоставить займ даже в сложных ситуациях.
              </p>
            </Card>

            <h4 className="text-xl font-semibold mb-6 text-secondary">
              Специальные программы для заемщиков с проблемной историей:
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {badHistoryPrograms.map((program, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-secondary"
                >
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={24} className="text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-base font-medium">{program}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToGetLoan;