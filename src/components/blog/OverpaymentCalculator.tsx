import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const OverpaymentCalculator = () => {
  const [amount, setAmount] = useState<string>("10000");
  const [days, setDays] = useState<string>("20");
  const [rate, setRate] = useState<string>("1");
  const [calculated, setCalculated] = useState(false);

  const calculateOverpayment = () => {
    setCalculated(true);
  };

  const overpayment = parseFloat(amount) * (parseFloat(rate) / 100) * parseFloat(days);
  const totalReturn = parseFloat(amount) + overpayment;
  const yearlyRate = (parseFloat(rate) * 365).toFixed(0);

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

          <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-6">
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
        </CardContent>
      </Card>
    </div>
  );
};

export default OverpaymentCalculator;
