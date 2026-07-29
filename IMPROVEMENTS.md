# Suggested Improvements

As a Senior Product Designer and Frontend Engineer, reviewing the `DESIGN.md` and content structure, here are strategic recommendations to elevate the portfolio beyond the initial baseline requirements.

---

## 1. UX & Navigation
- **Sticky but Subtle Navbar**: Instead of a constantly floating navbar that permanently occupies screen real estate, implement a "hide-on-scroll-down, show-on-scroll-up" behavior. This maximizes the viewport for the cinematic feel while preserving immediate navigation access when the user wants it.
- **Magnetic Call-to-Actions (CTAs)**: To complement the custom spider cursor, make primary buttons (like "Get In Touch") slightly magnetic using Framer Motion. When the cursor gets close, the button slightly gravitates toward it. This enhances the tactile feel of the premium developer aesthetic.

## 2. Accessibility & Inclusivity
- **Strict `prefers-reduced-motion` Enforcement**: The custom cursor and web-thread scroll indicators must automatically disable if the user has reduced motion enabled in their OS. Fallback to a standard cursor and static scrollbars gracefully.
- **High-Contrast Focus States**: The electric blue (`#3B82F6`) and red (`#E53935`) accents are perfect for focus rings. Ensure keyboard navigation highlights interactive elements with a distinct 2px offset ring to pass WCAG AAA standards.

## 3. Performance & SEO
- **Static Site Generation (SSG)**: Since all data currently lives in `resumeContent.ts`, ensure Next.js pre-renders the projects and experience sections at build time. Avoid client-side `useEffect` fetching for this data to ensure zero layout shift and instant LCP.
- **JSON-LD Schema Markup**: Add structured data (Person and Portfolio schemas) to the `<head>`. This helps search engines understand the developer identity, increasing visibility for potential recruiters and clients.

## 4. Branding & Content Presentation
- **Show, Don't Just Tell (Hover Videos)**: For the projects grid, instead of static images, consider lazy-loaded, looping, and muted 3-second WebM videos that play on hover. This highlights real product interactions without the performance overhead of heavy 3D/GLTF.
- **The "Rooftop" 404 Page**: Make the 404 page a functional mini-experience. Add a primary button that says "Shoot a web to get back" which triggers a quick web-swinging page transition (using a lightweight CSS mask animation) back to the homepage.

## 5. Developer Experience (DX) & Architecture
- **Content as Code (CMS)**: While `resumeContent.ts` is great for starting out, consider moving blog and project content into a lightweight MDX setup or a headless CMS (like Contentlayer or Sanity). It makes maintaining the blog much easier in the future without redeploying code changes.
- **CSS Variables for Theme Management**: Map the specific colors (`#080A0F`, `#171C24`) to CSS variables (e.g., `--bg-primary`). Even though this is a dark-mode focused site, if you ever want to add an easter egg "Daytime / Miles Morales" theme, using CSS variables will make it a 5-minute task rather than a huge refactor.

## 6. Mobile UX
- **Bottom Navigation for Mobile**: Consider moving the navigation to a bottom tab bar on mobile screens. A top floating navbar is hard to reach on modern tall phones. A bottom bar feels more app-like and aligns with the "premium product" goal.
- **Disable Complex Effects on Touch Devices**: Ensure touch devices explicitly disable hover states that require a cursor (like the red/blue border shifts) to prevent "sticky hover" bugs common on iOS/Android browsers.
