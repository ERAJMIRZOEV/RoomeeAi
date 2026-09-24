import { PropertyCard } from "@/components/PropertyCard";
import { Newsletter } from "@/components/Newsletter";
import { Testimonials } from "@/components/Testimonials";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Container } from "@/components/ui/Container";
import { Categories } from "@/components/Categories";
import { OwnerSection } from "@/components/OwnerSection";
import { PropertyList } from "@/components/PropertyList";
import { getProperties } from "@/api/properties";

export default async function HomePage() {

  const properties = await getProperties()

  return (
    <>
      <Hero />
      <Stats />

     <PropertyList initialProperties={properties}/>

      <Categories />
      <OwnerSection/>
      <Testimonials />
      <Newsletter />
    </>
  );
}