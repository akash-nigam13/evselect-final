import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Aurora";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import FacetedCatalog from "@/components/catalog/FacetedCatalog";
import { EVS } from "@/lib/ev-data";
import { webPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Search EVs",
  description:
    "Search across every electric car, scooter and bike on EVSelect.in — filter by brand, body type, price, range and more.",
  alternates: { canonical: "https://www.evselect.in/search" },
  robots: { index: false, follow: true },
};

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const q = typeof searchParams.q === "string" ? searchParams.q : "";
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden">
          <Aurora variant="dual" />
          <div className="mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: "Search", path: "/search" }]} className="mb-6" />
            <h1 className="font-display text-4xl font-bold text-ev-text sm:text-5xl">
              {q ? <>Results for <span className="text-gradient-brand">&ldquo;{q}&rdquo;</span></> : <>Search <span className="text-gradient-brand">EVs</span></>}
            </h1>
          </div>
        </section>
        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <FacetedCatalog pool={EVS} initialQuery={q} />
        </div>
      </main>
      <Footer />
      <JsonLd data={webPageSchema("Search EVs", "Search electric vehicles on EVSelect.in", "/search")} />
    </>
  );
}
