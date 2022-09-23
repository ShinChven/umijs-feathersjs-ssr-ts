const devHOST = 'http://localhost:3030';

export const baseUrl = (() => {
  if (typeof window === 'undefined') {
    return undefined;
  }
  return window.location.origin === 'http://localhost:8000' ? devHOST : window.location.origin;
})();

// noinspection JSUnusedGlobalSymbols
export const makeUrl = (path: string) => {
  return `${baseUrl}${path}`;
}
