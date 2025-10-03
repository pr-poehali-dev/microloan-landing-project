import { Card } from "@/components/ui/card";

const Comparison = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            Альтернатива банковским кредитам
          </h2>
          
          <p className="text-lg leading-relaxed text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            «Можно ли взять микрозайм» быстрее банковского кредита? Безусловно! Пока банк рассматривает вашу заявку несколько дней, МФО может одобрить займ за несколько минут.
          </p>

          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Сравнение микрозайма и банковского кредита:
          </h3>

          <Card className="overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-secondary text-white">
                    <th className="py-4 px-6 text-left font-bold text-lg">Параметр</th>
                    <th className="py-4 px-6 text-left font-bold text-lg">Микрозайм</th>
                    <th className="py-4 px-6 text-left font-bold text-lg">Банковский кредит</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-primary/5 transition-colors">
                    <td className="py-4 px-6 font-semibold">Время одобрения</td>
                    <td className="py-4 px-6 text-green-600 font-semibold">5-15 минут</td>
                    <td className="py-4 px-6 text-muted-foreground">3-7 дней</td>
                  </tr>
                  <tr className="border-b bg-white/50 hover:bg-primary/5 transition-colors">
                    <td className="py-4 px-6 font-semibold">Документы</td>
                    <td className="py-4 px-6 text-green-600 font-semibold">Паспорт</td>
                    <td className="py-4 px-6 text-muted-foreground">Множество справок</td>
                  </tr>
                  <tr className="border-b hover:bg-primary/5 transition-colors">
                    <td className="py-4 px-6 font-semibold">Кредитная история</td>
                    <td className="py-4 px-6 text-green-600 font-semibold">Не критична</td>
                    <td className="py-4 px-6 text-muted-foreground">Обязательна</td>
                  </tr>
                  <tr className="bg-white/50 hover:bg-primary/5 transition-colors">
                    <td className="py-4 px-6 font-semibold">Сумма</td>
                    <td className="py-4 px-6 text-green-600 font-semibold">До 100000 руб</td>
                    <td className="py-4 px-6 text-muted-foreground">От 50000 руб</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-green-800">Преимущество микрозаймов очевидно</h4>
                <p className="text-base leading-relaxed text-green-900">
                  Когда нужны деньги срочно — микрозайм становится оптимальным решением благодаря скорости, простоте и доступности.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
