import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface QuizResult {
  mfo: string;
  logo: string;
  reason: string;
  amount: string;
  term: string;
  rate: string;
  url: string;
}

const LoanQuiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<QuizResult | null>(null);

  const questions = [
    {
      id: "amount",
      question: "Какая сумма вам нужна?",
      icon: "Wallet",
      options: [
        { value: "small", label: "До 30 000 ₽", icon: "💰" },
        { value: "medium", label: "30 000 - 50 000 ₽", icon: "💵" },
        { value: "large", label: "50 000 - 100 000 ₽", icon: "💸" }
      ]
    },
    {
      id: "term",
      question: "На какой срок нужны деньги?",
      icon: "Calendar",
      options: [
        { value: "short", label: "До 30 дней", icon: "⏱️" },
        { value: "medium", label: "1-3 месяца", icon: "📅" },
        { value: "long", label: "3-6 месяцев", icon: "🗓️" }
      ]
    },
    {
      id: "history",
      question: "Какая у вас кредитная история?",
      icon: "FileText",
      options: [
        { value: "good", label: "Хорошая, без просрочек", icon: "✅" },
        { value: "bad", label: "Были просрочки", icon: "⚠️" },
        { value: "none", label: "Беру займ впервые", icon: "🆕" }
      ]
    },
    {
      id: "speed",
      question: "Как срочно нужны деньги?",
      icon: "Zap",
      options: [
        { value: "urgent", label: "Прямо сейчас", icon: "🚀" },
        { value: "today", label: "В течение дня", icon: "⏰" },
        { value: "soon", label: "В ближайшие дни", icon: "📆" }
      ]
    }
  ];

  const getMFORecommendation = (): QuizResult => {
    const { amount, term, history, speed } = answers;

    if (amount === "small" && term === "short") {
      return {
        mfo: "Надо денег",
        logo: "💰",
        reason: "Идеально для небольших займов на короткий срок. Первый займ под 0%!",
        amount: "до 30 000 ₽",
        term: "до 30 дней",
        rate: "0%",
        url: "https://trk.ppdu.ru/click/3GyRuqoD?erid=2SDnjdmoM8q&siteId=8015"
      };
    }

    if (amount === "large" || term === "long") {
      return {
        mfo: "ДоЗарплаты",
        logo: "💳",
        reason: "Лучший выбор для больших сумм на длительный срок до года!",
        amount: "до 100 000 ₽",
        term: "до 365 дней",
        rate: "0%",
        url: "https://trk.ppdu.ru/click/vZa8VguM?erid=2SDnjevZFtJ&siteId=8015"
      };
    }

    if (history === "bad") {
      return {
        mfo: "Веб-Займ",
        logo: "🌐",
        reason: "Одобряют даже с плохой КИ. Быстрое решение без проверок!",
        amount: "до 30 000 ₽",
        term: "до 30 дней",
        rate: "от 0%",
        url: "https://trk.ppdu.ru/click/cOBWm2j7?erid=2SDnjc5cRY8&siteId=8015"
      };
    }

    if (speed === "urgent") {
      return {
        mfo: "Умные наличные",
        logo: "⚡",
        reason: "Самое быстрое одобрение! Деньги на карте за 5 минут!",
        amount: "до 30 000 ₽",
        term: "до 30 дней",
        rate: "от 0%",
        url: "https://trk.ppdu.ru/click/HbPsDylQ?erid=LjN8KKm44&siteId=8015"
      };
    }

    return {
      mfo: "Турбозайм",
      logo: "🚀",
      reason: "Отличный баланс условий! Большие суммы и гибкие сроки!",
      amount: "до 100 000 ₽",
      term: "до 168 дней",
      rate: "0%",
      url: "https://trk.ppdu.ru/click/kxajeYKr?erid=LjN8K737T&siteId=8015"
    };
  };

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [questions[step].id]: value };
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      const recommendation = getMFORecommendation();
      setResult(recommendation);
    }
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  if (result) {
    return (
      <section className="py-20 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-white shadow-2xl text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center animate-bounce">
                <Icon name="CheckCircle2" size={40} className="text-white" />
              </div>

              <h3 className="text-3xl font-bold mb-4">Мы подобрали для вас!</h3>
              
              <div className="my-8 p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl">
                <div className="text-5xl mb-4">{result.logo}</div>
                <h4 className="text-2xl font-bold mb-2">{result.mfo}</h4>
                <p className="text-muted-foreground mb-4">{result.reason}</p>
                
                <div className="flex justify-center gap-4 flex-wrap mb-6">
                  <Badge variant="outline" className="text-sm py-2 px-4">
                    Сумма: {result.amount}
                  </Badge>
                  <Badge variant="outline" className="text-sm py-2 px-4">
                    Срок: {result.term}
                  </Badge>
                  <Badge variant="outline" className="text-sm py-2 px-4">
                    Ставка: {result.rate}
                  </Badge>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg h-14"
                  asChild
                >
                  <a 
                    href={result.url}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    Получить займ в {result.mfo}
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </a>
                </Button>
              </div>

              <Button 
                variant="outline" 
                onClick={resetQuiz}
                className="w-full"
              >
                <Icon name="RotateCcw" size={18} className="mr-2" />
                Пройти опрос заново
              </Button>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  const currentQuestion = questions[step];
  const progress = ((step + 1) / questions.length) * 100;

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white">
              Подбор за 30 секунд
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Найдем идеальный займ для вас
            </h2>
            <p className="text-muted-foreground">
              Ответьте на {questions.length} простых вопроса
            </p>
          </div>

          <div className="mb-6">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Вопрос {step + 1} из {questions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <Card className="p-8 bg-white shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Icon name={currentQuestion.icon as any} size={24} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold">{currentQuestion.question}</h3>
            </div>

            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full p-6 text-left border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{option.icon}</div>
                    <span className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {option.label}
                    </span>
                    <Icon 
                      name="ChevronRight" 
                      size={20} 
                      className="ml-auto text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" 
                    />
                  </div>
                </button>
              ))}
            </div>

            {step > 0 && (
              <Button 
                variant="ghost" 
                onClick={() => setStep(step - 1)}
                className="w-full mt-6"
              >
                <Icon name="ChevronLeft" size={18} className="mr-2" />
                Назад
              </Button>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LoanQuiz;
