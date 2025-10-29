import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const BlogPost10CreditImprovement = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
        Советы по улучшению кредитной истории
      </h2>

      <p className="text-muted-foreground leading-relaxed">
        Плохая кредитная история — это не навсегда. Вот что помогло мне
        постепенно её улучшить:
      </p>

      <div className="space-y-4 my-8">
        <div className="flex items-start gap-3 p-4 bg-secondary/20 rounded-lg">
          <Icon
            name="CheckCircle"
            size={24}
            className="text-primary flex-shrink-0 mt-0.5"
          />
          <div>
            <h3 className="font-semibold text-foreground mt-0 mb-1">
              Погашайте микрозаймы вовремя
            </h3>
            <p className="text-muted-foreground text-sm m-0">
              Каждый вовремя погашенный займ добавляет положительную запись в
              БКИ. Даже микрозаймы учитываются.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 bg-secondary/20 rounded-lg">
          <Icon
            name="CheckCircle"
            size={24}
            className="text-primary flex-shrink-0 mt-0.5"
          />
          <div>
            <h3 className="font-semibold text-foreground mt-0 mb-1">
              Закройте старые долги
            </h3>
            <p className="text-muted-foreground text-sm m-0">
              Даже если прошло много времени, закрытие долга улучшает КИ.
              Договоритесь с банком о реструктуризации.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 bg-secondary/20 rounded-lg">
          <Icon
            name="CheckCircle"
            size={24}
            className="text-primary flex-shrink-0 mt-0.5"
          />
          <div>
            <h3 className="font-semibold text-foreground mt-0 mb-1">
              Оформите кредитную карту с небольшим лимитом
            </h3>
            <p className="text-muted-foreground text-sm m-0">
              Некоторые банки (например, Тинькофф, Альфа-Банк) выдают карты с
              лимитом 10-20 тысяч даже с плохой КИ. Пользуйтесь ею и вовремя
              погашайте.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 bg-secondary/20 rounded-lg">
          <Icon
            name="CheckCircle"
            size={24}
            className="text-primary flex-shrink-0 mt-0.5"
          />
          <div>
            <h3 className="font-semibold text-foreground mt-0 mb-1">
              Проверяйте свою КИ раз в полгода
            </h3>
            <p className="text-muted-foreground text-sm m-0">
              Получите бесплатный отчёт на сайте Госуслуг. Убедитесь, что нет
              ошибок и все платежи отражены правильно.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 bg-secondary/20 rounded-lg">
          <Icon
            name="CheckCircle"
            size={24}
            className="text-primary flex-shrink-0 mt-0.5"
          />
          <div>
            <h3 className="font-semibold text-foreground mt-0 mb-1">
              Не подавайте много заявок одновременно
            </h3>
            <p className="text-muted-foreground text-sm m-0">
              Каждая заявка на кредит фиксируется в БКИ. Большое количество
              заявок за короткий период снижает рейтинг.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/20">
        <p className="text-muted-foreground leading-relaxed m-0">
          Хотите узнать больше о микрозаймах? Читайте наши статьи:{" "}
          <Link
            to="/blog/chto-takoe-mikrozajmy"
            className="text-primary hover:underline"
          >
            что такое микрозаймы и как они работают
          </Link>
          ,{" "}
          <Link
            to="/blog/kak-vybrat-nadezhnuyu-mfo"
            className="text-primary hover:underline"
          >
            как выбрать надёжную МФО
          </Link>{" "}
          и{" "}
          <Link
            to="/blog/top-oshibok-pri-oformlenii-mikrozajmov"
            className="text-primary hover:underline"
          >
            топ ошибок при оформлении микрозаймов
          </Link>
          . Это поможет вам получить займ на выгодных условиях и избежать
          проблем.
        </p>
      </div>
    </>
  );
};

export default BlogPost10CreditImprovement;