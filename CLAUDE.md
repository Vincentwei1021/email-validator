# CLAUDE.md — MailCheck

## Project Overview
Email address validation with MX and SMTP checks. Single-page micro-tool site powered by Agent Toolbox API.

## Architecture
```
src/app/
├── layout.tsx       # Root layout (Space Grotesk font, Emerald accent)
├── globals.css      # Dot-grid background, animations, ${color} theme
├── page.tsx         # Landing page (imports Hero + main tool)
├── robots.ts        # robots.txt
└── sitemap.ts       # XML sitemap
src/components/
├── Header.tsx       # Brand header with Emerald accent
├── Hero.tsx         # Gradient hero section with floating emojis
├── EmailValidator.tsx # Main tool component (API integration)
├── HowTo.tsx        # How-to steps section
├── FAQ.tsx          # FAQ accordion
└── Footer.tsx       # Brand footer
```

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS v4
- **Font**: Space Grotesk (headings), system font (body)
- **Accent Color**: Emerald
- **API**: Agent Toolbox API (https://api.toolboxlite.com)
- **Deploy**: Vercel
- **Domain**: https://email.toolboxlite.com

## Build & Deploy
```bash
npm run build          # Verify build
vercel --prod          # Deploy to Vercel
```

## Design System
- Mobile-first, 44x44px touch targets
- Dot-grid background pattern (radial-gradient, 40px spacing)
- Gradient text on hero headings (text-5xl to text-7xl)
- Floating emoji animations (animate-float)
- Pill badge above hero title
- Card wrappers with shadow-lg + ring
- No pure white backgrounds (use gray-50 or dot-grid)
- 70-20-10 color rule: neutral-dominant, Emerald-secondary, contrasting-accent
- LCP < 2.5s, CLS < 0.1

## Key Conventions
- API calls go to `NEXT_PUBLIC_API_URL` env var (fallback: https://api.toolboxlite.com)
- Site URL from `NEXT_PUBLIC_SITE_URL` (fallback: https://email.toolboxlite.com)
- Canonical URLs must match the public domain
- QR Forge is the design reference standard — other sites follow its pattern

## Git
- Branch: main
- Always push after changes
