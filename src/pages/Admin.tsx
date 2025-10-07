import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Lead {
  id: number;
  full_name: string;
  phone: string;
  amount?: number;
  days?: number;
  source?: string;
  created_at: string;
  ip_address: string;
}

interface Stats {
  total: number;
  today: number;
  week: number;
  month: number;
}

const Admin = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [stats, setStats] = useState<Stats>({ total: 0, today: 0, week: 0, month: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [limit, setLimit] = useState(50);
  const [offset, setOffset] = useState(0);
  const { toast } = useToast();

  const fetchLeads = async () => {
    setIsLoading(true);
    try {
      let url = `https://functions.poehali.dev/33a8935f-b227-466b-be72-dddaee7e2500?limit=${limit}&offset=${offset}`;
      
      if (dateFrom) url += `&date_from=${dateFrom}`;
      if (dateTo) url += `&date_to=${dateTo}`;

      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        setLeads(data.leads);
        setStats(data.stats);
      } else {
        toast({
          title: "Ошибка загрузки",
          description: "Не удалось загрузить данные",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка сети",
        description: "Проверьте подключение",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, [offset]);

  const handleFilter = () => {
    setOffset(0);
    fetchLeads();
  };

  const handleReset = () => {
    setDateFrom("");
    setDateTo("");
    setOffset(0);
    fetchLeads();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const exportToCSV = () => {
    const headers = ['ID', 'ФИО', 'Телефон', 'Сумма', 'Дней', 'Источник', 'Дата', 'IP'];
    const rows = leads.map(lead => [
      lead.id,
      lead.full_name,
      lead.phone,
      lead.amount || '-',
      lead.days || '-',
      lead.source || '-',
      formatDate(lead.created_at),
      lead.ip_address || '-'
    ]);

    const csv = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `leads_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  const submitSitemap = async () => {
    const sitemapUrl = encodeURIComponent('https://mikrofinru.ru/sitemap.xml');
    
    toast({
      title: "Отправка sitemap",
      description: "Уведомляем поисковые системы...",
    });

    try {
      await Promise.allSettled([
        fetch(`https://webmaster.yandex.ru/ping?sitemap=${sitemapUrl}`, { mode: 'no-cors' }),
        fetch(`https://www.google.com/ping?sitemap=${sitemapUrl}`, { mode: 'no-cors' })
      ]);
      
      toast({
        title: "Sitemap отправлен",
        description: "Яндекс и Google уведомлены об обновлении",
      });
    } catch (error) {
      toast({
        title: "Sitemap отправлен",
        description: "Запросы к поисковым системам выполнены",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
            <Icon name="LayoutDashboard" size={36} />
            Админ-панель
          </h1>
          <p className="text-muted-foreground">Управление заявками и статистика</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Всего заявок</p>
                <p className="text-3xl font-bold text-blue-700">{stats.total}</p>
              </div>
              <Icon name="Users" size={32} className="text-blue-500" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Сегодня</p>
                <p className="text-3xl font-bold text-green-700">{stats.today}</p>
              </div>
              <Icon name="Calendar" size={32} className="text-green-500" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">За неделю</p>
                <p className="text-3xl font-bold text-purple-700">{stats.week}</p>
              </div>
              <Icon name="TrendingUp" size={32} className="text-purple-500" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">За месяц</p>
                <p className="text-3xl font-bold text-orange-700">{stats.month}</p>
              </div>
              <Icon name="BarChart3" size={32} className="text-orange-500" />
            </div>
          </Card>
        </div>

        <Card className="p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1">
              <label className="text-sm font-medium mb-2 block">Дата от</label>
              <Input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium mb-2 block">Дата до</label>
              <Input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
              />
            </div>
            <Button onClick={handleFilter} className="gap-2">
              <Icon name="Filter" size={16} />
              Применить
            </Button>
            <Button onClick={handleReset} variant="outline" className="gap-2">
              <Icon name="RotateCcw" size={16} />
              Сбросить
            </Button>
            <Button onClick={exportToCSV} variant="secondary" className="gap-2">
              <Icon name="Download" size={16} />
              Экспорт CSV
            </Button>
            <Button onClick={submitSitemap} variant="outline" className="gap-2">
              <Icon name="Globe" size={16} />
              Отправить Sitemap
            </Button>
          </div>
        </Card>

        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            {isLoading ? (
              <div className="flex items-center justify-center py-20">
                <Icon name="Loader2" size={40} className="animate-spin text-primary" />
              </div>
            ) : leads.length === 0 ? (
              <div className="text-center py-20">
                <Icon name="Inbox" size={48} className="mx-auto text-muted-foreground mb-4" />
                <p className="text-lg text-muted-foreground">Заявок пока нет</p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50">
                    <TableHead className="font-bold">ID</TableHead>
                    <TableHead className="font-bold">ФИО</TableHead>
                    <TableHead className="font-bold">Телефон</TableHead>
                    <TableHead className="font-bold">Сумма</TableHead>
                    <TableHead className="font-bold">Срок</TableHead>
                    <TableHead className="font-bold">Источник</TableHead>
                    <TableHead className="font-bold">Дата и время</TableHead>
                    <TableHead className="font-bold">IP адрес</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leads.map((lead) => (
                    <TableRow key={lead.id} className="hover:bg-slate-50">
                      <TableCell className="font-medium">{lead.id}</TableCell>
                      <TableCell>{lead.full_name}</TableCell>
                      <TableCell className="font-mono">{lead.phone}</TableCell>
                      <TableCell className="font-semibold">
                        {lead.amount ? `${lead.amount.toLocaleString('ru-RU')} ₽` : '-'}
                      </TableCell>
                      <TableCell>
                        {lead.days ? `${lead.days} ${lead.days === 1 ? 'день' : lead.days < 5 ? 'дня' : 'дней'}` : '-'}
                      </TableCell>
                      <TableCell>
                        <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                          lead.source === 'calculator' ? 'bg-blue-100 text-blue-700' :
                          lead.source === 'leadform' ? 'bg-green-100 text-green-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {lead.source === 'calculator' ? 'Калькулятор' :
                           lead.source === 'leadform' ? 'Форма' :
                           lead.source || '-'}
                        </span>
                      </TableCell>
                      <TableCell>{formatDate(lead.created_at)}</TableCell>
                      <TableCell className="text-muted-foreground font-mono text-sm">
                        {lead.ip_address || '-'}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>

          {!isLoading && leads.length > 0 && (
            <div className="flex items-center justify-between p-4 border-t bg-slate-50">
              <Button
                variant="outline"
                onClick={() => setOffset(Math.max(0, offset - limit))}
                disabled={offset === 0}
                className="gap-2"
              >
                <Icon name="ChevronLeft" size={16} />
                Назад
              </Button>
              
              <span className="text-sm text-muted-foreground">
                Показано {offset + 1}-{Math.min(offset + limit, offset + leads.length)} из {stats.total}
              </span>
              
              <Button
                variant="outline"
                onClick={() => setOffset(offset + limit)}
                disabled={offset + leads.length >= stats.total}
                className="gap-2"
              >
                Вперёд
                <Icon name="ChevronRight" size={16} />
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Admin;