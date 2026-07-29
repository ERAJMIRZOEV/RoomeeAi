import React from 'react';
import { Container } from '@/components/ui/Container'; // 1. Импортируем Container

// Моковые данные отзывов
const reviews = [
  {
    id: 1,
    rating: 5,
    text: "Очень удобный сервис! Нашел отличную квартиру в центре за пару дней. Все документы проверены.",
    author: "Алишер С.",
    role: "Покупатель",
  },
  {
    id: 2,
    rating: 5,
    text: "Roomee.tj помог найти уютную студию. Понравилось, что можно связаться с владельцем напрямую.",
    author: "Мадина Т.",
    role: "Арендатор",
  },
  {
    id: 3,
    rating: 5,
    text: "Профессиональная платформа. Актуальная аналитика помогает принимать правильные решения по инвестициям.",
    author: "Рустам Х.",
    role: "Инвестор",
  },
];

export function Testimonials() {
  return (
    // 1. Внешний блок держит задний фон на 100% ширины
    <section className="w-full bg-[#F8FAFC] py-16 md:py-20">
      
      {/* 2. Container ОБОРАЧИВАЕТ весь контент секции и аккуратно его закрывает */}
      <Container>
        {/* Заголовок блока */}
        <h2 className="mb-10 text-center text-2xl font-bold text-slate-900 md:text-3xl">
          Отзывы наших клиентов
        </h2>

        {/* Сетка карточек отзывов */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-100 transition-shadow hover:shadow-md"
            >
              <div>
                {/* Звездочки рейтинга */}
                <div className="mb-4 flex items-center gap-1 text-amber-400">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>

                {/* Текст отзыва */}
                <p className="text-sm italic text-slate-600">
                  "{review.text}"
                </p>
              </div>

              {/* Автор и роль */}
              <div className="mt-6 border-t border-slate-100 pt-4">
                <p className="font-semibold text-slate-900 text-sm">
                  {review.author}
                </p>
                <p className="text-xs text-slate-400">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
      
    </section>
  );
}