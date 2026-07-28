import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/PropertyCard";

export default function HomePage() {
  return (
    <>
    <main className="container mx-auto px-4 py-8">
      <h1 className="ml-20 mb-6 text-3xl font-bold tracking-tight">
        Каталог недвижимости
      </h1>

      {/* Сетка с карточками */}
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property, index) => (
  <PropertyCard key={property.id} property={property} index={index} />
))}
      </div>
    </main>
    </>
  );
}