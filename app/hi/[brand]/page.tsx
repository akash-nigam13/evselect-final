import { notFound, permanentRedirect } from "next/navigation";
import { BRANDS, getBrandBySlug } from "@/lib/ev-data";

// Hindi mirror: /hi/<brand> -> /hi/brand/<brand> for known brand slugs.
export function generateStaticParams() {
  return BRANDS.map((b) => ({ brand: b.slug }));
}

export default function HiBrandOnlyRedirect({ params }: { params: { brand: string } }) {
  if (!getBrandBySlug(params.brand)) return notFound();
  permanentRedirect(`/hi/brand/${params.brand}`);
}
