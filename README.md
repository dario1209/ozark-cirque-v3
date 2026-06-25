# Ozark Cirque v3

New website for Brittany Paul / Ozark Cirque

**Stack:** Next.js 14 App Router · TypeScript · CSS Modules  
**Fonts:** Bebas Neue (condensed display) · Playfair Display (editorial serif) · Inter (body)  
**Deployed:** Vercel (auto-deploy from GitHub)

## Getting started

```bash
npm install
npm run dev
```

Opens at http://localhost:3000

## Deploy

```bash
git add .
git commit -m "your message"
git push
```

Vercel auto-deploys on push.

## Adding photos

All image placeholders are labeled `<div>` elements. When you have real photos:

1. Drop them into `/public/images/`
2. Replace each placeholder div with `<Image src="/images/yourfile.jpg" ... />` from `next/image`

## Pages

- `/` — Home: giant name, disciplines, spinning circle, marquee, timeline, polaroid scatter
- `/about` — Portrait + bio
- `/work` — Project grid
- `/work/[slug]` — Project detail with scattered polaroids and spinning "previous project" circle
- `/contact` — Contact info + collaboration note
