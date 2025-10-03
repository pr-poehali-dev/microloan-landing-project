import Icon from "@/components/ui/icon";

const Benefits = () => {
  const benefits = [
    {
      icon: "Zap",
      title: "Моментальное решение",
      description: "Автоматическая проверка заявки и одобрение за 5 минут. Без очередей и ожидания.",
      gradient: "from-primary to-orange-400"
    },
    {
      icon: "Wallet",
      title: "Деньги на карту",
      description: "Мгновенное зачисление на карту любого банка. Получите деньги в день обращения.",
      gradient: "from-secondary to-cyan-400"
    },
    {
      icon: "ShieldCheck",
      title: "Защита данных",
      description: "Банковский уровень безопасности. Ваши данные под надежной защитой.",
      gradient: "from-primary to-secondary"
    },
    {
      icon: "RefreshCw",
      title: "Продление займа",
      description: "Возможность продлить займ онлайн в любое время. Гибкие условия погашения.",
      gradient: "from-orange-500 to-primary"
    },
    {
      icon: "Award",
      title: "Программа лояльности",
      description: "Скидки и бонусы для постоянных клиентов. Выгодные условия при повторном обращении.",
      gradient: "from-cyan-500 to-secondary"
    },
    {
      icon: "Headphones",
      title: "Поддержка 24/7",
      description: "Круглосуточная поддержка клиентов. Ответим на любые вопросы в любое время.",
      gradient: "from-secondary to-primary"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Преимущества
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Почему более 50 000 клиентов выбирают именно нас
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 from-primary to-secondary"></div>
              
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={benefit.icon as any} size={32} className="text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary via-orange-500 to-secondary overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            
            <div className="relative z-10 text-center text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Первый займ под 0%
              </h3>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Оформите первый займ без процентов. Возвращайте только ту сумму, которую взяли.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4">
                  <p className="text-sm opacity-80 mb-1">Новым клиентам</p>
                  <p className="text-2xl font-bold">До 30 000 ₽</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4">
                  <p className="text-sm opacity-80 mb-1">На срок</p>
                  <p className="text-2xl font-bold">До 30 дней</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4">
                  <p className="text-sm opacity-80 mb-1">Ставка</p>
                  <p className="text-2xl font-bold">0%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
