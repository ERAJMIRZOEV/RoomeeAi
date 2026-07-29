'use client';

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface CounterProps {
  value: number; // Число, до которого нужно досчитать (например, 1200)
  suffix?: string; // Плюс, процент или текст (например, "+")
  duration?: number; // Длительность анимации в секундах
}

export function Counter({ value, suffix = '', duration = 2.5 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  
  // Отслеживаем появление блока в видимой зоне экрана
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Motion Value от 0 до целевого значения
  const count = useMotionValue(0);

  // Плавное замедление (Spring / Ease effect)
  const springValue = useSpring(count, {
    damping: 30,  // Сопротивление (чем больше, тем плавнее финиш)
    stiffness: 80, // Жесткость пружины
    duration: duration * 1000,
  });

  useEffect(() => {
    if (isInView) {
      count.set(value);
    }
  }, [isInView, count, value]);

  useEffect(() => {
    // Подписываемся на изменение значения и форматируем вывод
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.floor(latest)}${suffix}`;
      }
    });

    return () => unsubscribe();
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}