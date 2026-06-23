---
name: Daniel F. Parra
description: Personal site of a behavioral & experimental economist — a field notebook at night.
colors:
  ink-page: "#0b0c0a"
  surface: "#121412"
  surface-raised: "#1a1d1a"
  ink: "#ebe9e2"
  ink-muted: "#a8a69d"
  ink-faint: "#66645d"
  rule: "#ebe9e214"
  rule-strong: "#ebe9e22e"
  accent-mint: "#7ce3b5"
  accent-ink: "#0b0c0a"
typography:
  display:
    fontFamily: "Google Sans Flex, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(72px, 9vw, 136px)"
    fontWeight: 500
    lineHeight: 0.92
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "Google Sans Flex, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(44px, 5.5vw, 76px)"
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Google Sans Flex, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "26px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.14em"
rounded:
  sm: "2px"
  pill: "100px"
  full: "50%"
spacing:
  xs: "8px"
  sm: "14px"
  md: "32px"
  lg: "72px"
  section: "120px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ink-page}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
  button-primary-hover:
    backgroundColor: "{colors.accent-mint}"
    textColor: "{colors.accent-ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
  cta-nav:
    backgroundColor: "{colors.accent-mint}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.pill}"
    padding: "9px 16px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.pill}"
    padding: "7px 13px"
---

# Design System: Daniel F. Parra

## 1. Overview

**Creative North Star: "The Field Notebook at Night"**

This is an economist's observation log kept in low light. The page is a near-black
field (`#0b0c0a`); a single luminous minty-green (`#7ce3b5`) is the ink reserved for
findings — the one thing that glows. A high-contrast serif (Google Sans Flex) plays
the part of wall text and headlines; Inter carries the prose; Geist Mono is the
margin note, the catalog label, the timestamp. The result reads as studious and
precise, but the warm bone-white text (`#ebe9e2`, not a clinical white) and the
generous breathing room keep it human and inviting rather than austere. The work
on display is serious — lying, corruption, the cost of honesty — so the design
stays calm and lets the findings carry the weight.

Depth comes from tonal layering, not boxes: three near-black surfaces stacked with
hairline rules between them, the way ruled paper separates entries. Motion is part
of the build, not decoration laid on top — elements rise into place on load, the
accent answers every hover, and the research entries unfold like turning to a
dog-eared page. Nothing bounces; everything decelerates.

What this system rejects: the **generic university faculty page** (white background,
blue underlined links, headshot-left, a flat publication dump) and the **Google
Scholar / ORCID export** (a database listing with no point of view). The papers
here are curated specimens, not rows in a table.

**Key Characteristics:**
- Near-black ground; one mint accent used sparingly as "the finding"
- Three-family type system: serif display, Inter body, mono labels
- Flat surfaces, tonal layering, hairline rules — no card shadows
- Tactile, responsive motion with a single decelerating ease
- Warm-neutral ink, not clinical white; calm density, never cramped

## 2. Colors

A near-monochrome dark field with one decisive green. Warmth lives in the bone ink
and the restraint, not in the background hue.

### Primary
- **Signal Mint** (`#7ce3b5`): The single accent, drawn from the green of the
  subject's glasses in the portrait. Reserved for "the finding" — active nav dot,
  emphasized words inside abstracts (`<em>`), the scale-bar that grows beside an
  open paper, primary-button hover, link hovers, the breathing brand dot. It glows
  (`box-shadow: 0 0 12px`) on the brand mark. Its rarity is the entire point.

### Neutral
- **Page Black** (`#0b0c0a`): The body ground. Also the ink color *on* the mint
  (buttons, selection), so the accent reads as lit paper.
- **Surface** (`#121412`) and **Surface Raised** (`#1a1d1a`): Tonal steps for nav
  pills, hovered method tiles, and inset panels. Never separated by shadow — only
  by tone and a hairline.
- **Bone Ink** (`#ebe9e2`): Primary text. Deliberately warm off-white, not `#fff`.
- **Muted Ink** (`#a8a69d`): Secondary text, ledes, author lines. Passes 4.5:1 on
  Page Black; do not push lighter.
- **Faint Ink** (`#66645d`): Mono labels, eyebrows, captions, disabled states. For
  large/label text only — never for body-size prose.
- **Rule** (`#ebe9e214`, ~8% bone) and **Rule Strong** (`#ebe9e22e`, ~18% bone):
  Hairline dividers and pill borders. The structural grammar of the page.

### Named Rules
**The One Green Rule.** Signal Mint appears on no more than ~10% of any screen. It
marks findings and the single primary action — nothing else. If a second element
wants the green, one of them is not a finding.

**The Warm-White Rule.** Body text is Bone Ink (`#ebe9e2`), never pure white. The
warmth is what keeps a dark, serious page from feeling clinical.

## 3. Typography

**Display Font:** Google Sans Flex (variable; falls back to Inter)
**Body Font:** Inter
**Label/Mono Font:** Geist Mono

**Character:** A contrast pairing, not a blend — a soft, high-contrast variable
serif for voice against a neutral grotesque for reading, with a true monospace for
machine-precise labels. The serif's light-weight italics (rendered as upright
`font-style: normal`, weight 300, in mint) are the signature emphasis move.

### Hierarchy
- **Display** (500, `clamp(72px, 9vw, 136px)`, line-height 0.92, tracking -0.05em):
  The hero name only. Rises into view line-by-line on load.
- **Headline** (500, `clamp(44px, 5.5vw, 76px)`, line-height 1.0, tracking -0.03em):
  Section openers (`h2`). One emphasized word per headline set in weight 300 + mint.
- **Title** (500, 26px, line-height 1.2, tracking -0.02em): Paper titles, method
  and CV-column headings. Shifts to mint on hover/open.
- **Body** (400, 15px, line-height 1.55): Default prose. Ledes step up to 17–19px.
  Abstracts cap around 65–75ch (`max-width` ~820px).
- **Label** (500, 11px, tracking 0.14–0.18em, UPPERCASE): Mono eyebrows, section
  numbers (`§ 02`), meta, captions, button text. Short strings only.

### Named Rules
**The Mint Emphasis Rule.** Emphasis inside serif headings and abstracts is done by
dropping to weight 300 and switching to Signal Mint — never by italic slant, never
by bold. `<em>` is restyled to `font-style: normal`.

**The Mono-Label Rule.** Monospace is for labels, numbers, and timestamps only.
Never set a sentence or an abstract in Geist Mono.

## 4. Elevation

Flat by doctrine. There are no drop shadows on surfaces, cards, or buttons. Depth is
built from three tonal near-blacks (Page → Surface → Surface Raised) and hairline
rules, the way entries are separated on ruled paper. The only `box-shadow` in the
system is the soft mint **glow** on the live brand dot and the expanding pulse ring
on the hero kicker — light, not lift.

### Named Rules
**The No-Lift Rule.** Surfaces never cast a shadow to fake height. If something
needs to feel raised, it steps up one tonal surface and gains a hairline, or it
moves (a 1–2px translate on hover). Glow is reserved for live/active indicators.

## 5. Components

Components are tactile and responsive: every interactive element answers the pointer
with motion or the mint, and pressables confirm the press.

### Buttons
- **Shape:** Full pill (`border-radius: 100px`).
- **Primary:** Bone Ink background, Page Black text, padding `14px 22px`, mono 13px.
  Hover flips to Signal Mint background + Page Black text and lifts `translateY(-2px)`.
- **Ghost:** Transparent with a Rule Strong hairline border; hover brightens the
  border to Bone Ink and lifts.
- **Press:** All buttons take `transform: scale(0.97)` on `:active` for tactile
  feedback. Transitions name their properties (`transform, background, …`), never `all`.

### Chips / Pills
- **Style:** Transparent, Rule Strong hairline border, Muted Ink mono text, pill
  shape, with a tiny leading dot.
- **State:** On hover the border and text go Signal Mint and the leading dot lights.
  Skill/CV pills lift `translateY(-1px)`; they are non-interactive (cursor default).

### Cards / Containers
- **Corner Style:** Sharp — `2px` radius (the "plate" corner), not rounded cards.
- **Background:** Surface tiles inside a Rule Strong grid (1px gaps reveal the
  ground as gridlines). Hover steps a method tile up to Surface.
- **Shadow Strategy:** None. See Elevation.
- **Border:** Hairline (Rule / Rule Strong) only.
- **Internal Padding:** `40px 32px` for method tiles; `18–28px` for meta and footer cells.

### Navigation
- **Style:** Fixed top bar, `backdrop-filter: blur(20px)` over a 70% Page Black mix,
  Rule bottom border; shrinks padding on scroll.
- **Links:** Mono 12px, Muted Ink, pill-shaped; hover/active fill to Surface and the
  active link grows a Signal Mint dot before its label. Driven by a scroll-spy
  `IntersectionObserver`. Hidden below 960px.

### Research Paper (signature component)
The defining pattern: each paper is a row that **unfolds** to its abstract. Closed,
it shows number, title, hook, venue/year, and a `+` toggle. On open it animates via
`grid-template-rows: 0fr → 1fr` (true-height, GPU-friendly — never `max-height`),
a Signal Mint scale-bar grows down the left edge (`transform: scaleY`), and the `+`
rotates 45° into a `×`. This is the system's thesis in one component: a curated
specimen that invites a closer look.

## 6. Do's and Don'ts

### Do:
- **Do** keep Signal Mint to ≤10% of any screen — findings and the one primary
  action only (The One Green Rule).
- **Do** set body text in Bone Ink (`#ebe9e2`), never pure white (The Warm-White Rule).
- **Do** emphasize by dropping to serif weight 300 + mint, never italic or bold.
- **Do** convey depth with tonal surfaces and hairline rules; keep surfaces flat.
- **Do** name transition properties and give pressables `scale(0.97)` on `:active`.
- **Do** honor `prefers-reduced-motion`: entrances resolve instantly, looping
  decoration (marquee, breathing dots) stops.
- **Do** animate the paper open with `grid-template-rows`, not `max-height`.

### Don't:
- **Don't** build a **generic university faculty page**: no white background, no blue
  underlined links, no headshot-left + flat publication dump.
- **Don't** ship a **Google Scholar / ORCID-style** listing — papers are curated
  specimens, not database rows.
- **Don't** reach for **SaaS landing-page clichés**: no hero-metric template, no
  gradient buttons, no identical icon-heading-text card grids, no marketing
  buzzwords (streamline, empower, seamless, world-class).
- **Don't** over-design into a **flashy portfolio**: no gratuitous animation or
  gimmicks that would undercut academic credibility.
- **Don't** add drop shadows to fake elevation (The No-Lift Rule).
- **Don't** set sentences or abstracts in Geist Mono; mono is labels only.
- **Don't** use `transition: all` or animate layout properties like `max-height`.
- **Don't** push Muted Ink lighter for "elegance" — it must hold 4.5:1 on the ground.
