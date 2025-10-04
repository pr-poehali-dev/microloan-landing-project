import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  const [viewCounts, setViewCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    window.scrollTo(0, 0);
    
    document.title = 'Микрозаймы, кредиты и финансы — блог о деньгах и займах';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Блог о финансах: микрозаймы онлайн, потребительские кредиты и кредитные карты. Разница, условия, советы и полезная информация.');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Микрозаймы, кредиты и финансы — блог о деньгах и займах');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Блог о финансах: микрозаймы онлайн, потребительские кредиты и кредитные карты. Разница, условия, советы и полезная информация.');
    }
    
    // Fetch view counts for all blog posts
    const fetchViewCounts = async () => {
      try {
        const response = await fetch('https://functions.poehali.dev/d23c653d-0229-4d5c-89fc-42c4195e0442?type=blog');
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
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4 flex-wrap gap-2">
                      <div className="flex items-center gap-1">
                        <Icon name="Calendar" size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        <span>{post.readTime}</span>
                      </div>
                      {post.slug && viewCounts[post.slug] !== undefined && (
                        <div className="flex items-center gap-1">
                          <Icon name="Eye" size={14} />
                          <span>{viewCounts[post.slug].toLocaleString('ru-RU')}</span>
                        </div>
                      )}
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