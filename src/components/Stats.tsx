'use client';

import { Counter } from './Counter';
import { Container } from './ui/Container';

export function Stats() {
  const stats = [
    { number: 1200, suffix: '+', label: 'ПРОВЕРЕННЫХ ОБЪЕКТОВ' },
    { number: 450, suffix: '+', label: 'УСПЕШНЫХ СДЕЛОК' },
    { number: 15, suffix: '+', label: 'ЛЕТ НА РЫНКЕ' },
    { number: 100, suffix: '%', label: 'БЕЗОПАСНОСТЬ' },
  ];

  return (
        <Container>
    <div className="absolute top-145 left-1/2 z-20 w-[92%]  -translate-x-1/2 transform rounded-[2.5rem] bg-white px-6 py-6 md:px-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-100">
      <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4 md:gap-8">
        {stats.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center relative [&:not(:last-child)]:md:after:content-[''] [&:not(:last-child)]:md:after:absolute [&:not(:last-child)]:md:after:right-0 [&:not(:last-child)]:md:after:h-10 [&:not(:last-child)]:md:after:w-[1px] [&:not(:last-child)]:md:after:bg-slate-200"
          >
            <span className="text-xl font-black text-slate-900 md:text-4xl lg:text-4xl tracking-tight">
              {/* Крутящийся и плавно останавливающийся счетчик */}
              <Counter value={item.number} suffix={item.suffix} />
            </span>
            <span className="mt-2 text-[10px] font-bold tracking-widest text-slate-400 uppercase md:text-xs">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
      </Container>
  );
}