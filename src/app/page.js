import Navbar               from "@/components/layout/Navbar";
import Footer               from "@/components/layout/Footer";
import HeroSection          from "@/components/sections/HeroSection";
import ServicesSection      from "@/components/sections/ServicesSection";
import ProductsSection      from "@/components/sections/ProductsSection";
import TestimonialsSection  from "@/components/sections/TestimonialsSection";
import WhyUsSection         from "@/components/sections/WhyUsSection";
import ContactSection       from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProductsSection />
        <TestimonialsSection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
