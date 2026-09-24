'use client';

import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export function Counter({ value, suffix = '', duration = 1600 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isStarted = useRef(false);

  useEffect(() => {
    // Функция запуска плавного счета
    const runAnimation = () => {
      if (isStarted.current) return;
      isStarted.current = true;

      const startTime = performance.now();

      const updateCounter = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Плавное торможение в конце (ease-out cubic)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.floor(easeOut * value);

        setCount(currentVal);

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          setCount(value);
        }
      };

      requestAnimationFrame(updateCounter);
    };

    // 1. Пытаемся отследить появление стандартным IntersectionObserver
    let observer: IntersectionObserver | null = null;
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window && ref.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            runAnimation();
            observer?.disconnect();
          }
        },
        { threshold: 0.01 }
      );
      observer.observe(ref.current);
    }

    // 2. ЖЕСТКИЙ ФОЛЛБЕК ДЛЯ ТЕЛЕФОНОВ:
    // Если через 400мс обзервер не сработал (баг мобилки при absolute/translate),
    // счетчик стартует автоматически. На 0+ он больше не зависнет никогда.
    const fallbackTimer = setTimeout(() => {
      runAnimation();
    }, 400);

    return () => {
      observer?.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}