"use client";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { BotanicalIllustration } from "./DecorativePatterns";

export default function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="ueber-mich" className="section-padding" style={{ backgroundColor: "var(--white)", scrollMarginTop: "120px" }}>
      {/* Botanical Illustration: Fern Frond */}
      <BotanicalIllustration 
        variant="fern" 
        className="hide-mobile" 
        style={{ top: "-10px", left: "-10px", opacity: 0.16, transform: "rotate(-10deg)" }} 
      />
      {/* Second Botanical Illustration: Leaf Stem framing the section */}
      <BotanicalIllustration 
        variant="leaf" 
        className="hide-mobile" 
        style={{ bottom: "-20px", right: "20px", opacity: 0.15, transform: "rotate(25deg)" }} 
      />
      <div className="container" style={{ textAlign: "center" }}>
        <FadeIn>
          <span className="section-subtitle">{t('about.subtitle')}</span>
        </FadeIn>
        
        <div style={{
          marginTop: "3rem",
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "var(--bg-color)",
          borderRadius: "8px",
          overflow: "hidden",
          alignItems: "stretch"
        }}>
          {/* Left Image Side */}
          <div style={{
            flex: "1 1 400px",
            minHeight: "400px",
            backgroundImage: "url('/practice-room-2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative"
          }}>
            {/* The curved separator effect from the reference */}
            <svg 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
              style={{
                position: "absolute",
                right: -1,
                top: 0,
                height: "100%",
                width: "15%",
                fill: "var(--bg-color)"
              }}
            >
              <path d="M100 0 L100 100 L0 100 Q100 50 0 0 Z" />
            </svg>
          </div>
          
          {/* Right Text Side */}
          <div style={{
            flex: "1 1 400px",
            padding: "5rem 4rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "left"
          }}>
            <FadeIn>
              <h2 style={{ marginBottom: "2rem", fontSize: "2.5rem" }}>{t('about.title')}</h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem", color: "var(--text-secondary)" }}>
                {t('about.p1')}
              </p>
              <p style={{ fontSize: "1.1rem", marginBottom: "3rem", color: "var(--text-secondary)" }}>
                {t('about.p2')}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <a href="#kontakt" style={{
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--text-primary)",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem"
              }}>
                {t('about.btn_more')} <span>→</span>
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
