const SELIC_CACHE_KEY = 'selic-rate';
const EXPIRATION_MS = 1000 * 60 * 60; // 1h

export function getCachedSelic(): number | null {
  const item = localStorage.getItem(SELIC_CACHE_KEY);
  if (!item) return null;

  const parsed = JSON.parse(item);
  if (Date.now() - parsed.timestamp > EXPIRATION_MS) return null;

  return parsed.value;
}

export function setCachedSelic(value: number): void {
  const payload = { value: value, timestamp: Date.now() };
  localStorage.setItem(SELIC_CACHE_KEY, JSON.stringify(payload));
}
