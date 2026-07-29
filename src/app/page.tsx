import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/PropertyCard";
import { Newsletter } from "@/components/Newsletter";
import { Testimonials } from "@/components/Testimonials";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Container } from "@/components/ui/Container";
import { Categories } from "@/components/Categories";

export default function HomePage() {
  return (
    <>
    
      <Hero/>
      <Stats/>
      <h1 className="p-20 pb-10 pl-0 ml-20 mb-6 text-3xl font-bold tracking-tight">
        Каталог недвижимости
      </h1>

      {/* Сетка с карточками */}
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property, index) => (
  <PropertyCard key={property.id} property={property} index={index} />
))}
      </div>
      <Categories/>
      <Testimonials/>
    <Newsletter/>
    
    </>
  );
}