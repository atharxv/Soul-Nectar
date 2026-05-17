"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Location() {
  const { t } = useLanguage();
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--bg-card)" }}>
      <div className="container">
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "4rem",
          alignItems: "center"
        }}>
          <div style={{ flex: "1 1 400px" }}>
            <FadeIn>
              <span className="section-subtitle">{t('location.subtitle')}</span>
              <h2 style={{ marginBottom: "1.5rem", fontSize: "2.5rem" }}>{t('location.title')}</h2>
              <p 
                style={{ color: "var(--text-secondary)", fontSize: "1.1rem", marginBottom: "2rem" }}
                dangerouslySetInnerHTML={{ __html: t('location.description') }}
              />
              
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem" }}>
                {t('location.cities').map((loc, i) => (
                  <li key={i} style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "1rem", 
                    marginBottom: "1rem", 
                    color: "var(--text-primary)", 
                    fontSize: "1.1rem" 
                  }}>
                    <MapPin size={20} style={{ color: "var(--accent-olive-light)" }} />
                    {loc}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
          
          <div style={{ flex: "1 1 400px", minHeight: "350px" }} className="praxisstandort__map-container">
            <FadeIn delay={0.2} style={{ height: "100%" }}>
              {/* [GDPR COMPLIANT TWO-CLICK GOOGLE MAP] */}
              <div className="praxisstandort__map-wrapper">
                {mapLoaded ? (
                  <iframe
                    src="https://maps.google.com/maps?q=Walchenstr.+33,+86551+Aichach&output=embed&z=15"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={t('location.mapTitle')}
                    aria-label={t('location.mapAriaLabel')}
                  />
                ) : (
                  <div className="praxisstandort__map-overlay">
                    <div style={{ textAlign: "center", padding: "2rem" }}>
                      <MapPin size={48} style={{ marginBottom: "1rem", color: "var(--white)", opacity: 0.9 }} />
                      <p style={{ 
                        fontWeight: 600, 
                        letterSpacing: "0.05em", 
                        textTransform: "uppercase", 
                        color: "var(--white)",
                        fontSize: "0.95rem",
                        marginBottom: "0.5rem" 
                      }}>
                        {t('location.mapTitle')}
                      </p>
                      <p style={{ 
                        fontSize: "0.8rem", 
                        color: "var(--white)",
                        opacity: 0.85, 
                        marginBottom: "1.5rem", 
                        maxWidth: "320px", 
                        marginLeft: "auto", 
                        marginRight: "auto",
                        lineHeight: 1.4
                      }}>
                        {t('location.mapLoadNote')}
                      </p>
                      <button 
                        onClick={() => setMapLoaded(true)}
                        className="btn-primary"
                        style={{ 
                          minHeight: "44px", 
                          padding: "0.8rem 2rem", 
                          fontSize: "0.8rem",
                          backgroundColor: "var(--white)",
                          color: "var(--accent-olive-dark)",
                          border: "none",
                          cursor: "pointer"
                        }}
                      >
                        {t('location.mapLoadButton')}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
