/**
 * Normalize URL to use HTTPS when page is loaded over HTTPS
 * This prevents Mixed Content errors in production
 * 
 * @param url - The URL to normalize
 * @returns The normalized URL (HTTP converted to HTTPS if page is HTTPS)
 */
export function normalizeUrl(url: string | null | undefined): string {
  if (!url) return '';
  
  // If page is loaded over HTTPS, ensure URL is also HTTPS
  if (typeof window !== 'undefined' && window.location.protocol === 'https:') {
    return url.replace(/^http:/, 'https:');
  }
  
  return url;
}

