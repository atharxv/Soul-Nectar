"use client";
import FadeIn from "./FadeIn";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Location() {
  const { t } = useLanguage();

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
              <div className="praxisstandort__map-wrapper">
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
              </div>
              <p className="map-privacy-note">
                {t('location.mapPrivacyNote')}{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('location.mapPrivacyLink')}
                </a>
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
