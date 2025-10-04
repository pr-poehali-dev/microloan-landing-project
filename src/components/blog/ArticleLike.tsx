import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ArticleLikeProps {
  postSlug: string;
}

const ArticleLike = ({ postSlug }: ArticleLikeProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const hasLiked = localStorage.getItem(`liked_${postSlug}`) === 'true';
    setLiked(hasLiked);
    
    fetchLikeCount();
  }, [postSlug]);

  const fetchLikeCount = async () => {
    try {
      const response = await fetch(`https://functions.poehali.dev/d23c653d-0229-4d5c-89fc-42c4195e0442?type=likes&post_slug=${postSlug}`);
      const data = await response.json();
      if (data.likes !== undefined) {
        setLikeCount(data.likes);
      }
    } catch (error) {
      console.error('Failed to fetch like count:', error);
    }
  };

  const handleLike = async () => {
    if (liked || isLoading) return;
    
    setIsLoading(true);
    
    try {
      const response = await fetch('https://functions.poehali.dev/d23c653d-0229-4d5c-89fc-42c4195e0442', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'like',
          post_slug: postSlug
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        setLiked(true);
        setLikeCount(data.like_count || likeCount + 1);
        localStorage.setItem(`liked_${postSlug}`, 'true');
      }
    } catch (error) {
      console.error('Failed to submit like:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="my-12 py-8 px-6 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl border border-primary/10">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-3 text-foreground">
          {liked ? "Спасибо за вашу оценку! 💙" : "Статья была полезной?"}
        </h3>
        <p className="text-muted-foreground mb-6">
          {liked 
            ? "Ваш отзыв помогает нам создавать больше качественного контента"
            : "Поставьте лайк, если информация помогла вам разобраться в теме"
          }
        </p>
        
        <Button
          onClick={handleLike}
          disabled={liked || isLoading}
          size="lg"
          className={`gap-3 text-lg px-8 py-6 transition-all ${
            liked 
              ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-500 hover:to-emerald-500 cursor-default" 
              : "bg-gradient-to-r from-primary to-secondary hover:scale-105 hover:shadow-xl"
          }`}
        >
          <Icon 
            name={liked ? "Heart" : "ThumbsUp"} 
            size={24}
            className={liked ? "fill-white" : ""}
          />
          {liked ? `Вам понравилась статья (${likeCount})` : `Да, полезная статья${likeCount > 0 ? ` (${likeCount})` : ''}`}
        </Button>
        
        {!liked && (
          <p className="text-xs text-muted-foreground mt-4">
            Можно поставить один лайк
          </p>
        )}
      </div>
    </div>
  );
};

export default ArticleLike;