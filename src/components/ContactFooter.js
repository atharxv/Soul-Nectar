// Requires NEXT_PUBLIC_FORMSPREE_ID in .env.local
// Get your form ID at https://formspree.io
"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TopographicBackground, BotanicalIllustration } from "./DecorativePatterns";

export default function ContactFooter() {
  const { t } = useLanguage();
  const [formStatus, setFormStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`,
        {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' },
        }
      );

      if (response.ok) {
        setFormStatus('success');
        e.target.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <footer id="kontakt" className="section-padding" style={{ backgroundColor: "var(--bg-footer)", color: "var(--white)" }}>
      {/* Topographic repeating pattern overlay */}
      <TopographicBackground variant="c" instanceId="footer" />

      {/* Decorative Botanical Fern Frond on Dark background */}
      <BotanicalIllustration 
        variant="fern" 
        className="hide-mobile" 
        style={{ 
          bottom: "30px", 
          left: "40px", 
          opacity: 0.14, 
          transform: "rotate(-15deg)",
          "--botanical-stroke": "var(--accent-olive-light)" 
        }} 
      />

      <div className="container">
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "4rem",
        }}>
          <div style={{ flex: "1 1 300px" }}>
            <FadeIn>
              <h2 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "2.5rem" }}>{t('footer.title')}</h2>
              <p 
                style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem", marginBottom: "2rem", lineHeight: "1.6" }}
                dangerouslySetInnerHTML={{ __html: t('footer.description') }}
              />
              
              <div style={{ marginBottom: "2.5rem" }}>
                <h3 style={{ fontSize: "1.2rem", color: "var(--white)", marginBottom: "1.5rem", fontFamily: "var(--font-sans)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{t('footer.name')}</h3>
                
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem", color: "rgba(255,255,255,0.8)" }}>
                  <MapPin size={20} style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                  <span dangerouslySetInnerHTML={{ __html: t('footer.address_lines') }} />
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem", color: "rgba(255,255,255,0.8)" }}>
                  <Phone size={20} style={{ flexShrink: 0 }} />
                  <span>0151 151 44049</span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem", color: "rgba(255,255,255,0.8)" }}>
                  <Mail size={20} style={{ flexShrink: 0 }} />
                  <a href="mailto:therapie@soulnectar.de" style={{ textDecoration: "underline", color: "inherit" }}>therapie@soulnectar.de</a>
                </div>
              </div>
              
              <a href="https://wa.me/4915115144049" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.8rem",
                /* WhatsApp brand green — intentional brand exception. Do not replace with a CSS variable. */
                backgroundColor: "#25D366",
                color: "white",
                padding: "0.8rem 1.5rem",
                borderRadius: "4px",
                fontWeight: 500,
                fontSize: "0.85rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                transition: "opacity 0.3s var(--ease-lux)"
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = "0.9"}
              onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
              >
                {t('footer.whatsapp')}
              </a>
            </FadeIn>
          </div>
          
          <div style={{ flex: "1 1 400px" }}>
            <FadeIn delay={0.2}>
              {formStatus === 'success' ? (
                <div style={{
                  padding: "3rem",
                  textAlign: "center",
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "1.1rem",
                  lineHeight: 1.8
                }}>
                  <p style={{ fontSize: "1.3rem", marginBottom: "1rem", fontFamily: "var(--font-serif)" }}>✓</p>
                  <p>{t('footer.form_success')}</p>
                </div>
              ) : (
                <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }} onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="contact-name" style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.85rem", letterSpacing: "0.05em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)" }}>{t('footer.form_name')}</label>
                    <input id="contact-name" name="name" type="text" required style={{
                      width: "100%",
                      padding: "1.5rem",
                      backgroundColor: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "8px",
                      color: "white",
                      outline: "none",
                      fontFamily: "var(--font-sans)",
                      transition: "all 0.3s var(--ease-lux)"
                    }} />
                  </div>
                  <div>
                    <label htmlFor="contact-email" style={{ display: "block", marginBottom: "0.8rem", fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)" }}>{t('footer.form_email')}</label>
                    <input id="contact-email" name="email" type="email" required style={{
                      width: "100%",
                      padding: "1.5rem",
                      backgroundColor: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "8px",
                      color: "white",
                      outline: "none",
                      fontFamily: "var(--font-sans)",
                      transition: "all 0.3s var(--ease-lux)"
                    }} />
                  </div>
                  <div>
                    <label htmlFor="contact-nachricht" style={{ display: "block", marginBottom: "0.8rem", fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)" }}>{t('footer.form_message')}</label>
                    <textarea id="contact-nachricht" name="message" rows="5" required style={{
                      width: "100%",
                      padding: "1.5rem",
                      backgroundColor: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "8px",
                      color: "white",
                      outline: "none",
                      resize: "vertical",
                      fontFamily: "var(--font-sans)",
                      transition: "all 0.3s var(--ease-lux)"
                    }}></textarea>
                  </div>
                  {formStatus === 'error' && (
                    <p style={{ color: "rgba(255,200,200,0.9)", fontSize: "0.9rem" }}>
                      {t('footer.form_error')}
                    </p>
                  )}
                  <button type="submit" className="btn-primary" disabled={formStatus === 'sending'} style={{
                    backgroundColor: "var(--accent-olive-light)",
                    alignSelf: "flex-start",
                    border: "none",
                    color: "var(--text-primary)",
                    opacity: formStatus === 'sending' ? 0.7 : 1,
                  }}>
                    {formStatus === 'sending' ? t('footer.form_sending') : t('footer.form_submit')}
                  </button>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
        
        <div style={{
          marginTop: "4rem",
          paddingTop: "2rem",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          textAlign: "center",
          color: "rgba(255,255,255,0.5)",
          fontSize: "0.8rem",
          fontFamily: "var(--font-josefin)",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          alignItems: "center"
        }}>
          {/* Copyright line — Legal words are real links */}
          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
            {(() => {
              const full = t('footer.copyright').replace('{year}', new Date().getFullYear());
              const parts = full.split(/(Impressum|Datenschutz|Imprint|Privacy Policy)/g);
              
              const linkStyle = {
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                fontFamily: "var(--font-josefin)",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                transition: "opacity 0.3s var(--ease-lux)"
              };

              return (
                <>
                  {parts.map((part, idx) => {
                    if (part === 'Impressum' || part === 'Imprint') {
                      return (
                        <a 
                          key={idx} 
                          href="/impressum" 
                          style={linkStyle}
                          onMouseEnter={e => e.currentTarget.style.opacity = "1"}
                          onMouseLeave={e => e.currentTarget.style.opacity = "0.5"}
                        >
                          {part}
                        </a>
                      );
                    }
                    if (part === 'Datenschutz' || part === 'Privacy Policy') {
                      return (
                        <a 
                          key={idx} 
                          href="/datenschutz" 
                          style={linkStyle}
                          onMouseEnter={e => e.currentTarget.style.opacity = "1"}
                          onMouseLeave={e => e.currentTarget.style.opacity = "0.5"}
                        >
                          {part}
                        </a>
                      );
                    }
                    return <span key={idx}>{part}</span>;
                  })}
                  <span> | </span>
                  <a 
                    href="/cookie-einstellungen" 
                    style={linkStyle}
                    onMouseEnter={e => e.currentTarget.style.opacity = "1"}
                    onMouseLeave={e => e.currentTarget.style.opacity = "0.5"}
                  >
                    {t('footer.copyright').includes('Imprint') ? 'Cookie Settings' : 'Cookie Einstellungen'}
                  </a>
                </>
              );
            })()}
          </div>

          {/* Crafted by Luxury Method credit */}
          <div>
            <a
              href="https://www.luxury-method.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                fontFamily: "var(--font-josefin)",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                transition: "opacity 0.3s var(--ease-lux)"
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = "1"}
              onMouseLeave={e => e.currentTarget.style.opacity = "0.5"}
            >
              Crafted by Luxury Method
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
