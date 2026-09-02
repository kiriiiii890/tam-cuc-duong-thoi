// Set to the repo name (e.g. "/tam-cuc-duong-thoi") only for the GitHub
// Pages build, via NEXT_PUBLIC_BASE_PATH in the deploy workflow — empty
// locally, so dev/preview builds keep serving from the site root.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
