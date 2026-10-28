import assert from 'node:assert/strict';
import { test } from 'node:test';
import { getPortfolioEvent, sanitizeTelemetryEvent } from '../src/lib/analytics.ts';

test('removes sensitive URL query, fragment, and credentials for both SDK event types', () => {
  for (const type of ['pageview', 'event', 'vital']) {
    const event = { type, url: 'https://user:password@example.com/?email=private@example.com#token' };
    assert.deepEqual(sanitizeTelemetryEvent(event), { type, url: 'https://example.com/' });
    assert.match(event.url, /password/); // Input is not mutated.
  }
});

test('drops unknown paths, malformed URLs and unsafe schemes', () => {
  for (const url of ['https://example.com/private@example.com', 'invalid', 'javascript:alert(1)', 'file:///']) {
    assert.equal(sanitizeTelemetryEvent({ url }), null);
  }
});

test('custom event metadata is finite and never copies arbitrary input', () => {
  assert.deepEqual(getPortfolioEvent('contact'), { name: 'contact_click' });
  assert.deepEqual(getPortfolioEvent('resume'), { name: 'resume_click' });
  assert.deepEqual(getPortfolioEvent('project-source'), { name: 'project_click', kind: 'source' });
  assert.deepEqual(getPortfolioEvent('project-demo'), { name: 'project_click', kind: 'demo' });
  assert.equal(getPortfolioEvent('mailto:private@example.com'), null);
  assert.equal(getPortfolioEvent(undefined), null);
});
