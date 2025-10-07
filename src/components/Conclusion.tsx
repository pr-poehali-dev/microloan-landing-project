import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

const Conclusion = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '');
    if (digits.length === 0) return '';
    
    let formatted = '+7';
    if (digits.length > 1) {
      formatted += ' (' + digits.substring(1, 4);
    }
    if (digits.length >= 5) {
      formatted += ') ' + digits.substring(4, 7);
    }
    if (digits.length >= 8) {
      formatted += '-' + digits.substring(7, 9);
    }
    if (digits.length >= 10) {
      formatted += '-' + digits.substring(9, 11);
    }
    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/48150556-6ec8-4546-80b5-d194c240f3e5', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: fullName,
          phone: phone,
          source: 'conclusion-section'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в ближайшее время",
        });
        setFullName("");
        setPhone("");
      } else {
        toast({
          title: "Ошибка",
          description: data.error || "Попробуйте еще раз",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
      toast({
        title: "Ошибка отправки",
        description: error instanceof Error ? error.message : "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
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

              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 mb-6">
                <div>
                  <Label htmlFor="conclusion-fullName" className="text-white font-semibold mb-2 block">
                    Фамилия Имя Отчество
                  </Label>
                  <Input
                    id="conclusion-fullName"
                    type="text"
                    placeholder="Иванов Иван Иванович"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    minLength={3}
                    className="h-12 text-base bg-white text-gray-900 placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <Label htmlFor="conclusion-phone" className="text-white font-semibold mb-2 block">
                    Номер телефона
                  </Label>
                  <Input
                    id="conclusion-phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    onChange={handlePhoneChange}
                    required
                    className="h-12 text-base bg-white text-gray-900 placeholder:text-gray-500"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-white text-primary hover:bg-white/90 text-xl px-12 py-7 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 font-bold"
                >
                  {isSubmitting ? (
                    <>
                      <Icon name="Loader2" size={24} className="mr-3 animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    <>
                      Оформить займ прямо сейчас
                      <Icon name="ArrowRight" className="ml-3" size={24} />
                    </>
                  )}
                </Button>
              </form>
              
              <p className="text-sm opacity-80">
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