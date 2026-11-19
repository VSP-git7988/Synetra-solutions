# Synetra Solutions LLC: Website (client preview)

A static Next.js 14 + Tailwind site. This preview has 7 pages:

- `/`: Home
- `/about`, `/contact`
- `/services`: overview of all 6 services
- `/services/ai-solutions`: the full service page, used as the template for the others
- `/industries`: overview of all 3 industries
- `/industries/financial-services`: the full industry page, used as the template for the others

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build for the server

```bash
npm run build      # outputs a static site to /out
```

Upload the contents of `/out` to the web root on the server. No Node.js is needed on the server.

## Editing content

All text lives in `src/data/`:

| File | What's inside |
|---|---|
| `site.ts` | Phone, email, address, LinkedIn, stats and client names. **Lines marked `TODO: client` need real details.** |
| `services.ts` | All 6 services |
| `industries.ts` | All 3 industries |

### Adding another full service or industry page

1. In `services.ts` (or `industries.ts`), copy the `detail: { ... }` block from `ai-solutions` (or `financial-services`) into the new entry and rewrite the text.
2. Set `hasDetail: true` on that entry.
3. Run `npm run build`. The page is generated at `/services/<slug>/` and all menus, footer links and cards switch to it automatically.

## Motion & effects

- `src/components/motion/TideShader.tsx`: the live WebGL "tide" background in the logo's blues. It reacts to the cursor and falls back to a CSS gradient when WebGL isn't available.
- `SmoothScroll.tsx`: Lenis smooth scrolling, synced with GSAP ScrollTrigger.
- `Cursor.tsx`: the custom cursor. It shows only on desktop with a mouse.
- `Preloader.tsx`: the intro where the logo pixels assemble. It plays once per browser session.
- `Magnetic.tsx`: buttons that are pulled toward the cursor.
- `src/components/home/`: the scroll-scrubbed manifesto, the pinned horizontal services, the velocity marquee, the hover-preview industry list and the stacking process cards.

All motion switches off automatically for visitors who have "reduce motion" turned on.

## Brand

- Logo files are in `public/brand/`. Favicons are in `public/`.
- The colours come from the logo and are set in `tailwind.config.ts` under `synetra.*`.
- The brand motifs are in `src/components/Brand.tsx`:
  - `SwooshLine` / `SwooshEdge`: the S curve
  - `PixelMosaic` / `PixelMarker`: the logo's square cluster
  - `CircuitLines`: the faint network-line texture

## Contact form

For now it opens the visitor's email app, pre-filled with their message. To receive submissions directly, connect Formspree or Web3Forms in `src/components/ContactForm.tsx` (search for `TODO`).
