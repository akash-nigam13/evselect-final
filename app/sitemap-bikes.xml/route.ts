import { renderUrlset, bikeEntries } from "@/lib/sitemap";

export const dynamic = "force-static";

export function GET() {
  return new Response(renderUrlset(bikeEntries()), {
    headers: { "Content-Type": "application/xml" },
  });
}
