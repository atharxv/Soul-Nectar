import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import CookieEinstellungenContent from "./CookieEinstellungenContent";

export const metadata = {
  title: "Cookie Einstellungen | Soul Nectar",
  description: "Verwalten Sie Ihre Cookie-Einstellungen für die Soul Nectar Website.",
  alternates: {
    canonical: "https://www.soulnectar.de/cookie-einstellungen/"
  }
};

export default function CookieEinstellungenPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--bg-color)" }}>
      <Navbar />
      
      {/* Spacer to push content below fixed navbar */}
      <div style={{ height: "120px" }}></div>
      
      <div style={{ 
        paddingTop: "var(--space-xl)",
        paddingBottom: "var(--space-2xl)"
      }}>
        <CookieEinstellungenContent />
      </div>

      <ContactFooter />
    </main>
  );
}
