const BlogPost12HowTo = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">
        Как получить займ на карту Сбербанка онлайн?
      </h2>

      <p className="text-gray-700 leading-relaxed mb-8">
        Процесс оформления займа на карту Сбербанка максимально упрощён и
        занимает всего несколько минут. Вот пошаговая инструкция:
      </p>

      <ol className="space-y-6 mb-12">
        <li className="bg-white rounded-xl p-6 border-l-4 border-blue-500 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Шаг 1: Выбор МФО
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Изучите предложения из нашего рейтинга выше. Обратите внимание
            на процентную ставку, срок займа и условия возврата. Выбирайте
            организацию с хорошими отзывами и официальной лицензией ЦБ РФ.
          </p>
        </li>

        <li className="bg-white rounded-xl p-6 border-l-4 border-indigo-500 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Шаг 2: Заполнение заявки
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Перейдите на сайт выбранной МФО и заполните простую онлайн-форму.
            Обычно требуются:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Паспортные данные (серия, номер, дата выдачи)</li>
            <li>Номер мобильного телефона</li>
            <li>Данные карты Сбербанка (номер для зачисления)</li>
            <li>Сумма и срок займа</li>
          </ul>
        </li>

        <li className="bg-white rounded-xl p-6 border-l-4 border-purple-500 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Шаг 3: Ожидание решения
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Система автоматически проверит ваши данные. Это занимает от 5 до
            15 минут. В случае одобрения вы получите SMS-уведомление или
            звонок от МФО для подтверждения условий.
          </p>
        </li>

        <li className="bg-white rounded-xl p-6 border-l-4 border-green-500 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Шаг 4: Получение денег
          </h3>
          <p className="text-gray-700 leading-relaxed">
            После подтверждения деньги моментально переводятся на вашу карту
            Сбербанка. Обычно это занимает от 1 минуты до 3 часов в
            зависимости от загруженности платёжной системы.
          </p>
        </li>
      </ol>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-12 rounded-r-xl">
        <p className="text-gray-800 font-semibold mb-2">⚠️ Важно:</p>
        <p className="text-gray-700 leading-relaxed">
          Убедитесь, что ваша карта Сбербанка активна и не заблокирована.
          Проверьте лимиты на входящие переводы — некоторые карты имеют
          ограничения на суммы пополнения в сутки.
        </p>
      </div>
    </>
  );
};

export default BlogPost12HowTo;
