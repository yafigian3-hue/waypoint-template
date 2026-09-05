# Waypoint — SaaS Landing Page Template

A premium, editorial-style landing page template for developer tools and technical SaaS products. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

Demo content ("Waypoint", an API error monitoring tool) is placeholder — replace it with your own product in minutes using the guide below.

## Tech stack

- React 19 + Vite
- TypeScript
- Tailwind CSS 3
- Framer Motion (subtle entrance, hover, and interaction animations across sections)
- lucide-react (icons)
- Self-hosted fonts via `@fontsource` (Fraunces, Inter, JetBrains Mono)

No backend, no database, no CMS, no payment integration. This is a static, single-page site — drop it into any static host (Vercel, Netlify, Cloudflare Pages, or your own server).

## Quick start

```bash
pnpm install
pnpm dev        # starts local dev server
pnpm build      # outputs a production build to dist/
pnpm preview    # preview the production build locally
```

Requires Node.js 18+ and pnpm (https://pnpm.io). If you use npm or yarn instead, delete `pnpm-lock.yaml` and run `npm install` / `yarn install`.

## Customizing your content

Everything you see on the page — headlines, feature copy, pricing, FAQ, testimonials, footer links — lives in one file:

```
src/lib/content.ts
```

Open it, replace the placeholder text with your own product's copy, and save. You do not need to touch any component file to change text.

## Customizing colors

Colors are defined as Tailwind theme colors in `tailwind.config.js`:

```js
colors: {
  ink: '#12181f',        // primary text / dark backgrounds
  paper: '#f6f4ee',       // main background
  'paper-dim': '#ede9df', // alternate section background
  slate: '#5a6472',       // secondary text, borders
  brass: '#b8863f',       // primary accent (buttons, highlights)
  route: '#5b7a6b',       // "Route Line" decorative motif
  status: '#a8572e',      // functional only — used inside the product
                            // dashboard mockup for error/status indicators
}
```

Change the hex values to match your brand. Avoid deleting the `status` color unless you also remove references to it inside `src/components/sections/Preview.tsx` and `Hero.tsx`.

## Customizing fonts

Fonts are self-hosted via `@fontsource` and loaded in `src/main.tsx`. To swap a font:

1. `pnpm add @fontsource/your-font-name`
2. Update the import in `src/main.tsx`
3. Update the `fontFamily` values in `tailwind.config.js`

## Project structure

```
src/
├── main.tsx                  entry point, font imports
├── App.tsx                   assembles all sections
├── globals.css                Tailwind base + global styles
├── components/
│   ├── sections/               one file per page section
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── LogoCloud.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Preview.tsx
│   │   ├── DashboardPreview.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   ├── FinalCta.tsx
│   │   └── Footer.tsx
│   └── shared/                  reused across sections
│       ├── cta-button.tsx
│       ├── logo.tsx
│       ├── route-marker.tsx
│       └── section-label.tsx
└──└── lib/
    ├── content.ts               all page copy — edit this first
    ├── animations.ts
    └── utils.ts
```

## Deploying

This builds to a static `dist/` folder — deploy it anywhere that serves static files. For Vercel: import the repo, framework preset "Vite", default build command `pnpm build`, output directory `dist`.

## License

See `LICENSE.txt`. Summary: one purchase = use in one end product. See the file for full terms.

## Support

Questions about this template? Contact **[yafigian3@gmail.com]**.
