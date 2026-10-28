# Search and image delivery

This change addresses [issue #3](https://github.com/ny1411/portfolio-2/issues/3) using the existing Next.js and Vercel delivery pipeline. It adds no service, database, middleware invocation, or paid product.

## Production URL

The canonical origin defaults to `https://www.neerajyamaji.com`, the portfolio's existing public custom domain. `SITE_URL` is an optional **server/build** environment variable for an intentional custom-domain migration. It must be an HTTPS origin without credentials, a non-default port, a path, query, or fragment. Preview `*.vercel.app` origins and localhost are rejected so previews cannot accidentally become canonical. A malformed override fails the build rather than publishing incorrect links. Leave it unset for this project.

The root layout uses `siteMetadata` from `src/lib/site.ts`: canonical home URL, Open Graph website information, and a Twitter large-image card. Keep the canonical URL on the production domain in every environment. The Open Graph image is generated from JSX with `next/og` at build time, uses the portfolio's dark/blue/red palette, and is reused by Twitter. It needs no network font or image fetch and no image-generation service.

## Crawling and preview safety

The production sitemap contains the single real page. About, experience, and projects are anchor sections and must not appear as separate sitemap URLs. There is no fabricated `lastModified` timestamp.

Builds with a non-production `VERCEL_ENV` emit `noindex, nofollow` page metadata, a deny-all `robots.txt`, and an empty sitemap. These are crawler instructions, not access control. Retain the project's Vercel Authentication protection on preview deployments. A local production build without Vercel environment variables emits production metadata so it can be checked before deployment. Do not publish that build to an unrelated public host without configuring its environment.

Vercel automatically adds `X-Robots-Tag: noindex` to preview deployment URLs and outdated production deployments. The exception is a custom domain assigned to a non-production branch, where this header is omitted by default; the application metadata remains useful there. Check actual responses when validating a preview. Build this branch as **Production** before releasing it: metadata is generated at build time, so copying a preview artifact to another host will retain its preview indexing directives. See [Vercel's indexing guidance](https://vercel.com/kb/guide/are-vercel-preview-deployment-indexed-by-search-engines).

## Responsive images and CDN caching

Use `sizes="(max-width: 1024px) 100vw, 1024px"` for both fill-mode hero images, matching the 1024-pixel content column. Use `sizes="(min-width: 1024px) 192px, 160px"` for the avatar to match its CSS widths. These hints let the browser choose the appropriate optimized image variant. Next.js provides image optimization and framework asset caching on Vercel without custom rewrites or an extra loader.

Next.js 16 deprecates `priority`. Prefer `loading="eager"` on the alternative theme hero images instead of preloading both: the docs caution against preloading multiple images that may become the LCP in different states. Keep font self-hosting through the existing `next/font` integration. Do not add `immutable` caching for HTML or unversioned `public/` filenames; replacing those files needs normal revalidation.

## Validation

After a production build, start the app and inspect `/`, `/robots.txt`, `/sitemap.xml`, and `/opengraph-image`:

- Canonical, Open Graph URL, sitemap URL, and Twitter image resolve to the production origin.
- Open Graph image responds as a 1200 by 630 PNG and renders the name, role, stack, and domain without clipping.
- Home and metadata routes are prerendered in the build output.
- The image request uses `/_next/image` with a width appropriate for the viewport and device pixel ratio.
- A separate preview build with `VERCEL_ENV=preview` emits `noindex, nofollow`, deny-all robots, and an empty sitemap. Reset this variable before producing release artifacts.

Sources: [Next.js metadata](https://nextjs.org/docs/app/getting-started/metadata-and-og-images), [robots](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots), [sitemap](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap), [Open Graph images](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image), [responsive images](https://nextjs.org/docs/app/api-reference/components/image#sizes), and [Vercel Image Optimization](https://vercel.com/docs/image-optimization). Implementation was checked against bundled Next.js documentation under `node_modules/next/dist/docs/`, including after the approved security update to 16.4.3.
