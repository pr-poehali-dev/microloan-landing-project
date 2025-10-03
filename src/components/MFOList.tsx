import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const MFOList = () => {
  const trackClick = async (mfoName: string) => {
    try {
      await fetch('https://functions.poehali.dev/c591c6e9-075e-48d0-a487-6cfffa0136b7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mfo_name: mfoName }),
      });
    } catch (error) {
      console.error('Failed to track click:', error);
    }
  };

  const mfoList = [
    {
      name: "Займер",
      logo: "💰",
      rating: 4.9,
      amount: "до 30 000 ₽",
      term: "до 30 дней",
      rate: "0%",
      features: ["Первый займ 0%", "Без проверки КИ", "За 5 минут"],
      approved: "98%",
      recommended: true,
      url: "https://trk.ppdu.ru/click/kxajeYKr?erid=LjN8K737T&siteId=8015"
    },
    {
      name: "МигКредит",
      logo: "⚡",
      rating: 4.8,
      amount: "до 100 000 ₽",
      term: "до 365 дней",
      rate: "от 0%",
      features: ["Без отказа", "Онлайн 24/7", "На карту"],
      approved: "96%",
      recommended: true,
      url: "https://trk.ppdu.ru/click/kxajeYKr?erid=LjN8K737T&siteId=8015"
    },
    {
      name: "Lime-Займ",
      logo: "🍋",
      rating: 4.7,
      amount: "до 70 000 ₽",
      term: "до 168 дней",
      rate: "0%",
      features: ["С 18 лет", "Мгновенно", "Первый под 0%"],
      approved: "95%",
      recommended: false,
      url: "https://trk.ppdu.ru/click/kxajeYKr?erid=LjN8K737T&siteId=8015"
    },
    {
      name: "Веб-Займ",
      logo: "🌐",
      rating: 4.7,
      amount: "до 30 000 ₽",
      term: "до 30 дней",
      rate: "от 0%",
      features: ["Быстрое одобрение", "Без справок", "Продление займа"],
      approved: "94%",
      recommended: false,
      url: "https://trk.ppdu.ru/click/cOBWm2j7?erid=2SDnjc5cRY8&siteId=8015"
    },
    {
      name: "Турбозайм",
      logo: "🚀",
      rating: 4.6,
      amount: "до 100 000 ₽",
      term: "до 168 дней",
      rate: "0%",
      features: ["Первый 0%", "Без проверок", "За 10 минут"],
      approved: "93%",
      recommended: false,
      url: "https://trk.ppdu.ru/click/kxajeYKr?erid=LjN8K737T&siteId=8015"
    },
    {
      name: "Е-Капуста",
      logo: "💵",
      rating: 4.6,
      amount: "до 30 000 ₽",
      term: "до 21 дня",
      rate: "от 0%",
      features: ["Круглосуточно", "Без отказа", "На карту"],
      approved: "92%",
      recommended: false,
      url: "https://trk.ppdu.ru/click/wYdiPQjs?erid=LjN8KSpAc&siteId=8015"
    },
    {
      name: "СрочноДеньги",
      logo: "⏰",
      rating: 4.5,
      amount: "до 30 000 ₽",
      term: "до 30 дней",
      rate: "от 0%",
      features: ["Моментально", "Без проверки", "24/7"],
      approved: "91%",
      recommended: false,
      url: "https://trk.ppdu.ru/click/QBskke4v?erid=2SDnjdmVzVA&siteId=8015"
    },
    {
      name: "ДоЗарплаты",
      logo: "💳",
      rating: 4.5,
      amount: "до 100 000 ₽",
      term: "до 365 дней",
      rate: "0%",
      features: ["До зарплаты", "Без процентов", "Быстро"],
      approved: "90%",
      recommended: false,
      url: "https://trk.ppdu.ru/click/vZa8VguM?erid=2SDnjevZFtJ&siteId=8015"
    },
    {
      name: "МаниМен",
      logo: "👨‍💼",
      rating: 4.4,
      amount: "до 100 000 ₽",
      term: "до 18 недель",
      rate: "от 0%",
      features: ["Без справок", "Онлайн", "На карту"],
      approved: "89%",
      recommended: false,
      url: "https://trk.ppdu.ru/click/nZpz3ZjE?erid=2SDnjd4NP9c&siteId=8015"
    },
    {
      name: "Деньги сразу",
      logo: "💸",
      rating: 4.4,
      amount: "до 100 000 ₽",
      term: "до 180 дней",
      rate: "0,8% в день",
      features: ["Быстрое решение", "Без отказов", "Первый под 0%"],
      approved: "88%",
      recommended: false,
      url: "https://trk.ppdu.ru/click/ZekQIboa?erid=LjN8JxwGk&siteId=8015"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Топ-10 МФО для быстрых займов
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Проверенные микрофинансовые организации с лучшими условиями и высоким процентом одобрения
            </p>
          </div>

          <div className="space-y-4">
            {mfoList.map((mfo, index) => (
              <Card
                key={index}
                className={`p-6 hover:shadow-2xl transition-all duration-300 ${
                  mfo.recommended 
                    ? 'border-2 border-primary bg-gradient-to-br from-white to-primary/5' 
                    : 'bg-white'
                }`}
              >
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-16 h-16 flex items-center justify-center text-4xl bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex-shrink-0 overflow-hidden">
                      {mfo.logo.startsWith('http') ? (
                        <img src={mfo.logo} alt={mfo.name} className="w-full h-full object-contain p-2" />
                      ) : (
                        mfo.logo
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-bold text-muted-foreground text-lg">
                          #{index + 1}
                        </span>
                        <h3 className="font-bold text-xl">{mfo.name}</h3>
                        {mfo.recommended && (
                          <Badge className="bg-gradient-to-r from-primary to-secondary text-white">
                            Рекомендуем
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Icon 
                              key={i} 
                              name="Star" 
                              size={16} 
                              className={i < Math.floor(mfo.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                            />
                          ))}
                        </div>
                        <span className="font-bold text-lg">{mfo.rating}</span>
                        <span className="text-sm text-muted-foreground">
                          • Одобрение {mfo.approved}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {mfo.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Сумма</div>
                        <div className="font-bold text-sm">{mfo.amount}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Срок</div>
                        <div className="font-bold text-sm">{mfo.term}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Ставка</div>
                        <div className="font-bold text-sm text-green-600">{mfo.rate}</div>
                      </div>
                    </div>

                    <Button 
                      size="lg"
                      className={`w-full md:w-auto ${
                        mfo.recommended 
                          ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90' 
                          : ''
                      }`}
                      asChild
                    >
                      <a 
                        href={mfo.url}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        onClick={() => trackClick(mfo.name)}
                      >
                        Получить займ
                        <Icon name="ArrowRight" size={18} className="ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="inline-block p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="flex items-center gap-3">
                <Icon name="Info" size={24} className="text-primary" />
                <p className="text-sm text-muted-foreground">
                  Все МФО проверены и имеют действующую лицензию ЦБ РФ
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MFOList;