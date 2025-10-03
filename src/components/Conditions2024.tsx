import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Conditions2024 = () => {
  const conditions = [
    { icon: "Percent", title: "Ставка от 0%", description: "для новых клиентов" },
    { icon: "Wallet", title: "Сумма до 100000 рублей", description: "без справок" },
    { icon: "Calendar", title: "Срок до 365 дней", description: "с возможностью продления" },
    { icon: "CheckCircle", title: "Одобрение в 95% случаев", description: "даже с плохой историей" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Выгодные условия микрозаймов в 2024 году
          </h2>
          
          <p className="text-lg leading-relaxed text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Рынок микрофинансирования активно развивается, предлагая заемщикам все более выгодные условия:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {conditions.map((condition, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white to-primary/5 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={condition.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {condition.title}
                </h3>
                <p className="text-sm text-muted-foreground">{condition.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conditions2024;
