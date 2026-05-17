"use client";

import FadeIn from "@/components/FadeIn";
import FAQAccordion from "@/components/FAQAccordion";
import Location from "@/components/Location";
import { useLanguage } from "@/context/LanguageContext";
import { TopographicBackground, BotanicalIllustration } from "@/components/DecorativePatterns";

export default function PsychotherapieContent() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" style={{
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "160px",
        paddingBottom: "100px",
        overflow: "hidden",
        backgroundColor: "var(--bg-card)"
      }}>
        {/* Topographic Contour Background */}
        <TopographicBackground variant="b" instanceId="hero-psychotherapie" />

        {/* Botanical Illustration: Fern Frond */}
        <BotanicalIllustration 
          variant="fern" 
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
          <div className="hero-content" style={{ flex: "1 1 500px", paddingRight: "4rem", maxWidth: "700px", zIndex: 2 }}>
            <FadeIn>
              <h1 
                style={{ 
                  fontSize: "clamp(2.5rem, 5vw, 4rem)", 
                  marginBottom: "2rem",
                  lineHeight: 1.15
                }}
                dangerouslySetInnerHTML={{ __html: t('psychotherapieAichach.hero.title') }}
              />
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p 
                style={{ 
                  fontSize: "1.15rem", 
                  marginBottom: "1.5rem",
                  color: "var(--text-secondary)",
                  maxWidth: "520px",
                  lineHeight: 1.7
                }}
              >
                {t('psychotherapieAichach.hero.desc1')}
              </p>
              <p 
                style={{ 
                  fontSize: "1.15rem", 
                  marginBottom: "3.5rem",
                  color: "var(--text-secondary)",
                  maxWidth: "520px",
                  lineHeight: 1.7,
                  fontStyle: "italic"
                }}
              >
                {t('psychotherapieAichach.hero.desc2')}
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <a href="#kontakt" className="btn-primary" style={{ backgroundColor: "var(--accent-olive-light)" }}>
                {t('nav.book')}
              </a>
            </FadeIn>
          </div>
        </div>
        
        {/* Right Abstract Background */}
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
            backgroundImage: "url('/practice-room-4.jpg')", 
            backgroundSize: "cover",
            backgroundPosition: "center left",
          }} />
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(90deg, var(--bg-card) 0%, rgba(244, 239, 233, 0.3) 50%, rgba(0,0,0,0) 100%)",
          }} />
        </div>
      </section>

      {/* Intro Philosophy Section */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-color)" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <h2 style={{ marginBottom: "2rem", fontSize: "2.5rem" }}>{t('psychotherapieAichach.hero.welcome')}</h2>
            <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem", color: "var(--text-secondary)" }}>
              {t('psychotherapieAichach.hero.holistic')}
            </p>
            <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem", color: "var(--text-secondary)" }}>
              {t('psychotherapieAichach.hero.empathetic')}
            </p>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)" }}>
              {t('psychotherapieAichach.hero.trauma')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Über mich & Qualifikationen */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-color)" }}>
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
            {/* Left Image Side */}
            <div className="cinematic-image-wrapper" style={{
              flex: "1 1 350px",
              minHeight: "500px",
              position: "relative",
              overflow: "hidden"
            }}>
              <div className="cinematic-image" style={{
                position: "absolute",
                top: 0, left: 0, width: "100%", height: "100%",
                backgroundImage: "url('/practice-room-3.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center 20%",
              }} />
            </div>
            
            {/* Right Text Side */}
            <div style={{
              flex: "2 1 500px",
              padding: "5rem 4rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "left"
            }}>
              <FadeIn>
                <h2 style={{ marginBottom: "2rem", fontSize: "2.5rem" }}>{t('psychotherapieAichach.about.title')}</h2>
                <p style={{ fontSize: "1.1rem", marginBottom: "3rem", color: "var(--text-secondary)" }}>
                  {t('psychotherapieAichach.about.desc')}
                </p>
                
                <h2 style={{ marginBottom: "1.5rem", fontSize: "1.8rem" }}>{t('psychotherapieAichach.qualifications.title')}</h2>
                <ul style={{ 
                  listStyle: "none", 
                  paddingLeft: "1.5rem", 
                  color: "var(--text-primary)",
                  marginBottom: "2rem"
                }}>
                  {t('psychotherapieAichach.qualifications.bullets').map((bullet, idx) => (
                    <li key={idx} style={{ 
                      position: "relative", 
                      marginBottom: "1.2rem",
                      fontSize: "1.05rem",
                      lineHeight: 1.6
                    }}>
                      <span style={{ 
                        position: "absolute", 
                        left: "-1.5rem", 
                        color: "var(--accent-olive-dark)",
                        fontWeight: "bold"
                      }}>•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)" }}>
                  <strong>{t('psychotherapieAichach.qualifications.outcome')}</strong><br/><br/>
                  {t('psychotherapieAichach.qualifications.text')}
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits List */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-card)" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ marginBottom: "2rem", fontSize: "2rem" }}>{t('psychotherapieAichach.benefits.title')}</h2>
            <ul style={{ 
              listStyle: "none", 
              paddingLeft: "1.5rem", 
              color: "var(--text-primary)"
            }}>
              {t('psychotherapieAichach.benefits.bullets').map((bullet, idx) => (
                <li key={idx} style={{ 
                  position: "relative", 
                  marginBottom: "1rem",
                  fontSize: "1.1rem",
                  lineHeight: 1.6
                }}>
                  <span style={{ 
                    position: "absolute", 
                    left: "-1.5rem", 
                    color: "var(--accent-olive-dark)",
                    fontWeight: "bold"
                  }}>✓</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Yogatherapie CTA Strip */}
      <section className="section-padding" style={{ backgroundColor: "var(--accent-olive-light)", color: "var(--white)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ marginBottom: "1.5rem", fontSize: "2.2rem", color: "var(--white)" }}>{t('psychotherapieAichach.yogaCta.title')}</h2>
            <p style={{ fontSize: "1.1rem", marginBottom: "2rem", opacity: 0.9 }}>
              {t('psychotherapieAichach.yogaCta.text')}
            </p>
            <a href="/#yoga" className="btn-outline" style={{ borderColor: "var(--white)", color: "var(--white)" }}>
              {t('psychotherapieAichach.yogaCta.link')}
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Pricing & Insurance Section */}
      <section className="section-padding" style={{ backgroundColor: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ marginBottom: "1.5rem", fontSize: "2rem" }}>{t('psychotherapieAichach.pricing.title')}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "3rem", fontSize: "1.1rem", color: "var(--text-secondary)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(0,0,0,0.05)", paddingBottom: "0.5rem" }}>
                <span>{t('psychotherapieAichach.pricing.initial')}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(0,0,0,0.05)", paddingBottom: "0.5rem" }}>
                <span>{t('psychotherapieAichach.pricing.followup')}</span>
              </div>
            </div>

            <h2 style={{ marginBottom: "1.5rem", fontSize: "2rem" }}>{t('psychotherapieAichach.insurance.title')}</h2>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
              {t('psychotherapieAichach.insurance.text')}
            </p>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", fontStyle: "italic", marginBottom: "3rem" }}>
              {t('psychotherapieAichach.insurance.info')}
            </p>

            <h2 style={{ marginBottom: "1.5rem", fontSize: "2rem" }}>{t('psychotherapieAichach.selfpayer.title')}</h2>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)" }}>
              {t('psychotherapieAichach.selfpayer.text')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Location Map */}
      <Location />

      {/* FAQ Section */}
      <section className="section-padding" style={{ backgroundColor: "var(--white)" }}>
        <div className="container">
          <FadeIn>
            <h2 style={{ marginBottom: "3rem", fontSize: "2.5rem", textAlign: "center" }}>{t('psychotherapieAichach.faq.title')}</h2>
            <FAQAccordion items={t('psychotherapieAichach.faq.items')} />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
