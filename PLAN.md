# Vision

To create a cinematic, lightning-fast, and minimal portfolio that embodies a "Friendly Neighborhood Developer" aesthetic. The product moves away from heavy 3D models and distracting animations toward performance-first storytelling. It should feel premium, mysterious, and highly responsive—evoking the atmosphere of a night in New York without explicitly relying on copyrighted Spider-Man assets.

---

# Design Philosophy

The portfolio embraces a **Lightweight, Minimal, Cinematic, and Spider-Man Inspired** philosophy. 
Instead of rendering literal character graphics, the design language uses subtle hints: nighttime rooftops, electric blue and primary red accents, deep shadows, and extremely fine web-like details. Everything must load instantly and render at 60fps. The aesthetic targets a mature, "Senior Developer" feel rather than a flashy startup, using typography and whitespace as the primary design tools.

---

# Information Architecture

- **Home**: The central hub featuring the panoramic hero, quick about section, featured projects, and experience timeline.
- **Projects**: A comprehensive grid of all technical work.
- **Experience**: Detailed career timeline and technical background.
- **Blogs / Shenanigans**: Technical writing and casual developer thoughts.
- **Guestbook**: A place for visitors to leave their mark.
- **Resume**: Direct link to the latest PDF or a clean, printable HTML version.
- **404**: "Looks like you missed the swing" — a stylized empty rooftop state.

---

# User Journey

1. **Landing**: The user is greeted by a deep, almost black skyline bathed in blue fog. A tiny spider cursor tracks their movement. The typography introduces the developer cleanly and confidently.
2. **Exploration**: As they scroll, Lenis smooth scrolling provides a buttery feel, and a subtle web-thread scroll indicator tracks progress. Sections fade in instantly.
3. **Interaction**: Hovering over project cards triggers a subtle lift and an electric blue border shift. Primary CTA buttons feature a magnetic hover effect, gravitating slightly toward the cursor.
4. **Navigation**: A sticky but subtle navbar hides on scroll down and reappears on scroll up, maximizing the cinematic view. The user can also press `⌘K` to open an OSCORP-inspired command palette for immediate jumping between pages.
5. **Exit**: The footer leaves a lasting impression with a minimalist sign-off: "Built after midnight."

---

# Section Breakdown

### Hero
- **Purpose**: Establish mood and introduce the developer.
- **Layout**: Panoramic cityscape background (illustration, not photo) with left-aligned large typography (`Neeraj Yamaji`, `Computer Engineer`).
- **Interactions**: Subtle parallax on the background fog. Magnetic CTA buttons with red-accent hover states.

### About
- **Purpose**: Quick professional summary.
- **Layout**: Minimal, one readable paragraph. No distracting graphics.

### Experience
- **Purpose**: Highlight work history.
- **Layout**: Clean vertical timeline. One company per card. 
- **Interactions**: Cards lift very slightly on hover with a soft secondary surface color.

### Projects
- **Purpose**: Showcase the main attraction.
- **Layout**: 12-column grid system. 2 columns on desktop, 1 on mobile. Large cards featuring Title, Description, Stack Pills, and Links.
- **Interactions**: Hover changes card border to electric blue. (Note: Future integration for hover videos).

---

# Component Architecture

- `Layout` (Main wrapper, ThemeProvider, Lenis Scroll Wrapper, CustomCursor)
- `Navbar` (Sticky hide/show glass container, Navigation Links, Theme Toggle)
- `CommandPalette` (`⌘K` modal)
- `HeroSection` (Skyline illustration, Hero text)
- `AboutSection` 
- `ExperienceTimeline` & `ExperienceCard`
- `ProjectGrid` & `ProjectCard`
- `TechPill` (Rounded outline badges)
- `Button` (Primary/Outline variants, magnetic wrapper)
- `Footer` 

---

# Styling Strategy

- **Typography**: `Space Grotesk` or `General Sans` (700) for Headings to provide a tech-forward look. `Inter` (400) for body text for optimal readability. `JetBrains Mono` for code blocks and tech tags.
- **Spacing**: 12-column layout, max-width `1280px`. Generous padding to let components breathe.
- **CSS Variables for Theme Management**: Colors are mapped to CSS variables to easily support adjustments or future themes.
  - `--bg-primary`: `#080A0F` (Almost black)
  - `--bg-surface`: `#11141B` (Cards)
  - `--bg-surface-hover`: `#171C24` (Hover)
  - `--accent-blue`: `#3B82F6` (80% usage)
  - `--accent-red`: `#E53935` (20% usage)
  - `--text-primary`: `#F5F7FA`
  - `--text-secondary`: `#A6ABB5`
- **Elevation / Borders**: Very thin, subtle borders `rgba(255,255,255,0.08)`. No heavy drop shadows; depth is created through color contrast.

---

# Animation Plan

- **Philosophy**: Restrained and fast. All transitions under `250ms`. No heavy GSAP or long pinning.
- **Smooth Scrolling**: Integrate **Lenis** for buttery smooth scrolling, enhancing the cinematic presentation.
- **Micro-interactions**: Magnetic CTAs (Framer Motion), Scale `1.02` on card hovers, opacity fades on page load.
- **Cursor**: A tiny animated spider that leaves a quickly fading, almost invisible web thread.
- **Loading**: A single spider descends, logo fades in, and the screen reveals the hero.
- **Touch Devices**: Complex hover effects (magnetic buttons, blue/red hover borders) and custom cursors will be explicitly disabled on touch devices to prevent sticky hover bugs.

---

# Responsive & Mobile UX Strategy

- **Desktop (1024px+)**: Panoramic hero, 2-column project grids, floating horizontal navbar.
- **Tablet (768px - 1023px)**: Reduced hero height, single-row navigation.
- **Mobile (< 768px)**: 1-column layout for everything. The hero background loses the panoramic crop and focuses on the core silhouette. Touch targets increased to at least 44x44px. The custom cursor is disabled. 

---

# Accessibility Plan

- **Keyboard Navigation**: Full support for Tab navigation.
- **High-Contrast Focus States**: Ensure keyboard navigation highlights interactive elements with a distinct 2px offset ring using the electric blue or red colors, passing WCAG AAA standards.
- **ARIA**: Proper `aria-labels` on icon-only buttons (like the theme toggle and social links).
- **Semantic HTML**: Utilizing `<main>`, `<nav>`, `<section>`, `<article>`, and `<header>` appropriately.

---

# Performance Plan

- **Core Goal**: Lighthouse 95+, LCP < 1.8s, Initial JS < 300kb.
- **Server-Side Generation (SSG)**: Pre-render all projects and experience content at build time using React Server Components. Avoid client-side `useEffect` loading states for content to ensure zero layout shift and instant LCP.
- **Lazy Loading**: All sections below the fold (Experience, Footer) and images are lazy-loaded.
- **Asset Optimization**: Use `.webp` and `.avif` formats. Background skyline should ideally be a highly optimized SVG or CSS gradient structure rather than a large raster image.
- **Font Loading**: Utilize Next.js `next/font` for zero layout shift (variable fonts).

---

# Tech Stack

- **Framework**: `Next.js (App Router)` — Superior SEO, route-based code splitting, and Server Components for instant SSG loads.
- **Styling**: `Tailwind CSS` — Utility-first, zero runtime CSS overhead, configured with custom CSS variables.
- **Animations**: `Framer Motion` (for magnetic buttons and micro-interactions) & `Lenis` (for smooth scrolling).
- **Language**: `TypeScript` — Strongly typed components and data structures (utilizing `resumeContent.ts`).
- **Icons**: `Lucide React` — Clean, minimal, consistent SVG icons.

---

# Implementation Order

## [x] Phase 1: Foundation & Setup
- [x] Initialize Next.js (App Router) and install core dependencies (Tailwind, Framer Motion, Lenis).
- [x] Setup Global CSS with **CSS Variables for Theme Management** (`--bg-primary`, `--accent-blue`, etc.).
- [x] Configure `next/font` for `Space Grotesk`, `Inter`, and `JetBrains Mono`.
- [x] Set up the **Lenis smooth scrolling** wrapper in the root layout.
- [x] Create base TypeScript interfaces from `resumeContent.ts` to ensure strict typing.

## [ ] Phase 2: Base UI Components & Layout
- [ ] Build highly accessible base components (`Button`, `Card`, `TechPill`) featuring **High-Contrast Focus States**.
- [ ] Implement **Magnetic CTA buttons** using Framer Motion (ensure this disables on touch devices).
- [ ] Build the **"hide-on-scroll-down, show-on-scroll-up" Sticky Navbar** to maximize cinematic screen space.
- [ ] Develop the `Footer` and establish the main layout wrappers.

## [ ] Phase 3: Core Sections & Static Pre-rendering
- [ ] Wire up **SSG (Static Site Generation)** to read from `resumeContent.ts` directly in Server Components (no client-side `useEffect` loaders).
- [ ] Implement the `HeroSection` (with cinematic CSS/SVG background and parallax fog).
- [ ] Implement the `About` and `ExperienceTimeline` components.
- [ ] Implement the `ProjectGrid` and `ProjectCard` with electric blue hover border shifts (disable on touch devices).

## [ ] Phase 4: Animations & Spider-Man Easter Eggs
- [ ] Build the **custom animated spider cursor** with a fading web thread.
- [ ] Create the initial loading screen (spider descending, logo fade).
- [ ] Add the web-thread scroll indicator mapping to Lenis scroll progress.
- [ ] Build the `⌘K` OSCORP-inspired Command Palette.

## [ ] Phase 5: Secondary Pages & Polish
- [ ] Create the stylized `404` page ("Looks like you missed the swing").
- [ ] Set up minimal empty states for `Blogs` and `Guestbook`.
- [ ] **Touch Device Audit**: Explicitly verify that complex hover effects and custom cursors are disabled on iOS/Android.
- [ ] **Performance & Accessibility Audit**: Verify Lighthouse 95+ and test full keyboard Tab navigation.

---

# Future Integrations (Stretch Goals)

- **Hover Videos**: Replace static project images with lazy-loaded, looping, and muted 3-second WebM videos on hover to show real product interactions.
- **Content as Code (CMS)**: Migrate `resumeContent.ts` into a lightweight MDX setup or a headless CMS (like Contentlayer/Sanity) for easier maintenance.
- **Interactive Terminal**: Make the `⌘K` palette accept actual developer commands (e.g., `> sudo fetch resume` or `> ping api`).
- **Real-Time Presence**: Integrate a WebSocket or Firebase feature in the Guestbook to show if other users are currently viewing the portfolio ("2 other spiders are here").
