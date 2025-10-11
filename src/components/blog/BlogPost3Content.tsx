import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const BlogPost3Content = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-foreground/80 leading-relaxed mb-8">
          <Link to="/blog/chto-takoe-mikrozajmy" className="text-primary hover:underline">Микрозаймы</Link> стали популярным способом быстро получить деньги в сложной финансовой ситуации. Однако рынок микрофинансирования привлекает не только добросовестные компании, но и мошенников, которые используют доверие людей в корыстных целях. В этой статье мы расскажем, как выбрать МФО, которая работает законно и не создаст дополнительных проблем заёмщику.
        </p>

        <div className="bg-gradient-to-r from-orange-100/50 via-pink-100/50 to-teal-100/50 rounded-2xl p-8 my-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-foreground">
            <Icon name="AlertTriangle" className="text-orange-500" size={32} />
            Почему важно выбирать надёжную МФО
          </h2>
          <p className="text-lg text-foreground/80">
            Неправильный выбор микрофинансовой организации может привести к серьёзным финансовым и правовым последствиям. Рассмотрим основные риски, с которыми сталкиваются заёмщики при обращении к недобросовестным компаниям.
          </p>
        </div>

        <h3 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-3 text-foreground">
          <Icon name="ShieldAlert" className="text-red-500" size={28} />
          Основные риски при работе с ненадёжными МФО
        </h3>

        <div className="grid gap-4 my-8">
          {[
            {
              icon: "UserX",
              title: "Мошенничество и кража персональных данных",
              text: "Поддельные МФО собирают паспортные данные, номера телефонов и другую личную информацию для последующего использования в преступных схемах."
            },
            {
              icon: "Banknote",
              title: "Скрытые платежи и завышенные проценты",
              text: "Недобросовестные организации включают в договор дополнительные комиссии, о которых не сообщают заранее."
            },
            {
              icon: "Gavel",
              title: "Незаконные методы взыскания долга",
              text: "Некоторые компании используют услуги коллекторов, которые нарушают закон при работе с должниками."
            },
            {
              icon: "ShieldOff",
              title: "Отсутствие правовой защиты",
              text: "При работе с нелегальными МФО заёмщик не может обратиться за защитой своих прав в официальные инстанции."
            }
          ].map((risk, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-orange-400 rounded-lg flex items-center justify-center">
                    <Icon name={risk.icon as any} className="text-white" size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-foreground">{risk.title}</h4>
                  <p className="text-foreground/70">{risk.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8 rounded-r-xl">
          <div className="flex gap-3">
            <Icon name="Info" className="text-orange-500 flex-shrink-0" size={24} />
            <div>
              <p className="font-bold text-foreground mb-2">Важно:</p>
              <p className="text-foreground/80">
                Если МФО обещает займ под 0% без договора или просит предоплату за "гарантированное одобрение" — это явные признаки мошенничества.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-3 text-foreground">
          <Icon name="TrendingDown" className="text-red-500" size={28} />
          Последствия для заёмщика
        </h3>

        <p className="text-lg text-foreground/80 mb-4">
          Работа с ненадёжной микрофинансовой организацией может привести к следующим проблемам:
        </p>

        <ul className="space-y-3 my-6">
          {[
            "Потеря денег без получения займа",
            "Кража личных данных и их использование третьими лицами",
            "Угрозы и давление со стороны псевдоколлекторов",
            "Невозможность урегулировать спор в судебном порядке",
            "Ущерб кредитной истории из-за незаконных действий мошенников"
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-foreground/80">
              <Icon name="XCircle" className="text-red-500 flex-shrink-0 mt-1" size={20} />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="bg-gradient-to-r from-teal-100/50 via-green-100/50 to-emerald-100/50 rounded-2xl p-8 my-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-foreground">
            <Icon name="CheckCircle2" className="text-teal-500" size={32} />
            Основные признаки легальной МФО
          </h2>
          <p className="text-lg text-foreground/80">
            Надёжная МФО обязательно должна соответствовать требованиям российского законодательства. Рассмотрим ключевые критерии, по которым можно определить законность микрофинансовой организации.
          </p>
        </div>

        <h3 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-3 text-foreground">
          <Icon name="Building2" className="text-blue-500" size={28} />
          Включение в реестр Центрального банка РФ
        </h3>

        <p className="text-lg text-foreground/80 mb-4">
          Самый важный признак легальной МФО — это наличие записи в официальном реестре Банка России. Все микрофинансовые организации обязаны получить регистрацию в ЦБ РФ для ведения деятельности.
        </p>

        <div className="bg-blue-50 rounded-xl p-6 my-6">
          <p className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Icon name="Globe" className="text-blue-500" size={20} />
            Где проверить:
          </p>
          <p className="text-foreground/80">
            Реестр субъектов финансового рынка доступен на официальном сайте Банка России по адресу: <strong>cbr.ru/finmarket/supervision/sv_micro/</strong>
          </p>
        </div>

        <p className="text-lg text-foreground/80 mb-3">В реестре содержится информация о:</p>

        <ul className="space-y-2 my-6">
          {[
            "Полном наименовании организации",
            "Регистрационном номере",
            "Дате включения в реестр",
            "Юридическом адресе",
            "Статусе организации (действующая/исключённая)"
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-foreground/80">
              <Icon name="CheckCircle" className="text-teal-500 flex-shrink-0 mt-1" size={20} />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-3 text-foreground">
          <Icon name="Monitor" className="text-purple-500" size={28} />
          Официальный сайт с полной информацией
        </h3>

        <p className="text-lg text-foreground/80 mb-4">
          Законная микрофинансовая организация обязательно имеет официальный веб-сайт с подробной информацией о компании и услугах.
        </p>

        <div className="bg-purple-50 rounded-xl p-6 my-6">
          <p className="font-bold text-foreground mb-4">Что должно быть на сайте надёжной МФО:</p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Полные реквизиты организации (ОГРН, ИНН, юридический адрес)",
              "Номер записи в реестре ЦБ РФ",
              "Контактная информация (телефон, email, физический адрес офиса)",
              "Подробные условия займов (процентная ставка, сроки, штрафы)",
              "Публичная оферта и образец договора",
              "Информация о порядке рассмотрения жалоб"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <Icon name="Check" className="text-purple-500 flex-shrink-0 mt-1" size={16} />
                <span className="text-sm text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <h3 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-3 text-foreground">
          <Icon name="FileCheck" className="text-green-500" size={28} />
          Прозрачные условия кредитования
        </h3>

        <p className="text-lg text-foreground/80 mb-4">
          Как проверить МФО на предмет честности условий? Обратите внимание на следующие моменты:
        </p>

        <div className="grid gap-4 my-6">
          {[
            "Полная стоимость займа указана заранее, включая все комиссии и платежи",
            "Максимальная процентная ставка не превышает установленные ЦБ РФ лимиты",
            "Сроки возврата четко определены в договоре",
            "Штрафы и пени прописаны в соответствии с законодательством",
            "Способы погашения займа удобны и доступны"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
              <Icon name="BadgeCheck" className="text-green-500 flex-shrink-0 mt-1" size={20} />
              <span className="text-foreground/80">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-100/50 via-indigo-100/50 to-purple-100/50 rounded-2xl p-8 my-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-foreground">
            <Icon name="Search" className="text-blue-500" size={32} />
            Как проверить МФО перед оформлением займа
          </h2>
          <p className="text-lg text-foreground/80">
            Перед подачей заявки на получение микрозайма необходимо тщательно проверить выбранную организацию. Предлагаем пошаговый алгоритм проверки.
          </p>
        </div>

        <div className="space-y-8 my-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-foreground">
              <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
              Шаг 1. Поиск в реестре ЦБ РФ
            </h3>
            <ol className="space-y-2 ml-13">
              {[
                "Откройте официальный сайт Банка России",
                "Перейдите в раздел «Реестр субъектов финансового рынка»",
                "Выберите категорию «Микрофинансовые организации»",
                "Введите название или регистрационный номер МФО",
                "Убедитесь, что организация находится в статусе «действующая»"
              ].map((step, index) => (
                <li key={index} className="flex items-start gap-2 text-foreground/80">
                  <span className="text-blue-500 font-bold">{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm flex items-start gap-2">
                <Icon name="AlertCircle" className="text-yellow-600 flex-shrink-0 mt-0.5" size={18} />
                <span className="text-foreground/80">
                  <strong>Внимание:</strong> Если МФО из реестра ЦБ исключена или приостановлена, сотрудничество с ней незаконно.
                </span>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-purple-500">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-foreground">
              <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
              Шаг 2. Анализ официального сайта
            </h3>
            <p className="text-foreground/80 mb-4 ml-13">Проверьте следующие элементы на сайте микрофинансовой организации:</p>
            <div className="grid gap-3 ml-13">
              {[
                { icon: "Lock", text: "Защищённое соединение — адрес должен начинаться с «https://»" },
                { icon: "FileText", text: "Актуальные реквизиты — ОГРН, ИНН, адрес должны совпадать с данными из реестра ЦБ" },
                { icon: "Phone", text: "Контактная информация — рабочие телефоны, email, физический адрес офиса" },
                { icon: "Scale", text: "Правовые документы — пользовательское соглашение, политика конфиденциальности" },
                { icon: "DollarSign", text: "Информация о тарифах — полная стоимость займа с учётом всех платежей" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-purple-50 p-3 rounded-lg">
                  <Icon name={item.icon as any} className="text-purple-500 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-sm text-foreground/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-teal-500">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-foreground">
              <div className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
              Шаг 3. Изучение отзывов клиентов
            </h3>
            <p className="text-foreground/80 mb-4 ml-13">Найдите независимые отзывы о работе МФО на специализированных платформах:</p>
            <ul className="space-y-2 ml-13 mb-4">
              {[
                "Сайты-агрегаторы отзывов (Банки.ру, Сравни.ру)",
                "Форумы и социальные сети",
                "Системы по защите прав потребителей",
                "Официальные жалобы в Роспотребнадзор"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-foreground/80">
                  <Icon name="MessageSquare" className="text-teal-500 flex-shrink-0 mt-1" size={16} />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-teal-50 rounded-lg p-4 ml-13">
              <p className="font-semibold text-foreground mb-2 text-sm">На что обратить внимание в отзывах:</p>
              <div className="space-y-1">
                {[
                  "Скорость рассмотрения заявок",
                  "Соответствие заявленных условий фактическим",
                  "Качество работы службы поддержки",
                  "Корректность работы с просрочками",
                  "Отсутствие скрытых платежей"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Icon name="Dot" className="text-teal-500" size={16} />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-orange-500">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-foreground">
              <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
              Шаг 4. Проверка адреса и контактов
            </h3>
            <p className="text-foreground/80 mb-4 ml-13">Убедитесь в реальности физического присутствия МФО:</p>
            <div className="grid md:grid-cols-2 gap-3 ml-13">
              {[
                { icon: "MapPin", text: "Найдите юридический адрес на картах" },
                { icon: "Phone", text: "Позвоните по указанным телефонам" },
                { icon: "Clock", text: "Проверьте время работы службы поддержки" },
                { icon: "Building", text: "При возможности посетите офис лично" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-orange-50 p-3 rounded-lg">
                  <Icon name={item.icon as any} className="text-orange-500 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-sm text-foreground/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100/50 via-rose-100/50 to-red-100/50 rounded-2xl p-8 my-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-foreground">
            <Icon name="Award" className="text-pink-500" size={32} />
            Дополнительные критерии надёжности
          </h2>
          <p className="text-lg text-foreground/80">
            Помимо обязательных требований, существуют дополнительные признаки, которые говорят о высоком уровне надёжности микрофинансовой организации.
          </p>
        </div>

        <h3 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-3 text-foreground">
          <Icon name="Users" className="text-indigo-500" size={28} />
          Членство в саморегулируемых организациях
        </h3>

        <p className="text-lg text-foreground/80 mb-4">
          Многие добросовестные МФО входят в состав саморегулируемых организаций (СРО), которые устанавливают дополнительные стандарты работы и контролируют деятельность участников.
        </p>

        <div className="bg-indigo-50 rounded-xl p-6 my-6">
          <p className="font-bold text-foreground mb-3">Основные СРО в сфере микрофинансирования:</p>
          <ul className="space-y-2">
            {[
              "Ассоциация развития финансовых технологий",
              "Объединение организаций микрофинансирования",
              "Ассоциация участников микрофинансового рынка"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-foreground/80">
                <Icon name="Building2" className="text-indigo-500 flex-shrink-0 mt-1" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <h3 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-3 text-foreground">
          <Icon name="Headphones" className="text-blue-500" size={28} />
          Качественная служба поддержки
        </h3>

        <p className="text-lg text-foreground/80 mb-4">
          Надёжная микрофинансовая организация обеспечивает клиентам доступную и профессиональную поддержку:
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          {[
            { icon: "MessageCircle", text: "Несколько каналов связи (телефон, email, онлайн-чат)" },
            { icon: "Clock", text: "Работа в удобные для клиентов часы" },
            { icon: "BookOpen", text: "Компетентные ответы на вопросы" },
            { icon: "Timer", text: "Решение проблем в разумные сроки" },
            { icon: "Heart", text: "Вежливое и уважительное отношение к клиентам" }
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
              <Icon name={item.icon as any} className="text-blue-500 flex-shrink-0 mt-0.5" size={20} />
              <span className="text-foreground/80">{item.text}</span>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-3 text-foreground">
          <Icon name="TrendingUp" className="text-green-500" size={28} />
          Разумная маркетинговая политика
        </h3>

        <p className="text-lg text-foreground/80 mb-4">
          Добросовестные МФО не используют агрессивную рекламу и сомнительные маркетинговые приёмы. Остерегайтесь компаний, которые:
        </p>

        <div className="grid gap-3 my-6">
          {[
            "Обещают «гарантированное одобрение» всем без исключения",
            "Предлагают займы под 0% без ограничений",
            "Требуют предоплату или страховой взнос",
            "Оказывают давление при принятии решений",
            "Скрывают важную информацию об условиях"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 bg-red-50 p-4 rounded-lg border border-red-200">
              <Icon name="AlertTriangle" className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
              <span className="text-foreground/80">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 my-12 text-white">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Icon name="ClipboardCheck" size={32} />
            Чек-лист: как выбрать надёжную МФО
          </h2>
          <p className="text-lg mb-6 text-white/90">Пошаговая проверка перед оформлением займа:</p>
          
          <div className="space-y-4">
            {[
              {
                title: "Проверить наличие в реестре ЦБ РФ",
                desc: "Убедиться, что МФО зарегистрирована и имеет статус «действующая»"
              },
              {
                title: "Изучить официальный сайт",
                desc: "Проверить наличие всех обязательных сведений, реквизитов и контактов"
              },
              {
                title: "Проанализировать условия займа",
                desc: "Убедиться в прозрачности всех тарифов, сроков и требований"
              },
              {
                title: "Прочитать отзывы клиентов",
                desc: "Найти независимые отзывы на специализированных платформах"
              },
              {
                title: "Связаться со службой поддержки",
                desc: "Оценить качество консультаций и профессионализм сотрудников"
              },
              {
                title: "Проверить физическое присутствие",
                desc: "Убедиться в реальности адреса и возможности личного обращения"
              },
              {
                title: "Внимательно прочитать договор",
                desc: "Изучить все пункты договора перед подписанием"
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Icon name="Check" className="text-white" size={20} />
                  </div>
                </div>
                <div>
                  <p className="font-bold mb-1">☑ {item.title}</p>
                  <p className="text-sm text-white/80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-yellow-500/20 rounded-xl p-6 border border-yellow-300/30">
            <p className="font-bold text-xl mb-2 flex items-center gap-2">
              <Icon name="Lightbulb" size={24} />
              Золотое правило:
            </p>
            <p className="text-white/90">
              Если у вас возникли сомнения в надёжности МФО на любом этапе проверки — лучше поискать альтернативные варианты. Безопасность важнее скорости получения денег.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-100 via-pink-100 to-teal-100 rounded-2xl p-8 my-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-foreground">
            <Icon name="CheckCircle2" className="text-teal-500" size={32} />
            Заключение
          </h2>
          
          <div className="space-y-4 text-lg text-foreground/80">
            <p>
              Выбор надёжной микрофинансовой организации — это важное решение, которое требует тщательной подготовки и проверки. Основные критерии надёжной МФО включают в себя: законность деятельности (регистрация в ЦБ РФ), прозрачность условий и честность в отношениях с клиентами.
            </p>

            <p>
              Помните, что потратив несколько дополнительных минут на проверку МФО, вы защищаете себя от серьёзных финансовых и правовых проблем. Всегда проверяйте информацию в официальных источниках и не доверяйте сомнительным предложениям. Изучите <Link to="/blog/kakie-dokumenty-nuzhny-dlya-mikrozajma" className="text-primary hover:underline font-semibold">какие документы нужны для займа</Link> и <Link to="/blog/top-oshibok-pri-oformlenii-mikrozajmov" className="text-primary hover:underline font-semibold">избегайте типичных ошибок</Link> при оформлении.
            </p>

            <p>
              Если вы столкнулись с неправомерными действиями со стороны микрофинансовой организации, обращайтесь в Банк России, Роспотребнадзор или правоохранительные органы. Ваша бдительность поможет не только защитить собственные интересы, но и предотвратить мошенничество в отношении других граждан.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost3Content;