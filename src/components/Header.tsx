import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Zap" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              МикроЗайм
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("mfo-list")}
              className="text-foreground/80 hover:text-primary font-medium transition-colors relative group"
            >
              МФО
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("calculator")}
              className="text-foreground/80 hover:text-primary font-medium transition-colors relative group"
            >
              Калькулятор
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("conditions")}
              className="text-foreground/80 hover:text-primary font-medium transition-colors relative group"
            >
              Условия
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("how-to-get")}
              className="text-foreground/80 hover:text-secondary font-medium transition-colors relative group"
            >
              Как получить
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-foreground/80 hover:text-primary font-medium transition-colors relative group"
            >
              Отзывы
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground/80 hover:text-primary font-medium transition-colors relative group"
            >
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:88001234567"
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
            >
              <Icon name="Phone" size={18} />
              <span className="font-semibold">8 800 123-45-67</span>
            </a>
            <Button 
              onClick={() => scrollToSection("lead-form")}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Получить займ
              <Icon name="ArrowRight" className="ml-2" size={16} />
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t animate-fade-in">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("mfo-list")}
                className="text-left py-2 text-foreground/80 hover:text-primary font-medium transition-colors"
              >
                МФО
              </button>
              <button
                onClick={() => scrollToSection("calculator")}
                className="text-left py-2 text-foreground/80 hover:text-primary font-medium transition-colors"
              >
                Калькулятор
              </button>
              <button
                onClick={() => scrollToSection("conditions")}
                className="text-left py-2 text-foreground/80 hover:text-primary font-medium transition-colors"
              >
                Условия
              </button>
              <button
                onClick={() => scrollToSection("how-to-get")}
                className="text-left py-2 text-foreground/80 hover:text-secondary font-medium transition-colors"
              >
                Как получить
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="text-left py-2 text-foreground/80 hover:text-primary font-medium transition-colors"
              >
                Отзывы
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-left py-2 text-foreground/80 hover:text-primary font-medium transition-colors"
              >
                FAQ
              </button>
              <a
                href="tel:88001234567"
                className="flex items-center gap-2 py-2 text-foreground/80 hover:text-primary transition-colors"
              >
                <Icon name="Phone" size={18} />
                <span className="font-semibold">8 800 123-45-67</span>
              </a>
              <Button 
                onClick={() => scrollToSection("lead-form")}
                className="bg-gradient-to-r from-primary to-secondary w-full"
              >
                Получить займ
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;