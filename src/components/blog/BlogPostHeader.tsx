import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface BlogPostHeaderProps {
  category: string;
  date: string;
  readTime: string;
  viewCount: number | null;
  title: string;
  imageUrl: string;
  imageAlt: string;
  breadcrumbs: {
    home: string;
    blog: string;
    current: string;
  };
}

const BlogPostHeader = ({
  category,
  date,
  readTime,
  viewCount,
  title,
  imageUrl,
  imageAlt,
  breadcrumbs
}: BlogPostHeaderProps) => {
  return (
    <>
      <nav className="mb-8" aria-label="Навигационная цепочка">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
          <li>
            <Link to="/" className="hover:text-primary transition-colors">
              {breadcrumbs.home}
            </Link>
          </li>
          <li>
            <Icon name="ChevronRight" size={16} />
          </li>
          <li>
            <Link to="/blog" className="hover:text-primary transition-colors">
              {breadcrumbs.blog}
            </Link>
          </li>
          <li>
            <Icon name="ChevronRight" size={16} />
          </li>
          <li className="text-foreground font-medium">
            {breadcrumbs.current}
          </li>
        </ol>
      </nav>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in">
        <div className="relative w-full h-64 md:h-80 bg-gradient-to-br from-orange-100 via-pink-50 to-teal-50 flex items-center justify-center">
          <img 
            src={imageUrl} 
            alt={imageAlt}
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute top-6 left-6">
            <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-primary shadow-lg">
              {category}
            </span>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground flex-wrap">
            <div className="flex items-center gap-1">
              <Icon name="Calendar" size={16} />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="Clock" size={16} />
              <span>{readTime}</span>
            </div>
            {viewCount !== null && (
              <div className="flex items-center gap-1">
                <Icon name="Eye" size={16} />
                <span>{viewCount.toLocaleString('ru-RU')} просмотров</span>
              </div>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
            {title}
          </h1>
        </div>
      </div>
    </>
  );
};

export default BlogPostHeader;