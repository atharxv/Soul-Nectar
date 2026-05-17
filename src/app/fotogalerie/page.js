import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import PhotoGallery from "./PhotoGallery";
import GalleryHero from "./GalleryHero";

export const metadata = {
  title: 'Fotogalerie – Soul Nectar',
  description: 'Momente aus einem Raum der Heilung, des Wachstums und des inneren Gleichgewichts.',
  alternates: {
    canonical: "https://www.soulnectar.de/fotogalerie",
  },
  openGraph: {
    title: 'Fotogalerie – Soul Nectar',
    description: 'Momente aus einem Raum der Heilung, des Wachstums und des inneren Gleichgewichts.',
    url: "https://www.soulnectar.de/fotogalerie",
    siteName: "Soul Nectar",
    type: "website",
    images: [{
      url: "https://www.soulnectar.de/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Praxisräume von Soul Nectar in Aichach-Walchshofen"
    }]
  }
};

export default function FotogaleriePage() {
  return (
    <main id="main-content" style={{ backgroundColor: "var(--accent-olive-light)" }}>
      <Navbar />
      <GalleryHero />
      <PhotoGallery />
      <ContactFooter />
    </main>
  );
}
