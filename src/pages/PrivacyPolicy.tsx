import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const title = 'Политика конфиденциальности — МикроФин';
    const description = 'Политика конфиденциальности сайта МикроФин. Обработка персональных данных, защита информации пользователей.';
    
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
                Политика конфиденциальности
              </h1>
              <p className="text-muted-foreground">
                Последнее обновление: 4 октября 2025 года
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Общие положения</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Настоящая Политика конфиденциальности (далее — Политика) определяет порядок обработки и защиты персональных данных пользователей сайта МикроФин (далее — Сайт).
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Используя Сайт, вы даете согласие на обработку персональных данных в соответствии с условиями настоящей Политики.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Собираемые данные</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  При использовании Сайта мы можем собирать следующие данные:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>ФИО</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Контактная информация (телефон)</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Информация о доходах и занятости</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>IP-адрес, данные cookies, информация о браузере и устройстве</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Данные о действиях на Сайте (просмотренные страницы, клики)</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Цели обработки данных</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Персональные данные обрабатываются для следующих целей:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <Icon name="Target" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Обработка заявок на получение микрозаймов</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Target" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Идентификация пользователя и проверка платежеспособности</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Target" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Связь с пользователем (уведомления, ответы на обращения)</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Target" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Улучшение качества сервиса и персонализация предложений</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Target" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Соблюдение требований законодательства РФ</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Передача данных третьим лицам</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ваши персональные данные могут быть переданы следующим категориям получателей:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <Icon name="Users" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>МФО-партнерам для рассмотрения заявок на микрозаймы</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Users" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Бюро кредитных историй (БКИ) в соответствии с законодательством</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Users" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Государственным органам по официальным запросам</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Users" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Контрагентам для технического обслуживания и аналитики</span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Мы не продаем и не передаем ваши данные третьим лицам для маркетинговых целей без вашего согласия.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Защита персональных данных</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Мы принимаем все необходимые меры для защиты ваших данных:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <Icon name="Shield" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Шифрование данных при передаче (SSL/TLS)</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Shield" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Ограничение доступа к персональным данным</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Shield" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Регулярное обновление систем безопасности</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Shield" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Соблюдение требований ФЗ-152 «О персональных данных»</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Использование cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Сайт использует файлы cookies для улучшения работы сервиса. Cookies — это небольшие текстовые файлы, сохраняемые на вашем устройстве.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Вы можете отключить cookies в настройках браузера, но это может ограничить функциональность Сайта.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Ваши права</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Вы имеете право:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Получать информацию об обработке ваших персональных данных</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Требовать уточнения, блокирования или удаления данных</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Отозвать согласие на обработку данных</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Обжаловать действия по обработке данных в Роскомнадзоре</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Срок хранения данных</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Персональные данные хранятся в течение срока, необходимого для достижения целей обработки, либо в течение сроков, установленных законодательством РФ. После истечения срока данные удаляются или обезличиваются.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Изменения в Политике</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Мы вправе вносить изменения в настоящую Политику. Актуальная версия всегда размещена на Сайте. Продолжая использовать Сайт после внесения изменений, вы соглашаетесь с новой редакцией Политики.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Контакты</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  По вопросам обработки персональных данных обращайтесь:
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

export default PrivacyPolicy;