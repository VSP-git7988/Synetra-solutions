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

## Banner slider & images

**Get the real photos:** run `npm run images`. It downloads all the free stock photos (Pexels, Unsplash, Pixabay) into `public/images`. Sources are listed in `IMAGE-CREDITS.md`.

The home page slider and the section images use placeholder graphics in the brand colours. To use real photos, replace these files in `public/images/` and keep the same names:

| File | Used for | Best size |
|---|---|---|
| `banner-1.jpg`, `banner-2.jpg`, `banner-3.jpg` | Home slider (3 slides) | 1920×900 |
| `page-banner.jpg` | Top banner on inner pages, stats strip and CTA band | 1920×520 |
| `about.jpg` | Home "About" section | 1000×800 |
| `industry-1.jpg` to `industry-3.jpg` | Industry cards | 900×620 |

Slide text and buttons are in `src/components/HeroSlider.tsx`. Slides auto-advance every 6 seconds and pause on hover.

## Brand

- Logo files are in `public/brand/`. Favicons are in `public/`.
- The colours come from the logo and are set in `tailwind.config.ts` under `synetra.*`.
- Fonts: Poppins (headings) and Inter (body).

## Contact form

For now it opens the visitor's email app, pre-filled with their message. To receive submissions directly, connect Formspree or Web3Forms in `src/components/ContactForm.tsx` (search for `TODO`).
