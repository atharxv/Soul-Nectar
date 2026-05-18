"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useCookieConsent } from "@/context/CookieConsentContext";
import Link from "next/link";


export default function CookieBanner() {
  const { t } = useLanguage();
  const { isClient, hasConsented, acceptAll, rejectAll } = useCookieConsent();

  // Guard: only render on client, and only if not consented
  if (!isClient || hasConsented) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      backgroundColor: "var(--bg-footer)",
      color: "var(--white)",
      zIndex: 1000,
      padding: "1.5rem",
      boxShadow: "0 -4px 20px rgba(0,0,0,0.15)",
      fontFamily: "var(--font-josefin)"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        alignItems: "center",
      }}>
        <div style={{ textAlign: "center", fontSize: "0.95rem", lineHeight: 1.6 }}>
          {t('cookieBanner.message')} 
          {" "}
          <Link href="/impressum" style={{ color: "var(--accent-olive-light)", textDecoration: "underline" }}>
            {t('footer.copyright').includes('Imprint') ? 'Imprint' : 'Impressum'}
          </Link>
          {" & "}
          <Link href="/datenschutz" style={{ color: "var(--accent-olive-light)", textDecoration: "underline" }}>
            {t('footer.copyright').includes('Privacy') ? 'Privacy Policy' : 'Datenschutz'}
          </Link>.
        </div>
        
        <div style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <button
            onClick={acceptAll}
            className="btn"
            style={{
              backgroundColor: "var(--accent-olive-light)",
              color: "var(--white)",
              border: "none",
              padding: "0.8rem 1.5rem",
              fontFamily: "var(--font-josefin)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              fontSize: "0.8rem",
              cursor: "pointer",
              transition: "opacity 0.3s var(--ease-lux)"
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.8"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >
            {t('cookieBanner.accept')}
          </button>
          
          <button
            onClick={rejectAll}
            className="btn"
            style={{
              backgroundColor: "transparent",
              color: "var(--white)",
              border: "1px solid var(--white)",
              padding: "0.8rem 1.5rem",
              fontFamily: "var(--font-josefin)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              fontSize: "0.8rem",
              cursor: "pointer",
              transition: "opacity 0.3s var(--ease-lux), background-color 0.3s"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = "var(--white)";
              e.currentTarget.style.color = "var(--bg-footer)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--white)";
            }}
          >
            {t('cookieBanner.necessary')}
          </button>
          
          <Link 
            href="/cookie-einstellungen"
            style={{
              color: "var(--white)",
              textDecoration: "underline",
              fontFamily: "var(--font-josefin)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              fontSize: "0.8rem",
              marginLeft: "1rem"
            }}
          >
            {t('cookieBanner.settings')}
          </Link>
        </div>
      </div>
    </div>
  );
}
