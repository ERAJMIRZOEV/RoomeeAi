'use client';

import { Container } from '@/components/ui/Container';
import { Home, Building, Building2, Layers } from 'lucide-react';

const categories = [
  { id: 1, title: '1-комнатные', count: '320+ объектов', icon: Home },
  { id: 2, title: '2-комнатные', count: '280+ объектов', icon: Building },
  { id: 3, title: '3-комнатные', count: '150+ объектов', icon: Building2 },
  { id: 4, title: '4+ комнаты', count: '90+ объектов', icon: Layers },
];

export function Categories() {
  return (
    /* Внешний родитель: Темный фон (#0F172A = bg-slate-900) во всю ширину экрана */
    <section className="w-full bg-[#0F172A] py-16 md:py-24 text-white">
      
      {/* Наш переиспользуемый Container для отступов с краев */}
      <Container>
        
        {/* Заголовок */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Недвижимость по категориям
          </h2>
          <p className="mt-3 text-sm text-slate-400 md:text-base">
            Исследуйте рынок по сегментам, которые важны именно вам
          </p>
        </div>

        {/* Сетка карточек (Вместо абсолютных позиций из Figma) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                /* 
                   Стили карточки ровно из твоей Figma:
                   - bg-white/5 (#FFFFFF0D)
                   - border-white/10 (#FFFFFF1A)
                   - rounded-[32px] (border-radius: 32px)
                */
                className="group flex flex-col items-center justify-center rounded-[32px] border border-white/10 bg-white/5 p-8 text-center transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 cursor-pointer"
              >
                {/* Иконка */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white transition-colors group-hover:bg-indigo-600">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Название */}
                <h3 className="text-lg font-bold text-white">
                  {item.title}
                </h3>

                {/* Кол-во */}
                <span className="mt-1 text-xs font-medium text-slate-400">
                  {item.count}
                </span>
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}