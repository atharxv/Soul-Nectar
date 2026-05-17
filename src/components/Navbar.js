"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Languages } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
// [MOBILE MENU IMPROVEMENT 7] Import framer-motion directly in Navbar.js
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t, isClient } = useLanguage();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);

      // Hide when scrolling down past 200px, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(false);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: "all 0.8s var(--ease-lux), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
    transform: isHidden && !isOpen ? "translateY(-100%)" : "translateY(0)",
    padding: isScrolled ? "0.8rem 0" : "1.5rem 0",
    backgroundColor: isScrolled ? "var(--accent-olive-dark)" : "transparent",
  };

  return (
    <nav style={navStyles} className={isScrolled || isOpen ? "nav-scrolled" : ""}>
      <div className="container" style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center" 
      }}>
        {/* Logo — links to homepage */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <div style={{ 
            display: "flex", 
            flexDirection: "row", 
            alignItems: "center",
            gap: "0.6rem"
          }}>
            <Image 
              src="/soul-nectar-logo.png" 
              alt="Soul Nectar Logo" 
              width={40} 
              height={40}
              style={{ 
                objectFit: "contain",
                transition: "opacity 0.8s var(--ease-lux)"
              }}
              priority
            />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <span className="nav-logo-title" style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "1.2rem", 
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "color 0.8s var(--ease-lux)"
              }}>
                Soul Nectar
              </span>
              <span className="nav-logo-subtitle" style={{ 
                fontSize: "0.6rem", 
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
                transition: "color 0.8s var(--ease-lux)"
              }}>
                Therapy & Yoga
              </span>
            </div>
          </div>
        </Link>
        
        <div style={{ 
          display: "flex", 
          gap: "3rem",
          flex: "2 1 0",
          justifyContent: "center",
          alignItems: "center"
        }} className="desktop-menu">
          <Link href="/" className="nav-link">{t('nav.home')}</Link>
          
          <div className="nav-dropdown">
            <span className="nav-link" style={{ cursor: "default", display: "flex", alignItems: "center" }}>
              {t('nav.services')}
              <ChevronDown size={14} className="nav-dropdown-icon" style={{ marginLeft: "4px" }} />
            </span>
            <div className="nav-dropdown-content">
              <Link href="/heilpraktiker-aichach" className="nav-dropdown-item">{t('services.items.0.title')}</Link>
              <Link href="/psychotherapie-aichach" className="nav-dropdown-item">{t('services.items.1.title')}</Link>
              <Link href="/yogatherapie-aichach" className="nav-dropdown-item">{t('services.items.2.title')}</Link>
              <Link href="/yoga-aichach" className="nav-dropdown-item">{t('services.items.3.title')}</Link>
            </div>
          </div>

          <Link href="/ueber-mich" className="nav-link">{t('nav.about')}</Link>
          <Link href="/fotogalerie" className="nav-link">{t('nav.gallery')}</Link>
          <Link href="/#kontakt" className="nav-link">{t('nav.contact')}</Link>
        </div>

        <div style={{
          flex: "1 1 0",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "stretch",
          gap: "1rem",
          height: "44px"
        }} className="nav-book-btn">
          
          <div className="nav-lang-dropdown" style={{ display: "flex", alignItems: "stretch" }}>
            <button className="nav-lang-btn" style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              width: "44px",
              borderRadius: "4px",
              backgroundColor: "var(--accent-olive-light)",
              color: "var(--white)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s var(--ease-lux)"
            }}
            onMouseEnter={(e) => {
              if (!isScrolled) e.currentTarget.style.backgroundColor = "var(--accent-olive-dark)";
            }}
            onMouseLeave={(e) => {
              if (!isScrolled) e.currentTarget.style.backgroundColor = "var(--accent-olive-light)";
            }}
            >
              <Languages size={18} />
            </button>
            <div className="nav-lang-content">
               <div style={{ display: "flex", gap: "0.2rem", padding: "0.4rem" }}>
                 <button onClick={() => setLang('EN')} className={`lang-option ${lang === 'EN' ? 'active' : ''}`}>EN</button>
                 <button onClick={() => setLang('DE')} className={`lang-option ${lang === 'DE' ? 'active' : ''}`}>DE</button>
               </div>
            </div>
          </div>

          <Link href="/#kontakt" className="nav-cta-btn" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "var(--accent-olive-light)",
            color: "var(--white)",
            padding: "0 1.5rem",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 500,
            transition: "all 0.8s var(--ease-lux)",
            borderRadius: "4px"
          }}
          onMouseEnter={(e) => {
            if (!isScrolled) e.currentTarget.style.backgroundColor = "var(--accent-olive-dark)";
          }}
          onMouseLeave={(e) => {
            if (!isScrolled) e.currentTarget.style.backgroundColor = "var(--accent-olive-light)";
          }}
          >
            {t('nav.book')}
          </Link>
        </div>

        {/* [MOBILE MENU IMPROVEMENT 6] Standardised Close / Menu toggle button at 24px Lucide size */}
        <button 
          className="mobile-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? t('nav.ariaCloseMenu') : t('nav.ariaOpenMenu')}
          style={{ display: "none", color: "var(--text-primary)", position: "relative", zIndex: 60 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
        {/* [MOBILE MENU IMPROVEMENT 7] Staggered entrance animation wrapped in AnimatePresence */}
        <AnimatePresence>
          {isOpen && (
            <div className="mobile-menu-inner">
              {/* Item 1: Startseite */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1], delay: 0.0 }}
                style={{ width: "100%", display: "flex", justifyContent: "center" }}
              >
                <Link href="/" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
                  {t('nav.home')}
                </Link>
              </motion.div>

              {/* [MOBILE MENU IMPROVEMENT 2] Center-aligned horizontal separator line */}
              <motion.div 
                className="mobile-nav-divider"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1], delay: 0.05 }}
              />

              {/* Item 2: Leistungen and nested sub-links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
                style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}
              >
                {/* [MOBILE MENU IMPROVEMENT 3] Left-border nested group style */}
                <div className="mobile-nav-group">
                  <span className="mobile-nav-link-static">{t('nav.services')}</span>
                  <Link href="/heilpraktiker-aichach" className="mobile-nav-sublink" onClick={() => setIsOpen(false)}>
                    {t('services.items.0.title')}
                  </Link>
                  <Link href="/psychotherapie-aichach" className="mobile-nav-sublink" onClick={() => setIsOpen(false)}>
                    {t('services.items.1.title')}
                  </Link>
                  <Link href="/yogatherapie-aichach" className="mobile-nav-sublink" onClick={() => setIsOpen(false)}>
                    {t('services.items.2.title')}
                  </Link>
                  <Link href="/yoga-aichach" className="mobile-nav-sublink" onClick={() => setIsOpen(false)}>
                    {t('services.items.3.title')}
                  </Link>
                </div>
              </motion.div>

              {/* [MOBILE MENU IMPROVEMENT 2] Center-aligned horizontal separator line */}
              <motion.div 
                className="mobile-nav-divider"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
              />

              {/* Item 3: Über Mich */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
                style={{ width: "100%", display: "flex", justifyContent: "center" }}
              >
                <Link href="/ueber-mich" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
                  {t('nav.about')}
                </Link>
              </motion.div>

              {/* [MOBILE MENU IMPROVEMENT 2] Center-aligned horizontal separator line */}
              <motion.div 
                className="mobile-nav-divider"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1], delay: 0.25 }}
              />

              {/* Item 4: Galerie */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
                style={{ width: "100%", display: "flex", justifyContent: "center" }}
              >
                <Link href="/fotogalerie" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
                  {t('nav.gallery')}
                </Link>
              </motion.div>

              {/* [MOBILE MENU IMPROVEMENT 2] Center-aligned horizontal separator line */}
              <motion.div 
                className="mobile-nav-divider"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1], delay: 0.35 }}
              />

              {/* Item 5: Kontakt */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1], delay: 0.4 }}
                style={{ width: "100%", display: "flex", justifyContent: "center" }}
              >
                <Link href="/#kontakt" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
                  {t('nav.contact')}
                </Link>
              </motion.div>

              {/* [MOBILE MENU IMPROVEMENT 4] Primary CTA Button linking to /termine-kontakt */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1], delay: 0.45 }}
                style={{ width: "100%", display: "flex", justifyContent: "center" }}
              >
                <Link href="/termine-kontakt" className="btn-primary mobile-menu-cta" onClick={() => setIsOpen(false)}>
                  {t('nav.book')}
                </Link>
              </motion.div>

              {/* [MOBILE MENU IMPROVEMENT 5] DE | EN language switcher toggles LanguageContext */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1], delay: 0.5 }}
                style={{ width: "100%", display: "flex", justifyContent: "center" }}
              >
                <div className="mobile-lang-switcher">
                  <button 
                    onClick={() => setLang('DE')} 
                    className={`mobile-lang-btn-opt ${lang === 'DE' ? 'active' : ''}`}
                    aria-label={t('nav.ariaLangDE')}
                  >
                    DE
                  </button>
                  <span className="mobile-lang-separator">|</span>
                  <button 
                    onClick={() => setLang('EN')} 
                    className={`mobile-lang-btn-opt ${lang === 'EN' ? 'active' : ''}`}
                    aria-label={t('nav.ariaLangEN')}
                  >
                    EN
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
