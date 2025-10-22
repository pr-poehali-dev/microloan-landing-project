import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { journalPosts } from "@/data/journalPosts";

const Journal = () => {
  const [viewCounts, setViewCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const title = 'Журнал новостей микрофинансирования — актуальная информация';
    const description = 'Свежие новости МФО, рейтинги микрозаймов, изменения законодательства и аналитика финансового рынка России.';
    
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    const fetchViewCounts = async () => {
      try {
        const response = await fetch('https://functions.poehali.dev/d23c653d-0229-4d5c-89fc-42c4195e0442?type=journal');
        const data = await response.json();
        if (data.views) {
          const counts: Record<string, number> = {};
          data.views.forEach((item: { post_slug: string; view_count: number }) => {
            counts[item.post_slug] = item.view_count;
          });
          setViewCounts(counts);
        }
      } catch (error) {
        console.error('Failed to fetch view counts:', error);
      }
    };
    
    fetchViewCounts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Icon name="Newspaper" size={20} />
                <span className="font-semibold text-sm">Свежие новости</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Журнал МикроФин
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Актуальные новости микрофинансирования, рейтинги МФО и изменения законодательства
              </p>
            </div>

            <div className="flex gap-4 mb-8 justify-center flex-wrap">
              <Link to="/blog">
                <Button variant="outline" size="lg">
                  <Icon name="BookOpen" className="mr-2" size={20} />
                  Блог с советами
                </Button>
              </Link>
              <Button variant="default" size="lg">
                <Icon name="Newspaper" className="mr-2" size={20} />
                Журнал новостей
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {journalPosts.map((post, index) => (
                <Card 
                  key={post.id}
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Link to={post.url || `/journal/${post.slug}`}>
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary/90 backdrop-blur-sm">
                          {post.category}
                        </Badge>
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
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Icon name="Calendar" size={14} />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Clock" size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      {post.slug && viewCounts[post.slug] && (
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                          <Icon name="Eye" size={14} />
                          <span>{viewCounts[post.slug].toLocaleString('ru-RU')} просмотров</span>
                        </div>
                      )}
                      
                      <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                        Читать статью
                        <Icon name="ArrowRight" className="ml-2" size={16} />
                      </Button>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>

            {journalPosts.length === 0 && (
              <div className="text-center py-20">
                <Icon name="Newspaper" size={64} className="mx-auto mb-4 text-muted-foreground opacity-50" />
                <h3 className="text-2xl font-semibold mb-2 text-muted-foreground">
                  Новости скоро появятся
                </h3>
                <p className="text-muted-foreground">
                  Мы работаем над наполнением журнала актуальной информацией
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Journal;
