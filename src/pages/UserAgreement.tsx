import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const UserAgreement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const title = 'Пользовательское соглашение — МикроФин';
    const description = 'Пользовательское соглашение сайта МикроФин. Условия использования сервиса, права и обязанности пользователей.';
    
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'noindex, nofollow');
    } else {
      const newMetaRobots = document.createElement('meta');
      newMetaRobots.name = 'robots';
      newMetaRobots.content = 'noindex, nofollow';
      document.head.appendChild(newMetaRobots);
    }

    return () => {
      const metaRobots = document.querySelector('meta[name="robots"]');
      if (metaRobots) {
        metaRobots.setAttribute('content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link to="/">
                <Button variant="ghost" size="sm" className="gap-2 mb-4">
                  <Icon name="ArrowLeft" size={16} />
                  На главную
                </Button>
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Пользовательское соглашение
              </h1>
              <p className="text-muted-foreground">
                Последнее обновление: 4 октября 2025 года
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Общие положения</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Настоящее Пользовательское соглашение (далее — Соглашение) регулирует отношения между владельцем сайта МикроФин (далее — Сайт) и пользователями Сайта.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Используя Сайт, вы принимаете условия настоящего Соглашения в полном объёме. Если вы не согласны с условиями, пожалуйста, покиньте Сайт.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Предмет соглашения</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Сайт предоставляет следующие услуги:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Информационная поддержка по вопросам микрозаймов</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Сравнение условий различных МФО</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Калькулятор расчёта стоимости займа</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Прием и передача заявок на получение микрозаймов партнерским МФО</span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Сайт не является микрофинансовой организацией и не выдаёт займы напрямую. Сайт выступает посредником между пользователями и МФО-партнёрами.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Права и обязанности пользователя</h2>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Пользователь имеет право:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <Icon name="CheckCircle" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span>Получать информацию о микрозаймах и условиях МФО</span>
                    </li>
                    <li className="flex gap-2">
                      <Icon name="CheckCircle" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span>Подавать заявки на получение микрозаймов через Сайт</span>
                    </li>
                    <li className="flex gap-2">
                      <Icon name="CheckCircle" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span>Обращаться в службу поддержки по вопросам работы Сайта</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Пользователь обязуется:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <Icon name="AlertCircle" size={20} className="text-orange-600 mt-1 flex-shrink-0" />
                      <span>Предоставлять достоверную информацию при заполнении заявок</span>
                    </li>
                    <li className="flex gap-2">
                      <Icon name="AlertCircle" size={20} className="text-orange-600 mt-1 flex-shrink-0" />
                      <span>Не использовать Сайт в незаконных целях</span>
                    </li>
                    <li className="flex gap-2">
                      <Icon name="AlertCircle" size={20} className="text-orange-600 mt-1 flex-shrink-0" />
                      <span>Не пытаться нарушить работу Сайта или получить несанкционированный доступ</span>
                    </li>
                    <li className="flex gap-2">
                      <Icon name="AlertCircle" size={20} className="text-orange-600 mt-1 flex-shrink-0" />
                      <span>Соблюдать законодательство РФ при использовании Сайта</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Права и обязанности администрации</h2>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Администрация имеет право:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <Icon name="Shield" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Изменять условия настоящего Соглашения в одностороннем порядке</span>
                    </li>
                    <li className="flex gap-2">
                      <Icon name="Shield" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Ограничивать или прекращать доступ к Сайту без объяснения причин</span>
                    </li>
                    <li className="flex gap-2">
                      <Icon name="Shield" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Удалять или блокировать информацию, нарушающую законодательство</span>
                    </li>
                    <li className="flex gap-2">
                      <Icon name="Shield" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Передавать данные пользователей МФО-партнёрам для обработки заявок</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Администрация обязуется:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <Icon name="CheckCircle" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span>Обеспечивать функционирование Сайта в техническом режиме 24/7</span>
                    </li>
                    <li className="flex gap-2">
                      <Icon name="CheckCircle" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span>Защищать персональные данные в соответствии с Политикой конфиденциальности</span>
                    </li>
                    <li className="flex gap-2">
                      <Icon name="CheckCircle" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span>Предоставлять актуальную информацию о МФО и условиях займов</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Ответственность сторон</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Администрация не несёт ответственности за:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <Icon name="XCircle" size={20} className="text-red-600 mt-1 flex-shrink-0" />
                    <span>Решения МФО по заявкам пользователей (одобрение или отказ)</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="XCircle" size={20} className="text-red-600 mt-1 flex-shrink-0" />
                    <span>Условия договоров займа между пользователями и МФО</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="XCircle" size={20} className="text-red-600 mt-1 flex-shrink-0" />
                    <span>Технические сбои, вызванные действиями третьих лиц</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="XCircle" size={20} className="text-red-600 mt-1 flex-shrink-0" />
                    <span>Убытки, возникшие в результате использования информации с Сайта</span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Вся информация на Сайте носит справочный характер и не является публичной офертой.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Интеллектуальная собственность</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Все материалы Сайта (тексты, изображения, дизайн, логотипы, программный код) защищены авторским правом и принадлежат администрации Сайта или её партнёрам.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Использование материалов Сайта без письменного разрешения администрации запрещено.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Порядок разрешения споров</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Все споры и разногласия решаются путём переговоров. При невозможности достичь согласия спор передаётся на рассмотрение в суд в соответствии с законодательством РФ.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Претензии принимаются в письменной форме через контакты, указанные на Сайте.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Заключительные положения</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <Icon name="Info" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Соглашение вступает в силу с момента начала использования Сайта</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Info" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Администрация вправе изменять Соглашение без уведомления пользователей</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Info" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Актуальная версия Соглашения всегда размещена на данной странице</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Info" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Продолжая использовать Сайт, вы соглашаетесь с изменениями в Соглашении</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Контакты</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  По вопросам работы Сайта обращайтесь:
                </p>
                <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="Send" size={20} className="text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Telegram</p>
                      <a 
                        href="https://t.me/Microfinzaim" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        @Microfinzaim
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Building" size={20} className="text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Компания</p>
                      <p className="text-muted-foreground">МКК "МикроЗайм"</p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <Link to="/">
                  <Button size="lg" className="w-full md:w-auto">
                    <Icon name="ArrowLeft" className="mr-2" size={20} />
                    Вернуться на главную
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UserAgreement;
