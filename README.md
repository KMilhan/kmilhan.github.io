# Milhan's personal websites index

This repository now uses **Astro + MDX** to introduce both personal domains: [milhan.kim](https://milhan.kim) and [milhan.lol](https://milhan.lol).

## Getting started

```bash
pnpm install
pnpm run dev
```

## Building for GitHub Pages

The Astro build outputs to the `docs` directory so GitHub Pages can serve the static site directly.

```bash
pnpm run build
```

## Notes

- The landing page is written in MDX (`src/pages/index.mdx`).
- Layout and styles live in `src/layouts` and `public/global.css`.
- Public assets remain in `public/` and are available to Astro at build time.
