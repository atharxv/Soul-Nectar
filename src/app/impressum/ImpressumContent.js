"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function ImpressumContent() {
  const { language } = useLanguage();

  if (language === 'en') {
    return (
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 2rem" }}>
        {/* H1 */}
        <h1 style={{
          fontFamily: "var(--font-caudex)",
          fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
          color: "var(--text-primary)",
          marginBottom: "3rem",
          lineHeight: 1.15
        }}>
          Imprint
        </h1>

        {/* Section 1 */}
        <section style={{ marginBottom: "var(--space-lg)" }}>
          <h2 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            marginBottom: "var(--space-md)"
          }}>
            Information in accordance with § 5 TMG
          </h2>
          <p style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "1rem",
            color: "var(--text-secondary)",
            lineHeight: 1.9,
            marginBottom: "var(--space-md)"
          }}>
            Naturopath for Psychotherapy (HeilprG), Nicole-Marina Hötzel,
            also responsible for the content of the homepage according to § 55 Abs. 2 RStV
          </p>
          <p style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "1rem",
            color: "var(--text-secondary)",
            lineHeight: 2
          }}>
            Nicole-Marina Hötzel<br />
            Private Practice for Psychotherapy (HeilprG)<br />
            Beim Schnarrbrunnen 15<br />
            86150 Augsburg<br />
            Mobile: 0151 151 44049<br />
            Email:{" "}
            <a
              href="mailto:Nicole.hoetzel@icloud.com"
              style={{ color: "var(--accent-olive-light)", textDecoration: "none" }}
              onMouseEnter={e => e.currentTarget.style.textDecoration = "underline"}
              onMouseLeave={e => e.currentTarget.style.textDecoration = "none"}
            >
              Nicole.hoetzel@icloud.com
            </a>
          </p>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid rgba(0,0,0,0.07)", marginBottom: "var(--space-lg)" }} />

        {/* Section 2 */}
        <section style={{ marginBottom: "var(--space-lg)" }}>
          <h2 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            marginBottom: "var(--space-md)"
          }}>
            Statutory professional title
          </h2>
          <p style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "1rem",
            color: "var(--text-secondary)",
            lineHeight: 1.9,
            marginBottom: "1rem"
          }}>
            Naturopath for Psychotherapy (awarded in the Federal Republic of Germany)<br />
            Competent supervisory authority: Public Health Office Augsburg, Hoher Weg 8, 86152 Augsburg;
          </p>
          <a
            href="https://www.augsburg.de/buergerservice-rathaus/buergerservice/aemter-behoerden/staedtische-dienststellen/g/gesundheitsamt/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-josefin)",
              fontSize: "1rem",
              color: "var(--accent-olive-light)",
              textDecoration: "none"
            }}
            onMouseEnter={e => e.currentTarget.style.textDecoration = "underline"}
            onMouseLeave={e => e.currentTarget.style.textDecoration = "none"}
          >
            Link
          </a>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid rgba(0,0,0,0.07)", marginBottom: "var(--space-lg)" }} />

        {/* Section 3 */}
        <section style={{ marginBottom: "var(--space-lg)" }}>
          <h2 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            marginBottom: "var(--space-md)"
          }}>
            Professional regulations
          </h2>
          <p style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "1rem",
            color: "var(--text-secondary)",
            lineHeight: 1.9,
            marginBottom: "1rem"
          }}>
            Act on the Professional Practice of Healing without a Medical License
            (Naturopath Act) and Implementing Regulation: Can be read online at
          </p>
          <div style={{ lineHeight: 2 }}>
            <a
              href="http://www.gesetze-im-internet.de/heilprg/index.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-josefin)",
                fontSize: "1rem",
                color: "var(--accent-olive-light)",
                textDecoration: "none",
                display: "block",
                marginBottom: "0.4rem"
              }}
              onMouseEnter={e => e.currentTarget.style.textDecoration = "underline"}
              onMouseLeave={e => e.currentTarget.style.textDecoration = "none"}
            >
              http://www.gesetze-im-internet.de/heilprg/index.html
            </a>
            <span style={{
              fontFamily: "var(--font-josefin)",
              fontSize: "1rem",
              color: "var(--text-secondary)",
              display: "block",
              marginBottom: "0.4rem"
            }}>
              and
            </span>
            <a
              href="http://www.gesetze-im-internet.de/heilprgdv_1/index.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-josefin)",
                fontSize: "1rem",
                color: "var(--accent-olive-light)",
                textDecoration: "none",
                display: "block"
              }}
              onMouseEnter={e => e.currentTarget.style.textDecoration = "underline"}
              onMouseLeave={e => e.currentTarget.style.textDecoration = "none"}
            >
              http://www.gesetze-im-internet.de/heilprgdv_1/index.html
            </a>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid rgba(0,0,0,0.07)", marginBottom: "var(--space-lg)" }} />

        {/* Section 4 */}
        <section style={{ marginBottom: "var(--space-lg)" }}>
          <h2 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            marginBottom: "var(--space-md)"
          }}>
            Code of professional conduct
          </h2>
          <p style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "1rem",
            color: "var(--text-secondary)",
            lineHeight: 1.9,
            marginBottom: "0.8rem"
          }}>
            Can be read online at{" "}
            <a
              href="https://www.vfp.de/verband/berufsordnung.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--accent-olive-light)", textDecoration: "none" }}
              onMouseEnter={e => e.currentTarget.style.textDecoration = "underline"}
              onMouseLeave={e => e.currentTarget.style.textDecoration = "none"}
            >
              Link
            </a>
          </p>
          <p style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "1rem",
            color: "var(--text-secondary)",
            lineHeight: 1.9
          }}>
            Healing activity is exempt from VAT in accordance with § 4 No.14 UStG.
          </p>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid rgba(0,0,0,0.07)", marginBottom: "var(--space-lg)" }} />

        {/* Section 5 */}
        <section style={{ marginBottom: "var(--space-lg)" }}>
          <h2 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            marginBottom: "var(--space-md)"
          }}>
            Professional liability insurance
          </h2>
          <p style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "1rem",
            color: "var(--text-secondary)",
            lineHeight: 1.9
          }}>
            Signal Iduna Group, Kapstadtring 8, 22297 Hamburg;<br />
            Scope: Federal Republic of Germany
          </p>
        </section>
      </div>
    );
  }

  return (

    <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 2rem" }}>

      {/* H1 */}
      <h1 style={{
        fontFamily: "var(--font-caudex)",
        fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
        color: "var(--text-primary)",
        marginBottom: "3rem",
        lineHeight: 1.15
      }}>
        Impressum
      </h1>

      {/* Section 1 — Angaben gemäß § 5 TMG */}
      <section style={{ marginBottom: "var(--space-lg)" }}>
        <h2 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "0.8rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--text-primary)",
          marginBottom: "var(--space-md)"
        }}>
          Angaben gemäß § 5 TMG
        </h2>
        <p style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "1rem",
          color: "var(--text-secondary)",
          lineHeight: 1.9,
          marginBottom: "var(--space-md)"
        }}>
          Heilpraktikerin für Psychotherapie (HeilprG), Nicole-Marina Hötzel,
          ebenfalls Verantwortlicher für den Inhalt der Homepage nach § 55 Abs. 2 RStV
        </p>
        <p style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "1rem",
          color: "var(--text-secondary)",
          lineHeight: 2
        }}>
          Nicole-Marina Hötzel<br />
          Privatpraxis für Psychotherapie (HeilprG)<br />
          Beim Schnarrbrunnen 15<br />
          86150 Augsburg<br />
          Mobil: 0151 151 44049<br />
          Email:{" "}
          <a
            href="mailto:Nicole.hoetzel@icloud.com"
            style={{ color: "var(--accent-olive-light)", textDecoration: "none" }}
            onMouseEnter={e => e.currentTarget.style.textDecoration = "underline"}
            onMouseLeave={e => e.currentTarget.style.textDecoration = "none"}
          >
            Nicole.hoetzel@icloud.com
          </a>
        </p>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid rgba(0,0,0,0.07)", marginBottom: "var(--space-lg)" }} />

      {/* Section 2 — Gesetzliche Berufsbezeichnung */}
      <section style={{ marginBottom: "var(--space-lg)" }}>
        <h2 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "0.8rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--text-primary)",
          marginBottom: "var(--space-md)"
        }}>
          Gesetzliche Berufsbezeichnung
        </h2>
        <p style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "1rem",
          color: "var(--text-secondary)",
          lineHeight: 1.9,
          marginBottom: "1rem"
        }}>
          Heilpraktikerin für Psychotherapie (verliehen in der Bundesrepublik Deutschland)<br />
          Zuständige Aufsichtsbehörde: Gesundheitsamt Augsburg, Hoher Weg 8, 86152 Augsburg;
        </p>
        <a
          href="https://www.augsburg.de/buergerservice-rathaus/buergerservice/aemter-behoerden/staedtische-dienststellen/g/gesundheitsamt/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "1rem",
            color: "var(--accent-olive-light)",
            textDecoration: "none"
          }}
          onMouseEnter={e => e.currentTarget.style.textDecoration = "underline"}
          onMouseLeave={e => e.currentTarget.style.textDecoration = "none"}
        >
          Verlinkung
        </a>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid rgba(0,0,0,0.07)", marginBottom: "var(--space-lg)" }} />

      {/* Section 3 — Berufsrechtliche Regelungen */}
      <section style={{ marginBottom: "var(--space-lg)" }}>
        <h2 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "0.8rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--text-primary)",
          marginBottom: "var(--space-md)"
        }}>
          Berufsrechtliche Regelungen
        </h2>
        <p style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "1rem",
          color: "var(--text-secondary)",
          lineHeight: 1.9,
          marginBottom: "1rem"
        }}>
          Gesetz über die berufsmäßige Ausübung der Heilkunde ohne ärztliche Bestallung
          (Heilpraktikergesetz) und Durchführungsverordnung: Nachzulesen im Internet unter
        </p>
        <div style={{ lineHeight: 2 }}>
          <a
            href="http://www.gesetze-im-internet.de/heilprg/index.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-josefin)",
              fontSize: "1rem",
              color: "var(--accent-olive-light)",
              textDecoration: "none",
              display: "block",
              marginBottom: "0.4rem"
            }}
            onMouseEnter={e => e.currentTarget.style.textDecoration = "underline"}
            onMouseLeave={e => e.currentTarget.style.textDecoration = "none"}
          >
            http://www.gesetze-im-internet.de/heilprg/index.html
          </a>
          <span style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "1rem",
            color: "var(--text-secondary)",
            display: "block",
            marginBottom: "0.4rem"
          }}>
            und
          </span>
          <a
            href="http://www.gesetze-im-internet.de/heilprgdv_1/index.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-josefin)",
              fontSize: "1rem",
              color: "var(--accent-olive-light)",
              textDecoration: "none",
              display: "block"
            }}
            onMouseEnter={e => e.currentTarget.style.textDecoration = "underline"}
            onMouseLeave={e => e.currentTarget.style.textDecoration = "none"}
          >
            http://www.gesetze-im-internet.de/heilprgdv_1/index.html
          </a>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid rgba(0,0,0,0.07)", marginBottom: "var(--space-lg)" }} />

      {/* Section 4 — Berufsordnung */}
      <section style={{ marginBottom: "var(--space-lg)" }}>
        <h2 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "0.8rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--text-primary)",
          marginBottom: "var(--space-md)"
        }}>
          Berufsordnung
        </h2>
        <p style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "1rem",
          color: "var(--text-secondary)",
          lineHeight: 1.9,
          marginBottom: "0.8rem"
        }}>
          Nachzulesen im Internet unter{" "}
          <a
            href="https://www.vfp.de/verband/berufsordnung.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent-olive-light)", textDecoration: "none" }}
            onMouseEnter={e => e.currentTarget.style.textDecoration = "underline"}
            onMouseLeave={e => e.currentTarget.style.textDecoration = "none"}
          >
            Link
          </a>
        </p>
        <p style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "1rem",
          color: "var(--text-secondary)",
          lineHeight: 1.9
        }}>
          Heilkundliche Tätigkeit ist von der Umsatzsteuer gemäß § 4 Nr.14 UStG befreit.
        </p>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid rgba(0,0,0,0.07)", marginBottom: "var(--space-lg)" }} />

      {/* Section 5 — Berufshaftpflichtversicherung */}
      <section style={{ marginBottom: "var(--space-lg)" }}>
        <h2 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "0.8rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--text-primary)",
          marginBottom: "var(--space-md)"
        }}>
          Berufshaftpflichtversicherung
        </h2>
        <p style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "1rem",
          color: "var(--text-secondary)",
          lineHeight: 1.9
        }}>
          Signal Iduna Gruppe, Kapstadtring 8, 22297 Hamburg;<br />
          Geltungsbereich: Bundesrepublik Deutschland
        </p>
      </section>

    </div>
  );
}
