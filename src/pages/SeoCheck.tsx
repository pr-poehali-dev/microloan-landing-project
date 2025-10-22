import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { checkAllBlogPostsSEO, SEOCheckResult } from '@/utils/seoChecker';

const SeoCheck = () => {
  const [results, setResults] = useState<SEOCheckResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSEO = async () => {
      setLoading(true);
      const checkResults = await checkAllBlogPostsSEO();
      setResults(checkResults);
      setLoading(false);
    };
    
    checkSEO();
  }, []);

  const okCount = results.filter(r => r.status === 'ok').length;
  const errorCount = results.filter(r => r.status === 'error').length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Проверка SEO и индексации
              </h1>
              <p className="text-lg text-muted-foreground">
                Статус всех статей блога в sitemap.xml и роутинге
              </p>
            </div>

            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="FileText" className="text-primary" />
                        Всего статей
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-4xl font-bold">{results.length}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="CheckCircle" className="text-green-500" />
                        Проиндексировано
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-4xl font-bold text-green-500">{okCount}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="AlertCircle" className="text-red-500" />
                        Ошибки
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-4xl font-bold text-red-500">{errorCount}</p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Статус статей</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {results.map((result, index) => (
                        <div 
                          key={index}
                          className="flex items-center justify-between p-4 rounded-lg border bg-card hover:shadow-md transition-shadow"
                        >
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{result.title}</h3>
                            <p className="text-sm text-muted-foreground truncate">
                              {result.url}
                            </p>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            {result.inSitemap ? (
                              <Badge variant="default" className="bg-green-500">
                                <Icon name="Check" size={14} className="mr-1" />
                                В sitemap
                              </Badge>
                            ) : (
                              <Badge variant="destructive">
                                <Icon name="X" size={14} className="mr-1" />
                                Нет в sitemap
                              </Badge>
                            )}
                            
                            {result.hasRoute ? (
                              <Badge variant="default" className="bg-blue-500">
                                <Icon name="Check" size={14} className="mr-1" />
                                Есть роут
                              </Badge>
                            ) : (
                              <Badge variant="destructive">
                                <Icon name="X" size={14} className="mr-1" />
                                Нет роута
                              </Badge>
                            )}
                            
                            {result.status === 'ok' ? (
                              <Icon name="CheckCircle" className="text-green-500" size={24} />
                            ) : (
                              <Icon name="AlertCircle" className="text-red-500" size={24} />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Info" className="text-primary" />
                    Справка
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>В sitemap</strong> — статья добавлена в public/sitemap.xml</li>
                    <li>• <strong>Есть роут</strong> — страница доступна по URL в роутинге React</li>
                    <li>• Все статьи должны иметь оба зеленых бейджа для корректной индексации</li>
                    <li>• Проверяйте sitemap в Google Search Console и Яндекс.Вебмастере</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SeoCheck;
