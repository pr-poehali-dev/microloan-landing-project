import Icon from "@/components/ui/icon";

const BlogPost14DebtStory = () => {
  return (
    <>
      <h2
        id="dolgovaya-yama"
        className="text-3xl font-bold mb-6 flex items-center gap-3"
      >
        <span className="text-3xl">🔻</span>
        Как я оказался в долговой яме
      </h2>

      <p className="text-lg leading-relaxed">
        В 2021 году я учился на втором курсе, подрабатывал в магазине одежды и
        получал социальную выплату от государства. Этого хватало на базовые
        расходы — еда, проезд, интернет.
      </p>

      <p className="text-lg leading-relaxed">
        Однажды решил купить ноутбук в рассрочку —{" "}
        <strong>120 тысяч ₽ на 2 года</strong>. Сначала платил без проблем. Но
        через полгода выплаты отменили, а зарплаты стало не хватать ни на
        жизнь, ни на платежи.
      </p>

      <p className="text-lg leading-relaxed">
        Я не знал, что делать. И тогда совершил фатальную ошибку:
      </p>

      <div className="bg-destructive/10 rounded-xl p-6 my-6 border-l-4 border-destructive">
        <ul className="space-y-2 text-lg">
          <li className="flex items-start gap-2">
            <span className="text-destructive font-bold">👉</span>
            <span>Стал гасить рассрочку с кредитной карты.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-destructive font-bold">👉</span>
            <span>А долг по карте — новыми микрозаймами.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-destructive font-bold">👉</span>
            <span>А просрочки по МФО — ещё одними займами.</span>
          </li>
        </ul>
      </div>

      <p className="text-lg leading-relaxed font-semibold">
        Получилась классическая "пирамида долгов":
      </p>

      <ul className="space-y-3 my-6">
        <li className="flex items-start gap-3">
          <Icon
            name="AlertCircle"
            className="text-destructive mt-1 flex-shrink-0"
            size={20}
          />
          <span className="text-lg">Одни займы закрывал другими.</span>
        </li>
        <li className="flex items-start gap-3">
          <Icon
            name="TrendingUp"
            className="text-destructive mt-1 flex-shrink-0"
            size={20}
          />
          <span className="text-lg">
            Проценты и штрафы росли как снежный ком.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <Icon
            name="XCircle"
            className="text-destructive mt-1 flex-shrink-0"
            size={20}
          />
          <span className="text-lg">
            Банки отказывали — кредитная история уже была испорчена.
          </span>
        </li>
      </ul>

      <p className="text-lg leading-relaxed font-bold text-destructive">
        Через полтора года мой долг вырос с 120 до 450 тысяч рублей.
      </p>

      <div className="bg-muted rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold mb-4">А ещё начались коллекторы:</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📞</span>
            <span className="text-lg">Звонки по 5–7 раз в день</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">💬</span>
            <span className="text-lg">Угрозы в WhatsApp и соцсетях</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">📧</span>
            <span className="text-lg">Письма родственникам</span>
          </div>
        </div>
      </div>

      <p className="text-lg leading-relaxed italic">
        Я был в стрессе. Хотелось всё бросить. Но понял: паника не решит
        проблему.
      </p>
    </>
  );
};

export default BlogPost14DebtStory;
