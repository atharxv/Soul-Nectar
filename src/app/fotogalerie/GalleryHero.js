"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function GalleryHero() {
  const { t } = useLanguage();

  return (
    <section className="gallery-hero" style={{
      position: "relative",
      height: "60vh",
      minHeight: "400px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      paddingTop: "100px",
      overflow: "hidden"
    }}>
      {/* Background Image */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: "url('/practice-room-1.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 0
      }} />
      
      {/* Dark Gradient Overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(to right, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)",
        zIndex: 1
      }} />

      {/* Hero Content */}
      <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "right" }}>
        <h1 style={{ 
          color: "var(--white)", 
          fontFamily: "var(--font-serif)", 
          fontSize: "clamp(3rem, 6vw, 4.5rem)",
          marginBottom: "1rem",
          fontWeight: 400
        }}>
          {t('fotogalerie.hero.title')}
        </h1>
        <p style={{
          color: "var(--white)",
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
          maxWidth: "600px",
          marginLeft: "auto",
          lineHeight: 1.4
        }}>
          {t('fotogalerie.hero.subtitle')}
        </p>
      </div>
    </section>
  );
}
