# Как обновить карту сайта (sitemap.xml)

## Автоматическое добавление статей в sitemap

Все статьи блога автоматически попадают в `public/sitemap.xml` из файла `src/data/blogPosts.ts`.

### Шаги для добавления новой статьи:

1. **Добавьте статью в `src/data/blogPosts.ts`:**

```typescript
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Что такое микрозаймы и как они работают",
    description: "...",
    date: "15 марта 2024",
    readTime: "10 мин",
    category: "Советы",
    image: "/img/image.jpg",
    url: "/blog/chto-takoe-mikrozajmy",  // ← Обязательно указать url
    slug: "chto-takoe-mikrozajmy"         // ← Обязательно указать slug
  },
  // Добавьте новую статью здесь:
  {
    id: 2,
    title: "Новая статья",
    description: "Описание",
    date: "20 марта 2024",
    readTime: "5 мин",
    category: "Новости",
    image: "/img/new.jpg",
    url: "/blog/novaya-statya",   // ← URL статьи
    slug: "novaya-statya"          // ← Slug для счетчика просмотров
  }
];
```

2. **Обновите sitemap.xml вручную:**

Откройте `public/sitemap.xml` и добавьте новый URL:

```xml
<url>
  <loc>https://mikrofinru.ru/blog/novaya-statya</loc>
  <lastmod>2025-10-04</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

3. **Готово!** После деплоя новая статья будет:
   - Отображаться в списке блога
   - Иметь счетчик просмотров
   - Быть в карте сайта для поисковиков

## Структура sitemap.xml

```
Главная (/)              - priority 1.0, обновляется daily
Блог (/blog)             - priority 0.8, обновляется weekly  
Статьи (/blog/slug)      - priority 0.7, обновляется monthly
```

## Важно

- Всегда указывайте `url` и `slug` для новых статей
- `slug` используется для счетчика просмотров в базе данных
- После добавления статьи не забудьте обновить sitemap.xml
- Дата `lastmod` должна быть в формате YYYY-MM-DD
