# Handoff: Rebecca Gunawan — Creative Portfolio

## Overview
A personal portfolio for **Rebecca Gunawan** — a mechanical engineer / designer. Warm "creative-minimalist" aesthetic: cream surfaces, organic shapes, hand-crafted "sticker" shadows, a custom purple cursor, and playful cursor-trail micro-interactions. Two primary pages plus a contact page, linked by a sticky nav and a shared closing CTA:

- **About** (`About.dc.html`) — landing page: full-bleed cursor-trail photo hero, an "About Me" trio of hover-flip cards, an auto-scrolling skills marquee, and a closing CTA.
- **Projects** (`Portfolio.dc.html`) — hero + three horizontal hover-to-expand project rows + closing CTA. (File is still named `Portfolio.dc.html`; the visible nav/footer label and hero read "Projects".)
- **Let's Chat** (`LetsChat.dc.html`) — contact page with email/LinkedIn and a live "Message Creator" form that composes a mailto.

## About the Design Files
These are **design references authored in HTML** ("Design Components", `.dc.html`) — prototypes of look + behavior, **not** production code to ship. They rely on a small custom runtime (`support.js`) and a drag-and-drop image web component (`image-slot.js`). **Do not port that runtime.** Recreate the designs in the target codebase's environment (React/Vue/Svelte/native), or pick the best framework if none exists.

### How to read a `.dc.html` file
- Markup between `<x-dc>…</x-dc>` is the template; `{{ expr }}` are data bindings, `<sc-for>`/`<sc-if>` are loop/conditional blocks.
- A `<script data-dc-script>` block holds `class Component extends DCLogic { renderVals() {…} }` — the state/handlers. Reimplement as a normal component.
- Styling is **inline** on elements. Shared CSS lives only in `<helmet><style>`: `@keyframes`, hover rules (`.projrow:hover`, `.flipcard:hover`, `.marquee-track`), the `.ms` Material-Symbols helper, and the custom cursor rule.

## Fidelity
**High-fidelity.** Colors, type, spacing, and interactions are final. Recreate pixel-accurately, then wire the interactions below.

## Design Tokens

### Color palette
| Role | Hex |
|---|---|
| Surface / background | `#fcf9f3` |
| Surface container low (cards) | `#f6f3ed` |
| Surface container (footer) | `#f0eee8` |
| On-surface (text) | `#1c1c18` |
| On-surface-variant (muted text) | `#58423c` |
| Primary / teal | `#3f6267` |
| Primary-fixed-dim (pale blue) | `#a8cdd3` |
| Primary-fixed (paler blue) | `#c4e9ef` |
| Sage accent (muted / deep) | `#ccd6ad` / `#5e6e45` |
| Tertiary / plum (cursor color) | `#87466b` |
| Tertiary-fixed-dim / pale pink | `#ffaed8` / `#ffd8e9` |
| Outline / outline-variant (dots) | `#8b716a` / `#dfc0b7` |
| Sticker shadow | `#1c1c18` |

### Typography
- **Headings:** `'Bricolage Grotesque'` 700–800, tight tracking (−0.03em to −0.04em).
- **Body:** `'Manrope'` 400–500, line-height 1.6.
- **Labels / eyebrows / buttons:** `'Space Mono'` 500, UPPERCASE, letter-spacing 0.08–0.14em.
- **Icons:** Material Symbols Outlined (`.ms`).
- Key sizes: hero H1 **84px**; section H2 **44–48px**; project H3 **32px**; hero sub-paragraph **30px** (Bricolage 500, with italic+bold primary emphasis spans); body 16–18px; labels 11–13px.
- Google Fonts: Bricolage Grotesque (400;700;800), Manrope (400;500;700), Space Mono (400;500;700), Material Symbols Outlined.

### Spacing & shape
- Page padding **80px** horizontal; content max-width **1120–1280px**, centered. Section rhythm ~120px top / 140px bottom on heroes & CTA; footers compact (~32px).
- Radius: cards/CTA **20–24px**; pills/buttons **9999px**; photo tiles **10–16px**.
- **Sticker shadow:** `box-shadow: 4px 4px 0 0 #1c1c18;` (hover grows to `7px 7px`, press `2px 2px`).
- **Dot grid bg:** `radial-gradient(circle, #dfc0b7 1px, transparent 1px); background-size: 40px 40px;` — full-bleed on heroes & CTA.

### Custom cursor (all pages)
The default cursor is a **bigger purple arrow** (plum `#87466b`, white outline) set via an inline-SVG data-URI `cursor:` on `body`/`html` and on `a, button, .projrow, .contactrow, .flipcard, .chip` (pointer variant). `input, textarea` keep a text caret. Recreate as a custom cursor asset in the target app.

## Screens / Views

### Nav (all pages)
Sticky, `rgba(252,249,243,.82)` + `backdrop-filter: blur(12px)`, bottom hairline. Left: wordmark "Rebecca Gunawan" (Bricolage 800, 28px, teal, **straight** — not rotated). Right: **About**, **Projects** links (active link underlined teal) + a **Contact** pill linking to `LetsChat.dc.html`.

### About — Hero (cursor photo trail)
Full-width, dot-grid bg, min-height ~78vh, **no overflow clip** (photos may layer over the next section). Centered text: H1 "Hi, I'm Rebecca." (84px); sub-paragraph (Bricolage 500/30px) with italic+bold teal spans *moving parts*, *human-centred teams*, *innovation*; teal "See My Work" pill → Projects.
**Photo trail:** 40 absolutely-positioned image tiles (104×128). On mouse-move within the hero, a tile is dropped at the cursor (only after traveling ≥ `trailSpacing` px), cycling all 40 and looping; each visible tile fades after `photoHoldSeconds`. Idle hint shows when empty. **Tweakable props:** `photoHoldSeconds` (0.4–6), `trailSpacing` (20–120 px), `marqueeSeconds` (20–140).

### About — "About Me" flip cards
Section heading "About Me" on sage `#f6f3ed`. 3-column grid, each card slightly rotated, **380px tall**, a **CSS 3D flip on hover** (`perspective:1200px`; inner `transform-style:preserve-3d`, `rotateY(180deg)`, `transition .65s`; faces `backface-visibility:hidden`).
- Front: round icon chip + title + short copy. Cards: **Studies** (icon `school`) "Bachelor of Mechanical Engineering (Honours). Always tinkering, always learning…"; **Interests** (icon `interests`) "Public speaking, running, the outdoors, and meeting curious people…"; **Hobbies** (icon `palette`) "Knitting, sewing, reading, and making things by hand…".
- Back: a **single full photo** (`image-slot`, rounded, shadow) — easy to swap. Slot ids: `about-studies-3`, `about-interests-3`, `about-hobbies-3`.

### About — Skills marquee
On the same sage block. One row of pill chips auto-scrolling & looping (`@keyframes marquee → translateX(-50%)`, **70s** linear, pause on hover, edge mask, duplicated list for seamless loop). Chips: CAD · Product Design · Project Documentation · Electronics · C · MATLAB · Problem Solving · Prototyping · Innovation.

### About — Closing CTA (also on Projects)
Centered on dot-grid. H2 "Have a look at *cool things* I've built." (*cool things* italic teal); paragraph "A mix of robotics, mechanical design, and hands-on engineering. Take a look through what I've been building."; teal **View Projects** pill → Projects. (Projects page CTA uses the contact-oriented copy + a **Let's Collaborate** pill → Let's Chat.)

### Both heroes also run a cursor "icon trail"
A fixed full-screen overlay spawns floating **math glyphs** (∑ π √ ∫ × ÷ ∞ θ Δ µ f(x) ≈) and **robotics Material icons** (smart_toy, precision_manufacturing, memory, bolt, settings_suggest, build, rocket_launch, cable) in the accent colors, each drifting up and fading (~1.1–1.6s). On **About** it runs everywhere except the hero (which has the photo trail) and pauses over `a/button`. On **Projects** it pauses over `.projrow`. On **Let's Chat** it pauses over the `.creator-zone` (the form).

### Projects — hero
Full-width dot-grid. H1 "Rebecca's **Projects**" (84px, "Projects" teal, no underline); description (Bricolage 500/30px) with italic+bold teal spans *curiosity*, *engineering*, *thoughtful design*; **Let's Collaborate** pill → Let's Chat.

### Projects — project rows (×3)
Three **horizontal rows** (max-width 1120, gap 28). Each: `#f6f3ed` bg, hairline border, radius 24, sticker shadow. Left: 240px-wide `image-slot` (radius 16, min-height 180). Right: Space-Mono genre eyebrow (sage) + Bricolage 700/32px heading + a **collapsed `.details`** block.
**Hover:** details expand (`max-height 0 → 300px`, opacity, margin-top), the row lifts (`translate(-2px,-2px)`, shadow → `7px 7px`, border → teal), and the **left image column grows to min-height 300px** so the portrait shows fully (one shared rule). No "view" links — hover just reveals the description.
Content: **Warman Competition** (Robotics & Automation) — mechatronic payload-retrieval system, CAD + design-build-test; **VEX Robot Autonomous Navigation** (Robotics & Automation) — autonomous line-follower in C, optical feedback, P/PI control; **Towers in the Wind** (Structural Design · CAD) — weather-resistant cardboard tower under material constraints. Slot ids `pf-row-1..3`.

### Let's Chat
Two columns. Left: "Have an idea? *Let's make it real.*", plus Email (`rebeccagunawan.nz@gmail.com`) and LinkedIn (`https://www.linkedin.com/in/rebeccagunawan/`) contact rows (sticker-shadow icon tiles). Right (`.creator-zone`): **Message Creator** form — name, email, topic select, message — with a **live preview** that assembles the email body; the Send button opens a prefilled `mailto:`.

### Footer (all pages, identical)
`#f0eee8`, compact. Left: "© 2026 Rebecca Gunawan." Right: **About / Projects / Contact** links. **All footer text is teal `#3f6267`.**

## Interactions — summary
- **Custom purple cursor** site-wide (text caret in form fields).
- **About hero photo trail** (40 photos, distance-gated, timed fade; tweakable).
- **Icon trail** (math + robotics) on every page, pausing over the relevant interactive zone.
- **Flip cards** (CSS 3D, single-photo back).
- **Skills marquee** (infinite CSS scroll, pause on hover, masked edges).
- **Project rows** (CSS hover expand + image grows to portrait height).
- **Buttons/pills**: hover lift / press scale, sticker shadows.
- **Message Creator**: controlled inputs → live preview → mailto.
- Consider disabling trails/marquee under `prefers-reduced-motion`.

## State Management
Mostly CSS. JS state: About hero photo-trail (40-slot positions/visibility, rolling index, last-point, fade timers; tweak props) and the icon-trail listeners (ephemeral DOM nodes via Web Animations API). Let's Chat holds the form fields + derived preview string.

## Assets
- **Photos:** drag-and-drop `image-slot` placeholders in the prototype, persisted in `.image-slots.state.json` by `id`. In production replace with real optimized images. Ids: hero trail `about-ph-0..39`; flip backs `about-studies-3` / `about-interests-3` / `about-hobbies-3`; project rows `pf-row-1..3`.
- **Icons:** Google Material Symbols Outlined.
- **Fonts:** Bricolage Grotesque, Manrope, Space Mono.
- **Cursor:** inline-SVG purple arrow (in each page's `<helmet><style>`).

## Files
- `About.dc.html` — About / landing (photo-trail hero, flip cards, marquee, CTA, icon trail).
- `Portfolio.dc.html` — Projects page (hero, 3 project rows, CTA, icon trail).
- `LetsChat.dc.html` — contact page (info + Message Creator, icon trail).
- `image-slot.js` — drag-and-drop placeholder web component (reference; replace with real images).
- `support.js` — the `.dc.html` runtime (reference only; **do not port**).

> `.dc.html` files fetch `support.js`, so preview via a static server (e.g. `npx serve`) rather than `file://`.
