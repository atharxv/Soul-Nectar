import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import DatenschutzContent from "./DatenschutzContent";

export const metadata = {
  title: "Datenschutzerklärung | Soul Nectar",
  description: "Datenschutzerklärung der Soul Nectar Privatpraxis für Psychotherapie von Nicole-Marina Hötzel gemäß DSGVO.",
  alternates: {
    canonical: "https://www.soulnectar.de/datenschutz/"
  }
};

export default function DatenschutzPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--bg-color)" }}>
      <Navbar />
      
      {/* Spacer to push content below fixed navbar */}
      <div style={{ height: "120px" }}></div>
      
      <div style={{ 
        paddingTop: "var(--space-xl)",
        paddingBottom: "var(--space-2xl)"
      }}>
        <DatenschutzContent />
      </div>

      <ContactFooter />
    </main>
  );
}
