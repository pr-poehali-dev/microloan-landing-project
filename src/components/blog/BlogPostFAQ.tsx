import Icon from "@/components/ui/icon";

const BlogPostFAQ = () => {
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">
        Часто задаваемые вопросы
      </h2>

      <div className="space-y-4 mb-8">
        <details className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-500 group">
          <summary className="font-bold text-lg text-foreground cursor-pointer list-none flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Icon name="HelpCircle" size={20} className="text-blue-600" />
              Сколько займов можно взять одновременно?
            </span>
            <Icon name="ChevronDown" size={20} className="text-blue-600 group-open:rotate-180 transition-transform" />
          </summary>
          <p className="mt-4 text-foreground/80 leading-relaxed">
            Технически вы можете взять займы в нескольких МФО одновременно. Однако это крайне не рекомендуется. Каждая МФО проверяет вашу кредитную историю и видит все активные займы. Чем больше займов, тем выше риск отказа и тем сложнее потом вернуть все долги вовремя. Лучше брать один займ и погасить его, прежде чем обращаться в другую компанию.
          </p>
        </details>

        <details className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 group">
          <summary className="font-bold text-lg text-foreground cursor-pointer list-none flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Icon name="HelpCircle" size={20} className="text-green-600" />
              Можно ли продлить срок займа, если не успеваю вернуть?
            </span>
            <Icon name="ChevronDown" size={20} className="text-green-600 group-open:rotate-180 transition-transform" />
          </summary>
          <p className="mt-4 text-foreground/80 leading-relaxed">
            Да, большинство МФО предлагают услугу пролонгации (продления) займа. За это берется дополнительная комиссия. Например, если вы взяли 10 000 рублей на 14 дней, а перед датой возврата поняли, что не успеваете, можно продлить займ еще на 7-14 дней. Стоимость пролонгации обычно составляет от 500 до 2000 рублей в зависимости от суммы. Это дешевле, чем штрафы за просрочку.
          </p>
        </details>

        <details className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 group">
          <summary className="font-bold text-lg text-foreground cursor-pointer list-none flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Icon name="HelpCircle" size={20} className="text-orange-600" />
              Что будет, если не вернуть микрозайм вовремя?
            </span>
            <Icon name="ChevronDown" size={20} className="text-orange-600 group-open:rotate-180 transition-transform" />
          </summary>
          <p className="mt-4 text-foreground/80 leading-relaxed">
            При просрочке начисляются штрафы и пени. Закон ограничивает их размер: общая сумма долга не может превысить сумму займа более чем в 2,5 раза. МФО будет звонить, отправлять SMS и письма с напоминаниями. Информация о просрочке попадет в кредитную историю, что затруднит получение кредитов в будущем. В крайнем случае МФО может обратиться в суд или передать долг коллекторам.
          </p>
        </details>

        <details className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border-l-4 border-purple-500 group">
          <summary className="font-bold text-lg text-foreground cursor-pointer list-none flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Icon name="HelpCircle" size={20} className="text-purple-600" />
              Безопасно ли давать паспортные данные онлайн?
            </span>
            <Icon name="ChevronDown" size={20} className="text-purple-600 group-open:rotate-180 transition-transform" />
          </summary>
          <p className="mt-4 text-foreground/80 leading-relaxed">
            Если вы обращаетесь в официальную МФО, имеющую лицензию Центрального Банка РФ, то передавать данные безопасно. Все надежные МФО используют защищенное соединение (HTTPS) и шифрование данных. Перед отправкой документов проверьте: есть ли у компании лицензия ЦБ (номер можно проверить на сайте cbr.ru), как давно она работает, есть ли реальные отзывы. Никогда не отправляйте данные по email или в мессенджеры – только через официальный сайт МФО.
          </p>
        </details>

        <details className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border-l-4 border-pink-500 group">
          <summary className="font-bold text-lg text-foreground cursor-pointer list-none flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Icon name="HelpCircle" size={20} className="text-pink-600" />
              Первый займ под 0% – это правда или уловка?
            </span>
            <Icon name="ChevronDown" size={20} className="text-pink-600 group-open:rotate-180 transition-transform" />
          </summary>
          <p className="mt-4 text-foreground/80 leading-relaxed">
            Это правда! Многие МФО предлагают первый займ новым клиентам под 0% на срок от 5 до 30 дней. Если вы вернете деньги вовремя, не заплатите ни копейки процентов. Это маркетинговая акция для привлечения клиентов. Важно: внимательно читайте условия. Обычно беспроцентный период действует только на суммы до 10-30 тысяч рублей и только при первом обращении. Второй займ уже будет с обычными процентами.
          </p>
        </details>
      </div>
    </>
  );
};

export default BlogPostFAQ;
