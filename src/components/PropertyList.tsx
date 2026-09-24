// src/components/PropertyList.tsx
'use client';

import { PropertyCard } from "@/components/PropertyCard";
import { Property } from "@/types/property";

// Свайпер и модули
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface PropertyListProps {
  initialProperties: Property[];
}

export function PropertyList({ initialProperties }: PropertyListProps) {
  const properties = Array.isArray(initialProperties) ? initialProperties : [];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
          Каталог недвижимости ({properties.length})
        </h2>

        {properties.length > 0 ? (
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation
            breakpoints={{
              640: { slidesPerView: 2 }, // на планшетах 2 карточки
              1024: { slidesPerView: 3 }, // на десктопе 3 карточки
            }}
            // Добавили принудительное выравнивание высоты слайдов в ряд
            className="pb-12 [&_.swiper-wrapper]:items-stretch"
          >
            {properties.map((property, index) => (
              <SwiperSlide key={property.id} className="!h-auto flex justify-center pb-6">
                <PropertyCard property={property} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center text-gray-500 mt-10">
            Список недвижимости пуст или данные еще не загружены на Mokky.dev.
          </p>
        )}
      </div>
    </section>
  );
}