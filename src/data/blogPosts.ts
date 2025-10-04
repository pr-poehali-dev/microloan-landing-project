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
    id: 3,
    title: "Как выбрать надёжную МФО: проверенная инструкция",
    description: "Пошаговая инструкция как выбрать надёжную МФО и проверить микрофинансовую организацию. Избегайте мошенников - проверяйте МФО в реестре ЦБ РФ.",
    date: "4 октября 2024",
    readTime: "12 мин",
    category: "Безопасность",
    image: "/img/670e08ee-8e93-4dc6-bd7b-47c842ffc93e.jpg",
    url: "/blog/kak-vybrat-nadezhnuyu-mfo",
    slug: "kak-vybrat-nadezhnuyu-mfo"
  },
  {
    id: 2,
    title: "В чём разница между микрозаймом, потребкредитом и кредитной картой",
    description: "Сравнение микрозайма, потребительского кредита и кредитной карты: условия, процентные ставки, сроки. Когда выбирать каждый финансовый инструмент.",
    date: "4 октября 2025",
    readTime: "12 мин",
    category: "Советы",
    image: "/img/421ccd30-dc7e-46c0-a5d1-9beed22a4725.jpg",
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