import { renderUrlset, carEntries } from "@/lib/sitemap";

export const dynamic = "force-static";

export function GET() {
  return new Response(renderUrlset(carEntries()), {
    headers: { "Content-Type": "application/xml" },
  });
}
