import { renderUrlset, otherEntries } from "@/lib/sitemap";

export const dynamic = "force-static";

export function GET() {
  return new Response(renderUrlset(otherEntries()), {
    headers: { "Content-Type": "application/xml" },
  });
}
