import Icon from "@/components/ui/icon";
import BlogPost14MFOCard from "./BlogPost14MFOCard";
import type { MFOOffer } from "./BlogPost14MFOCard";

interface BlogPost14MFOListProps {
  offers: MFOOffer[];
  selectedMFO: number | null;
  onMFOClick: (offer: MFOOffer) => void;
}

const BlogPost14MFOList = ({
  offers,
  selectedMFO,
  onMFOClick,
}: BlogPost14MFOListProps) => {
  return (
    <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-3xl p-8 md:p-10 my-12 border-2 border-primary/20">
      <div className="flex items-center gap-3 mb-6">
        <Icon name="Search" className="text-primary" size={32} />
        <h2 className="text-2xl md:text-3xl font-bold">
          Хотите проверить, на что вас одобрят?
        </h2>
      </div>
      <p className="text-lg mb-8 text-muted-foreground">
        Подберите займ с низкой ставкой или программу рефинансирования
      </p>

      <div className="bg-amber-50 rounded-xl p-5 mb-8 border-l-4 border-amber-500">
        <p className="flex items-start gap-2 text-base font-medium">
          <Icon
            name="Lightbulb"
            className="text-amber-600 mt-0.5 flex-shrink-0"
            size={20}
          />
          <span>
            <strong>Совет:</strong> Лучше взять один кредит с низкой ставкой,
            чем 5 микрозаймов под 1% в день.
          </span>
        </p>
      </div>

      <div className="space-y-4">
        {offers.map((offer) => (
          <BlogPost14MFOCard
            key={offer.id}
            offer={offer}
            isSelected={selectedMFO === offer.id}
            onClick={() => onMFOClick(offer)}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPost14MFOList;
