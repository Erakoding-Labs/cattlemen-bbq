# Cattleman's BBQ — Brady, TX

Premium, conversion-focused website for **Cattleman's BBQ**, an authentic Texas-style barbecue restaurant in Brady, Texas.

Built with **SvelteKit + Svelte 5**, **TypeScript (strict)**, **Tailwind CSS v4**, **Lucide icons**, and scroll/parallax motion. SEO-optimized with Open Graph, Local Business + Menu JSON-LD schema, sitemap, and robots.

## Pages

| Route        | Description                                                            |
| ------------ | --------------------------------------------------------------------- |
| `/`          | Cinematic parallax hero, featured meats, process, sides, reviews, map |
| `/menu`      | Full menu, 9 categories, sticky scroll-spy nav, prices, popular badges|
| `/about`     | Brand story, smoking process timeline, values                         |
| `/reviews`   | 4.0★ summary, rating breakdown, stats, testimonials, trust CTA        |
| `/gallery`   | Filterable masonry gallery with keyboard-accessible lightbox          |
| `/contact`   | Click-to-call, hours, service options, contact form, Google Map       |

## Develop

```bash
npm install
npm run dev      # start dev server
npm run check    # type-check (svelte-check, strict)
npm run build    # production build
npm run preview  # preview production build
```

## Deploy

Uses `@sveltejs/adapter-auto` and is fully prerendered — deploy to **Vercel** or **Cloudflare Pages** with zero config. For a fixed target, swap in `@sveltejs/adapter-vercel` or `@sveltejs/adapter-cloudflare`.

## Structure

```
src/
  lib/
    actions/reveal.ts        # scroll-reveal IntersectionObserver action
    components/              # Navbar, Footer, Seo, cards, hero, CTA, UI primitives
    data/                    # business info, menu, reviews, gallery, images, schema
  routes/                    # one folder per page + sitemap.xml
  app.css                    # Tailwind v4 theme (charcoal/ember/bbq-red palette)
```

## Notes

- Business details (address, phone, hours, rating) live in `src/lib/data/business.ts`.
- Imagery uses Unsplash CDN URLs with lazy loading; `SmartImage` shows a smoky
  fallback if any remote image fails, so the UI never shows a broken image.
- Replace the `mailto:` contact-form fallback with a real form endpoint
  (e.g. Formspree, or a SvelteKit form action) before launch if desired.
