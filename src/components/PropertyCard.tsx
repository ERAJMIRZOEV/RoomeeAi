// src/components/PropertyCard.tsx
'use client';

import Image from "next/image";
import Link from "next/link";
import { Property } from "@/types/property";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bed, Maximize, MapPin, Building2 } from "lucide-react";

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  const isPriority = index < 3;
  
  // Безопасное получение первой картинки
  const imageSrc = property.images && property.images.length > 0 
    ? property.images[0] 
    : '/placeholder.jpg';

  return (
    <div 
      className="group relative flex h-full w-full max-w-[390px] flex-col justify-between overflow-hidden rounded-[16px] border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md animate-in fade-in slide-in-from-bottom-4"
      style={{
        animationDelay: `${Math.min(index * 50, 300)}ms`,
        animationFillMode: 'backwards'
      }}
    >
      {/* Изображение объекта */}
      <div className="relative h-[220px] w-full overflow-hidden bg-muted">
        <Image
          src={imageSrc}
          alt={property.title}
          fill
          priority={isPriority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 384px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Бейджи */}
        <div className="absolute left-3 top-3 z-10 flex flex-wrap gap-1.5 pointer-events-none">
          {property.badges?.map((badge, idx) => (
            <Badge key={idx} variant="secondary" className="bg-background/80 backdrop-blur-md">
              {badge}
            </Badge>
          ))}
        </div>

        {/* Тип сделки */}
        <Badge className="absolute right-3 top-3 z-10">
          {property.dealType === "sale" ? "Продажа" : "Аренда"}
        </Badge>
      </div>

      {/* Контент */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <div className="mb-2 flex items-baseline gap-1">
            <span className="text-2xl font-bold text-primary">
              {property.price.toLocaleString()} сом.
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

          <Link href={`/properties/${property.id}`} className="block w-full mt-4">
            <Button className="w-full rounded-xl font-medium transition-all duration-200 active:scale-[0.98]" variant="outline">
              Подробнее
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}