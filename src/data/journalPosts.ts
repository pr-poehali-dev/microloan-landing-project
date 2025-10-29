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
    id: 6,
    title: "Как сэкономить на микрозайме: 3 рабочих способа уменьшить переплату",
    description: "Беспроцентные займы, отказ от допуслуг и досрочное погашение — три эффективных метода снизить расходы по микрозайму. Узнайте, как сэкономить до 50% переплаты с реальными примерами расчётов.",
    date: "29 октября 2025",
    readTime: "5 мин",
    category: "Советы",
    image: "https://cdn.poehali.dev/files/935f8375-31c7-4a7b-b7dc-0ad5de0f81bf.jpg",
    url: "/journal/kak-sekonomit-na-mikrozajme",
    slug: "kak-sekonomit-na-mikrozajme"
  },
  {
    id: 5,
    title: "Штраф за просроченный паспорт РФ — сколько платить и как избежать?",
    description: "Не знаете, когда менять паспорт и чем грозит просрочка? Рассказываем, как избежать штрафа до 5000 ₽, что делать при замене и какие последствия ждут за несвоевременную подачу документов.",
    date: "28 октября 2025",
    readTime: "8 мин",
    category: "Гайды",
    image: "https://cdn.poehali.dev/files/9f39c8d0-b6e1-445d-bcd0-b598183531d0.jpg",
    url: "/journal/shtraf-za-prosrochennyj-pasport",
    slug: "shtraf-za-prosrochennyj-pasport"
  },
  {
    id: 4,
    title: "Как вступить в наследство: четыре пути, которые нельзя пропустить",
    description: "Разбираемся в механизмах наследования в России: по закону, завещанию, обязательная доля и наследственный договор. Пошаговая инструкция и важные нюансы.",
    date: "22 октября 2025",
    readTime: "9 мин",
    category: "Гайды",
    image: "https://cdn.poehali.dev/projects/e9a3fa0a-9ed6-45a2-8cf3-d090c021105f/files/08e3d478-58f5-45e6-b92c-4dfe9db6e1fe.jpg",
    url: "/journal/kak-vstupit-v-nasledstvo-2025",
    slug: "kak-vstupit-v-nasledstvo-2025"
  },
  {
    id: 3,
    title: "Три региона, три повышения: кому придётся платить больше за машину",
    description: "Оренбургская, Новосибирская области и Красноярский край готовятся к повышению транспортного налога. Разбираемся, сколько придётся доплатить автовладельцам.",
    date: "22 октября 2025",
    readTime: "6 мин",
    category: "Новости",
    image: "https://cdn.poehali.dev/files/42fef705-92d7-4075-88d7-1983eaa53552.jpg",
    url: "/journal/transportnyj-nalog-tri-regiona-2025",
    slug: "transportnyj-nalog-tri-regiona-2025"
  },
  {
    id: 2,
    title: "Ипотека от МФО: революция или маркетинговый ход?",
    description: "С 22 октября 2025 года микрофинансовые организации получают право выдавать ипотеку. Разбираемся, как это работает и стоит ли брать жилищный кредит в МФО.",
    date: "22 октября 2025",
    readTime: "7 мин",
    category: "Новости",
    image: "https://cdn.poehali.dev/files/935f8375-31c7-4a7b-b7dc-0ad5de0f81bf.jpg",
    url: "/journal/ipoteka-ot-mfo-2025",
    slug: "ipoteka-ot-mfo-2025"
  },
  {
    id: 1,
    title: "Что решит ЦБ 24 октября: как это ударит по вашим вкладам и облигациям",
    description: "Сохранит ли Центробанк ключевую ставку на 17% или снизит её? Разбираем, как решение регулятора повлияет на доходность вкладов и облигаций.",
    date: "22 октября 2025",
    readTime: "8 мин",
    category: "Аналитика",
    image: "https://cdn.poehali.dev/files/42bc6b2d-3302-47b3-b4bf-5f4e889fe11c.jpg",
    url: "/journal/reshenie-cb-24-oktyabrya-vklady-obligacii",
    slug: "reshenie-cb-24-oktyabrya-vklady-obligacii"
  }
];