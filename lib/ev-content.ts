import { priceLabel, type EV } from "@/lib/ev-data";
import type { Locale } from "@/lib/i18n";

/**
 * Data-driven, per-vehicle SEO content. Every string is built from the
 * vehicle's own specs, so each of the ~148 pages is genuinely unique
 * (no duplicate boilerplate). Returns plain text for prose + FAQ; internal
 * links and CTAs are added in the EvDetail component.
 */

type Tier = "budget" | "mid" | "premium" | "luxury";

const isHi = (l: Locale) => l === "hi";

function catWord(ev: EV, l: Locale): string {
  if (isHi(l)) return ev.category === "car" ? "इलेक्ट्रिक कार" : ev.category === "scooter" ? "इलेक्ट्रिक स्कूटर" : "इलेक्ट्रिक मोटरसाइकिल";
  return ev.category === "car" ? "electric car" : ev.category === "scooter" ? "electric scooter" : "electric motorcycle";
}

function priceTier(ev: EV): Tier {
  const p = ev.priceMinLakh ?? 0;
  if (ev.category === "car") {
    if (p < 12) return "budget";
    if (p < 20) return "mid";
    if (p < 40) return "premium";
    return "luxury";
  }
  if (p < 1) return "budget";
  if (p < 1.6) return "mid";
  return "premium";
}

function audience(ev: EV, l: Locale): string {
  const r = ev.rangeKmARAI ?? 0;
  if (ev.category === "car") {
    if ((ev.seating ?? 5) >= 6) return isHi(l) ? "बड़े परिवारों और लंबी यात्रा करने वालों" : "larger families and long-distance travellers";
    if (r >= 450) return isHi(l) ? "हाईवे और इंटरसिटी ड्राइविंग" : "highway and intercity driving";
    if (r >= 300) return isHi(l) ? "रोज़ाना शहर और कभी-कभी हाईवे उपयोग" : "daily city driving with the occasional highway run";
    return isHi(l) ? "शहर के अंदर रोज़ाना आने-जाने" : "city commuting";
  }
  if (r >= 120) return isHi(l) ? "लंबे शहरी सफर और डेली कम्यूट" : "longer urban commutes and daily riding";
  return isHi(l) ? "छोटे शहरी सफर" : "short city commutes";
}

/** Unique multi-paragraph overview. */
export function evOverview(ev: EV, locale: Locale = "en"): string[] {
  const hi = isHi(locale);
  const tier = priceTier(ev);
  const cw = catWord(ev, locale);
  const out: string[] = [];

  // Paragraph 1 — identity + headline specs
  const specBits: string[] = [];
  if (ev.batteryKwh != null) specBits.push(`${ev.batteryKwh} kWh ${hi ? "बैटरी" : "battery pack"}`);
  if (ev.rangeKmARAI != null) specBits.push(hi ? `ARAI के अनुसार ${ev.rangeKmARAI} km रेंज` : `a claimed ARAI range of ${ev.rangeKmARAI} km`);
  if (ev.powerBhp != null) specBits.push(`${ev.powerBhp} bhp`);

  if (hi) {
    out.push(
      `${ev.fullName} ${ev.brand} की एक ${ev.bodyType} ${cw} है, जो भारत में ${ev.upcoming ? "जल्द लॉन्च होने वाली है" : "बिक्री पर है"} और इसकी एक्स-शोरूम कीमत ${priceLabel(ev)} है। ` +
        (specBits.length ? `इसमें ${specBits.join(", ")} मिलती है${ev.realRangeKm != null ? `, और असल भारतीय परिस्थितियों में लगभग ${ev.realRangeKm} km रेंज मिलती है` : ""}।` : "")
    );
  } else {
    out.push(
      `The ${ev.fullName} is ${/^[aeiou]/i.test(ev.bodyType) ? "an" : "a"} ${ev.bodyType.toLowerCase()} ${cw} from ${ev.brand}, ${ev.upcoming ? "expected to launch in India" : "on sale in India"} at ${priceLabel(ev)} (ex-showroom). ` +
        (specBits.length ? `It pairs ${specBits.join(", ")}${ev.realRangeKm != null ? `, translating to roughly ${ev.realRangeKm} km in real-world Indian conditions` : ""}.` : "")
    );
  }

  // Paragraph 2 — charging, positioning, audience, standout features
  const p2: string[] = [];
  if (ev.fastChargeKw != null) {
    p2.push(hi
      ? `DC फास्ट चार्जिंग ${ev.fastChargeTime ? `(${ev.fastChargeTime})` : `${ev.fastChargeKw} kW तक`} सपोर्ट करती है${ev.acChargeKw != null ? `, जबकि घर पर ${ev.acChargeKw} kW AC चार्जर से धीरे चार्ज किया जा सकता है` : ""}।`
      : `It supports DC fast charging ${ev.fastChargeTime ? `(${ev.fastChargeTime})` : `at up to ${ev.fastChargeKw} kW`}${ev.acChargeKw != null ? `, with ${ev.acChargeKw} kW AC charging for slower top-ups at home` : ""}.`);
  } else if (ev.acChargeKw != null) {
    p2.push(hi ? `इसे ${ev.acChargeKw} kW AC चार्जर से चार्ज किया जा सकता है।` : `It charges via a ${ev.acChargeKw} kW AC charger.`);
  }
  const tierWord = hi
    ? { budget: "किफ़ायती", mid: "मिड-रेंज", premium: "प्रीमियम", luxury: "लग्ज़री" }[tier]
    : tier;
  p2.push(hi
    ? `${tierWord} सेगमेंट में रखी गई यह ${audience(ev, locale)} के लिए सबसे उपयुक्त है।`
    : `Positioned in the ${tierWord} segment, it is best suited to ${audience(ev, locale)}.`);
  if (ev.notableFeatures.length) {
    const feats = ev.notableFeatures.slice(0, 3).join(", ");
    p2.push(hi ? `मुख्य खूबियों में ${feats} शामिल हैं।` : `Notable highlights include ${feats}.`);
  }
  out.push(p2.join(" "));

  // Paragraph 3 — short verdict
  if (hi) {
    out.push(
      tier === "budget"
        ? `कुल मिलाकर, ${ev.name} उन खरीदारों के लिए अच्छा विकल्प है जो कम चलने की लागत के साथ किफ़ायती EV चाहते हैं।`
        : tier === "luxury"
        ? `${ev.name} एक प्रीमियम पेशकश है — तकनीक और परफ़ॉर्मेंस चाहने वालों के लिए, बशर्ते बजट इजाज़त दे।`
        : `${ev.name} फ़ीचर्स, रेंज और कीमत के बीच संतुलित विकल्प है — खरीदने से पहले इसे दूसरी EVs के साथ तुलना ज़रूर करें।`
    );
  } else {
    out.push(
      tier === "budget"
        ? `Overall, the ${ev.name} is a strong pick for buyers who want an affordable EV with low running costs.`
        : tier === "luxury"
        ? `The ${ev.name} is a premium proposition — one for buyers chasing technology and performance, budget permitting.`
        : `The ${ev.name} strikes a sensible balance of features, range and price — well worth comparing against rivals before you book.`
    );
  }
  return out;
}

/** Unique FAQ set built from the vehicle's data. */
export function evFaqs(ev: EV, locale: Locale = "en"): { q: string; a: string }[] {
  const hi = isHi(locale);
  const faqs: { q: string; a: string }[] = [];

  faqs.push(hi
    ? { q: `${ev.name} की कीमत भारत में कितनी है?`, a: `${ev.fullName} की एक्स-शोरूम कीमत ${priceLabel(ev)} है। रजिस्ट्रेशन और बीमा के साथ ऑन-रोड कीमत इससे ज़्यादा होगी; आपके राज्य की EV सब्सिडी असरदार कीमत घटा सकती है।` }
    : { q: `What is the price of the ${ev.name} in India?`, a: `The ${ev.fullName} is priced at ${priceLabel(ev)} (ex-showroom). The on-road price will be higher after registration and insurance — and EV subsidies in your state can lower the effective cost.` });

  if (ev.rangeKmARAI != null) {
    faqs.push(hi
      ? { q: `${ev.name} की रेंज कितनी है?`, a: `${ev.name} की ARAI रेंज ${ev.rangeKmARAI} km है${ev.realRangeKm != null ? `, जबकि असल इस्तेमाल में लगभग ${ev.realRangeKm} km मिलने की उम्मीद रखें` : ""}। असल रेंज स्पीड, AC, भार और सड़क पर निर्भर करती है।` }
      : { q: `What is the range of the ${ev.name}?`, a: `The ${ev.name} has a claimed ARAI range of ${ev.rangeKmARAI} km${ev.realRangeKm != null ? `, while real-world range is around ${ev.realRangeKm} km` : ""}. Actual range depends on speed, AC use, load and terrain.` });
  }

  if (ev.fastChargeKw != null || ev.fastChargeTime || ev.chargeTimeFull) {
    const a = hi
      ? `${ev.fastChargeTime ? `DC फास्ट चार्जर से ${ev.fastChargeTime}।` : ev.fastChargeKw != null ? `यह ${ev.fastChargeKw} kW तक DC फास्ट चार्जिंग सपोर्ट करती है।` : ""}${ev.chargeTimeFull ? ` AC से पूरा चार्ज ${ev.chargeTimeFull} में होता है।` : ""}`.trim()
      : `${ev.fastChargeTime ? `On a DC fast charger it does ${ev.fastChargeTime}.` : ev.fastChargeKw != null ? `It supports DC fast charging up to ${ev.fastChargeKw} kW.` : ""}${ev.chargeTimeFull ? ` A full AC charge takes about ${ev.chargeTimeFull}.` : ""}`.trim();
    faqs.push(hi ? { q: `${ev.name} को चार्ज होने में कितना समय लगता है?`, a } : { q: `How long does the ${ev.name} take to charge?`, a });
  }

  if (ev.powerBhp != null || ev.topSpeedKmph != null || ev.accelSec != null) {
    const bits = hi
      ? [ev.powerBhp != null ? `${ev.powerBhp} bhp पावर` : "", ev.accelSec != null ? `0–100 km/h लगभग ${ev.accelSec}s में` : "", ev.topSpeedKmph != null ? `टॉप स्पीड ${ev.topSpeedKmph} km/h` : ""].filter(Boolean).join(", ")
      : [ev.powerBhp != null ? `${ev.powerBhp} bhp` : "", ev.accelSec != null ? `0–100 km/h in about ${ev.accelSec}s` : "", ev.topSpeedKmph != null ? `a top speed of ${ev.topSpeedKmph} km/h` : ""].filter(Boolean).join(", ");
    faqs.push(hi
      ? { q: `${ev.name} कितनी पावरफुल है?`, a: `${ev.name} में ${bits} मिलती है।` }
      : { q: `How powerful is the ${ev.name}?`, a: `The ${ev.name} makes ${bits}.` });
  }

  faqs.push(hi
    ? { q: `क्या 2026 में ${ev.name} खरीदना सही है?`, a: `अगर ${audience(ev, locale)} आपकी ज़रूरत है तो ${ev.name} एक मज़बूत विकल्प है। खरीदने से पहले इसे समान कीमत वाली EVs से तुलना करें और अपने राज्य की सब्सिडी ज़रूर जाँचें।` }
    : { q: `Is the ${ev.name} worth buying in 2026?`, a: `If your use case is ${audience(ev, locale)}, the ${ev.name} is a strong option. Before booking, compare it with similarly priced EVs and check the subsidies available in your state.` });

  return faqs;
}
