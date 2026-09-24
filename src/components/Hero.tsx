'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container'; // Подключаем Container
import { Stats } from './Stats';
import { Sparkles } from "lucide-react";

export function Hero() {
  const [query, setQuery] = useState('');

  return (
    /* Убрали px-4, чтобы видео прилипало ровно к краям экрана */
    <section className="relative flex min-h-[650px] w-full items-center justify-center overflow-hidden bg-slate-900 text-white py-20 mb-10">
      
      {/* 1. ФОНОВОЕ ВИДЕО (Исправлен класс: inset-0) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full  object-cover pointer-events-none"
      >
        <source src="/videos/hero-bg.webm" type="video/webm" />
      </video>

      {/* 2. ТЕМНЫЙ ОВЕРЛЕЙ */}
      <div className="absolute inset-0 w-full bg-black/50 pointer-events-none" />

      {/* 3. КОНТЕНТ ВНУТРИ CONTAINER */}
      <Container className="relative z-10 flex flex-col items-center text-center">
        <div className="max-w-4xl w-full">
          <div className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-200 backdrop-blur-md">
            Экспертная недвижимость Таджикистана
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Найдите свой идеальный <br className="hidden sm:inline" /> дом в Душанбе
          </h1>

          <p className="mt-4 text-base text-slate-200 sm:text-lg">
            Умный поиск недвижимости нового поколения
          </p>

          {/* AI Поисковая строка */}
          <form className="mt-8 flex w-full items-center justify-between rounded-full bg-white/95 p-2 shadow-2xl backdrop-blur-md transition-all focus-within:bg-white sm:p-4">
            <div className="flex items-center gap-3 pl-4 flex-1">
              <span className="text-xl text-indigo-600">✨</span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Опишите квартиру мечты (например: Снять 2-комнатную на проспекте Рудаки)..."
                className="w-full bg-transparent text-slate-900 placeholder-slate-500 outline-none text-sm md:text-base"
              />
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 rounded-full bg-[#0F172A] px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800 active:scale-95 shrink-0"
            >
<Sparkles className="h-4 w-4 text-indigo-500" />              <span>Спросить ИИ</span>
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}