import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Embed the same original artwork in generated metadata images without an HTTP dependency.
export async function logoDataUrl() {
  const logo = await readFile(join(process.cwd(), "public/brand/movo.png"));
  return `data:image/png;base64,${logo.toString("base64")}`;
}
