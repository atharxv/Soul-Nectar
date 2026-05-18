import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import ImpressumContent from "./ImpressumContent";

export const metadata = {
  title: "Impressum | Soul Nectar",
  description: "Impressum und Pflichtangaben gemäß § 5 TMG für Soul Nectar, Heilpraktikerin für Psychotherapie Nicole-Marina Hötzel.",
  alternates: {
    canonical: "https://www.soulnectar.de/impressum/",
  },
};

export default function ImpressumPage() {
  return (
    <>
      <Navbar />
      <main
        id="main-content"
        style={{
          paddingTop: "120px",
          paddingBottom: "6rem",
          backgroundColor: "var(--bg-color)",
          minHeight: "100vh"
        }}
      >
        <ImpressumContent />
      </main>
      <ContactFooter />
    </>
  );
}
