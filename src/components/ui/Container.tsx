import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  /**
   * Размеры контейнера:
   * - 'default': max-w-7xl (1280px) — Стандарт для карточек, каталогов и Hero
   * - 'narrow': max-w-4xl (896px) — Для статей, форм, FAQ и легкого текста
   * - 'wide': max-w-[1400px] — Для широких дашбордов и промо-секции
   */
  size?: 'default' | 'narrow' | 'wide';
  className?: string; // Дополнительные кастомные классы (например, py-10)
}

export function Container({
  children,
  size = 'default',
  className = '',
}: ContainerProps) {
  // Словарь размеров
  const sizeClasses = {
    default: 'max-w-[1440px]',
    narrow: 'max-w-4xl',
    wide: 'max-w-[1400px]',
  };

  return (
    <div
      className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`}
    >
      {children}
    </div>
  );
}