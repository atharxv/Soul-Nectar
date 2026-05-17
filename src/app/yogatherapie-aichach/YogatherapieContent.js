"use client";

import FadeIn from "@/components/FadeIn";
import Location from "@/components/Location";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { TopographicBackground, BotanicalIllustration } from "@/components/DecorativePatterns";

const iconMap = [
  "gentle-movement",
  "pranayama",
  "meditation",
  "mindful-pause"
];

export default function YogatherapieContent() {
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
        <TopographicBackground variant="b" instanceId="hero-yogatherapie" />

        {/* Botanical Illustration: Seed Pods */}
        <BotanicalIllustration 
          variant="pods" 
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
                dangerouslySetInnerHTML={{ __html: t('yogatherapieAichach.hero.title') }}
              />
            </FadeIn>

            <FadeIn delay={0.2}>
              <p
                style={{
                  fontSize: "1.15rem",
                  marginBottom: "1.5rem",
                  color: "var(--text-secondary)",
                  maxWidth: "520px",
                  lineHeight: 1.7,
                  fontStyle: "italic"
                }}
              >
                {t('yogatherapieAichach.hero.desc1')}
              </p>
              <p
                style={{
                  fontSize: "1.15rem",
                  marginBottom: "1.5rem",
                  color: "var(--text-secondary)",
                  maxWidth: "520px",
                  lineHeight: 1.7
                }}
              >
                {t('yogatherapieAichach.hero.desc2')}
              </p>
              <p
                style={{
                  fontSize: "1.15rem",
                  marginBottom: "3.5rem",
                  color: "var(--text-secondary)",
                  maxWidth: "520px",
                  lineHeight: 1.7
                }}
              >
                {t('yogatherapieAichach.hero.desc3')}
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
            backgroundImage: "url('/practice-room-1.jpg')",
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

      {/* Mein Ansatz Section (Side-by-side) */}
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
                backgroundImage: "url('/practice-room-5.jpg')",
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
                <h2 style={{ marginBottom: "2rem", fontSize: "2.5rem" }}>{t('yogatherapieAichach.ansatz.title')}</h2>
                <p style={{ fontSize: "1.1rem", marginBottom: "3rem", color: "var(--text-secondary)" }}>
                  {t('yogatherapieAichach.ansatz.desc')}
                </p>

                <h3 style={{ marginBottom: "1.5rem", fontSize: "1.4rem", fontFamily: "var(--font-sans)", color: "var(--text-primary)" }}>{t('yogatherapieAichach.ansatz.subtitle')}</h3>
                <ul style={{
                  listStyle: "none",
                  paddingLeft: "1.5rem",
                  color: "var(--text-primary)",
                  marginBottom: "2rem"
                }}>
                  {t('yogatherapieAichach.ansatz.bullets').map((bullet, idx) => (
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
                  {t('yogatherapieAichach.ansatz.closing')}
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Wie Yogatherapie wirkt Section */}
      <section className="section-padding" style={{ backgroundColor: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ marginBottom: "2rem", fontSize: "2.5rem", textAlign: "center" }}>{t('yogatherapieAichach.wirkung.title')}</h2>
            <p style={{ fontSize: "1.1rem", marginBottom: "3rem", color: "var(--text-secondary)", textAlign: "center" }}>
              {t('yogatherapieAichach.wirkung.desc')}
            </p>
            <div className="qualifications-grid">
              {t('yogatherapieAichach.wirkung.cards').map((card, idx) => (
                <div key={idx} className="qual-card" style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  textAlign: "left",
                  gap: "1.5rem"
                }}>
                  <div style={{ flexShrink: 0 }}>
                    <Image 
                      src={`/icons/wellness/${iconMap[idx]}.svg`}
                      alt=""
                      width={64}
                      height={64}
                    />
                  </div>
                  <div>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, fontSize: "1.05rem", margin: 0, marginTop: "0.5rem" }}>
                      {card}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ marginTop: "3rem", fontSize: "1.1rem", color: "var(--text-secondary)", textAlign: "center" }}>
              {t('yogatherapieAichach.wirkung.closing')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Für wen ist Yogatherapie geeignet? */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-card)" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ marginBottom: "2rem", fontSize: "2rem" }}>{t('yogatherapieAichach.zielgruppe.title')}</h2>
            <p style={{ fontSize: "1.1rem", marginBottom: "2rem", color: "var(--text-secondary)" }}>
              {t('yogatherapieAichach.zielgruppe.desc')}
            </p>
            <ul style={{
              listStyle: "none",
              paddingLeft: "1.5rem",
              color: "var(--text-primary)",
              marginBottom: "3rem"
            }}>
              {t('yogatherapieAichach.zielgruppe.bullets').map((bullet, idx) => (
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
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
              {t('yogatherapieAichach.zielgruppe.closing1')}
            </p>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)" }}>
              {t('yogatherapieAichach.zielgruppe.closing2')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Gentle CTA Banner */}
      <section className="section-padding" style={{ backgroundColor: "var(--accent-olive-light)", color: "var(--white)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ marginBottom: "1.5rem", fontSize: "2.2rem", color: "var(--white)" }}>{t('yogatherapieAichach.ctaStrip.title')}</h2>
            <p style={{ fontSize: "1.1rem", marginBottom: "2rem", opacity: 0.9 }}>
              {t('yogatherapieAichach.ctaStrip.text')}
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/psychotherapie-aichach" className="btn-primary" style={{ backgroundColor: "var(--accent-olive-dark)", borderColor: "var(--accent-olive-dark)" }}>
                {t('yogatherapieAichach.ctaStrip.link1')}
              </a>
              <a href="/#yoga" className="btn-outline" style={{ borderColor: "var(--white)", color: "var(--white)" }}>
                {t('yogatherapieAichach.ctaStrip.link2')}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Dein Weg zurück in den Fluss */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-color)" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <h2 style={{ marginBottom: "2rem", fontSize: "2.5rem" }}>{t('yogatherapieAichach.weg.title')}</h2>
            <p
              style={{ fontSize: "1.1rem", marginBottom: "2rem", color: "var(--text-secondary)", lineHeight: 1.8 }}
              dangerouslySetInnerHTML={{ __html: t('yogatherapieAichach.weg.text1') }}
            />
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", fontWeight: 500 }}>
              {t('yogatherapieAichach.weg.text2')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Location Map */}
      <Location />
    </>
  );
}
