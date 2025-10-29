import Icon from "@/components/ui/icon";

const BlogPost14Conclusions = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground rounded-2xl p-8 md:p-10 my-12 shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <span className="text-3xl">💡</span>
          Главные выводы
        </h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-3 text-lg leading-relaxed">
            <Icon name="CheckCircle2" className="flex-shrink-0 mt-1" size={24} />
            <span>
              Не используйте микрозаймы как источник дохода — это ловушка.
            </span>
          </li>
          <li className="flex items-start gap-3 text-lg leading-relaxed">
            <Icon name="CheckCircle2" className="flex-shrink-0 mt-1" size={24} />
            <span>
              При первых признаках просрочки — обращайтесь в МФО/банк.
              Реструктуризация может спасти.
            </span>
          </li>
          <li className="flex items-start gap-3 text-lg leading-relaxed">
            <Icon name="CheckCircle2" className="flex-shrink-0 mt-1" size={24} />
            <span>
              <strong>Работа + дисциплина = выход из долгов.</strong> Даже с
              минимальной зарплатой.
            </span>
          </li>
          <li className="flex items-start gap-3 text-lg leading-relaxed">
            <Icon name="CheckCircle2" className="flex-shrink-0 mt-1" size={24} />
            <span>
              Помощь близких — большая ответственность. Не подводите тех, кто
              поверил.
            </span>
          </li>
          <li className="flex items-start gap-3 text-lg leading-relaxed">
            <Icon name="CheckCircle2" className="flex-shrink-0 mt-1" size={24} />
            <span>
              После погашения — пересмотрите свои финансы. Создайте подушку
              безопасности.
            </span>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 my-12 border-l-4 border-primary">
        <div className="flex items-start gap-4 mb-4">
          <span className="text-5xl">✨</span>
          <blockquote className="text-xl md:text-2xl font-semibold italic leading-relaxed">
            "Теперь я сам контролирую свои деньги. И никакие МФО мне больше не
            нужны."
          </blockquote>
        </div>
        <p className="text-right text-lg font-medium text-muted-foreground mt-4">
          — Тимофей, 23 года, сегодня работает IT-специалистом
        </p>
      </div>
    </>
  );
};

export default BlogPost14Conclusions;
