# DESIGN.md

# Portfolio v2 — "The Friendly Neighborhood Developer"

> A cinematic, fast, minimal portfolio inspired by Spider-Man without depending on Spider-Man assets.

---

# Philosophy

The previous portfolio relied heavily on 3D models, scrollytelling and animations. Although visually impressive, it suffered from:

- slow initial load
- poor mobile performance
- unnecessary GPU usage
- high bundle size
- distracting experience

Portfolio v2 focuses on **performance-first storytelling**.

The goal is to create an experience that feels like Spider-Man rather than showing Spider-Man.

The user should immediately think:

> "This feels like Spider-Man."

without seeing explicit Spider-Man artwork.

---

# Design Principles

## 1. Lightweight

No heavy 3D scenes.

Everything should render instantly.

Target:

- Lighthouse 95+
- LCP < 1.8s
- Bundle under 300kb initial JS
- 60fps everywhere

---

## 2. Minimal

Lots of whitespace.

Simple layouts.

No visual clutter.

Typography first.

---

## 3. Cinematic

Instead of animations...

Use lighting.

Depth.

Gradients.

Atmosphere.

Every section should feel like a movie frame.

---

## 4. Spider-Man Inspired

Not Spider-Man themed.

Inspired.

Hints everywhere.

Never obvious.

Think:

"I know what this references."

instead of

"That's Spider-Man."

---

# Visual Identity

Keywords

- Night
- Rooftops
- Rain
- Neon
- City lights
- Friendly neighborhood
- Vigilante
- Tech
- Mystery
- Elegant
- Premium

---

# Overall Mood

Imagine

A full stack engineer who spends nights building products while New York sleeps.

The portfolio feels like:

> 2 AM.

Rain stopped.

Wind blowing.

The city is glowing.

You just deployed.

---

# Color Palette

## Primary Background

```
#080A0F
```

Almost black.

---

## Surface

```
#11141B
```

Cards

Navbar

Sections

---

## Secondary Surface

```
#171C24
```

Hover states

---

## Border

```
rgba(255,255,255,0.08)
```

Very subtle.

---

## Primary Red

```
#E53935
```

Spider accent.

Never overwhelming.

---

## Electric Blue

```
#3B82F6
```

Technology.

Links.

Highlights.

---

## White

```
#F5F7FA
```

---

## Gray

```
#A6ABB5
```

Secondary text.

---

# Accent Usage

Blue should dominate.

Red should appear only as moments.

Examples:

- CTA hover
- Cursor
- Active navigation
- Small icons
- Loading indicator
- Focus ring

Approximately

80%

Blue

20%

Red

---

# Typography

Heading

Space Grotesk

or

General Sans

Weight

700

---

Body

Inter

Weight

400

---

Code

JetBrains Mono

---

Design Goal

Developer.

Not startup.

---

# Grid System

12-column layout.

Max Width

```
1280px
```

Large padding.

Breathing room.

---

# Hero Section

Large panoramic hero.

Inspired by:

New York rooftop.

Night skyline.

Moonlight.

Blue city glow.

Not a photograph.

Stylized illustration.

---

Foreground

Minimal rooftop edge.

Silhouette.

Tiny spider emblem.

No face.

No suit details.

Only silhouette.

---

Background

Empire State Building.

Tiny glowing windows.

Blue fog.

Light haze.

Few stars.

---

Subtle Elements

Very thin web lines.

Corner only.

Never across content.

---

# Header

Floating.

Glass.

Thin borders.

Minimal.

Logo on left.

Navigation centered.

Theme toggle right.

Command palette shortcut.

---

Navigation

Projects

Experience

About

Blogs

Guestbook

Resume

---

# Hero Content

Large introduction.

```
Neeraj Yamaji
```

Subtitle

```
Computer Engineer
Building products for founders.
```

Short bio.

Two CTA buttons.

Social icons.

Everything left aligned.

---

# Avatar

Simple rounded image.

Thin border.

No glow.

Hover:

Tiny blue outline.

---

# Sections

---

## About

Simple.

Readable.

No graphics.

One paragraph.

---

## Experience

Timeline.

Minimal.

One company per card.

Hover:

Tiny elevation.

---

## Projects

The main attraction.

Grid.

Two columns desktop.

One column mobile.

Large project cards.

---

Each card

Project Name

Description

Stack

GitHub

Demo

Featured badge

---

Hover

Border changes blue.

Very subtle lift.

---

# Tech Stack Pills

Rounded.

Outline only.

Small.

Example

```
React
Next.js
Node
AI
Rust
```

---

# Footer

Simple.

```
Built after midnight.

© 2026 Neeraj Yamaji
```

Tiny spider icon.

---

# Spider-Man References

These should be easter eggs.

Not decoration.

---

## Cursor

Tiny spider.

Animated.

Leaves almost invisible web thread while moving.

---

## Loading Screen

Single spider descending.

Logo fades in.

Done.

---

## Scroll Indicator

Tiny web thread.

Instead of line.

---

## Active Navigation

Small spider icon.

Not underline.

---

## Section Divider

Looks like stretched web.

Opacity 5%.

---

## Hover

Tiny red-blue glow.

Nothing flashy.

---

## Command Palette

```
⌘K
```

When opened

Background resembles OSCORP terminal.

---

## Error 404

Rooftop.

Empty skyline.

Text

```
Looks like you missed the swing.
```

---

## Blog Empty State

```
Still swinging through ideas...
```

---

## Project Loading

Web threads appear.

Cards fade.

---

# Motion

Very restrained.

Everything under

250ms

---

Allowed

Fade

Scale 1.02

Opacity

Parallax

Gradient movement

Cursor interactions

---

Avoid

Huge GSAP timelines

Long page pinning

Heavy scrollytelling

Large Lottie files

Complex 3D

---

# Background

Entire website

Dark.

Grid.

Noise texture.

Tiny blue particles.

Almost invisible.

---

Occasionally

Red light reflections.

---

# Components

## Buttons

Rounded.

Large.

Outline.

Primary

Blue.

Hover

Red transition.

---

## Cards

Radius

20px

Thin border.

Dark surface.

---

## Inputs

Dark.

Blue focus.

---

## Tags

Outline.

Small.

Monospace.

---

# Performance Budget

No Three.js

No Spline

No heavy GLTF

No Lottie over 50kb

SVG wherever possible

CSS animations preferred

Lazy load everything below hero

Images in AVIF/WebP

Variable fonts only

---

# Responsive Design

Desktop

Hero panorama.

2-column layout.

---

Tablet

Reduced hero height.

Single navigation row.

---

Mobile

No panorama crop.

Simplified skyline.

No decorative webs.

No particles.

Only essential animations.

Sticky bottom navigation optional.

---

# Accessibility

Contrast AA+

Keyboard navigation

Visible focus states

Reduced motion support

Semantic HTML

Screen reader friendly

---

# Inspiration

The atmosphere should combine:

- Spider-Man PS4 menu aesthetics
- Into the Spider-Verse color grading
- The Batman (2022) UI mood
- Vercel's minimalism
- Linear's polish
- xevrion.dev's clean grid layout
- GitHub's developer-first simplicity

---

# User Emotion

The visitor should feel:

"I've entered the workspace of someone who builds products at night."

The website shouldn't scream Spider-Man.

It should quietly whisper it.

---

# Final Design Goal

Fast enough to feel native.

Minimal enough to stay timeless.

Cinematic enough to be memorable.

Spider-Man enough that fans instantly notice the references—but subtle enough that everyone else simply sees an elegant, premium developer portfolio.