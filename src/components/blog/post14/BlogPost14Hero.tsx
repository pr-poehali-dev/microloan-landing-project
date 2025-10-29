const BlogPost14Hero = () => {
  return (
    <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 md:p-8 mb-8 border-l-4 border-primary">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
        <span className="text-3xl">📌</span>
        Кто герой этой истории?
      </h2>
      <p className="text-lg leading-relaxed mb-4">
        <strong>Тимофей, 21 год, студент из Москвы.</strong> Всё начиналось с
        простого — хотел учиться и жить, как все. Но одна покупка в рассрочку
        запустила цепную реакцию, которая чуть не разрушила его жизнь.
      </p>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="text-sm text-muted-foreground mb-1">Сумма долга</div>
          <div className="text-2xl font-bold text-destructive">450 000 ₽</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="text-sm text-muted-foreground mb-1">Погашение</div>
          <div className="text-2xl font-bold text-primary">1,2 года</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="text-sm text-muted-foreground mb-1">Оружие</div>
          <div className="text-lg font-bold text-foreground">
            Работа + Дисциплина
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost14Hero;
