import Icon from "@/components/ui/icon";

const BlogPost14RecoveryPlan = () => {
  return (
    <>
      <h2
        id="plan-vykhoda"
        className="text-3xl font-bold mb-6 flex items-center gap-3 mt-12"
      >
        <span className="text-3xl">✅</span>
        Как я выбрался из долгов (пошагово)
      </h2>

      <div className="space-y-8">
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border-l-4 border-primary">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">
              1
            </span>
            Прекратить брать новые займы
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Первое, что я сделал — <strong>полный финансовый стоп</strong>.
            Никаких новых займов, кредиток, рассрочек. Даже если не на что
            поесть.
          </p>
          <div className="bg-destructive/10 rounded-lg p-4 border-l-2 border-destructive">
            <p className="font-semibold flex items-start gap-2">
              <Icon
                name="AlertTriangle"
                className="text-destructive mt-0.5 flex-shrink-0"
                size={20}
              />
              <span>
                Если вы в долгах — не маскируйте проблему новыми деньгами. Это
                только усугубляет ситуацию.
              </span>
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border-l-4 border-primary">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">
              2
            </span>
            Устроиться на работу
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Я ушел в академический отпуск и начал работать на полную ставку.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-lg">
              <Icon
                name="Briefcase"
                className="text-primary mt-1 flex-shrink-0"
                size={20}
              />
              <span>
                <strong>Продавец в магазине одежды:</strong> 40–50 тыс. ₽/мес
              </span>
            </li>
            <li className="flex items-start gap-2 text-lg">
              <Icon
                name="Bike"
                className="text-primary mt-1 flex-shrink-0"
                size={20}
              />
              <span>
                <strong>Курьер:</strong> +50 тыс. ₽/мес
              </span>
            </li>
          </ul>
          <p className="text-base mt-4 text-muted-foreground">
            Зарплата была небольшой, но я брал максимум смен, выходил в
            праздники (платили в 2 раза больше).
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border-l-4 border-primary">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">
              3
            </span>
            Обратился за помощью к родственнику
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Без этого шага я бы не справился.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Мой дядя взял кредит на себя — <strong>300 тысяч ₽</strong>. Эти
            деньги помогли закрыть основную часть долгов перед МФО и банками.
          </p>
          <div className="grid md:grid-cols-3 gap-3 mb-4">
            <div className="bg-white rounded-lg p-3 flex items-center gap-2">
              <Icon
                name="CheckCircle2"
                className="text-green-600 flex-shrink-0"
                size={20}
              />
              <span className="text-sm">Коллекторы перестали звонить</span>
            </div>
            <div className="bg-white rounded-lg p-3 flex items-center gap-2">
              <Icon
                name="CheckCircle2"
                className="text-green-600 flex-shrink-0"
                size={20}
              />
              <span className="text-sm">Смог вздохнуть спокойно</span>
            </div>
            <div className="bg-white rounded-lg p-3 flex items-center gap-2">
              <Icon
                name="CheckCircle2"
                className="text-green-600 flex-shrink-0"
                size={20}
              />
              <span className="text-sm">Нагрузка стала управляемой</span>
            </div>
          </div>
          <div className="bg-amber-50 rounded-lg p-4 border-l-2 border-amber-500">
            <p className="font-semibold flex items-start gap-2">
              <Icon
                name="Lightbulb"
                className="text-amber-600 mt-0.5 flex-shrink-0"
                size={20}
              />
              <span>
                <strong>Важно:</strong> он оформлял кредит на себя, поэтому его
                кредитная история зависела от моих платежей. Я понимал —
                подвести его нельзя.
              </span>
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border-l-4 border-primary">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">
              4
            </span>
            Приоритетное погашение долгов
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            У меня осталось два фронта:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2 text-lg">
              <Icon
                name="CreditCard"
                className="text-primary mt-1 flex-shrink-0"
                size={20}
              />
              <span>
                <strong>Кредит на имя дяди</strong> — нужно было платить вовремя
              </span>
            </li>
            <li className="flex items-start gap-2 text-lg">
              <Icon
                name="AlertCircle"
                className="text-destructive mt-1 flex-shrink-0"
                size={20}
              />
              <span>
                <strong>Остатки по МФО</strong> — там высокие проценты
              </span>
            </li>
          </ul>

          <div className="bg-white rounded-lg p-4 mb-4">
            <h4 className="font-bold mb-3">Моя стратегия:</h4>
            <ol className="space-y-2 list-decimal list-inside">
              <li className="text-lg">
                <strong>Сначала — микрозаймы</strong> (ставка 1–2% в день!)
              </li>
              <li className="text-lg">
                <strong>Потом — кредит</strong> (ставка ниже, но платить строго
                по графику)
              </li>
              <li className="text-lg">
                <strong>Дополнительные платежи</strong> — чтобы закрыть всё
                быстрее
              </li>
            </ol>
          </div>

          <div className="bg-primary/10 rounded-lg p-4">
            <h4 className="font-bold mb-3">Каждый месяц:</h4>
            <ul className="space-y-2">
              <li className="text-lg">
                Основной платеж по кредиту: <strong>15 000 ₽</strong>
              </li>
              <li className="text-lg">
                Дополнительно: ещё <strong>10–20 000 ₽</strong>
              </li>
              <li className="text-lg">Остаток — на МФО</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border-l-4 border-primary">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">
              5
            </span>
            Жил на минималках
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Год я существовал почти без трат:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-lg">
              <Icon
                name="UtensilsCrossed"
                className="text-muted-foreground mt-1 flex-shrink-0"
                size={20}
              />
              <span>Ел только по акциям, готовил дома</span>
            </li>
            <li className="flex items-start gap-2 text-lg">
              <Icon
                name="ShoppingBag"
                className="text-muted-foreground mt-1 flex-shrink-0"
                size={20}
              />
              <span>Не покупал одежду — носил одно и то же</span>
            </li>
            <li className="flex items-start gap-2 text-lg">
              <Icon
                name="X"
                className="text-muted-foreground mt-1 flex-shrink-0"
                size={20}
              />
              <span>Отказался от кино, кафе, такси</span>
            </li>
            <li className="flex items-start gap-2 text-lg">
              <Icon
                name="Zap"
                className="text-muted-foreground mt-1 flex-shrink-0"
                size={20}
              />
              <span>Экономил на свет и воду</span>
            </li>
          </ul>
          <p className="text-lg leading-relaxed mt-4 font-semibold">
            Цель была одна: рассчитаться как можно быстрее.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 my-12 border-2 border-green-200">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <span className="text-3xl">🕰</span>
          Результат: 1,2 года вместо 3 лет
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-sm text-muted-foreground mb-2">
              План по кредиту
            </div>
            <div className="text-4xl font-bold text-muted-foreground">
              3 года
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-green-500">
            <div className="text-sm text-green-700 mb-2">Закрыл за</div>
            <div className="text-4xl font-bold text-green-600">1 год 3 мес</div>
          </div>
        </div>
        <p className="text-lg leading-relaxed mt-6 italic">
          Да, это был тяжёлый период. Но после последнего платежа я почувствовал{" "}
          <strong>облегчение, свободу и контроль</strong> над своей жизнью.
        </p>
      </div>
    </>
  );
};

export default BlogPost14RecoveryPlan;
