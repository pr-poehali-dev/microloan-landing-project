import Icon from "@/components/ui/icon";

export interface MFOOffer {
  id: number;
  name: string;
  logo: string;
  rating: number;
  amount: string;
  term: string;
  rate: string;
  features: string[];
  approved: string;
  url: string;
}

interface BlogPost14MFOCardProps {
  offer: MFOOffer;
  isSelected: boolean;
  onClick: () => void;
}

const BlogPost14MFOCard = ({
  offer,
  isSelected,
  onClick,
}: BlogPost14MFOCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/50">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex items-start gap-4 flex-1">
          <div className="text-5xl">{offer.logo}</div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">{offer.name}</h3>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1">
                <Icon
                  name="Star"
                  className="text-yellow-500 fill-yellow-500"
                  size={18}
                />
                <span className="font-semibold">{offer.rating}</span>
              </div>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">
                Одобрение {offer.approved}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <div className="text-sm text-muted-foreground">Сумма</div>
                <div className="font-semibold">{offer.amount}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Срок</div>
                <div className="font-semibold">{offer.term}</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {offer.features.map((feature, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end gap-3">
          <div className="text-right">
            <div className="text-sm text-muted-foreground mb-1">Ставка</div>
            <div className="text-3xl font-bold text-primary">{offer.rate}</div>
          </div>
          <button
            onClick={onClick}
            className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
              isSelected
                ? "bg-green-600 text-white"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            }`}
          >
            {isSelected ? (
              <span className="flex items-center gap-2">
                <Icon name="CheckCircle2" size={20} />
                Открыто
              </span>
            ) : (
              "Получить займ"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost14MFOCard;
