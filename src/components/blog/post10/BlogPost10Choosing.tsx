const BlogPost10Choosing = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
        Как я выбирал МФО
      </h2>

      <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
        На что обращал внимание
      </h3>

      <p className="text-muted-foreground leading-relaxed">
        Первое правило — проверить, что МФО официально зарегистрирована в
        реестре ЦБ РФ. Я проверял каждую компанию на сайте Центробанка, чтобы
        не попасть на мошенников.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        Второе — смотрел на условия для заёмщиков с плохой КИ:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Требуют ли проверку кредитной истории</li>
        <li>Какой процент одобрения</li>
        <li>Какая минимальная сумма и срок</li>
        <li>Есть ли первый займ под 0%</li>
        <li>Можно ли оформить онлайн без визита в офис</li>
      </ul>

      <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
        Сравнение нескольких МФО
      </h3>

      <p className="text-muted-foreground leading-relaxed">
        Я выбрал три компании, которые часто одобряют займы даже с плохой
        историей:
      </p>

      <div className="grid gap-6 my-8">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-start justify-between mb-3">
            <h4 className="text-xl font-bold text-foreground m-0">
              💰 Надо денег
            </h4>
            <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
              98% одобрение
            </span>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Одобряют даже без проверки КИ. Первый займ — под 0%. До 30 000 ₽ на
            срок до 30 дней. Решение за 5 минут.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
              Без проверки КИ
            </span>
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
              Первый 0%
            </span>
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
              За 5 минут
            </span>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-start justify-between mb-3">
            <h4 className="text-xl font-bold text-foreground m-0">
              ⚡ Умные наличные
            </h4>
            <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
              96% одобрение
            </span>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Работают 24/7, выдают без отказа. До 30 000 ₽ на карту. Ставка от
            0% для новых клиентов.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
              Без отказа
            </span>
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
              Онлайн 24/7
            </span>
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
              На карту
            </span>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-start justify-between mb-3">
            <h4 className="text-xl font-bold text-foreground m-0">
              🎯 Max.Credit
            </h4>
            <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
              95% одобрение
            </span>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Принимают заявки с 18 лет, мгновенное решение. До 30 000 ₽ под 0%
            для новых клиентов.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
              С 18 лет
            </span>
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
              Мгновенно
            </span>
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
              Первый 0%
            </span>
          </div>
        </div>
      </div>

      <p className="text-muted-foreground leading-relaxed">
        Я решил подать заявки сразу в несколько МФО — каждая использует свою
        скоринговую модель, и шанс одобрения выше.
      </p>
    </>
  );
};

export default BlogPost10Choosing;
