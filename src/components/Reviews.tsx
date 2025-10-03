import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Reviews = () => {
  const reviews = [
    {
      name: "Елена Соколова",
      city: "Москва",
      rating: 5,
      date: "15 февраля 2024",
      text: "Срочно понадобились деньги на ремонт холодильника. Оформила заявку вечером, через 10 минут деньги уже были на карте! Первый займ под 0% — вернула ровно столько, сколько брала. Очень довольна, рекомендую!",
      avatar: "/img/ee1a0a0e-d843-4106-9e11-913edcd4de15.jpg"
    },
    {
      name: "Дмитрий Петров",
      city: "Санкт-Петербург",
      rating: 5,
      date: "10 февраля 2024",
      text: "У меня не самая лучшая кредитная история, банки отказывали. Здесь одобрили за 5 минут! Взял 30 000 рублей на срочный ремонт авто. Все прозрачно, без скрытых платежей. Уже второй раз беру, всё отлично.",
      avatar: "/img/dedf0c2e-6961-489b-9a06-710c05c7a464.jpg"
    },
    {
      name: "Анна Михайлова",
      city: "Новосибирск",
      rating: 5,
      date: "8 февраля 2024",
      text: "Впервые брала микрозайм онлайн. Боялась мошенников, но всё оказалось очень просто и безопасно. Нужен был только паспорт. Деньги пришли моментально. Вернула досрочно, никаких штрафов. Сервис на высоте!",
      avatar: "/img/ee1a0a0e-d843-4106-9e11-913edcd4de15.jpg"
    },
    {
      name: "Сергей Волков",
      city: "Екатеринбург",
      rating: 5,
      date: "5 февраля 2024",
      text: "Нужно было срочно оплатить коммунальные услуги, до зарплаты оставалось 5 дней. Оформил заявку ночью, утром деньги уже были на счету. Поддержка ответила на все вопросы быстро. Очень удобный сервис, буду пользоваться еще.",
      avatar: "/img/dedf0c2e-6961-489b-9a06-710c05c7a464.jpg"
    },
    {
      name: "Ольга Новикова",
      city: "Казань",
      rating: 5,
      date: "2 февраля 2024",
      text: "Первый займ взяла под 0%, решила попробовать. Процесс занял буквально 5 минут! Никаких справок о доходах не требовали. Понравилось, что можно продлить срок, если возникнут сложности. Отличная альтернатива банковским кредитам!",
      avatar: "/img/ee1a0a0e-d843-4106-9e11-913edcd4de15.jpg"
    },
    {
      name: "Михаил Кузнецов",
      city: "Краснодар",
      rating: 5,
      date: "28 января 2024",
      text: "Взял 50 000 рублей на лечение. Одобрили несмотря на то, что у меня были просрочки по кредитам. Очень благодарен! Условия честные, всё расписано в договоре. Рекомендую всем, кто ищет быстрое решение финансовых вопросов.",
      avatar: "/img/dedf0c2e-6961-489b-9a06-710c05c7a464.jpg"
    }
  ];

  const stats = [
    { value: "50 000+", label: "Довольных клиентов" },
    { value: "4.8/5", label: "Средний рейтинг" },
    { value: "95%", label: "Одобрение заявок" },
    { value: "5 мин", label: "Среднее время выдачи" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Отзывы наших клиентов
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Более 50 000 человек уже получили микрозаймы и остались довольны нашим сервисом
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 text-center bg-gradient-to-br from-white to-primary/5 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
              >
                <div className="flex items-start gap-3 mb-4">
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0 ring-2 ring-primary/20"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{review.name}</h3>
                    <p className="text-sm text-muted-foreground">{review.city}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                  <span className="text-xs text-muted-foreground ml-2">{review.date}</span>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {review.text}
                </p>

                <div className="mt-4 pt-4 border-t flex items-center gap-2 text-xs text-green-600 font-semibold">
                  <Icon name="CheckCircle2" size={16} />
                  Проверенный отзыв
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="inline-block p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Star" size={32} className="text-white" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold mb-1">Оцените наш сервис</p>
                  <p className="text-muted-foreground">Мы ценим мнение каждого клиента</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;