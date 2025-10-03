import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background via-50% to-secondary/5">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.1),transparent_50%)] opacity-40"></div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-scale-in">
            <Icon name="Zap" size={20} />
            <span className="font-semibold text-sm">Срочно нужны деньги?</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Микрозаймы онлайн: как быстро получить деньги на карту без отказа
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Микрозайм — это быстрое решение ваших финансовых проблем! В современном мире непредвиденные расходы могут возникнуть в любой момент: внезапная поломка техники, медицинские счета или просто нехватка средств до зарплаты. Именно в таких ситуациях микрозаймы становятся настоящим спасением.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={() => scrollToSection("lead-form")}
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Получить деньги за 5 минут
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            
            <Button 
              onClick={() => scrollToSection("mfo-list")}
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 hover:bg-secondary/10 transition-all duration-300"
            >
              <Icon name="Calculator" className="mr-2" size={20} />
              Выбрать МФО
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Clock" size={24} className="text-white" />
              </div>
              <div className="text-left">
                <p className="font-bold text-lg">5-15 минут</p>
                <p className="text-sm text-muted-foreground">получение денег</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                <Icon name="FileCheck" size={24} className="text-white" />
              </div>
              <div className="text-left">
                <p className="font-bold text-lg">Минимум</p>
                <p className="text-sm text-muted-foreground">документов</p>
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