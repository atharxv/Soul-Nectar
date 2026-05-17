import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import HeilpraktikerContent from "./HeilpraktikerContent";

export const metadata = {
  title: "Heilpraktiker Aichach | Ganzheitliche Begleitung",
  description: "Individuelle, achtsame und professionelle Unterstützung. Als Heilpraktikerin in Aichach begleite ich dich mit einem integrativen Ansatz.",
  alternates: {
    canonical: "https://www.soulnectar.de/heilpraktiker-aichach",
  },
  openGraph: {
    title: "Heilpraktiker Aichach | Ganzheitliche Begleitung",
    description: "Individuelle, achtsame und professionelle Unterstützung. Als Heilpraktikerin in Aichach begleite ich dich mit einem integrativen Ansatz.",
    url: "https://www.soulnectar.de/heilpraktiker-aichach",
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

export default function HeilpraktikerAichachPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeilpraktikerContent />
      </main>
      <ContactFooter />
    </>
  );
}
