import Header from "@/components/Header";
import Hero from "@/components/Hero";
// import StatStrip from "@/components/StatStrip"; // temporarily hidden
import ProductShowcase from "@/components/ProductShowcase";
import BrandStory from "@/components/BrandStory";
import DecorPattern from "@/components/DecorPattern";
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
      <div className="hero-story-wrap">
        <DecorPattern />
        <Hero />
        {/* <StatStrip /> temporarily hidden */}
        <BrandStory />
      </div>
      <XuaNay />
      <ProductShowcase />
      <HowToPlay />
      <Benefits />
      <div className="faq-pricing-wrap">
        <DecorPattern />
        <Faq />
        <Pricing />
      </div>
      <Footer />
      <StickyBar />
    </div>
  );
}
