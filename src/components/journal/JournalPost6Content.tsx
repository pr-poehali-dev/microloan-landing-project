const JournalPost6Content = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 id="kogda-menyat">🔁 Когда нужно менять паспорт в России?</h2>
      
      <p>
        Паспорт — главный документ, удостоверяющий личность гражданина РФ. Его необходимо 
        вовремя заменять, иначе можно получить <strong>штраф до 5000 рублей</strong>.
      </p>

      <p>Основные случаи, когда требуется новая версия паспорта:</p>

      <ul className="space-y-2">
        <li>✅ Исполнение 14, 20 или 45 лет (плановая замена)</li>
        <li>✅ Смена фамилии, имени или отчества (например, после замужества)</li>
        <li>✅ Повреждение или непригодность документа (порван, испачкан, потерян)</li>
        <li>✅ Изменение внешности, даты/места рождения</li>
        <li>✅ Ошибки в данных</li>
        <li>✅ Закончилось место для штампов</li>
        <li>✅ Получение гражданства РФ</li>
        <li>✅ Возврат в Россию после проживания за границей</li>
      </ul>

      <div className="bg-blue-50 p-6 rounded-xl my-8 border-l-4 border-blue-500">
        <p className="font-semibold mb-3">📌 Сроки замены:</p>
        <ul className="mb-0 space-y-2">
          <li>При достижении <strong>20 или 45 лет</strong> — 90 дней со дня рождения</li>
          <li>При смене фамилии — 30 дней</li>
          <li>После возвращения из-за рубежа — 30 дней с момента прибытия</li>
        </ul>
      </div>

      <div className="bg-red-50 p-5 rounded-xl my-8 border-l-4 border-red-500">
        <p className="mb-0 text-red-900">
          ❗️<strong>Если вы пропустите эти сроки</strong> — паспорт считается просроченным, 
          а это уже нарушение закона.
        </p>
      </div>

      <h2 id="shtraf">⚠️ Что будет, если не поменять паспорт вовремя?</h2>
      
      <p>
        По <strong>статье 19.15 КоАП РФ</strong>, за просрочку положен административный штраф:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8">
        <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
          <p className="font-bold text-lg mb-2">Москва, Санкт-Петербург</p>
          <p className="text-3xl font-bold text-red-600 mb-0">3000–5000 ₽</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200">
          <p className="font-bold text-lg mb-2">Другие регионы РФ</p>
          <p className="text-3xl font-bold text-orange-600 mb-0">2000–3000 ₽</p>
        </div>
      </div>

      <p>Штраф могут выписать:</p>
      <ul>
        <li>На работе (при проверке документов)</li>
        <li>В МФЦ или ГУВМ МВД</li>
        <li>При оформлении кредита, недвижимости, загранпаспорта</li>
      </ul>

      <div className="bg-amber-50 p-5 rounded-xl my-8">
        <p className="mb-0">
          💡 <strong>Важно:</strong> Чем дольше вы тянете — тем выше риск столкнуться 
          с проверкой и получить штраф.
        </p>
      </div>

      <h2 id="ne-oplatit">💸 Что будет, если не оплатить штраф?</h2>
      
      <p>
        Если проигнорировать платеж, по <strong>статье 20.25 КоАП РФ</strong> возможны 
        серьёзные последствия:
      </p>

      <div className="bg-red-50 p-6 rounded-xl my-8 space-y-3">
        <div className="flex items-start gap-3">
          <span className="text-2xl">⚠️</span>
          <p className="mb-0"><strong>Удвоение суммы штрафа</strong></p>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-2xl">⚠️</span>
          <p className="mb-0"><strong>Обязательные работы</strong> до 50 часов</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-2xl">⚠️</span>
          <p className="mb-0"><strong>Административный арест</strong> на до 15 суток</p>
        </div>
      </div>

      <p className="text-lg font-medium">
        👉 Не стоит рисковать — лучше вовремя поменять паспорт, чем потом объясняться 
        с судебными приставами.
      </p>

      <h2 id="posledstviya">🛑 Последствия просрочки: что нельзя делать с просроченным паспортом?</h2>
      
      <p>
        Даже если штраф пока не выписан, с просроченным паспортом вы <strong>ограничены в правах</strong>:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8">
        <div className="bg-white border-2 border-red-200 p-5 rounded-xl">
          <p className="mb-0">🚫 Нельзя оформить кредит, займ или ипотеку</p>
        </div>
        <div className="bg-white border-2 border-red-200 p-5 rounded-xl">
          <p className="mb-0">🚫 Не получится купить билет на поезд или самолёт</p>
        </div>
        <div className="bg-white border-2 border-red-200 p-5 rounded-xl">
          <p className="mb-0">🚫 Невозможно зарегистрировать брак</p>
        </div>
        <div className="bg-white border-2 border-red-200 p-5 rounded-xl">
          <p className="mb-0">🚫 Проблемы с трудоустройством</p>
        </div>
        <div className="bg-white border-2 border-red-200 p-5 rounded-xl">
          <p className="mb-0">🚫 Нельзя подать документы на загранпаспорт</p>
        </div>
        <div className="bg-white border-2 border-red-200 p-5 rounded-xl">
          <p className="mb-0">🚫 Невозможно совершить сделку с недвижимостью</p>
        </div>
      </div>

      <p className="text-lg font-semibold">
        Документ теряет юридическую силу — его просто не примут.
      </p>

      <h2 id="kak-izbezhat">✅ Как избежать штрафа за просроченный паспорт?</h2>
      
      <p className="text-xl font-medium">
        Простое правило: <strong>подавайте заявление в течение отведённого срока</strong>.
      </p>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl my-8">
        <ul className="space-y-2 mb-0">
          <li>🔹 Если вам исполнилось <strong>20 или 45</strong> — у вас есть <strong>90 дней</strong></li>
          <li>🔹 При смене фамилии — <strong>30 дней</strong></li>
        </ul>
      </div>

      <div className="bg-blue-50 p-5 rounded-xl my-8">
        <p className="mb-0">
          ✅ <strong>Главное — начать процесс вовремя.</strong> Даже если паспорт ещё не готов — 
          факт подачи документов защитит вас от штрафа.
        </p>
      </div>

      <h2 id="instrukciya">📝 Пошаговая инструкция: как заменить паспорт через Госуслуги</h2>
      
      <p>
        Замена паспорта — простой процесс, особенно если сделать всё онлайн:
      </p>

      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl my-8">
        <h3 className="mt-0 mb-6 text-2xl font-bold">Пошаговый алгоритм:</h3>
        
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
              1
            </div>
            <div>
              <p className="font-semibold text-lg mb-2">Подайте заявление на Госуслугах</p>
              <ul className="text-sm space-y-1 mb-0">
                <li>✓ Авторизуйтесь в личном кабинете</li>
                <li>✓ Найдите услугу «Замена паспорта»</li>
                <li>✓ Выберите причину замены (возраст, фамилия и т.д.)</li>
                <li>✓ Заполните анкету</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
              2
            </div>
            <div>
              <p className="font-semibold text-lg mb-2">Оплатите госпошлину</p>
              <p className="text-sm mb-2">Через Госуслуги — <strong>со скидкой 30%</strong></p>
              <ul className="text-sm space-y-1 mb-0">
                <li>💰 За плановую замену (20/45 лет): <strong>300 ₽</strong> вместо 400 ₽</li>
                <li>💰 За другие основания: до 1500 ₽</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
              3
            </div>
            <div>
              <p className="font-semibold text-lg mb-2">Запишитесь в МФЦ</p>
              <ul className="text-sm space-y-1 mb-0">
                <li>✓ После подтверждения заявления выберите удобный офис</li>
                <li>✓ Придите в назначенное время</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
              4
            </div>
            <div>
              <p className="font-semibold text-lg mb-2">Сдайте документы</p>
              <p className="text-sm font-medium mb-2">Что взять с собой:</p>
              <ul className="text-sm space-y-1 mb-0">
                <li>📄 Старый паспорт</li>
                <li>📸 2 фото 35×45 мм (цветные)</li>
                <li>🧾 Квитанция об оплате</li>
                <li>🪖 Военный билет (для мужчин)</li>
                <li>💍 Свидетельство о браке / рождении детей (если нужны штампы)</li>
                <li>🏠 Документ о регистрации (если временная)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white/80 p-4 rounded-lg">
          <p className="mb-0 font-medium">
            ⏱ <strong>В некоторых МФЦ паспорт делают в тот же день!</strong>
          </p>
        </div>
      </div>

      <h2 id="otkaz">❌ Почему могут отказать в замене паспорта?</h2>
      
      <p>Отказывают редко, но возможны причины:</p>

      <div className="space-y-3 my-8">
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
          <p className="mb-0">❗️ Ошибки в заявлении</p>
        </div>
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
          <p className="mb-0">❗️ Неправильные или размытые фото</p>
        </div>
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
          <p className="mb-0">❗️ Не оплачена пошлина</p>
        </div>
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
          <p className="mb-0">❗️ Предоставлены поддельные документы</p>
        </div>
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
          <p className="mb-0">❗️ Нет гражданства РФ</p>
        </div>
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
          <p className="mb-0">❗️ Личность не установлена</p>
        </div>
      </div>

      <div className="bg-yellow-50 p-5 rounded-xl my-8">
        <p className="mb-0">
          📌 <strong>Совет:</strong> проверьте все данные дважды перед подачей.
        </p>
      </div>

      <h2 id="faq">💬 Ответы на частые вопросы</h2>

      <div className="space-y-4 my-8">
        <div className="bg-white border-2 border-primary/20 p-5 rounded-xl">
          <p className="font-semibold mb-2">❓ В каких возрастах обязательно меняют паспорт?</p>
          <p className="mb-0 text-muted-foreground">— В 14, 20 и 45 лет.</p>
        </div>

        <div className="bg-white border-2 border-primary/20 p-5 rounded-xl">
          <p className="font-semibold mb-2">❓ Можно ли ездить по старому паспорту после ДР?</p>
          <p className="mb-0 text-muted-foreground">— Да, в течение 90 дней — это законный срок на замену.</p>
        </div>

        <div className="bg-white border-2 border-primary/20 p-5 rounded-xl">
          <p className="font-semibold mb-2">❓ Как оплатить штраф за просрочку?</p>
          <p className="mb-0 text-muted-foreground">— Через Госуслуги, Сбербанк Онлайн или сайт ФССП. Оплатить нужно в течение 60 дней.</p>
        </div>

        <div className="bg-white border-2 border-primary/20 p-5 rounded-xl">
          <p className="font-semibold mb-2">❓ Могут ли оштрафовать, если я уже подал документы?</p>
          <p className="mb-0 text-muted-foreground">— Нет. Факт подачи заявления защищает от штрафа, даже если паспорт готовят месяц.</p>
        </div>
      </div>

      <h2 id="vyvod">✅ Вывод: как не попасть на штраф?</h2>

      <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 p-8 rounded-2xl my-8 border-2 border-green-200">
        <ul className="space-y-3 mb-0 text-lg">
          <li>✓ <strong>Знайте сроки:</strong> 90 дней на замену при 20/45 годах, 30 — при смене фамилии</li>
          <li>✓ <strong>Подавайте заявление заранее</strong> — лучше за 1–2 недели до окончания срока</li>
          <li>✓ <strong>Используйте Госуслуги</strong> — быстрее, дешевле, без очередей</li>
          <li>✓ <strong>Не затягивайте</strong> — каждый день просрочки увеличивает риск штрафа</li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-2xl my-8">
        <p className="text-xl font-bold mb-4">📌 Главное:</p>
        <p className="text-lg mb-0">
          Паспорт — не просто бумажка. Это ваш доступ к финансам, путешествиям и правам. 
          Отнеситесь к замене ответственно — и никакие штрафы вам не страшны. ✨
        </p>
      </div>
    </div>
  );
};

export default JournalPost6Content;
