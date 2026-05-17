"use client";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { TopographicBackground, BotanicalIllustration } from "./DecorativePatterns";

export default function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="hero-section" style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      paddingTop: "160px", // Increased to add distance below navbar
      paddingBottom: "100px",
      overflow: "hidden"
    }}>
      {/* Topographic Contour Background */}
      <TopographicBackground variant="b" instanceId="hero-home" />

      {/* Botanical Illustration: Olive Branch */}
      <BotanicalIllustration 
        variant="olive" 
        className="hide-mobile" 
        style={{ bottom: "-20px", right: "-10px", opacity: 0.08, transform: "rotate(15deg)" }} 
      />
      <div className="container" style={{ 
        display: "flex", 
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        zIndex: 1
      }}>
        {/* Left Text Content */}
        <div className="hero-content" style={{ flex: "1 1 500px", paddingRight: "4rem", maxWidth: "600px", zIndex: 2 }}>
          <FadeIn>
            <h1 
              style={{ 
                fontSize: "clamp(2.5rem, 5vw, 4rem)", 
                marginBottom: "2rem",
                lineHeight: 1.15
              }}
              dangerouslySetInnerHTML={{ __html: t('hero.title') + `<br/><span style="opacity: 0.85; font-style: italic; font-family: var(--font-sans); font-weight: 300; font-size: 0.9em">${t('hero.subtitle')}</span>` }}
            />
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p 
              style={{ 
                fontSize: "1.15rem", 
                marginBottom: "3.5rem",
                color: "var(--text-secondary)",
                maxWidth: "520px",
                lineHeight: 1.7
              }}
              dangerouslySetInnerHTML={{ __html: t('hero.description') }}
            />
          </FadeIn>

          <FadeIn delay={0.4} style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <a href="#services" className="btn-primary" style={{ backgroundColor: "var(--accent-olive-light)" }}>
              {t('hero.btn_services')}
            </a>
            <a href="#kontakt" className="btn-outline">
              {t('hero.btn_contact')}
            </a>
          </FadeIn>
        </div>
      </div>
      
      {/* Right Image Background with Gradient Overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "55%",
        height: "100%",
        zIndex: 0,
        maskImage: "linear-gradient(to right, transparent, black 15%)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 15%)"
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/hero-homepage.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} />
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(90deg, var(--bg-color) 0%, rgba(244, 239, 233, 0.8) 15%, rgba(244, 239, 233, 0) 50%)",
        }} />
      </div>
    </section>
  );
}
