import Icon from "@/components/ui/icon";

const BlogPost10Results = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
        Результат и выводы
      </h2>

      <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
        Условия, которые я получил
      </h3>

      <div className="bg-card border border-border rounded-lg p-6 my-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Сумма</p>
            <p className="text-2xl font-bold text-foreground m-0">15 000 ₽</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Срок</p>
            <p className="text-2xl font-bold text-foreground m-0">21 день</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Ставка</p>
            <p className="text-2xl font-bold text-foreground m-0">0%</p>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-muted-foreground mb-2">
            Сумма к возврату:{" "}
            <strong className="text-foreground">15 000 ₽</strong>
          </p>
          <p className="text-muted-foreground m-0">
            Переплата:{" "}
            <strong className="text-foreground">0 ₽</strong> (первый займ под
            0%)
          </p>
        </div>
      </div>

      <p className="text-muted-foreground leading-relaxed">
        Через 21 день я вернул ровно 15 000 рублей — никаких скрытых комиссий
        или дополнительных платежей не было.
      </p>

      <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
        Какие ошибки я допустил
      </h3>

      <p className="text-muted-foreground leading-relaxed">
        Первая ошибка — я не прочитал договор полностью. Оказалось, что если не
        вернуть деньги вовремя, начисляется штраф 20% от суммы + пени за каждый
        день просрочки. Хорошо, что я успел погасить вовремя.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        Вторая ошибка — подал заявки в 5 МФО одновременно. Три из них одобрили
        займ, и мне потом пришлось отказываться от двух. Лучше подавать заявки
        последовательно.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8 rounded-r-lg">
        <p className="font-semibold text-yellow-900 mb-2 flex items-center gap-2">
          <Icon name="AlertTriangle" size={20} />
          Важный совет
        </p>
        <p className="text-yellow-800 m-0">
          Даже если вам одобрили займ под 0%, внимательно читайте договор.
          Узнайте, что будет при просрочке, есть ли скрытые комиссии, какие
          условия продления.
        </p>
      </div>

      <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
        Советы тем, кто в похожей ситуации
      </h3>

      <div className="space-y-4 my-8">
        <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
          <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
            1
          </div>
          <div>
            <h4 className="font-semibold text-foreground mt-0 mb-2">
              Не бойтесь плохой КИ
            </h4>
            <p className="text-muted-foreground m-0">
              Многие МФО специально работают с заёмщиками, которым отказали
              банки. Главное — выбирать проверенные компании из реестра ЦБ РФ.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
          <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
            2
          </div>
          <div>
            <h4 className="font-semibold text-foreground mt-0 mb-2">
              Используйте первый займ под 0%
            </h4>
            <p className="text-muted-foreground m-0">
              Почти все МФО предлагают первый займ без процентов. Это отличный
              способ получить деньги без переплаты и проверить, подходит ли вам
              эта компания.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
          <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
            3
          </div>
          <div>
            <h4 className="font-semibold text-foreground mt-0 mb-2">
              Берите столько, сколько точно сможете вернуть
            </h4>
            <p className="text-muted-foreground m-0">
              Не берите максимум только потому, что одобрили. Просрочка приведёт
              к огромным штрафам и ухудшению КИ ещё больше.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
          <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
            4
          </div>
          <div>
            <h4 className="font-semibold text-foreground mt-0 mb-2">
              Проверяйте МФО в реестре ЦБ
            </h4>
            <p className="text-muted-foreground m-0">
              Мошенники часто маскируются под МФО. Обязательно проверяйте
              компанию на сайте Центробанка перед оформлением займа.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
          <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
            5
          </div>
          <div>
            <h4 className="font-semibold text-foreground mt-0 mb-2">
              Погашайте займ вовремя
            </h4>
            <p className="text-muted-foreground m-0">
              Своевременное погашение улучшает вашу КИ. Со временем банки снова
              начнут вас рассматривать. МФО — это временное решение, а не
              постоянный источник денег.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost10Results;
