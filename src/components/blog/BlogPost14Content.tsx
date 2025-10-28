import Icon from "@/components/ui/icon";
import { useState } from "react";

const BlogPost14Content = () => {
  const [selectedMFO, setSelectedMFO] = useState<number | null>(null);

  const mfoOffers = [
    {
      id: 1,
      name: "Надо денег",
      logo: "💰",
      rating: 4.9,
      amount: "до 30 000 ₽",
      term: "до 30 дней",
      rate: "0%",
      features: ["Первый займ 0%", "Без проверки КИ", "За 5 минут"],
      approved: "98%",
      url: "https://trk.ppdu.ru/click/3GyRuqoD?erid=2SDnjdmoM8q&siteId=8015",
    },
    {
      id: 2,
      name: "Умные наличные",
      logo: "⚡",
      rating: 4.8,
      amount: "до 30 000 ₽",
      term: "до 30 дней",
      rate: "от 0%",
      features: ["Без отказа", "Онлайн 24/7", "На карту"],
      approved: "96%",
      url: "https://trk.ppdu.ru/click/HbPsDylQ?erid=LjN8KKm44&siteId=8015",
    },
    {
      id: 3,
      name: "Max.Credit",
      logo: "🎯",
      rating: 4.7,
      amount: "до 30 000 ₽",
      term: "до 30 дней",
      rate: "0%",
      features: ["С 18 лет", "Мгновенно", "Первый под 0%"],
      approved: "95%",
      url: "https://trk.ppdu.ru/click/OMRKMQnH?erid=2SDnjbuHuCz&siteId=8015",
    },
    {
      id: 4,
      name: "Веб-Займ",
      logo: "🌐",
      rating: 4.7,
      amount: "до 30 000 ₽",
      term: "до 30 дней",
      rate: "от 0%",
      features: ["Быстрое одобрение", "Без справок", "Продление займа"],
      approved: "94%",
      url: "https://trk.ppdu.ru/click/cOBWm2j7?erid=2SDnjc5cRY8&siteId=8015",
    },
    {
      id: 5,
      name: "Турбозайм",
      logo: "🚀",
      rating: 4.6,
      amount: "до 100 000 ₽",
      term: "до 168 дней",
      rate: "0%",
      features: ["Первый 0%", "Без проверок", "За 10 минут"],
      approved: "93%",
      url: "https://trk.ppdu.ru/click/kxajeYKr?erid=LjN8K737T&siteId=8015",
    },
  ];

  const handleMFOClick = async (mfo: typeof mfoOffers[0]) => {
    setSelectedMFO(mfo.id);

    try {
      const response = await fetch(
        "https://functions.poehali.dev/c591c6e9-075e-48d0-a487-6cfffa0136b7",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mfo: mfo.name }),
        }
      );

      if (!response.ok) {
        console.warn("Failed to track MFO click");
      }
    } catch (error) {
      console.error("Error tracking MFO click:", error);
    }

    window.open(mfo.url, "_blank", "noopener,noreferrer");
  };

  return (
    <article className="prose prose-lg max-w-none">
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 md:p-8 mb-8 border-l-4 border-primary">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <span className="text-3xl">📌</span>
          Кто герой этой истории?
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          <strong>Тимофей, 21 год, студент из Москвы.</strong> Всё начиналось с простого — хотел учиться и жить, как все. Но одна покупка в рассрочку запустила цепную реакцию, которая чуть не разрушила его жизнь.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="text-sm text-muted-foreground mb-1">Сумма долга</div>
            <div className="text-2xl font-bold text-destructive">450 000 ₽</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="text-sm text-muted-foreground mb-1">Погашение</div>
            <div className="text-2xl font-bold text-primary">1,2 года</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="text-sm text-muted-foreground mb-1">Оружие</div>
            <div className="text-lg font-bold text-foreground">Работа + Дисциплина</div>
          </div>
        </div>
      </div>

      <h2 id="dolgovaya-yama" className="text-3xl font-bold mb-6 flex items-center gap-3">
        <span className="text-3xl">🔻</span>
        Как я оказался в долговой яме
      </h2>

      <p className="text-lg leading-relaxed">
        В 2021 году я учился на втором курсе, подрабатывал в магазине одежды и получал социальную выплату от государства. Этого хватало на базовые расходы — еда, проезд, интернет.
      </p>

      <p className="text-lg leading-relaxed">
        Однажды решил купить ноутбук в рассрочку — <strong>120 тысяч ₽ на 2 года</strong>. Сначала платил без проблем. Но через полгода выплаты отменили, а зарплаты стало не хватать ни на жизнь, ни на платежи.
      </p>

      <p className="text-lg leading-relaxed">
        Я не знал, что делать. И тогда совершил фатальную ошибку:
      </p>

      <div className="bg-destructive/10 rounded-xl p-6 my-6 border-l-4 border-destructive">
        <ul className="space-y-2 text-lg">
          <li className="flex items-start gap-2">
            <span className="text-destructive font-bold">👉</span>
            <span>Стал гасить рассрочку с кредитной карты.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-destructive font-bold">👉</span>
            <span>А долг по карте — новыми микрозаймами.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-destructive font-bold">👉</span>
            <span>А просрочки по МФО — ещё одними займами.</span>
          </li>
        </ul>
      </div>

      <p className="text-lg leading-relaxed font-semibold">
        Получилась классическая "пирамида долгов":
      </p>

      <ul className="space-y-3 my-6">
        <li className="flex items-start gap-3">
          <Icon name="AlertCircle" className="text-destructive mt-1 flex-shrink-0" size={20} />
          <span className="text-lg">Одни займы закрывал другими.</span>
        </li>
        <li className="flex items-start gap-3">
          <Icon name="TrendingUp" className="text-destructive mt-1 flex-shrink-0" size={20} />
          <span className="text-lg">Проценты и штрафы росли как снежный ком.</span>
        </li>
        <li className="flex items-start gap-3">
          <Icon name="XCircle" className="text-destructive mt-1 flex-shrink-0" size={20} />
          <span className="text-lg">Банки отказывали — кредитная история уже была испорчена.</span>
        </li>
      </ul>

      <p className="text-lg leading-relaxed font-bold text-destructive">
        Через полтора года мой долг вырос с 120 до 450 тысяч рублей.
      </p>

      <div className="bg-muted rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold mb-4">А ещё начались коллекторы:</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📞</span>
            <span className="text-lg">Звонки по 5–7 раз в день</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">💬</span>
            <span className="text-lg">Угрозы в WhatsApp и соцсетях</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">📧</span>
            <span className="text-lg">Письма родственникам</span>
          </div>
        </div>
      </div>

      <p className="text-lg leading-relaxed italic">
        Я был в стрессе. Хотелось всё бросить. Но понял: паника не решит проблему.
      </p>

      <h2 id="plan-vykhoda" className="text-3xl font-bold mb-6 flex items-center gap-3 mt-12">
        <span className="text-3xl">✅</span>
        Как я выбрался из долгов (пошагово)
      </h2>

      <div className="space-y-8">
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border-l-4 border-primary">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
            Прекратить брать новые займы
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Первое, что я сделал — <strong>полный финансовый стоп</strong>. Никаких новых займов, кредиток, рассрочек. Даже если не на что поесть.
          </p>
          <div className="bg-destructive/10 rounded-lg p-4 border-l-2 border-destructive">
            <p className="font-semibold flex items-start gap-2">
              <Icon name="AlertTriangle" className="text-destructive mt-0.5 flex-shrink-0" size={20} />
              <span>Если вы в долгах — не маскируйте проблему новыми деньгами. Это только усугубляет ситуацию.</span>
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border-l-4 border-primary">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
            Устроиться на работу
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Я ушел в академический отпуск и начал работать на полную ставку.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-lg">
              <Icon name="Briefcase" className="text-primary mt-1 flex-shrink-0" size={20} />
              <span><strong>Продавец в магазине одежды:</strong> 40–50 тыс. ₽/мес</span>
            </li>
            <li className="flex items-start gap-2 text-lg">
              <Icon name="Bike" className="text-primary mt-1 flex-shrink-0" size={20} />
              <span><strong>Курьер:</strong> +50 тыс. ₽/мес</span>
            </li>
          </ul>
          <p className="text-base mt-4 text-muted-foreground">
            Зарплата была небольшой, но я брал максимум смен, выходил в праздники (платили в 2 раза больше).
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border-l-4 border-primary">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
            Обратился за помощью к родственнику
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Без этого шага я бы не справился.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Мой дядя взял кредит на себя — <strong>300 тысяч ₽</strong>. Эти деньги помогли закрыть основную часть долгов перед МФО и банками.
          </p>
          <div className="grid md:grid-cols-3 gap-3 mb-4">
            <div className="bg-white rounded-lg p-3 flex items-center gap-2">
              <Icon name="CheckCircle2" className="text-green-600 flex-shrink-0" size={20} />
              <span className="text-sm">Коллекторы перестали звонить</span>
            </div>
            <div className="bg-white rounded-lg p-3 flex items-center gap-2">
              <Icon name="CheckCircle2" className="text-green-600 flex-shrink-0" size={20} />
              <span className="text-sm">Смог вздохнуть спокойно</span>
            </div>
            <div className="bg-white rounded-lg p-3 flex items-center gap-2">
              <Icon name="CheckCircle2" className="text-green-600 flex-shrink-0" size={20} />
              <span className="text-sm">Нагрузка стала управляемой</span>
            </div>
          </div>
          <div className="bg-amber-50 rounded-lg p-4 border-l-2 border-amber-500">
            <p className="font-semibold flex items-start gap-2">
              <Icon name="Lightbulb" className="text-amber-600 mt-0.5 flex-shrink-0" size={20} />
              <span><strong>Важно:</strong> он оформлял кредит на себя, поэтому его кредитная история зависела от моих платежей. Я понимал — подвести его нельзя.</span>
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border-l-4 border-primary">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
            Приоритетное погашение долгов
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            У меня осталось два фронта:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2 text-lg">
              <Icon name="CreditCard" className="text-primary mt-1 flex-shrink-0" size={20} />
              <span><strong>Кредит на имя дяди</strong> — нужно было платить вовремя</span>
            </li>
            <li className="flex items-start gap-2 text-lg">
              <Icon name="AlertCircle" className="text-destructive mt-1 flex-shrink-0" size={20} />
              <span><strong>Остатки по МФО</strong> — там высокие проценты</span>
            </li>
          </ul>
          
          <div className="bg-white rounded-lg p-4 mb-4">
            <h4 className="font-bold mb-3">Моя стратегия:</h4>
            <ol className="space-y-2 list-decimal list-inside">
              <li className="text-lg"><strong>Сначала — микрозаймы</strong> (ставка 1–2% в день!)</li>
              <li className="text-lg"><strong>Потом — кредит</strong> (ставка ниже, но платить строго по графику)</li>
              <li className="text-lg"><strong>Дополнительные платежи</strong> — чтобы закрыть всё быстрее</li>
            </ol>
          </div>

          <div className="bg-primary/10 rounded-lg p-4">
            <h4 className="font-bold mb-3">Каждый месяц:</h4>
            <ul className="space-y-2">
              <li className="text-lg">Основной платеж по кредиту: <strong>15 000 ₽</strong></li>
              <li className="text-lg">Дополнительно: ещё <strong>10–20 000 ₽</strong></li>
              <li className="text-lg">Остаток — на МФО</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border-l-4 border-primary">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
            Жил на минималках
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Год я существовал почти без трат:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-lg">
              <Icon name="UtensilsCrossed" className="text-muted-foreground mt-1 flex-shrink-0" size={20} />
              <span>Ел только по акциям, готовил дома</span>
            </li>
            <li className="flex items-start gap-2 text-lg">
              <Icon name="ShoppingBag" className="text-muted-foreground mt-1 flex-shrink-0" size={20} />
              <span>Не покупал одежду — носил одно и то же</span>
            </li>
            <li className="flex items-start gap-2 text-lg">
              <Icon name="X" className="text-muted-foreground mt-1 flex-shrink-0" size={20} />
              <span>Отказался от кино, кафе, такси</span>
            </li>
            <li className="flex items-start gap-2 text-lg">
              <Icon name="Zap" className="text-muted-foreground mt-1 flex-shrink-0" size={20} />
              <span>Экономил на свет и воду</span>
            </li>
          </ul>
          <p className="text-lg leading-relaxed mt-4 font-semibold">
            Цель была одна: рассчитаться как можно быстрее.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 my-12 border-2 border-green-200">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <span className="text-3xl">🕰</span>
          Результат: 1,2 года вместо 3 лет
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-sm text-muted-foreground mb-2">План по кредиту</div>
            <div className="text-4xl font-bold text-muted-foreground">3 года</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-green-500">
            <div className="text-sm text-green-700 mb-2">Закрыл за</div>
            <div className="text-4xl font-bold text-green-600">1 год 3 мес</div>
          </div>
        </div>
        <p className="text-lg leading-relaxed mt-6 italic">
          Да, это был тяжёлый период. Но после последнего платежа я почувствовал <strong>облегчение, свободу и контроль</strong> над своей жизнью.
        </p>
      </div>

      <h2 id="oshibki" className="text-3xl font-bold mb-6 flex items-center gap-3 mt-12">
        <span className="text-3xl">🛑</span>
        Ошибки, которых стоит избегать
      </h2>

      <div className="space-y-6">
        <div className="bg-destructive/10 rounded-xl p-6 border-l-4 border-destructive">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Icon name="XCircle" className="text-destructive" size={24} />
            Перекрывать один долг другим
          </h3>
          <p className="text-lg leading-relaxed mb-2">
            Это как залатывать дырявый плот — рано или поздно утонете.
          </p>
          <p className="text-lg font-semibold">
            Микрозаймы — не решение, а временная передышка.
          </p>
        </div>

        <div className="bg-destructive/10 rounded-xl p-6 border-l-4 border-destructive">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Icon name="XCircle" className="text-destructive" size={24} />
            Игнорировать проблемы
          </h3>
          <p className="text-lg leading-relaxed">
            Чем дольше тянешь — тем больше штрафы, тем хуже КИ, тем сильнее давление коллекторов.
          </p>
        </div>
      </div>

      <h2 id="chto-delat" className="text-3xl font-bold mb-6 flex items-center gap-3 mt-12">
        <span className="text-3xl">✅</span>
        Что делать, если нечем платить?
      </h2>

      <div className="space-y-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl">1️⃣</span>
            <h3 className="text-2xl font-bold">Реструктуризация долга</h3>
          </div>
          <p className="text-lg leading-relaxed mb-4">
            Обратитесь в банк или МФО и попросите:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2 text-lg">
              <Icon name="ArrowDown" className="text-primary mt-1 flex-shrink-0" size={20} />
              <span>Уменьшить ежемесячный платёж</span>
            </li>
            <li className="flex items-start gap-2 text-lg">
              <Icon name="Pause" className="text-primary mt-1 flex-shrink-0" size={20} />
              <span>Приостановить начисление процентов</span>
            </li>
            <li className="flex items-start gap-2 text-lg">
              <Icon name="Calendar" className="text-primary mt-1 flex-shrink-0" size={20} />
              <span>Продлить срок кредита</span>
            </li>
          </ul>
          <div className="bg-primary/10 rounded-lg p-4">
            <p className="font-semibold mb-2 flex items-center gap-2">
              <Icon name="FileText" className="text-primary" size={20} />
              Чтобы повысить шансы — предоставьте документы:
            </p>
            <ul className="space-y-1 ml-7 text-base">
              <li>Справку 2-НДФЛ (если доход упал)</li>
              <li>Трудовую книжку (при увольнении)</li>
              <li>Медицинские справки (при болезни)</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl">2️⃣</span>
            <h3 className="text-2xl font-bold">Кредитные каникулы</h3>
          </div>
          <p className="text-lg leading-relaxed mb-4">
            Доступны по закону с 2020 года. Можно:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2 text-lg">
              <Icon name="PauseCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
              <span>Приостановить платежи на 1–6 месяцев</span>
            </li>
            <li className="flex items-start gap-2 text-lg">
              <Icon name="TrendingDown" className="text-primary mt-1 flex-shrink-0" size={20} />
              <span>Платить меньше (например, 50% от суммы)</span>
            </li>
          </ul>
          <div className="bg-amber-50 rounded-lg p-4 border-l-2 border-amber-500 mb-4">
            <p className="font-semibold mb-2">Условия (2025):</p>
            <ul className="space-y-1 text-base">
              <li>✓ Доход упал более чем на 30%</li>
              <li>✓ Вы мобилизованный или участник СВО</li>
              <li>✓ Проживаете в зоне ЧС</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 border-l-2 border-blue-500">
            <p className="flex items-start gap-2">
              <Icon name="Info" className="text-blue-600 mt-0.5 flex-shrink-0" size={20} />
              <span>Проценты начисляются, но штрафы не начисляют. Срок кредита продлевается.</span>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl">3️⃣</span>
            <h3 className="text-2xl font-bold">Жалобы на коллекторов</h3>
          </div>
          <p className="text-lg leading-relaxed mb-4">
            Если вам угрожают, звонят по ночам или пишут родным — это <strong className="text-destructive">незаконно</strong>.
          </p>
          <div className="bg-primary/10 rounded-lg p-4 mb-4">
            <p className="font-semibold mb-2">Подавайте жалобы:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Icon name="Building" className="text-primary mt-1 flex-shrink-0" size={18} />
                <span>В ФССП (реестр коллекторов)</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Landmark" className="text-primary mt-1 flex-shrink-0" size={18} />
                <span>В Центральный банк РФ</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Scale" className="text-primary mt-1 flex-shrink-0" size={18} />
                <span>В прокуратуру (через сайт или Госуслуги)</span>
              </li>
            </ul>
          </div>
          <div className="bg-amber-50 rounded-lg p-4 border-l-2 border-amber-500">
            <p className="flex items-start gap-2">
              <Icon name="Camera" className="text-amber-600 mt-0.5 flex-shrink-0" size={20} />
              <span>Сохраняйте записи звонков, скриншоты сообщений.</span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground rounded-2xl p-8 md:p-10 my-12 shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <span className="text-3xl">💡</span>
          Главные выводы
        </h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-3 text-lg leading-relaxed">
            <Icon name="CheckCircle2" className="flex-shrink-0 mt-1" size={24} />
            <span>Не используйте микрозаймы как источник дохода — это ловушка.</span>
          </li>
          <li className="flex items-start gap-3 text-lg leading-relaxed">
            <Icon name="CheckCircle2" className="flex-shrink-0 mt-1" size={24} />
            <span>При первых признаках просрочки — обращайтесь в МФО/банк. Реструктуризация может спасти.</span>
          </li>
          <li className="flex items-start gap-3 text-lg leading-relaxed">
            <Icon name="CheckCircle2" className="flex-shrink-0 mt-1" size={24} />
            <span><strong>Работа + дисциплина = выход из долгов.</strong> Даже с минимальной зарплатой.</span>
          </li>
          <li className="flex items-start gap-3 text-lg leading-relaxed">
            <Icon name="CheckCircle2" className="flex-shrink-0 mt-1" size={24} />
            <span>Помощь близких — большая ответственность. Не подводите тех, кто поверил.</span>
          </li>
          <li className="flex items-start gap-3 text-lg leading-relaxed">
            <Icon name="CheckCircle2" className="flex-shrink-0 mt-1" size={24} />
            <span>После погашения — пересмотрите свои финансы. Создайте подушку безопасности.</span>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 my-12 border-l-4 border-primary">
        <div className="flex items-start gap-4 mb-4">
          <span className="text-5xl">✨</span>
          <blockquote className="text-xl md:text-2xl font-semibold italic leading-relaxed">
            "Теперь я сам контролирую свои деньги. И никакие МФО мне больше не нужны."
          </blockquote>
        </div>
        <p className="text-right text-lg font-medium text-muted-foreground mt-4">
          — Тимофей, 23 года, сегодня работает IT-специалистом
        </p>
      </div>

      <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-3xl p-8 md:p-10 my-12 border-2 border-primary/20">
        <div className="flex items-center gap-3 mb-6">
          <Icon name="Search" className="text-primary" size={32} />
          <h2 className="text-2xl md:text-3xl font-bold">
            Хотите проверить, на что вас одобрят?
          </h2>
        </div>
        <p className="text-lg mb-8 text-muted-foreground">
          Подберите займ с низкой ставкой или программу рефинансирования
        </p>

        <div className="bg-amber-50 rounded-xl p-5 mb-8 border-l-4 border-amber-500">
          <p className="flex items-start gap-2 text-base font-medium">
            <Icon name="Lightbulb" className="text-amber-600 mt-0.5 flex-shrink-0" size={20} />
            <span><strong>Совет:</strong> Лучше взять один кредит с низкой ставкой, чем 5 микрозаймов под 1% в день.</span>
          </p>
        </div>

        <div className="space-y-4">
          {mfoOffers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/50"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex items-start gap-4 flex-1">
                  <div className="text-5xl">{offer.logo}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{offer.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={18} />
                        <span className="font-semibold">{offer.rating}</span>
                      </div>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">
                        Одобрение {offer.approved}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Сумма</div>
                        <div className="font-semibold">{offer.amount}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Срок</div>
                        <div className="font-semibold">{offer.term}</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {offer.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-end gap-3">
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground mb-1">Ставка</div>
                    <div className="text-3xl font-bold text-primary">{offer.rate}</div>
                  </div>
                  <button
                    onClick={() => handleMFOClick(offer)}
                    className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                      selectedMFO === offer.id
                        ? "bg-green-600 text-white"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    {selectedMFO === offer.id ? (
                      <span className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={20} />
                        Открыто
                      </span>
                    ) : (
                      "Получить займ"
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogPost14Content;
