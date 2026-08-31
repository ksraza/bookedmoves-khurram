// Resolves Lovable CDN asset pointers (.asset.json) to URLs that work
// everywhere — including a local dev/downloaded copy of the repo, where
// root-relative "/__l5e/..." paths would otherwise 404.
const PUBLISHED_ORIGIN = "https://bookedmoves-khurram.lovable.app";

export function assetUrl(pointer: { url: string }): string {
  const url = pointer.url;
  if (!url.startsWith("/")) return url;
  if (typeof window !== "undefined" && window.location.hostname.endsWith("lovable.app")) {
    return url; // served by Lovable's asset infrastructure
  }
  return `${PUBLISHED_ORIGIN}${url}`;
}
