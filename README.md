# Bhavin Parmar — Portfolio

A 2026-style portfolio for an Android & iOS engineer. Dark + neon aurora aesthetic, custom cursor, magnetic buttons, tilt cards, bento grid, animated text reveal, smooth scroll, and a marquee tech stack.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-first `@theme` tokens, no `tailwind.config.ts` needed)
- **Framer Motion** for animations
- **lucide-react** icons
- Google Fonts via `next/font`: Inter, Space Grotesk, JetBrains Mono

## Quick start

```bash
# 1. install deps
npm install

# 2. run dev server
npm run dev
# → http://localhost:3000

# 3. production build
npm run build && npm run start
```

> If you don't have Node yet, install via [`brew install node`](https://brew.sh) (macOS) or grab the LTS from [nodejs.org](https://nodejs.org).

## Editing your content

All resume content lives in **`src/lib/content.ts`** — one file, fully typed. Update:

- `profile` — name, role, tagline, email, phone, location, socials
- `stats` — the four highlight numbers on the hero
- `experiences` — work history (Tixza, Goldenmace, …)
- `projects` — Play Store / App Store links and descriptions
- `skills`, `skillGroups` — what appears in the marquee and bento grid
- `education` — degree(s)
- `nav` — section links in the navbar

The numbers I generated (active users, rating) are placeholders — swap them for real values when you have them.

### Replacing assets

- **Profile photo** → `public/bhavin.png` (referenced via `profile.photo`)
- **Resume PDF** → `public/Bhavin_Parmar_Resume.pdf` (referenced via `profile.resume`)

Drop a new file at the same path and it auto-updates everywhere.

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx        # fonts + metadata + viewport
│  ├─ page.tsx          # composes all sections
│  └─ globals.css       # Tailwind v4 @theme + animations + cursor
├─ components/
│  ├─ sections/
│  │  ├─ Navbar.tsx
│  │  ├─ Hero.tsx
│  │  ├─ About.tsx
│  │  ├─ Projects.tsx
│  │  ├─ Experience.tsx
│  │  ├─ Skills.tsx
│  │  ├─ Contact.tsx
│  │  └─ Footer.tsx
│  └─ ui/
│     ├─ AuroraBackground.tsx
│     ├─ CustomCursor.tsx
│     ├─ MagneticButton.tsx
│     ├─ TiltCard.tsx
│     ├─ AnimatedText.tsx
│     ├─ Marquee.tsx
│     ├─ Reveal.tsx
│     └─ ScrollProgress.tsx
└─ lib/
   ├─ content.ts        # ← edit your resume here
   └─ utils.ts
```

## Customizing the look

Theme tokens are CSS variables in `src/app/globals.css` under `@theme`:

```css
--color-violet:  #a78bfa;
--color-cyan:    #22d3ee;
--color-pink:    #f0abfc;
--color-lime:    #bef264;
--color-bg:      #050509;
```

Change those and everything (aurora orbs, gradient text, accents) re-skins.

## Deploy

Easiest: push to GitHub and import on [Vercel](https://vercel.com) — zero config. Or run `npm run build` and host the `.next` output anywhere that supports Node 20+.

## Notes

- The custom cursor only activates on devices with a fine pointer (desktop). Mobile uses the native touch cursor.
- All sections use `viewport={{ once: true }}` — reveal animations play once per page load.
- Placeholder social links in `profile.socials` point to bare domains — replace with your handles.
