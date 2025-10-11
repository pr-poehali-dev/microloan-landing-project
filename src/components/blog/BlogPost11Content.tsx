import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const BlogPost11Content = () => {
  return (
    <article className="prose prose-lg max-w-4xl mx-auto">
      <div className="mb-8">
        <img 
          src="/img/75826ede-4073-4327-905a-4148e15193c9.jpg" 
          alt="Почему банки и МФО отказывают в кредитах" 
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>

      <p className="lead text-xl text-muted-foreground leading-relaxed">
        Каждый, кто пытался оформить кредит или <Link to="/blog/chto-takoe-mikrozajmy" className="text-primary hover:underline">микрозайм</Link>, хотя бы раз сталкивался с отказом. Но почему банки и МФО отказывают так часто? В этой статье мы разберём реальные причины отказов, расскажем, что проверяют кредиторы, и дадим советы, как увеличить шанс одобрения.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
        <p className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
          <Icon name="Info" size={20} />
          Статистика
        </p>
        <p className="text-amber-800 m-0">
          По данным Центробанка РФ, в 2024 году банки отказали в выдаче кредитов почти 40% заявителей. У МФО процент одобрения выше — около 70-80%, но и там отказы случаются регулярно.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Основные причины отказов банков и МФО</h2>

      <p className="text-muted-foreground leading-relaxed">
        Понимание причин отказа поможет вам подготовиться заранее и повысить шансы на одобрение. Рассмотрим самые распространённые факторы, из-за которых отказывают кредиторы.
      </p>

      <h3 className="text-2xl font-semibold text-foreground mt-10 mb-5">1. Плохая кредитная история</h3>

      <p className="text-muted-foreground leading-relaxed">
        Это главная причина отказов в банках. Кредитная история (КИ) показывает, насколько ответственно вы обращаетесь с деньгами: были ли просрочки, закрыты ли старые долги, сколько кредитов оформлено одновременно.
      </p>

      <div className="bg-card border border-border rounded-lg p-6 my-6">
        <h4 className="text-lg font-bold text-foreground mt-0 mb-3">Что учитывается при проверке КИ:</h4>
        <ul className="space-y-2 m-0">
          <li className="flex items-start gap-2">
            <Icon name="MinusCircle" size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
            <span className="text-muted-foreground"><strong>Просрочки по кредитам:</strong> даже один день задержки попадает в БКИ</span>
          </li>
          <li className="flex items-start gap-2">
            <Icon name="MinusCircle" size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
            <span className="text-muted-foreground"><strong>Непогашенные долги:</strong> активные задолженности снижают вероятность одобрения</span>
          </li>
          <li className="flex items-start gap-2">
            <Icon name="MinusCircle" size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
            <span className="text-muted-foreground"><strong>Большое количество заявок:</strong> если вы подали 10+ заявок за месяц, это выглядит подозрительно</span>
          </li>
          <li className="flex items-start gap-2">
            <Icon name="MinusCircle" size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
            <span className="text-muted-foreground"><strong>Банкротство:</strong> если вы проходили процедуру банкротства, банки будут отказывать минимум 5 лет</span>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 my-6">
        <p className="font-semibold text-blue-900 mb-2">Разница между банками и МФО:</p>
        <p className="text-blue-800 mb-3">
          <strong>Банки</strong> строго проверяют КИ и отказывают при малейших просрочках. <strong>МФО</strong> более лояльны — многие выдают займы даже с <Link to="/blog/mfo-kredit-s-plohoj-kreditnoj-istoriej" className="text-blue-900 hover:underline font-semibold">плохой кредитной историей</Link> или вообще не проверяют её (например, «Надо денег»).
        </p>
        <p className="text-blue-800 m-0">
          Однако у МФО процентные ставки выше, а суммы меньше.
        </p>
      </div>

      <h3 className="text-2xl font-semibold text-foreground mt-10 mb-5">2. Низкий или нестабильный доход</h3>

      <p className="text-muted-foreground leading-relaxed">
        Банки и МФО оценивают вашу платёжеспособность — сможете ли вы вернуть деньги. Если доход слишком мал или его источник нестабилен, вероятность отказа высока.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-card border border-border rounded-lg p-5">
          <h4 className="text-lg font-bold text-foreground mt-0 mb-3 flex items-center gap-2">
            <Icon name="Building2" size={22} className="text-primary" />
            Банки
          </h4>
          <ul className="space-y-2 m-0 text-sm">
            <li className="flex items-start gap-2">
              <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">Требуют официальное трудоустройство</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">Минимальный доход от 15-30 тыс. ₽</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">Справка 2-НДФЛ обязательна</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">Стаж работы минимум 3-6 месяцев</span>
            </li>
          </ul>
        </div>

        <div className="bg-card border border-border rounded-lg p-5">
          <h4 className="text-lg font-bold text-foreground mt-0 mb-3 flex items-center gap-2">
            <Icon name="Wallet" size={22} className="text-primary" />
            МФО
          </h4>
          <ul className="space-y-2 m-0 text-sm">
            <li className="flex items-start gap-2">
              <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">Справки не требуются</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">Неофициальный доход приемлем</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">Минимум от 5-10 тыс. ₽</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">Выдают студентам и пенсионерам</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-6 rounded-r-lg">
        <p className="font-semibold text-yellow-900 mb-2 flex items-center gap-2">
          <Icon name="AlertTriangle" size={20} />
          Важно
        </p>
        <p className="text-yellow-800 m-0">
          Даже если у вас высокий доход, но кредитная нагрузка превышает 50% (то есть на погашение долгов уходит больше половины дохода), банк может отказать.
        </p>
      </div>

      <h3 className="text-2xl font-semibold text-foreground mt-10 mb-5">3. Возраст и регистрация</h3>

      <p className="text-muted-foreground leading-relaxed">
        Кредиторы устанавливают возрастные ограничения и требования к месту регистрации. Это связано с рисками невозврата.
      </p>

      <div className="bg-card border border-border rounded-lg p-6 my-6">
        <h4 className="text-lg font-bold text-foreground mt-0 mb-3">Требования к заёмщику:</h4>
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-foreground mb-2">Возраст:</p>
            <ul className="space-y-2 m-0">
              <li className="flex items-start gap-2">
                <Icon name="User" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><strong>Банки:</strong> от 21-23 до 65-70 лет</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="User" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><strong>МФО:</strong> от 18 до 70-80 лет (более гибкие условия)</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-foreground mb-2">Регистрация:</p>
            <ul className="space-y-2 m-0">
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Некоторые банки работают только в определённых регионах</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Без постоянной регистрации в РФ получить кредит почти невозможно</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">МФО обычно работают по всей России</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-foreground mt-10 mb-5">4. Частые обращения за займами и высокая кредитная нагрузка</h3>

      <p className="text-muted-foreground leading-relaxed">
        Если вы за месяц подали 10-15 заявок в разные банки и МФО, это вызывает подозрения. Кредиторы видят это в вашей КИ и думают: «Если все отказывают, значит, что-то не так».
      </p>

      <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
        <h4 className="text-lg font-bold text-red-900 mt-0 mb-3 flex items-center gap-2">
          <Icon name="AlertCircle" size={22} />
          Что проверяют скоринговые системы:
        </h4>
        <ul className="space-y-3 m-0">
          <li className="flex items-start gap-2">
            <Icon name="TrendingDown" size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
            <span className="text-red-800"><strong>Количество активных кредитов:</strong> если у вас уже 3-5 займов, новый одобрят вряд ли</span>
          </li>
          <li className="flex items-start gap-2">
            <Icon name="TrendingDown" size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
            <span className="text-red-800"><strong>Долговая нагрузка:</strong> отношение ежемесячных платежей к доходу не должно превышать 50%</span>
          </li>
          <li className="flex items-start gap-2">
            <Icon name="TrendingDown" size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
            <span className="text-red-800"><strong>Частота обращений:</strong> более 5 заявок в месяц — тревожный сигнал</span>
          </li>
          <li className="flex items-start gap-2">
            <Icon name="TrendingDown" size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
            <span className="text-red-800"><strong>«Кредитные каникулы»:</strong> если вы часто переносите платежи, это тоже учитывается</span>
          </li>
        </ul>
      </div>

      <p className="text-muted-foreground leading-relaxed">
        Лучше подать 2-3 целевые заявки в проверенные организации, чем разослать 20 заявок наугад.
      </p>

      <h3 className="text-2xl font-semibold text-foreground mt-10 mb-5">5. Ошибки при заполнении заявки</h3>

      <p className="text-muted-foreground leading-relaxed">
        Казалось бы, мелочь, но неправильно указанные данные могут привести к автоматическому отказу. Банки и МФО используют автоматизированные системы проверки, которые моментально отклоняют заявки с несоответствиями.
      </p>

      <div className="bg-card border border-border rounded-lg p-6 my-6">
        <h4 className="text-lg font-bold text-foreground mt-0 mb-4">Примеры ошибок, которые приводят к отказу:</h4>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-secondary/20 rounded-lg">
            <Icon name="XCircle" size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground m-0 mb-1">Опечатки в паспортных данных</p>
              <p className="text-sm text-muted-foreground m-0">Неправильная серия/номер паспорта, дата выдачи</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-secondary/20 rounded-lg">
            <Icon name="XCircle" size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground m-0 mb-1">Неверный номер телефона</p>
              <p className="text-sm text-muted-foreground m-0">Система не может до вас дозвониться для подтверждения</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-secondary/20 rounded-lg">
            <Icon name="XCircle" size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground m-0 mb-1">Недостоверная информация о доходах</p>
              <p className="text-sm text-muted-foreground m-0">Завышение зарплаты легко проверяется через базы данных</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-secondary/20 rounded-lg">
            <Icon name="XCircle" size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground m-0 mb-1">Несовпадение данных с БКИ</p>
              <p className="text-sm text-muted-foreground m-0">Если в анкете указали одно место работы, а в КИ другое</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
        <p className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
          <Icon name="Lightbulb" size={20} />
          Совет
        </p>
        <p className="text-blue-800 m-0">
          Проверяйте все данные дважды перед отправкой заявки. Особенно паспорт, СНИЛС, номер телефона и адрес регистрации. Подробнее читайте в статье <Link to="/blog/kakie-dokumenty-nuzhny-dlya-mikrozajma" className="text-blue-900 hover:underline font-semibold">какие документы нужны для микрозайма</Link>.
        </p>
      </div>

      <h3 className="text-2xl font-semibold text-foreground mt-10 mb-5">6. Прочие факторы</h3>

      <p className="text-muted-foreground leading-relaxed">
        Есть и другие причины отказов, которые не всегда очевидны:
      </p>

      <ul className="space-y-3 my-6">
        <li className="flex items-start gap-3">
          <Icon name="Users" size={20} className="text-orange-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-foreground m-0">Плохая репутация работодателя</p>
            <p className="text-sm text-muted-foreground m-0">Если ваша компания числится в «чёрных списках» банков, одобрение маловероятно</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <Icon name="TrendingDown" size={20} className="text-orange-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-foreground m-0">Внутренние лимиты МФО/банка</p>
            <p className="text-sm text-muted-foreground m-0">Иногда организация просто исчерпала дневной лимит выдач или работает с ограничениями ЦБ</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <Icon name="BarChart3" size={20} className="text-orange-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-foreground m-0">Экономическая ситуация</p>
            <p className="text-sm text-muted-foreground m-0">В кризис банки ужесточают требования, а МФО снижают суммы выдач</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <Icon name="Shield" size={20} className="text-orange-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-foreground m-0">Подозрение в мошенничестве</p>
            <p className="text-sm text-muted-foreground m-0">Если система считает вашу заявку подозрительной (например, VPN, чужое устройство), последует отказ</p>
          </div>
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Советы для повышения шанса одобрения</h2>

      <p className="text-muted-foreground leading-relaxed">
        Теперь, когда вы знаете причины отказов, давайте разберём, как увеличить вероятность одобрения кредита или займа.
      </p>

      <div className="space-y-6 my-8">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
              1
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mt-0 mb-2">Улучшите кредитную историю</h3>
              <ul className="space-y-2 m-0">
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Закройте старые долги, даже небольшие просрочки</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Возьмите небольшой займ в МФО и верните вовремя — это добавит положительную запись</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Проверьте свою КИ на сайте Госуслуг — там могут быть ошибки, которые можно оспорить</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mt-0 mb-2">Подтвердите доход</h3>
              <ul className="space-y-2 m-0">
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Если работаете официально — предоставьте справку 2-НДФЛ</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Для фрилансеров — выписка с банковского счёта за последние 3-6 месяцев</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Чем выше подтверждённый доход, тем больше сумму одобрят</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mt-0 mb-2">Выберите подходящую МФО или банк</h3>
              <p className="text-muted-foreground mb-3">
                Не подавайте заявки во все подряд. <Link to="/blog/kak-vybrat-nadezhnuyu-mfo" className="text-primary hover:underline font-semibold">Изучите условия</Link> 2-3 организаций и выберите ту, которая подходит именно вам.
              </p>
              <ul className="space-y-2 m-0">
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" size={18} className="text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">С плохой КИ → обращайтесь в <Link to="/blog/mfo-s-momentalnym-odobreniem" className="text-purple-700 hover:underline">МФО с моментальным одобрением</Link></span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" size={18} className="text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Нужна большая сумма на долгий срок → идите в банк с хорошей КИ</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" size={18} className="text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Срочно нужны деньги → МФО одобряют за 5-15 минут</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
              4
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mt-0 mb-2">Заполняйте заявку внимательно</h3>
              <ul className="space-y-2 m-0">
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" size={18} className="text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Проверяйте паспортные данные, номер телефона, адрес</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" size={18} className="text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Не завышайте доход — система всё проверит</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" size={18} className="text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Используйте реальный номер телефона, по которому можно связаться</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
              5
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mt-0 mb-2">Снизьте кредитную нагрузку</h3>
              <ul className="space-y-2 m-0">
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" size={18} className="text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Закройте старые кредиты, если есть возможность</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" size={18} className="text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Не берите новые займы, пока не погасили текущие</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" size={18} className="text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Подавайте заявки не чаще 1 раза в неделю</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Частые вопросы</h2>

      <div className="space-y-6 my-8">
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-xl font-bold text-foreground mt-0 mb-3">Что делать, если банк отказал?</h3>
          <p className="text-muted-foreground leading-relaxed m-0">
            Узнайте причину отказа (можно позвонить в банк). Если это плохая КИ — работайте над её улучшением. Если низкий доход — попробуйте взять меньшую сумму или обратиться в МФО. Не подавайте сразу 10 заявок в разные банки — это ухудшит ситуацию.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-xl font-bold text-foreground mt-0 mb-3">Можно ли получить займ с плохой кредитной историей?</h3>
          <p className="text-muted-foreground leading-relaxed m-0">
            Да! МФО более лояльны к заёмщикам с просрочками. Некоторые компании (например, «Надо денег», «Умные наличные») вообще не проверяют КИ. Однако процентные ставки будут выше. Подробнее читайте в статье <Link to="/blog/mfo-kredit-s-plohoj-kreditnoj-istoriej" className="text-primary hover:underline">как получить МФО-кредит с плохой КИ</Link>.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-xl font-bold text-foreground mt-0 mb-3">Влияет ли возраст на одобрение?</h3>
          <p className="text-muted-foreground leading-relaxed m-0">
            Да. Банки чаще отказывают молодым (до 21-23 лет) и пожилым (старше 65-70 лет) заёмщикам. МФО более гибкие — выдают займы с 18 до 80 лет. Возраст влияет на максимальную сумму и срок кредита.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-xl font-bold text-foreground mt-0 mb-3">Сколько заявок можно подать за месяц?</h3>
          <p className="text-muted-foreground leading-relaxed m-0">
            Рекомендуется не более 3-5 заявок в месяц. Каждая заявка фиксируется в кредитной истории, и большое их количество снижает кредитный рейтинг. Лучше подать 2-3 целевые заявки в проверенные организации, чем 20 наугад.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-xl font-bold text-foreground mt-0 mb-3">Что такое скоринговая система?</h3>
          <p className="text-muted-foreground leading-relaxed m-0">
            Это автоматизированная система оценки заёмщика. Скоринг присваивает вам баллы на основе КИ, дохода, возраста, места работы и других факторов. Чем выше балл — тем больше шанс одобрения. У каждого банка и МФО свои критерии скоринга.
          </p>
        </div>
      </div>

      <div className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/20">
        <p className="text-muted-foreground leading-relaxed m-0">
          Хотите узнать больше о микрозаймах? Читайте наши статьи: <Link to="/blog/chto-takoe-mikrozajmy" className="text-primary hover:underline">что такое микрозаймы</Link>, <Link to="/blog/kak-vybrat-nadezhnuyu-mfo" className="text-primary hover:underline">как выбрать надёжную МФО</Link>, <Link to="/blog/top-oshibok-pri-oformlenii-mikrozajmov" className="text-primary hover:underline">топ ошибок при оформлении</Link> и <Link to="/blog/kak-vzyat-mikrozajm-i-ne-popast-v-dolgovuyu-yamu" className="text-primary hover:underline">как не попасть в долговую яму</Link>.
        </p>
      </div>
    </article>
  );
};

export default BlogPost11Content;
