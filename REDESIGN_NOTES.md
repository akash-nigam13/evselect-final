# EVSelect.in — 2026 Redesign Notes

A full redesign of the site into a sleek, futuristic, motion-rich **one-stop EV knowledge hub**, plus a real data layer powering a fully interactive comparison tool.

## How to run

```bash
npm install        # installs deps incl. framer-motion (already added)
npm run dev        # http://localhost:3000
npm run build      # production build
```

> Note: the app uses Google Fonts via `next/font` (Space Grotesk, DM Sans, JetBrains Mono). Building needs internet access to Google's font servers the first time — that's normal and works on your machine.

## New design language

- **Palette:** deep charcoal ink (`#07080B`) base with an electric **teal** primary (`#26E0C4`), **iris violet** secondary (`#8B7BFF`), and a **volt** lime pop (`#C6F94E`). Old neon cyan/green is gone.
- **Type:** Space Grotesk (display) + DM Sans (body) + JetBrains Mono (specs). The old sci-fi Orbitron font was dropped.
- **Motion:** scroll-reveal sections, animated counters, hover spotlights, gradient borders, floating glows, brand marquee. Respects `prefers-reduced-motion`.
- All defined once in `tailwind.config.ts` + `app/globals.css`, with reusable primitives in `components/ui/` (`Reveal`, `Counter`, `Aurora`, `SectionHeading`, `SpotlightCard`).

## The data layer ("backdata")

`lib/ev-data.ts` — **47 real 2026 Indian EVs** (19 cars, 16 scooters, 12 bikes) with a fully typed schema: price, battery, ARAI + real-world range, power, torque, acceleration, top speed, fast/AC charging, drivetrain, seating, boot, kerb weight, year, highlights. Helpers: `getById`, `byCategory`, `priceLabel`.

> Specs reflect early-2026 listings and are clearly labelled as indicative — re-validate against manufacturer sites before going to production.

## What's new (pages)

- **/compare** — fully interactive: search/select **2–3** EVs, live side-by-side table, the winner of each spec auto-highlighted, swap/reset, preset matchups, and shareable `?ids=` links. (Replaces the old non-functional mock.)
- **/catalog** + **/catalog/[id]** — browse/filter/sort the full catalog; a detail page per model with complete specs and "closest rivals".
- **/tools** — EV-vs-petrol **cost calculator** and a **range & charging estimator**, both driven by the dataset.
- **/learn** — EV 101 hub for beginners (how EVs work, charging 101, costs, incentives) + a searchable **jargon glossary**.
- **/news** — 2026 launches & news timeline.
- Homepage, navbar, footer, blog listing all rebuilt in the new style.

## Housekeeping

- A leftover junk folder named `{app...}` (from an old broken shell command) couldn't be deleted from my sandbox due to a macOS permission lock. It's harmless (not a route) — you can delete it manually from Finder.
- Blog **article** internals still use the previous accent hexes inline; the surrounding chrome (nav, footer, theme) is updated. They can be refreshed later if you want full consistency.
- AdSense placeholders are preserved throughout — swap in your real `<ins>` tags + publisher ID when ready.
