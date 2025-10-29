import Icon from "@/components/ui/icon";

const BlogPost14Solutions = () => {
  return (
    <>
      <h2
        id="chto-delat"
        className="text-3xl font-bold mb-6 flex items-center gap-3 mt-12"
      >
        <span className="text-3xl">✅</span>
        Что делать, если нечем платить?
      </h2>

      <div className="space-y-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl">1️⃣</span>
            <h3 className="text-2xl font-bold">Реструктуризация долга</h3>
          </div>
          <p className="text-lg leading-relaxed mb-4">
            Обратитесь в банк или МФО и попросите:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2 text-lg">
              <Icon
                name="ArrowDown"
                className="text-primary mt-1 flex-shrink-0"
                size={20}
              />
              <span>Уменьшить ежемесячный платёж</span>
            </li>
            <li className="flex items-start gap-2 text-lg">
              <Icon
                name="Pause"
                className="text-primary mt-1 flex-shrink-0"
                size={20}
              />
              <span>Приостановить начисление процентов</span>
            </li>
            <li className="flex items-start gap-2 text-lg">
              <Icon
                name="Calendar"
                className="text-primary mt-1 flex-shrink-0"
                size={20}
              />
              <span>Продлить срок кредита</span>
            </li>
          </ul>
          <div className="bg-primary/10 rounded-lg p-4">
            <p className="font-semibold mb-2 flex items-center gap-2">
              <Icon name="FileText" className="text-primary" size={20} />
              Чтобы повысить шансы — предоставьте документы:
            </p>
            <ul className="space-y-1 ml-7 text-base">
              <li>Справку 2-НДФЛ (если доход упал)</li>
              <li>Трудовую книжку (при увольнении)</li>
              <li>Медицинские справки (при болезни)</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl">2️⃣</span>
            <h3 className="text-2xl font-bold">Кредитные каникулы</h3>
          </div>
          <p className="text-lg leading-relaxed mb-4">
            Доступны по закону с 2020 года. Можно:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2 text-lg">
              <Icon
                name="PauseCircle"
                className="text-primary mt-1 flex-shrink-0"
                size={20}
              />
              <span>Приостановить платежи на 1–6 месяцев</span>
            </li>
            <li className="flex items-start gap-2 text-lg">
              <Icon
                name="TrendingDown"
                className="text-primary mt-1 flex-shrink-0"
                size={20}
              />
              <span>Платить меньше (например, 50% от суммы)</span>
            </li>
          </ul>
          <div className="bg-amber-50 rounded-lg p-4 border-l-2 border-amber-500 mb-4">
            <p className="font-semibold mb-2">Условия (2025):</p>
            <ul className="space-y-1 text-base">
              <li>✓ Доход упал более чем на 30%</li>
              <li>✓ Вы мобилизованный или участник СВО</li>
              <li>✓ Проживаете в зоне ЧС</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 border-l-2 border-blue-500">
            <p className="flex items-start gap-2">
              <Icon
                name="Info"
                className="text-blue-600 mt-0.5 flex-shrink-0"
                size={20}
              />
              <span>
                Проценты начисляются, но штрафы не начисляют. Срок кредита
                продлевается.
              </span>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl">3️⃣</span>
            <h3 className="text-2xl font-bold">Жалобы на коллекторов</h3>
          </div>
          <p className="text-lg leading-relaxed mb-4">
            Если вам угрожают, звонят по ночам или пишут родным — это{" "}
            <strong className="text-destructive">незаконно</strong>.
          </p>
          <div className="bg-primary/10 rounded-lg p-4 mb-4">
            <p className="font-semibold mb-2">Подавайте жалобы:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Icon
                  name="Building"
                  className="text-primary mt-1 flex-shrink-0"
                  size={18}
                />
                <span>В ФССП (реестр коллекторов)</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon
                  name="Landmark"
                  className="text-primary mt-1 flex-shrink-0"
                  size={18}
                />
                <span>В Центральный банк РФ</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon
                  name="Scale"
                  className="text-primary mt-1 flex-shrink-0"
                  size={18}
                />
                <span>В прокуратуру (через сайт или Госуслуги)</span>
              </li>
            </ul>
          </div>
          <div className="bg-amber-50 rounded-lg p-4 border-l-2 border-amber-500">
            <p className="flex items-start gap-2">
              <Icon
                name="Camera"
                className="text-amber-600 mt-0.5 flex-shrink-0"
                size={20}
              />
              <span>Сохраняйте записи звонков, скриншоты сообщений.</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost14Solutions;
