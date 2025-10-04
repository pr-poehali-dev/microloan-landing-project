export interface BlogPost {
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

export const blogPosts: BlogPost[] = [
  {
    id: 2,
    title: "В чём разница между микрозаймом, потребкредитом и кредитной картой",
    description: "Сравнение микрозайма, потребительского кредита и кредитной карты: условия, процентные ставки, сроки. Когда выбирать каждый финансовый инструмент.",
    date: "4 октября 2025",
    readTime: "12 мин",
    category: "Советы",
    image: "/img/b12b359a-2234-487b-a7ec-1a54f978f94d.jpg",
    url: "/blog/raznitsa-mikrozajm-kredit-karta",
    slug: "raznitsa-mikrozajm-kredit-karta"
  },
  {
    id: 1,
    title: "Что такое микрозаймы и как они работают",
    description: "Что такое микрозаймы простыми словами: как работают займы онлайн, условия получения микрозайма на карту, процесс оформления, плюсы и минусы.",
    date: "15 марта 2024",
    readTime: "10 мин",
    category: "Советы",
    image: "/img/b12b359a-2234-487b-a7ec-1a54f978f94d.jpg",
    url: "/blog/chto-takoe-mikrozajmy",
    slug: "chto-takoe-mikrozajmy"
  }
];