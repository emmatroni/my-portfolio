import { useState, useEffect, useRef } from "react";

interface UseFadeInOptions {
  threshold?: number;
  delay?: number;
}

export default function useFadeIn({
  threshold = 0.1,
  delay = 600,
}: UseFadeInOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Small delay so elements start hidden, then observer kicks in
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(el);
          }
        },
        { threshold },
      );
      observer.observe(el);
      return () => observer.disconnect();
    }, delay);

    return () => clearTimeout(timer);
  }, [threshold, delay]);

  return { ref, visible };
}
