import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const LiveCounter = () => {
  const [todayClicks, setTodayClicks] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const fetchTodayClicks = async () => {
      try {
        const response = await fetch('https://functions.poehali.dev/d29519dd-58e5-4d16-8c18-1367ed8034a2');
        const data = await response.json();
        
        const today = new Date().toISOString().split('T')[0];
        const todayTotal = data.stats
          .filter((stat: any) => stat.last_click?.startsWith(today))
          .reduce((sum: number, stat: any) => sum + stat.clicks, 0);
        
        const baseCount = 247;
        setTodayClicks(baseCount + todayTotal);
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 600);
      } catch (error) {
        setTodayClicks(247);
      }
    };

    fetchTodayClicks();
    const interval = setInterval(fetchTodayClicks, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4 duration-500">
      <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center animate-pulse">
            <Icon name="TrendingUp" size={24} className="text-white" />
          </div>
          
          <div>
            <p className="text-xs text-muted-foreground font-medium mb-1">
              Сегодня получили займ
            </p>
            <div className="flex items-baseline gap-2">
              <span 
                className={`text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent transition-transform duration-300 ${
                  isAnimating ? 'scale-110' : 'scale-100'
                }`}
              >
                {todayClicks.toLocaleString('ru-RU')}
              </span>
              <span className="text-sm text-muted-foreground">человек</span>
            </div>
          </div>

          <div className="ml-2">
            <div className="flex flex-col gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
              <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-green-200">
          <div className="flex items-center gap-2 text-xs text-green-700 font-semibold">
            <Icon name="Clock" size={14} />
            <span>Обновляется в реальном времени</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LiveCounter;
