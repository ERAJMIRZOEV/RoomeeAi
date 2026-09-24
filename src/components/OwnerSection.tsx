import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { Zap, Users, MessageCircle } from "lucide-react";
export function OwnerSection() {
  const benefits = [
    {
      icon: Zap,
      title: "Быстрое размещение",
      description: "Заполните базовые параметры, укажите цену и прикрепите фото со смартфона.",
    },
    {
      icon: Users,
      title: "Прямой охват",
      description: "Ваш объект увидят тысячи людей, ежедневно ищущих жильё в Душанбе.",
    },
    {
      icon: MessageCircle,
      title: "Связь без посредников",
      description: "Покупатели и арендаторы пишут вам напрямую в WhatsApp или звонят по номеру.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Левая колонка: Изображение с плавающей карточкой */}
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="relative aspect-[4/3] sm:aspect-square w-full overflow-hidden rounded-[36px] bg-muted shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&auto=format&fit=crop&q=80"
                alt="Интерьер квартиры в Душанбе"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              {/* Плавающий бейдж слева внизу */}
              <div className="absolute bottom-6 left-6 z-10 flex items-center gap-3 rounded-2xl bg-white/95 p-3.5 shadow-lg backdrop-blur-md transition-transform hover:scale-105 sm:bottom-8 sm:left-8">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-lg">
                  0%
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-slate-900">Без комиссии</span>
                    <span className="text-xs text-amber-500 font-semibold">★ Топ</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Бесплатное размещение</p>
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка: Текстовый контент и преимущества */}
          <div className="flex flex-col items-start">
            {/* Надзаголовок */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <span className="h-[2px] w-5 bg-slate-900" />
              ДЛЯ СОБСТВЕННИКОВ
            </div>

            {/* Главный заголовок */}
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[40px] lg:leading-[1.15]">
              Сдайте или продайте недвижимость в Душанбе
            </h2>

            {/* Описание */}
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Мы помогаем владельцам быстро находить проверенных жильцов и покупателей без переплат агентствам и долгих ожиданий.
            </p>

            {/* Список преимуществ */}
            <div className="mt-8 flex flex-col gap-6 w-full">
              {benefits.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-800">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-sm text-muted-foreground leading-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Кнопка действия */}
            <Button
              asChild
              size="lg"
              className="mt-10 rounded-xl bg-slate-950 px-8 py-6 text-sm font-medium text-white transition-all hover:bg-slate-900 hover:shadow-md"
            >
              <Link href="/add-property">
                Подать объявление
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}