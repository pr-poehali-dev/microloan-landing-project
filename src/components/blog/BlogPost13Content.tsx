import { Button } from "@/components/ui/button";

const BlogPost13Content = () => {
  const trackClick = async (mfoName: string) => {
    try {
      await fetch('https://functions.poehali.dev/c591c6e9-075e-48d0-a487-6cfffa0136b7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mfo_name: mfoName }),
      });
    } catch (error) {
      console.error('Failed to track click:', error);
    }
  };

  const handleMFOClick = (mfoName: string, url: string) => {
    trackClick(mfoName);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="prose prose-lg max-w-none">
      <p className="text-xl font-medium text-muted-foreground">
        Нужны срочно 30 000 рублей? Разбираемся, где получить займ за 5 минут, какие МФО одобряют 
        быстрее всего и как не попасть на скрытые комиссии. Сравниваем условия, ставки и реальные 
        отзывы заемщиков.
      </p>

      <h2 id="pochemu-30000">💰 Почему именно 30 000 рублей — самая популярная сумма займа?</h2>
      
      <p>
        Статистика МФО показывает: <strong>30 тысяч рублей</strong> — это золотая середина между 
        микрозаймами (5-15К) и крупными кредитами (100К+). Эту сумму чаще всего берут на:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8">
        <div className="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-500">
          <p className="font-semibold mb-2">✓ Срочные нужды</p>
          <ul className="text-sm space-y-1 mb-0">
            <li>Лечение, операция</li>
            <li>Ремонт машины/техники</li>
            <li>Оплата срочных счетов</li>
          </ul>
        </div>
        <div className="bg-green-50 p-5 rounded-xl border-l-4 border-green-500">
          <p className="font-semibold mb-2">✓ Плановые расходы</p>
          <ul className="text-sm space-y-1 mb-0">
            <li>Подготовка к учебе</li>
            <li>Покупка техники</li>
            <li>Погашение других долгов</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl my-8">
        <p className="font-semibold mb-3">📊 Преимущества суммы 30К:</p>
        <ul className="space-y-2 mb-0">
          <li>✅ <strong>Высокий процент одобрения</strong> — 70-85% заявок одобряют</li>
          <li>✅ <strong>Минимум документов</strong> — часто достаточно только паспорта</li>
          <li>✅ <strong>Гибкие сроки</strong> — от 3 до 12 месяцев</li>
          <li>✅ <strong>Быстрое решение</strong> — 5-15 минут на одобрение</li>
        </ul>
      </div>

      <h2 id="top-5-mfo">🏆 ТОП-5 МФО, где одобрят 30 000 рублей за 5 минут</h2>

      <p>
        Мы проанализировали <strong>50+ микрофинансовых организаций</strong> и выбрали лучшие 
        по скорости одобрения, условиям и отзывам реальных заемщиков.
      </p>

      <div className="space-y-6 my-8">
        {/* 1. Надо денег */}
        <div className="bg-white border-2 border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-1">1. Надо денег 💰</h3>
              <p className="text-sm text-muted-foreground">Лидер рынка микрозаймов — одобрение 98%</p>
            </div>
            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
              ТОП-1
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <p className="text-sm"><span className="font-semibold">Сумма:</span> до 30 000 ₽</p>
              <p className="text-sm"><span className="font-semibold">Срок:</span> до 30 дней</p>
              <p className="text-sm"><span className="font-semibold">Ставка:</span> 0%</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm"><span className="font-semibold">Решение:</span> 5 минут</p>
              <p className="text-sm"><span className="font-semibold">Первый займ:</span> 0%</p>
              <p className="text-sm"><span className="font-semibold">Возраст:</span> от 18 лет</p>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg mb-4">
            <p className="font-semibold text-green-800 mb-2">✨ Преимущества:</p>
            <ul className="text-sm space-y-1 text-green-900 mb-0">
              <li>• Первый займ под 0% — экономия до 9000 ₽</li>
              <li>• Одобряют с плохой КИ — 98% одобрений</li>
              <li>• Деньги на карту за 5 минут</li>
              <li>• Без проверки кредитной истории</li>
            </ul>
          </div>

          <Button 
            className="w-full" 
            size="lg"
            onClick={() => handleMFOClick('Надо денег', 'https://trk.ppdu.ru/click/3GyRuqoD?erid=2SDnjdmoM8q&siteId=8015')}
          >
            Получить займ →
          </Button>
        </div>

        {/* 2. Умные наличные */}
        <div className="bg-white border-2 border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-1">2. Умные наличные ⚡</h3>
              <p className="text-sm text-muted-foreground">Быстрое одобрение онлайн 24/7</p>
            </div>
            <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
              ТОП-2
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <p className="text-sm"><span className="font-semibold">Сумма:</span> до 30 000 ₽</p>
              <p className="text-sm"><span className="font-semibold">Срок:</span> до 30 дней</p>
              <p className="text-sm"><span className="font-semibold">Ставка:</span> от 0%</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm"><span className="font-semibold">Решение:</span> 3 минуты</p>
              <p className="text-sm"><span className="font-semibold">Первый займ:</span> от 0%</p>
              <p className="text-sm"><span className="font-semibold">Одобрение:</span> 96%</p>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg mb-4">
            <p className="font-semibold text-green-800 mb-2">✨ Преимущества:</p>
            <ul className="text-sm space-y-1 text-green-900 mb-0">
              <li>• Без отказа для постоянных клиентов</li>
              <li>• Онлайн круглосуточно</li>
              <li>• На карту любого банка</li>
              <li>• Моментальное одобрение</li>
            </ul>
          </div>

          <Button 
            className="w-full" 
            size="lg"
            onClick={() => handleMFOClick('Умные наличные', 'https://trk.ppdu.ru/click/HbPsDylQ?erid=LjN8KKm44&siteId=8015')}
          >
            Получить займ →
          </Button>
        </div>

        {/* 3. Max.Credit */}
        <div className="bg-white border-2 border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-1">3. Max.Credit 🎯</h3>
              <p className="text-sm text-muted-foreground">С 18 лет — первый займ под 0%</p>
            </div>
            <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
              ТОП-3
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <p className="text-sm"><span className="font-semibold">Сумма:</span> до 30 000 ₽</p>
              <p className="text-sm"><span className="font-semibold">Срок:</span> до 30 дней</p>
              <p className="text-sm"><span className="font-semibold">Ставка:</span> 0%</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm"><span className="font-semibold">Решение:</span> мгновенно</p>
              <p className="text-sm"><span className="font-semibold">Первый займ:</span> 0%</p>
              <p className="text-sm"><span className="font-semibold">Одобрение:</span> 95%</p>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg mb-4">
            <p className="font-semibold text-green-800 mb-2">✨ Преимущества:</p>
            <ul className="text-sm space-y-1 text-green-900 mb-0">
              <li>• Работают с 18 лет</li>
              <li>• Мгновенное решение</li>
              <li>• Первый займ под 0%</li>
              <li>• Без скрытых комиссий</li>
            </ul>
          </div>

          <Button 
            className="w-full" 
            size="lg"
            onClick={() => handleMFOClick('Max.Credit', 'https://trk.ppdu.ru/click/OMRKMQnH?erid=2SDnjbuHuCz&siteId=8015')}
          >
            Получить займ →
          </Button>
        </div>

        {/* 4. Веб-Займ */}
        <div className="bg-white border-2 border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-1">4. Веб-Займ 🌐</h3>
              <p className="text-sm text-muted-foreground">Быстрое одобрение без справок</p>
            </div>
            <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
              ТОП-4
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <p className="text-sm"><span className="font-semibold">Сумма:</span> до 30 000 ₽</p>
              <p className="text-sm"><span className="font-semibold">Срок:</span> до 30 дней</p>
              <p className="text-sm"><span className="font-semibold">Ставка:</span> от 0%</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm"><span className="font-semibold">Решение:</span> 5-10 минут</p>
              <p className="text-sm"><span className="font-semibold">Первый займ:</span> от 0%</p>
              <p className="text-sm"><span className="font-semibold">Одобрение:</span> 94%</p>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg mb-4">
            <p className="font-semibold text-green-800 mb-2">✨ Преимущества:</p>
            <ul className="text-sm space-y-1 text-green-900 mb-0">
              <li>• Быстрое одобрение за 5 минут</li>
              <li>• Без справок о доходах</li>
              <li>• Можно продлить займ онлайн</li>
              <li>• Лояльные условия</li>
            </ul>
          </div>

          <Button 
            className="w-full" 
            size="lg"
            onClick={() => handleMFOClick('Веб-Займ', 'https://trk.ppdu.ru/click/cOBWm2j7?erid=2SDnjc5cRY8&siteId=8015')}
          >
            Получить займ →
          </Button>
        </div>

        {/* 5. Турбозайм */}
        <div className="bg-white border-2 border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-1">5. Турбозайм 🚀</h3>
              <p className="text-sm text-muted-foreground">До 100К — первый займ под 0%</p>
            </div>
            <div className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-semibold">
              ТОП-5
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <p className="text-sm"><span className="font-semibold">Сумма:</span> до 100 000 ₽</p>
              <p className="text-sm"><span className="font-semibold">Срок:</span> до 168 дней</p>
              <p className="text-sm"><span className="font-semibold">Ставка:</span> 0%</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm"><span className="font-semibold">Решение:</span> 10 минут</p>
              <p className="text-sm"><span className="font-semibold">Первый займ:</span> 0%</p>
              <p className="text-sm"><span className="font-semibold">Одобрение:</span> 93%</p>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg mb-4">
            <p className="font-semibold text-green-800 mb-2">✨ Преимущества:</p>
            <ul className="text-sm space-y-1 text-green-900 mb-0">
              <li>• Большие суммы до 100 000 ₽</li>
              <li>• Первый займ под 0%</li>
              <li>• Без проверки кредитной истории</li>
              <li>• Решение за 10 минут</li>
            </ul>
          </div>

          <Button 
            className="w-full" 
            size="lg"
            onClick={() => handleMFOClick('Турбозайм', 'https://trk.ppdu.ru/click/kxajeYKr?erid=LjN8K737T&siteId=8015')}
          >
            Получить займ →
          </Button>
        </div>
      </div>

      <h2 id="sravnenie">📊 Сравнительная таблица: что выбрать?</h2>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-primary text-white">
              <th className="p-3 text-left">МФО</th>
              <th className="p-3 text-center">Ставка</th>
              <th className="p-3 text-center">Срок</th>
              <th className="p-3 text-center">Одобрение</th>
              <th className="p-3 text-center">0% займ</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-muted/50">
              <td className="p-3 font-semibold">Надо денег</td>
              <td className="p-3 text-center">0%</td>
              <td className="p-3 text-center">до 30 дней</td>
              <td className="p-3 text-center">98%</td>
              <td className="p-3 text-center">✅ Да</td>
            </tr>
            <tr className="border-b hover:bg-muted/50">
              <td className="p-3 font-semibold">Умные наличные</td>
              <td className="p-3 text-center">от 0%</td>
              <td className="p-3 text-center">до 30 дней</td>
              <td className="p-3 text-center">96%</td>
              <td className="p-3 text-center">✅ Да</td>
            </tr>
            <tr className="border-b hover:bg-muted/50">
              <td className="p-3 font-semibold">Max.Credit</td>
              <td className="p-3 text-center">0%</td>
              <td className="p-3 text-center">до 30 дней</td>
              <td className="p-3 text-center">95%</td>
              <td className="p-3 text-center">✅ Да</td>
            </tr>
            <tr className="border-b hover:bg-muted/50">
              <td className="p-3 font-semibold">Веб-Займ</td>
              <td className="p-3 text-center">от 0%</td>
              <td className="p-3 text-center">до 30 дней</td>
              <td className="p-3 text-center">94%</td>
              <td className="p-3 text-center">✅ Да</td>
            </tr>
            <tr className="border-b hover:bg-muted/50">
              <td className="p-3 font-semibold">Турбозайм</td>
              <td className="p-3 text-center">0%</td>
              <td className="p-3 text-center">до 168 дней</td>
              <td className="p-3 text-center">93%</td>
              <td className="p-3 text-center">✅ Да</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl my-8 border-l-4 border-blue-500">
        <p className="font-bold text-lg mb-3">💡 Наша рекомендация:</p>
        <ul className="space-y-2 mb-0">
          <li>🥇 <strong>Для первого займа:</strong> Надо денег — 0% + одобрение 98%</li>
          <li>🥈 <strong>Круглосуточно:</strong> Умные наличные — 24/7 без выходных</li>
          <li>🥉 <strong>С 18 лет:</strong> Max.Credit — мгновенное решение</li>
          <li>⚡ <strong>Можно продлить:</strong> Веб-Займ — гибкие условия</li>
          <li>💰 <strong>Большая сумма:</strong> Турбозайм — до 100 000 ₽</li>
        </ul>
      </div>

      <h2 id="instrukciya">📝 Как получить 30 000 рублей за 5 минут: пошаговая инструкция</h2>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl my-8">
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
              1
            </div>
            <div>
              <p className="font-semibold text-lg mb-2">Выберите МФО</p>
              <p className="text-sm mb-0">
                Сравните условия из нашей таблицы. Если первый займ — выбирайте МФО с 0%. 
                Рекомендуем начать с "Надо денег" (98% одобрений).
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
              2
            </div>
            <div>
              <p className="font-semibold text-lg mb-2">Заполните заявку онлайн</p>
              <p className="text-sm mb-2">Понадобится:</p>
              <ul className="text-sm space-y-1 mb-0">
                <li>✓ Паспорт РФ</li>
                <li>✓ Номер телефона</li>
                <li>✓ Банковская карта для получения денег</li>
                <li>✓ СНИЛС (в некоторых МФО)</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
              3
            </div>
            <div>
              <p className="font-semibold text-lg mb-2">Дождитесь решения (2-10 минут)</p>
              <p className="text-sm mb-0">
                МФО автоматически проверит вашу кредитную историю, доход и другие факторы. 
                Если одобрят — придет СМС с суммой и условиями.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
              4
            </div>
            <div>
              <p className="font-semibold text-lg mb-2">Подпишите договор онлайн</p>
              <p className="text-sm mb-0">
                Внимательно прочитайте: ставку, срок, штрафы за просрочку. Подпишите через 
                СМС-код или ЭЦП на Госуслугах.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
              5
            </div>
            <div>
              <p className="font-semibold text-lg mb-2">Получите деньги на карту</p>
              <p className="text-sm mb-0">
                Обычно деньги приходят за 1-10 минут. В редких случаях — до 3 часов. 
                Проверьте баланс карты или СМС от банка.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 id="kak-odobryat">✅ Как повысить шанс одобрения до 95%?</h2>

      <p>
        Даже если у вас <strong>не идеальная кредитная история</strong>, есть способы увеличить 
        вероятность одобрения:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-green-50 border-2 border-green-200 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4 text-green-800">✅ ЧТО ДЕЛАТЬ</h3>
          <ul className="space-y-3 mb-0">
            <li className="flex gap-2">
              <span className="text-green-600">•</span>
              <span>Заполняйте анкету честно — проверяют через ФНС</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">•</span>
              <span>Укажите реальный номер работодателя</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">•</span>
              <span>Выберите меньший срок (14-30 дней — меньше риск)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">•</span>
              <span>Подайте заявки в 2-3 МФО одновременно</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">•</span>
              <span>Выбирайте МФО с высоким % одобрения</span>
            </li>
          </ul>
        </div>

        <div className="bg-red-50 border-2 border-red-200 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4 text-red-800">❌ ЧЕГО НЕ ДЕЛАТЬ</h3>
          <ul className="space-y-3 mb-0">
            <li className="flex gap-2">
              <span className="text-red-600">•</span>
              <span>Не завышайте доход — проверят</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-600">•</span>
              <span>Не скрывайте просрочки (уже знают из БКИ)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-600">•</span>
              <span>Не берите макс. сумму сразу</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-600">•</span>
              <span>Не подавайте больше 5 заявок — испортите КИ</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-600">•</span>
              <span>Не игнорируйте звонок от МФО</span>
            </li>
          </ul>
        </div>
      </div>

      <h2 id="faq">❓ Ответы на частые вопросы</h2>

      <div className="space-y-4 my-8">
        <div className="bg-white border-2 border-primary/20 p-5 rounded-xl">
          <p className="font-semibold mb-2">❓ Дадут ли 30 000 рублей с плохой кредитной историей?</p>
          <p className="mb-0 text-muted-foreground">
            Да, МФО более лояльны, чем банки. "Надо денег" одобряют 98% заявок, 
            даже с просрочками. Но ставка может быть выше.
          </p>
        </div>

        <div className="bg-white border-2 border-primary/20 p-5 rounded-xl">
          <p className="font-semibold mb-2">❓ Можно ли взять 30 000 ₽ без паспорта?</p>
          <p className="mb-0 text-muted-foreground">
            Нет. Паспорт РФ — обязательное требование по закону №151-ФЗ.
          </p>
        </div>

        <div className="bg-white border-2 border-primary/20 p-5 rounded-xl">
          <p className="font-semibold mb-2">❓ За сколько реально приходят деньги на карту?</p>
          <p className="mb-0 text-muted-foreground">
            В 90% случаев — за 1-10 минут после подписания договора. Задержки возможны 
            по выходным и после 23:00.
          </p>
        </div>

        <div className="bg-white border-2 border-primary/20 p-5 rounded-xl">
          <p className="font-semibold mb-2">❓ Что будет, если не вернуть 30 000 рублей вовремя?</p>
          <p className="mb-0 text-muted-foreground">
            Штраф + пени каждый день. Через 90 дней долг передают коллекторам. 
            Лучше договориться о реструктуризации заранее.
          </p>
        </div>

        <div className="bg-white border-2 border-primary/20 p-5 rounded-xl">
          <p className="font-semibold mb-2">❓ Можно ли взять несколько займов по 30 000 ₽ одновременно?</p>
          <p className="mb-0 text-muted-foreground">
            Технически да, но опасно. Долговая нагрузка удвоится, а кредитная история испортится.
          </p>
        </div>
      </div>

      <h2 id="vyvod">🎯 Итоговые рекомендации</h2>

      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-2xl my-8">
        <p className="text-2xl font-bold mb-6">✨ Как выбрать лучший займ 30 000 рублей:</p>
        
        <div className="space-y-4">
          <div className="bg-white/10 p-4 rounded-lg">
            <p className="font-bold mb-2">1️⃣ Если это первый займ:</p>
            <p className="mb-0">Берите <strong>Надо денег</strong> — 98% одобрений + 0%</p>
          </div>

          <div className="bg-white/10 p-4 rounded-lg">
            <p className="font-bold mb-2">2️⃣ Если нужно срочно 24/7:</p>
            <p className="mb-0">Выбирайте <strong>Умные наличные</strong> — работают круглосуточно</p>
          </div>

          <div className="bg-white/10 p-4 rounded-lg">
            <p className="font-bold mb-2">3️⃣ Если вам 18 лет:</p>
            <p className="mb-0">Подавайте в <strong>Max.Credit</strong> — мгновенное решение</p>
          </div>

          <div className="bg-white/10 p-4 rounded-lg">
            <p className="font-bold mb-2">4️⃣ Если нужна гибкость:</p>
            <p className="mb-0">Идите в <strong>Веб-Займ</strong> — можно продлить онлайн</p>
          </div>

          <div className="bg-white/10 p-4 rounded-lg">
            <p className="font-bold mb-2">5️⃣ Если нужно до 100К:</p>
            <p className="mb-0">Выбирайте <strong>Турбозайм</strong> — большие суммы</p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/20">
          <p className="text-lg mb-0">
            💡 <strong>Главный совет:</strong> Берите займ только если уверены, что вернете вовремя. 
            Просрочка = штрафы + испорченная кредитная история!
          </p>
        </div>
      </div>

      <div className="bg-amber-50 p-6 rounded-xl border-2 border-amber-200 my-8">
        <p className="font-bold text-lg text-amber-900 mb-3">⚠️ Финальное предупреждение</p>
        <p className="text-amber-900 mb-0">
          Микрозаймы — это дорогой способ получить деньги. Используйте займы только в крайних случаях. 
          Если есть возможность — обратитесь в банк (ставка в 3-5 раз ниже).
        </p>
      </div>
    </div>
  );
};

export default BlogPost13Content;
