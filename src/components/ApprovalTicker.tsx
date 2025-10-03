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

  const names = ["Александр", "Елена", "Дмитрий", "Ольга", "Сергей", "Наталья", "Андрей", "Мария", "Иван", "Татьяна"];
  const cities = ["Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань", "Нижний Новгород", "Челябинск", "Самара", "Омск", "Ростов-на-Дону"];
  const mfos = ["Займер", "МигКредит", "Быстроденьги", "Вебзайм", "ДоЗарплаты", "MoneyMan", "Creditplus", "Lime"];

  const generateApproval = (id: number): Approval => ({
    id,
    name: names[Math.floor(Math.random() * names.length)],
    city: cities[Math.floor(Math.random() * cities.length)],
    amount: [5000, 10000, 15000, 20000, 25000, 30000][Math.floor(Math.random() * 6)],
    mfo: mfos[Math.floor(Math.random() * mfos.length)]
  });

  useEffect(() => {
    const initialApprovals = Array.from({ length: 10 }, (_, i) => generateApproval(i));
    setApprovals(initialApprovals);

    const interval = setInterval(() => {
      setApprovals(prev => {
        const newApproval = generateApproval(Date.now());
        return [...prev.slice(1), newApproval];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 text-white py-3 overflow-hidden shadow-lg">
      <div className="flex animate-scroll whitespace-nowrap">
        {approvals.map((approval, index) => (
          <div
            key={`${approval.id}-${index}`}
            className="inline-flex items-center gap-3 mx-8 px-6 py-2 bg-white/10 rounded-full backdrop-blur-sm"
          >
            <Icon name="CheckCircle2" size={20} className="text-white" />
            <span className="font-semibold">{approval.name}</span>
            <span className="text-white/80">из {approval.city}</span>
            <span className="font-bold text-yellow-300">{approval.amount.toLocaleString('ru-RU')} ₽</span>
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
            <span className="font-bold text-yellow-300">{approval.amount.toLocaleString('ru-RU')} ₽</span>
            <span className="text-white/80">•</span>
            <span className="text-white/90">{approval.mfo}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApprovalTicker;
