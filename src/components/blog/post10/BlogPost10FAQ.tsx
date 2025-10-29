const BlogPost10FAQ = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
        Частые вопросы
      </h2>

      <div className="space-y-6 my-8">
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-xl font-bold text-foreground mt-0 mb-3">
            Можно ли получить займ с отрицательной КИ?
          </h3>
          <p className="text-muted-foreground leading-relaxed m-0">
            Да, можно. Некоторые МФО (например, «Надо денег») вообще не
            проверяют кредитную историю или смотрят на неё менее строго, чем
            банки. Главное — быть готовым к меньшей сумме и более высокой ставке
            на повторных займах.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-xl font-bold text-foreground mt-0 mb-3">
            Какие МФО реально одобряют с плохой историей?
          </h3>
          <p className="text-muted-foreground leading-relaxed m-0">
            По моему опыту: «Надо денег» (98% одобрение, без проверки КИ),
            «Умные наличные» (96% одобрение), «Max.Credit» (95% одобрение). Эти
            компании специализируются на заёмщиках с проблемной кредитной
            историей.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-xl font-bold text-foreground mt-0 mb-3">
            Стоит ли брать первый займ небольшой суммой?
          </h3>
          <p className="text-muted-foreground leading-relaxed m-0">
            Да, это правильная стратегия. Берите минимум, который вам нужен, и
            возвращайте вовремя. Это улучшит вашу репутацию перед МФО, и при
            следующем обращении вам одобрят большую сумму на лучших условиях.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-xl font-bold text-foreground mt-0 mb-3">
            Что будет, если не вернуть займ вовремя?
          </h3>
          <p className="text-muted-foreground leading-relaxed m-0">
            Начисляются штрафы (обычно 20% от суммы) и пени за каждый день
            просрочки. Кредитная история ухудшится ещё больше. МФО может
            передать долг коллекторам. Лучше заранее связаться с компанией и
            договориться о продлении или реструктуризации.
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogPost10FAQ;
