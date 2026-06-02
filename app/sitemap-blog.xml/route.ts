import { renderUrlset, blogEntries } from "@/lib/sitemap";

export const dynamic = "force-static";

export function GET() {
  return new Response(renderUrlset(blogEntries()), {
    headers: { "Content-Type": "application/xml" },
  });
}
