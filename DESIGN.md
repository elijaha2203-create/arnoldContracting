<!-- SEED: re-run /impeccable document once there's code to capture the actual tokens and components. -->

---
name: Arnold Contracting
description: Family-owned craftsmanship, proven in the gallery, not the pitch.
---

# Design System: Arnold Contracting

## 1. Overview

**Creative North Star: "The Workshop at Dusk"**

The palette lives in the register of a woodshop after hours: near-black charcoal, deep navy shadow, and forest green carrying the weight of the brand rather than sitting on top of it as a thin accent stripe. This is a Committed color strategy — the dark, foresty palette isn't decoration on a white page, it *is* the surface, the way a workshop's materials (steel, dark wood, patina) are the room's actual color rather than a coat of paint. Sage green is the one warm-light note, reserved for moments that need to breathe (body text on dark, a highlighted stat, a hover state).

The site explicitly rejects the generic-contractor-template look: no neon, no gradients, no corporate SaaS gloss, no overly flashy motion, no overwhelming front page. Typography carries the authority instead — bold, high-contrast, single-family sans, in the spirit of Kontix and Massachusetts Woodworks/Bolt Woodworks: confident headlines, real project photography doing the selling, and a simple, easy-to-scan navigation.

**Key Characteristics:**
- Dark, foresty, committed palette — not a light "SaaS-cream" default
- Bold single-sans typography carrying contrast and hierarchy
- Photography-led proof (galleries, real projects) over icon-and-copy filler
- Calm, responsive motion — feedback and transitions, no scroll-choreographed spectacle
- Uncluttered structure: never more sections than a homeowner needs to decide to call

## 2. Colors

A dark, committed palette: charcoal and navy carry the base surface, forest green carries brand identity across a real portion of the page (not a thin 10% accent), and sage is the single light, breathable note.

### Primary
- **Workshop Charcoal** (#070809): the dominant background — near-black, not pure black, so it holds warmth rather than reading as a tech-dark-mode UI.
- **Forest Deep** (#0f3d2e): the brand's committed color — used across large surfaces (section backgrounds, header/footer, CTA blocks), not as a thin accent.
- **Forest Mid** (#1f6f4a): the active/interactive shade of the brand green — buttons, links, hover states, icons.

### Secondary
- **Dusk Navy** (#0d1b2a): an alternate dark surface for section separation and depth, sitting between Charcoal and Forest without competing with either.

### Neutral
- **Sage Mist** (#a3c9a8): body text and secondary UI on dark surfaces, and the one light accent for stats/highlights. Verify ≥4.5:1 against Charcoal and Forest Deep before using at body-text sizes; lighten a touch further if it falls short.
- **Paper** (`[to be resolved during implementation]`): a true off-white or very-low-chroma light neutral for any light-surface sections (e.g. a light contact/quote form panel) — chroma near 0 or tinted toward the forest hue, never a generic warm cream default.

### Named Rules
**The Committed, Not Corporate Rule.** Forest green and charcoal carry 30–60% of any given screen as real surface, not a 10% accent dropped onto a white template. If a section reads like a light SaaS page with a green button, the palette has drifted from the brief.

## 3. Typography

**Display Font:** `[single sans-serif family to be chosen at implementation — geometric or humanist, bold weights available]`
**Body Font:** same family, lighter weight, per the single-sans direction.

**Character:** Bold and high-contrast, the way Kontix uses scale and weight to carry authority without extra ornamentation — confident, not shouty; the size and weight differential does the work, not color or effects.

### Hierarchy
- **Display** (bold/black weight, clamp up to 6rem, tight but not cramped): hero headline, one per page.
- **Headline** (bold, large): section headings introducing galleries, services, proof.
- **Title** (semibold, medium): card/gallery item titles, testimonial attribution.
- **Body** (regular, 65–75ch max line length): descriptive copy, testimonial text.
- **Label** (medium, small, no forced uppercase-tracking by default — avoid the eyebrow trope): button text, form labels, nav items.

### Named Rules
**The One Family Rule.** A single sans family in multiple weights carries the entire hierarchy; no second typeface competing for attention.

## 4. Elevation

Flat by default, consistent with a Responsive motion energy: this system does not lean on drop shadows for hierarchy. Depth comes from color layering (Charcoal → Dusk Navy → Forest Deep as stacked surfaces) and photography, not shadow stacks. Shadows are reserved for genuinely interactive lift (a hovered card or button), used sparingly and softly.

### Shadow Vocabulary
- **Interactive lift** (`box-shadow: 0 8px 24px rgba(0,0,0,0.35)`): applied only on hover/focus of cards and primary buttons, paired with a small transform lift.

## 5. Components

`[to be resolved during implementation — no components exist yet; the following are seed defaults consistent with the rules above]`

### Buttons
- **Shape:** small radius, not sharp rectangles and not pill-shaped — a restrained rounded rectangle.
- **Primary:** Forest Mid background, Charcoal or off-white text depending on contrast check, generous horizontal padding to read as a real call-to-action ("Contact Now To Get a Free Quote").
- **Hover / Focus:** darken toward Forest Deep or lighten toward Sage Mist (pick one direction and keep it consistent), plus the Interactive Lift shadow. Reduced-motion users get an instant color swap, no transform.

### Cards / Containers
- Used sparingly, only where they're the true best affordance (e.g. a testimonial or a service summary) — not stacked into an identical repeating grid everywhere. Dusk Navy or Forest Deep surface on Charcoal background for separation; no nested cards.

### Navigation
- Simple, easy-to-scan menu per the brief: primary nav items in Label type, phone number/CTA visible in the header at all times, mobile nav collapses to a single clear affordance (not hidden behind ambiguous icons only).

## 6. Do's and Don'ts

### Do:
- **Do** let Forest Deep/Forest Mid and Charcoal carry real surface area (30–60%), per the Committed strategy.
- **Do** lead with real project photography and galleries as the primary proof mechanism.
- **Do** keep the front page uncluttered — only as many sections as a homeowner needs to decide to call.
- **Do** keep the phone number and "Contact Now To Get a Free Quote" CTA visible throughout the scroll.
- **Do** verify Sage Mist (or any body text color) hits ≥4.5:1 contrast against whatever dark surface it sits on.

### Don't:
- **Don't** use a generic cheap-looking contractor template layout.
- **Don't** use a corporate SaaS aesthetic, neon colors, or gradients (including gradient text).
- **Don't** use overly flashy or scroll-choreographed motion — this system is Responsive, not Choreographed.
- **Don't** overload the front page with information.
- **Don't** use uppercase tracked eyebrows, numbered section markers (01/02/03), side-stripe borders, or the hero-metric template — avoid these even though the Kontix reference leans on some of them.
