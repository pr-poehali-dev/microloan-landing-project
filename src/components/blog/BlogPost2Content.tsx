import Icon from "@/components/ui/icon";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BlogPost2Content = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <p className="text-xl text-muted-foreground leading-relaxed mb-8">
        Когда срочно нужны деньги, многие теряются в разнообразии финансовых продуктов. На рынке доступны микрозаймы, потребительские кредиты и кредитные карты — каждый инструмент имеет свои особенности. Понимание их различий поможет выбрать оптимальный вариант и избежать переплат.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">Что такое микрозайм</h2>
      <p className="text-foreground/80 leading-relaxed mb-6">
        Микрозайм — это небольшая сумма денег, которую можно получить на короткий срок с минимальными требованиями к заёмщику. Главная особенность микрозайма — скорость получения и простота оформления.
      </p>

      <p className="text-lg font-semibold text-foreground mb-4">Основные характеристики микрозайма:</p>
      <ul className="space-y-3 mb-6">
        <li className="flex gap-3 text-foreground/80">
          <Icon name="Banknote" className="text-primary flex-shrink-0 mt-1" size={20} />
          <span><strong>Сумма:</strong> от 1 000 до 100 000 рублей</span>
        </li>
        <li className="flex gap-3 text-foreground/80">
          <Icon name="Clock" className="text-primary flex-shrink-0 mt-1" size={20} />
          <span><strong>Срок:</strong> от 5 до 30 дней (редко до 1 года)</span>
        </li>
        <li className="flex gap-3 text-foreground/80">
          <Icon name="TrendingUp" className="text-primary flex-shrink-0 mt-1" size={20} />
          <span><strong>Процентная ставка:</strong> от 0,5% до 2% в день (180-730% годовых)</span>
        </li>
        <li className="flex gap-3 text-foreground/80">
          <Icon name="FileText" className="text-primary flex-shrink-0 mt-1" size={20} />
          <span><strong>Документы:</strong> только паспорт</span>
        </li>
        <li className="flex gap-3 text-foreground/80">
          <Icon name="Zap" className="text-primary flex-shrink-0 mt-1" size={20} />
          <span><strong>Время рассмотрения:</strong> 15 минут — 1 день</span>
        </li>
      </ul>

      <p className="text-foreground/80 leading-relaxed mb-6">
        Микрозайм онлайн можно оформить через интернет, не выходя из дома. Деньги поступают на карту в течение нескольких минут после одобрения заявки.
      </p>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-primary p-6 my-8 rounded-xl">
        <p className="text-lg text-foreground flex items-start gap-3">
          <Icon name="Calculator" className="text-primary flex-shrink-0 mt-1" size={24} />
          <span><strong>Пример:</strong> Взяли 20 000 рублей на 2 недели под 1,5% в день. Переплата составит 4 200 рублей (20 000 × 1,5% × 14 дней).</span>
        </p>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">Что такое потребительский кредит</h2>
      <p className="text-foreground/80 leading-relaxed mb-6">
        Потребительский кредит — это банковская услуга, позволяющая получить крупную сумму денег на длительный срок под фиксированную процентную ставку. Банк тщательно проверяет платёжеспособность заёмщика.
      </p>

      <p className="text-lg font-semibold text-foreground mb-4">Потребительский кредит условия:</p>
      <ul className="space-y-3 mb-6">
        <li className="flex gap-3 text-foreground/80">
          <Icon name="Coins" className="text-green-600 flex-shrink-0 mt-1" size={20} />
          <span><strong>Сумма:</strong> от 50 000 до 3 000 000 рублей</span>
        </li>
        <li className="flex gap-3 text-foreground/80">
          <Icon name="Calendar" className="text-green-600 flex-shrink-0 mt-1" size={20} />
          <span><strong>Срок:</strong> от 6 месяцев до 5 лет</span>
        </li>
        <li className="flex gap-3 text-foreground/80">
          <Icon name="Percent" className="text-green-600 flex-shrink-0 mt-1" size={20} />
          <span><strong>Процентная ставка:</strong> от 6% до 25% годовых</span>
        </li>
        <li className="flex gap-3 text-foreground/80">
          <Icon name="Files" className="text-green-600 flex-shrink-0 mt-1" size={20} />
          <span><strong>Документы:</strong> паспорт, справка о доходах, трудовая книжка</span>
        </li>
        <li className="flex gap-3 text-foreground/80">
          <Icon name="Timer" className="text-green-600 flex-shrink-0 mt-1" size={20} />
          <span><strong>Время рассмотрения:</strong> 1-5 рабочих дней</span>
        </li>
      </ul>

      <p className="text-foreground/80 leading-relaxed mb-6">
        Разница между микрозаймом и кредитом заключается в сроках, суммах и требованиях к заёмщику. Банки предлагают более выгодные условия, но проводят строгую проверку.
      </p>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 my-8 rounded-xl">
        <p className="text-lg text-foreground flex items-start gap-3">
          <Icon name="Calculator" className="text-green-600 flex-shrink-0 mt-1" size={24} />
          <span><strong>Пример:</strong> Кредит 500 000 рублей на 3 года под 15% годовых. Ежемесячный платёж — 17 326 рублей, общая переплата — 123 736 рублей.</span>
        </p>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">Что такое кредитная карта</h2>
      <p className="text-foreground/80 leading-relaxed mb-6">
        Кредитная карта — это банковский продукт, предоставляющий возобновляемый кредитный лимит. Можно тратить деньги в пределах лимита и возвращать их постепенно.
      </p>

      <p className="text-lg font-semibold text-foreground mb-4">Особенности кредитных карт:</p>
      <ul className="space-y-3 mb-6">
        <li className="flex gap-3 text-foreground/80">
          <Icon name="CreditCard" className="text-purple-600 flex-shrink-0 mt-1" size={20} />
          <span><strong>Кредитный лимит:</strong> от 10 000 до 500 000 рублей</span>
        </li>
        <li className="flex gap-3 text-foreground/80">
          <Icon name="Infinity" className="text-purple-600 flex-shrink-0 mt-1" size={20} />
          <span><strong>Срок действия:</strong> бессрочно (при соблюдении условий)</span>
        </li>
        <li className="flex gap-3 text-foreground/80">
          <Icon name="Gift" className="text-purple-600 flex-shrink-0 mt-1" size={20} />
          <span><strong>Льготный период:</strong> 50-120 дней без процентов</span>
        </li>
        <li className="flex gap-3 text-foreground/80">
          <Icon name="TrendingUp" className="text-purple-600 flex-shrink-0 mt-1" size={20} />
          <span><strong>Процентная ставка:</strong> 20-40% годовых (после льготного периода)</span>
        </li>
        <li className="flex gap-3 text-foreground/80">
          <Icon name="Wallet" className="text-purple-600 flex-shrink-0 mt-1" size={20} />
          <span><strong>Обслуживание:</strong> 0-3 000 рублей в год</span>
        </li>
      </ul>

      <p className="text-foreground/80 leading-relaxed mb-6">
        Кредитные карты банков особенно удобны для регулярных покупок. Если погашать долг в льготный период, проценты не начисляются.
      </p>

      <p className="text-foreground/80 leading-relaxed mb-6">
        Кредитная карта с плохой кредитной историей доступна не во всех банках, но специализированные МФО предлагают такие продукты.
      </p>

      <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6 my-8 rounded-xl">
        <p className="text-lg text-foreground flex items-start gap-3">
          <Icon name="Calculator" className="text-purple-600 flex-shrink-0 mt-1" size={24} />
          <span><strong>Пример:</strong> Потратили 30 000 рублей, вернули через 20 дней — проценты не платите. Вернули через 70 дней — доплачиваете проценты за 20 дней сверх льготного периода.</span>
        </p>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">Сравнительная таблица финансовых инструментов</h2>
      <div className="overflow-x-auto mb-8 rounded-xl border border-gray-200">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <th className="border-b-2 border-primary/20 px-6 py-4 text-left font-bold text-foreground">Критерий</th>
              <th className="border-b-2 border-primary/20 px-6 py-4 text-left font-bold text-foreground">Микрозайм</th>
              <th className="border-b-2 border-primary/20 px-6 py-4 text-left font-bold text-foreground">Потребкредит</th>
              <th className="border-b-2 border-primary/20 px-6 py-4 text-left font-bold text-foreground">Кредитная карта</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="border-b border-gray-200 px-6 py-4 font-semibold text-foreground">Сумма</td>
              <td className="border-b border-gray-200 px-6 py-4">до 100 тыс. руб.</td>
              <td className="border-b border-gray-200 px-6 py-4">до 1-3 млн руб.</td>
              <td className="border-b border-gray-200 px-6 py-4">до 500 тыс. руб.</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="border-b border-gray-200 px-6 py-4 font-semibold text-foreground">Срок</td>
              <td className="border-b border-gray-200 px-6 py-4">до 30 дней</td>
              <td className="border-b border-gray-200 px-6 py-4">до 5 лет</td>
              <td className="border-b border-gray-200 px-6 py-4">бессрочно (с лимитом)</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="border-b border-gray-200 px-6 py-4 font-semibold text-foreground">Проценты</td>
              <td className="border-b border-gray-200 px-6 py-4">очень высокие (1-2% в день)</td>
              <td className="border-b border-gray-200 px-6 py-4">средние (6-25% годовых)</td>
              <td className="border-b border-gray-200 px-6 py-4">низкие при льготном периоде</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="border-b border-gray-200 px-6 py-4 font-semibold text-foreground">Документы</td>
              <td className="border-b border-gray-200 px-6 py-4">только паспорт</td>
              <td className="border-b border-gray-200 px-6 py-4">паспорт + справки о доходах</td>
              <td className="border-b border-gray-200 px-6 py-4">паспорт + подтверждение дохода</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="border-b border-gray-200 px-6 py-4 font-semibold text-foreground">Скорость получения</td>
              <td className="border-b border-gray-200 px-6 py-4">15 мин — 1 день</td>
              <td className="border-b border-gray-200 px-6 py-4">1-5 дней</td>
              <td className="border-b border-gray-200 px-6 py-4">1-3 дня после одобрения</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="border-b border-gray-200 px-6 py-4 font-semibold text-foreground">Требования к КИ</td>
              <td className="border-b border-gray-200 px-6 py-4">минимальные</td>
              <td className="border-b border-gray-200 px-6 py-4">хорошая КИ обязательна</td>
              <td className="border-b border-gray-200 px-6 py-4">хорошая КИ желательна</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-semibold text-foreground">Основные риски</td>
              <td className="px-6 py-4">долговая яма из-за высоких штрафов</td>
              <td className="px-6 py-4">длительная долговая нагрузка</td>
              <td className="px-6 py-4">соблазн тратить больше возможностей</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">Когда лучше выбрать каждый вариант</h2>
      
      <div className="space-y-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-blue-500">
          <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
            <Icon name="Zap" size={24} />
            Микрозайм стоит выбрать, если:
          </h3>
          <ul className="space-y-3">
            <li className="flex gap-3 text-blue-800">
              <Icon name="Check" className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
              <span>Нужна небольшая сумма до зарплаты</span>
            </li>
            <li className="flex gap-3 text-blue-800">
              <Icon name="Check" className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
              <span>Деньги нужны срочно (в течение часа)</span>
            </li>
            <li className="flex gap-3 text-blue-800">
              <Icon name="Check" className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
              <span>Плохая кредитная история не позволяет получить банковский кредит</span>
            </li>
            <li className="flex gap-3 text-blue-800">
              <Icon name="Check" className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
              <span>Уверены, что вернёте долг в срок</span>
            </li>
          </ul>
          <p className="text-blue-900 mt-4 p-4 bg-blue-100 rounded-lg">
            <strong>Подходящая ситуация:</strong> до зарплаты 10 дней, а нужно 15 000 рублей на лечение. Займ на карту поможет решить проблему быстро.
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500">
          <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
            <Icon name="Building2" size={24} />
            Потребительский кредит подойдёт, когда:
          </h3>
          <ul className="space-y-3">
            <li className="flex gap-3 text-green-800">
              <Icon name="Check" className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
              <span>Планируете крупную покупку (ремонт, мебель, техника)</span>
            </li>
            <li className="flex gap-3 text-green-800">
              <Icon name="Check" className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
              <span>Нужна большая сумма на длительный срок</span>
            </li>
            <li className="flex gap-3 text-green-800">
              <Icon name="Check" className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
              <span>Есть стабильный доход и хорошая кредитная история</span>
            </li>
            <li className="flex gap-3 text-green-800">
              <Icon name="Check" className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
              <span>Готовы собрать документы и подождать одобрения</span>
            </li>
          </ul>
          <p className="text-green-900 mt-4 p-4 bg-green-100 rounded-lg">
            <strong>Подходящая ситуация:</strong> ремонт квартиры стоит 800 000 рублей. Кредит на 2 года позволит разбить платежи на удобные части.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500">
          <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
            <Icon name="CreditCard" size={24} />
            Кредитную карту выгодно использовать для:
          </h3>
          <ul className="space-y-3">
            <li className="flex gap-3 text-purple-800">
              <Icon name="Check" className="text-purple-600 flex-shrink-0 mt-0.5" size={18} />
              <span>Регулярных покупок с возможностью отсрочки платежа</span>
            </li>
            <li className="flex gap-3 text-purple-800">
              <Icon name="Check" className="text-purple-600 flex-shrink-0 mt-0.5" size={18} />
              <span>Непредвиденных расходов</span>
            </li>
            <li className="flex gap-3 text-purple-800">
              <Icon name="Check" className="text-purple-600 flex-shrink-0 mt-0.5" size={18} />
              <span>Покупок в интернете</span>
            </li>
            <li className="flex gap-3 text-purple-800">
              <Icon name="Check" className="text-purple-600 flex-shrink-0 mt-0.5" size={18} />
              <span>Получения кэшбэка и бонусов</span>
            </li>
          </ul>
          <p className="text-purple-900 mt-4 p-4 bg-purple-100 rounded-lg">
            <strong>Подходящая ситуация:</strong> ежемесячные расходы 50 000 рублей, зарплата приходит 15 числа. Карта поможет покрывать расходы в начале месяца.
          </p>
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">Практические советы по выбору</h2>
      <p className="text-foreground/80 leading-relaxed mb-6">
        Перед тем как решить «микрозайм или кредит — что лучше», оцените:
      </p>
      
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="flex gap-3 p-4 bg-amber-50 rounded-lg">
          <Icon name="Target" className="text-amber-600 flex-shrink-0 mt-1" size={20} />
          <span className="text-amber-900">Реальную потребность в деньгах</span>
        </div>
        <div className="flex gap-3 p-4 bg-amber-50 rounded-lg">
          <Icon name="WalletCards" className="text-amber-600 flex-shrink-0 mt-1" size={20} />
          <span className="text-amber-900">Свою способность вернуть долг в срок</span>
        </div>
        <div className="flex gap-3 p-4 bg-amber-50 rounded-lg">
          <Icon name="Calculator" className="text-amber-600 flex-shrink-0 mt-1" size={20} />
          <span className="text-amber-900">Общую стоимость займа с учётом всех комиссий</span>
        </div>
        <div className="flex gap-3 p-4 bg-amber-50 rounded-lg">
          <Icon name="AlertCircle" className="text-amber-600 flex-shrink-0 mt-1" size={20} />
          <span className="text-amber-900">Последствия просрочки платежей</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 mb-8 border-l-4 border-indigo-500">
        <p className="text-lg font-bold text-indigo-900 mb-4 flex items-center gap-2">
          <Icon name="Star" size={24} />
          Золотые правила заёмщика:
        </p>
        <ul className="space-y-3">
          <li className="flex gap-3 text-indigo-800">
            <Icon name="CheckCircle2" className="text-indigo-600 flex-shrink-0 mt-0.5" size={18} />
            <span>Сравнивайте условия разных организаций</span>
          </li>
          <li className="flex gap-3 text-indigo-800">
            <Icon name="CheckCircle2" className="text-indigo-600 flex-shrink-0 mt-0.5" size={18} />
            <span>Читайте договор полностью</span>
          </li>
          <li className="flex gap-3 text-indigo-800">
            <Icon name="CheckCircle2" className="text-indigo-600 flex-shrink-0 mt-0.5" size={18} />
            <span>Рассчитывайте полную стоимость займа</span>
          </li>
          <li className="flex gap-3 text-indigo-800">
            <Icon name="CheckCircle2" className="text-indigo-600 flex-shrink-0 mt-0.5" size={18} />
            <span>Не берите новые займы для погашения старых</span>
          </li>
          <li className="flex gap-3 text-indigo-800">
            <Icon name="CheckCircle2" className="text-indigo-600 flex-shrink-0 mt-0.5" size={18} />
            <span>Всегда имейте план возврата денег</span>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">Заключение</h2>
      <p className="text-foreground/80 leading-relaxed mb-6">
        Микрозайм и кредитная карта, потребительский кредит — каждый инструмент имеет своё назначение. Микрозаймы решают срочные проблемы, но дорого стоят. Потребительские кредиты подходят для крупных покупок при хорошей кредитной истории. Кредитные карты удобны для повседневных трат и дают финансовую гибкость.
      </p>
      <p className="text-foreground/80 leading-relaxed mb-6">
        Помните: любой займ — это ответственность. Заимствуйте разумно, учитывая свои финансовые возможности. Лучший займ — тот, который вы можете комфортно погасить без ущерба для семейного бюджета.
      </p>
      
      <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-6 my-8 rounded-xl">
        <p className="text-lg text-orange-900 font-bold flex items-center gap-3">
          <Icon name="ShieldAlert" className="flex-shrink-0" size={28} />
          <span>Главное правило: если сомневаетесь в своей способности вернуть деньги в срок, лучше поискать альтернативные способы решения финансовых проблем.</span>
        </p>
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
  );
};

export default BlogPost2Content;
