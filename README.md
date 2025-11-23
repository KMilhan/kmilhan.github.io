# Milhan's landing hub

This repo hosts a small Astro + MDX landing page that points visitors to both public sites: [milhan.kim](https://milhan.kim) and [milhan.lol](https://milhan.lol). Each card links to its GitHub source so people can follow changes or fork the code.

## Local development

```bash
pnpm install
pnpm dev
```

The dev server starts on `http://localhost:4321` by default.

## Build for GitHub Pages

```bash
pnpm build
```

The static output is emitted to the `docs/` directory so it can be published directly via GitHub Pages.
