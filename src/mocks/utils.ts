export const delay = (ms = 200) => new Promise<void>((r) => setTimeout(r, ms));

export function boundsFilter(
  lat: number,
  lng: number,
  swLat: number,
  swLng: number,
  neLat: number,
  neLng: number,
) {
  return lat >= swLat && lat <= neLat && lng >= swLng && lng <= neLng;
}

export function delayWithAbort(ms = 200, signal?: AbortSignal) {
  return new Promise<void>((resolve, reject) => {
    const t = setTimeout(resolve, ms);
    if (!signal) return;
    if (signal.aborted) {
      clearTimeout(t);
      return reject(new DOMException('Aborted', 'AbortError'));
    }
    signal.addEventListener(
      'abort',
      () => {
        clearTimeout(t);
        reject(new DOMException('Aborted', 'AbortError'));
      },
      { once: true },
    );
  });
}
