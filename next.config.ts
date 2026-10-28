import type { NextConfig } from "next";

const isDevelopment = process.env.NODE_ENV === "development";
const isPreview = process.env.VERCEL_ENV === "preview";

// Keep static rendering: Next.js hydration and next-themes need inline scripts,
// while motion uses inline styles. Eval is permitted only by the dev server.
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ""}${isPreview ? " https://vercel.live" : ""}`,
  "script-src-attr 'none'",
  `style-src 'self' 'unsafe-inline'${isPreview ? " https://vercel.live" : ""}`,
  `img-src 'self' data: blob:${isPreview ? " https://vercel.live https://vercel.com" : ""}`,
  `font-src 'self'${isPreview ? " https://vercel.live https://assets.vercel.com" : ""}`,
  // Vercel's Next.js telemetry SDKs use same-origin /_vercel endpoints.
  `connect-src 'self'${isDevelopment ? " ws: wss:" : ""}${isPreview ? " https://vercel.live wss://ws-us3.pusher.com" : ""}`,
  `frame-src ${isPreview ? "https://vercel.live" : "'none'"}`,
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'none'",
  "form-action 'self'",
  ...(!isDevelopment ? ["upgrade-insecure-requests"] : []),
].join("; ");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: contentSecurityPolicy },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
