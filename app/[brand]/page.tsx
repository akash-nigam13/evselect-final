import { notFound, permanentRedirect } from "next/navigation";
import { BRANDS, getBrandBySlug } from "@/lib/ev-data";

// A bare brand-only URL like /ather has no page of its own — the brand
// directory lives at /brand/ather. 308-redirect /<brand> -> /brand/<brand>
// for known brand slugs; anything else is a genuine 404. Static/named routes
// (/catalog, /blog, /brand, the tools, etc.) take precedence over this
// dynamic segment, and the /<brand>/<model> vehicle pages are unaffected.
export function generateStaticParams() {
  return BRANDS.map((b) => ({ brand: b.slug }));
}

export default function BrandOnlyRedirect({ params }: { params: { brand: string } }) {
  if (!getBrandBySlug(params.brand)) return notFound();
  permanentRedirect(`/brand/${params.brand}`);
}
