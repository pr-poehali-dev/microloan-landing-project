import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

const UrgentLoans = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const situations = [
    { icon: "Heart", text: "Неотложные медицинские расходы" },
    { icon: "Car", text: "Ремонт автомобиля или техники" },
    { icon: "CreditCard", text: "Покрытие овердрафта по карте" },
    { icon: "Home", text: "Оплата коммунальных услуг" },
    { icon: "ShoppingCart", text: "Покупка необходимых товаров до зарплаты" }
  ];

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
      const response = await fetch('https://functions.poehali.dev/77c76389-0e3c-4aa4-982b-6789a2f9cb26', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: fullName,
          phone: phone,
          source: 'urgent-section'
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
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Icon name="Zap" size={32} className="text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-1">Деньги за 5 минут</h4>
                <p className="text-white/90">Круглосуточно, без выходных</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="urgent-fullName" className="text-white font-semibold mb-2 block">
                  Фамилия Имя Отчество
                </Label>
                <Input
                  id="urgent-fullName"
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
                <Label htmlFor="urgent-phone" className="text-white font-semibold mb-2 block">
                  Номер телефона
                </Label>
                <Input
                  id="urgent-phone"
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
                className="w-full bg-white text-primary hover:bg-white/90 font-bold h-12"
              >
                {isSubmitting ? (
                  <>
                    <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                    Отправка...
                  </>
                ) : (
                  "Получить срочно"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgentLoans;