import assert from "node:assert/strict";

const base = new URL(process.argv[2] ?? "http://localhost:3000");
const preview = process.argv.includes("--preview");

async function response(path, contentType) {
  const result = await fetch(new URL(path, base), {
    redirect: "manual",
    signal: AbortSignal.timeout(15_000),
  });
  assert.equal(result.status, 200, `${path}: expected the application, not a redirect/protection page`);
  assert.ok(result.headers.get("content-type")?.includes(contentType), `${path}: unexpected content type`);
  return result;
}

const home = await (await response("/", "text/html")).text();
const canonical = home.match(/<link rel="canonical" href="([^"]+)"/);
assert.ok(canonical, "Canonical link missing");
const origin = new URL(canonical[1]);
assert.equal(origin.protocol, "https:");
assert.equal(origin.pathname, "/");
assert.ok(!origin.hostname.endsWith(".vercel.app"), "Preview URL must never be canonical");
assert.match(home, preview ? /name="robots" content="noindex, nofollow"/ : /name="robots" content="index, follow"/);
const ogUrl = home.match(/property="og:url" content="([^"]+)"/);
assert.ok(ogUrl, "Open Graph URL missing");
assert.equal(new URL(ogUrl[1]).href, origin.href, "OG URL must match canonical");

const robots = await (await response("/robots.txt", "text/plain")).text();
const sitemap = await (await response("/sitemap.xml", "xml")).text();
if (preview) {
  assert.match(robots, /Disallow: \/(?:\r?\n|$)/);
  assert.ok(!sitemap.includes("<loc>"), "Preview sitemap must be empty");
} else {
  assert.match(robots, /Allow: \/(?:\r?\n|$)/);
  assert.ok(robots.includes(`Sitemap: ${new URL("/sitemap.xml", origin).href}`));
  assert.ok(sitemap.includes(`<loc>${origin.href}</loc>`));
  assert.equal((sitemap.match(/<loc>/g) ?? []).length, 1, "Only the real homepage belongs in the sitemap");
}

const imageUrl = home.match(/property="og:image" content="([^"]+)"/);
assert.ok(imageUrl, "Open Graph image metadata missing");
const imagePath = new URL(imageUrl[1].replaceAll("&amp;", "&")).pathname;
const png = Buffer.from(await (await response(imagePath, "image/png")).arrayBuffer());
assert.equal(png.readUInt32BE(16), 1200);
assert.equal(png.readUInt32BE(20), 630);
const optimized = await response("/_next/image?url=%2Favatar.png&w=256&q=75", "image/");
assert.ok(Number(optimized.headers.get("content-length")) > 0, "Optimized image must not be empty");
await optimized.body?.cancel();

console.log(`Canonical, ${preview ? "preview" : "production"} indexing, sitemap, 1200x630 OG and optimized image checks passed for ${base.origin}.`);
