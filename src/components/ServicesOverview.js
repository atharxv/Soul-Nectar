"use client";
import { useState, useEffect, useRef } from "react";
import FadeIn from "./FadeIn";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { useLanguage } from "@/context/LanguageContext";
import { TopographicBackground, BotanicalIllustration } from "./DecorativePatterns";

export default function ServicesOverview() {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState(null);
  const modalRef = useRef(null);

  const scrollToCard = (element) => {
    if (!element) return;
    
    const isMobile = window.innerWidth < 768;
    const navbarHeight = 80;
    
    if (isMobile) {
      // On mobile: scroll to top of card minus navbar and extra padding
      const elementTop = element.getBoundingClientRect().top;
      window.scrollBy({
        top: elementTop - navbarHeight - 16,
        behavior: 'smooth'
      });
    } else {
      // On desktop: center the card in viewport
      const elementRect = element.getBoundingClientRect();
      const elementCenter = elementRect.top + elementRect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const offset = elementCenter - viewportCenter;
      window.scrollBy({
        top: offset - navbarHeight / 2,
        behavior: 'smooth'
      });
    }
  };

  const services = [
    {
      id: "heilpraktikerin",
      title: t('services.items.0.title'),
      description: t('services.items.0.description'),
      image: "/practice-room-3.jpg",
      route: "/heilpraktikerin-aichach"
    },
    {
      id: "psychotherapie",
      title: t('services.items.1.title'),
      description: t('services.items.1.description'),
      bullets: t('services.items.1.bullets'),
      image: "/practice-room-4.jpg",
      route: "/psychotherapie-aichach"
    },
    {
      id: "yogatherapie",
      title: t('services.items.2.title'),
      description: t('services.items.2.description'),
      bullets: t('services.items.2.bullets'),
      image: "/practice-room-1.jpg",
      route: "/yogatherapie-aichach"
    },
    {
      id: "yoga",
      title: t('services.items.3.title'),
      description: t('services.items.3.description'),
      image: "/practice-room-2.jpg",
      route: "/yoga-aichach"
    }
  ];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const activeIndex = services.findIndex(s => s.id === activeId);
  const activeService = activeIndex !== -1 ? services[activeIndex] : null;

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const target = document.getElementById('kontakt');
    if (!target) return;

    const navbarHeight = 80;
    const extraPadding = 40;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = targetPosition - navbarHeight - extraPadding;

    const startPosition = window.scrollY;
    const distance = offsetPosition - startPosition;
    const duration = 1200; // 1.2 seconds for luxurious slow scroll
    let start = null;

    // Premium cinematic easing (easeInOutQuart)
    const easeInOutQuart = (time, begin, change, duration) => {
      if ((time /= duration / 2) < 1) return change / 2 * time * time * time * time + begin;
      return -change / 2 * ((time -= 2) * time * time * time - 2) + begin;
    };

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = easeInOutQuart(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  // Dynamic positioning for the content-driven modal overlay
  let overlayPosition = {};
  if (isMobile) {
    overlayPosition = { top: "2vh", left: "2%", width: "96%", bottom: "auto" };
  } else {
    if (activeIndex === 0) overlayPosition = { top: 0, left: 0, width: "100%" };
    else if (activeIndex === 1) overlayPosition = { top: 0, right: 0, width: "100%" };
    else if (activeIndex === 2) overlayPosition = { bottom: 0, left: 0, width: "100%" };
    else if (activeIndex === 3) overlayPosition = { bottom: 0, right: 0, width: "100%" };
  }

  return (
    <section id="services" className="section-padding" style={{ backgroundColor: "var(--bg-color)" }}>
      <div className="container" style={{ textAlign: "center", position: "relative" }}>
        
        <FadeIn>
          <span className="section-subtitle">{t('services.subtitle')}</span>
        </FadeIn>
        
        <div className="services-outer-panel" style={{
          backgroundColor: "var(--accent-olive-light)",
          borderRadius: "40px 40px 0 0",
          padding: "5rem 3rem",
          marginTop: "2rem",
          position: "relative"
        }}>
          {/* Topographic repeating pattern overlay */}
          <TopographicBackground variant="a" instanceId="services-overview" />

          {/* Decorative Botanical Leaf Stem */}
          <BotanicalIllustration 
            variant="leaf" 
            className="hide-mobile" 
            style={{ top: "20px", right: "30px", opacity: 0.22, transform: "rotate(20deg)" }} 
          />

          <FadeIn>
            <h2 style={{ color: "var(--bg-card)", marginBottom: "4rem", fontSize: "2.8rem", textAlign: "left" }}>{t('services.title')}</h2>
          </FadeIn>
          
          {/* STATIC BACKGROUND GRID */}
          <div className="services-grid" style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: "2.5rem",
            position: "relative"
          }}>
            {services.map((service, index) => {
              const isSelected = activeId === service.id;
              
              return (
                <div key={service.id} className="service-slot" style={{ position: "relative" }}>
                  
                  {/* PREVIEW CARD */}
                  <motion.div 
                    onClick={() => setActiveId(isSelected ? null : service.id)}
                    animate={{ 
                      scale: activeId && !isSelected ? 0.95 : 1, 
                      opacity: activeId && !isSelected ? 0.5 : (isSelected ? 0 : 1),
                      filter: activeId && !isSelected ? "blur(2px)" : "blur(0px)"
                    }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid rgba(0,0,0,0.08)",
                      overflow: "hidden",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "left",
                      cursor: "pointer",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.02)"
                    }}
                    className="preview-card"
                    whileHover={!isSelected ? { y: -8, boxShadow: "0 15px 40px rgba(0,0,0,0.06)" } : {}}
                  >
                    {/* Flush edge Image Wrapper */}
                    <div 
                      style={{ 
                        width: "100%", 
                        height: "240px", 
                        borderRadius: "var(--radius-md) var(--radius-md) 0 0", 
                        overflow: "hidden", 
                        position: "relative" 
                      }}
                    >
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill 
                        sizes="(max-width: 768px) 100vw, 25vw" 
                        style={{ objectFit: "cover", transition: "transform 0.8s var(--ease-lux)" }} 
                        className="preview-img" 
                      />
                    </div>

                    {/* Card Text Content with generous spacing padding */}
                    <div style={{ padding: "2rem 2.5rem 2.5rem 2.5rem" }}>
                      <h3 style={{ fontSize: "1.6rem", marginBottom: "1.2rem", color: "var(--text-primary)" }}>{service.title}</h3>
                      <p style={{ color: "var(--text-secondary)", fontSize: "1rem", margin: 0 }}>
                        {service.description.length > 110 ? `${service.description.substring(0, 110)}...` : service.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}

            {/* ELEVATED FOREGROUND OVERLAY */}
            <AnimatePresence>
              {activeId && (
                <div 
                  style={{ position: "absolute", zIndex: 20, pointerEvents: "none", ...overlayPosition }}
                >
                  <motion.div
                    ref={modalRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ 
                      duration: 0.45,
                      ease: [0.25, 1, 0.5, 1]
                    }}
                    onAnimationComplete={(definition) => {
                      if (definition.opacity === 1 && modalRef.current) {
                        scrollToCard(modalRef.current);
                      }
                    }}
                    style={{
                      backgroundColor: "var(--bg-card)",
                      /* Approved exception: expanded service card panel — larger radius for floating panel feel */
                      borderRadius: "16px",
                      width: "100%",
                      maxWidth: "680px",
                      margin: "0 auto",
                      height: "auto",
                      display: "flex",
                      flexDirection: "column",
                      overflow: "hidden", 
                      pointerEvents: "auto",
                      boxShadow: "0 30px 80px rgba(0,0,0,0.15)",
                      border: "1px solid rgba(0,0,0,0.03)",
                      position: "relative"
                    }}
                  >
                    <button 
                      onClick={() => setActiveId(null)} 
                      aria-label={t('services.ariaClose')}
                      style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'var(--bg-card)', color: 'var(--text-primary)', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '50%', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 30, boxShadow: "0 4px 10px rgba(0,0,0,0.05)", transition: "transform 0.3s var(--ease-lux)" }} 
                      onMouseEnter={(e) => e.currentTarget.style.transform = "rotate(90deg)"} 
                      onMouseLeave={(e) => e.currentTarget.style.transform = "none"}
                    >
                      <X size={20} />
                    </button>

                    {/* Premium Animated Text Content Wrapper */}
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                      style={{ 
                        width: "100%", 
                        padding: "var(--space-lg) var(--space-md)", 
                        textAlign: "left", 
                        display: "flex", 
                        flexDirection: "column", 
                        justifyContent: "flex-start", 
                        overflowY: "auto" 
                      }} 
                      className="hide-scrollbar"
                    >
                      <h3 style={{ fontSize: "2.4rem", marginBottom: "1.2rem", color: "var(--text-primary)" }}>{activeService.title}</h3>
                      <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
                        {activeService.description}
                      </p>
                      
                      <motion.div style={{ display: "flex", flexDirection: "column" }}>
                        {activeService.bullets && (
                          <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem" }}>
                            {activeService.bullets.map((b, i) => (
                              <li key={i} style={{ display: "flex", gap: "1rem", marginBottom: "0.8rem", color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                                <span style={{ color: "var(--accent-olive-light)", marginTop: "0.2rem" }}>—</span> {b}
                              </li>
                            ))}
                          </ul>
                        )}
                        {!activeService.bullets && <div style={{ height: "1rem" }} />}
                        <div className="service-cta-group" style={{ display: "flex", gap: "var(--space-sm)", flexWrap: "wrap", paddingBottom: "2rem" }}>
                          {/* PRIMARY CTA */}
                          <a href="#kontakt" onClick={handleSmoothScroll} className="btn-primary" style={{ backgroundColor: "var(--accent-olive-dark)", padding: "1rem 2.5rem", fontSize: "0.9rem" }}>
                            {t('services.btn_book')}
                          </a>
                          
                          {/* SECONDARY CTA */}
                          {activeService.route && (
                            <Link href={activeService.route} className="btn-outline" style={{ padding: "1rem 2.5rem", fontSize: "0.9rem" }}>
                              {t('services.btn_more')}
                            </Link>
                          )}
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
