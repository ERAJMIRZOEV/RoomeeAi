// src/app/properties/[id]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPropertyById } from "@/api/properties"; // <--- Импортируем из твоего api-файла
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Bed, Maximize, MapPin, Building2, Phone, Share2, Heart } from "lucide-react";

interface PropertyPageProps {
  params: Promise<{ id: string }>;
}

export default async function PropertyDetailPage({ params }: PropertyPageProps) {
  const { id } = await params;
  const property = await getPropertyById(id);

  if (!property) {
    notFound();
  }

  const images = property.images && property.images.length > 0 
    ? property.images 
    : ['/placeholder.jpg'];

  return (
    <main className="min-h-screen bg-background pb-16 pt-8">
      <div className="container mx-auto px-4">
        {/* Кнопка назад */}
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Назад к каталогу
            </Button>
          </Link>
        </div>

        {/* Заголовок и шапка объявления */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge variant={property.dealType === "sale" ? "default" : "secondary"}>
                {property.dealType === "sale" ? "Продажа" : "Аренда"}
              </Badge>
              {property.badges?.map((badge, idx) => (
                <Badge key={idx} variant="outline">
                  {badge}
                </Badge>
              ))}
            </div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              {property.title}
            </h1>
            <div className="mt-2 flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0" />
              <span>{property.address}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" className="rounded-full">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Галерея изображений */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2 relative h-[300px] sm:h-[450px] rounded-2xl overflow-hidden bg-muted shadow-sm">
            <Image
              src={images[0]}
              alt={property.title}
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative h-[142px] sm:h-[217px] rounded-2xl overflow-hidden bg-muted shadow-sm">
              <Image
                src={images[1] || images[0]}
                alt={`${property.title} — фото 2`}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[142px] sm:h-[217px] rounded-2xl overflow-hidden bg-muted shadow-sm">
              <Image
                src={images[2] || images[0]}
                alt={`${property.title} — фото 3`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Основной контент и сайдбар с ценой */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Левая колонка (Описание и характеристики) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Быстрые характеристики */}
            <div className="grid grid-cols-3 gap-4 p-6 rounded-2xl border bg-card shadow-sm">
              <div className="flex flex-col items-center justify-center p-3 bg-muted/50 rounded-xl text-center">
                <Bed className="h-5 w-5 mb-1 text-primary" />
                <span className="text-xs text-muted-foreground">Комнат</span>
                <span className="font-semibold text-base">{property.rooms}</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 bg-muted/50 rounded-xl text-center">
                <Maximize className="h-5 w-5 mb-1 text-primary" />
                <span className="text-xs text-muted-foreground">Площадь</span>
                <span className="font-semibold text-base">{property.area} м²</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 bg-muted/50 rounded-xl text-center">
                <Building2 className="h-5 w-5 mb-1 text-primary" />
                <span className="text-xs text-muted-foreground">Этаж</span>
                <span className="font-semibold text-base">{property.floor}</span>
              </div>
            </div>

            {/* Описание */}
            <div className="p-6 rounded-2xl border bg-card shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Описание объекта</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {property.description || "Просторная и светлая недвижимость в отличном районе города. Развитая инфраструктура, удобная транспортная развязка, качественный ремонт и все условия для комфортного проживания."}
              </p>
            </div>
          </div>

          {/* Правая колонка (Цена и контакты) */}
          <div>
            <div className="sticky top-6 p-6 rounded-2xl border bg-card shadow-md space-y-6">
              <div>
                <span className="text-sm text-muted-foreground block mb-1">Стоимость объекта</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-primary">
                    {property.price.toLocaleString()} сом.
                  </span>
                  {property.pricePeriod && (
                    <span className="text-sm text-muted-foreground">{property.pricePeriod}</span>
                  )}
                </div>
              </div>

              <hr />

              <div className="space-y-3">
                <Button className="w-full h-12 text-base rounded-xl gap-2 shadow-sm">
                  <Phone className="h-4 w-4" />
                  Показать телефон
                </Button>
                <Button variant="outline" className="w-full h-12 text-base rounded-xl">
                  Написать собственнику
                </Button>
              </div>

              <div className="p-4 rounded-xl bg-muted/50 text-xs text-muted-foreground text-center">
                ID объявления: #{property.id} • На платформе Roomee.tj
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}