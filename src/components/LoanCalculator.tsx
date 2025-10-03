import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const LoanCalculator = () => {
  const [amount, setAmount] = useState(15000);
  const [days, setDays] = useState(15);
  const [rate] = useState(0.8);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: ""
  });

  const dailyRate = rate / 100;
  const totalInterest = amount * dailyRate * days;
  const totalRepayment = amount + totalInterest;
  const dailyPayment = totalRepayment / days;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://functions.poehali.dev/77c76389-0e3c-4aa4-982b-6789a2f9cb26', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          amount: amount,
          days: days,
          source: 'calculator'
        })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        alert(`Спасибо, ${formData.firstName}! Ваша заявка на ${amount.toLocaleString('ru-RU')} ₽ принята. Мы свяжемся с вами по номеру ${formData.phone}`);
        setShowForm(false);
        setFormData({ firstName: "", lastName: "", phone: "" });
      } else {
        alert(data.error || 'Ошибка при отправке заявки');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Не удалось отправить заявку. Попробуйте позже.');
    }
  };

  return (
    <section id="calculator" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Калькулятор займа
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Рассчитайте сумму, срок и переплату за несколько секунд
            </p>
          </div>

          <Card className="p-8 bg-white shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-semibold text-muted-foreground">
                      Сумма займа
                    </label>
                    <div className="text-2xl font-bold text-primary">
                      {amount.toLocaleString('ru-RU')} ₽
                    </div>
                  </div>
                  <Slider
                    value={[amount]}
                    onValueChange={(value) => setAmount(value[0])}
                    min={5000}
                    max={100000}
                    step={1000}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>5 000 ₽</span>
                    <span>100 000 ₽</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-semibold text-muted-foreground">
                      Срок займа
                    </label>
                    <div className="text-2xl font-bold text-primary">
                      {days} {days === 1 ? 'день' : days < 5 ? 'дня' : 'дней'}
                    </div>
                  </div>
                  <Slider
                    value={[days]}
                    onValueChange={(value) => setDays(value[0])}
                    min={7}
                    max={180}
                    step={1}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>7 дней</span>
                    <span>180 дней</span>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Percent" size={18} className="text-primary" />
                    <span className="text-sm font-semibold">Процентная ставка</span>
                  </div>
                  <p className="text-2xl font-bold text-primary">{rate}% в день</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Средняя ставка по рынку МФО
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Calculator" size={20} className="text-green-600" />
                    <span className="text-sm font-semibold text-green-700">Результат расчета</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Вы получите</p>
                      <p className="text-3xl font-bold text-green-600">
                        {amount.toLocaleString('ru-RU')} ₽
                      </p>
                    </div>

                    <div className="pt-4 border-t border-green-200">
                      <p className="text-xs text-muted-foreground mb-1">Проценты за {days} {days === 1 ? 'день' : days < 5 ? 'дня' : 'дней'}</p>
                      <p className="text-2xl font-bold text-orange-600">
                        +{totalInterest.toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽
                      </p>
                    </div>

                    <div className="pt-4 border-t border-green-200">
                      <p className="text-xs text-muted-foreground mb-1">К возврату</p>
                      <p className="text-3xl font-bold text-primary">
                        {totalRepayment.toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽
                      </p>
                    </div>

                    <div className="pt-4 border-t border-green-200">
                      <p className="text-xs text-muted-foreground mb-1">Ежедневный платеж</p>
                      <p className="text-xl font-bold text-gray-700">
                        {dailyPayment.toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽/день
                      </p>
                    </div>
                  </div>
                </div>

                {!showForm ? (
                  <Button 
                    size="lg" 
                    onClick={() => setShowForm(true)}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg h-14"
                  >
                    Получить займ
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200">
                    <h3 className="text-lg font-bold text-center mb-4">Оформление заявки</h3>
                    
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-semibold">Имя</Label>
                      <Input
                        id="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        placeholder="Введите ваше имя"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="lastName" className="text-sm font-semibold">Фамилия</Label>
                      <Input
                        id="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        placeholder="Введите вашу фамилию"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-sm font-semibold">Номер телефона</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+7 (___) ___-__-__"
                        className="mt-1"
                      />
                    </div>

                    <div className="flex gap-2">
                      <Button type="submit" className="flex-1 bg-gradient-to-r from-primary to-secondary">
                        Отправить заявку
                      </Button>
                      <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                        Отмена
                      </Button>
                    </div>
                  </form>
                )}

                <div className="flex items-center gap-2 text-xs text-muted-foreground justify-center">
                  <Icon name="Shield" size={14} />
                  <span>Расчет носит информационный характер</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center gap-2">
                  <Icon name="Zap" size={24} className="text-yellow-500" />
                  <p className="text-sm font-semibold">Мгновенное решение</p>
                  <p className="text-xs text-muted-foreground">Ответ за 5 минут</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Icon name="CheckCircle2" size={24} className="text-green-500" />
                  <p className="text-sm font-semibold">Без отказа</p>
                  <p className="text-xs text-muted-foreground">Одобрение 95%</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Icon name="CreditCard" size={24} className="text-blue-500" />
                  <p className="text-sm font-semibold">На карту</p>
                  <p className="text-xs text-muted-foreground">Перевод за минуту</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LoanCalculator;