export interface JournalPost {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  url?: string;
  slug?: string;
}

export const journalPosts: JournalPost[] = [
  {
    id: 1,
    title: "Что решит ЦБ 24 октября: как это ударит по вашим вкладам и облигациям",
    description: "Сохранит ли Центробанк ключевую ставку на 17% или снизит её? Разбираем, как решение регулятора повлияет на доходность вкладов и облигаций.",
    date: "23 октября 2025",
    readTime: "8 мин",
    category: "Аналитика",
    image: "https://cdn.poehali.dev/files/42bc6b2d-3302-47b3-b4bf-5f4e889fe11c.jpg",
    url: "/journal/reshenie-cb-24-oktyabrya-vklady-obligacii",
    slug: "reshenie-cb-24-oktyabrya-vklady-obligacii"
  }
];