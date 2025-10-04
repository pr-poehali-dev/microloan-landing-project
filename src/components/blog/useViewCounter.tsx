import { useEffect, useState } from 'react';

export const useViewCounter = (postSlug: string) => {
  const [viewCount, setViewCount] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const incrementView = async () => {
      try {
        const response = await fetch(`https://functions.poehali.dev/d23c653d-0229-4d5c-89fc-42c4195e0442?post_slug=${postSlug}`, {
          method: 'POST'
        });
        const data = await response.json();
        if (data.success) {
          setViewCount(data.view_count);
        }
      } catch (error) {
        console.error('Failed to increment view:', error);
      }
    };
    
    incrementView();
  }, [postSlug]);

  return viewCount;
};
