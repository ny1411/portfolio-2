# Portfolio response security

`next.config.ts` applies the response policy to pages, static files and framework 404s. It removes `X-Powered-By`, disables MIME sniffing, denies embedding, restricts referrer disclosure to the origin on cross-origin requests, and disables camera, microphone, geolocation and payments APIs. Vercel manages HTTPS and its platform HSTS/DDoS protections; this configuration does not change account firewall rules or deployment authentication.

## CSP and static delivery

The production Content Security Policy permits scripts, connections, fonts and images from the portfolio's origin. Images may also use `data:` and `blob:` URLs for local visual effects. Vercel's Next.js Web Analytics and Speed Insights integrations use same-origin `/_vercel` routes, so they do not require a broad external analytics allowlist. External social, resume and project links are navigations and do not need fetch/script permissions.

The policy intentionally allows inline scripts for Next.js static hydration and `next-themes`, and inline styles for animation and theme behavior. It prohibits inline event-handler attributes, plugin objects, document base URLs and framing. This is defense in depth, **not a strict nonce/hash CSP**: allowed inline scripts limit its protection against injected script markup. Nonces would require dynamic rendering and sacrifice the current static/CDN delivery. Revisit that tradeoff if the portfolio gains forms, user-generated HTML or sensitive authenticated content. Production does not permit `unsafe-eval`; development permits it and WebSockets for Next.js debugging/HMR.

Vercel preview builds (`VERCEL_ENV=preview`) add only the documented Toolbar/Comments origins: `vercel.live` for scripts, styles, frames, images, fonts and connections; `vercel.com` for images; `assets.vercel.com` for fonts; and `wss://ws-us3.pusher.com` for comment updates. Production disallows those extra origins. Keep the production Toolbar disabled unless this policy is updated deliberately. The parent page still cannot be embedded: loading a Toolbar frame does not grant other pages permission to frame this site.

No custom `Cache-Control` override is set. Next.js retains immutable caching for versioned bundles; HTML and replaceable files such as `/avatar.png` remain revalidatable. A permissive CORS header is unnecessary for this static site and is not added.

## Verification and rollout

After building, start the production server and run:

```sh
npm run build
npm run start
node scripts/check-security-headers.mjs http://localhost:3000
```

The smoke check verifies the home page, a public image and a real 404, confirms the policy and framework signature removal, and checks both revalidatable HTML/public files and immutable versioned JavaScript. It fails on redirects or Vercel Authentication pages; use an authenticated browser for a protected deployment rather than treating its login page as the application.

For a preview build, set `VERCEL_ENV=preview` **at build time**, then run the script with `--preview`. On the protected preview, verify theme switching, terminal open/close, images, motion and Toolbar comments in a browser, checking the console for CSP violations. Production telemetry must be verified on a production deployment after dashboard activation; it is intentionally not collected from previews. Compare the live response headers after merge, since deployment protection and Vercel may add platform headers.

Changes to the CSP ship with a normal code deployment and can be rolled back by reverting the commit or rolling back its deployment. No custom bot blocks, rate limits or Attack Mode are activated by this change.

References: [Next.js CSP guide](https://nextjs.org/docs/app/guides/content-security-policy), [Next.js headers](https://nextjs.org/docs/app/api-reference/config/next-config-js/headers), [Vercel Toolbar CSP requirements](https://vercel.com/docs/vercel-toolbar/managing-toolbar#using-a-content-security-policy), [Vercel Firewall](https://vercel.com/docs/vercel-firewall).
