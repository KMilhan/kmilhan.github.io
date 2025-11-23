# Milhan's personal website

Static site powered by Astro + MDX. The build targets the `docs` directory for GitHub Pages so both
**milhan.kim** and **milhan.lol** can share the same publishing workflow.

## Prerequisites
- Node.js 18+
- `pnpm` installed globally (or use `npx pnpm`)

## Development
```bash
pnpm install
pnpm dev
```

## Build for deployment
```bash
pnpm build
```
The static output is written to `docs/`.

## Preview the built site
```bash
pnpm preview
```
