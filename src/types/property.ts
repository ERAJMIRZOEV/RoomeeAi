export interface Agent {
    name: string;
    role: string;
    phone: string;
    avatar: string
}

export type DealType = 'sale' | 'rent';
export type PropertyType = 'new-building' | 'secondary';
export type RepairType = 'euro' | 'design' | 'cosmetic' | 'rough';


export interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  pricePeriod?: string; // Опционально, например " / мес"
  district: string;
  address: string;
  rooms: number;
  bedrooms: number;
  area: number;
  floor: string; // Например, "12 из 18"
  bathrooms: number;
  ceilingHeight: number;
  parking: string;
  type: PropertyType;
  repair: RepairType;
  dealType: DealType;
  images: string[]; // Массив ссылок на фото
  badges?: string[]; // Опциональные теги, например "Топ-предложение"
  features?: string[];
  amenities?: string[];
  agent: Agent;
}