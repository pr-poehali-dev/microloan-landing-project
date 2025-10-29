import Icon from "@/components/ui/icon";

const BlogPost10MySituation = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
        Моя ситуация
      </h2>

      <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
        Что случилось с моей кредитной историей
      </h3>

      <p className="text-muted-foreground leading-relaxed">
        Два года назад я просрочил выплаты по кредитной карте. Денег не
        хватало, потерял работу, и долг начал расти. В итоге банк передал дело
        коллекторам, а в БКИ появилась просрочка на 90+ дней. Казалось, что
        больше никто не даст мне денег взаймы.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        Спустя время ситуация стабилизировалась: нашёл новую работу, погасил
        старые долги. Но когда понадобились срочные 15 000 рублей на ремонт
        машины, банки отказали. Причина — та самая просрочка в КИ.
      </p>

      <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
        Почему решил обратиться в МФО
      </h3>

      <p className="text-muted-foreground leading-relaxed">
        Друг посоветовал попробовать МФО — микрофинансовые организации, которые
        менее строги к кредитной истории. Я начал изучать варианты и понял, что
        некоторые МФО вообще не проверяют КИ или смотрят на неё лояльнее, чем
        банки.
      </p>

      <div className="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-lg">
        <p className="font-semibold text-foreground mb-2 flex items-center gap-2">
          <Icon name="Info" size={20} />
          Важно понимать
        </p>
        <p className="text-muted-foreground m-0">
          МФО — это не бесплатно. Ставки выше, чем в банках, но если нужны
          деньги срочно и банк отказал — это реальный выход.
        </p>
      </div>
    </>
  );
};

export default BlogPost10MySituation;
