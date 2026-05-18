import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import HeilpraktikerinContent from "./HeilpraktikerinContent";

export const metadata = {
  title: "Heilpraktikerin Aichach | Ganzheitliche Begleitung",
  description: "Individuelle, achtsame und professionelle Unterstützung. Als Heilpraktikerin in Aichach begleite ich dich mit einem integrativen Ansatz.",
  alternates: {
    canonical: "https://www.soulnectar.de/heilpraktikerin-aichach",
  },
  openGraph: {
    title: "Heilpraktikerin Aichach | Ganzheitliche Begleitung",
    description: "Individuelle, achtsame und professionelle Unterstützung. Als Heilpraktikerin in Aichach begleite ich dich mit einem integrativen Ansatz.",
    url: "https://www.soulnectar.de/heilpraktikerin-aichach",
    siteName: "Soul Nectar",
    type: "website",
    images: [{
      url: "https://www.soulnectar.de/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Heilpraktikerin für Psychotherapie in Aichach — Soul Nectar Praxis"
    }]
  }
};

export default function HeilpraktikerinAichachPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeilpraktikerinContent />
      </main>
      <ContactFooter />
    </>
  );
}
