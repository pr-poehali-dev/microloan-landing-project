import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { blogPosts, BlogPost } from "@/data/blogPosts";

interface RelatedPostsProps {
  currentPostId: number;
  maxPosts?: number;
}

const RelatedPosts = ({ currentPostId, maxPosts = 3 }: RelatedPostsProps) => {
  const relatedPosts = blogPosts
    .filter((post) => post.id !== currentPostId && post.url)
    .slice(0, maxPosts);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <div className="mt-16 pt-12 border-t border-border">
      <h2 className="text-3xl font-bold mb-8 text-center">Похожие статьи</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {relatedPosts.map((post: BlogPost) => (
          <Link key={post.id} to={post.url!} className="group">
            <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                {post.image ? (
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name="FileText" size={48} className="text-primary/30" />
                  </div>
                )}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-2 text-sm">
                  {post.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={12} />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1 text-primary group-hover:translate-x-1 transition-transform">
                    <span className="font-medium">Читать</span>
                    <Icon name="ArrowRight" size={12} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
