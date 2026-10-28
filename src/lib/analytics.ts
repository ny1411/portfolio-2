/** Only the public homepage is measured; arbitrary 404 paths may contain private data. */
export function sanitizeTelemetryEvent<T extends { url: string }>(event: T): T | null {
  try {
    const url = new URL(event.url);
    if (!['https:', 'http:'].includes(url.protocol) || url.pathname !== '/') {
      return null;
    }

    // Reconstruct rather than mutate so credentials, query values, and fragments are removed.
    return { ...event, url: `${url.origin}/` };
  } catch {
    return null;
  }
}

/** Deliberately finite: never derive event names/properties from link URLs or user input. */
export function getPortfolioEvent(action: string | undefined) {
  switch (action) {
    case 'contact':
      return { name: 'contact_click' } as const;
    case 'resume':
      return { name: 'resume_click' } as const;
    case 'project-source':
      return { name: 'project_click', kind: 'source' } as const;
    case 'project-demo':
      return { name: 'project_click', kind: 'demo' } as const;
    default:
      return null;
  }
}
