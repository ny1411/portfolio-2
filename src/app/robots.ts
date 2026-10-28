import type { MetadataRoute } from "next";
import { isNonProductionDeployment, siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (isNonProductionDeployment) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", siteUrl).href,
  };
}
