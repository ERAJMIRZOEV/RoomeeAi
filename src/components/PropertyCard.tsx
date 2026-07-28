'use client'; // 1. Обязательно для интерактивных анимаций

import Image from "next/image";
import { Property } from "@/types/property";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bed, Maximize, MapPin, Building2 } from "lucide-react";
import { motion } from "framer-motion"; // 2. Импортируем motion

interface PropertyCardProps {
  property: Property;
  index?: number; // Опциональный индекс для задержки анимации в сетке
}

export function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  return (
    // 3. Заменили <div> на <motion.div>
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Начальное состояние: невидимый и опущен на 20px
      animate={{ opacity: 1, y: 2 }}   // При загрузке: появляется и встает на место
      transition={{ 
        duration: 1, 
        delay: index * 0.1, // Карточки будут появляться с легким каскадным эффектом друг за другом
        ease: "easeOut"     
      }}
      whileHover={{ y: -6 }} // При наведении карточка слегка приподнимается
      whileTap={{ scale: 0.98 }} // При клике карточка слегка сжимается (эффект физической кнопки)
      className="group relative flex min-h-[521px] w-full max-w-[390px] flex-col justify-between overflow-hidden rounded-[16px] border bg-white shadow-sm transition-shadow hover:shadow-md cursor-pointer"
    >
      {/* Изображение и Бейджи */}
      <div className="relative h-[220px] w-full overflow-hidden bg-muted">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Бейджи */}
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {property.badges.map((badge, idx) => (
            <Badge key={idx} variant="secondary" className="bg-background/80 backdrop-blur-md">
              {badge}
            </Badge>
          ))}
        </div>

        {/* Тип сделки */}
        <Badge className="absolute right-3 top-3">
          {property.dealType === "sale" ? "Продажа" : "Аренда"}
        </Badge>
      </div>

      {/* Контент */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <div className="mb-2 flex items-baseline gap-1">
            <span className="text-2xl font-bold text-primary">
              ${property.price.toLocaleString()}
            </span>
            {property.pricePeriod && (
              <span className="text-sm text-muted-foreground">{property.pricePeriod}</span>
            )}
          </div>

          <h3 className="line-clamp-2 text-lg font-semibold tracking-tight">
            {property.title}
          </h3>

          <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />
            <span className="line-clamp-1">{property.address}</span>
          </div>
        </div>

        <div>
          <div className="mt-4 flex items-center justify-between border-t pt-4 text-xs font-medium text-muted-foreground">
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4" />
              <span>{property.rooms} комн.</span>
            </div>
            <div className="flex items-center gap-1">
              <Maximize className="h-4 w-4" />
              <span>{property.area} м²</span>
            </div>
            <div className="flex items-center gap-1">
              <Building2 className="h-4 w-4" />
              <span>{property.floor} эт.</span>
            </div>
          </div>

          <Button className="mt-4 w-full" variant="outline">
            Подробнее
          </Button>
        </div>
      </div>
    </motion.div>
  );
}