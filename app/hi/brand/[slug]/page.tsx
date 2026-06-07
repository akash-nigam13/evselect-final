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
    return { title: "ब्रांड नहीं मिला | EVSelect.in" };
  }
  return {
    title: `${brand.name} इलेक्ट्रिक वाहन — मॉडल, स्पेसिफिकेशन और कीमत`,
    description: `भारत में सभी ${brand.count} ${brand.name} इलेक्ट्रिक वाहन देखें। ${brand.name} EV लाइनअप में रेंज, बैटरी, कीमत और स्पेसिफिकेशन की तुलना करें।`,
    alternates: altsFor(`/brand/${brand.slug}`, "hi"),
  };
}

export default function BrandPageHi({ params }: { params: { slug: string } }) {
  const brand = getBrandBySlug(params.slug);
  if (!brand) return notFound();
  return <BrandDetail brand={brand} locale="hi" />;
}
