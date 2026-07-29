'use client';

import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    // Обертка секции с отступом my-16 (top/bottom) и px-6 (right/left) для адаптивности
    <section className="w-full my-16 px-6 md:px-12">
      {/* 
        Сам темный блок:
        mx-auto: центрирование
        max-w-[1280px]: ограничиваем ширину как в макете
        gap-12: добавляет отступ между текстом и формой
      */}
      <div className="mx-auto flex w-full max-w-[100%] flex-col items-center justify-between gap-12 rounded-[48px] bg-[#0F172A] p-10 md:p-16 lg:flex-row">
        
        {/* Заголовок и описание: max-w-2xl ограничивает ширину текста */}
        <div className="w-full max-w-2xl text-left text-white">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl md:leading-tight">
            Будьте в курсе лучших предложений
          </h2>
          <p className="mt-4 text-base text-slate-400 md:text-lg">
            Подпишитесь на нашу рассылку, чтобы первыми получать уведомления о новых объектах и эксклюзивных скидках.
          </p>
        </div>

        {/* Форма подписки */}
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4 sm:flex-row lg:w-auto lg:shrink-0">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ваш e-mail"
            required
            // Скруглили углы для input (rounded-2xl) и добавили focus
            className="w-full min-w-[320px] rounded-2xl bg-[#1E293B] px-6 py-4 text-base text-white placeholder-slate-400 outline-none transition focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            // Кнопка тоже скруглена (rounded-2xl)
            className="whitespace-nowrap rounded-2xl bg-white px-8 py-4 text-base font-semibold text-[#0F172A] transition hover:bg-slate-100 active:scale-95"
          >
            Подписаться
          </button>
        </form>

      </div>
    </section>
  );
}