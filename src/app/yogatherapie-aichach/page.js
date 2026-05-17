import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import YogatherapieContent from "./YogatherapieContent";

export const metadata = {
  title: 'Yogatherapie in Aichach mit Nicole-Marina Hötzel',
  description: 'Yogatherapie in Aichach verbindet die jahrtausendealte Weisheit des Yoga mit einem modernen, therapeutischen Verständnis von Gesundheit.',
  alternates: {
    canonical: "https://www.soulnectar.de/yogatherapie-aichach",
  },
  openGraph: {
    title: 'Yogatherapie in Aichach mit Nicole-Marina Hötzel',
    description: 'Yogatherapie in Aichach verbindet die jahrtausendealte Weisheit des Yoga mit einem modernen, therapeutischen Verständnis von Gesundheit.',
    url: "https://www.soulnectar.de/yogatherapie-aichach",
    siteName: "Soul Nectar",
    type: "website",
    images: [{
      url: "https://www.soulnectar.de/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Yogatherapie in Aichach — Ganzheitliche Therapie mit Nicole-Marina Hötzel"
    }]
  }
};

export default function YogatherapiePage() {
  return (
    <main id="main-content">
      <Navbar />
      <YogatherapieContent />
      <ContactFooter />
    </main>
  );
}
