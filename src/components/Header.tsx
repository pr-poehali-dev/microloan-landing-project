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
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href="https://vk.com/mikrofinru"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="ВКонтакте"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.35 14.45h-1.34c-.53 0-.69-.42-1.65-1.39-.83-.82-1.2-.93-1.41-.93-.29 0-.37.08-.37.47v1.27c0 .34-.11.54-1 .54-1.5 0-3.15-.91-4.31-2.6-1.75-2.45-2.23-4.29-2.23-4.66 0-.21.08-.4.47-.4h1.34c.35 0 .48.16.61.53.71 2.05 1.9 3.85 2.38 3.85.19 0 .27-.09.27-.56v-2.2c-.06-.99-.58-1.08-.58-1.43 0-.17.14-.34.36-.34h2.1c.3 0 .4.16.4.5v2.98c0 .3.14.4.22.4.19 0 .35-.1.7-.44 1.08-1.22 1.85-3.1 1.85-3.1.1-.21.27-.4.62-.4h1.34c.4 0 .49.21.4.5-.16.73-1.84 3.29-1.84 3.29-.16.25-.21.37 0 .65.15.21.65.64 1 1.03.6.67 1.07 1.22 1.19 1.61.13.39-.07.59-.46.59z"/>
                </svg>
              </a>
              <a
                href="https://t.me/mikrofinru"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="Telegram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
              </a>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <Link
              to="/blog"
              className="px-4 py-2 rounded-full font-semibold transition-all duration-300 text-foreground/80 hover:text-primary"
            >
              <span className="flex items-center gap-2">
                <Icon name="BookOpen" size={16} />
                Блог
              </span>
            </Link>
            <Link
              to="/journal"
              className="px-4 py-2 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r from-orange-400/10 via-pink-400/10 to-teal-400/10 text-foreground hover:from-orange-400 hover:via-pink-400 hover:to-teal-400 hover:text-white hover:shadow-lg"
            >
              <span className="flex items-center gap-2">
                <Icon name="Newspaper" size={16} />
                Журнал
              </span>
            </Link>
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
              <div className="flex items-center gap-4 pb-4 border-b mb-2">
                <span className="text-sm text-foreground/60 font-medium">Мы в соцсетях:</span>
                <div className="flex gap-3">
                  <a
                    href="https://vk.com/mikrofinru"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-foreground/60 hover:text-primary transition-colors"
                    aria-label="ВКонтакте"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.35 14.45h-1.34c-.53 0-.69-.42-1.65-1.39-.83-.82-1.2-.93-1.41-.93-.29 0-.37.08-.37.47v1.27c0 .34-.11.54-1 .54-1.5 0-3.15-.91-4.31-2.6-1.75-2.45-2.23-4.29-2.23-4.66 0-.21.08-.4.47-.4h1.34c.35 0 .48.16.61.53.71 2.05 1.9 3.85 2.38 3.85.19 0 .27-.09.27-.56v-2.2c-.06-.99-.58-1.08-.58-1.43 0-.17.14-.34.36-.34h2.1c.3 0 .4.16.4.5v2.98c0 .3.14.4.22.4.19 0 .35-.1.7-.44 1.08-1.22 1.85-3.1 1.85-3.1.1-.21.27-.4.62-.4h1.34c.4 0 .49.21.4.5-.16.73-1.84 3.29-1.84 3.29-.16.25-.21.37 0 .65.15.21.65.64 1 1.03.6.67 1.07 1.22 1.19 1.61.13.39-.07.59-.46.59z"/>
                    </svg>
                  </a>
                  <a
                    href="https://t.me/mikrofinru"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-foreground/60 hover:text-primary transition-colors"
                    aria-label="Telegram"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                    </svg>
                  </a>
                </div>
              </div>
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
                    
                    <Link
                      to="/journal"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-left py-3 px-4 mt-3 rounded-lg font-semibold bg-gradient-to-r from-orange-400/10 via-pink-400/10 to-teal-400/10 text-foreground hover:shadow-md transition-all"
                    >
                      <span className="flex items-center gap-2">
                        <Icon name="Newspaper" size={18} />
                        Журнал
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
                  
                  <Link
                    to="/journal"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-left py-3 px-4 mt-3 rounded-lg font-semibold transition-all ${
                      location.pathname.startsWith("/journal")
                        ? "bg-gradient-to-r from-orange-400 via-pink-400 to-teal-400 text-white shadow-lg" 
                        : "bg-gradient-to-r from-orange-400/10 via-pink-400/10 to-teal-400/10 text-foreground hover:shadow-md"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Icon name="Newspaper" size={18} />
                      Журнал
                      <Icon name="Sparkles" size={16} className={location.pathname.startsWith("/journal") ? "animate-pulse" : ""} />
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