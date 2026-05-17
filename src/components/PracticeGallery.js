"use client";
import Link from "next/link";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/context/LanguageContext";

export default function PracticeGallery() {
  const { t } = useLanguage();
  const images = [
    { src: "/practice-room-1.jpg", alt: "Yoga-Raum mit Matten und Klangschale" },
    { src: "/practice-room-4.jpg", alt: "Therapieraum mit Stühlen und Orchidee" },
    { src: "/practice-room-3.jpg", alt: "Therapieraum mit Urkunde" },
    { src: "/practice-room-5.jpg", alt: "Blick in den Therapieraum" },
  ];

  return (
    <section id="fotogalerie" className="section-padding" style={{ backgroundColor: "var(--bg-color)", scrollMarginTop: "120px" }}>
      <div className="container">
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-subtitle">{t('gallery.subtitle')}</span>
            <h2 style={{ marginBottom: "1rem", fontSize: "2.8rem" }}>{t('gallery.title')}</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
              {t('gallery.description')}
            </p>
          </div>
        </FadeIn>

        {/* Single horizontal row — overflow-x scroll on mobile */}
        <FadeIn delay={0.15}>
          <div style={{
            display: "flex",
            gap: "1.25rem",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            paddingBottom: "0.5rem",
            /* hide scrollbar visually */
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}>
            {images.map((img, i) => (
              <div
                key={i}
                style={{
                  flex: "0 0 calc(25% - 1rem)",
                  minWidth: "220px",
                  height: "300px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  cursor: "pointer",
                  scrollSnapAlign: "start",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                  transition: "transform 0.6s var(--ease-lux), box-shadow 0.6s var(--ease-lux)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.08)";
                  e.currentTarget.querySelector(".gallery-inner").style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.04)";
                  e.currentTarget.querySelector(".gallery-inner").style.transform = "scale(1)";
                }}
              >
                <div
                  className="gallery-inner"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url('${img.src}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "transform 1.2s var(--ease-lux)",
                  }}
                  role="img"
                  aria-label={img.alt}
                />
              </div>
            ))}
          </div>
        </FadeIn>

        {/* See More Button */}
        <FadeIn delay={0.3}>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/fotogalerie" className="btn-outline" style={{ display: "inline-block" }}>
              {t('gallery.seeMore') || "Alle Fotos ansehen →"}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
