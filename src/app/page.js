import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PracticeGallery from "@/components/PracticeGallery";
import AboutSection from "@/components/AboutSection";
import ServicesOverview from "@/components/ServicesOverview";
import Location from "@/components/Location";
import ContactFooter from "@/components/ContactFooter";

export const metadata = {
  title: "Soul Nectar | Psychotherapie, Heilpraktik & Yoga in Aichach",
  description: "Psychotherapie, Heilpraktikerin & Yoga in Aichach. Nicole-Marina Hötzel begleitet dich ganzheitlich auf deinem Weg zu innerer Balance und Heilung.",
  alternates: {
    canonical: "https://www.soulnectar.de",
  },
  openGraph: {
    title: "Soul Nectar | Psychotherapie, Heilpraktik & Yoga in Aichach",
    description: "Psychotherapie, Heilpraktikerin & Yoga in Aichach. Nicole-Marina Hötzel begleitet dich ganzheitlich auf deinem Weg zu innerer Balance und Heilung.",
    url: "https://www.soulnectar.de",
    siteName: "Soul Nectar",
    type: "website",
    images: [{
      url: "https://www.soulnectar.de/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Nicole-Marina Hötzel — Soul Nectar Psychotherapie und Yoga in Aichach"
    }]
  }
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <PracticeGallery />
        <AboutSection />
        <ServicesOverview />
        <Location />
      </main>
      <ContactFooter />
    </>
  );
}
