import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import PsychotherapieContent from "./PsychotherapieContent";

export const metadata = {
  title: 'Psychotherapie Aichach: Heilpraktikerin für Psychotherapie',
  description: 'Psychotherapie in Aichach: ein geschützter Raum für Veränderung, Klarheit und innere Stabilität. Körperorientierte und traumainformierte Psychotherapie.',
  alternates: {
    canonical: "https://www.soulnectar.de/psychotherapie-aichach",
  },
  openGraph: {
    title: 'Psychotherapie Aichach: Heilpraktikerin für Psychotherapie',
    description: 'Psychotherapie in Aichach: ein geschützter Raum für Veränderung, Klarheit und innere Stabilität. Körperorientierte und traumainformierte Psychotherapie.',
    url: "https://www.soulnectar.de/psychotherapie-aichach",
    siteName: "Soul Nectar",
    type: "website",
    images: [{
      url: "https://www.soulnectar.de/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Psychotherapie in Aichach — Traumatherapie und körperorientierte Therapie bei Soul Nectar"
    }]
  }
};

export default function PsychotherapiePage() {
  return (
    <main id="main-content">
      <Navbar />
      <PsychotherapieContent />
      <ContactFooter />
    </main>
  );
}
