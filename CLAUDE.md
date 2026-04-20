# CompAssist — Compensation Assistance Services

## What this is

Marketing website for Compensation Assistance Services (CAS) / Comp Assist Rehab — an Australian provider of vocational and functional assessments, medicolegal opinions, injury management, return to work services, and pre-employment medicals. Operates nationwide with no travel charges.

## Tech stack

- **Build:** Vite (static multi-page site)
- **CSS:** Tailwind CSS v4 (`@tailwindcss/vite` plugin)
- **Hosting:** Vercel (https://comp-assist.vercel.app)
- **Fonts:** Libre Franklin (headings h1-h3), Inter (body)

## Brand

- **Primary red:** `#DD314A` (defined as `--color-primary-500` in `src/styles.css`)
- **Accent:** Navy blue `#172554` (used for section eyebrow labels on light backgrounds)
- **Footer:** Soft grey `bg-gray-50`
- **Logos:** `public/logo.png` (icon), `public/logo-text.png` (wordmark). Source files in `assets/brand/`
- **Hero backgrounds:** Flat `bg-primary-500`, no gradients or overlays
- **Tone:** Insurance / compliance / professional — not tech-modern

## Project structure

```
├── index.html                  # Homepage
├── services.html               # All services overview
├── earning-capacity.html       # Medico Legal Earning Capacity
├── functional-assessments.html # Functional Assessments
├── workplace-assessments.html  # Workplace Assessments
├── employability-assessments.html
├── vocational-assessments.html
├── labour-market-research.html
├── pre-employment-medicals.html
├── team.html                   # Our Team
├── coverage.html               # Coverage / locations
├── refer.html                  # Referral form
├── contact.html                # Contact form
├── privacy.html                # Privacy policy
├── src/
│   ├── main.js                 # Nav, mobile menu, scroll animations, form handling
│   └── styles.css              # Tailwind imports, theme tokens, base styles, animations
├── public/                     # Static assets (served at /)
│   ├── logo.png                # Icon logo (CAS column mark)
│   ├── logo-text.png           # Wordmark ("Compensation Assistance Services")
│   └── logo-long.png           # Stacked logo (unused, kept for reference)
├── assets/brand/               # Source brand files (not served)
├── vite.config.js              # Vite config with all page entry points
└── vercel.json                 # Clean URLs, no trailing slash
```

## Key patterns

- **Nav + footer** are duplicated in every HTML file (no templating). When changing nav/footer, update all 14 files.
- **Hero sections** use `<section class="relative ..."><div class="absolute inset-0 bg-primary-500">` pattern.
- **Scroll animations** via `data-animate` attribute + IntersectionObserver in `main.js`.
- **Forms** use `data-contact-form` attribute; JS handles submit with visual feedback.
- **Services dropdown** on desktop uses mouseenter/mouseleave; mobile uses click toggle.

## Commands

```bash
npm run dev       # Start dev server (localhost:5173)
npm run build     # Production build to dist/
npm run preview   # Preview production build
npx vercel --prod --yes  # Deploy to Vercel
```

## Contact info (used across site)

- Phone: 1300 891 330
- Email: admin@compassist.com.au
- Address: PO BOX 3182 Blakehurst NSW 2221
