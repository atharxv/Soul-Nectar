import { Caudex, Josefin_Sans } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
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
        <a href="#main-content" className="skip-link">
          Zum Inhalt springen
        </a>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
