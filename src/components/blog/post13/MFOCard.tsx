import { Button } from "@/components/ui/button";

interface MFOCardProps {
  rank: number;
  name: string;
  emoji: string;
  description: string;
  badgeText: string;
  badgeColor: string;
  amount: string;
  term: string;
  rate: string;
  decision: string;
  firstLoan: string;
  additionalInfo: string;
  advantages: string[];
  url: string;
  onTrack: (mfoName: string, url: string) => void;
}

const MFOCard = ({
  rank,
  name,
  emoji,
  description,
  badgeText,
  badgeColor,
  amount,
  term,
  rate,
  decision,
  firstLoan,
  additionalInfo,
  advantages,
  url,
  onTrack
}: MFOCardProps) => {
  return (
    <div className="bg-white border-2 border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-primary mb-1">{rank}. {name} {emoji}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className={`${badgeColor} px-3 py-1 rounded-full text-sm font-semibold`}>
          {badgeText}
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div className="space-y-2">
          <p className="text-sm"><span className="font-semibold">Сумма:</span> {amount}</p>
          <p className="text-sm"><span className="font-semibold">Срок:</span> {term}</p>
          <p className="text-sm"><span className="font-semibold">Ставка:</span> {rate}</p>
        </div>
        <div className="space-y-2">
          <p className="text-sm"><span className="font-semibold">Решение:</span> {decision}</p>
          <p className="text-sm"><span className="font-semibold">Первый займ:</span> {firstLoan}</p>
          <p className="text-sm"><span className="font-semibold">{additionalInfo.split(':')[0]}:</span> {additionalInfo.split(':')[1]}</p>
        </div>
      </div>

      <div className="bg-green-50 p-4 rounded-lg mb-4">
        <p className="font-semibold text-green-800 mb-2">✨ Преимущества:</p>
        <ul className="text-sm space-y-1 text-green-900 mb-0">
          {advantages.map((advantage, idx) => (
            <li key={idx}>• {advantage}</li>
          ))}
        </ul>
      </div>

      <Button 
        className="w-full" 
        size="lg"
        onClick={() => onTrack(name, url)}
      >
        Получить займ →
      </Button>
    </div>
  );
};

export default MFOCard;
