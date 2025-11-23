# Milhan's personal website

## Stack
- Astro + MDX for content-rich pages
- Static output to the `docs` directory for GitHub Pages

## How to run dev server
```bash
pnpm install
pnpm dev
```

## How to build deployable artifact
```bash
pnpm build
```
The built site will be emitted to `docs/`.

## How to update website
- Update thumbnails with `./thumb_gen.sh`
- Run the build so `docs` reflects the latest changes
- Commit and push to the `master` branch
