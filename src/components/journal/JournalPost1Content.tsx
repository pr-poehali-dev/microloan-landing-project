const JournalPost1Content = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <p className="lead text-xl text-muted-foreground mb-8">
        С 1 января 2025 года вступили в силу новые требования Центробанка к микрофинансовым организациям. 
        Разбираем ключевые изменения, которые затронут всех заёмщиков.
      </p>

      <h2 id="glavnye-izmeneniya">📋 Главные изменения законодательства</h2>
      <p>
        Центробанк РФ утвердил новые правила работы МФО, направленные на защиту прав заёмщиков 
        и снижение долговой нагрузки населения. Вот основные нововведения:
      </p>

      <h3>1. Ограничение максимальной процентной ставки</h3>
      <ul>
        <li><strong>Было:</strong> МФО могли устанавливать ставку до 1% в день</li>
        <li><strong>Стало:</strong> Максимальная ставка — 0,8% в день для новых клиентов</li>
        <li><strong>Для постоянных клиентов:</strong> Ставка снижена до 0,6% в день</li>
      </ul>

      <div className="bg-gradient-to-r from-orange-50 to-pink-50 p-6 rounded-xl my-8 border-l-4 border-primary">
        <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
          💡 Что это значит для заёмщика?
        </h4>
        <p className="mb-0">
          Займ на 10 000 рублей сроком на 30 дней теперь обойдётся максимум в 2 400 рублей процентов 
          вместо прежних 3 000 рублей. Экономия — 600 рублей!
        </p>
      </div>

      <h3>2. Усиление проверки платёжеспособности</h3>
      <p>
        МФО теперь обязаны более тщательно проверять доходы заёмщика перед выдачей займа:
      </p>
      <ul>
        <li>Запрос справок о доходах при сумме от 30 000 рублей</li>
        <li>Проверка долговой нагрузки (не более 50% от дохода)</li>
        <li>Анализ всех активных займов клиента</li>
      </ul>

      <h3>3. Новые правила пролонгации займов</h3>
      <p>
        Центробанк ограничил количество возможных продлений займа:
      </p>
      <ul>
        <li>Максимум <strong>2 пролонгации</strong> одного займа</li>
        <li>Комиссия за пролонгацию не может превышать <strong>20% от суммы долга</strong></li>
        <li>Обязательное информирование о последствиях продления</li>
      </ul>

      <h2 id="kak-eto-vliyaet">🎯 Как это влияет на заёмщиков?</h2>
      
      <h3>Плюсы новых правил</h3>
      <div className="bg-green-50 p-6 rounded-xl my-6">
        <ul className="mb-0">
          <li>✅ <strong>Снижение переплаты:</strong> Проценты стали ниже на 20-30%</li>
          <li>✅ <strong>Защита от долговой ямы:</strong> Ограничение пролонгаций</li>
          <li>✅ <strong>Прозрачность условий:</strong> МФО обязаны чётко указывать все комиссии</li>
          <li>✅ <strong>Меньше отказов:</strong> Проверка платёжеспособности снижает риски</li>
        </ul>
      </div>

      <h3>Минусы новых правил</h3>
      <div className="bg-amber-50 p-6 rounded-xl my-6">
        <ul className="mb-0">
          <li>⚠️ <strong>Больше документов:</strong> Придётся предоставлять справки о доходах</li>
          <li>⚠️ <strong>Дольше одобрение:</strong> Проверка может занять до 1-2 часов</li>
          <li>⚠️ <strong>Меньше шансов для безработных:</strong> Строже требования к доходам</li>
        </ul>
      </div>

      <h2 id="chto-delat">🔧 Что делать заёмщикам?</h2>
      
      <h3>1. Подготовьте документы заранее</h3>
      <p>
        Для быстрого одобрения займа теперь потребуется:
      </p>
      <ul>
        <li>Паспорт РФ</li>
        <li>СНИЛС</li>
        <li>Справка 2-НДФЛ или другое подтверждение дохода</li>
        <li>Выписка из банка о поступлениях за последние 3 месяца</li>
      </ul>

      <h3>2. Рассчитайте свою долговую нагрузку</h3>
      <p>
        <strong>Формула:</strong> (Все ежемесячные платежи по кредитам / Ежемесячный доход) × 100%
      </p>
      <p>
        Если показатель <strong>выше 50%</strong> — скорее всего, МФО откажет в займе.
      </p>

      <h3>3. Выбирайте проверенные МФО</h3>
      <p>
        Работайте только с компаниями, имеющими действующую лицензию ЦБ РФ. 
        Проверить статус можно на официальном сайте: <strong>cbr.ru</strong>
      </p>

      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl my-8">
        <h4 className="font-bold text-lg mb-3">🎓 Совет эксперта</h4>
        <p className="mb-0">
          «Новые правила — это реальная защита заёмщиков. Да, процесс стал чуть сложнее, 
          но зато вы точно не попадёте в долговую яму. Советую всегда иметь при себе 
          документы о доходах — это ускорит одобрение в любой МФО.»
        </p>
        <p className="mt-2 text-sm text-muted-foreground mb-0">
          — Дмитрий Соколов, финансовый консультант
        </p>
      </div>

      <h2 id="tablica-izmeneniy">📊 Таблица изменений: было vs стало</h2>
      
      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-primary/10">
              <th className="border p-4 text-left">Параметр</th>
              <th className="border p-4 text-left">До 2025 года</th>
              <th className="border p-4 text-left">С 2025 года</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-4"><strong>Максимальная ставка (новые клиенты)</strong></td>
              <td className="border p-4">1% в день</td>
              <td className="border p-4 bg-green-50">0,8% в день</td>
            </tr>
            <tr>
              <td className="border p-4"><strong>Количество пролонгаций</strong></td>
              <td className="border p-4">Не ограничено</td>
              <td className="border p-4 bg-green-50">Максимум 2</td>
            </tr>
            <tr>
              <td className="border p-4"><strong>Проверка платёжеспособности</strong></td>
              <td className="border p-4">Опционально</td>
              <td className="border p-4 bg-amber-50">Обязательно при сумме &gt; 30 000₽</td>
            </tr>
            <tr>
              <td className="border p-4"><strong>Комиссия за пролонгацию</strong></td>
              <td className="border p-4">До 30% от долга</td>
              <td className="border p-4 bg-green-50">До 20% от долга</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="zaklyuchenie">✅ Выводы</h2>
      <p>
        Новые правила микрозаймов в 2025 году — это шаг к более ответственному кредитованию. 
        Центробанк защищает граждан от чрезмерных долгов, но при этом усложняет получение займов 
        для тех, у кого нестабильный доход.
      </p>

      <p>
        <strong>Наши рекомендации:</strong>
      </p>
      <ul>
        <li>Готовьте документы о доходах заранее</li>
        <li>Не берите займы, если долговая нагрузка превышает 40%</li>
        <li>Выбирайте МФО с лицензией ЦБ и хорошими отзывами</li>
        <li>Используйте акции «Первый займ под 0%» для экономии</li>
      </ul>

      <div className="bg-gradient-to-r from-orange-100 to-pink-100 p-8 rounded-2xl my-8 text-center">
        <h3 className="text-2xl font-bold mb-4">🚀 Нужен срочный займ?</h3>
        <p className="text-lg mb-6">
          Подберём МФО, работающие по новым правилам 2025 года. 
          Одобрение за 5 минут, первый займ под 0%!
        </p>
        <a 
          href="/"
          className="inline-block bg-gradient-to-r from-primary to-secondary text-white font-bold px-8 py-4 rounded-full hover:shadow-xl transition-all"
        >
          Выбрать МФО
        </a>
      </div>
    </div>
  );
};

export default JournalPost1Content;
