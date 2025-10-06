import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

interface Approval {
  id: number;
  name: string;
  city: string;
  amount: number;
  mfo: string;
}

const ApprovalTicker = () => {
  const [approvals, setApprovals] = useState<Approval[]>([]);

  const names = ["Александр", "Елена", "Дмитрий", "Ольга", "Сергей", "Наталья", "Андрей", "Мария", "Иван", "Татьяна", "Максим", "Анна", "Владимир", "Светлана", "Алексей", "Юлия", "Денис", "Екатерина", "Павел", "Ирина", "Роман", "Виктория", "Константин", "Дарья", "Артём", "Николай", "Евгений", "Игорь", "Антон", "Михаил", "Вера", "Любовь", "Кристина", "Полина", "Валентина"];
  const cities = ["Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань", "Нижний Новгород", "Челябинск", "Самара", "Омск", "Ростов-на-Дону", "Уфа", "Красноярск", "Воронеж", "Пермь", "Волгоград", "Краснодар", "Саратов", "Тюмень", "Тольятти", "Ижевск", "Барнаул", "Ульяновск", "Иркутск", "Хабаровск", "Ярославль", "Владивосток", "Махачкала", "Томск", "Оренбург", "Кемерово", "Рязань", "Набережные Челны", "Астрахань", "Пенза", "Липецк", "Киров", "Чебоксары", "Калининград", "Тула", "Курск", "Сочи", "Ставрополь", "Брянск", "Иваново", "Магнитогорск"];
  const mfos = ["Надо денег", "Умные наличные", "Max.Credit", "Веб-Займ", "Турбозайм", "Е-Капуста", "СрочноДеньги", "ДоЗарплаты", "МаниМен", "Деньги сразу"];

  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const generateApproval = (id: number): Approval => ({
    id,
    name: names[Math.floor(Math.random() * names.length)],
    city: cities[Math.floor(Math.random() * cities.length)],
    amount: [5000, 10000, 15000, 20000, 25000, 30000, 50000, 80000, 100000][Math.floor(Math.random() * 9)],
    mfo: mfos[Math.floor(Math.random() * mfos.length)]
  });

  useEffect(() => {
    const initialApprovals = [];
    for (let i = 0; i < 10; i++) {
      initialApprovals.push(generateApproval(i));
    }
    setApprovals(initialApprovals);

    const interval = setInterval(function() {
      setApprovals(function(prev) {
        const newApproval = generateApproval(Date.now());
        const newArray = prev.slice(1);
        newArray.push(newApproval);
        return newArray;
      });
    }, 5000);

    return function() {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed top-20 left-0 right-0 z-30 bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 text-white py-3 overflow-hidden shadow-lg">
      <div className="flex animate-scroll whitespace-nowrap">
        {approvals.map((approval, index) => (
          <div
            key={`${approval.id}-${index}`}
            className="inline-flex items-center gap-3 mx-8 px-6 py-2 bg-white/10 rounded-full backdrop-blur-sm"
          >
            <Icon name="CheckCircle2" size={20} className="text-white" />
            <span className="font-semibold">{approval.name}</span>
            <span className="text-white/80">из {approval.city}</span>
            <span className="font-bold text-yellow-300">{formatNumber(approval.amount)} ₽</span>
            <span className="text-white/80">•</span>
            <span className="text-white/90">{approval.mfo}</span>
          </div>
        ))}
        {approvals.map((approval, index) => (
          <div
            key={`${approval.id}-${index}-duplicate`}
            className="inline-flex items-center gap-3 mx-8 px-6 py-2 bg-white/10 rounded-full backdrop-blur-sm"
          >
            <Icon name="CheckCircle2" size={20} className="text-white" />
            <span className="font-semibold">{approval.name}</span>
            <span className="text-white/80">из {approval.city}</span>
            <span className="font-bold text-yellow-300">{formatNumber(approval.amount)} ₽</span>
            <span className="text-white/80">•</span>
            <span className="text-white/90">{approval.mfo}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApprovalTicker;