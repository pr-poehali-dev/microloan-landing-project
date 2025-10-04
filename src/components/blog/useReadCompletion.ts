import { useEffect, useRef, useState } from 'react';

const API_URL = 'https://d5ddt1mlaro0ln76gr6p.apigw.yandexcloud.net/read-completion';

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
