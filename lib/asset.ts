// Prefix public assets with the base path so images work when the site is served from a subfolder (GitHub Pages).
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`
