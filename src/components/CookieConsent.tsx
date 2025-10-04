import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg mx-4 p-6 md:p-8 animate-scale-in">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Icon name="Shield" size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Согласие на обработку данных
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Используя наш сайт, вы даете согласие на обработку персональных данных 
              и использование cookies для улучшения работы сервиса.
            </p>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-4 mb-6">
          <p className="text-sm text-muted-foreground">
            Мы обрабатываем ваши данные в соответствии с{" "}
            <Link 
              to="/privacy-policy" 
              className="text-primary hover:underline font-medium"
              onClick={() => setIsVisible(false)}
            >
              Политикой конфиденциальности
            </Link>
            {" "}и законодательством РФ.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            onClick={handleAccept}
            size="lg"
            className="flex-1"
          >
            <Icon name="Check" className="mr-2" size={20} />
            Принимаю
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
