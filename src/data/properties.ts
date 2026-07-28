    import { Property } from "@/types/property";

export const properties: Property[] = [
  {
    id: 1,
    title: "Элитная 3-комнатная квартира в ЖК Diamond",
    description: "Роскошная трехкомнатная квартира в самом сердце Душанбе. Просторная гостиная с панорамным остеклением, современная встроенная кухня и изолированные спальни.",
    price: 145000,
    district: "Шохмансур",
    address: "ул. Бухоро, район Шохмансур",
    rooms: 3,
    bedrooms: 3,
    area: 115,
    floor: "12 из 18",
    bathrooms: 2,
    ceilingHeight: 3.2,
    parking: "2 места",
    type: "new-building",
    repair: "euro",
    dealType: "sale",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500"
    ],
    badges: ["Топ-предложение", "Проверено ИИ"],
    features: ["Система Умный дом", "Охрана 24/7", "Подземный паркинг"],
    amenities: ["Интернет", "Кондиционер", "Телевидение", "Лифт"],
    agent: {
      name: "Алишер Рахимов",
      role: "Ведущий брокер",
      phone: "+992900000000",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
    }
  },
  {
    id: 2,
    title: "Современный пентхаус Loft в центре",
    description: "Стильный двухуровневый пентхаус с авторским дизайнерским ремонтом. Огромные окна в пол, высокие потолки и шикарный открытый вид на центр города.",
    price: 550,
    pricePeriod: " / мес",
    district: "Исмоили Сомони",
    address: "пр-т Рудаки, центр",
    rooms: 2,
    bedrooms: 2,
    area: 110,
    floor: "16 из 16",
    bathrooms: 2,
    ceilingHeight: 3.5,
    parking: "1 место",
    type: "new-building",
    repair: "design",
    dealType: "rent",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500"
    ],
    badges: ["Новинка"],
    features: ["Два уровня", "Панорамный вид", "Высокие потолки"],
    amenities: ["Интернет", "Кондиционер", "Кухня", "Посудомойка"],
    agent: {
      name: "Мадина Содикова",
      role: "Агент по аренде",
      phone: "+992911111111",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150"
    }
  },
  {
    id: 3,
    title: "Уютная 1-комнатная студия с видом",
    description: "Компактная и светлая квартира-студия в спальном районе города. Есть всё необходимое для комфортной жизни.",
    price: 380,
    pricePeriod: " / мес",
    district: "Шохмансур",
    address: "ул. Айни, Шохмансур",
    rooms: 1,
    bedrooms: 1,
    area: 45,
    floor: "4 из 9",
    bathrooms: 1,
    ceilingHeight: 2.8,
    parking: "Нет",
    type: "secondary",
    repair: "cosmetic",
    dealType: "rent",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800"
    ],
    badges: [],
    features: ["Рядом с парком", "Низкие комплатежи"],
    amenities: ["Интернет", "Стиральная машина", "Кухня"],
    agent: {
      name: "Алишер Рахимов",
      role: "Ведущий брокер",
      phone: "+992900000000",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
    }
  }
];