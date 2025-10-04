import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface MFO {
  name: string;
  logo: string;
  rating: number;
  amount: string;
  term: string;
  rate: string;
  features: string[];
  approved: string;
  recommended: boolean;
  url: string;
}

const OverpaymentCalculator = () => {
  const [amount, setAmount] = useState<string>("10000");
  const [days, setDays] = useState<string>("20");
  const [rate, setRate] = useState<string>("1");
  const [calculated, setCalculated] = useState(false);

  const mfoList: MFO[] = [
    {
      name: "Надо денег",
      logo: "💰",
      rating: 4.9,
      amount: "до 30 000 ₽",
      term: "до 30 дней",
      rate: "0%",
      features: ["Первый займ 0%", "Без проверки КИ", "За 5 минут"],
      approved: "98%",
      recommended: true,
      url: "https://trk.ppdu.ru/click/3GyRuqoD?erid=2SDnjdmoM8q&siteId=8015"
    },
    {
      name: "Умные наличные",
      logo: "⚡",
      rating: 4.8,
      amount: "до 30 000 ₽",
      term: "до 30 дней",
      rate: "от 0%",
      features: ["Без отказа", "Онлайн 24/7", "На карту"],
      approved: "96%",
      recommended: true,
      url: "https://trk.ppdu.ru/click/HbPsDylQ?erid=LjN8KKm44&siteId=8015"
    },
    {
      name: "Max.Credit",
      logo: "🎯",
      rating: 4.7,
      amount: "до 30 000 ₽",
      term: "до 30 дней",
      rate: "0%",
      features: ["С 18 лет", "Мгновенно", "Первый под 0%"],
      approved: "95%",
      recommended: false,
      url: "https://trk.ppdu.ru/click/OMRKMQnH?erid=2SDnjbuHuCz&siteId=8015"
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
    }
  ];

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

  const calculateOverpayment = () => {
    setCalculated(true);
  };

  const getSuitableMFOs = (): MFO[] => {
    const requestedAmount = parseFloat(amount);
    const requestedDays = parseFloat(days);

    return mfoList.filter(mfo => {
      const maxAmount = parseInt(mfo.amount.replace(/\D/g, ''));
      const maxDays = parseInt(mfo.term.replace(/\D/g, ''));
      
      return requestedAmount <= maxAmount && requestedDays <= maxDays;
    }).slice(0, 3);
  };

  const overpayment = parseFloat(amount) * (parseFloat(rate) / 100) * parseFloat(days);
  const totalReturn = parseFloat(amount) + overpayment;
  const yearlyRate = (parseFloat(rate) * 365).toFixed(0);
  const suitableMFOs = getSuitableMFOs();

  return (
    <div className="my-12">
      <Card className="border-2 border-primary/20 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Icon name="Calculator" size={28} className="text-primary" />
            Калькулятор переплаты по микрозайму
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-2">
            Рассчитайте точную сумму переплаты и общую стоимость займа
          </p>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-6">
              <div>
                <Label htmlFor="amount" className="text-base font-semibold mb-2 block">
                  Сумма займа (₽)
                </Label>
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="text-lg h-12"
                  min="1000"
                  max="100000"
                  step="1000"
                />
                <p className="text-xs text-muted-foreground mt-1">От 1 000 до 100 000 рублей</p>
              </div>

              <div>
                <Label htmlFor="days" className="text-base font-semibold mb-2 block">
                  Срок займа (дней)
                </Label>
                <Input
                  id="days"
                  type="number"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  className="text-lg h-12"
                  min="1"
                  max="365"
                  step="1"
                />
                <p className="text-xs text-muted-foreground mt-1">От 1 до 365 дней</p>
              </div>

              <div>
                <Label htmlFor="rate" className="text-base font-semibold mb-2 block">
                  Процентная ставка (% в день)
                </Label>
                <Input
                  id="rate"
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  className="text-lg h-12"
                  min="0.1"
                  max="5"
                  step="0.1"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Годовая ставка: <span className="font-semibold text-primary">{yearlyRate}%</span>
                </p>
              </div>

              <Button 
                onClick={calculateOverpayment}
                size="lg"
                className="w-full text-lg h-12 gap-2"
              >
                <Icon name="Calculator" size={20} />
                Рассчитать
              </Button>
            </div>

            {calculated && (
              <div className="space-y-4 animate-fade-in">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border-2 border-primary/20">
                  <p className="text-sm text-muted-foreground mb-1">Переплата</p>
                  <p className="text-3xl md:text-4xl font-bold text-primary">
                    {overpayment.toLocaleString('ru-RU')} ₽
                  </p>
                </div>

                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-6 border-2 border-secondary/20">
                  <p className="text-sm text-muted-foreground mb-1">Сумма к возврату</p>
                  <p className="text-3xl md:text-4xl font-bold text-secondary">
                    {totalReturn.toLocaleString('ru-RU')} ₽
                  </p>
                </div>

                <div className="bg-muted rounded-xl p-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Icon name="Info" size={18} className="text-primary" />
                    Детали расчёта
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Основной долг:</span>
                      <span className="font-semibold">{parseFloat(amount).toLocaleString('ru-RU')} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Срок:</span>
                      <span className="font-semibold">{days} {parseInt(days) === 1 ? 'день' : parseInt(days) < 5 ? 'дня' : 'дней'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Ставка в день:</span>
                      <span className="font-semibold">{rate}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Ставка в год:</span>
                      <span className="font-semibold">{yearlyRate}%</span>
                    </div>
                    <div className="border-t pt-2 mt-2 flex justify-between">
                      <span className="text-muted-foreground">Переплата в %:</span>
                      <span className="font-semibold text-primary">
                        {((overpayment / parseFloat(amount)) * 100).toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <div className="flex gap-3">
                    <Icon name="Lightbulb" size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-blue-900">
                      <p className="font-semibold mb-1">Совет:</p>
                      <p>При досрочном погашении вы заплатите проценты только за фактические дни пользования займом. Это поможет существенно сэкономить!</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {!calculated && (
              <div className="flex items-center justify-center text-center p-8">
                <div>
                  <Icon name="Calculator" size={64} className="text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Введите параметры займа<br />и нажмите "Рассчитать"
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-6 mb-8">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Icon name="AlertTriangle" size={18} className="text-orange-600" />
              Формула расчёта
            </h4>
            <div className="bg-white rounded-lg p-4 font-mono text-sm">
              <p className="mb-2">Переплата = Сумма × (Ставка / 100) × Дни</p>
              <p className="text-muted-foreground">
                Пример: {amount} × ({rate} / 100) × {days} = {overpayment.toLocaleString('ru-RU')} ₽
              </p>
            </div>
          </div>

          {calculated && suitableMFOs.length > 0 && (
            <div className="mt-8 animate-fade-in">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Icon name="CheckCircle2" size={24} className="text-green-600" />
                  Подходящие предложения для ваших условий
                </h3>
                <p className="text-sm text-muted-foreground">
                  МФО, которые выдают {parseFloat(amount).toLocaleString('ru-RU')} ₽ на {days} {parseInt(days) === 1 ? 'день' : parseInt(days) < 5 ? 'дня' : 'дней'}
                </p>
              </div>

              <div className="grid gap-4">
                {suitableMFOs.map((mfo, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-2">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="text-4xl">{mfo.logo}</div>
                          <div>
                            <h4 className="font-bold text-lg">{mfo.name}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex items-center gap-1">
                                <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                                <span className="font-semibold text-sm">{mfo.rating}</span>
                              </div>
                              <Badge variant="secondary" className="text-xs">
                                Одобрение {mfo.approved}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        {mfo.recommended && (
                          <Badge className="bg-gradient-to-r from-primary to-secondary text-white">
                            Рекомендуем
                          </Badge>
                        )}
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                        <div>
                          <p className="text-muted-foreground mb-1">Сумма</p>
                          <p className="font-bold">{mfo.amount}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground mb-1">Срок</p>
                          <p className="font-bold">{mfo.term}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground mb-1">Ставка</p>
                          <p className="font-bold text-green-600">{mfo.rate}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {mfo.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      <Button 
                        className="w-full gap-2" 
                        size="lg"
                        onClick={() => {
                          trackClick(mfo.name);
                          window.open(mfo.url, '_blank');
                        }}
                      >
                        Получить займ
                        <Icon name="ExternalLink" size={18} />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => {
                    const mfoSection = document.getElementById('mfo-list');
                    if (mfoSection) {
                      mfoSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/#mfo-list';
                    }
                  }}
                  className="gap-2"
                >
                  Посмотреть все предложения
                  <Icon name="ArrowRight" size={18} />
                </Button>
              </div>
            </div>
          )}

          {calculated && suitableMFOs.length === 0 && (
            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
              <Icon name="AlertCircle" size={48} className="text-amber-600 mx-auto mb-3" />
              <h4 className="font-bold mb-2">Не нашли подходящих предложений</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Попробуйте изменить параметры займа или посмотрите все доступные МФО
              </p>
              <Button 
                onClick={() => window.location.href = '/#mfo-list'}
                className="gap-2"
              >
                Посмотреть все МФО
                <Icon name="ArrowRight" size={18} />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default OverpaymentCalculator;