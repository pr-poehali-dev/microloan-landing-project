import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const blogPosts = [
  {
    id: 1,
    title: "Что такое микрозаймы и как они работают",
    description: "Что такое микрозаймы простыми словами: как работают займы онлайн, условия получения микрозайма на карту, процесс оформления, плюсы и минусы.",
    date: "15 марта 2024",
    readTime: "10 мин",
    category: "Советы",
    image: "/img/b12b359a-2234-487b-a7ec-1a54f978f94d.jpg",
    url: "/blog/chto-takoe-mikrozajmy"
  },
  {
    id: 2,
    title: "Первый займ под 0%: как это работает",
    description: "Разбираем условия беспроцентных займов для новых клиентов, скрытые комиссии и что нужно знать перед оформлением.",
    date: "12 марта 2024",
    readTime: "4 мин",
    category: "Условия",
    image: "/img/blog-zero.jpg"
  },
  {
    id: 3,
    title: "Микрозайм без проверки кредитной истории",
    description: "Реально ли получить деньги с плохой КИ? Какие МФО одобряют заявки без проверок и какие есть подводные камни.",
    date: "8 марта 2024",
    readTime: "6 мин",
    category: "Одобрение",
    image: "/img/blog-history.jpg"
  },
  {
    id: 4,
    title: "Как не попасть в долговую яму",
    description: "Правила безопасного использования микрозаймов: как рассчитать свои возможности и не влезть в долги.",
    date: "5 марта 2024",
    readTime: "7 мин",
    category: "Финансовая грамотность",
    image: "/img/blog-safety.jpg"
  },
  {
    id: 5,
    title: "Срочный займ: пошаговая инструкция",
    description: "Что делать, если деньги нужны прямо сейчас? Подробная инструкция по быстрому получению микрозайма за 15 минут.",
    date: "1 марта 2024",
    readTime: "5 мин",
    category: "Инструкции",
    image: "/img/blog-urgent.jpg"
  },
  {
    id: 6,
    title: "Рефинансирование микрозаймов в 2024",
    description: "Как снизить платеж по займу, объединить несколько кредитов в один и сэкономить на процентах.",
    date: "28 февраля 2024",
    readTime: "6 мин",
    category: "Рефинансирование",
    image: "/img/blog-refinance.jpg"
  }
];

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Блог о микрозаймах
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Полезные статьи, советы и инструкции по оформлению микрозаймов
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card 
                  key={post.id}
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                    {post.image ? (
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon name="FileText" size={64} className="text-primary/30" />
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Icon name="Calendar" size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    {post.url ? (
                      <Link to={post.url}>
                        <Button 
                          variant="outline" 
                          className="w-full group-hover:bg-primary group-hover:text-white transition-all"
                        >
                          Читать статью
                          <Icon name="ArrowRight" className="ml-2" size={16} />
                        </Button>
                      </Link>
                    ) : (
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-white transition-all"
                        disabled
                      >
                        Скоро
                        <Icon name="Clock" className="ml-2" size={16} />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link to="/">
                <Button variant="outline" size="lg" className="gap-2">
                  <Icon name="ArrowLeft" size={20} />
                  Вернуться на главную
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;