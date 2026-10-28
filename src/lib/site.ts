import type { Metadata } from "next";

const defaultSiteUrl = "https://www.neerajyamaji.com";

/** A canonical origin must never come from a preview URL or an incoming request. */
export function resolveSiteUrl(value = process.env.SITE_URL): URL {
  const url = new URL(value?.trim() || defaultSiteUrl);

  if (
    url.protocol !== "https:" ||
    url.username ||
    url.password ||
    url.port ||
    url.pathname !== "/" ||
    url.search ||
    url.hash ||
    url.hostname === "localhost" ||
    url.hostname.endsWith(".vercel.app")
  ) {
    throw new Error("SITE_URL must be an HTTPS production custom-domain origin without a path, credentials, port, query, or fragment.");
  }

  return url;
}

export const siteUrl = resolveSiteUrl();
export const isNonProductionDeployment =
  Boolean(process.env.VERCEL_ENV) && process.env.VERCEL_ENV !== "production";

export const siteTitle = "Neeraj Yamaji | Frontend Developer";
export const siteDescription =
  "Frontend developer focused on React, TypeScript, responsive web experiences, and practical AI-powered developer tools.";

export const siteMetadata: Metadata = {
  metadataBase: siteUrl,
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Neeraj Yamaji",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    creator: "@n_y_1411",
    title: siteTitle,
    description: siteDescription,
    images: [{ url: "/opengraph-image", alt: "Neeraj Yamaji — Frontend Developer" }],
  },
  robots: isNonProductionDeployment
    ? { index: false, follow: false }
    : { index: true, follow: true },
};
