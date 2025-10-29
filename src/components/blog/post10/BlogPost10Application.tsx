import Icon from "@/components/ui/icon";

const BlogPost10Application = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
        Процесс подачи заявки
      </h2>

      <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
        Какие документы понадобились
      </h3>

      <p className="text-muted-foreground leading-relaxed">
        Оказалось, что для большинства МФО нужен только паспорт. Никаких справок
        2-НДФЛ, выписок с работы или подтверждения доходов. Это огромный плюс
        по сравнению с банками.
      </p>

      <div className="bg-secondary/50 p-6 rounded-lg my-8">
        <h4 className="font-semibold text-foreground mb-3 mt-0">
          Что потребовалось для онлайн-заявки:
        </h4>
        <ul className="list-none space-y-2 text-muted-foreground m-0">
          <li className="flex items-start gap-2">
            <Icon
              name="Check"
              size={20}
              className="text-green-600 mt-0.5 flex-shrink-0"
            />
            <span>Паспорт РФ (серия, номер, дата выдачи)</span>
          </li>
          <li className="flex items-start gap-2">
            <Icon
              name="Check"
              size={20}
              className="text-green-600 mt-0.5 flex-shrink-0"
            />
            <span>СНИЛС (для некоторых МФО)</span>
          </li>
          <li className="flex items-start gap-2">
            <Icon
              name="Check"
              size={20}
              className="text-green-600 mt-0.5 flex-shrink-0"
            />
            <span>Номер банковской карты для зачисления</span>
          </li>
          <li className="flex items-start gap-2">
            <Icon
              name="Check"
              size={20}
              className="text-green-600 mt-0.5 flex-shrink-0"
            />
            <span>Номер телефона и email</span>
          </li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
        Онлайн-подача: шаг за шагом
      </h3>

      <p className="text-muted-foreground leading-relaxed">
        Я подал заявку в «Надо денег» через их сайт. Процесс занял буквально 10
        минут:
      </p>

      <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
        <li>
          <strong className="text-foreground">Регистрация:</strong> Ввёл номер
          телефона, получил СМС с кодом подтверждения
        </li>
        <li>
          <strong className="text-foreground">Заполнение анкеты:</strong>{" "}
          Паспортные данные, адрес регистрации, контакты
        </li>
        <li>
          <strong className="text-foreground">Выбор суммы и срока:</strong>{" "}
          Указал 15 000 ₽ на 21 день
        </li>
        <li>
          <strong className="text-foreground">Загрузка фото паспорта:</strong>{" "}
          Сделал фото разворота с основными данными
        </li>
        <li>
          <strong className="text-foreground">Ожидание решения:</strong> На
          экране появился таймер — «Решение в течение 5 минут»
        </li>
      </ol>

      <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
        Время ожидания решения
      </h3>

      <p className="text-muted-foreground leading-relaxed">
        Через 3 минуты пришло СМС: «Ваша заявка одобрена! Деньги поступят на
        карту в течение 15 минут». Я не поверил своим глазам — несмотря на
        плохую КИ, мне одобрили займ! Деньги действительно пришли через 12
        минут.
      </p>

      <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8 rounded-r-lg">
        <p className="font-semibold text-green-900 mb-2 flex items-center gap-2">
          <Icon name="CheckCircle" size={20} />
          Мой результат
        </p>
        <p className="text-green-800 m-0">
          Одобрено 15 000 ₽ на 21 день под 0% (первый займ). Просрочка в КИ
          никак не повлияла на решение.
        </p>
      </div>
    </>
  );
};

export default BlogPost10Application;
