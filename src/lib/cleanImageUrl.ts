/**
 * Cleans image URLs by removing any domain or path before /api/
 * and keeping only /api and the paths that follow
 */
export const cleanImageUrl = (url: string): string => {
  if (!url) return url

  // Find the position of /api/ in the URL
  const apiIndex = url.indexOf('/api/')

  if (apiIndex === -1) {
    // If no /api/ found, return the original URL
    return url
  }

  // Return only the part starting from /api/
  return url.substring(apiIndex)
}
