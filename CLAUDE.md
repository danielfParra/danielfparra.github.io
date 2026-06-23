# Daniel F. Parra — personal academic site

Static, single-page GitHub Pages site (`index.html` + `assets/`). No build step:
edit the HTML/CSS directly and open in a browser to verify.

## Design Context

This project is set up for the **impeccable** skill. Two root files are the source
of truth for any UI work — read them before designing or editing the interface:

- **PRODUCT.md** — strategy: register (`brand`/portfolio), audiences (peers,
  students, journalists), brand personality (**warm · precise · inviting**),
  anti-references, and design principles.
- **DESIGN.md** — visual system: tokens, type, components, and named rules. Machine
  tokens live in its YAML frontmatter; `.impeccable/design.json` is the sidecar.

**North Star:** *"The Field Notebook at Night"* — near-black ground, one luminous
mint (`#7ce3b5`) reserved for findings, serif display + Inter body + Geist Mono
labels, flat surfaces with hairline rules, tactile/responsive motion on a single
ease-out curve.

Load-bearing rules (full list in DESIGN.md §6):
- **The One Green Rule** — mint on ≤10% of any screen; findings + one primary action.
- **The Warm-White Rule** — body text is Bone Ink `#ebe9e2`, never pure white.
- Flat by default (no card shadows); emphasis via serif weight-300 + mint, not italic/bold.
- Honor `prefers-reduced-motion`; never `transition: all`; animate the paper open
  with `grid-template-rows`, not `max-height`.

Open tension to resolve over time: PRODUCT.md asks for **warm/human**, current build
leans austere dark/editorial — pull toward warmth via voice, contrast, and imagery,
not by abandoning the identity.
