# Neeraj Yamaji — Portfolio v2

> A cinematic, fast, and minimal portfolio inspired by the Friendly Neighborhood Developer.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)

## 📖 Overview

Portfolio v2 is a performance-first storytelling experience. Moving away from heavy 3D models and complex scrollytelling, this iteration focuses on speed, accessibility, and minimal aesthetics. It uses subtle lighting, deep contrasts, and a cinematic nighttime atmosphere to create a premium, developer-focused vibe. 

## ✨ Features

- **Blazing Fast**: Engineered for a 95+ Lighthouse score, < 1.8s LCP, and a sub-300kb initial JS bundle.
- **Cinematic Lighting**: Nighttime rooftop atmosphere with electric blue (`#3B82F6`) and primary red (`#E53935`) accents.
- **Command Palette**: Press `⌘K` for quick navigation via an OSCORP-inspired terminal.
- **Micro-Interactions**: Restrained, <250ms transitions that feel tactile and responsive.
- **Custom Cursor**: A non-intrusive interactive spider cursor with a fading web thread.
- **Accessibility First**: Fully keyboard navigable, semantic HTML, and `prefers-reduced-motion` support.

## 🛠 Tech Stack

- **Framework**: [Next.js (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (Used sparingly)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📂 Folder Structure

```text
src/
├── app/              # Next.js App Router (Pages & Layouts)
├── components/       # React Components (UI, Layout, Sections)
├── lib/              # Utility functions and constants
├── hooks/            # Custom React hooks
├── styles/           # Global CSS and Tailwind directives
└── content/          # Portfolio data (resumeContent.ts)
public/               # Static assets, fonts, and optimized images
```

## 🚀 Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ny1411/portfolio-2.git
   cd portfolio-2
   ```

2. Install dependencies:
   ```bash
   npm install
   # or yarn install / pnpm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The project heavily relies on Next.js Hot Module Replacement (HMR) for rapid UI iteration.

### Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Creates an optimized production build.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to catch code issues.

## ⚡ Performance Goals

This project strictly adheres to a performance budget:
- **No Three.js, Spline, or heavy GLTF models.**
- **No Lottie files over 50kb.**
- SVG graphics are preferred for all visual accents.
- Variable fonts (`Space Grotesk`, `Inter`, `JetBrains Mono`) are used via `next/font` for zero layout shift.
- Strict lazy-loading for all sections below the fold.

## 🎨 Customization & Design Philosophy

The design is driven by `DESIGN.md`. If you intend to fork this project, keep the following in mind:
- **Typography First**: Whitespace and font pairings do the heavy lifting. Avoid visual clutter.
- **Subtle Accents**: Keep the background almost black (`#080A0F`). Use the accent colors (Blue 80%, Red 20%) only to highlight interaction.
- **Motion**: Keep animations under 250ms. Never hinder the user's ability to consume content.

## ☁️ Deployment

The easiest way to deploy this Next.js app is to use [Vercel](https://vercel.com/):

```bash
npm i -g vercel
vercel
```

## 🔮 Future Improvements

- Fully integrated MDX blog setup.
- Real-time guestbook powered by Supabase.
- Expand `⌘K` command palette into a functional CLI.

## 📜 License

MIT License. See the [LICENSE](LICENSE) file for more details.

---
*Built after midnight.* © 2026 Neeraj Yamaji.
