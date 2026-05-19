import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PracticeGallery from "@/components/PracticeGallery";
import AboutSection from "@/components/AboutSection";
import ServicesOverview from "@/components/ServicesOverview";
import Location from "@/components/Location";
import ContactFooter from "@/components/ContactFooter";

export const metadata = {
  title: "Soul Nectar | Heilpraktikerin für Psychotherapie & Yoga Aichach",
  description: "Nicole-Marina Hötzel — Heilpraktikerin für Psychotherapie, Traumatherapie und Yoga in Aichach.",
  alternates: { canonical: "https://www.soulnectar.de/2" }
};

export default function HomeVariant2() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection 
          heroImage="/founder.png" 
          heroImageMode="img"
          heroImagePosition="center 15%" 
          gradientStart="5%" 
          gradientEnd="30%" 
        />
        <PracticeGallery />
        <AboutSection />
        <ServicesOverview />
        <Location />
      </main>
      <ContactFooter />
    </>
  );
}
