# SOUL NECTAR — MASTER PROJECT CONTEXT
> Paste this block at the start of every new AI session.
> The AI must read and internalize everything before writing a single line of code.
> Do not skip sections. Every section exists to prevent a specific class of mistake.

---

## THE BRAND IN ONE PARAGRAPH

Soul Nectar is a premium holistic therapy and yoga practice based in the Bavarian countryside. It serves clients seeking naturopathic psychotherapy, yoga therapy, trauma-informed healing, and mindfulness. The brand aesthetic is calm, warm, and grounded — think high-end yoga retreat meets editorial wellness journal. It is NOT a tech product, SaaS app, startup, or clinical practice. Every design and code decision must reflect quiet luxury, emotional safety, and organic warmth.

---

## STACK

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js (App Router) | `src/app/` directory |
| Language | JavaScript ES6+ | No TypeScript |
| Styling | Vanilla CSS | Single `globals.css` file. No Tailwind. No CSS Modules. No inline styles. |
| Animations | `framer-motion` | Via custom `<FadeIn>` wrapper only. Never use framer-motion directly in page files. |
| Icons | `lucide-react` | Only icon library allowed. Do not introduce others. |
| State (global) | React Context API | `LanguageContext` for i18n. No Redux. No Zustand. |
| State (local) | `useState` / `useEffect` | For scroll detection, toggles, UI state. |
| Persistence | `localStorage` | Used inside `LanguageContext` to remember language choice. |
| i18n | Custom system | `src/locales/en.js` + `src/locales/de.js` dictionaries. |

---

## FOLDER STRUCTURE

```
src/
  app/
    page.js           ← homepage (Server Component)
    layout.js         ← root layout, wraps all providers
    globals.css       ← ALL styles live here. One file. No exceptions.
    [route]/
      page.js         ← new pages go here
  components/
    Navbar.js
    HeroSection.js
    FadeIn.js
    ContactFooter.js
    [other components]
  context/
    LanguageContext.js
  locales/
    en.js
    de.js
public/               ← images, logos, SVGs
```

---

## DESIGN TOKENS — COMPLETE CSS VARIABLE REFERENCE

These are the ONLY variables that exist. Do not invent new ones.
Do not hardcode any color, font, or easing value — always use var().

### Colors

```css
--bg-color            /* #F4EFE9 — Warm pale beige. Primary page canvas.
                         Evokes calm. Use for all page/section backgrounds. */

--bg-card             /* #FBF9F6 — Off-white cream. Slightly lighter than canvas.
                         Use to lift cards and alternating sections subtly. */

--text-primary        /* #383F32 — Very dark olive/charcoal. All primary headings
                         and essential reading. Never pure black. */

--text-secondary      /* #5A6352 — Lighter olive. Body copy, secondary labels,
                         descriptive text, captions. */

--accent-olive-dark   /* #66755D — Deep sage olive. The grounding presence.
                         CTAs, primary buttons, hover states. Never on large bg areas. */

--accent-olive-light  /* #9DAE94 — Soft sage green. Primary brand accent.
                         Inactive buttons, highlights, decorative accents. */

--white               /* #FFFFFF — Strictly reserved for text on dark buttons
                         or dark overlays. Not for backgrounds. */
```

### Typography

```css
--font-serif          /* var(--font-caudex), "Caudex", serif
                         → ALL headings (H1–H6), logo, pull quotes.
                         Feels rooted, historic, editorial. */

--font-sans           /* var(--font-josefin), "Josefin Sans", sans-serif
                         → ALL body copy, nav links, buttons, labels, captions.
                         Maintains airy modernism. */
```

### Spacing Scale

```css
--space-xs: 0.5rem    /* Micro-adjustments and inner-component gaps. */
--space-sm: 1rem      /* Standard gap between related UI elements. */
--space-md: 2rem      /* Paragraph spacing and inner card padding. */
--space-lg: 4rem      /* Spacing between distinct content blocks. */
--space-xl: 8rem      /* Primary section vertical padding. Page rhythm. */
```

### Layout

```css
--container-max: 1280px   /* Maximum reading width. Never exceed this. */
--container-pad: 2rem     /* Edge breathing room on mobile/tablet. */
```

### Borders & Radius

```css
--radius-sm: 4px      /* Buttons and small interactive elements. */
--radius-md: 8px      /* Cards, images, content wrappers. */
```

### Motion

```css
--ease-lux: cubic-bezier(0.25, 1, 0.5, 1)
/* The only easing curve used on this site.
   Decelerates slowly — like a breath releasing. Fast in, slow out.
   Use for ALL hover transitions and animations.
   Never use linear, ease, ease-in-out, or any other curve. */
```

---

## TOKEN USAGE RULES

### Color Usage Map

| Use Case | Token |
|---|---|
| Page backgrounds, section backgrounds | `var(--bg-color)` |
| Cards, alternating sections | `var(--bg-card)` |
| All headings H1–H6 | `var(--text-primary)` |
| Body copy, labels, captions | `var(--text-secondary)` |
| Primary CTA buttons (bg) | `var(--accent-olive-dark)` |
| Brand accents, inactive buttons | `var(--accent-olive-light)` |
| Text on dark/olive backgrounds | `var(--white)` |
| Button hover (primary) | shifts to `var(--text-primary)` |

### Typography Usage Map

| Use Case | Font |
|---|---|
| H1, H2, H3, H4, H5, H6 | `var(--font-serif)` — Caudex |
| Logo, pull quotes | `var(--font-serif)` — Caudex |
| Body copy | `var(--font-sans)` — Josefin Sans |
| Nav links, buttons | `var(--font-sans)` — Josefin Sans |
| Labels, captions, section-subtitles | `var(--font-sans)` — Josefin Sans |

---

## COMPONENT APIs

### `<FadeIn>`
```jsx
// Wraps framer-motion. Use for ALL scroll-reveal animations.
// Never use framer-motion directly in page or section components.
<FadeIn delay={0.2} direction="up" duration={0.6}>
  <YourContent />
</FadeIn>

// Props:
// delay     → number (seconds). Default: 0
// direction → 'up' | 'down' | 'left' | 'right'. Default: 'up'
// duration  → number (seconds). Default: 0.6
```

### `<Navbar />`
```jsx
// No props. Fully self-contained.
// Reads language from LanguageContext internally.
// Manages its own scroll detection and mobile menu state.
// Do not pass props. Do not duplicate its scroll logic elsewhere.
<Navbar />
```

### `<ContactFooter />`
```jsx
// Self-contained. No required props.
// Always the last element on every page.
<ContactFooter />
```

---

## i18n PATTERN

Every component that renders visible text MUST support both languages.
Never hardcode display text in a component.

```jsx
// 1. Import the hook
import { useLanguage } from '@/context/LanguageContext';

// 2. Destructure inside the component
const { t } = useLanguage();

// 3. Use in JSX
<h1>{t('pageName.section.key')}</h1>
<p>{t('pageName.section.body')}</p>
```

**Key naming convention:** `pageName.sectionName.elementKey`
Examples: `home.hero.title`, `classes.schedule.subtitle`, `about.story.body`

**When adding new keys:**
- Add to `src/locales/en.js` AND `src/locales/de.js` in the same task.
- Never leave a key in one file but not the other.
- Never use placeholder text like "TODO: translate" in de.js.

---

## CSS CONVENTIONS

### File Structure
- All styles live in `src/app/globals.css`. One file. Always.
- No component-level `.css` or `.module.css` files.
- No inline styles except for dynamic values (e.g. animation delay as a JS variable).
- No Tailwind classes. No utility class frameworks.

### Class Naming — BEM-style, kebab-case
```css
.block { }                    /* e.g. .classes-section */
.block__element { }           /* e.g. .classes-section__card */
.block__element--modifier { } /* e.g. .classes-section__card--featured */
```

### What Never Goes in CSS
```
✗ Hardcoded hex colors (#3d4a2e, #f5f0eb, etc.)
✗ Hardcoded font-family strings — always use var(--font-serif) or var(--font-sans)
✗ ease, ease-in-out, linear — always var(--ease-lux)
✗ Hardcoded cubic-bezier values (except the navbar dropdown which uses a separate curve by design)
✗ New CSS variables not listed in this document
✗ rgba() with hardcoded colors — use CSS variable + opacity exception only for overlays
✗ Gradients (except the hero mobile overlay which is an approved exception)
✗ Heavy box-shadows — use borders. Shadows max opacity: 0.08
```

---

## CONVENTION REFERENCE

### Button System

| Type | Class | Background | Text | Border |
|---|---|---|---|---|
| Primary CTA | `.btn-primary` | `var(--accent-olive-dark)` | `var(--white)` | none |
| Secondary/Ghost | `.btn-outline` | transparent | `var(--text-primary)` | `1px solid rgba(0,0,0,0.15)` |

```css
/* Both buttons always have: */
padding: 1.2rem 2.8rem;
font-size: 0.8rem;
letter-spacing: 0.15em;
text-transform: uppercase;
font-weight: 500;
border-radius: var(--radius-sm); /* 4px */
transition: all 0.8s var(--ease-lux);

/* Primary hover: */
background-color: var(--text-primary);
transform: translateY(-2px);
box-shadow: 0 8px 20px rgba(0,0,0,0.08);

/* Outline hover: */
background-color: var(--bg-card);
border-color: var(--text-primary);
transform: translateY(-2px);
box-shadow: 0 4px 15px rgba(0,0,0,0.03);
```

### Transition Durations

| Interaction Type | Duration | Easing |
|---|---|---|
| Micro (color, opacity, border) | `0.3s` | `var(--ease-lux)` |
| Tactile lift (translateY, shadow) | `0.8s` | `var(--ease-lux)` |
| Scroll reveal (FadeIn) | `0.6s` | handled by FadeIn component |
| Cinematic image scale | `1.5s` | `var(--ease-lux)` |
| Navbar dropdown | `0.4s` | `cubic-bezier(0.16, 1, 0.3, 1)` ← approved exception |

### Hover System Rules
```
- Links: opacity drops to 0.6
- Images: scale max 1.03, transition 1.5s var(--ease-lux)
- Cards: translateY(-2px), box-shadow 0 15px 40px rgba(0,0,0,0.06)
- Buttons: translateY(-2px) only. Never scale() on buttons.
- Nav dropdown icon: rotate(180deg)
- Never exceed scale(1.03) on any element
- Hover states should feel like an invitation, not a reaction
```

### Typography Hierarchy
```
H1 → var(--font-serif), font-weight: 400, line-height: 1.1, letter-spacing: -0.02em
H2 → var(--font-serif), font-weight: 400, line-height: 1.1, letter-spacing: -0.02em
H3 → var(--font-serif), font-weight: 400, line-height: 1.1, letter-spacing: -0.02em
H4 → var(--font-serif), font-weight: 400, line-height: 1.1

Body copy → var(--font-sans), line-height: 1.8, color: var(--text-secondary)
Labels/Captions → var(--font-sans), uppercase, letter-spacing: 0.15em, font-weight: 600

Section subtitle utility class → .section-subtitle
  font-size: 0.85rem, letter-spacing: 0.15em, text-transform: uppercase,
  color: var(--text-secondary), font-weight: 600, margin-bottom: 2rem

Mobile overrides (max-width: 768px):
  h1 → 2.5rem
  h2 → 2rem
  h3 → 1.5rem
```

### Section Spacing & Layout
```css
/* Standard section */
.section-padding { padding: 8rem 0; }  /* var(--space-xl) */

/* Mobile section */
@media (max-width: 768px) {
  .section-padding { padding: 5rem 0; }
}

/* Container */
.container {
  width: 100%;
  max-width: 1280px;  /* var(--container-max) */
  margin: 0 auto;
  padding: 0 2rem;    /* var(--container-pad) */
}
```

### Approved Global Utilities
These classes already exist in globals.css. Reuse them:
```
.container           → standard page container
.section-padding     → standard vertical section rhythm
.text-center         → text alignment utility
.section-subtitle    → small uppercase section label
.btn-primary         → solid CTA button
.btn-outline         → ghost/secondary button
.cinematic-image-wrapper → overflow:hidden wrapper for image zoom effect
.cinematic-image     → the image inside, gets scale on parent hover
.tactile-hover       → translateY + shadow lift on hover
.nav-link            → navbar link style
```

---

## SERVER VS CLIENT COMPONENTS

```
Server Component (default, no directive needed):
  ✓ page.js files
  ✓ Static layout sections with no interactivity
  ✓ SEO metadata exports

Client Component ("use client" required):
  ✓ Any component using useState or useEffect
  ✓ Any component using useLanguage() (React Context)
  ✓ Any component using framer-motion / <FadeIn>
  ✓ Any component accessing browser APIs (scroll, window, localStorage)

Rule: If a page.js needs an interactive section, extract that section
into a separate Client Component file. The page.js itself stays a
Server Component.
```

---

## APPROVED EXCEPTIONS (Do Not "Fix" These)

These are intentional deviations — do not normalize them:

1. **Navbar dropdown easing** uses `cubic-bezier(0.16, 1, 0.3, 1)` and `cubic-bezier(0.4, 0, 0.2, 1)` — these are approved for the snappier dropdown feel
2. **Hero mobile overlay** uses `linear-gradient(to right, var(--bg-color) 60%, transparent)` — approved for mobile readability
3. **Body texture overlay** (`body::before`) uses an SVG noise filter at `opacity: 0.8` — intentional organic texture effect
4. **Navbar dropdown** uses `border-radius: 12px` — approved exception to the standard radius scale for the floating panel feel

---

## NEGATIVE DIRECTIONS — NEVER DO THESE

```
✗ No Tailwind classes
✗ No CSS Modules or component-scoped stylesheets  
✗ No new npm packages without explicit instruction
✗ No TypeScript
✗ No hardcoded colors, fonts, or easing values
✗ No gradients (outside the approved hero exception)
✗ No glassmorphism
✗ No heavy drop shadows (max rgba opacity: 0.08)
✗ No scale() on buttons — translateY only
✗ No scale() exceeding 1.03 on any element
✗ No pure black (#000000) anywhere
✗ No startup/SaaS aesthetics
✗ No neon, bright, or saturated colors
✗ No overly rounded UI (no border-radius above 12px)
✗ No snappy, aggressive, or bouncy animations
✗ No framer-motion used directly in page files — always via <FadeIn>
✗ No hardcoded display text — always through t() and locales files
✗ No new CSS variables without flagging with /* NEW */ comment
✗ No Redux, Zustand, or external state libraries
```

---

## PRE-FLIGHT CHECKLIST
> Run this mentally before outputting any code.

```
CONSISTENCY
[ ] Every color uses a CSS variable — no hardcoded hex values
[ ] Every font uses var(--font-serif) or var(--font-sans)
[ ] Every transition uses var(--ease-lux) (or an approved exception)
[ ] Class names follow BEM kebab-case convention
[ ] New styles added to globals.css, not inline or in a new file

i18n
[ ] No hardcoded display text in any component
[ ] All new text keys added to BOTH en.js AND de.js
[ ] Keys follow the pageName.section.element naming pattern

COMPONENTS
[ ] <Navbar /> and <ContactFooter /> included with no props
[ ] Scroll reveals use <FadeIn>, never raw framer-motion
[ ] "use client" added to any component using hooks, context, or browser APIs

RESPONSIVE
[ ] Tested mentally at 375px (mobile), 768px (tablet), 1280px (desktop)
[ ] No horizontal scroll at any breakpoint
[ ] Section padding reduced on mobile (5rem vs 8rem)

SEMANTIC HTML & SEO
[ ] Exactly one <h1> per page
[ ] Logical heading hierarchy (H1 → H2 → H3, no skipping)
[ ] All images have descriptive alt text
[ ] page.js exports metadata (title, description) as a Server Component

PERFORMANCE
[ ] No unnecessary "use client" directives
[ ] Images use Next.js <Image /> component
[ ] No layout shift from dynamic content
```

---

*Last updated: 2026-05-15 — Update this file whenever new components, tokens, or conventions are added to the project.*
