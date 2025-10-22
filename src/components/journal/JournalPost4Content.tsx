const JournalPost4Content = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <p className="lead text-xl text-muted-foreground mb-8">
        Октябрь 2025 года выдался напряжённым для всех, кто держит деньги не под матрасом, 
        а в банке или на бирже. В центре внимания — заседание Банка России 24 октября.
      </p>

      <p>
        Сохранит ли регулятор ключевую ставку на рекордных <strong>17%</strong> или рискнёт 
        пойти на новое снижение? От этого решения напрямую зависит, сколько вы заработаете — 
        или потеряете — на вкладах и облигациях в ближайшие месяцы.
      </p>

      <h2 id="vklady">💰 Вклады: тишина перед бурей?</h2>
      
      <p>
        После сентябрьского заседания ставки по рублёвым депозитам в крупных банках немного 
        просели — на <strong>0,2–0,4 процентных пункта</strong>. Но затем рынок будто замер. 
        В последние недели снижение остановилось, а некоторые банки даже начали осторожно 
        повышать доходность отдельных продуктов.
      </p>

      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl my-8 border-l-4 border-primary">
        <p className="mb-2">
          <strong>«Рынок уже заложил в цены возможную паузу в смягчении»</strong> — объясняет 
          Игорь Додонов, аналитик «Финам».
        </p>
        <p className="mb-0 text-sm text-muted-foreground">
          Если ЦБ оставит ставку на 17%, вклады, скорее всего, останутся на текущих уровнях: 
          годовые — около 13%, трёхмесячные — около 15,2%.
        </p>
      </div>

      <p>
        Это всё ещё выше официальной инфляции, так что для консерваторов продление депозита — 
        логичный шаг, особенно если деньги не нужны срочно.
      </p>

      <h3>Когда ждать снижения ставок?</h3>
      
      <p>
        Юрий Эйдинов, директор департамента розничного бизнеса «Цифра Банка», считает: 
        снижение ставки всё равно придёт, но не в октябре, а ближе к декабрю. 
        Поэтому банки сейчас «ждут».
      </p>

      <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
        «Их поведение будет зависеть от ликвидности. Кто-то может предложить чуть более 
        выгодные условия, но в целом сейчас — лучшее время зафиксировать ставку, 
        особенно на срок от года».
      </blockquote>

      <p>
        А доцент РЭУ им. Плеханова Татьяна Белянчикова напоминает: конкуренция за вкладчиков 
        никуда не делась. Даже при стабильной ключевой ставке банки могут запускать 
        «флагманские» вклады с повышенной доходностью — просто чтобы привлечь внимание.
      </p>

      <div className="bg-green-50 p-6 rounded-xl my-8">
        <h4 className="font-bold text-lg mb-3">📊 Текущие ставки по вкладам</h4>
        <ul className="space-y-2 mb-0">
          <li>✅ <strong>Годовые вклады:</strong> ~13% годовых</li>
          <li>✅ <strong>Трёхмесячные:</strong> ~15,2% годовых</li>
          <li>✅ <strong>Флагманские продукты:</strong> до 16% на короткий срок</li>
          <li>✅ <strong>Инфляция (официальная):</strong> ~8-9% в год</li>
        </ul>
      </div>

      <h2 id="obligacii">📈 Облигации: шанс на рывок</h2>
      
      <p>
        Если вклады сегодня — это стабильность, то облигации — потенциал. 
        И всё зависит от того, как заговорит Центробанк 24 октября.
      </p>

      <div className="bg-gradient-to-r from-orange-50 to-pink-50 p-6 rounded-xl my-8 border-l-4 border-secondary">
        <p className="mb-0">
          <strong>«Снижение ставки на 1 процентный пункт станет мощным позитивом 
          для долгового рынка»</strong> — уверен Андрей Смирнов, эксперт «БКС Мир инвестиций».
        </p>
      </div>

      <p>
        Цены на облигации пойдут вверх, а держатели бумаг смогут заработать не только на купонах, 
        но и на росте стоимости портфеля — особенно если регулятор выберет мягкий тон.
      </p>

      <h3>⚠️ Важный нюанс</h3>
      
      <p>
        Здесь есть нюанс: даже при снижении ставки <strong>жёсткие формулировки</strong> 
        в комментариях ЦБ могут вызвать краткосрочную панику и обвал котировок. 
      </p>

      <p>
        И наоборот — если ставку оставят на 17%, но смягчат риторику, рынок может отреагировать ростом.
      </p>

      <div className="bg-amber-50 p-6 rounded-xl my-8">
        <h4 className="font-bold mb-3">🔍 Что влияет на облигации?</h4>
        <ul className="mb-0">
          <li>
            <strong>Мягкий сигнал от ЦБ</strong> — триггер для ускоренного снижения ставок 
            по вкладам. Депозиты станут менее привлекательными по сравнению с короткими облигациями.
          </li>
          <li className="mt-2">
            <strong>Жёсткая риторика</strong> — краткосрочный обвал котировок, 
            но долгосрочный потенциал роста доходности.
          </li>
          <li className="mt-2">
            <strong>Инфляционные ожидания</strong> — ключевой фактор для долгих облигаций. 
            При высоких рисках рынок предпочтёт осторожность.
          </li>
        </ul>
      </div>

      <p>
        Если же станет ясно, что ставка продержится на 17% до конца года, длинные облигации 
        могут временно подешеветь — их доходность немного вырастет. Но окончательное решение 
        инвесторы примут, дождавшись данных по инфляционным ожиданиям, которые выйдут до 24 октября.
      </p>

      <blockquote className="border-l-4 border-secondary pl-4 italic my-6 text-muted-foreground">
        «При высоких инфляционных рисках рынок предпочтёт осторожность».
        <br />
        <span className="text-sm">— Татьяна Белянчикова, доцент РЭУ им. Плеханова</span>
      </blockquote>

      <h2 id="sravnenie">⚖️ Вклады vs Облигации: что выбрать?</h2>
      
      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-primary/10">
              <th className="border p-4 text-left">Критерий</th>
              <th className="border p-4 text-left">Вклады</th>
              <th className="border p-4 text-left">Облигации</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-4"><strong>Доходность</strong></td>
              <td className="border p-4 bg-green-50">~13-15% годовых</td>
              <td className="border p-4">10-16% + рост стоимости</td>
            </tr>
            <tr>
              <td className="border p-4"><strong>Риск</strong></td>
              <td className="border p-4 bg-green-50">Застрахованы до 1,4 млн ₽</td>
              <td className="border p-4 bg-amber-50">Волатильность цен</td>
            </tr>
            <tr>
              <td className="border p-4"><strong>Ликвидность</strong></td>
              <td className="border p-4">Вывод — потеря процентов</td>
              <td className="border p-4 bg-green-50">Продажа в любой момент</td>
            </tr>
            <tr>
              <td className="border p-4"><strong>Горизонт</strong></td>
              <td className="border p-4">От 3 месяцев до 3 лет</td>
              <td className="border p-4">Любой — от дней до лет</td>
            </tr>
            <tr>
              <td className="border p-4"><strong>Для кого?</strong></td>
              <td className="border p-4 bg-green-50">Консерваторы</td>
              <td className="border p-4">Активные инвесторы</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="vyvody">✅ Что в итоге?</h2>
      
      <h3>Вклады сегодня — это тихая гавань</h3>
      <p>
        Ставки стабилизировались, и пока нет причин спешить с выводом средств. 
        Но если ЦБ начнёт смягчать политику, эта гавань может стать менее уютной.
      </p>

      <h3>Облигации — территория возможностей</h3>
      <p>
        Они ждут не столько решения, сколько тона: одного мягкого слова от регулятора 
        может хватить, чтобы запустить волну роста. Для тех, кто готов смотреть дальше 
        ближайшего месяца, — это шанс усилить портфель.
      </p>

      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl my-8">
        <h3 className="text-2xl font-bold mb-4 text-center">🎯 Что делать прямо сейчас?</h3>
        
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-xl">
            <h4 className="font-bold mb-3 text-primary">Если вы консерватор:</h4>
            <ul className="space-y-2 text-sm">
              <li>✅ Продлите вклад на год под 13-15%</li>
              <li>✅ Диверсифицируйте между банками</li>
              <li>✅ Следите за «флагманскими» продуктами</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl">
            <h4 className="font-bold mb-3 text-secondary">Если готовы к росту:</h4>
            <ul className="space-y-2 text-sm">
              <li>✅ Рассмотрите короткие облигации</li>
              <li>✅ Дождитесь 24 октября и оцените тон ЦБ</li>
              <li>✅ Будьте готовы к краткосрочной волатильности</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-lg font-semibold">
        24 октября всё станет яснее. А пока — самое время взвесить риски, 
        проверить горизонт инвестирования и решить: вы за стабильность или за потенциал?
      </p>

      <div className="bg-gradient-to-r from-orange-100 to-pink-100 p-8 rounded-2xl my-8 text-center">
        <h3 className="text-2xl font-bold mb-4">💸 Нужны деньги срочно?</h3>
        <p className="text-lg mb-6">
          Пока ждёте решения ЦБ, может понадобиться быстрый займ. 
          Оформите микрозайм за 5 минут — первый под 0%!
        </p>
        <a 
          href="/"
          className="inline-block bg-gradient-to-r from-primary to-secondary text-white font-bold px-8 py-4 rounded-full hover:shadow-xl transition-all"
        >
          Получить займ
        </a>
      </div>
    </div>
  );
};

export default JournalPost4Content;
