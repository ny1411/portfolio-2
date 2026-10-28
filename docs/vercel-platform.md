# Vercel operations for this portfolio

Audit date: 28 October 2026. Repository: `ny1411/portfolio-2`. Vercel team: `ny1411` (**Hobby**). Project: `portfolio-main` (`prj_2VtsUoUCvH1f57X4sQpIhDUBrxMI`). Production: <https://www.neerajyamaji.com/>. No paid upgrade or add-on is part of this rollout.

## Capability matrix

| Capability | Project implementation or observed status | Operator action / limits |
| --- | --- | --- |
| Web Analytics | Official App Router SDK; production only; URL redaction | Dashboard shows Get Started and zero data; deploy the SDK to collect visits. Hobby has 50,000 monthly events shared across the team. |
| Speed Insights | Official SDK, 10% sampling, production only | Dashboard shows Get Started. Free tier has 10,000 events over a rolling 30-day window shared across the team; collection pauses at its limit. Plus remains off. |
| Custom events | Optional contact/resume/project events, off by default | Dashboard requires Pro; keep `NEXT_PUBLIC_VERCEL_CUSTOM_EVENTS` unset on Hobby. |
| Traffic / Observability | Already active; dashboard reports CDN requests and no function invocations | Use built-in charts for requests, transfer, cache behavior, errors and image usage; extended retention/queries may require Plus. No client SDK is needed for request traffic. |
| CDN / compression / HTTPS | Platform-managed defaults | Preserve Next.js caching; do not add global immutable headers or a second reverse proxy. |
| Image optimization / fonts | Existing `next/image` and `next/font`; accurate responsive image sizes added | Inspect image transformations and usage; no extra storage service or loader needed. |
| Search / social delivery | Canonical metadata, robots, sitemap, static social-preview card | Production build uses custom-domain canonical. Preview builds deny indexing. |
| DDoS / firewall | Dashboard confirms Firewall active and System Mitigations Active | Retained. A missing custom-config API response did not mean the firewall was off. |
| Bot Protection | Changed from Off to a **staged Log draft** | Not live. Review and publish the log-only change yourself, then inspect matches before considering challenges. |
| AI bot blocking | Existing Allow policy retained | Blocking AI bots is an editorial choice; no assumption that a public portfolio should deny discovery. |
| Custom firewall / IP rules | No custom rules or manual IP blocks | No public API, form, login or write endpoint to rate limit. Avoid blanket user-agent or country blocks. |
| BotID | Basic shown in dashboard; no protected route integrated | Add server verification only when a high-value POST/action exists. Installing an unused client script does not protect the site. Deep Analysis is paid. |
| Preview / deployment protection | Vercel Authentication already protects `all_except_custom_domains` | Preserved. Public custom domains remain accessible. Passwords, trusted IPs and advanced enterprise controls are unnecessary here. |
| Source / build protections | Connector update succeeded; dashboard confirms Build Logs and Source Protection and Git Fork Protection enabled | Also requested `protectedSourcemaps=true` and `directoryListing=false`; those two fields were not independently exposed by the connector response. These settings do not make the public GitHub repository private. |
| Preview feedback | Dashboard confirms pre-production On and production Off | Preview CSP allows Toolbar origins. Production policy intentionally omits them. |
| Git previews / deployment comments | Existing Git integration targets `main` | Non-production branches produce previews. No duplicate token-based deploy pipeline is added. |
| CI / release quality | GitHub Actions: locked install, lint, privacy tests, types, build, runtime headers/cache checks | Job uses Node 24, read-only token, cancellation and timeout. Required branch checks must be configured separately if desired. |
| Runtime dependency security | Approved update to Next.js and matching ESLint configuration 16.4.3; compatible transitive patches | Audit reported zero vulnerabilities after the update. React/React DOM remain 19.2.4. Re-run audits as advisories change. |
| Rollback / deployment history | Built into the project; Instant Rollback visible | Review commit and environment before release/rollback. See procedure below. |
| Usage / spending | Hobby retained | Review team-shared allowances. Do not accept Pro trials, Plus upgrades or marketplace purchases. Paid-plan spend automation is not a substitute for staying on Hobby. |
| Feature Flags / Global Config | Available products; no current runtime configuration requirement | No unused flag, SDK key or store created. Add for a concrete experiment or operational control. |
| Blob / Marketplace databases | No uploads, persisted user content or database workload | No store or database provisioned. Existing repository assets are served directly. |
| Functions / ISR / Runtime Cache | Homepage and metadata are prerendered | No artificial API, dynamic middleware, or cache service introduced. Add when actual dynamic data exists. |
| Cron / Queues / Workflow / Daemons | No scheduled work or durable background job | No unused jobs created. |
| AI SDK / Gateway / agents / Sandbox | No model calls or untrusted code execution | No paid model usage or sandbox provisioned. |
| Drains / custom metrics / always-on tracing | No backend spans or external log destination | Built-in dashboards cover this static site; advanced retention/drains can add cost. |
| Rolling Releases / Skew Protection | No custom rollout settings needed for static Next.js Git builds | Keep platform defaults; paid or plan-specific rollout products need a separate deployment requirement. |
| Domains / DNS / TLS | Existing apex and www domains configured | No purchases, transfer, DNS, or certificate changes. Canonical uses www. |
| Auth / KMS / Passport / RBAC / private networking | Portfolio has no private application data or multi-tenant auth | Account/enterprise products are not application features to enable indiscriminately. |
| Services / containers / microfrontends / platforms | One Next.js frontend | No extra services, registries or tenant infrastructure. |

## Dashboard links

- [Analytics](https://vercel.com/ny1411/portfolio-main/analytics), [Speed Insights](https://vercel.com/ny1411/portfolio-main/speed-insights)
- [Observability](https://vercel.com/ny1411/portfolio-main/observability), [Firewall traffic](https://vercel.com/ny1411/portfolio-main/firewall/traffic), [Firewall rules](https://vercel.com/ny1411/portfolio-main/firewall/rules)
- [CDN](https://vercel.com/ny1411/portfolio-main/cdn), [Images](https://vercel.com/ny1411/portfolio-main/images), [Usage](https://vercel.com/ny1411/portfolio-main/usage)
- [Deployments](https://vercel.com/ny1411/portfolio-main/deployments), [Settings](https://vercel.com/ny1411/portfolio-main/settings)

Visitor analytics count client pageviews; traffic counts all CDN requests, including assets, crawlers and blocked requests. They are expected to differ. Do not publish visitor IPs or raw traffic logs in public issues or PR screenshots.

## Configuration and activation

`SITE_URL` is optional and defaults to the existing production origin. `VERCEL_ENV` is supplied by Vercel and gates collection and indexing at build time. `NEXT_PUBLIC_VERCEL_CUSTOM_EVENTS` must stay unset on Hobby. No service token is required in the browser or GitHub workflow. Continue configuring the existing resume URL in Vercel; do not commit it if it contains private access parameters.

Analytics and Speed Insights already expose setup dashboards. Their SDKs must be deployed before data arrives; installation alone is not proof of collection. After merging, inspect the public production page for the two same-origin scripts and sanitized outgoing payloads. Performance sampling means not every visit emits a metric. Preview and local builds intentionally inject neither SDK.

The Bot Protection draft is log-only. Open Firewall rules → Review Changes and confirm the sole change is “enabled Bot Protection in log mode.” Publish it yourself, then review real traffic. The Vercel firewall skill requires user publication of firewall drafts. Challenge/block enforcement requires a later, reviewed rollout; keep verified crawlers and legitimate non-browser clients in mind. No Attack Mode, system bypass or DDoS pause was applied.

## Release and rollback

1. Review the PR and passing `Portfolio quality` job; inspect its Vercel preview and noindex behavior.
2. Merge to `main` to let the existing Git integration build Production. Do not promote a preview artifact with preview indexing settings.
3. Verify public headers, metadata, optimized images, interactions, telemetry requests and dashboards. Review quota usage.
4. If a regression appears, revert the relevant commit and deploy again. For immediate recovery use the dashboard's Instant Rollback after confirming the previous deployment. Vercel rollback can disable automatic domain assignment until a production deployment is promoted; check that setting before the next release.
5. Dashboard settings and firewall drafts are separate from code commits. Revert those independently if needed; a code rollback does not undo platform configuration.

## Checks and references

Run `npm run lint`, `npx tsc --noEmit`, `node --experimental-strip-types --test tests/analytics.test.mjs`, `npm run build`, then `npm run start`, `node scripts/check-security-headers.mjs http://localhost:3000`, and `node scripts/check-delivery.mjs http://localhost:3000`. The GitHub workflow runs the same sequence on Node 24. Do not treat CI as a release gate until required checks are configured in repository rules.

See [telemetry details](vercel-telemetry.md), [security policy](security.md), and [delivery details](vercel-delivery.md).

Official sources: [Analytics pricing](https://vercel.com/docs/analytics/limits-and-pricing), [Speed Insights pricing](https://vercel.com/docs/speed-insights/limits-and-pricing), [Observability](https://vercel.com/docs/observability), [Firewall](https://vercel.com/docs/vercel-firewall), [Bot management](https://vercel.com/docs/bot-management), [Deployment Protection](https://vercel.com/docs/deployment-protection), [spend management](https://vercel.com/docs/spend-management), [Git integration](https://vercel.com/docs/git), [rollback](https://vercel.com/docs/instant-rollback).
