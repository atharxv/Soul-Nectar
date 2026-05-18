import { Caudex, Josefin_Sans } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { CookieConsentProvider } from "@/context/CookieConsentContext";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import CookieBanner from "@/components/CookieBanner";
import LoadingScreen from "@/components/LoadingScreen";
import "./globals.css";

const caudex = Caudex({
  weight: ["400", "700"],
  variable: "--font-caudex",
  subsets: ["latin"],
});

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
});

export const metadata = {
  title: "Soul Nectar | Psychotherapie, Heilpraktik & Yoga in Aichach",
  description: "Ein geschützter Raum für Heilung, innere Balance und persönliches Wachstum. Ganzheitliche Begleitung für Körper, Geist und Seele in Aichach.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${caudex.variable} ${josefin.variable}`}>
      <body>
        <LoadingScreen />
        <a href="#main-content" className="skip-link">
          Zum Inhalt springen
        </a>
        <LanguageProvider>
          <CookieConsentProvider>
            {children}
            <StickyWhatsApp />
            <CookieBanner />
          </CookieConsentProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
