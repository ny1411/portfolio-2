"use client";

import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/next";
import { track } from "@vercel/analytics";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getPortfolioEvent, sanitizeTelemetryEvent } from "@/lib/analytics";

/** Mount once in the root layout; pass the server's VERCEL_ENV production check. */
export function VercelTelemetry({ enabled }: { enabled: boolean }) {
  useEffect(() => {
    // Custom events require a supporting plan and are deliberately off by default.
    if (!enabled || process.env.NEXT_PUBLIC_VERCEL_CUSTOM_EVENTS !== "true") return;

    function onClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>("a[data-portfolio-event]");
      if (!link) return;
      const portfolioEvent = getPortfolioEvent(link.dataset.portfolioEvent);
      if (!portfolioEvent) return;

      track(
        portfolioEvent.name,
        "kind" in portfolioEvent ? { kind: portfolioEvent.kind } : undefined,
      );
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <Analytics beforeSend={sanitizeTelemetryEvent} debug={false} />
      <SpeedInsights
        beforeSend={sanitizeTelemetryEvent}
        sampleRate={0.1}
        debug={false}
      />
    </>
  );
}
