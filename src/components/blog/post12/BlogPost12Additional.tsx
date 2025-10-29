const BlogPost12Additional = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">
        Онлайн-сервисы для займа на карту Сбербанка
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Современные МФО предоставляют удобные онлайн-платформы для оформления
        займов. Вы можете подать заявку через:
      </p>

      <ul className="space-y-3 mb-8">
        <li className="flex items-start gap-3 text-gray-700">
          <span className="text-indigo-600 font-bold">•</span>
          <span>
            <strong>Официальный сайт МФО</strong> — самый надёжный способ,
            гарантирует защиту данных и актуальные условия
          </span>
        </li>
        <li className="flex items-start gap-3 text-gray-700">
          <span className="text-indigo-600 font-bold">•</span>
          <span>
            <strong>Мобильное приложение</strong> — удобно для постоянных
            клиентов, позволяет контролировать займы и историю платежей
          </span>
        </li>
        <li className="flex items-start gap-3 text-gray-700">
          <span className="text-indigo-600 font-bold">•</span>
          <span>
            <strong>Агрегаторы МФО</strong> — сайты, которые собирают
            предложения от разных организаций и помогают выбрать лучшее
          </span>
        </li>
      </ul>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-12 border border-purple-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Популярные МФО с онлайн-займами на Сбербанк:
        </h3>
        <ul className="grid md:grid-cols-2 gap-3">
          <li className="text-gray-700">✓ Надо денег</li>
          <li className="text-gray-700">✓ Умные наличные</li>
          <li className="text-gray-700">✓ Max.Credit</li>
          <li className="text-gray-700">✓ Веб-Займ</li>
          <li className="text-gray-700">✓ Турбозайм</li>
          <li className="text-gray-700">✓ MoneyMan</li>
          <li className="text-gray-700">✓ Займер</li>
          <li className="text-gray-700">✓ Lime</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">
        Займ на кредитную карту Сбербанка
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Вы также можете получить займ на <strong>кредитную карту</strong>{" "}
        Сбербанка. Это работает точно так же, как с дебетовой картой: вы
        указываете номер карты при оформлении заявки, и деньги переводятся
        на ваш счёт.
      </p>

      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Особенности займа на кредитную карту:
        </h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span className="text-gray-700">
              <strong>Быстрое зачисление:</strong> деньги поступают так же
              быстро, как на обычную карту
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span className="text-gray-700">
              <strong>Увеличение доступных средств:</strong> вы получаете
              дополнительные деньги сверх кредитного лимита карты
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span className="text-gray-700">
              <strong>Гибкость погашения:</strong> можете погасить займ с
              кредитной карты или любым другим способом
            </span>
          </li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-12 rounded-r-xl">
        <p className="text-gray-800 font-semibold mb-2">⚠️ Обратите внимание:</p>
        <p className="text-gray-700 leading-relaxed">
          Перевод на кредитную карту может занять немного больше времени (до 3
          часов), так как банк проверяет возможность зачисления средств. Также
          убедитесь, что ваша кредитная карта поддерживает входящие переводы.
        </p>
      </div>
    </>
  );
};

export default BlogPost12Additional;
