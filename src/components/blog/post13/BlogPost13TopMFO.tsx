import MFOCard from './MFOCard';

interface BlogPost13TopMFOProps {
  onMFOClick: (mfoName: string, url: string) => void;
}

const BlogPost13TopMFO = ({ onMFOClick }: BlogPost13TopMFOProps) => {
  const mfoData = [
    {
      rank: 1,
      name: "Надо денег",
      emoji: "💰",
      description: "Лидер рынка микрозаймов — одобрение 98%",
      badgeText: "ТОП-1",
      badgeColor: "bg-green-100 text-green-700",
      amount: "до 30 000 ₽",
      term: "до 30 дней",
      rate: "0%",
      decision: "5 минут",
      firstLoan: "0%",
      additionalInfo: "Возраст:от 18 лет",
      advantages: [
        "Первый займ под 0% — экономия до 9000 ₽",
        "Одобряют с плохой КИ — 98% одобрений",
        "Деньги на карту за 5 минут",
        "Без проверки кредитной истории"
      ],
      url: "https://trk.ppdu.ru/click/3GyRuqoD?erid=2SDnjdmoM8q&siteId=8015"
    },
    {
      rank: 2,
      name: "Умные наличные",
      emoji: "⚡",
      description: "Быстрое одобрение онлайн 24/7",
      badgeText: "ТОП-2",
      badgeColor: "bg-blue-100 text-blue-700",
      amount: "до 30 000 ₽",
      term: "до 30 дней",
      rate: "от 0%",
      decision: "3 минуты",
      firstLoan: "от 0%",
      additionalInfo: "Одобрение:96%",
      advantages: [
        "Без отказа для постоянных клиентов",
        "Онлайн круглосуточно",
        "На карту любого банка",
        "Моментальное одобрение"
      ],
      url: "https://trk.ppdu.ru/click/HbPsDylQ?erid=LjN8KKm44&siteId=8015"
    },
    {
      rank: 3,
      name: "Max.Credit",
      emoji: "🎯",
      description: "С 18 лет — первый займ под 0%",
      badgeText: "ТОП-3",
      badgeColor: "bg-purple-100 text-purple-700",
      amount: "до 30 000 ₽",
      term: "до 30 дней",
      rate: "0%",
      decision: "мгновенно",
      firstLoan: "0%",
      additionalInfo: "Одобрение:95%",
      advantages: [
        "С 18 лет без отказа",
        "Мгновенное решение",
        "Первый займ под 0%",
        "Простая анкета — 3 минуты"
      ],
      url: "https://trk.ppdu.ru/click/OMRKMQnH?erid=2SDnjbuHuCz&siteId=8015"
    },
    {
      rank: 4,
      name: "Веб-Займ",
      emoji: "🌐",
      description: "Займы с продлением — до 30 дней отсрочки",
      badgeText: "ТОП-4",
      badgeColor: "bg-orange-100 text-orange-700",
      amount: "до 30 000 ₽",
      term: "до 30 дней",
      rate: "от 0%",
      decision: "за 7 минут",
      firstLoan: "от 0%",
      additionalInfo: "Одобрение:94%",
      advantages: [
        "Быстрое одобрение — 94%",
        "Без справок о доходах",
        "Продление займа до 30 дней",
        "На карту за 5 минут"
      ],
      url: "https://trk.ppdu.ru/click/cOBWm2j7?erid=2SDnjc5cRY8&siteId=8015"
    },
    {
      rank: 5,
      name: "Турбозайм",
      emoji: "🚀",
      description: "До 100 000 рублей на длительный срок",
      badgeText: "ТОП-5",
      badgeColor: "bg-pink-100 text-pink-700",
      amount: "до 100 000 ₽",
      term: "до 168 дней",
      rate: "0%",
      decision: "за 10 минут",
      firstLoan: "0%",
      additionalInfo: "Одобрение:93%",
      advantages: [
        "Первый займ 0% — на 30 дней",
        "Без проверок кредитной истории",
        "За 10 минут — деньги на карте",
        "Займ до 100К на полгода"
      ],
      url: "https://trk.ppdu.ru/click/kxajeYKr?erid=LjN8K737T&siteId=8015"
    }
  ];

  return (
    <>
      <h2 id="top-5-mfo">🏆 ТОП-5 МФО, где одобрят 30 000 рублей за 5 минут</h2>

      <p>
        Мы проанализировали <strong>50+ микрофинансовых организаций</strong> и выбрали лучшие 
        по скорости одобрения, условиям и отзывам реальных заемщиков.
      </p>

      <div className="space-y-6 my-8">
        {mfoData.map((mfo) => (
          <MFOCard
            key={mfo.rank}
            {...mfo}
            onTrack={onMFOClick}
          />
        ))}
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
        <p className="font-semibold mb-2">💡 Совет эксперта:</p>
        <p className="mb-0">
          Подайте заявки в <strong>2-3 МФО одновременно</strong> — так вы повысите шансы 
          на одобрение и сможете выбрать самые выгодные условия. Это не влияет на вашу 
          кредитную историю.
        </p>
      </div>
    </>
  );
};

export default BlogPost13TopMFO;
