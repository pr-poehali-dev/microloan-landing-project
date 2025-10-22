import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { journalPosts } from "@/data/journalPosts";

const LatestNews = () => {
  const latestNews = journalPosts.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background" id="latest-news">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-400/20 via-pink-400/20 to-teal-400/20 text-primary px-6 py-3 rounded-full mb-6 border-2 border-primary/20">
            <Icon name="Newspaper" size={20} className="animate-pulse" />
            <span className="font-bold text-sm">Актуальная информация</span>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-secondary bg-clip-text text-transparent">
            Последние новости микрофинансирования
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Свежие новости, изменения законодательства и рейтинги МФО
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-10">
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-6 border-2 border-primary/20 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Icon name="TrendingUp" size={32} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  📊 Ключевые изменения 2025
                  <Badge variant="outline" className="text-xs">Обновлено</Badge>
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Макс. ставка</p>
                    <p className="font-bold text-green-600 text-lg">0,8% в день ↓</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Пролонгации</p>
                    <p className="font-bold text-blue-600 text-lg">До 2 раз</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Проверка</p>
                    <p className="font-bold text-orange-600 text-lg">Обязательна ✓</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {latestNews.map((news, index) => (
            <Card 
              key={news.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link to={news.url || `/journal/${news.slug}`}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-primary/90 backdrop-blur-sm">
                      {news.category}
                    </Badge>
                    {index === 0 && (
                      <Badge className="bg-red-500 backdrop-blur-sm animate-pulse">
                        🔥 НОВИНКА
                      </Badge>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3 text-white text-xs">
                      <div className="flex items-center gap-1">
                        <Icon name="Calendar" size={12} />
                        <span>{news.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={12} />
                        <span>{news.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors line-clamp-2 text-lg">
                    {news.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {news.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-primary/10 transition-colors"
                  >
                    Читать подробнее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/journal">
            <Button size="lg" variant="outline" className="group">
              <Icon name="Newspaper" className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
              Все новости журнала
              <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;