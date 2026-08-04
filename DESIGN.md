<!-- SEED: re-run /impeccable document once there's code to capture the actual tokens and components. -->

---
name: Arnold Contracting
description: Family-owned craftsmanship, proven in the gallery, not the pitch.
---

# Design System: Arnold Contracting

## 1. Overview

**Creative North Star: "The Workshop at Dusk"**

The palette lives in the register of a woodshop after hours: deep slate navy and forest green carrying the weight of the brand rather than sitting on top of it as a thin accent stripe. This is a Committed color strategy — the dark, foresty palette isn't decoration on a white page, it *is* the surface, the way a workshop's materials (steel, dark wood, patina) are the room's actual color rather than a coat of paint. A muted barn red is the one warm note, reserved strictly for the primary call-to-action so it never dilutes into decoration. All text is off-white/white for maximum legibility against the dark surfaces.

The site explicitly rejects the generic-contractor-template look: no neon, no gradients, no corporate SaaS gloss, no overly flashy motion, no overwhelming front page. Typography carries the authority instead — bold, high-contrast, single-family sans, in the spirit of Kontix and Massachusetts Woodworks/Bolt Woodworks: confident headlines, real project photography doing the selling, and a simple, easy-to-scan navigation.

**Key Characteristics:**
- Dark, foresty, committed palette — not a light "SaaS-cream" default
- Bold single-sans typography carrying contrast and hierarchy
- Photography-led proof (galleries, real projects) over icon-and-copy filler
- Calm, responsive motion — feedback and transitions, no scroll-choreographed spectacle
- Uncluttered structure: never more sections than a homeowner needs to decide to call

## 2. Colors

A dark, committed palette: deep slate navy carries the base surface, forest green carries brand identity across a real portion of the page (not a thin 10% accent), muted barn red is reserved strictly for the primary CTA, and all text is off-white/white.

### Primary
- **Slate Navy** (#0e1f2b): the dominant background — deep, near-black navy that holds the page without reading as a tech-dark-mode UI.
- **Forest Green** (#264d3b): the brand's committed surface color — used across large surfaces (contact section, section backgrounds, header/footer), not as a thin accent.
- **Barn Red** (#8c2f2f): the CTA accent — used sparingly, exclusively for the primary call-to-action button ("Contact Now To Get a Free Quote") so it retains its urgency and never dilutes into decoration.

### Secondary
- **Navy Raised** (derived, `color-mix(in oklch, var(--charcoal) 88%, white 12%)`): an alternate dark surface for section separation and depth, sitting between Slate Navy and Forest Green without competing with either.
- **Forest Bright** (derived, `color-mix(in oklch, var(--forest-deep) 55%, var(--paper) 32%)`): a lighter tint of Forest Green used for icons, focus rings, and hover tints — the one breathing accent that isn't the CTA red.

### Neutral
- **Paper** (#f2efe9): all body text, headings, and light-panel text. Every text color in the system resolves to this off-white (or pure white for emphasis) — no tinted or muted text colors. Verify ≥4.5:1 against Slate Navy and Forest Green before shipping any new surface (both pass comfortably given the dark base).

### Named Rules
**The Committed, Not Corporate Rule.** Forest green and slate navy carry 30–60% of any given screen as real surface, not a 10% accent dropped onto a white template. If a section reads like a light SaaS page with a green button, the palette has drifted from the brief.
**The Sparing Red Rule.** Barn red exists for one job: the primary CTA. It never appears as a hover tint, icon color, or decorative accent — that dilutes its urgency.

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
- **Primary:** Barn Red background, white text, generous horizontal padding to read as a real call-to-action ("Contact Now To Get a Free Quote").
- **Hover / Focus:** darken/lighten the Barn Red itself for hover/active (never swap to green — red stays red), plus the Interactive Lift shadow. Reduced-motion users get an instant color swap, no transform.

### Cards / Containers
- Used sparingly, only where they're the true best affordance (e.g. a testimonial or a service summary) — not stacked into an identical repeating grid everywhere. Navy Raised or Forest Green surface on Slate Navy background for separation; no nested cards.

### Navigation
- Simple, easy-to-scan menu per the brief: primary nav items in Label type, phone number/CTA visible in the header at all times, mobile nav collapses to a single clear affordance (not hidden behind ambiguous icons only).

## 6. Do's and Don'ts

### Do:
- **Do** let Forest Green and Slate Navy carry real surface area (30–60%), per the Committed strategy.
- **Do** lead with real project photography and galleries as the primary proof mechanism.
- **Do** keep the front page uncluttered — only as many sections as a homeowner needs to decide to call.
- **Do** keep the phone number and "Contact Now To Get a Free Quote" CTA visible throughout the scroll.
- **Do** keep all text off-white/white and verify it hits ≥4.5:1 contrast against whatever dark surface it sits on.
- **Do** keep Barn Red reserved for the primary CTA only — never as a hover tint, icon color, or decorative accent.

### Don't:
- **Don't** use a generic cheap-looking contractor template layout.
- **Don't** use a corporate SaaS aesthetic, neon colors, or gradients (including gradient text).
- **Don't** use overly flashy or scroll-choreographed motion — this system is Responsive, not Choreographed.
- **Don't** overload the front page with information.
- **Don't** use uppercase tracked eyebrows, numbered section markers (01/02/03), side-stripe borders, or the hero-metric template — avoid these even though the Kontix reference leans on some of them.
