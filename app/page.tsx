import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TickerSection from "@/components/TickerSection";
import ServicesSection from "@/components/ServicesSection";
import CommitmentsSection from "@/components/CommitmentsSection";
import FounderNote from "@/components/FounderNote";
import TalentsSection from "@/components/TalentsSection";
import BrandsSection from "@/components/BrandsSection";
import ApplySection from "@/components/ApplySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "64px" }}>
        <HeroSection />
        <TickerSection />
        <ServicesSection />
        <CommitmentsSection />
        <FounderNote />
        <TalentsSection />
        <BrandsSection />
        <ApplySection />
      </main>
      <Footer />
    </>
  );
}
