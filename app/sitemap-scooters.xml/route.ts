import { renderUrlset, scooterEntries } from "@/lib/sitemap";

export const dynamic = "force-static";

export function GET() {
  return new Response(renderUrlset(scooterEntries()), {
    headers: { "Content-Type": "application/xml" },
  });
}
