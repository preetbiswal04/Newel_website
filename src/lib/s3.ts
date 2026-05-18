/**
 * Utility to resolve media URLs dynamically from S3 or local fallback.
 * Fully configurable via the NEXT_PUBLIC_S3_BASE_URL environment variable.
 */
export function getMediaUrl(path: string | undefined): string {
  if (!path) return "";

  // If the path is already an absolute URL or data URI, return it as-is
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }

  // Clean path to remove leading slash
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // S3 Base URL from environment variable or fallback to the provided public bucket URL format
  const s3BaseUrl = process.env.NEXT_PUBLIC_S3_BASE_URL || "https://newel-website-stotage.s3.ap-south-1.amazonaws.com/public";

  // If S3 Base URL is explicitly set to "local", load from local public directory
  if (process.env.NEXT_PUBLIC_S3_BASE_URL === "local") {
    return `/${cleanPath}`;
  }

  return `${s3BaseUrl}/${cleanPath}`;
}
