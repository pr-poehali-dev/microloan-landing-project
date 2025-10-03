import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import Icon from "@/components/ui/icon";

const LoanConditions = () => {
  const [amount, setAmount] = useState([50000]);
  const [days, setDays] = useState([14]);
  
  const calculateRate = () => {
    const dailyRate = 0.5;
    return Math.round(amount[0] * (dailyRate / 100) * days[0]);
  };

  return (
    <section id="conditions" className="py-20 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Условия займа
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Прозрачные условия без скрытых комиссий. Рассчитайте свой займ прямо сейчас.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 shadow-2xl border-2 hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-white to-secondary/5">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-lg font-semibold">Сумма займа</label>
                  <span className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {amount[0].toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                <Slider
                  value={amount}
                  onValueChange={setAmount}
                  min={5000}
                  max={200000}
                  step={5000}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>5 000 ₽</span>
                  <span>200 000 ₽</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-lg font-semibold">Срок займа</label>
                  <span className="text-3xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                    {days[0]} дней
                  </span>
                </div>
                <Slider
                  value={days}
                  onValueChange={setDays}
                  min={7}
                  max={30}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>7 дней</span>
                  <span>30 дней</span>
                </div>
              </div>

              <div className="border-t-2 border-dashed pt-6">
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Сумма к возврату:</span>
                    <span className="text-2xl font-bold">{(amount[0] + calculateRate()).toLocaleString('ru-RU')} ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Переплата:</span>
                    <span className="text-xl font-semibold text-primary">{calculateRate().toLocaleString('ru-RU')} ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Ставка:</span>
                    <span className="text-lg font-medium">0.5% в день</span>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full text-lg py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Оформить заявку
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Icon name="FileCheck" size={32} className="mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Без справок</h3>
              <p className="text-sm text-muted-foreground">Не требуется справка о доходах</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Icon name="Users" size={32} className="mx-auto mb-3 text-secondary" />
              <h3 className="font-semibold mb-2">Без поручителей</h3>
              <p className="text-sm text-muted-foreground">Оформление на себя</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Icon name="Smartphone" size={32} className="mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Онлайн заявка</h3>
              <p className="text-sm text-muted-foreground">Не выходя из дома</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanConditions;
