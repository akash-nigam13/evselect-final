# EVSelect.in — Next.js EV Portal

India's EV intelligence hub — built with **Next.js 14 (App Router)** and **Tailwind CSS**.

## Project Structure

```
evselect/
├── app/
│   ├── layout.tsx               # Root layout, fonts, metadata, AdSense script
│   ├── page.tsx                 # 🏠 Homepage (all sections assembled)
│   ├── globals.css              # Tailwind base + custom utilities
│   ├── compare/
│   │   └── page.tsx             # ⚖️ EV Comparison tool page
│   ├── blog/
│   │   └── page.tsx             # 📰 Blog listing + sidebar ads
│   └── about-ev-batteries/
│       └── page.tsx             # 🔋 Battery deep-dive (6 sections + TOC)
│
├── components/
│   ├── Navbar.tsx               # Sticky nav with dropdown + mobile menu
│   ├── HeroSection.tsx          # Full-screen hero with floating spec card
│   ├── CategoryGrid.tsx         # Cars / Bikes / Scooters / Buses grid
│   ├── FeaturedVehicles.tsx     # 5-card featured EV strip
│   ├── CompareTool.tsx          # Compare teaser with live mock table
│   ├── BatteryTeaser.tsx        # Battery guide promo section
│   ├── BlogSection.tsx          # Blog preview (featured + sidebar + ads)
│   ├── AdPlaceholder.tsx        # 🟡 AdSense placeholder (swap in production)
│   └── Footer.tsx               # Full footer with links + social icons
│
├── tailwind.config.ts           # Custom EV color palette + fonts + animations
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Design System

| Token           | Value     | Usage                    |
|-----------------|-----------|--------------------------|
| `ev-bg`         | `#050b14` | Page background          |
| `ev-surface`    | `#0a1628` | Elevated surfaces        |
| `ev-card`       | `#0d1f3c` | Card backgrounds         |
| `ev-cyan`       | `#00e5ff` | Primary accent / CTAs    |
| `ev-green`      | `#39ff14` | Secondary / battery      |
| `ev-amber`      | `#ffb800` | Warnings / highlights    |
| `ev-muted`      | `#4a6fa5` | Secondary text           |

### Fonts
- **Display**: Orbitron (headings, brand)
- **Body**: DM Sans (body text, labels)
- **Mono**: JetBrains Mono (specs, tags, badges)

## AdSense Integration

1. Enable your AdSense account for `evselect.in`
2. Replace the publisher ID in `app/layout.tsx`:
   ```html
   <script src="...?client=ca-pub-YOUR_ID" />
   ```
3. Replace `<AdPlaceholder />` components with real `<ins class="adsbygoogle" />` tags, using the slot IDs from your AdSense dashboard.

**Ad placements already scaffolded:**
- Leaderboard above category grid (homepage)
- Leaderboard above blog section (homepage)
- Leaderboard above/below compare table
- Rectangle in blog sidebar (×2)
- Rectangle in battery guide sidebar (×2)
- Leaderboard between battery sections

## SEO

- Full `<head>` metadata via Next.js `generateMetadata`
- OpenGraph + Twitter card tags
- `robots: index, follow`
- Semantic HTML throughout
- Google Fonts loaded via `next/font` (no CLS)

## Deploying to Vercel

```bash
npx vercel
```

Add domain `evselect.in` in Vercel dashboard → Domains.
