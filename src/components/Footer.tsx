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
                <button onClick={() => scrollToSection("how-to-get")} className="hover:text-secondary transition-colors">
                  Как получить займ
                </button>
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
              <li><a href="#" className="hover:text-secondary transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <Icon name="Send" size={16} className="mt-1 text-[#0088cc]" />
                <a 
                  href="https://t.me/Microfinzaim" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#0088cc] transition-colors"
                >
                  @Microfinzaim
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
            <p>© 2025 МикроФин. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Пользовательское соглашение</a>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500 text-center md:text-left">
            <p>Информация, размещенная на сайте, не является публичной офертой. МКК "МикроЗайм", рег. номер в госреестре 1234567890123.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;