import Header from "@/components/Header";
import Hero from "@/components/Hero";
// import StatStrip from "@/components/StatStrip"; // temporarily hidden
import ProductShowcase from "@/components/ProductShowcase";
import BrandStory from "@/components/BrandStory";
import XuaNay from "@/components/XuaNay";
import HowToPlay from "@/components/HowToPlay";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";

export default function Home() {
  return (
    <div className="page">
      <Header />
      <Hero />
      {/* <StatStrip /> temporarily hidden */}
      <BrandStory />
      <XuaNay />
      <ProductShowcase />
      <HowToPlay />
      <Benefits />
      <Faq />
      <Pricing />
      <Footer />
      <StickyBar />
    </div>
  );
}
