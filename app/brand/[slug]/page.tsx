import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BrandDetail from "@/components/catalog/BrandDetail";
import { BRANDS, getBrandBySlug } from "@/lib/ev-data";
import { altsFor } from "@/lib/i18n";

export function generateStaticParams() {
  return BRANDS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const brand = getBrandBySlug(params.slug);
  if (!brand) {
    return { title: "Brand not found | EVSelect.in" };
  }
  return {
    title: `${brand.name} EV Price in India 2026 — All ${brand.count} Models, Range & Specs`,
    description: `${brand.name} electric vehicles in India (2026): compare all ${brand.count} ${brand.name} EV models on price, range, battery and specs. Full ${brand.name} EV price list and lineup in one place.`,
    alternates: altsFor(`/brand/${brand.slug}`, "en"),
  };
}

export default function BrandPage({ params }: { params: { slug: string } }) {
  const brand = getBrandBySlug(params.slug);
  if (!brand) return notFound();
  return <BrandDetail brand={brand} locale="en" />;
}
