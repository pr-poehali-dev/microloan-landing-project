import Icon from "@/components/ui/icon";

const BlogPost14Mistakes = () => {
  return (
    <>
      <h2
        id="oshibki"
        className="text-3xl font-bold mb-6 flex items-center gap-3 mt-12"
      >
        <span className="text-3xl">🛑</span>
        Ошибки, которых стоит избегать
      </h2>

      <div className="space-y-6">
        <div className="bg-destructive/10 rounded-xl p-6 border-l-4 border-destructive">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Icon name="XCircle" className="text-destructive" size={24} />
            Перекрывать один долг другим
          </h3>
          <p className="text-lg leading-relaxed mb-2">
            Это как залатывать дырявый плот — рано или поздно утонете.
          </p>
          <p className="text-lg font-semibold">
            Микрозаймы — не решение, а временная передышка.
          </p>
        </div>

        <div className="bg-destructive/10 rounded-xl p-6 border-l-4 border-destructive">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Icon name="XCircle" className="text-destructive" size={24} />
            Игнорировать проблемы
          </h3>
          <p className="text-lg leading-relaxed">
            Чем дольше тянешь — тем больше штрафы, тем хуже КИ, тем сильнее
            давление коллекторов.
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogPost14Mistakes;
