# Vercel telemetry

`VercelTelemetry` mounts the official App Router SDKs once. The server passes `enabled={process.env.VERCEL_ENV === "production"}` from the root layout. Local development, local production builds, and preview deployments do not send telemetry. Rendering remains static; the SDKs provide their own Suspense boundaries and inject their scripts after hydration.

## Activate on the existing plan

1. Open [Web Analytics](https://vercel.com/ny1411/portfolio-main/analytics) and enable it if disabled. Installing the SDK does not enable the product in the dashboard.
2. Open [Speed Insights](https://vercel.com/ny1411/portfolio-main/speed-insights) and check the included allowance before enabling it. Do not accept a paid upgrade. This integration samples 10% of visits to reduce datapoint usage, but sampling is not a hard spending cap.
3. Merge and let Vercel build a new production deployment. The SDK endpoints are same-origin `/_vercel/insights/script.js` and `/_vercel/speed-insights/script.js`.
4. Visit the public production homepage, then inspect its network requests and the two dashboards. Aggregation is delayed and real-user performance data requires traffic; an empty chart is not proof of failed integration.

Web Analytics provides visitors, pageviews, referrers, countries, devices, and campaign reporting according to the active plan. This integration removes all URL query parameters, so campaign values embedded in those URLs are deliberately unavailable to URL-based reporting. Speed Insights provides real-user performance metrics. Review the current [Analytics pricing](https://vercel.com/docs/analytics/limits-and-pricing), [Speed Insights pricing](https://vercel.com/docs/speed-insights/limits-and-pricing), and account usage before changing collection or sampling.

## Privacy and optional custom events

Both SDK `beforeSend` hooks retain only the homepage origin and `/`. Query values, fragments, URL credentials, unknown paths, and malformed URLs are removed or dropped. This avoids logging arbitrary missing-page paths that might contain private values. No contact address, resume URL, link URL, terminal input, or project text is added to custom event properties.

Custom events remain **disabled by default**. Only after confirming that the current plan includes them, set `NEXT_PUBLIC_VERCEL_CUSTOM_EVENTS=true` for Production and redeploy. Do not enable a paid add-on for this rollout. A single delegated click listener recognizes explicitly marked links and sends only these finite values:

| Action | Event | Properties |
| --- | --- | --- |
| Contact CTA | `contact_click` | None |
| Resume CTA | `resume_click` | None |
| Project source | `project_click` | `kind: source` |
| Project demo | `project_click` | `kind: demo` |

Future public routes must be deliberately added to the telemetry allowlist. Browser blockers or network failures can suppress telemetry without affecting navigation.

## Verify

- Run `node --experimental-strip-types --test tests/analytics.test.mjs` for redaction and event allowlist checks.
- Run lint, TypeScript checks, and a production build.
- In a local or preview deployment, confirm neither telemetry script is injected.
- After enabling the products and deploying to production, confirm each SDK script is loaded once and outgoing event URLs contain neither query nor hash values.

Sources: [Analytics quickstart](https://vercel.com/docs/analytics/quickstart), [redacting sensitive data](https://vercel.com/docs/analytics/redacting-sensitive-data), [Speed Insights quickstart](https://vercel.com/docs/speed-insights/quickstart), [managing Speed Insights usage](https://vercel.com/docs/speed-insights/managing-usage).
