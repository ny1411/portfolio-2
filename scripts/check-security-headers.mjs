import assert from "node:assert/strict";

// Run against next start or a deployed URL, never a redirect/login shell.
const base = new URL(process.argv[2] ?? "http://localhost:3000");
const expectPreview = process.argv.includes("--preview");

async function request(path, expectedStatus) {
  const response = await fetch(new URL(path, base), {
    redirect: "manual",
    signal: AbortSignal.timeout(15_000),
  });
  assert.equal(response.status, expectedStatus, `${path}: unexpected status (check deployment protection/redirects)`);
  assert.equal(response.headers.get("x-content-type-options"), "nosniff", `${path}: MIME sniffing protection`);
  assert.equal(response.headers.get("x-frame-options"), "DENY", `${path}: clickjacking protection`);
  assert.equal(response.headers.get("referrer-policy"), "strict-origin-when-cross-origin", `${path}: referrer policy`);
  const permissions = response.headers.get("permissions-policy") ?? "";
  for (const feature of ["camera", "microphone", "geolocation", "payment"]) {
    assert.ok(permissions.includes(`${feature}=()`), `${path}: ${feature} must be disabled`);
  }
  assert.equal(response.headers.get("x-powered-by"), null, `${path}: framework signature exposed`);

  const csp = response.headers.get("content-security-policy") ?? "";
  const directives = new Map(csp.split(";").map((part) => {
    const [name, ...values] = part.trim().split(/\s+/);
    return [name, values];
  }));
  for (const name of ["frame-ancestors", "object-src", "base-uri"]) {
    assert.deepEqual(directives.get(name), ["'none'"], `${path}: ${name}`);
  }
  assert.deepEqual(directives.get("script-src-attr"), ["'none'"], `${path}: inline event handlers`);
  assert.ok(directives.get("script-src")?.includes("'self'"), `${path}: app and telemetry scripts blocked`);
  assert.ok(directives.get("script-src")?.includes("'unsafe-inline'"), `${path}: static hydration blocked`);
  assert.ok(directives.get("connect-src")?.includes("'self'"), `${path}: same-origin telemetry blocked`);
  assert.ok(!csp.includes("'unsafe-eval'"), `${path}: production CSP must not allow eval (use next start)`);
  assert.ok(!/\b(?:https?:|wss?:)\s*(?:;|$)/.test(csp), `${path}: unbounded network scheme allowed`);
  if (expectPreview) {
    assert.ok(directives.get("script-src")?.includes("https://vercel.live"), `${path}: preview toolbar script blocked`);
    assert.ok(directives.get("connect-src")?.includes("wss://ws-us3.pusher.com"), `${path}: preview comments blocked`);
    assert.ok(directives.get("frame-src")?.includes("https://vercel.live"), `${path}: preview toolbar frame blocked`);
  } else {
    assert.deepEqual(directives.get("frame-src"), ["'none'"], `${path}: unexpected iframe origin`);
  }
  return response;
}

const homepage = await request("/", 200);
assert.ok(!homepage.headers.get("cache-control")?.includes("immutable"), "HTML must not be immutable");
const html = await homepage.text();
assert.match(html, /Neeraj Yamaji/, "Expected the portfolio, not a protection/error page");
const staticScript = html.match(/src="([^"]*\/_next\/static\/[^"]+\.js[^"]*)"/);
assert.ok(staticScript, "Expected a versioned Next.js script in the rendered page");
const script = await fetch(new URL(staticScript[1].replaceAll("&amp;", "&"), base));
assert.equal(script.status, 200, "Versioned Next.js script should load");
assert.match(script.headers.get("cache-control") ?? "", /immutable/, "Retain framework caching for versioned bundles");
await script.body?.cancel();
const avatar = await request("/avatar.png", 200);
assert.ok(!avatar.headers.get("cache-control")?.includes("immutable"), "Unversioned public files must not be immutable");
await avatar.body?.cancel();
const missing = await request("/__security_header_check_missing__", 404);
await missing.body?.cancel();
console.log(`Security headers and cache behavior passed for ${base.origin}${expectPreview ? " (preview)" : ""}.`);
