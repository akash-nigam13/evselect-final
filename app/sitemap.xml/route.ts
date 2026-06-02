import { renderSitemapIndex, SITEMAP_FILES } from "@/lib/sitemap";

export const dynamic = "force-static";

export function GET() {
  return new Response(renderSitemapIndex(SITEMAP_FILES), {
    headers: { "Content-Type": "application/xml" },
  });
}
