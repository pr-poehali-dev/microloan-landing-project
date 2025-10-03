import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

const LeadForm = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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
      const response = await fetch('https://functions.poehali.dev/77c76389-0e3c-4aa4-982b-6789a2f9cb26', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: fullName,
          phone: phone,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
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
      toast({
        title: "Ошибка сети",
        description: "Проверьте подключение к интернету",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <Card className="p-8 text-center bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                <Icon name="CheckCircle2" size={40} className="text-white" />
              </div>
              
              <h3 className="text-3xl font-bold mb-4 text-green-700">
                Заявка принята!
              </h3>
              
              <p className="text-lg text-muted-foreground mb-6">
                Наш специалист свяжется с вами в течение 15 минут
              </p>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Icon name="Phone" size={16} />
                <span>Ожидайте звонка</span>
              </div>

              <Button 
                variant="outline"
                onClick={() => setIsSuccess(false)}
                className="mt-6"
              >
                Отправить еще заявку
              </Button>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Оставьте заявку на займ
            </h2>
            <p className="text-lg text-muted-foreground">
              Заполните форму и получите деньги уже сегодня
            </p>
          </div>

          <Card className="p-8 bg-white shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName" className="text-base font-semibold mb-2 block">
                  Фамилия Имя Отчество
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Иванов Иван Иванович"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  minLength={3}
                  className="h-14 text-lg"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-base font-semibold mb-2 block">
                  Номер телефона
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                  className="h-14 text-lg"
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg h-14"
              >
                {isSubmitting ? (
                  <>
                    <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                    Отправка...
                  </>
                ) : (
                  <>
                    Получить займ
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </>
                )}
              </Button>

              <div className="pt-4 border-t">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Icon name="Shield" size={20} className="mx-auto text-green-600 mb-1" />
                    <p className="text-xs text-muted-foreground">Безопасно</p>
                  </div>
                  <div>
                    <Icon name="Clock" size={20} className="mx-auto text-blue-600 mb-1" />
                    <p className="text-xs text-muted-foreground">За 15 минут</p>
                  </div>
                  <div>
                    <Icon name="CheckCircle2" size={20} className="mx-auto text-purple-600 mb-1" />
                    <p className="text-xs text-muted-foreground">95% одобрение</p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-center text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;