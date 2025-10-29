import BlogPost12MFOCard from './BlogPost12MFOCard';
import type { MFOOffer } from './BlogPost12MFOCard';

interface BlogPost12TopMFOProps {
  mfoOffers: MFOOffer[];
  selectedMFO: number | null;
  onMFOClick: (mfo: MFOOffer) => void;
}

const BlogPost12TopMFO = ({ mfoOffers, selectedMFO, onMFOClick }: BlogPost12TopMFOProps) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12 border border-blue-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <span className="text-3xl">💳</span>
        Топ-5 МФО для займа на карту Сбербанка
      </h3>
      <p className="text-gray-700 mb-6">
        Проверенные организации с быстрым одобрением и зачислением на
        карту Сбербанка:
      </p>

      <div className="space-y-4">
        {mfoOffers.map((mfo) => (
          <BlogPost12MFOCard
            key={mfo.id}
            mfo={mfo}
            isSelected={selectedMFO === mfo.id}
            onClick={onMFOClick}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPost12TopMFO;
