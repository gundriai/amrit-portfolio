# Bishal — Video Editor Portfolio

A cinematic, ultra-modern portfolio website for a professional Video Editor & Creative Visual Storyteller. Built with Next.js 15, React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Cinematic dark theme with neon red/purple accents
- Smooth Framer Motion animations and scroll-triggered reveals
- Custom cursor glow effect
- Canvas particle field background
- Page loader with cinematic bars
- Fully responsive (mobile-first)
- SEO optimized with metadata
- Functional contact form via FormSubmit (no backend)
- All sections: Hero, About, Experience, Skills, Projects, Testimonials, Contact, Footer

## Tech Stack

| Tool | Version |
|------|---------|
| Next.js | 15 |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | 3.4 |
| Framer Motion | 11 |
| Lucide Icons | Latest |
| Sonner (toasts) | Latest |

## Getting Started

### Prerequisites

- Node.js 18.17+
- npm / yarn / pnpm

### Installation

```bash
# Clone / open the project directory
cd "Portfolio 2"

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

### 1. Contact Form Email

Open `components/sections/Contact.tsx` and replace the FormSubmit URL:

```tsx
// Line ~65 — replace with your email
const res = await fetch("https://formsubmit.co/ajax/YOUR_REAL_EMAIL@example.com", {
```

> FormSubmit is free and requires no backend. First submission will ask you to verify your email.

### 2. Social Links

In `components/sections/Contact.tsx` and `components/sections/Footer.tsx`, update the `href` values:

```tsx
const SOCIAL_LINKS = [
  { platform: "Email", href: "mailto:YOUR_EMAIL" },
  { platform: "Instagram", href: "https://instagram.com/YOUR_HANDLE" },
  { platform: "YouTube", href: "https://youtube.com/@YOUR_CHANNEL" },
  { platform: "LinkedIn", href: "https://linkedin.com/in/YOUR_PROFILE" },
  { platform: "WhatsApp", href: "https://wa.me/YOUR_PHONE_NUMBER" },
];
```

### 3. Profile Photo

Replace the placeholder avatar in `components/sections/About.tsx` with your actual image using Next.js `Image`:

```tsx
import Image from "next/image";

// Replace the placeholder div with:
<Image src="/assets/images/profile.jpeg" alt="Amrit" fill className="object-cover" />
```

Place your photo at `public/assets/images/profile.jpg`.

### 4. SEO Metadata

Update `app/layout.tsx` with your real details:
- `title`
- `description`
- `url`
- `author`

### 5. Fonts (optional)

Fonts are loaded via Google Fonts in `app/layout.tsx`. Currently using:
- **Syne** — display/headings
- **Inter** — body text
- **JetBrains Mono** — code/numbers

## Project Structure

```
Portfolio 2/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Main page (assembles all sections)
│   └── globals.css         # Global styles + CSS variables
├── components/
│   ├── effects/
│   │   ├── CursorGlow.tsx  # Custom cursor + glow follower
│   │   ├── ParticleField.tsx # Canvas particle animation
│   │   └── PageLoader.tsx  # Cinematic loading screen
│   ├── layout/
│   │   └── Navbar.tsx      # Fixed navigation with scroll awareness
│   └── sections/
│       ├── Hero.tsx        # Hero with animated headline + float cards
│       ├── About.tsx       # About + animated stats
│       ├── Experience.tsx  # Timeline section
│       ├── Skills.tsx      # Skill cards with animated bars
│       ├── Projects.tsx    # Portfolio grid with filters
│       ├── Testimonials.tsx # Carousel testimonials
│       ├── Contact.tsx     # Contact form + social links
│       └── Footer.tsx      # Footer
├── hooks/
│   └── useAnimations.ts    # Custom hooks (countUp, scrollProgress)
├── lib/
│   └── utils.ts            # cn() utility
├── types/
│   └── index.ts            # TypeScript interfaces
├── public/
│   └── assets/images/      # Place your images here
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Build & Deploy

### Build for production

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Vercel auto-detects Next.js — click **Deploy**
4. Set your domain name in Vercel dashboard

That's it. Zero configuration needed.

### Deploy to Netlify

```bash
npm run build
# Upload the .next folder or connect via Git in Netlify dashboard
```

## Customization Tips

- **Accent color**: Change `#FF2D55` to any color in `globals.css` and component files
- **Add projects**: Edit the `PROJECTS` array in `components/sections/Projects.tsx`
- **Add skills**: Edit `SKILLS` in `components/sections/Skills.tsx`
- **Add testimonials**: Edit `TESTIMONIALS` in `components/sections/Testimonials.tsx`
- **Add experience**: Edit `EXPERIENCES` in `components/sections/Experience.tsx`

## License

MIT — free to use and modify for personal portfolios.

---

*Crafted with passion for storytelling.*
