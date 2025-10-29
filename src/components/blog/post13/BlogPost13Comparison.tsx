const BlogPost13Comparison = () => {
  return (
    <>
      <h2 id="sravnenie">📊 Сравнительная таблица: выбираем лучшее предложение</h2>

      <p className="mb-6">
        Сравните ключевые параметры ТОП-5 МФО и выберите оптимальный вариант:
      </p>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
          <thead>
            <tr className="bg-gradient-to-r from-primary to-secondary text-white">
              <th className="p-4 text-left font-semibold">МФО</th>
              <th className="p-4 text-left font-semibold">Сумма</th>
              <th className="p-4 text-left font-semibold">Срок</th>
              <th className="p-4 text-left font-semibold">Ставка</th>
              <th className="p-4 text-left font-semibold">Решение</th>
              <th className="p-4 text-left font-semibold">Одобрение</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100 hover:bg-green-50 transition-colors">
              <td className="p-4 font-semibold">💰 Надо денег</td>
              <td className="p-4">до 30К</td>
              <td className="p-4">до 30 дней</td>
              <td className="p-4 text-green-600 font-semibold">0%</td>
              <td className="p-4">5 мин</td>
              <td className="p-4 text-green-600 font-semibold">98%</td>
            </tr>
            <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
              <td className="p-4 font-semibold">⚡ Умные наличные</td>
              <td className="p-4">до 30К</td>
              <td className="p-4">до 30 дней</td>
              <td className="p-4 text-green-600 font-semibold">от 0%</td>
              <td className="p-4">3 мин</td>
              <td className="p-4 text-green-600 font-semibold">96%</td>
            </tr>
            <tr className="border-b border-gray-100 hover:bg-purple-50 transition-colors">
              <td className="p-4 font-semibold">🎯 Max.Credit</td>
              <td className="p-4">до 30К</td>
              <td className="p-4">до 30 дней</td>
              <td className="p-4 text-green-600 font-semibold">0%</td>
              <td className="p-4">мгновенно</td>
              <td className="p-4 text-green-600 font-semibold">95%</td>
            </tr>
            <tr className="border-b border-gray-100 hover:bg-orange-50 transition-colors">
              <td className="p-4 font-semibold">🌐 Веб-Займ</td>
              <td className="p-4">до 30К</td>
              <td className="p-4">до 30 дней</td>
              <td className="p-4 text-green-600 font-semibold">от 0%</td>
              <td className="p-4">7 мин</td>
              <td className="p-4 text-green-600 font-semibold">94%</td>
            </tr>
            <tr className="hover:bg-pink-50 transition-colors">
              <td className="p-4 font-semibold">🚀 Турбозайм</td>
              <td className="p-4">до 100К</td>
              <td className="p-4">до 168 дней</td>
              <td className="p-4 text-green-600 font-semibold">0%</td>
              <td className="p-4">10 мин</td>
              <td className="p-4 text-green-600 font-semibold">93%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl my-8">
        <h3 className="text-lg font-bold mb-3">🎯 Как выбрать лучшую МФО?</h3>
        <ul className="space-y-2 mb-0">
          <li><strong>Для срочного займа:</strong> выбирайте «Умные наличные» (3 мин) или «Max.Credit» (мгновенно)</li>
          <li><strong>Для максимального одобрения:</strong> «Надо денег» (98% одобрений)</li>
          <li><strong>Для крупной суммы:</strong> «Турбозайм» (до 100К на полгода)</li>
          <li><strong>С плохой КИ:</strong> «Надо денег» или «Max.Credit» (без проверки КИ)</li>
        </ul>
      </div>

      <h2 id="trebovaniya">📋 Требования МФО к заемщикам</h2>

      <p>Для одобрения займа 30 000 рублей вам нужно соответствовать минимальным требованиям:</p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white border-2 border-primary/20 rounded-xl p-6">
          <h3 className="text-lg font-bold mb-4 text-primary">✅ Основные требования</h3>
          <ul className="space-y-2 mb-0">
            <li>• <strong>Возраст:</strong> от 18 до 75 лет</li>
            <li>• <strong>Гражданство:</strong> РФ</li>
            <li>• <strong>Документы:</strong> паспорт РФ</li>
            <li>• <strong>Телефон:</strong> российский номер</li>
            <li>• <strong>Карта:</strong> на ваше имя</li>
          </ul>
        </div>

        <div className="bg-white border-2 border-green-500/20 rounded-xl p-6">
          <h3 className="text-lg font-bold mb-4 text-green-600">➕ Дополнительные плюсы</h3>
          <ul className="space-y-2 mb-0">
            <li>• Постоянная работа (повышает шансы)</li>
            <li>• Хорошая КИ (не обязательно)</li>
            <li>• Положительная история в МФО</li>
            <li>• Подтверждение дохода</li>
            <li>• Регистрация (постоянная/временная)</li>
          </ul>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
        <p className="font-semibold mb-2">❌ Кому могут отказать:</p>
        <ul className="space-y-1 mb-0">
          <li>• Наличие действующих просрочек по займам</li>
          <li>• Судебные разбирательства по долгам</li>
          <li>• Банкротство в течение последних 5 лет</li>
          <li>• Неполные или недостоверные данные в анкете</li>
          <li>• Отсутствие российского паспорта</li>
        </ul>
      </div>
    </>
  );
};

export default BlogPost13Comparison;
