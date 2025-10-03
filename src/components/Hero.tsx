import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-scale-in">
            <Icon name="Zap" size={20} />
            <span className="font-semibold text-sm">Одобрение за 5 минут</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-fade-in">
            Деньги здесь и сейчас
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Получите микрозайм до 200 000 ₽ без справок и поручителей. Мгновенное решение онлайн.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Получить деньги
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 hover:bg-secondary/10 transition-all duration-300">
              <Icon name="Calculator" className="mr-2" size={20} />
              Рассчитать займ
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Clock" size={24} className="text-white" />
              </div>
              <div className="text-left">
                <p className="font-bold text-lg">5 минут</p>
                <p className="text-sm text-muted-foreground">на решение</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                <Icon name="ShieldCheck" size={24} className="text-white" />
              </div>
              <div className="text-left">
                <p className="font-bold text-lg">100%</p>
                <p className="text-sm text-muted-foreground">безопасно</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Percent" size={24} className="text-white" />
              </div>
              <div className="text-left">
                <p className="font-bold text-lg">0%</p>
                <p className="text-sm text-muted-foreground">первый займ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
