import Icon from "@/components/ui/icon";

const BlogPost10MFOList = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
        Рекомендованные МФО для заёмщиков с плохой КИ
      </h2>

      <p className="text-muted-foreground leading-relaxed">
        Основываясь на своём опыте, рекомендую следующие МФО, которые лояльны к
        заёмщикам с плохой кредитной историей:
      </p>

      <div className="grid gap-6 my-8">
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 border-2 border-primary/20 rounded-xl p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl">💰</span>
                <h3 className="text-2xl font-bold text-foreground m-0">
                  Надо денег
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon
                      key={star}
                      name="Star"
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
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
            <span className="text-xs bg-white/60 px-3 py-1.5 rounded-full font-medium">
              Первый займ 0%
            </span>
            <span className="text-xs bg-white/60 px-3 py-1.5 rounded-full font-medium">
              Без проверки КИ
            </span>
            <span className="text-xs bg-white/60 px-3 py-1.5 rounded-full font-medium">
              За 5 минут
            </span>
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
                <h3 className="text-xl font-bold text-foreground m-0">
                  Умные наличные
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon
                      key={star}
                      name="Star"
                      size={16}
                      className={
                        star <= 4
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="font-semibold text-foreground">4.8</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Сумма</p>
              <p className="text-sm font-semibold text-foreground m-0">
                до 30 000 ₽
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Срок</p>
              <p className="text-sm font-semibold text-foreground m-0">
                до 30 дней
              </p>
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
                <h3 className="text-xl font-bold text-foreground m-0">
                  Max.Credit
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon
                      key={star}
                      name="Star"
                      size={16}
                      className={
                        star <= 4
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="font-semibold text-foreground">4.7</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Сумма</p>
              <p className="text-sm font-semibold text-foreground m-0">
                до 30 000 ₽
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Срок</p>
              <p className="text-sm font-semibold text-foreground m-0">
                до 30 дней
              </p>
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
    </>
  );
};

export default BlogPost10MFOList;
