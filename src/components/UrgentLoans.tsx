import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const UrgentLoans = () => {
  const situations = [
    { icon: "Heart", text: "Неотложные медицинские расходы" },
    { icon: "Car", text: "Ремонт автомобиля или техники" },
    { icon: "CreditCard", text: "Покрытие овердрафта по карте" },
    { icon: "Home", text: "Оплата коммунальных услуг" },
    { icon: "ShoppingCart", text: "Покупка необходимых товаров до зарплаты" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            Срочные микрозаймы: когда деньги нужны прямо сейчас
          </h2>
          
          <Card className="p-8 md:p-10 mb-12 shadow-xl bg-gradient-to-br from-white to-secondary/10 border-2 border-secondary/30">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                <Icon name="Clock" size={28} className="text-white" />
              </div>
              <div>
                <p className="text-lg leading-relaxed">
                  «Взять микрозайм срочно» можно в любое время суток. Многие МФО работают в режиме 24/7, обеспечивая круглосуточный доступ к финансовым услугам.
                </p>
              </div>
            </div>
          </Card>

          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Ситуации, когда микрозайм — лучшее решение:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {situations.map((situation, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={situation.icon as any} size={28} className="text-white" />
                  </div>
                  <p className="text-base font-semibold">{situation.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-primary via-orange-500 to-secondary text-white shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Icon name="Zap" size={32} className="text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-1">Деньги за 5 минут</h4>
                  <p className="text-white/90">Круглосуточно, без выходных</p>
                </div>
              </div>
              <button className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-xl whitespace-nowrap">
                Получить срочно
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgentLoans;
