import Header from "@/components/Header";
import Hero from "@/components/Hero";
// import StatStrip from "@/components/StatStrip"; // temporarily hidden
import ProductShowcase from "@/components/ProductShowcase";
import Benefits from "@/components/Benefits";
import Specs from "@/components/Specs";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";

export default function Home() {
  return (
    <div className="page">
      <Header />
      <Hero />
      {/* <StatStrip /> temporarily hidden */}
      <ProductShowcase />
      <Benefits />
      <Specs />
      <Pricing />
      <Testimonials />
      <Faq />
      <CtaBand />
      <Footer />
      <StickyBar />
    </div>
  );
}
