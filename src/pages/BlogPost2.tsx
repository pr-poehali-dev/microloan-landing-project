import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const BlogPost2 = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
            <Icon name="ArrowLeft" className="mr-2" size={20} />
            Вернуться к блогу
          </Link>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Советы</span>
              <span>4 октября 2025</span>
              <span>•</span>
              <span>12 мин чтения</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              В чём разница между микрозаймом, потребкредитом и кредитной картой
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Когда срочно нужны деньги, многие теряются в разнообразии финансовых продуктов. На рынке доступны микрозаймы, потребительские кредиты и кредитные карты — каждый инструмент имеет свои особенности. Понимание их различий поможет выбрать оптимальный вариант и избежать переплат.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Что такое микрозайм</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Микрозайм — это небольшая сумма денег, которую можно получить на короткий срок с минимальными требованиями к заёмщику. Главная особенность микрозайма — скорость получения и простота оформления.
              </p>

              <p className="text-lg font-semibold text-foreground mb-4">Основные характеристики микрозайма:</p>
              <ul className="space-y-2 mb-6 text-lg text-muted-foreground">
                <li>Сумма: от 1 000 до 100 000 рублей</li>
                <li>Срок: от 5 до 30 дней (редко до 1 года)</li>
                <li>Процентная ставка: от 0,5% до 2% в день (180-730% годовых)</li>
                <li>Документы: только паспорт</li>
                <li>Время рассмотрения: 15 минут — 1 день</li>
              </ul>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Микрозайм онлайн можно оформить через интернет, не выходя из дома. Деньги поступают на карту в течение нескольких минут после одобрения заявки.
              </p>

              <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-r-lg">
                <p className="text-lg text-foreground">
                  <strong>Пример:</strong> Взяли 20 000 рублей на 2 недели под 1,5% в день. Переплата составит 4 200 рублей (20 000 × 1,5% × 14 дней).
                </p>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Что такое потребительский кредит</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Потребительский кредит — это банковская услуга, позволяющая получить крупную сумму денег на длительный срок под фиксированную процентную ставку. Банк тщательно проверяет платёжеспособность заёмщика.
              </p>

              <p className="text-lg font-semibold text-foreground mb-4">Потребительский кредит условия:</p>
              <ul className="space-y-2 mb-6 text-lg text-muted-foreground">
                <li>Сумма: от 50 000 до 3 000 000 рублей</li>
                <li>Срок: от 6 месяцев до 5 лет</li>
                <li>Процентная ставка: от 6% до 25% годовых</li>
                <li>Документы: паспорт, справка о доходах, трудовая книжка</li>
                <li>Время рассмотрения: 1-5 рабочих дней</li>
              </ul>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Разница между микрозаймом и кредитом заключается в сроках, суммах и требованиях к заёмщику. Банки предлагают более выгодные условия, но проводят строгую проверку.
              </p>

              <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-r-lg">
                <p className="text-lg text-foreground">
                  <strong>Пример:</strong> Кредит 500 000 рублей на 3 года под 15% годовых. Ежемесячный платёж — 17 326 рублей, общая переплата — 123 736 рублей.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Что такое кредитная карта</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Кредитная карта — это банковский продукт, предоставляющий возобновляемый кредитный лимит. Можно тратить деньги в пределах лимита и возвращать их постепенно.
              </p>

              <p className="text-lg font-semibold text-foreground mb-4">Особенности кредитных карт:</p>
              <ul className="space-y-2 mb-6 text-lg text-muted-foreground">
                <li>Кредитный лимит: от 10 000 до 500 000 рублей</li>
                <li>Срок действия: бессрочно (при соблюдении условий)</li>
                <li>Льготный период: 50-120 дней без процентов</li>
                <li>Процентная ставка: 20-40% годовых (после льготного периода)</li>
                <li>Обслуживание: 0-3 000 рублей в год</li>
              </ul>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Кредитные карты банков особенно удобны для регулярных покупок. Если погашать долг в льготный период, проценты не начисляются.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Кредитная карта с плохой кредитной историей доступна не во всех банках, но специализированные МФО предлагают такие продукты.
              </p>

              <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-r-lg">
                <p className="text-lg text-foreground">
                  <strong>Пример:</strong> Потратили 30 000 рублей, вернули через 20 дней — проценты не платите. Вернули через 70 дней — доплачиваете проценты за 20 дней сверх льготного периода.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Сравнительная таблица финансовых инструментов</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Критерий</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Микрозайм</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Потребкредит</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Кредитная карта</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Сумма</td>
                      <td className="border border-gray-300 px-4 py-3">до 100 тыс. руб.</td>
                      <td className="border border-gray-300 px-4 py-3">до 1-3 млн руб.</td>
                      <td className="border border-gray-300 px-4 py-3">до 500 тыс. руб.</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Срок</td>
                      <td className="border border-gray-300 px-4 py-3">до 30 дней</td>
                      <td className="border border-gray-300 px-4 py-3">до 5 лет</td>
                      <td className="border border-gray-300 px-4 py-3">бессрочно (с лимитом)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Проценты</td>
                      <td className="border border-gray-300 px-4 py-3">очень высокие (1-2% в день)</td>
                      <td className="border border-gray-300 px-4 py-3">средние (6-25% годовых)</td>
                      <td className="border border-gray-300 px-4 py-3">низкие при льготном периоде</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Документы</td>
                      <td className="border border-gray-300 px-4 py-3">только паспорт</td>
                      <td className="border border-gray-300 px-4 py-3">паспорт + справки о доходах</td>
                      <td className="border border-gray-300 px-4 py-3">паспорт + подтверждение дохода</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Скорость получения</td>
                      <td className="border border-gray-300 px-4 py-3">15 мин — 1 день</td>
                      <td className="border border-gray-300 px-4 py-3">1-5 дней</td>
                      <td className="border border-gray-300 px-4 py-3">1-3 дня после одобрения</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Требования к КИ</td>
                      <td className="border border-gray-300 px-4 py-3">минимальные</td>
                      <td className="border border-gray-300 px-4 py-3">хорошая КИ обязательна</td>
                      <td className="border border-gray-300 px-4 py-3">хорошая КИ желательна</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Основные риски</td>
                      <td className="border border-gray-300 px-4 py-3">долговая яма из-за высоких штрафов</td>
                      <td className="border border-gray-300 px-4 py-3">длительная долговая нагрузка</td>
                      <td className="border border-gray-300 px-4 py-3">соблазн тратить больше возможностей</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Когда лучше выбрать каждый вариант</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Микрозайм стоит выбрать, если:</h3>
              <ul className="space-y-2 mb-6 text-lg text-muted-foreground">
                <li>Нужна небольшая сумма до зарплаты</li>
                <li>Деньги нужны срочно (в течение часа)</li>
                <li>Плохая кредитная история не позволяет получить банковский кредит</li>
                <li>Уверены, что вернёте долг в срок</li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                <strong>Подходящая ситуация:</strong> до зарплаты 10 дней, а нужно 15 000 рублей на лечение. Займ на карту поможет решить проблему быстро.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Потребительский кредит подойдёт, когда:</h3>
              <ul className="space-y-2 mb-6 text-lg text-muted-foreground">
                <li>Планируете крупную покупку (ремонт, мебель, техника)</li>
                <li>Нужна большая сумма на длительный срок</li>
                <li>Есть стабильный доход и хорошая кредитная история</li>
                <li>Готовы собрать документы и подождать одобрения</li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                <strong>Подходящая ситуация:</strong> ремонт квартиры стоит 800 000 рублей. Кредит на 2 года позволит разбить платежи на удобные части.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Кредитную карту выгодно использовать для:</h3>
              <ul className="space-y-2 mb-6 text-lg text-muted-foreground">
                <li>Регулярных покупок с возможностью отсрочки платежа</li>
                <li>Непредвиденных расходов</li>
                <li>Покупок в интернете</li>
                <li>Получения кэшбэка и бонусов</li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                <strong>Подходящая ситуация:</strong> ежемесячные расходы 50 000 рублей, зарплата приходит 15 числа. Карта поможет покрывать расходы в начале месяца.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Практические советы по выбору</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Перед тем как решить «микрозайм или кредит — что лучше», оцените:
              </p>
              <ul className="space-y-2 mb-6 text-lg text-muted-foreground">
                <li>Реальную потребность в деньгах</li>
                <li>Свою способность вернуть долг в срок</li>
                <li>Общую стоимость займа с учётом всех комиссий</li>
                <li>Последствия просрочки платежей</li>
              </ul>

              <p className="text-lg font-semibold text-foreground mb-4">Золотые правила заёмщика:</p>
              <ul className="space-y-2 mb-8 text-lg text-muted-foreground">
                <li>Сравнивайте условия разных организаций</li>
                <li>Читайте договор полностью</li>
                <li>Рассчитывайте полную стоимость займа</li>
                <li>Не берите новые займы для погашения старых</li>
                <li>Всегда имейте план возврата денег</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Заключение</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Микрозайм и кредитная карта, потребительский кредит — каждый инструмент имеет своё назначение. Микрозаймы решают срочные проблемы, но дорого стоят. Потребительские кредиты подходят для крупных покупок при хорошей кредитной истории. Кредитные карты удобны для повседневных трат и дают финансовую гибкость.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Помните: любой займ — это ответственность. Заимствуйте разумно, учитывая свои финансовые возможности. Лучший займ — тот, который вы можете комфортно погасить без ущерба для семейного бюджета.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8 rounded-r-lg">
                <p className="text-lg text-foreground font-semibold">
                  Главное правило: если сомневаетесь в своей способности вернуть деньги в срок, лучше поискать альтернативные способы решения финансовых проблем.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link to="/">
                <Button size="lg" className="w-full md:w-auto">
                  Получить займ
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost2;
