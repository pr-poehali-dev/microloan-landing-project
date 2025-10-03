import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Conclusion = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            Заключение
          </h2>
          
          <div className="mb-12 p-8 md:p-10 rounded-3xl bg-white shadow-2xl border-2 border-primary/20">
            <p className="text-lg leading-relaxed mb-6">
              Микрозаймы — это современный, быстрый и доступный способ решения временных финансовых проблем. Взять микрозайм онлайн может любой совершеннолетний гражданин РФ за считанные минуты. Главное — выбирать проверенные МФО и ответственно подходить к выполнению своих обязательств.
            </p>
            
            <p className="text-lg leading-relaxed font-semibold text-primary">
              Готовы получить деньги прямо сейчас? Выберите подходящее предложение из нашего рейтинга надежных МФО и оформите займ за 5 минут!
            </p>
          </div>

          <div className="relative p-10 md:p-16 rounded-3xl bg-gradient-to-br from-primary via-orange-500 to-secondary overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 text-center text-white">
              <h3 className="text-3xl md:text-5xl font-bold mb-4">
                Получите деньги за 5 минут!
              </h3>
              <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Более 50 000 довольных клиентов уже воспользовались нашими услугами. Присоединяйтесь!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-5">
                  <p className="text-sm opacity-90 mb-1">Сумма</p>
                  <p className="text-3xl font-bold">До 100 000 ₽</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-5">
                  <p className="text-sm opacity-90 mb-1">Решение</p>
                  <p className="text-3xl font-bold">5 минут</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-5">
                  <p className="text-sm opacity-90 mb-1">Первый займ</p>
                  <p className="text-3xl font-bold">0%</p>
                </div>
              </div>

              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-xl px-12 py-7 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 font-bold"
              >
                Оформить займ прямо сейчас
                <Icon name="ArrowRight" className="ml-3" size={24} />
              </Button>
              
              <p className="mt-6 text-sm opacity-80">
                ⭐ Рейтинг 4.8/5 на основе 12 450 отзывов
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
