import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const RefinancingAndTips = () => {
  const managementTips = [
    { icon: "FileText", text: "Внимательно читайте договор" },
    { icon: "Calendar", text: "Планируйте дату возврата" },
    { icon: "MessageCircle", text: "При возникновении трудностей сразу обращайтесь в МФО" },
    { icon: "Ban", text: "Не берите новые займы для погашения старых" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
              Рефинансирование микрозаймов
            </h2>
            
            <Card className="p-8 md:p-10 shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Icon name="RefreshCw" size={28} className="text-white" />
                </div>
                <div>
                  <p className="text-lg leading-relaxed">
                    Если у вас уже есть займы в других МФО, можно взять микрозайм для погашения существующих долгов на более выгодных условиях. Это поможет снизить общую финансовую нагрузку и избежать просрочек.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
              Ответственное заимствование
            </h2>
            
            <Card className="p-8 md:p-10 mb-10 shadow-xl bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                  <Icon name="AlertCircle" size={28} className="text-white" />
                </div>
                <div>
                  <p className="text-lg leading-relaxed font-semibold">
                    Помните: микрозайм — это серьезное финансовое обязательство. Всегда рассчитывайте свои возможности и берите только ту сумму, которую сможете вернуть в срок.
                  </p>
                </div>
              </div>
            </Card>

            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Советы по управлению микрозаймами:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {managementTips.map((tip, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
      </div>
    </section>
  );
};

export default RefinancingAndTips;
