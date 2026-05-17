import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import AboutContent from "./AboutContent";

export const metadata = {
  title: 'Über mich – Nicole-Marina Hötzel | Soul Nectar',
  description: 'Ich begleite dich auf deinem Weg zurück zu dir selbst — mit Wärme, Klarheit und einem ganzheitlichen Blick auf Körper, Geist und Seele.',
  alternates: {
    canonical: "https://www.soulnectar.de/ueber-mich",
  },
  openGraph: {
    title: 'Über mich – Nicole-Marina Hötzel | Soul Nectar',
    description: 'Ich begleite dich auf deinem Weg zurück zu dir selbst — mit Wärme, Klarheit und einem ganzheitlichen Blick auf Körper, Geist und Seele.',
    url: "https://www.soulnectar.de/ueber-mich",
    siteName: "Soul Nectar",
    type: "website",
    images: [{
      url: "https://www.soulnectar.de/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Nicole-Marina Hötzel — Heilpraktikerin, Traumatherapeutin und Yoga Lehrerin in Aichach"
    }]
  }
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <Navbar />
      <AboutContent />
      <ContactFooter />
    </main>
  );
}
