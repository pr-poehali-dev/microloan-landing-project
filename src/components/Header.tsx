import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Wallet" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              МикроФин
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-6" role="navigation" aria-label="Основная навигация">
            {isHomePage ? (
              <>
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
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="text-foreground/80 hover:text-primary font-medium transition-colors relative group"
                >
                  Главная
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
                <button
                  className="text-foreground/80 hover:text-primary font-medium transition-colors relative group cursor-not-allowed opacity-50"
                  disabled
                >
                  МФО
                </button>
                <button
                  className="text-foreground/80 hover:text-primary font-medium transition-colors relative group cursor-not-allowed opacity-50"
                  disabled
                >
                  Калькулятор
                </button>
                <button
                  className="text-foreground/80 hover:text-primary font-medium transition-colors relative group cursor-not-allowed opacity-50"
                  disabled
                >
                  Условия
                </button>
              </>
            )}
            
            <Link
              to="/blog"
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 relative overflow-hidden group ${
                location.pathname === "/blog"
                  ? "bg-gradient-to-r from-orange-400 via-pink-400 to-teal-400 text-white shadow-lg"
                  : "bg-gradient-to-r from-orange-400/10 via-pink-400/10 to-teal-400/10 text-foreground hover:from-orange-400 hover:via-pink-400 hover:to-teal-400 hover:text-white hover:shadow-lg"
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                Блог
                <Icon name="Sparkles" size={16} className={location.pathname === "/blog" ? "animate-pulse" : ""} />
              </span>
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {isHomePage ? (
              <Button 
                onClick={() => scrollToSection("lead-form")}
                className="bg-gradient-to-r from-orange-400 via-pink-400 to-teal-400 hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold"
              >
                Получить займ
                <Icon name="Sparkles" className="ml-2" size={16} />
              </Button>
            ) : (
              <Link to="/">
                <Button 
                  className="bg-gradient-to-r from-orange-400 via-pink-400 to-teal-400 hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold"
                >
                  Получить займ
                  <Icon name="Sparkles" className="ml-2" size={16} />
                </Button>
              </Link>
            )}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t animate-fade-in max-h-[calc(100vh-5rem)] overflow-y-auto">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-3">
              {isHomePage ? (
                <>
                  <button
                    onClick={() => scrollToSection("mfo-list")}
                    className="text-left py-3 px-4 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg font-medium transition-all"
                  >
                    МФО
                  </button>
                  <button
                    onClick={() => scrollToSection("calculator")}
                    className="text-left py-3 px-4 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg font-medium transition-all"
                  >
                    Калькулятор
                  </button>
                  <button
                    onClick={() => scrollToSection("conditions")}
                    className="text-left py-3 px-4 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg font-medium transition-all"
                  >
                    Условия
                  </button>
                  <button
                    onClick={() => scrollToSection("reviews")}
                    className="text-left py-3 px-4 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg font-medium transition-all"
                  >
                    Отзывы
                  </button>
                  <button
                    onClick={() => scrollToSection("faq")}
                    className="text-left py-3 px-4 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg font-medium transition-all"
                  >
                    FAQ
                  </button>
                  
                  <div className="pt-3 border-t mt-2">
                    <Link
                      to="/blog"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-left py-3 px-4 rounded-lg font-semibold bg-gradient-to-r from-orange-400/10 via-pink-400/10 to-teal-400/10 text-foreground hover:shadow-md transition-all"
                    >
                      <span className="flex items-center gap-2">
                        <Icon name="BookOpen" size={18} />
                        Блог
                        <Icon name="Sparkles" size={16} />
                      </span>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-left py-3 px-4 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg font-medium transition-all flex items-center gap-2"
                  >
                    <Icon name="Home" size={18} />
                    Главная
                  </Link>
                  
                  <Link
                    to="/blog"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-left py-3 px-4 rounded-lg font-semibold transition-all ${
                      location.pathname.startsWith("/blog")
                        ? "bg-gradient-to-r from-orange-400 via-pink-400 to-teal-400 text-white shadow-lg" 
                        : "bg-gradient-to-r from-orange-400/10 via-pink-400/10 to-teal-400/10 text-foreground hover:shadow-md"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Icon name="BookOpen" size={18} />
                      Блог
                      <Icon name="Sparkles" size={16} className={location.pathname.startsWith("/blog") ? "animate-pulse" : ""} />
                    </span>
                  </Link>
                </>
              )}
              
              {isHomePage ? (
                <Button 
                  onClick={() => scrollToSection("lead-form")}
                  className="bg-gradient-to-r from-orange-400 via-pink-400 to-teal-400 w-full mt-4 font-semibold"
                >
                  Получить займ
                  <Icon name="Sparkles" className="ml-2" size={16} />
                </Button>
              ) : (
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="bg-gradient-to-r from-orange-400 via-pink-400 to-teal-400 w-full mt-4 font-semibold">
                    Получить займ
                    <Icon name="Sparkles" className="ml-2" size={16} />
                  </Button>
                </Link>
              )}
            </nav>
            </div>
        )}
      </div>
    </header>
    
    {isMobileMenuOpen && (
      <div 
        className="md:hidden fixed inset-0 bg-black/30 z-40"
        onClick={() => setIsMobileMenuOpen(false)}
      />
    )}
    </>
  );
};

export default Header;