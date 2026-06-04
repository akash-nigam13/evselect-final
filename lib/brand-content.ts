import { priceFromLakh, type Brand, type EV, type EVCategory } from "@/lib/ev-data";
import type { Locale } from "@/lib/i18n";

const isHi = (l: Locale) => l === "hi";

const catPlural = (c: EVCategory, l: Locale): string =>
  isHi(l)
    ? c === "car" ? "इलेक्ट्रिक कारें" : c === "scooter" ? "इलेक्ट्रिक स्कूटर" : "इलेक्ट्रिक मोटरसाइकिल"
    : c === "car" ? "electric cars" : c === "scooter" ? "electric scooters" : "electric motorcycles";

function priceRange(evs: EV[]): { min: number; max: number } | null {
  const mins = evs.map((e) => e.priceMinLakh).filter((n): n is number => n != null);
  const maxs = evs.map((e) => e.priceMaxLakh ?? e.priceMinLakh).filter((n): n is number => n != null);
  if (!mins.length) return null;
  return { min: Math.min(...mins), max: Math.max(...maxs) };
}

export function brandOverview(brand: Brand, evs: EV[], locale: Locale = "en"): string[] {
  const hi = isHi(locale);
  const cats = brand.categories.map((c) => catPlural(c, locale)).join(hi ? ", " : ", ");
  const pr = priceRange(evs);
  const cheapest = [...evs].filter((e) => e.priceMinLakh != null).sort((a, b) => (a.priceMinLakh! - b.priceMinLakh!))[0];
  const longest = [...evs].filter((e) => e.rangeKmARAI != null).sort((a, b) => (b.rangeKmARAI! - a.rangeKmARAI!))[0];
  const out: string[] = [];

  if (hi) {
    out.push(
      `${brand.name} भारत में ${brand.count} ${brand.count === 1 ? "इलेक्ट्रिक वाहन" : "इलेक्ट्रिक वाहन"} बेचती है, जिसमें ${cats} शामिल हैं। ` +
        (pr ? `इनकी एक्स-शोरूम कीमत ${priceFromLakh(pr.min)} से ${priceFromLakh(pr.max)} तक है।` : "")
    );
    const bits: string[] = [];
    if (cheapest) bits.push(`सबसे किफ़ायती मॉडल ${cheapest.name} है (${priceFromLakh(cheapest.priceMinLakh!)} से)`);
    if (longest?.rangeKmARAI != null) bits.push(`सबसे ज़्यादा रेंज ${longest.name} देती है (ARAI ${longest.rangeKmARAI} km)`);
    if (bits.length) out.push(`${bits.join("; ")}। नीचे फ़िल्टर के साथ पूरी ${brand.name} EV रेंज देखें और किसी भी मॉडल की तुलना करें।`);
  } else {
    out.push(
      `${brand.name} sells ${brand.count} electric ${brand.count === 1 ? "vehicle" : "vehicles"} in India, spanning ${cats}. ` +
        (pr ? `Prices range from ${priceFromLakh(pr.min)} to ${priceFromLakh(pr.max)} (ex-showroom).` : "")
    );
    const bits: string[] = [];
    if (cheapest) bits.push(`the most affordable is the ${cheapest.name} (from ${priceFromLakh(cheapest.priceMinLakh!)})`);
    if (longest?.rangeKmARAI != null) bits.push(`the longest-range option is the ${longest.name} (${longest.rangeKmARAI} km ARAI)`);
    if (bits.length) out.push(`Among the line-up, ${bits.join(", and ")}. Browse the full ${brand.name} EV range below with filters, and compare any two models side by side.`);
  }
  return out;
}

export function brandFaqs(brand: Brand, evs: EV[], locale: Locale = "en"): { q: string; a: string }[] {
  const hi = isHi(locale);
  const pr = priceRange(evs);
  const cheapest = [...evs].filter((e) => e.priceMinLakh != null).sort((a, b) => a.priceMinLakh! - b.priceMinLakh!)[0];
  const dearest = [...evs].filter((e) => e.priceMinLakh != null).sort((a, b) => b.priceMinLakh! - a.priceMinLakh!)[0];
  const longest = [...evs].filter((e) => e.rangeKmARAI != null).sort((a, b) => b.rangeKmARAI! - a.rangeKmARAI!)[0];
  const faqs: { q: string; a: string }[] = [];

  faqs.push(hi
    ? { q: `${brand.name} भारत में कितनी EV बेचती है?`, a: `${brand.name} के पास भारत में ${brand.count} इलेक्ट्रिक मॉडल हैं${pr ? `, जिनकी कीमत ${priceFromLakh(pr.min)} से ${priceFromLakh(pr.max)} तक है` : ""}।` }
    : { q: `How many EVs does ${brand.name} sell in India?`, a: `${brand.name} currently offers ${brand.count} electric models in India${pr ? `, priced from ${priceFromLakh(pr.min)} to ${priceFromLakh(pr.max)}` : ""}.` });

  if (cheapest) {
    faqs.push(hi
      ? { q: `सबसे सस्ती ${brand.name} EV कौन-सी है?`, a: `सबसे किफ़ायती ${brand.name} EV ${cheapest.name} है, जिसकी एक्स-शोरूम कीमत ${priceFromLakh(cheapest.priceMinLakh!)} से शुरू होती है।` }
      : { q: `Which is the cheapest ${brand.name} EV?`, a: `The most affordable ${brand.name} EV is the ${cheapest.name}, starting at ${priceFromLakh(cheapest.priceMinLakh!)} (ex-showroom).` });
  }
  if (longest?.rangeKmARAI != null) {
    faqs.push(hi
      ? { q: `सबसे ज़्यादा रेंज वाली ${brand.name} EV कौन-सी है?`, a: `${longest.name} सबसे ज़्यादा रेंज देती है — ARAI के अनुसार ${longest.rangeKmARAI} km।` }
      : { q: `Which ${brand.name} EV has the longest range?`, a: `The ${longest.name} offers the longest range in the ${brand.name} line-up, with a claimed ${longest.rangeKmARAI} km (ARAI).` });
  }
  if (dearest && dearest.id !== cheapest?.id) {
    faqs.push(hi
      ? { q: `सबसे महँगी ${brand.name} EV कौन-सी है?`, a: `${dearest.name} ${brand.name} की सबसे प्रीमियम EV है, जिसकी कीमत ${priceFromLakh(dearest.priceMinLakh!)} से शुरू होती है।` }
      : { q: `Which is the most expensive ${brand.name} EV?`, a: `The ${dearest.name} is ${brand.name}'s most premium EV, starting at ${priceFromLakh(dearest.priceMinLakh!)}.` });
  }
  faqs.push(hi
    ? { q: `क्या ${brand.name} EVs पर सब्सिडी मिलती है?`, a: `कई राज्य EV खरीद पर सब्सिडी और रोड-टैक्स छूट देते हैं, जो ${brand.name} मॉडलों पर भी लागू हो सकती है। ताज़ा जानकारी के लिए हमारी EV सब्सिडी गाइड देखें।` }
    : { q: `Are ${brand.name} EVs eligible for subsidies?`, a: `Many states offer purchase subsidies and road-tax waivers that can apply to ${brand.name} models. See our EV subsidies guide for the latest state-by-state details.` });

  return faqs;
}
