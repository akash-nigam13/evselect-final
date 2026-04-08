import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { GitCompare, Plus, X } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare Electric Vehicles",
  description: "Compare any two EVs side by side — specs, range, price, charging speed and more.",
};

const popularPairs = [
  { a: "Tata Nexon EV Max", b: "MG ZS EV" },
  { a: "Ola S1 Pro", b: "Ather 450X" },
  { a: "Tata Tiago EV", b: "MG Comet EV" },
  { a: "Revolt RV400", b: "Tork Kratos R" },
];

export default function ComparePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Header */}
          <div className="mb-12 text-center">
            <p className="text-xs font-mono text-ev-cyan tracking-widest uppercase mb-3">Comparison Tool</p>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-white mb-4">
              Compare <span className="text-gradient-cyan">Any Two EVs</span>
            </h1>
            <p className="text-ev-text/60 font-body max-w-xl mx-auto">
              Select two electric vehicles and get a full side-by-side breakdown of every spec that matters.
            </p>
          </div>

          {/* Vehicle selector */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {["Vehicle A", "Vehicle B"].map((label, i) => (
              <div
                key={label}
                className="bg-ev-card border border-ev-border rounded-2xl p-6 flex flex-col items-center justify-center gap-4 min-h-[180px] hover:border-ev-cyan/40 transition-colors group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full border-2 border-dashed border-ev-border group-hover:border-ev-cyan/40 flex items-center justify-center transition-colors">
                  <Plus className="w-6 h-6 text-ev-border group-hover:text-ev-cyan transition-colors" />
                </div>
                <div className="text-center">
                  <div className="font-display font-semibold text-white text-sm mb-1">Select {label}</div>
                  <div className="text-ev-muted text-xs font-body">Search by name or brand</div>
                </div>
              </div>
            ))}
          </div>

          {/* Ad */}
          <AdPlaceholder format="leaderboard" slot="3333333333" className="mb-10" />

          {/* Popular comparisons */}
          <div>
            <h2 className="font-display font-bold text-white text-xl mb-6">Popular Comparisons</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {popularPairs.map(({ a, b }) => (
                <div
                  key={`${a}-${b}`}
                  className="bg-ev-card border border-ev-border rounded-xl p-4 hover:border-ev-cyan/30 transition-colors cursor-pointer group"
                >
                  <div className="text-xs font-display font-semibold text-white mb-1">{a}</div>
                  <div className="flex items-center gap-2 my-2">
                    <div className="flex-1 h-px bg-ev-border" />
                    <GitCompare className="w-3.5 h-3.5 text-ev-cyan" />
                    <div className="flex-1 h-px bg-ev-border" />
                  </div>
                  <div className="text-xs font-display font-semibold text-ev-muted group-hover:text-white transition-colors">{b}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Placeholder for comparison table */}
          <div className="mt-12 bg-ev-card border border-dashed border-ev-border/40 rounded-2xl p-12 text-center">
            <GitCompare className="w-10 h-10 text-ev-muted mx-auto mb-4" />
            <p className="font-display font-semibold text-ev-muted">Select two vehicles above to generate a comparison</p>
          </div>

          {/* Sidebar ad */}
          <AdPlaceholder format="leaderboard" slot="4444444444" className="mt-10" />
        </div>
      </main>
      <Footer />
    </>
  );
}
