"use client";

import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { BotanicalIllustration } from "@/components/DecorativePatterns";

export default function AboutContent() {
  const { t } = useLanguage();

  return (
    <>
      {/* 1. STORY / INTRO SECTION (Image Left, Text Right) */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-card)", paddingTop: "160px" }}>
        {/* Botanical Illustration: Olive Branch */}
        <BotanicalIllustration 
          variant="olive" 
          className="botanical-illust--mirrored hide-mobile" 
          style={{ bottom: "0", left: "-15px", opacity: 0.16, transform: "rotate(-20deg) scaleX(-1)" }} 
        />
        <div className="container">
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            backgroundColor: "var(--white)",
            borderRadius: "8px",
            overflow: "hidden",
            alignItems: "stretch",
            boxShadow: "0 10px 40px rgba(0,0,0,0.03)"
          }}>
            {/* Left Image */}
            <div className="cinematic-image-wrapper" style={{
              flex: "1 1 350px",
              minHeight: "500px",
              position: "relative"
            }}>
              <div className="cinematic-image" style={{
                position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
                backgroundColor: "var(--bg-color)"
              }}>
                <Image 
                  src="/nicole-main.png" 
                  alt={t('aboutPage.story.imageAlt')}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
            </div>
            
            {/* Right Text */}
            <div style={{
              flex: "2 1 500px",
              padding: "5rem 4rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "left"
            }}>
              <FadeIn>
                <span className="section-subtitle" style={{ display: "block", marginBottom: "1.5rem" }}>{t('aboutPage.story.subtitle')}</span>
                <h1 style={{ marginBottom: "2rem", fontSize: "2.5rem", lineHeight: 1.2, color: "var(--text-primary)" }}>{t('aboutPage.story.title')}</h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                  {t('aboutPage.story.p1')}
                </p>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "3rem" }}>
                  {t('aboutPage.story.p2')}
                </p>
                <a href="#kontakt" className="btn-primary" style={{ display: "inline-block" }}>
                  {t('nav.book')}
                </a>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUOTE SECTION (Philosophy) */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-color)", position: "relative", overflow: "hidden" }}>
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <FadeIn>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <div style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)", 
                lineHeight: 1.4, 
                color: "var(--accent-olive-dark)",
                marginBottom: "2rem",
                fontStyle: "italic"
              }}>
                "{t('aboutPage.quote.text')}"
              </div>
              <div style={{
                width: "60px",
                height: "1px",
                backgroundColor: "var(--accent-olive-light)",
                margin: "0 auto"
              }} />
            </div>
          </FadeIn>
        </div>
        
        {/* Subtle decorative background element */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "120%",
          height: "120%",
          backgroundImage: "url('/flower-line-art.svg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.03,
          zIndex: 0,
          pointerEvents: "none"
        }} />
      </section>

      {/* 3. QUALIFICATIONS SECTION */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-color)", position: "relative", overflow: "hidden" }}>
        {/* Botanical Illustration: Seed Pods */}
        <BotanicalIllustration 
          variant="pods" 
          className="hide-mobile" 
          style={{ bottom: "-30px", right: "-20px", opacity: 0.18, transform: "rotate(-10deg)" }} 
        />
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <FadeIn>
            <span className="section-subtitle" style={{ display: "block", marginBottom: "1rem", textAlign: "center" }}>{t('aboutPage.qualifications.subtitle')}</span>
            <h2 style={{ marginBottom: "3rem", fontSize: "2.5rem", textAlign: "center" }}>{t('aboutPage.qualifications.title')}</h2>
          </FadeIn>
          <div className="qualifications-grid">
            {t('aboutPage.qualifications.items', { returnObjects: true }).map((card, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="qual-card qual-card-hover" style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  textAlign: "left",
                  gap: "1.2rem",
                  height: "100%",
                  padding: "2rem"
                }}>
                  <Image 
                    src={`/icons/wellness/${card.icon}.svg`}
                    alt={card.label}
                    width={40}
                    height={40}
                    style={{ marginBottom: "0.5rem" }}
                  />
                  <div>
                    <span className="section-subtitle" style={{ display: "block", marginBottom: "0.8rem", color: "var(--text-secondary)" }}>
                      {card.label}
                    </span>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "0.95rem", margin: 0 }}>
                      {card.text}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}

            {/* Option B CTA Card for orphaned slot */}
            <FadeIn delay={0.5}>
              <div style={{
                backgroundColor: "rgba(189, 196, 167, 0.2)",
                borderRadius: "8px",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                height: "100%",
                gap: "1.5rem",
                border: "1px dashed rgba(189, 196, 167, 0.4)"
              }}>
                <p style={{ 
                  fontFamily: "var(--font-serif)", 
                  color: "var(--text-primary)", 
                  fontSize: "1.5rem",
                  margin: 0
                }}>
                  {t('aboutPage.qualifications.cta.text')}
                </p>
                <a href="#kontakt" className="btn-outline">
                  {t('aboutPage.qualifications.cta.button')}
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. APPROACH SECTION (Text Left, Image Right) */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-card)", position: "relative", overflow: "hidden" }}>
        {/* Botanical Illustration: Leaf Stem */}
        <BotanicalIllustration 
          variant="leaf" 
          className="hide-mobile" 
          style={{ top: "-10px", left: "-15px", opacity: 0.16, transform: "rotate(15deg)" }} 
        />
        <div className="container">
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row-reverse", /* Reverses so image is right, text left */
            backgroundColor: "var(--white)",
            borderRadius: "8px",
            overflow: "hidden",
            alignItems: "stretch",
            boxShadow: "0 10px 40px rgba(0,0,0,0.03)"
          }}>
            {/* Right Image */}
            <div className="cinematic-image-wrapper" style={{
              flex: "1 1 350px",
              minHeight: "500px",
              position: "relative"
            }}>
              <div className="cinematic-image" style={{
                position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
                backgroundColor: "var(--bg-color)"
              }}>
                <Image 
                  src="/practice-room-3.jpg" 
                  alt={t('aboutPage.approach.imageAlt')}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center right" }}
                />
              </div>
            </div>
            
            {/* Left Text */}
            <div style={{
              flex: "2 1 500px",
              padding: "5rem 4rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "left"
            }}>
              <FadeIn>
                <span className="section-subtitle" style={{ display: "block", marginBottom: "1.5rem" }}>{t('aboutPage.approach.subtitle')}</span>
                <h2 style={{ marginBottom: "2rem", fontSize: "2.5rem" }}>{t('aboutPage.approach.title')}</h2>
                <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                  {t('aboutPage.approach.p1')}
                </p>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "3rem" }}>
                  {t('aboutPage.approach.p2')}
                </p>
                
                {/* Feature Labels Row */}
                <div style={{ display: "flex", flexWrap: "nowrap", gap: "2.5rem", justifyContent: "flex-start", paddingTop: "1.5rem", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
                  {t('aboutPage.approach.features', { returnObjects: true }).map((feat, idx) => (
                    <div key={idx} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                      <Image 
                        src={`/icons/wellness/${feat.icon}.svg`}
                        alt=""
                        width={24}
                        height={24}
                      />
                      <span className="section-subtitle" style={{ fontSize: "0.75rem", margin: 0, textAlign: "center", color: "var(--text-primary)" }}>
                        {feat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
