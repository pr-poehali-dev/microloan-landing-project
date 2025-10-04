import { useEffect, useRef, useState } from 'react';

const API_URL = 'https://functions.poehali.dev/dd92c34f-8fd5-4ddd-bcd3-75817a33fca0';

export function useReadCompletion(postSlug: string) {
  const [hasTracked, setHasTracked] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const endMarkerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (hasTracked) return;

    const trackCompletion = async () => {
      try {
        await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ postSlug }),
        });
        setHasTracked(true);
      } catch (error) {
        console.error('Failed to track read completion:', error);
      }
    };

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked) {
            trackCompletion();
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px',
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [postSlug, hasTracked]);

  const setEndMarker = (element: HTMLDivElement | null) => {
    endMarkerRef.current = element;
    if (element && observerRef.current) {
      observerRef.current.observe(element);
    }
  };

  return { setEndMarker };
}