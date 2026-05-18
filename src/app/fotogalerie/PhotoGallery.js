"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Dummy image data representing the 3 columns in the Figma design
const galleryImages = [
  { id: 1, src: "/nicole-stretch.png",   category: "YOGA",    height: 380, alt: "Nicole beim Stretching im Therapieraum" },
  { id: 2, src: "/nicole-tree-pose.jpg", category: "YOGA",    height: 480, alt: "Nicole in der Baumpose im Freien" },
  { id: 3, src: "/nicole-namaste.jpg",   category: "YOGA",    height: 500, alt: "Nicole in Meditationshaltung mit Blumen" },
  { id: 4, src: "/practice-room-1.jpg",  category: "THERAPY", height: 400, alt: "Yoga-Raum mit Matten und Klangschale" },
  { id: 5, src: "/practice-room-2.jpg",  category: "THERAPY", height: 350, alt: "Yoga-Raum mit Lebensbaum-Wanddeko" },
  { id: 6, src: "/practice-room-3.jpg",  category: "THERAPY", height: 500, alt: "Therapieraum mit Urkunde" },
  { id: 7, src: "/practice-room-4.jpg",  category: "THERAPY", height: 420, alt: "Therapieraum mit Stühlen und Orchidee" },
  { id: 8, src: "/practice-room-5.jpg",  category: "THERAPY", height: 380, alt: "Blick in den Therapieraum" },
];

export default function PhotoGallery() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filters = [
    { key: "ALL",     label: t("fotogalerie.filters.all") },
    { key: "YOGA",    label: t("fotogalerie.filters.yoga") },
    { key: "THERAPY", label: t("fotogalerie.filters.therapy") },
  ];

  const filteredImages = activeFilter === "ALL" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  // Keyboard accessibility for Lightbox
  useEffect(() => {
    const handleNext = (e) => {
      e?.stopPropagation();
      setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
    };

    const handlePrev = (e) => {
      e?.stopPropagation();
      setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
    };

    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredImages.length]);

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--accent-olive-light)" }}>
      <div className="container">
        
        {/* Filter Bar */}
        <FadeIn>
          <div style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "2rem",
            marginBottom: "4rem"
          }}>
            {filters.map(filter => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                style={{
                  background: "none",
                  border: "none",
                  borderBottom: activeFilter === filter.key ? "2px solid var(--text-primary)" : "2px solid transparent",
                  paddingBottom: "0.2rem",
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  letterSpacing: "0.1em",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  transition: "all 0.3s var(--ease-lux)"
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Masonry Grid */}
        <FadeIn delay={0.2}>
          <div className="masonry-grid">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  key={img.id}
                  className="masonry-item"
                  onClick={() => setLightboxIndex(idx)}
                  style={{ cursor: "pointer", marginBottom: "1.5rem" }}
                >
                  <div style={{
                    position: "relative",
                    width: "100%",
                    height: `${img.height}px`,
                    border: "2px solid var(--white)",
                    overflow: "hidden"
                  }}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      style={{ objectFit: "cover", transition: "transform 0.5s var(--ease-lux)" }}
                      className="gallery-image-hover"
                      priority={idx < 3}
                      loading={idx < 3 ? "eager" : "lazy"}
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              /* One-time approved exception matching --text-primary value */
              backgroundColor: "rgba(56, 63, 50, 0.85)",
              zIndex: 99999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem"
            }}
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              aria-label={t("fotogalerie.lightbox.close")}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "rgba(0,0,0,0.4)",
                border: "none",
                borderRadius: "50%",
                color: "var(--white)",
                cursor: "pointer",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 100000,
                transition: "background 0.3s var(--ease-lux)"
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(0,0,0,0.6)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "rgba(0,0,0,0.4)"}
            >
              <X size={24} />
            </button>

            {/* Prev Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
              }}
              aria-label={t("fotogalerie.lightbox.prev")}
              style={{
                position: "absolute",
                left: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.4)",
                border: "none",
                borderRadius: "50%",
                color: "var(--white)",
                cursor: "pointer",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 100000,
                transition: "background 0.3s var(--ease-lux)"
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(0,0,0,0.6)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "rgba(0,0,0,0.4)"}
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
              }}
              aria-label={t("fotogalerie.lightbox.next")}
              style={{
                position: "absolute",
                right: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.4)",
                border: "none",
                borderRadius: "50%",
                color: "var(--white)",
                cursor: "pointer",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 100000,
                transition: "background 0.3s var(--ease-lux)"
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(0,0,0,0.6)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "rgba(0,0,0,0.4)"}
            >
              <ChevronRight size={24} />
            </button>

            {/* Image Wrapper */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                position: "relative",
                width: "90vw",
                height: "85svh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[lightboxIndex]?.src}
                alt={filteredImages[lightboxIndex]?.alt}
                fill
                sizes="90vw"
                style={{ objectFit: "contain" }}
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
