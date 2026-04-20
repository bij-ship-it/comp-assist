# Compensation Assistance Services

Website for [Compensation Assistance Services](https://comp-assist.vercel.app) (CAS) — Australia's leading vocational and functional assessment provider.

## Quick start

```bash
npm install
npm run dev     # http://localhost:5173
```

## Deploy

```bash
npm run build
npx vercel --prod --yes
```

## Stack

- **Vite** — static multi-page build
- **Tailwind CSS v4** — styling via `@tailwindcss/vite`
- **Vercel** — hosting with clean URLs
- **Libre Franklin** — headings / **Inter** — body

## Structure

```
├── *.html              # 14 pages (Vite MPA entry points)
├── src/                # JS + CSS source
├── public/             # Static assets served at /
├── assets/brand/       # Source brand files (not served)
├── vite.config.js      # Build config
└── CLAUDE.md           # Project context for Claude Code
```
