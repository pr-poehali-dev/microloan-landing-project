const BlogPost13HowTo = () => {
  return (
    <>
      <h2 id="kak-poluchit">📝 Как получить займ 30 000 рублей: пошаговая инструкция</h2>

      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl my-8">
        <h3 className="text-xl font-bold mb-4">Шаг 1. Выберите МФО</h3>
        <p className="mb-4">
          Из нашего ТОП-5 выберите 2-3 организации с самыми выгодными условиями для вас. 
          Обратите внимание на:
        </p>
        <ul className="space-y-2 mb-0">
          <li>✓ Процентную ставку (0% для первого займа)</li>
          <li>✓ Срок погашения (30-168 дней)</li>
          <li>✓ Процент одобрения (чем выше — тем лучше)</li>
          <li>✓ Скрытые комиссии (должны быть указаны в договоре)</li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl my-8">
        <h3 className="text-xl font-bold mb-4">Шаг 2. Заполните онлайн-заявку</h3>
        <p className="mb-4">Для оформления займа потребуются:</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="font-semibold mb-2">📄 Документы:</p>
            <ul className="text-sm space-y-1 mb-0">
              <li>• Паспорт РФ</li>
              <li>• СНИЛС (не всегда)</li>
              <li>• Телефон</li>
              <li>• Email</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">💳 Банковская карта:</p>
            <ul className="text-sm space-y-1 mb-0">
              <li>• Visa / MasterCard / МИР</li>
              <li>• Любой банк РФ</li>
              <li>• На ваше имя</li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground mb-0">
          ⏱️ Время заполнения заявки: <strong>3-5 минут</strong>
        </p>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl my-8">
        <h3 className="text-xl font-bold mb-4">Шаг 3. Дождитесь решения</h3>
        <p className="mb-4">
          МФО проверит ваши данные и вынесет решение. Обычно это занимает:
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚡</span>
            <div>
              <p className="font-semibold">Моментальное одобрение (1-3 мин)</p>
              <p className="text-sm text-muted-foreground mb-0">
                Если все данные корректны и КИ хорошая
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">⏰</span>
            <div>
              <p className="font-semibold">Стандартное рассмотрение (5-15 мин)</p>
              <p className="text-sm text-muted-foreground mb-0">
                Если требуется дополнительная проверка
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">📞</span>
            <div>
              <p className="font-semibold">С уточнением данных (15-30 мин)</p>
              <p className="text-sm text-muted-foreground mb-0">
                МФО может позвонить для подтверждения информации
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl my-8">
        <h3 className="text-xl font-bold mb-4">Шаг 4. Получите деньги</h3>
        <p className="mb-4">
          После одобрения заявки деньги поступят на карту в течение:
        </p>
        <ul className="space-y-2 mb-4">
          <li>✅ <strong>Мгновенно (1-5 мин)</strong> — если у МФО есть прямой перевод</li>
          <li>✅ <strong>До 15 минут</strong> — стандартный банковский перевод</li>
          <li>✅ <strong>До 3 часов</strong> — если заявка подана вечером/ночью</li>
        </ul>
        <div className="bg-orange-100 p-4 rounded-lg">
          <p className="font-semibold mb-2">⚠️ Важно:</p>
          <p className="text-sm mb-0">
            Убедитесь, что ваша карта активна и не заблокирована. Проверьте лимиты на входящие 
            переводы в вашем банке.
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogPost13HowTo;
