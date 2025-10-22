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
    title: "Новые правила микрозаймов с 2025 года: что изменилось",
    description: "Центробанк ужесточил требования к МФО. Разбираем главные изменения законодательства, которые влияют на заёмщиков.",
    date: "22 октября 2025",
    readTime: "7 мин",
    category: "Новости",
    image: "/img/b12b359a-2234-487b-a7ec-1a54f978f94d.jpg",
    url: "/journal/novye-pravila-mikrozajmov-2025",
    slug: "novye-pravila-mikrozajmov-2025"
  },
  {
    id: 2,
    title: "Топ МФО октября 2025: рейтинг лучших компаний",
    description: "Актуальный рейтинг микрофинансовых организаций по отзывам клиентов, условиям займов и надёжности.",
    date: "20 октября 2025",
    readTime: "6 мин",
    category: "Рейтинги",
    image: "/img/27a7256b-9570-4cf4-8afc-9ac4caa43c42.jpg",
    url: "/journal/top-mfo-oktyabr-2025",
    slug: "top-mfo-oktyabr-2025"
  },
  {
    id: 3,
    title: "ЦБ отозвал лицензии у трёх МФО: проверьте свою компанию",
    description: "Центробанк исключил из реестра несколько микрофинансовых организаций. Полный список и что делать заёмщикам.",
    date: "18 октября 2025",
    readTime: "5 мин",
    category: "Новости",
    image: "/img/75826ede-4073-4327-905a-4148e15193c9.jpg",
    url: "/journal/cb-otозval-licenzii-mfo",
    slug: "cb-otозval-licenzii-mfo"
  }
];
