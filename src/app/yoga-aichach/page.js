import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import YogaAichachContent from "./YogaAichachContent";

export const metadata = {
  title: 'Yoga Aichach – Kundalini Yoga mit Nicole-Marina Hötzel',
  description: 'Yoga Kurse in Aichach: Raum für Bewegung, Atem und innere Ruhe. Kundalini Yoga für Anfängerinnen und Fortgeschrittene.',
  alternates: {
    canonical: "https://www.soulnectar.de/yoga-aichach",
  },
  openGraph: {
    title: 'Yoga Aichach – Kundalini Yoga mit Nicole-Marina Hötzel',
    description: 'Yoga Kurse in Aichach: Raum für Bewegung, Atem und innere Ruhe. Kundalini Yoga für Anfängerinnen und Fortgeschrittene.',
    url: "https://www.soulnectar.de/yoga-aichach",
    siteName: "Soul Nectar",
    type: "website",
    images: [{
      url: "https://www.soulnectar.de/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Yoga Kurse in Aichach — Soul Nectar Yoga Studio"
    }]
  }
};

export default function YogaAichachPage() {
  return (
    <main id="main-content">
      <Navbar />
      <YogaAichachContent />
      <ContactFooter />
    </main>
  );
}
