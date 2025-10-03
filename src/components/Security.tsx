import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Security = () => {
  const securityTips = [
    { icon: "ShieldCheck", text: "Проверяйте наличие лицензии у МФО" },
    { icon: "UserX", text: "Не передавайте данные паспорта третьим лицам" },
    { icon: "FileSearch", text: "Регулярно проверяйте свою кредитную историю" },
    { icon: "AlertTriangle", text: "При подозрении на мошенничество немедленно обращайтесь в МФО" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            Безопасность при оформлении микрозаймов
          </h2>
          
          <Card className="p-8 md:p-10 mb-10 shadow-xl bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                <Icon name="AlertCircle" size={28} className="text-white" />
              </div>
              <div>
                <p className="text-lg leading-relaxed text-foreground">
                  Важно знать, что мошенники могут попытаться взять микрозайм на ваше имя. Всегда пользуйтесь услугами только проверенных МФО с лицензией Центрального банка РФ.
                </p>
              </div>
            </div>
          </Card>

          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Как защитить себя:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityTips.map((tip, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-primary"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <Icon name={tip.icon as any} size={24} className="text-white" />
                  </div>
                  <p className="text-base font-medium pt-2">{tip.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
