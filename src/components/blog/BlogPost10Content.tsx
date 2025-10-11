import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const BlogPost10Content = () => {
  return (
    <article className="prose prose-lg max-w-4xl mx-auto">
      <div className="mb-8">
        <img 
          src="/img/421ccd30-dc7e-46c0-a5d1-9beed22a4725.jpg" 
          alt="Как получить МФО-кредит с плохой кредитной историей" 
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>

      <p className="lead text-xl text-muted-foreground leading-relaxed">
        Многие думают, что плохая кредитная история — это конец пути для займов. На самом деле, даже с плохой КИ можно получить микрозайм онлайн. В этой статье я расскажу, как мне удалось оформить МФО-кредит с плохой кредитной историей, какие шаги я сделал и на что обратить внимание.
      </p>

      <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Моя ситуация</h2>

      <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Что случилось с моей кредитной историей</h3>

      <p className="text-muted-foreground leading-relaxed">
        Два года назад я просрочил выплаты по кредитной карте. Денег не хватало, потерял работу, и долг начал расти. В итоге банк передал дело коллекторам, а в БКИ появилась просрочка на 90+ дней. Казалось, что больше никто не даст мне денег взаймы.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        Спустя время ситуация стабилизировалась: нашёл новую работу, погасил старые долги. Но когда понадобились срочные 15 000 рублей на ремонт машины, банки отказали. Причина — та самая просрочка в КИ.
      </p>

      <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Почему решил обратиться в МФО</h3>

      <p className="text-muted-foreground leading-relaxed">
        Друг посоветовал попробовать МФО — микрофинансовые организации, которые менее строги к кредитной истории. Я начал изучать варианты и понял, что некоторые МФО вообще не проверяют КИ или смотрят на неё лояльнее, чем банки.
      </p>

      <div className="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-lg">
        <p className="font-semibold text-foreground mb-2 flex items-center gap-2">
          <Icon name="Info" size={20} />
          Важно понимать
        </p>
        <p className="text-muted-foreground m-0">
          МФО — это не бесплатно. Ставки выше, чем в банках, но если нужны деньги срочно и банк отказал — это реальный выход.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Как я выбирал МФО</h2>

      <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">На что обращал внимание</h3>

      <p className="text-muted-foreground leading-relaxed">
        Первое правило — проверить, что МФО официально зарегистрирована в реестре ЦБ РФ. Я проверял каждую компанию на сайте Центробанка, чтобы не попасть на мошенников.
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

      <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Сравнение нескольких МФО</h3>

      <p className="text-muted-foreground leading-relaxed">
        Я выбрал три компании, которые часто одобряют займы даже с плохой историей:
      </p>

      <div className="grid gap-6 my-8">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-start justify-between mb-3">
            <h4 className="text-xl font-bold text-foreground m-0">💰 Надо денег</h4>
            <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">98% одобрение</span>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Одобряют даже без проверки КИ. Первый займ — под 0%. До 30 000 ₽ на срок до 30 дней. Решение за 5 минут.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Без проверки КИ</span>
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Первый 0%</span>
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">За 5 минут</span>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-start justify-between mb-3">
            <h4 className="text-xl font-bold text-foreground m-0">⚡ Умные наличные</h4>
            <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">96% одобрение</span>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Работают 24/7, выдают без отказа. До 30 000 ₽ на карту. Ставка от 0% для новых клиентов.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Без отказа</span>
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Онлайн 24/7</span>
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">На карту</span>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-start justify-between mb-3">
            <h4 className="text-xl font-bold text-foreground m-0">🎯 Max.Credit</h4>
            <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">95% одобрение</span>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Принимают заявки с 18 лет, мгновенное решение. До 30 000 ₽ под 0% для новых клиентов.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">С 18 лет</span>
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Мгновенно</span>
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Первый 0%</span>
          </div>
        </div>
      </div>

      <p className="text-muted-foreground leading-relaxed">
        Я решил подать заявки сразу в несколько МФО — каждая использует свою скоринговую модель, и шанс одобрения выше.
      </p>

      <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Процесс подачи заявки</h2>

      <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Какие документы понадобились</h3>

      <p className="text-muted-foreground leading-relaxed">
        Оказалось, что для большинства МФО нужен только паспорт. Никаких справок 2-НДФЛ, выписок с работы или подтверждения доходов. Это огромный плюс по сравнению с банками.
      </p>

      <div className="bg-secondary/50 p-6 rounded-lg my-8">
        <h4 className="font-semibold text-foreground mb-3 mt-0">Что потребовалось для онлайн-заявки:</h4>
        <ul className="list-none space-y-2 text-muted-foreground m-0">
          <li className="flex items-start gap-2">
            <Icon name="Check" size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
            <span>Паспорт РФ (серия, номер, дата выдачи)</span>
          </li>
          <li className="flex items-start gap-2">
            <Icon name="Check" size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
            <span>СНИЛС (для некоторых МФО)</span>
          </li>
          <li className="flex items-start gap-2">
            <Icon name="Check" size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
            <span>Номер банковской карты для зачисления</span>
          </li>
          <li className="flex items-start gap-2">
            <Icon name="Check" size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
            <span>Номер телефона и email</span>
          </li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Онлайн-подача: шаг за шагом</h3>

      <p className="text-muted-foreground leading-relaxed">
        Я подал заявку в «Надо денег» через их сайт. Процесс занял буквально 10 минут:
      </p>

      <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
        <li>
          <strong className="text-foreground">Регистрация:</strong> Ввёл номер телефона, получил СМС с кодом подтверждения
        </li>
        <li>
          <strong className="text-foreground">Заполнение анкеты:</strong> Паспортные данные, адрес регистрации, контакты
        </li>
        <li>
          <strong className="text-foreground">Выбор суммы и срока:</strong> Указал 15 000 ₽ на 21 день
        </li>
        <li>
          <strong className="text-foreground">Загрузка фото паспорта:</strong> Сделал фото разворота с основными данными
        </li>
        <li>
          <strong className="text-foreground">Ожидание решения:</strong> На экране появился таймер — «Решение в течение 5 минут»
        </li>
      </ol>

      <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Время ожидания решения</h3>

      <p className="text-muted-foreground leading-relaxed">
        Через 3 минуты пришло СМС: «Ваша заявка одобрена! Деньги поступят на карту в течение 15 минут». Я не поверил своим глазам — несмотря на плохую КИ, мне одобрили займ! Деньги действительно пришли через 12 минут.
      </p>

      <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8 rounded-r-lg">
        <p className="font-semibold text-green-900 mb-2 flex items-center gap-2">
          <Icon name="CheckCircle" size={20} />
          Мой результат
        </p>
        <p className="text-green-800 m-0">
          Одобрено 15 000 ₽ на 21 день под 0% (первый займ). Просрочка в КИ никак не повлияла на решение.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Результат и выводы</h2>

      <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Условия, которые я получил</h3>

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
          <p className="text-muted-foreground mb-2">Сумма к возврату: <strong className="text-foreground">15 000 ₽</strong></p>
          <p className="text-muted-foreground m-0">Переплата: <strong className="text-foreground">0 ₽</strong> (первый займ под 0%)</p>
        </div>
      </div>

      <p className="text-muted-foreground leading-relaxed">
        Через 21 день я вернул ровно 15 000 рублей — никаких скрытых комиссий или дополнительных платежей не было.
      </p>

      <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Какие ошибки я допустил</h3>

      <p className="text-muted-foreground leading-relaxed">
        Первая ошибка — я не прочитал договор полностью. Оказалось, что если не вернуть деньги вовремя, начисляется штраф 20% от суммы + пени за каждый день просрочки. Хорошо, что я успел погасить вовремя.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        Вторая ошибка — подал заявки в 5 МФО одновременно. Три из них одобрили займ, и мне потом пришлось отказываться от двух. Лучше подавать заявки последовательно.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8 rounded-r-lg">
        <p className="font-semibold text-yellow-900 mb-2 flex items-center gap-2">
          <Icon name="AlertTriangle" size={20} />
          Важный совет
        </p>
        <p className="text-yellow-800 m-0">
          Даже если вам одобрили займ под 0%, внимательно читайте договор. Узнайте, что будет при просрочке, есть ли скрытые комиссии, какие условия продления.
        </p>
      </div>

      <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Советы тем, кто в похожей ситуации</h3>

      <div className="space-y-4 my-8">
        <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
          <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
            1
          </div>
          <div>
            <h4 className="font-semibold text-foreground mt-0 mb-2">Не бойтесь плохой КИ</h4>
            <p className="text-muted-foreground m-0">
              Многие МФО специально работают с заёмщиками, которым отказали банки. Главное — выбирать проверенные компании из реестра ЦБ РФ.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
          <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
            2
          </div>
          <div>
            <h4 className="font-semibold text-foreground mt-0 mb-2">Используйте первый займ под 0%</h4>
            <p className="text-muted-foreground m-0">
              Почти все МФО предлагают первый займ без процентов. Это отличный способ получить деньги без переплаты и проверить, подходит ли вам эта компания.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
          <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
            3
          </div>
          <div>
            <h4 className="font-semibold text-foreground mt-0 mb-2">Берите столько, сколько точно сможете вернуть</h4>
            <p className="text-muted-foreground m-0">
              Не берите максимум только потому, что одобрили. Просрочка приведёт к огромным штрафам и ухудшению КИ ещё больше.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
          <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
            4
          </div>
          <div>
            <h4 className="font-semibold text-foreground mt-0 mb-2">Проверяйте МФО в реестре ЦБ</h4>
            <p className="text-muted-foreground m-0">
              Мошенники часто маскируются под МФО. Обязательно проверяйте компанию на сайте Центробанка перед оформлением займа.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
          <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
            5
          </div>
          <div>
            <h4 className="font-semibold text-foreground mt-0 mb-2">Погашайте займ вовремя</h4>
            <p className="text-muted-foreground m-0">
              Своевременное погашение улучшает вашу КИ. Со временем банки снова начнут вас рассматривать. МФО — это временное решение, а не постоянный источник денег.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Рекомендованные МФО для заёмщиков с плохой КИ</h2>

      <p className="text-muted-foreground leading-relaxed">
        Основываясь на своём опыте, рекомендую следующие МФО, которые лояльны к заёмщикам с плохой кредитной историей:
      </p>

      <div className="grid gap-6 my-8">
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 border-2 border-primary/20 rounded-xl p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl">💰</span>
                <h3 className="text-2xl font-bold text-foreground m-0">Надо денег</h3>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map((star) => (
                    <Icon key={star} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold text-foreground">4.9</span>
              </div>
            </div>
            <span className="text-sm font-bold text-green-700 bg-green-100 px-4 py-2 rounded-full">
              Без проверки КИ
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Сумма</p>
              <p className="font-bold text-foreground m-0">до 30 000 ₽</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Срок</p>
              <p className="font-bold text-foreground m-0">до 30 дней</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Ставка</p>
              <p className="font-bold text-foreground m-0">0%</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-white/60 px-3 py-1.5 rounded-full font-medium">Первый займ 0%</span>
            <span className="text-xs bg-white/60 px-3 py-1.5 rounded-full font-medium">Без проверки КИ</span>
            <span className="text-xs bg-white/60 px-3 py-1.5 rounded-full font-medium">За 5 минут</span>
          </div>

          <a
            href="https://trk.ppdu.ru/click/3GyRuqoD?erid=2SDnjdmoM8q&siteId=8015"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all no-underline w-full md:w-auto"
          >
            Оформить займ
            <Icon name="ArrowRight" size={20} />
          </a>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">⚡</span>
                <h3 className="text-xl font-bold text-foreground m-0">Умные наличные</h3>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map((star) => (
                    <Icon key={star} name="Star" size={16} className={star <= 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
                  ))}
                </div>
                <span className="font-semibold text-foreground">4.8</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Сумма</p>
              <p className="text-sm font-semibold text-foreground m-0">до 30 000 ₽</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Срок</p>
              <p className="text-sm font-semibold text-foreground m-0">до 30 дней</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Ставка</p>
              <p className="text-sm font-semibold text-foreground m-0">от 0%</p>
            </div>
          </div>

          <a
            href="https://trk.ppdu.ru/click/HbPsDylQ?erid=LjN8KKm44&siteId=8015"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-6 py-2.5 rounded-lg font-semibold transition-all no-underline w-full text-sm"
          >
            Оформить займ
            <Icon name="ArrowRight" size={18} />
          </a>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🎯</span>
                <h3 className="text-xl font-bold text-foreground m-0">Max.Credit</h3>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map((star) => (
                    <Icon key={star} name="Star" size={16} className={star <= 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
                  ))}
                </div>
                <span className="font-semibold text-foreground">4.7</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Сумма</p>
              <p className="text-sm font-semibold text-foreground m-0">до 30 000 ₽</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Срок</p>
              <p className="text-sm font-semibold text-foreground m-0">до 30 дней</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Ставка</p>
              <p className="text-sm font-semibold text-foreground m-0">0%</p>
            </div>
          </div>

          <a
            href="https://trk.ppdu.ru/click/OMRKMQnH?erid=2SDnjbuHuCz&siteId=8015"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-6 py-2.5 rounded-lg font-semibold transition-all no-underline w-full text-sm"
          >
            Оформить займ
            <Icon name="ArrowRight" size={18} />
          </a>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Частые вопросы</h2>

      <div className="space-y-6 my-8">
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-xl font-bold text-foreground mt-0 mb-3">Можно ли получить займ с отрицательной КИ?</h3>
          <p className="text-muted-foreground leading-relaxed m-0">
            Да, можно. Некоторые МФО (например, «Надо денег») вообще не проверяют кредитную историю или смотрят на неё менее строго, чем банки. Главное — быть готовым к меньшей сумме и более высокой ставке на повторных займах.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-xl font-bold text-foreground mt-0 mb-3">Какие МФО реально одобряют с плохой историей?</h3>
          <p className="text-muted-foreground leading-relaxed m-0">
            По моему опыту: «Надо денег» (98% одобрение, без проверки КИ), «Умные наличные» (96% одобрение), «Max.Credit» (95% одобрение). Эти компании специализируются на заёмщиках с проблемной кредитной историей.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-xl font-bold text-foreground mt-0 mb-3">Стоит ли брать первый займ небольшой суммой?</h3>
          <p className="text-muted-foreground leading-relaxed m-0">
            Да, это правильная стратегия. Берите минимум, который вам нужен, и возвращайте вовремя. Это улучшит вашу репутацию перед МФО, и при следующем обращении вам одобрят большую сумму на лучших условиях.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-xl font-bold text-foreground mt-0 mb-3">Что будет, если не вернуть займ вовремя?</h3>
          <p className="text-muted-foreground leading-relaxed m-0">
            Начисляются штрафы (обычно 20% от суммы) и пени за каждый день просрочки. Кредитная история ухудшится ещё больше. МФО может передать долг коллекторам. Лучше заранее связаться с компанией и договориться о продлении или реструктуризации.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Советы по улучшению кредитной истории</h2>

      <p className="text-muted-foreground leading-relaxed">
        Плохая кредитная история — это не навсегда. Вот что помогло мне постепенно её улучшить:
      </p>

      <div className="space-y-4 my-8">
        <div className="flex items-start gap-3 p-4 bg-secondary/20 rounded-lg">
          <Icon name="CheckCircle" size={24} className="text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-foreground mt-0 mb-1">Погашайте микрозаймы вовремя</h4>
            <p className="text-muted-foreground text-sm m-0">
              Каждый вовремя погашенный займ добавляет положительную запись в БКИ. Даже микрозаймы учитываются.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 bg-secondary/20 rounded-lg">
          <Icon name="CheckCircle" size={24} className="text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-foreground mt-0 mb-1">Закройте старые долги</h4>
            <p className="text-muted-foreground text-sm m-0">
              Даже если прошло много времени, закрытие долга улучшает КИ. Договоритесь с банком о реструктуризации.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 bg-secondary/20 rounded-lg">
          <Icon name="CheckCircle" size={24} className="text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-foreground mt-0 mb-1">Оформите кредитную карту с небольшим лимитом</h4>
            <p className="text-muted-foreground text-sm m-0">
              Некоторые банки (например, Тинькофф, Альфа-Банк) выдают карты с лимитом 10-20 тысяч даже с плохой КИ. Пользуйтесь ею и вовремя погашайте.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 bg-secondary/20 rounded-lg">
          <Icon name="CheckCircle" size={24} className="text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-foreground mt-0 mb-1">Проверяйте свою КИ раз в полгода</h4>
            <p className="text-muted-foreground text-sm m-0">
              Получите бесплатный отчёт на сайте Госуслуг. Убедитесь, что нет ошибок и все платежи отражены правильно.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 bg-secondary/20 rounded-lg">
          <Icon name="CheckCircle" size={24} className="text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-foreground mt-0 mb-1">Не подавайте много заявок одновременно</h4>
            <p className="text-muted-foreground text-sm m-0">
              Каждая заявка на кредит фиксируется в БКИ. Большое количество заявок за короткий период снижает рейтинг.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/20">
        <p className="text-muted-foreground leading-relaxed m-0">
          Хотите узнать больше о микрозаймах? Читайте наши статьи: <Link to="/blog/chto-takoe-mikrozajmy" className="text-primary hover:underline">что такое микрозаймы и как они работают</Link>, <Link to="/blog/kak-vybrat-nadezhnuyu-mfo" className="text-primary hover:underline">как выбрать надёжную МФО</Link> и <Link to="/blog/top-oshibok-pri-oformlenii-mikrozajmov" className="text-primary hover:underline">топ ошибок при оформлении микрозаймов</Link>. Это поможет вам получить займ на выгодных условиях и избежать проблем.
        </p>
      </div>
    </article>
  );
};

export default BlogPost10Content;
