"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useCookieConsent } from "@/context/CookieConsentContext";
import Link from "next/link";

export default function CookieEinstellungenContent() {
  const { t } = useLanguage();
  const { preferences, savePreferences, isClient } = useCookieConsent();
  
  // Local state for the toggles before saving
  const [localPrefs, setLocalPrefs] = useState({
    functional: false,
    marketing: false,
    performance: false
  });
  
  const [showSavedMsg, setShowSavedMsg] = useState(false);

  // Sync local state with context preferences when component mounts or context changes
  useEffect(() => {
    if (isClient) {
      setLocalPrefs({
        functional: preferences.functional,
        marketing: preferences.marketing,
        performance: preferences.performance
      });
    }
  }, [isClient, preferences]);

  const handleToggle = (category) => {
    setLocalPrefs(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleSave = () => {
    savePreferences(localPrefs);
    setShowSavedMsg(true);
    setTimeout(() => setShowSavedMsg(false), 3000);
  };

  if (!isClient) return null; // Avoid hydration mismatch

  // Custom Toggle Component to keep code DRY
  const ToggleSwitch = ({ isActive, isDisabled, onClick }) => {
    return (
      <div 
        onClick={onClick}
        style={{
          width: "44px",
          height: "24px",
          backgroundColor: isDisabled 
            ? "var(--accent-olive-dark)" 
            : (isActive ? "var(--accent-olive-light)" : "rgba(0,0,0,0.2)"),
          borderRadius: "12px",
          position: "relative",
          cursor: isDisabled ? "not-allowed" : "pointer",
          transition: "background-color 0.3s ease",
          pointerEvents: isDisabled ? "none" : "auto",
          flexShrink: 0
        }}
      >
        <div style={{
          width: "20px",
          height: "20px",
          backgroundColor: "var(--white)",
          borderRadius: "50%",
          position: "absolute",
          top: "2px",
          left: isActive ? "22px" : "2px",
          transition: "left 0.3s ease",
          boxShadow: "0 1px 3px rgba(0,0,0,0.2)"
        }} />
      </div>
    );
  };

  return (
    <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 2rem" }}>
      <h1 style={{
        fontFamily: "var(--font-caudex)",
        fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
        color: "var(--text-primary)",
        marginBottom: "2rem",
        lineHeight: 1.15
      }}>
        {t('cookiePage.title')}
      </h1>

      <p style={{
        fontFamily: "var(--font-josefin)",
        fontSize: "1rem",
        color: "var(--text-secondary)",
        lineHeight: 1.9,
        marginBottom: "1rem"
      }}>
        {t('cookiePage.intro')}
      </p>

      <div style={{ marginBottom: "3rem" }}>
        <Link href="/impressum" style={{ color: "var(--accent-olive-light)", textDecoration: "none", fontFamily: "var(--font-josefin)" }} onMouseEnter={e => e.currentTarget.style.textDecoration = "underline"} onMouseLeave={e => e.currentTarget.style.textDecoration = "none"}>
          {t('footer.copyright').includes('Imprint') ? 'Imprint' : 'Impressum'}
        </Link>
        {" | "}
        <Link href="/datenschutz" style={{ color: "var(--accent-olive-light)", textDecoration: "none", fontFamily: "var(--font-josefin)" }} onMouseEnter={e => e.currentTarget.style.textDecoration = "underline"} onMouseLeave={e => e.currentTarget.style.textDecoration = "none"}>
          {t('footer.copyright').includes('Privacy') ? 'Privacy Policy' : 'Datenschutz'}
        </Link>
      </div>

      {/* Category 1: Strictly Necessary */}
      <section style={{ marginBottom: "var(--space-lg)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-md)" }}>
          <h2 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "1.2rem",
            color: "var(--text-primary)",
            margin: 0
          }}>
            {t('cookiePage.necessary_title')}
          </h2>
          <ToggleSwitch isActive={true} isDisabled={true} />
        </div>
        
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
          {t('cookiePage.necessary_desc')}
        </p>

        <div style={{ padding: "1.5rem", backgroundColor: "rgba(0,0,0,0.03)", borderRadius: "8px" }}>
          <h3 style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-primary)", marginTop: 0, marginBottom: "0.5rem" }}>
            Cloudflare
          </h3>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.7, margin: 0, marginBottom: "1rem" }}>
            Cloudflare ist ein Dienst, der die Sicherheit und Geschwindigkeit von Webseiten erhöht. Cloudflare bietet ein Content Delivery Network ("CDN"), um die Ladezeiten der Website zu verbessern. Die Nutzung eines CDN ermöglicht es dem Nutzer, Inhalte mit Hilfe regional oder international verteilter Server zum schnelleren Abruf bereitzustellen. Anbieter: Cloudflare Inc., 101 Townsend St, San Francisco, CA 94107 USA<br />
            Cookie-Namen und Speicherdauer: __cfruid (Speicherdauer: Session), __cf_bm (Speicherdauer: 30 Minuten), __cf_clearance (Speicherdauer: 30 Minuten)
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Link href="/cookie-einstellungen" target="_blank" style={{ color: "var(--accent-olive-light)", textDecoration: "none", fontSize: "0.9rem", fontFamily: "var(--font-josefin)" }} onMouseEnter={e => e.currentTarget.style.textDecoration = "underline"} onMouseLeave={e => e.currentTarget.style.textDecoration = "none"}>
              Cookie-Richtlinie
            </Link>
            <Link href="/datenschutz" target="_blank" style={{ color: "var(--accent-olive-light)", textDecoration: "none", fontSize: "0.9rem", fontFamily: "var(--font-josefin)" }} onMouseEnter={e => e.currentTarget.style.textDecoration = "underline"} onMouseLeave={e => e.currentTarget.style.textDecoration = "none"}>
              Datenschutzerklärung
            </Link>
          </div>
        </div>
      </section>

      {/* Category 2: Functional */}
      <section style={{ marginBottom: "var(--space-lg)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-md)" }}>
          <h2 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "1.2rem",
            color: "var(--text-primary)",
            margin: 0
          }}>
            {t('cookiePage.functional_title')}
          </h2>
          <ToggleSwitch isActive={localPrefs.functional} isDisabled={false} onClick={() => handleToggle('functional')} />
        </div>
        
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
          {t('cookiePage.functional_desc')}
        </p>

        <div style={{ padding: "1.5rem", backgroundColor: "rgba(0,0,0,0.03)", borderRadius: "8px" }}>
          <h3 style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-primary)", marginTop: 0, marginBottom: "0.5rem" }}>
            Google Maps
          </h3>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.7, margin: 0, marginBottom: "1rem" }}>
            Diese Cookies sind Teil von Google Maps. Anbieter: Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA oder Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, wenn Sie in der EU ansässig sind.<br />
            Cookie-Namen und Lebensdauer: UULE (Lebensdauer: 1 Tag), OTZ (Lebensdauer: 2 Wochen), 1P_JAR (Lebensdauer: 1 Monat), SIDCC (Lebensdauer: 1 Jahr), _Secure-3PAPISID (Lebensdauer: 2 Jahre), _Secure-APSID (Lebensdauer: 2 Monate), _Secure-SSID (Lebensdauer: 2 Jahre), HSID (Lebensdauer: 2 Jahre), _Secure-3PSID (Lebensdauer: 2 Jahre), ANID (Lebensdauer: 1 Jahr), SID (Lebensdauer: 2 Jahre), APISID (Lebensdauer: 2 Jahre), _Secure-HSID (Lebensdauer: 2 Monate), SAPISID (Lebensdauer: 2 Jahre), NID (Lebensdauer: 6 Monate)
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Link href="/cookie-einstellungen" target="_blank" style={{ color: "var(--accent-olive-light)", textDecoration: "none", fontSize: "0.9rem", fontFamily: "var(--font-josefin)" }} onMouseEnter={e => e.currentTarget.style.textDecoration = "underline"} onMouseLeave={e => e.currentTarget.style.textDecoration = "none"}>
              Cookie-Richtlinie
            </Link>
            <Link href="/datenschutz" target="_blank" style={{ color: "var(--accent-olive-light)", textDecoration: "none", fontSize: "0.9rem", fontFamily: "var(--font-josefin)" }} onMouseEnter={e => e.currentTarget.style.textDecoration = "underline"} onMouseLeave={e => e.currentTarget.style.textDecoration = "none"}>
              Datenschutzerklärung
            </Link>
          </div>
        </div>
      </section>

      {/* Category 3: Marketing */}
      <section style={{ marginBottom: "var(--space-lg)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-md)" }}>
          <h2 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "1.2rem",
            color: "var(--text-primary)",
            margin: 0
          }}>
            {t('cookiePage.marketing_title')}
          </h2>
          <ToggleSwitch isActive={localPrefs.marketing} isDisabled={false} onClick={() => handleToggle('marketing')} />
        </div>
        
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
          {t('cookiePage.marketing_desc')}
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", fontStyle: "italic" }}>
          {t('cookiePage.no_cookies')}
        </p>
      </section>

      {/* Category 4: Performance */}
      <section style={{ marginBottom: "var(--space-lg)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-md)" }}>
          <h2 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "1.2rem",
            color: "var(--text-primary)",
            margin: 0
          }}>
            {t('cookiePage.performance_title')}
          </h2>
          <ToggleSwitch isActive={localPrefs.performance} isDisabled={false} onClick={() => handleToggle('performance')} />
        </div>
        
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
          {t('cookiePage.performance_desc')}
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", fontStyle: "italic" }}>
          {t('cookiePage.no_cookies')}
        </p>
      </section>

      {/* Save Button */}
      <div style={{ marginTop: "3rem", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "1rem" }}>
        <button
          onClick={handleSave}
          style={{
            backgroundColor: "var(--accent-olive-dark)",
            color: "var(--white)",
            border: "none",
            padding: "1rem 2rem",
            fontFamily: "var(--font-josefin)",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontSize: "0.9rem",
            cursor: "pointer",
            transition: "opacity 0.3s ease"
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
        >
          {t('cookiePage.save')}
        </button>
        {showSavedMsg && (
          <span style={{ 
            fontFamily: "var(--font-josefin)", 
            fontSize: "0.9rem", 
            color: "var(--accent-olive-dark)",
            animation: "fadeInOut 3s ease forwards"
          }}>
            {t('cookiePage.saved')}
          </span>
        )}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes fadeInOut {
            0% { opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { opacity: 0; }
          }
        `}} />
      </div>
    </div>
  );
}
