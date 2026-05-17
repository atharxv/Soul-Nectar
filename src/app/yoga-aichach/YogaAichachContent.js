"use client";

import FadeIn from "@/components/FadeIn";
import Location from "@/components/Location";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { TopographicBackground, BotanicalIllustration } from "@/components/DecorativePatterns";

const iconMap = [
  "gentle-movement",
  "pranayama",
  "rest-and-recovery",
  "meditation"
];

export default function YogaAichachContent() {
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
        <TopographicBackground variant="b" instanceId="hero-yoga" />

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
          <div className="hero-content" style={{ flex: "1 1 500px", paddingRight: "4rem", maxWidth: "700px", zIndex: 2 }}>
            <FadeIn>
              <h1 
                style={{ 
                  fontSize: "clamp(2.5rem, 5vw, 4rem)", 
                  marginBottom: "2rem",
                  lineHeight: 1.15
                }}
                dangerouslySetInnerHTML={{ __html: t('yogaAichach.hero.title') }}
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
                {t('yogaAichach.hero.desc1')}
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
                {t('yogaAichach.hero.desc2')}
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
                {t('yogaAichach.hero.desc3')}
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
                {t('yogaAichach.hero.desc4')}
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
            backgroundImage: "url('/practice-room-2.jpg')", 
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

      {/* Kundalini Yoga Explanation */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-color)" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <h2 style={{ marginBottom: "2rem", fontSize: "2.5rem" }}>{t('yogaAichach.kundalini.title')}</h2>
            <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem", color: "var(--text-secondary)" }}>
              {t('yogaAichach.kundalini.desc')}
            </p>
            <p style={{ fontSize: "1.1rem", color: "var(--text-primary)", fontWeight: 500 }}>
              {t('yogaAichach.kundalini.subtitle')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Practice Elements Breakdown */}
      <section className="section-padding" style={{ backgroundColor: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <FadeIn>
            <div className="qualifications-grid">
              {t('yogaAichach.kundalini.elements').map((element, idx) => (
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
                      alt={element.title}
                      width={64}
                      height={64}
                    />
                  </div>
                  <div>
                    <span style={{ color: "var(--accent-olive-dark)", fontWeight: "bold", fontSize: "1.2rem", display: "block", marginBottom: "0.5rem" }}>{element.title}</span>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, fontSize: "1.05rem", margin: 0 }}>{element.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ marginTop: "3rem", fontSize: "1.1rem", color: "var(--text-secondary)", textAlign: "center", fontStyle: "italic" }}>
              {t('yogaAichach.kundalini.closing')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Location Map */}
      <Location />

      {/* Course Schedule */}
      <section className="section-padding" style={{ backgroundColor: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ marginBottom: "1.5rem", fontSize: "2rem" }}>{t('yogaAichach.schedule.title')}</h2>
            <p style={{ fontSize: "1.1rem", color: "var(--text-primary)", fontWeight: 500, marginBottom: "1.5rem" }}>
              {t('yogaAichach.schedule.subtitle')}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "1.1rem", color: "var(--text-secondary)" }}>
              {t('yogaAichach.schedule.times').map((time, idx) => (
                <div key={idx} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(0,0,0,0.05)", paddingBottom: "0.5rem" }}>
                  <span>{time}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Holistic Approach & Related Services */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-card)" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ marginBottom: "2rem", fontSize: "2rem" }}>{t('yogaAichach.approach.title')}</h2>
            <p style={{ fontSize: "1.1rem", marginBottom: "2rem", color: "var(--text-secondary)" }}>
              {t('yogaAichach.approach.desc')}
            </p>
            <ul style={{ 
              listStyle: "none", 
              paddingLeft: "1.5rem", 
              color: "var(--text-primary)",
              marginBottom: "3rem"
            }}>
              {t('yogaAichach.approach.links').map((link, idx) => (
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
                  <a href={link.url} style={{ color: "inherit", textDecoration: "none", borderBottom: "1px solid var(--accent-olive-light)" }}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)" }}>
              {t('yogaAichach.approach.closing')}
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
