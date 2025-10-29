import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 overflow-hidden" role="contentinfo">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Wallet" size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                МикроФин
              </h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Быстрые микрозаймы онлайн. Деньги на карту за 5 минут.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Сервисы</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button onClick={() => scrollToSection("mfo-list")} className="hover:text-primary transition-colors">
                  МФО
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("calculator")} className="hover:text-primary transition-colors">
                  Калькулятор займа
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("conditions")} className="hover:text-primary transition-colors">
                  Условия
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("lead-form")} className="hover:text-primary transition-colors">
                  Подать заявку
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/blog" className="hover:text-secondary transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <Link to="/journal" className="hover:text-secondary transition-colors">
                  Журнал новостей
                </Link>
              </li>
              <li>
                <button onClick={() => scrollToSection("reviews")} className="hover:text-secondary transition-colors">
                  Отзывы
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("faq")} className="hover:text-secondary transition-colors">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mt-1 text-[#0077FF]">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.35 14.45h-1.34c-.53 0-.69-.42-1.65-1.39-.83-.82-1.2-.93-1.41-.93-.29 0-.37.08-.37.47v1.27c0 .34-.11.54-1 .54-1.5 0-3.15-.91-4.31-2.6-1.75-2.45-2.23-4.29-2.23-4.66 0-.21.08-.4.47-.4h1.34c.35 0 .48.16.61.53.71 2.05 1.9 3.85 2.38 3.85.19 0 .27-.09.27-.56v-2.2c-.06-.99-.58-1.08-.58-1.43 0-.17.14-.34.36-.34h2.1c.3 0 .4.16.4.5v2.98c0 .3.14.4.22.4.19 0 .35-.1.7-.44 1.08-1.22 1.85-3.1 1.85-3.1.1-.21.27-.4.62-.4h1.34c.4 0 .49.21.4.5-.16.73-1.84 3.29-1.84 3.29-.16.25-.21.37 0 .65.15.21.65.64 1 1.03.6.67 1.07 1.22 1.19 1.61.13.39-.07.59-.46.59z"/>
                </svg>
                <a 
                  href="https://vk.com/mikrofinru" 
                  target="_blank" 
                  rel="noopener noreferrer nofollow"
                  className="hover:text-[#0077FF] transition-colors"
                >
                  ВКонтакте
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mt-1 text-[#0088cc]">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
                <a 
                  href="https://t.me/mikrofinru" 
                  target="_blank" 
                  rel="noopener noreferrer nofollow"
                  className="hover:text-[#0088cc] transition-colors"
                >
                  Telegram-канал
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Send" size={16} className="mt-1 text-[#0088cc]" />
                <a 
                  href="https://t.me/Microfinzaim" 
                  target="_blank" 
                  rel="noopener noreferrer nofollow"
                  className="hover:text-[#0088cc] transition-colors"
                >
                  Поддержка в Telegram
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Clock" size={16} className="mt-1 text-primary" />
                <span>Поддержка 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <p>© 2025 МикроФин. Все права защищены.</p>
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-red-600 text-white font-bold text-sm border-2 border-white">
                18+
              </div>
            </div>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </Link>
              <Link to="/user-agreement" className="hover:text-white transition-colors">
                Пользовательское соглашение
              </Link>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500 text-center md:text-left">
            <p>Информация, размещенная на сайте, не является публичной офертой. МКК "МикроФин"</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;