import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

const PopupLeadForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('leadPopupShown');
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem('leadPopupShown', 'true');
      }, 30000); // 30 секунд

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleOpenLeadForm = () => {
      setIsVisible(true);
    };

    window.addEventListener('openLeadForm', handleOpenLeadForm);
    return () => window.removeEventListener('openLeadForm', handleOpenLeadForm);
  }, []);

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

  const handleClose = () => {
    setIsVisible(false);
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
          source: 'popup-form'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в ближайшее время",
        });
        setTimeout(() => {
          setIsVisible(false);
        }, 3000);
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

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      <Card className="relative max-w-md w-full bg-white shadow-2xl animate-scale-in">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
        >
          <Icon name="X" size={20} />
        </button>

        {isSuccess ? (
          <div className="p-8 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
              <Icon name="CheckCircle2" size={40} className="text-white" />
            </div>
            
            <h3 className="text-3xl font-bold mb-4 text-green-700">
              Заявка принята!
            </h3>
            
            <p className="text-lg text-muted-foreground">
              Наш специалист свяжется с вами в течение 15 минут
            </p>
          </div>
        ) : (
          <div className="p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Zap" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Получите деньги за 5 минут!
              </h3>
              <p className="text-muted-foreground">
                Заполните форму и получите займ уже сегодня
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="popup-fullName" className="text-base font-semibold mb-2 block">
                  Фамилия Имя Отчество
                </Label>
                <Input
                  id="popup-fullName"
                  type="text"
                  placeholder="Иванов Иван Иванович"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  minLength={3}
                  className="h-12 text-base"
                />
              </div>

              <div>
                <Label htmlFor="popup-phone" className="text-base font-semibold mb-2 block">
                  Номер телефона
                </Label>
                <Input
                  id="popup-phone"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                  className="h-12 text-base"
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

              <div className="flex items-center justify-center gap-6 pt-4 border-t">
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={18} className="text-green-600" />
                  <span className="text-xs text-muted-foreground">Безопасно</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={18} className="text-blue-600" />
                  <span className="text-xs text-muted-foreground">За 5 минут</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={18} className="text-purple-600" />
                  <span className="text-xs text-muted-foreground">95% одобрение</span>
                </div>
              </div>
            </form>
          </div>
        )}
      </Card>
    </div>
  );
};

export default PopupLeadForm;