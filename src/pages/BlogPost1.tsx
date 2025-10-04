import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const BlogPost1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    document.title = "Что такое микрозаймы и как они работают: простыми словами о займах онлайн";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Что такое микрозаймы простыми словами: как работают займы онлайн, условия получения микрозайма на карту, процесс оформления, плюсы и минусы. Полное руководство для заемщиков.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors">
              <Icon name="ArrowLeft" size={20} />
              Вернуться к блогу
            </Link>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 animate-fade-in">
              <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Icon name="Calendar" size={16} />
                  <span>15 марта 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Clock" size={16} />
                  <span>10 мин</span>
                </div>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                  Советы
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
                Что такое микрозаймы и как они работают
              </h1>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  В современной жизни ситуации, когда срочно нужны деньги до зарплаты, возникают у каждого. Сломалась стиральная машина, неожиданный счет за коммунальные услуги или просто не хватает средств на неотложные покупки – знакомо? Именно для таких случаев существуют микрозаймы. За последние годы они стали одним из самых популярных способов получить быстрые деньги, но важно понимать, как они устроены и какие подводные камни могут ждать заемщика.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">
                  Что такое микрозайм
                </h2>
                
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Что такое микрозаймы простыми словами? Это небольшая сумма денег (обычно от 1 000 до 100 000 рублей), которую можно получить очень быстро и на короткий срок. Представьте, что вы занимаете деньги у друга, но вместо друга выступает микрофинансовая организация (МФО).
                </p>

                <p className="text-foreground/80 leading-relaxed mb-4 font-semibold">
                  Главные отличия микрозайма от банковского кредита:
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex gap-3 text-foreground/80">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span><strong>Скорость получения:</strong> микрозайм можно получить за 15-30 минут, кредит в банке – за несколько дней</span>
                  </li>
                  <li className="flex gap-3 text-foreground/80">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span><strong>Документы:</strong> для микрозайма нужен только паспорт, для кредита – справки о доходах и другие документы</span>
                  </li>
                  <li className="flex gap-3 text-foreground/80">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span><strong>Сумма:</strong> микрозаймы обычно до 100 000 рублей, кредиты могут быть на миллионы</span>
                  </li>
                  <li className="flex gap-3 text-foreground/80">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span><strong>Срок:</strong> микрозаймы выдаются на 5-30 дней, кредиты – на месяцы и годы</span>
                  </li>
                  <li className="flex gap-3 text-foreground/80">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span><strong>Проценты:</strong> у микрозаймов они выше, но срок короче</span>
                  </li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">
                  Как работают микрозаймы
                </h2>

                <p className="text-foreground/80 leading-relaxed mb-6">
                  Процесс получения микрозайма выглядит предельно просто:
                </p>

                <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-foreground">
                  Шаг 1. Подача заявки
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Заходите на сайт МФО, заполняете простую анкету: ФИО, номер телефона, паспортные данные, сумма и срок займа. Многие компании предлагают микрозайм онлайн – весь процесс происходит через интернет.
                </p>

                <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-foreground">
                  Шаг 2. Рассмотрение заявки
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  МФО проверяет ваши данные и кредитную историю. Это занимает от 5 до 30 минут. Даже если у вас плохая кредитная история, шансы на одобрение остаются высокими.
                </p>

                <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-foreground">
                  Шаг 3. Одобрение и получение денег
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  При одобрении вы получаете микрозайм на карту в течение нескольких минут, либо можете забрать наличные в офисе компании.
                </p>

                <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-foreground">
                  Сроки и проценты
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Микрозаймы выдаются на срок от 5 до 30 дней. Проценты рассчитываются за каждый день пользования деньгами. Например:
                </p>

                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 mb-6 border-l-4 border-primary">
                  <ul className="space-y-2 text-foreground/80">
                    <li>Взяли 10 000 рублей на 14 дней под 1% в день</li>
                    <li>Переплата составит: 10 000 × 1% × 14 дней = 1 400 рублей</li>
                    <li className="font-semibold">Вернуть нужно: 11 400 рублей</li>
                  </ul>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-xl mb-8">
                  <p className="text-orange-900 font-semibold mb-2 flex items-center gap-2">
                    <Icon name="AlertTriangle" size={20} />
                    Важно!
                  </p>
                  <p className="text-orange-800">
                    Проценты по микрозаймам действительно высокие. Годовая ставка может достигать 365-700%. Но учитывайте, что берете деньги на очень короткий срок.
                  </p>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">
                  Условия получения микрозайма
                </h2>

                <p className="text-foreground/80 leading-relaxed mb-4">
                  Условия получения микрозайма максимально простые:
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex gap-3 text-foreground/80">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span><strong>Возраст:</strong> от 18 до 70 лет (в зависимости от МФО)</span>
                  </li>
                  <li className="flex gap-3 text-foreground/80">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span><strong>Гражданство:</strong> РФ</span>
                  </li>
                  <li className="flex gap-3 text-foreground/80">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span><strong>Документы:</strong> только паспорт</span>
                  </li>
                  <li className="flex gap-3 text-foreground/80">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span><strong>Банковская карта:</strong> нужна для получения денег онлайн</span>
                  </li>
                  <li className="flex gap-3 text-foreground/80">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span><strong>Мобильный телефон:</strong> для связи и подтверждения заявки</span>
                  </li>
                </ul>

                <p className="text-foreground/80 leading-relaxed mb-8 font-semibold text-lg">
                  Справки о доходах не требуются! Это главное преимущество микрозаймов для людей с неофициальным заработком, студентов, пенсионеров.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">
                  Плюсы и минусы микрозаймов
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                    <h3 className="text-xl font-bold mb-4 text-green-900 flex items-center gap-2">
                      <Icon name="ThumbsUp" size={24} />
                      Плюсы ✓
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex gap-2 text-green-800">
                        <Icon name="Check" className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                        <span>Получение денег за 15-30 минут</span>
                      </li>
                      <li className="flex gap-2 text-green-800">
                        <Icon name="Check" className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                        <span>Минимум документов</span>
                      </li>
                      <li className="flex gap-2 text-green-800">
                        <Icon name="Check" className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                        <span>Одобрение даже с плохой кредитной историей</span>
                      </li>
                      <li className="flex gap-2 text-green-800">
                        <Icon name="Check" className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                        <span>Не нужно искать поручителей</span>
                      </li>
                      <li className="flex gap-2 text-green-800">
                        <Icon name="Check" className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                        <span>Можно получить круглосуточно онлайн</span>
                      </li>
                      <li className="flex gap-2 text-green-800">
                        <Icon name="Check" className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                        <span>Первый займ часто под 0% или по льготной ставке</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
                    <h3 className="text-xl font-bold mb-4 text-red-900 flex items-center gap-2">
                      <Icon name="ThumbsDown" size={24} />
                      Минусы ✗
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex gap-2 text-red-800">
                        <Icon name="X" className="text-red-600 flex-shrink-0 mt-0.5" size={18} />
                        <span>Очень высокие проценты</span>
                      </li>
                      <li className="flex gap-2 text-red-800">
                        <Icon name="X" className="text-red-600 flex-shrink-0 mt-0.5" size={18} />
                        <span>Короткий срок возврата</span>
                      </li>
                      <li className="flex gap-2 text-red-800">
                        <Icon name="X" className="text-red-600 flex-shrink-0 mt-0.5" size={18} />
                        <span>Риск попасть в долговую яму</span>
                      </li>
                      <li className="flex gap-2 text-red-800">
                        <Icon name="X" className="text-red-600 flex-shrink-0 mt-0.5" size={18} />
                        <span>Высокие штрафы за просрочку</span>
                      </li>
                      <li className="flex gap-2 text-red-800">
                        <Icon name="X" className="text-red-600 flex-shrink-0 mt-0.5" size={18} />
                        <span>Небольшие суммы</span>
                      </li>
                      <li className="flex gap-2 text-red-800">
                        <Icon name="X" className="text-red-600 flex-shrink-0 mt-0.5" size={18} />
                        <span>Влияние на кредитную историю при неуплате</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">
                  Советы заемщикам
                </h2>

                <p className="text-foreground/80 leading-relaxed mb-6">
                  Чтобы микрозайм стал помощником, а не проблемой, следуйте простым правилам:
                </p>

                <div className="space-y-6 mb-8">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-2 text-blue-900">
                      1. Берите только при крайней необходимости
                    </h3>
                    <p className="text-blue-800">
                      Микрозайм – это экстренная помощь, а не способ жить от зарплаты до зарплаты.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-2 text-blue-900">
                      2. Сравнивайте условия разных МФО
                    </h3>
                    <p className="text-blue-800">
                      Ставки могут отличаться в 2-3 раза. Изучите предложения минимум 3-5 компаний.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-2 text-blue-900">
                      3. Рассчитывайте свои возможности
                    </h3>
                    <p className="text-blue-800">
                      Берите столько, сколько точно сможете вернуть в срок. Лучше взять меньше, чем потом доплачивать штрафы.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-2 text-blue-900">
                      4. Погашайте вовремя
                    </h3>
                    <p className="text-blue-800">
                      Даже один день просрочки может увеличить долг на 10-20%. Ставьте напоминания в телефоне.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-2 text-blue-900">
                      5. Изучите договор
                    </h3>
                    <p className="text-blue-800">
                      Обращайте внимание на размер штрафов, способы погашения, возможность досрочного возврата.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 mb-8 border-l-4 border-purple-500">
                  <p className="text-purple-900 font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Lightbulb" size={20} />
                    Пример из жизни:
                  </p>
                  <p className="text-purple-800">
                    Анна взяла 15 000 рублей на ремонт холодильника на 10 дней под 1,5% в день. Переплата составила 2 250 рублей. Она вернула долг вовремя и решила проблему. Но если бы она просрочила на неделю, переплата увеличилась бы до 4-5 тысяч рублей.
                  </p>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">
                  Заключение
                </h2>

                <p className="text-foreground/80 leading-relaxed mb-6">
                  Микрозайм может стать полезным финансовым инструментом для решения срочных вопросов, если пользоваться им ответственно. Это быстрый способ получить нужную сумму без походов в банк и сбора справок. Однако высокие проценты и короткие сроки требуют четкого понимания своих финансовых возможностей.
                </p>

                <p className="text-foreground/80 leading-relaxed mb-6">
                  Помните: микрозайм – это краткосрочное решение для экстренных ситуаций. Используйте его разумно, всегда возвращайте деньги в срок, и тогда этот финансовый инструмент станет вашим надежным помощником, а не источником проблем.
                </p>

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center mb-8">
                  <p className="text-xl font-bold text-foreground">
                    Главное правило: занимаете сегодня – возвращаете завтра. Именно для этого созданы микрозаймы.
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <Link to="/blog">
                    <Button variant="outline" className="gap-2">
                      <Icon name="ArrowLeft" size={20} />
                      Все статьи блога
                    </Button>
                  </Link>
                  
                  <Link to="/">
                    <Button className="bg-gradient-to-r from-orange-400 via-pink-400 to-teal-400 gap-2">
                      Получить займ сейчас
                      <Icon name="Sparkles" size={20} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost1;
