'use client';

import { Counter } from './Counter';
import { Container } from './ui/Container';

export function Stats() {
  const stats = [
    { number: 1200, suffix: '+', label: 'ОБЪЕКТОВ' },
    { number: 450, suffix: '+', label: 'ПРОДАНО 2023' },
    { number: 15, suffix: '+', label: 'ЛЕТ ОПЫТА' },
    { number: 100, suffix: '%', label: 'ПОДДЕРЖКА' },
  ];

  return (
    <Container>
      {/* 
        ПК: широкая длина (w-[92%] max-w-7xl), скругление rounded-[2.5rem], пышные отступы md:px-12 md:py-7.
        Смартфон: все 4 колонки в одну линию (grid-cols-4), аккуратные отступы px-2 py-4, без перелома на 2 строки.
      */}
      <div className="absolute top-149 left-1/2 z-20 w-[94%] max-w-7xl -translate-x-1/2 transform rounded-2xl md:rounded-[2.5rem] bg-white px-2 py-4 sm:px-4 sm:py-5 md:px-12 md:py-7 shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-slate-100">
        
        {/* 4 колонки строго в одну линию и на мобилке, и на ПК */}
        <div className="grid grid-cols-4 divide-x divide-slate-100 text-center items-center">
          {stats.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center px-1 sm:px-2 md:px-4"
            >
              {/* Цифры: компактные на телефоне (text-base / sm:text-lg), крупные на ПК (md:text-3xl / lg:text-4xl) */}
              <span className="text-base font-black tracking-tight text-slate-900 sm:text-lg md:text-3xl lg:text-4xl">
                <Counter value={item.number} suffix={item.suffix} />
              </span>

              {/* Подписи: микро-шрифт на мобилке, чтобы не переносились слова */}
              <span className="mt-1 text-[8px] font-bold tracking-wider text-slate-400 uppercase sm:text-[10px] md:text-xs">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </Container>
  );
}