"use client";

import FadeIn from "@/components/FadeIn";
import Location from "@/components/Location";
import { useLanguage } from "@/context/LanguageContext";
import { TopographicBackground, BotanicalIllustration } from "@/components/DecorativePatterns";

export default function HeilpraktikerContent() {
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
        <TopographicBackground variant="b" instanceId="hero-heilpraktiker" />

        {/* Botanical Illustration: Leaf Stem */}
        <BotanicalIllustration 
          variant="leaf" 
          className="hide-mobile" 
          style={{ bottom: "-20px", right: "-10px", opacity: 0.18, transform: "rotate(15deg)" }} 
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
                dangerouslySetInnerHTML={{ __html: t('heilpraktiker_page.hero_title') }}
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
              >
                {t('heilpraktiker_page.hero_desc')}
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
            backgroundImage: "url('/practice-room-1.jpg')", // real yoga room photo
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

      {/* Was bedeutet Heilpraktiker? */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-color)" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ marginBottom: "2rem", fontSize: "2.5rem" }}>{t('heilpraktiker_page.meaning_title')}</h2>
            <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem", color: "var(--text-secondary)" }}>
              {t('heilpraktiker_page.meaning_desc1')}
            </p>
            <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem", color: "var(--text-secondary)" }}>
              {t('heilpraktiker_page.meaning_desc2')}
            </p>
            
            <ul style={{ 
              listStyle: "none", 
              paddingLeft: "1.5rem", 
              marginBottom: "2rem",
              color: "var(--text-primary)"
            }}>
              {t('heilpraktiker_page.meaning_bullets').map((bullet, idx) => (
                <li key={idx} style={{ 
                  position: "relative", 
                  marginBottom: "0.8rem",
                  fontSize: "1.05rem"
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
            
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", fontWeight: 500 }}>
              {t('heilpraktiker_page.meaning_desc3')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Heilpraktiker Psychotherapie */}
      <section className="section-padding" style={{ backgroundColor: "var(--white)" }}>
        <div className="container">
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            backgroundColor: "var(--bg-color)",
            borderRadius: "8px",
            overflow: "hidden",
            alignItems: "stretch",
            boxShadow: "0 10px 40px rgba(0,0,0,0.03)"
          }}>
            {/* Left Image Side */}
            <div className="cinematic-image-wrapper" style={{
              flex: "1 1 400px",
              minHeight: "400px",
              position: "relative",
              overflow: "hidden"
            }}>
              <div className="cinematic-image" style={{
                position: "absolute",
                top: 0, left: 0, width: "100%", height: "100%",
                backgroundImage: "url('/practice-room-5.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }} />
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
                <h2 style={{ marginBottom: "2rem", fontSize: "2.5rem" }}>{t('heilpraktiker_page.psycho_title')}</h2>
                <p 
                  style={{ fontSize: "1.1rem", marginBottom: "2rem", color: "var(--text-secondary)" }}
                  dangerouslySetInnerHTML={{ __html: t('heilpraktiker_page.psycho_desc') }}
                />
                <a href="/#psychotherapie" style={{
                  fontSize: "0.9rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-primary)",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  borderBottom: "1px solid var(--accent-olive-light)",
                  paddingBottom: "0.2rem",
                  alignSelf: "flex-start"
                }}>
                  {t('heilpraktiker_page.psycho_link')}
                </a>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Ganzheitlicher Ansatz */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-card)" }}>
        <div className="container">
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            backgroundColor: "var(--white)",
            borderRadius: "8px",
            overflow: "hidden",
            alignItems: "stretch",
            flexDirection: "row-reverse",
            boxShadow: "0 10px 40px rgba(0,0,0,0.03)"
          }}>
            {/* Right Image Side */}
            <div className="cinematic-image-wrapper" style={{
              flex: "1 1 400px",
              minHeight: "400px",
              position: "relative",
              overflow: "hidden"
            }}>
              <div className="cinematic-image" style={{
                position: "absolute",
                top: 0, left: 0, width: "100%", height: "100%",
                backgroundImage: "url('/practice-room-2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }} />
            </div>
            
            {/* Left Text Side */}
            <div style={{
              flex: "1 1 400px",
              padding: "5rem 4rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "left"
            }}>
              <FadeIn>
                <h2 style={{ marginBottom: "2rem", fontSize: "2.5rem" }}>{t('heilpraktiker_page.holistic_title')}</h2>
                <p 
                  style={{ fontSize: "1.1rem", marginBottom: "2rem", color: "var(--text-secondary)" }}
                  dangerouslySetInnerHTML={{ __html: t('heilpraktiker_page.holistic_desc1') }}
                />
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
                  <a href="/#yogatherapie" style={{
                    fontSize: "0.9rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--text-primary)",
                    fontWeight: 600,
                    display: "inline-block"
                  }}>
                    {t('heilpraktiker_page.holistic_link1')}
                  </a>
                  <a href="/#yoga" style={{
                    fontSize: "0.9rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--text-primary)",
                    fontWeight: 600,
                    display: "inline-block"
                  }}>
                    {t('heilpraktiker_page.holistic_link2')}
                  </a>
                </div>
                <p 
                  style={{ fontSize: "1.1rem", color: "var(--text-secondary)" }}
                  dangerouslySetInnerHTML={{ __html: t('heilpraktiker_page.holistic_desc2') }}
                />
              </FadeIn>
            </div>
          </div>
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
                <h2 style={{ marginBottom: "2rem", fontSize: "2.5rem" }}>{t('heilpraktiker_page.about_title')}</h2>
                <p style={{ fontSize: "1.1rem", marginBottom: "3rem", color: "var(--text-secondary)" }}>
                  {t('heilpraktiker_page.about_desc')}
                </p>
                
                <h2 style={{ marginBottom: "1.5rem", fontSize: "1.8rem" }}>{t('heilpraktiker_page.qual_title')}</h2>
                <ul style={{ 
                  listStyle: "none", 
                  paddingLeft: "1.5rem", 
                  color: "var(--text-primary)"
                }}>
                  {t('heilpraktiker_page.qual_bullets').map((bullet, idx) => (
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
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <Location />
    </>
  );
}
