import Icon from "@/components/ui/icon";

interface MFOOffer {
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

interface BlogPost12MFOCardProps {
  mfo: MFOOffer;
  isSelected: boolean;
  onClick: (mfo: MFOOffer) => void;
}

const BlogPost12MFOCard = ({ mfo, isSelected, onClick }: BlogPost12MFOCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="text-4xl">{mfo.logo}</div>
          <div>
            <h4 className="text-xl font-bold text-gray-900">
              {mfo.name}
            </h4>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={14}
                    className={
                      i < Math.floor(mfo.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {mfo.rating}
              </span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-600">Одобрение</div>
          <div className="text-2xl font-bold text-green-600">
            {mfo.approved}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <div className="text-sm text-gray-600">Сумма</div>
          <div className="font-semibold text-gray-900">
            {mfo.amount}
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Срок</div>
          <div className="font-semibold text-gray-900">
            {mfo.term}
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Ставка</div>
          <div className="font-semibold text-green-600">
            {mfo.rate}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {mfo.features.map((feature, idx) => (
          <span
            key={idx}
            className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
          >
            {feature}
          </span>
        ))}
      </div>

      <button
        onClick={() => onClick(mfo)}
        className={`w-full py-3 rounded-lg font-semibold transition-colors ${
          isSelected
            ? "bg-green-600 text-white"
            : "bg-indigo-600 hover:bg-indigo-700 text-white"
        }`}
      >
        {isSelected ? "✓ Заявка отправлена" : "Получить займ →"}
      </button>
    </div>
  );
};

export default BlogPost12MFOCard;
export type { MFOOffer };
