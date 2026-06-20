# Obsedian Forensics — Marketing Site

Enterprise marketing site for **Obsedian Forensics**, a unified forensic intelligence platform. Built with Vue 3 and Vite, the site presents the full product ecosystem (24 products across five families), platform architecture, solutions, industries, and trust/compliance story.

## Tech stack

- [Vue 3](https://vuejs.org/) with Composition API (`<script setup>`)
- [Vue Router 4](https://router.vuejs.org/) for client-side routing
- [Vite 5](https://vitejs.dev/) for dev server and production builds
- Plain CSS with design tokens in `src/styles/tokens.css`

## Getting started

```bash
npm install
npm run dev
```

Or with Bun:

```bash
bun install
bun dev
```

The dev server starts at `http://localhost:5173` by default.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Build for production to `dist/` |
| `npm run preview` | Serve the production build locally |

## Routes

| Path | Page |
|------|------|
| `/` | Homepage — hero, journey, flagship products, Intelligence layer, security, demo |
| `/products` | Product ecosystem hub (five families) |
| `/products/:slug` | Product detail with animated feature preview |
| `/solutions` | Solutions hub |
| `/solutions/:slug` | Solution detail pages |
| `/industries` | Industries hub |
| `/industries/:slug` | Industry detail pages |
| `/platform` | Platform overview — layers, ecosystem diagram, Intelligence layer |
| `/trust` | Security, compliance, and trust |
| `/about` | Company |
| `/contact` | Contact form |
| `/demo` | Demo request |
| `/coverage` | Evidence coverage (lazy-loaded) |

Legacy paths (`/features/*`, `/capabilities`, `/security`, `/architecture`) redirect to the new routes.

## Project structure

```
src/
├── components/     # UI sections, logos, FeatureAnimation, ModuleLogo
├── composables/    # Scroll reveal, count-up, scroll spy hooks
├── content/        # Marketing copy and data (products, solutions, nav, FAQ, etc.)
├── layouts/        # App shell (header, footer, main outlet)
├── router/         # Route definitions and legacy redirects
├── styles/         # Global CSS and design tokens
├── views/          # Page-level components mapped to routes
├── config.js       # Brand names, taglines, demo URLs
└── main.js         # App entry point
```

## Editing content

Most marketing copy lives in `src/content/` rather than in Vue templates:

- **`productEcosystem.js`** — 24 products, five families, journey steps, `INTELLIGENCE_LAYER`, `INSIGHT_LEARNING_LOOP`, legacy redirects
- **`solutions.js`** / **`industries.js`** — Solution and vertical pages
- **`navigation.js`** — Mega-menu and footer links
- **`platformLayers.js`** — Platform layer capabilities grid
- **`config.js`** — Product names (`Obsedian Lens`, `Obsedian Molecules`, etc.) and CTA URLs

Brand constants like `PRODUCT_NAME` and `LENS_NAME` are imported from `config.js` so names stay consistent across the site.

## Platform model

The site describes Obsedian as a five-layer investigation platform:

| Layer | Role | Example products |
|-------|------|------------------|
| **Foundation** | Acquire and preserve evidence | Chain, Vault, Volume, Pulse, Scout |
| **Analysis Engines** | Modality intelligence | Prism, Iris, Echo, Spectra, Motion, Live, Ridge, Folio |
| **DFIR & Cyber** | Endpoint and network forensics | Sentinel, Nexus, Phantom |
| **Intelligence Layer** | Correlate, investigate, learn | Persona, Molecules, Chronos, Lens, INsight |
| **Operations** | Workflow and case management | Flow, Review, Brief, Command |

Six products are flagged as **hero products** (Volume, Prism, Spectra, Molecules, Lens, Command). **Persona** and **INsight** are marked `comingSoon: true`.

## Logos and animations

Product branding is rendered through `ProductTitle.vue`:

- **Dedicated logos** — Prism, Iris, Spectra, Volume, Molecules, Lens, Persona, INsight (`*Logo.vue` components with SVG animations)
- **Module logos** — Chain, Vault, Pulse, Scout, Echo, Motion, Live, Ridge, Folio, Sentinel, Nexus, Phantom, Chronos, Flow, Review, Brief, Command (`ModuleLogo.vue` + `moduleLogoMeta.js`)
- **Fallback** — `GenericProductLogo.vue` for anything unmatched

Product cards and detail pages use **`FeatureAnimation.vue`** — per-product animated previews (biometrics, network hub, learning loop, workflow pipeline, etc.). Each product’s `animation` field in `productEcosystem.js` selects the animation type.

The homepage **Active intelligence** section (`LearningLoopSection.vue`) animates the full Intelligence layer pipeline (Persona → Molecules → Chronos → Lens → INsight) with auto-cycling highlights and the INsight learning-loop flywheel.

## Build output

Production builds emit static assets to `dist/` and can be deployed to any static host (Netlify, Vercel, S3, nginx, etc.). Configure your host to serve `index.html` for all routes so Vue Router history mode works correctly.
