# SOUL NECTAR — MASTER PROJECT DOCUMENTATION & CONTEXT

This document serves as the absolute, single source of truth (SSOT) and master technical documentation for the Soul Nectar web application. It is compiled by analyzing the live codebase, extracting design systems, folder structures, component relationships, localization contracts, and recent architectural enhancements. 

Any AI agent or developer reading only this document should be able to fully understand, maintain, scale, and extend this application without requiring additional context.

---

## 1. BRAND & STRATEGIC IDENTITY

### 1.1 Core Mission & Identity
**Soul Nectar** is a premium, professional, and calming holistic health & wellness practice based in Aichach, Germany. Run by the founder, **Nicole-Marina Hötzel**, the practice provides an organic, grounding space for personal healing, growth, and integration. 

The website is designed to be a digital extension of this calming physical space, inviting prospective clients to pause, breathe, and book a consultation.

### 1.2 Tone of Voice & Content Philosophy
- **Grounded & Warm:** Tone is deeply empathetic, humanistic, and secure. Avoid clinical sterility or pseudo-scientific hype.
- **Poetic yet Professional:** Speaks of "lebendig sein, im Fluss mit dem Nektar deiner Seele" (being alive, flowing with the nectar of your soul) while clearly conveying clinical qualifications and therapeutic modalities.
- **Breathing Space:** Content is structured with generous typographic negative space to avoid cognitive overload.

### 1.3 Founders & Key Imagery
- **Founder:** Nicole-Marina Hötzel (Heilpraktikerin für Psychotherapie, certified body- and depth-psychology oriented trauma therapist, and certified yoga/yogatherapist).
- **Core Portrait Asset:** `/nicole-main.png` (used universally in the "Über Mich" sections on home and all service pages to establish trust and face-to-face connection).

---

## 2. TECHNICAL STACK & ARCHITECTURE

### 2.1 Framework & Core Dependencies
- **Core Framework:** Next.js `16.2.4` (App Router)
- **Runtime Environment:** React `19.2.4` and React DOM `19.2.4`
- **Animation Engine:** Framer Motion `^12.38.0` (used for smooth, hardware-accelerated, high-fidelity UI animations, and physics transitions)
- **Icons Library:** Lucide React `^1.14.0` (standardized for icons like `MapPin`, `Phone`, `Mail`, `X`, `Menu`, etc.)

### 2.2 Global Styling Conventions
- Centralized in [globals.css](file:///c:/Users/athar/OneDrive/Desktop/MagnifyX/Soul%20Nectar/src/app/globals.css). No CSS Modules, no inline utility libraries, and **strictly no TailwindCSS** for layout components (vanilla CSS custom properties are the standard).
- Soft organic overlays: Uses a global subtle turbine fractal SVG noise texture in `body::before` at an opacity of `0.035` to give a premium editorial feel.

### 2.3 Internationalization (i18n) Engine
Implemented client-side via a dynamic provider in [LanguageContext.js](file:///c:/Users/athar/OneDrive/Desktop/MagnifyX/Soul%20Nectar/src/context/LanguageContext.js):
- **Languages:** German (`DE` - default) and English (`EN`).
- **Context API:** Exposes `lang` (current language code uppercase), `setLang` (localstorage-backed setter), `t` (nested key string dot-notation lookup), and `isClient` (hydration safeguard).
- **Storage:** Persisted in `localStorage` under the key `'soulnectar_lang'`.

---

## 3. VISUAL DESIGN SYSTEM & CSS VARIABLES

The complete, live design token system defined in `:root` inside [globals.css](file:///c:/Users/athar/OneDrive/Desktop/MagnifyX/Soul%20Nectar/src/app/globals.css) is mapped out below:

### 3.1 Design Token Variables
| Category | CSS Variable | Value | Intended Usage |
| :--- | :--- | :--- | :--- |
| **Canvas** | `--bg-color` | `#F4EFE9` | Warm pale beige/peach — Primary page background. |
| **Canvas** | `--bg-card` | `#FBF9F6` | Off-white/cream — Elevated container cards. |
| **Text** | `--text-primary` | `#383F32` | Dark olive/charcoal — Headings & primary readability. |
| **Text** | `--text-secondary` | `#5A6352` | Soft olive — Body paragraphs & auxiliary text. |
| **Text** | `--white` | `#FFFFFF` | Pure white — Text inside dark green elements. |
| **Accents** | `--accent-olive-dark` | `#66755D` | Deep sage green — Grounding CTA background & hover. |
| **Accents** | `--accent-olive-light` | `#9DAE94` | Soft sage green — Brand accent, buttons, visual icons. |
| **Footer** | `--bg-footer` | `#404A38` | Darkest forest olive — Depth overlay for page footers. |
| **Easing** | `--ease-lux` | `cubic-bezier(0.25, 1, 0.5, 1)` | Cinematic ease-out curve mimicking natural breathing. |

### 3.2 Spacing Scale ( breathing room )
- `--space-xs`: `0.5rem` (inner button margins)
- `--space-sm`: `1rem` (standard sibling component gap)
- `--space-md`: `2rem` (paragraph spacing & container inner padding)
- `--space-lg`: `4rem` (distinct conceptual blocks separation)
- `--space-xl`: `8rem` (primary section vertical padding)

### 3.3 Tactile Borders & Corner Radii
- `--radius-sm`: `4px` (buttons and subtle active states)
- `--radius-md`: `8px` (cards, images, and content dividers)
- **Approved Design System Exception:** The expanded floating services panel in `ServicesOverview.js` uses `borderRadius: "16px"` to create a premium elevated sheet overlay.

### 3.4 Typography Contracts
- **Serif (Headings):** Caudex (`--font-caudex`, weight: `[400, 700]`). Used for all narrative headlines (`H1` to `H6`) and logo lettering.
- **Sans (Body & UI):** Josefin Sans (`--font-josefin`). Used for body copy, buttons, labels, and microcopy to maintain modernism.
- **Tracked Typography:** Buttons & uppercase headers must always feature a tracked styling constraint: `text-transform: uppercase`, `letter-spacing: 0.15em`.

---

## 4. PROJECT DIRECTORY TREE

```
Soul Nectar/
├── package.json                   # Dependency definitions
├── next.config.mjs                # Next.js configurations
├── SOUL_NECTAR_MASTER_CONTEXT.md  # Master Documentation (This file)
├── public/                        # Static assets (images, logos, svgs)
│   ├── soul-nectar-logo.png
│   ├── nicole-main.png            # Portrait of Nicole Hötzel
│   ├── practice-room-1.jpg
│   ├── practice-room-2.jpg
│   ├── practice-room-3.jpg
│   ├── practice-room-4.jpg
│   └── practice-room-5.jpg
└── src/
    ├── app/
    │   ├── globals.css            # Unified visual stylesheet
    │   ├── layout.js              # Base layout, Next fonts setup, lang attribute
    │   ├── page.js                # Landing page index route
    │   ├── robots.js              # Robots exclusion standard rules
    │   ├── sitemap.js             # Automated SEO XML Sitemap generator
    │   ├── fotogalerie/
    │   │   ├── page.js
    │   │   ├── GalleryHero.js     # Lightbox hero header
    │   │   └── PhotoGallery.js    # Filterable masonry gallery and lightbox
    │   ├── heilpraktiker-aichach/
    │   │   ├── page.js
    │   │   └── HeilpraktikerContent.js
    │   ├── psychotherapie-aichach/
    │   │   ├── page.js
    │   │   └── PsychotherapieContent.js
    │   ├── ueber-mich/
    │   │   ├── page.js
    │   │   └── AboutContent.js
    │   ├── yoga-aichach/
    │   │   ├── page.js
    │   │   └── YogaAichachContent.js
    │   └── yogatherapie-aichach/
    │       ├── page.js
    │       └── YogatherapieContent.js
    ├── components/
    │   ├── Navbar.js              # Fixed scroll-to-hide responsive navigation bar
    │   ├── ContactFooter.js       # Dynamic contact form linked to Formspree
    │   ├── Location.js            # Leaflet or Google Maps GDPR iframe integration
    │   ├── HeroSection.js         # Landing page Hero section
    │   ├── AboutSection.js        # Landing page About snippet
    │   ├── ServicesOverview.js    # Interactive mobile-optimized cards layout
    │   ├── PracticeGallery.js     # Horizontal scroll previews row
    │   ├── FAQAccordion.js        # Accessible FAQ dropdown widget
    │   ├── FadeIn.js              # Framer motion layout entrance animator
    │   └── DecorativePatterns.js  # SVGs for Topography & Botanical Illustrations
    ├── context/
    │   └── LanguageContext.js     # Global i18n Context Provider
    └── locales/
        ├── de.js                  # German translation dictionaries
        └── en.js                  # English translation dictionaries
```

---

## 5. COMPONENT REFERENCE & OWNERSHIP CONTRACTS

To maintain high architectural cohesion and prevent code duplication, developers must respect the following single-component contracts:

### 5.1 Navbar (`Navbar.js`)
- **Fixed Position:** Affixed to viewport top, transitions background color to dark green (`--accent-olive-dark`) once `scrollY > 50` is true.
- **Scroll Detection:** Auto-hides on scroll-down past 200px and instantly slides down to reveal on scroll-up.
- **Mobile Menu Overlay:** Standardized full-screen flex layout utilizing a brand noise texture overlay, smooth staggered framer-motion reveals, a center-aligned horizontal partition divider, and explicit vertical nesting for sub-links.
- **Dual i18n switcher:** Offers a quick one-click language toggle (DE/EN) in the header for mobile, and a premium hover-sensitive dropdown selection on desktop.

### 5.2 Contact Footer (`ContactFooter.js`)
- **Form Submission:** Secure async `POST` fetch to Formspree (`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`). Offers inline loading (`formStatus === 'sending'`), a checkmark success screen, or error notices.
- **Brand Rules:** Features an official WhatsApp direct API integration button styled with the standard brand green color (`#25D366`), an intentional design system bypass.

### 5.3 Location Iframe (`Location.js`)
- **GDPR Compliance:** Loads an embedded secure Google Maps iframe showing Walchenstr. 33, Aichach. Incorporates privacy disclosure text linked to Google's general privacy policy below the map viewport.

### 5.4 Practice Gallery (`PracticeGallery.js`)
- **Mobile Row:** Renders practice room photographs in a single horizontal row that behaves as a smooth horizontal scrolling view with snap alignments on small screen dimensions.
- **Desktop Interaction:** Tactile spring scaling transforms (`scale(1.05)`) on card mouse hover.

### 5.5 Decorative Elements (`DecorativePatterns.js`)
Contains the central drawing library for seamless SVG overlays:
- `TopographicBackground`: Seamless tiling vector repeating contours. Takes an `instanceId` prop to prevent pattern ID collisions. 
  - `variant="a"`: Primary page layouts (Sage green style).
  - `variant="b"`: Warm hero banners (Soft light olive style).
  - `variant="c"`: Darker footers (Symmetric white outline style).
- `BotanicalIllustration`: Standard hand-drawn organic stroke vector art.
  - `variant="olive"`: Leaf branches with integrated olives.
  - `variant="fern"`: Staggered double-row fern pinnules.
  - `variant="leaf"`: Round eucalyptus-like leaf structures.
  - `variant="pods"`: Branched thin-stem seed capsule nodes.

---

## 6. ROUTING & PAGE OUTLINE

All routes are fully configured for canonical linking and precise localized metadata indexing:

| Page Route | Purpose | Key Content Blocks |
| :--- | :--- | :--- |
| **`/`** | Homepage Index | Hero, Practice Horizontal Scroll, Founder About, Services Overview Grid, Contact Form. |
| **`/heilpraktiker-aichach`** | Heilpraktiker Landing | Narrative on holistic medicine, qualification checklist, specific body/psycho links. |
| **`/psychotherapie-aichach`** | Psychotherapie Landing | In-depth traumatherapy explanation, pricing sheet, GebüH insurance data, FAQs. |
| **`/yogatherapie-aichach`** | Yogatherapie Landing | Asanas/Pranayama benefits breakdown, therapeutic scope list. |
| **`/yoga-aichach`** | Kundalini Yoga Landing | Class times sheet (Tuesdays), Kundalini structural breakdown (Kriya, meditation). |
| **`/ueber-mich`** | Nicole Hötzel Narrative | Full personal biography timeline, comprehensive credential cards, quotes. |
| **`/fotogalerie`** | Photography Masonry | High-resolution grid showing the complete studio, integrated category filters, fully accessible keyboard-driven lightbox. |

---

## 7. i18n DICTIONARY BLUEPRINT

Both localized files `de.js` and `en.js` share an identical key structure. The tree hierarchy is mapped below:

```json
{
  "nav": { "home", "services", "about", "gallery", "contact", "book", "ariaOpenMenu", "ariaCloseMenu", "ariaLangDE", "ariaLangEN" },
  "hero": { "title", "subtitle", "description", "btn_services", "btn_contact" },
  "gallery": { "subtitle", "title", "description", "seeMore" },
  "about": { "subtitle", "title", "p1", "p2", "btn_more" },
  "services": {
    "subtitle", "title", "btn_book", "btn_more", "ariaClose",
    "items": [
      { "id": "heilpraktikerin", "title", "description" },
      { "id": "psychotherapie", "title", "description", "bullets": [] },
      { "id": "yogatherapie", "title", "description", "bullets": [] },
      { "id": "yoga", "title", "description" }
    ]
  },
  "location": { "subtitle", "title", "description", "cities": [], "map_placeholder", "address", "mapTitle", "mapAriaLabel", "mapLoadButton", "mapLoadNote", "mapPrivacyNote", "mapPrivacyLink" },
  "footer": { "title", "description", "name", "address_lines", "whatsapp", "form_name", "form_email", "form_message", "form_submit", "form_success", "form_error", "form_sending", "copyright" },
  "heilpraktiker_page": { "hero_title", "hero_subtitle", "hero_desc", "meaning_title", "meaning_desc1", "meaning_desc2", "meaning_bullets": [], "meaning_desc3", "psycho_title", "psycho_desc", "psycho_link", "holistic_title", "holistic_desc1", "holistic_link1", "holistic_link2", "holistic_desc2", "about_title", "about_desc", "qual_title", "qual_bullets": [] },
  "psychotherapieAichach": {
    "hero": { "title", "desc1", "desc2_line1", "desc2_line2", "welcome", "holistic", "empathetic", "trauma" },
    "about": { "title", "desc" },
    "qualifications": { "title", "bullets": [], "outcome", "text" },
    "benefits": { "title", "bullets": [] },
    "yogaCta": { "title", "text", "link" },
    "pricing": { "title", "initial", "followup" },
    "insurance": { "title", "text", "info" },
    "selfpayer": { "title", "text" },
    "location": { "title", "text", "cities" },
    "booking": { "title", "text", "note" },
    "contact": { "title", "name", "address", "phone", "email", "whatsappBtn" },
    "faq": { "title", "items": [ { "q", "a" } ] }
  },
  "fotogalerie": {
    "hero": { "title", "subtitle" },
    "filters": { "all", "yoga", "therapy" },
    "alt": { "placeholder" },
    "lightbox": { "close", "prev", "next" }
  },
  "aboutPage": {
    "hero": { "title", "subtitle", "imageAlt" },
    "quote": { "text" },
    "story": { "subtitle", "title", "p1", "p2", "imageAlt" },
    "qualifications": {
      "subtitle", "title",
      "items": [ { "label", "text", "icon" } ],
      "cta": { "text", "button" }
    },
    "approach": {
      "subtitle", "title", "p1", "p2", "imageAlt",
      "features": [ { "label", "icon" } ]
    },
    "banner": { "title", "subtitle", "button" }
  },
  "ueberMich": {
    "hero": { "title", "subtitle" },
    "quote": { "text" },
    "about": { "title", "p1", "p2" },
    "approach": { "title", "text" },
    "background": { "title", "text", "outro" },
    "qualifications": {
      "title",
      "items": [ { "label", "text", "icon" } ],
      "cta": { "text", "button" }
    }
  },
  "yogatherapieAichach": {
    "hero": { "title", "desc1", "desc2", "desc3" },
    "ansatz": { "title", "desc", "subtitle", "bullets": [], "closing" },
    "wirkung": { "title", "desc", "cards": [], "closing" },
    "zielgruppe": { "title", "desc", "bullets": [], "closing1", "closing2" },
    "ctaStrip": { "title", "text", "link1", "link2" },
    "weg": { "title", "text1", "text2" }
  }
}
```

---

## 8. KEY PERFORMANCE & ANIMATION CONTRACTS

### 8.1 Smooth Service Card Expand Transitions
To prevent lag, layout repaints, and stutter on mobile devices during card expansion in `ServicesOverview.js`:
- **Hardware Acceleration:** Avoid `layoutId` projection morphs that recalculate heights. The sheet overlay modal enters strictly using high-performance compositor-friendly transitions: `opacity` and `y` translation.
- **Entrance Transition Configuration:**
  ```javascript
  transition={{ 
    duration: 0.45,
    ease: [0.25, 1, 0.5, 1] // Breath release luxury curve
  }}
  ```
- **Sequential Scrolling Hook:** Viewport scrolling must fire only **after** the opening transition fully completes. Uses an `onAnimationComplete` guard checking for positive visibility (`definition.opacity === 1`) so that scrolling doesn't execute during card exit:
  ```javascript
  onAnimationComplete={(definition) => {
    if (definition.opacity === 1 && modalRef.current) {
      scrollToCard(modalRef.current);
    }
  }}
  ```
- **Device-sensitive offsets in `scrollToCard`:**
  - *Mobile:* scroll target minus navbar height (80px) and slight padding (16px).
  - *Desktop:* centers the expanded modal precisely in the middle of the viewport using `window.scrollBy`.

### 8.2 Safe HTML Rendering Key Contract
- Avoid passing raw HTML tags (like `<br/>`) inside a localized string rendered into a simple plain React text node, which breaks layout safety by rendering the raw string tags.
- Instead, split keys (e.g., `desc2_line1` and `desc2_line2`) and render them separated by a JSX `<br />` tag in the React DOM:
  ```javascript
  <p>
    {t('psychotherapieAichach.hero.desc2_line1')}
    <br />
    {t('psychotherapieAichach.hero.desc2_line2')}
  </p>
  ```

---

## 9. DEVELOPER GUIDELINES

When writing code or making edits to the Soul Nectar repository:
1. **Preserve Comments:** Maintain all existing developer notes, inline accessibility comments, and custom explanation headers.
2. **Vanilla CSS Standard:** Do not inject any Tailwind utility styling classes. Write premium native CSS transitions and rules using the established tokens.
3. **Keep Typography Case Standard:** High-level headers and buttons must always use standard uppercase spacing tags with the Josefin Sans variable.
4. **No Placeholders:** If a new section needs illustrative images, utilize real high-quality photography assets matching the `/practice-room-X.jpg` nomenclature.

---

## 10. LOCAL SEO & METADATA ARCHITECTURE

Every single landing page possesses an engineered SEO metadata contract to dominate organic local searches for "Psychotherapie Aichach", "Heilpraktiker Aichach", and "Yoga Aichach":
- **Description Quality:** Highly informative German meta descriptions outlining trauma-sensitive and holistic body-oriented support under 160 characters.
- **Canonical Setup:** Precise configuration of `alternates: { canonical: "https://www.soulnectar.de/..." }` to eliminate duplicate indexing hazards.
- **OpenGraph Assets:** Standardized layout mapping og:title, og:description, and absolute reference to a high-resolution, branded preview card at `/og-image.jpg`.
- **Heading Hierarchy:** Strictly enforces a single `H1` tag per viewport page with clear descriptive keywords matching local navigation queries.

---
*Soul Nectar — Designed with love, grounded in healing.*
