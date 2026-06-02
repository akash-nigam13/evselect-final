import { renderUrlset, localeEntries } from "@/lib/sitemap";

export const dynamic = "force-static";

export function GET() {
  return new Response(renderUrlset(localeEntries()), {
    headers: { "Content-Type": "application/xml" },
  });
}
