import type { MetadataRoute } from "next";
import { isNonProductionDeployment, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // The portfolio sections are anchors on one page, not separate URLs.
  return isNonProductionDeployment ? [] : [{ url: siteUrl.href }];
}
