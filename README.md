# Obsedian Forensics — Marketing Site

Enterprise marketing site for **Obsedian Forensics**, a unified forensic intelligence platform. Built with Vue 3 and Vite, the site presents the product ecosystem, platform architecture, solutions, industries, and trust/compliance story.

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
| `/` | Homepage — hero, investigation journey, flagship products, learning loop |
| `/products` | Product ecosystem hub |
| `/products/:slug` | Individual product detail pages |
| `/solutions` | Solutions hub |
| `/solutions/:slug` | Solution detail pages |
| `/industries` | Industries hub |
| `/industries/:slug` | Industry detail pages |
| `/platform` | Platform overview — layers, ecosystem diagram, INsight loop |
| `/trust` | Security, compliance, and trust |
| `/about` | Company |
| `/contact` | Contact form |
| `/demo` | Demo request |

Legacy paths (`/features/*`, `/capabilities`, `/security`, `/architecture`) redirect to the new routes.

## Project structure

```
src/
├── components/     # Reusable UI sections and product logos
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

- **`productEcosystem.js`** — Product families, slugs, highlights, journey tags, legacy feature redirects
- **`solutions.js`** / **`industries.js`** — Solution and vertical pages
- **`navigation.js`** — Mega-menu and footer links
- **`config.js`** — Product names (`Obsedian Lens`, `Obsedian Molecules`, etc.) and CTA URLs

Brand constants like `PRODUCT_NAME` and `LENS_NAME` are imported from `config.js` so names stay consistent across the site.

## Platform model

The site describes Obsedian as a five-layer investigation platform:

1. **Foundation** — Evidence acquisition and preservation (e.g. Volume)
2. **Analysis Engines** — Modality intelligence (Prism, Iris, Spectra, Echo, …)
3. **DFIR & Cyber** — Endpoint and network forensics
4. **Intelligence Layer** — Persona (subject profiles), Molecules (correlation), Lens (copilot), INsight (learning loop)
5. **Operations** — Workflow, collaboration, and reporting

Product logos live in `src/components/` (e.g. `PrismLogo.vue`, `LensLogo.vue`).

## Build output

Production builds emit static assets to `dist/` and can be deployed to any static host (Netlify, Vercel, S3, nginx, etc.). Configure your host to serve `index.html` for all routes so Vue Router history mode works correctly.
