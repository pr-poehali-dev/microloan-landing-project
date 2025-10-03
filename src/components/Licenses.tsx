import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Licenses = () => {
  const licenses = [
    {
      icon: "CheckCircle2",
      title: "Проверенный сервис",
      number: "С 2018 года",
      description: "Более 7 лет успешной работы на финансовом рынке"
    },
    {
      icon: "Lock",
      title: "SSL сертификат",
      number: "256-bit шифрование",
      description: "Защита персональных данных по международным стандартам"
    }
  ];

  const stats = [
    { value: "50 000+", label: "Довольных клиентов" },
    { value: "99.2%", label: "Одобрение заявок" },
    { value: "24/7", label: "Поддержка клиентов" },
    { value: "0%", label: "Первый займ" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Безопасность и надежность
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы гарантируем защиту ваших данных и прозрачные условия
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {licenses.map((license, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white border-2 border-primary/10"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <Icon name={license.icon as any} size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{license.title}</h3>
                    <p className="text-primary font-semibold text-lg mb-2">{license.number}</p>
                    <p className="text-muted-foreground">{license.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white to-primary/5 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                <Icon name="ShieldCheck" size={40} className="text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2 text-green-800">
                  Ваша безопасность — наш приоритет
                </h3>
                <p className="text-green-700">
                  Все данные защищены банковским уровнем шифрования SSL 256-bit. 
                  Мы не передаем информацию третьим лицам и строго соблюдаем 
                  требования ФЗ-152 «О персональных данных».
                </p>
              </div>

            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Licenses;