import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Aurora";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import AdPlaceholder from "@/components/AdPlaceholder";
import { ArrowRight, BadgeCheck, AlertTriangle, Landmark, MapPin, Receipt, Calculator } from "lucide-react";
import { altsFor, localizedHref } from "@/lib/i18n";
import { articleSchema, faqPageSchema, webPageSchema, SITE } from "@/lib/seo";
import ToolsCTA from "@/components/ToolsCTA";

const UPDATED = "जून 2026";

export const metadata: Metadata = {
  title: "भारत में EV सब्सिडी और प्रोत्साहन 2026 — केंद्र + राज्य गाइड | EVSelect.in",
  description:
    "भारत में EV सब्सिडी की पूरी 2026 गाइड: PM E-DRIVE, राज्यवार खरीद सब्सिडी, रोड-टैक्स और रजिस्ट्रेशन छूट, 5% GST, Section 80EEB और इन्हें कैसे क्लेम करें। अपडेटेड, स्रोत-सहित, खरीदार-केंद्रित।",
  alternates: altsFor("/ev-subsidies-india", "hi"),
  openGraph: {
    title: "भारत में EV सब्सिडी और प्रोत्साहन 2026 — केंद्र + राज्य गाइड",
    type: "article",
  },
};

const stateRows: { state: string; subsidy: string; roadTax: string; status: "active" | "lapsed" | "draft" }[] = [
  { state: "Maharashtra", subsidy: "₹5,000/kWh · 2W ≤₹10k, 3W ≤₹30k, 4W ≤₹1.5L (कारें: केवल टैक्सी/फ्लीट)", roadTax: "100% छूट (2030 तक)", status: "active" },
  { state: "Madhya Pradesh", subsidy: "2W ≤₹10k, 3W ≤₹20k, e-car ≤₹50k", roadTax: "100% छूट", status: "active" },
  { state: "Rajasthan", subsidy: "2W ₹5k/kWh (≤₹20k), 3W ≤₹50k, 4W ≤₹1.5L + SGST", roadTax: "100% छूट", status: "active" },
  { state: "Tamil Nadu", subsidy: "कोई उपभोक्ता नकद सब्सिडी नहीं (आपूर्ति-पक्ष)", roadTax: "100% छूट (31 दिसंबर 2027 तक)", status: "active" },
  { state: "Telangana", subsidy: "सीमित (पहली 5,000 यूनिट)", roadTax: "100% छूट (पहली 5,000, 31 दिसंबर 2026 तक)", status: "active" },
  { state: "Bihar", subsidy: "2W ₹5k/kWh (पहली 10k), 4W ₹10k/kWh (पहली 1k)", roadTax: "75% MV-tax रिबेट (सत्यापित करें)", status: "active" },
  { state: "Assam", subsidy: "₹10,000/kWh · सीमा ₹20k / ₹50k / ₹1.5L", roadTax: "100% छूट (5 वर्ष)", status: "active" },
  { state: "Meghalaya", subsidy: "2W ₹10k/kWh; अन्य ₹4k/kWh (यूनिट सीमा सहित)", roadTax: "माफ़ (मार्च 2026 के बाद सत्यापित करें)", status: "active" },
  { state: "Odisha", subsidy: "2W ₹5k/kWh (≤₹20k), 3W ₹30k, 4W ≤₹1.5L", roadTax: "100% छूट (नवीनीकरण — सत्यापित करें)", status: "active" },
  { state: "West Bengal", subsidy: "खरीद सहायता कोष", roadTax: "100% (5 वर्ष) — विंडो मार्च 2026 में समाप्त", status: "active" },
  { state: "Delhi", subsidy: "DRAFT: 2W ≤₹30k, e-auto ₹50k", roadTax: "DRAFT: 100% (EVs ≤₹30L) 2030 तक", status: "draft" },
  { state: "Gujarat", subsidy: "बंद (2024)", roadTax: "1% (घटाया गया) मार्च 2026 तक", status: "lapsed" },
  { state: "Karnataka", subsidy: "सीमित", roadTax: "2026 में वापस लिया → कीमत-बैंड अनुसार 5–10%", status: "lapsed" },
  { state: "Uttar Pradesh", subsidy: "समाप्त", roadTax: "छूट 13 अक्टूबर 2025 को समाप्त", status: "lapsed" },
  { state: "Kerala", subsidy: "फ्लीट/स्क्रैपेज सहायता", roadTax: "~50% रियायत / 5 वर्ष (सत्यापित करें)", status: "active" },
];

const faqs = [
  {
    q: "क्या इलेक्ट्रिक कारें 2026 में केंद्रीय सब्सिडी के लिए पात्र हैं?",
    a: "नहीं। केंद्र की PM E-DRIVE योजना निजी इलेक्ट्रिक कारों को कवर नहीं करती — यह इलेक्ट्रिक दोपहिया, तिपहिया, बसों, ट्रकों और एम्बुलेंस को कवर करती है। सरकार का बताया गया कारण यह है कि e-कारों को पहले से ही रियायती 5% GST का लाभ मिलता है। कुछ राज्य (जैसे Madhya Pradesh में ₹50,000 तक; Maharashtra में टैक्सी/फ्लीट उपयोग के लिए) अब भी कार प्रोत्साहन देते हैं।",
  },
  {
    q: "इलेक्ट्रिक दोपहिया और तिपहिया खरीदारों को अभी कौन-सी केंद्रीय सब्सिडी मिलती है?",
    a: "PM E-DRIVE के तहत, मौजूदा चरण में डिमांड इंसेंटिव बैटरी क्षमता के प्रति kWh ₹2,500 है, जो प्रति वाहन ₹5,000 तक सीमित है। इलेक्ट्रिक दोपहिया प्रोत्साहन 31 जुलाई 2026 को समाप्त होना तय है, जबकि e-रिक्शा और e-कार्ट के लिए सहायता मार्च 2028 तक चलती है। लाइव सीमा की पुष्टि हमेशा आधिकारिक PM E-DRIVE पोर्टल पर करें।",
  },
  {
    q: "क्या FAME-II समाप्त हो गई?",
    a: "हाँ। FAME-II 31 मार्च 2024 को समाप्त हो गई। अंतरिम EMPS-2024 योजना ने अप्रैल–सितंबर 2024 का अंतराल भरा और इसे PM E-DRIVE में मिला दिया गया, जो 1 अक्टूबर 2024 को शुरू हुई और फिलहाल 31 मार्च 2028 तक चलती है।",
  },
  {
    q: "इलेक्ट्रिक वाहन पर मुझे कितना GST देना होता है?",
    a: "EVs पर बिना किसी सेस के सिर्फ़ 5% GST लगता है, जबकि 22 सितंबर 2025 से लागू GST 2.0 ढाँचे के तहत पेट्रोल/डीज़ल वाहनों पर 18% या 40% लगता है। EV चार्जर पर भी 5% टैक्स है। पूरे देश में EV खरीदारों के लिए यह सबसे बड़ा वित्तीय फ़ायदा है।",
  },
  {
    q: "क्या मैं अपने EV लोन पर ₹1.5 लाख की आयकर कटौती (Section 80EEB) अब भी क्लेम कर सकता हूँ?",
    a: "केवल तभी, जब आपका लोन 1 अप्रैल 2019 और 31 मार्च 2023 के बीच स्वीकृत हुआ हो, और आप पुरानी कर व्यवस्था के तहत रिटर्न भरते हों। नए लोन की विंडो बंद हो चुकी है — 31 मार्च 2023 के बाद स्वीकृत लोन पात्र नहीं हैं। कई वेबसाइटें अब भी गलत तरीके से यह संकेत देती हैं कि यह लाभ नए खरीदारों के लिए खुला है; ऐसा नहीं है।",
  },
  {
    q: "क्या EVs पर रोड टैक्स माफ़ है?",
    a: "यह पूरी तरह आपके राज्य पर निर्भर करता है। Maharashtra, Tamil Nadu (2027 तक) और Madhya Pradesh जैसे राज्यों में रोड टैक्स फिलहाल पूरी तरह माफ़ है, लेकिन Uttar Pradesh (अक्टूबर 2025 में समाप्त) या Karnataka (अब कीमत-बैंड अनुसार 5–10%) में अब माफ़ नहीं है। Gujarat मार्च 2026 तक घटाया हुआ 1% लेता है। खरीदने से पहले हमेशा अपने राज्य की मौजूदा अधिसूचना जाँच लें।",
  },
  {
    q: "कौन-सा राज्य सबसे ज़्यादा EV सब्सिडी देता है?",
    a: "यह वाहन श्रेणी के अनुसार बदलता है और अक्सर बदलता रहता है। ऐतिहासिक रूप से सबसे ऊँची प्रति-kWh दरें (₹10,000/kWh) Assam और Meghalaya में थीं, जबकि Maharashtra, Rajasthan, Madhya Pradesh और Odisha में मज़बूत सक्रिय कार्यक्रम हैं। ध्यान दें कि Gujarat ने अपनी सब्सिडी बंद कर दी है, Uttar Pradesh की टैक्स छूट समाप्त हो चुकी है, और Karnataka ने अपनी छूट वापस ले ली है — इसलिए किसी भी 'सबसे ज़्यादा' दावे पर भरोसा करने से पहले सत्यापित करें।",
  },
  {
    q: "मैं केंद्रीय PM E-DRIVE सब्सिडी वास्तव में कैसे क्लेम करूँ?",
    a: "यह खरीद के समय एक आधार-प्रमाणित e-Voucher के ज़रिए अपने-आप लागू हो जाती है। योजना पोर्टल वाउचर जनरेट करता है, डीलर इंसेंटिव को आपकी ऑन-रोड कीमत में जोड़ देता है, और आप अपने पंजीकृत मोबाइल नंबर पर भेजे गए लिंक से वाउचर पर हस्ताक्षर करते हैं। केंद्र सरकार को अलग से कोई आवेदन नहीं देना होता।",
  },
  {
    q: "मैं राज्य की सब्सिडी कैसे क्लेम करूँ?",
    a: "अधिकांश राज्य एक समर्पित EV या परिवहन पोर्टल का उपयोग करते हैं और वाहन के रजिस्ट्रेशन के बाद Direct Benefit Transfer (DBT) के ज़रिए सब्सिडी आपके बैंक खाते में भेजते हैं, आम तौर पर लगभग 30–45 दिनों में। उदाहरणों में Rajasthan, Telangana और Bihar के EV पोर्टल शामिल हैं। अपने विशिष्ट राज्य पोर्टल पर प्रक्रिया की पुष्टि करें।",
  },
  {
    q: "क्या मुझे अपना पुराना वाहन स्क्रैप करने पर लाभ मिलता है?",
    a: "हाँ। एक वैध स्क्रैपिंग सर्टिफ़िकेट के बदले राज्य आम तौर पर निजी वाहनों के लिए लगभग 25% तक रोड-टैक्स रिबेट देते हैं, और निर्माता आमतौर पर 4–6% छूट जोड़ते हैं। सटीक रकम राज्य-स्तर पर तय होती है, और कुछ राज्य (जैसे Kerala, Madhya Pradesh) एक EV-विशिष्ट स्क्रैपेज बोनस भी जोड़ते हैं।",
  },
];

const statusChip = (s: "active" | "lapsed" | "draft") => {
  if (s === "active") return { label: "सक्रिय", cls: "text-ev-green border-ev-green/40 bg-ev-green/10" };
  if (s === "draft") return { label: "ड्राफ्ट", cls: "text-amber-400 border-amber-400/40 bg-amber-400/10" };
  return { label: "समाप्त / वापस लिया", cls: "text-red-400 border-red-400/40 bg-red-400/10" };
};

export default function EvSubsidiesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-ev-border/40">
          <Aurora variant="dual" />
          <div className="relative mx-auto max-w-4xl px-4 pb-12 pt-12 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: "लर्न", path: "/learn" },
                { name: "EV सब्सिडी और प्रोत्साहन", path: "/ev-subsidies-india" },
              ]}
              homeName="होम"
              homeHref="/hi"
              className="mb-6"
            />
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-brand">
              <Receipt className="h-3 w-3" /> Policy & Incentives · अपडेटेड {UPDATED}
            </p>
            <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl text-balance">
              भारत में EV सब्सिडी और प्रोत्साहन <span className="text-gradient-brand">(2026)</span>
            </h1>
            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-ev-text/60 sm:text-lg">
              भारत में इलेक्ट्रिक वाहन पर आप वास्तव में कितनी बचत करते हैं, इसकी पूरी और मौजूदा गाइड —
              केंद्रीय योजनाएँ, राज्यवार सब्सिडी, रोड-टैक्स और रजिस्ट्रेशन छूट, GST, आयकर का पहलू, और हर
              लाभ को क्लेम करने का सटीक तरीका।
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <article className="prose-ev max-w-none">
            {/* TL;DR */}
            <div className="not-prose mb-10 rounded-2xl border border-brand/25 bg-ev-card p-6">
              <p className="mb-3 flex items-center gap-2 font-display text-sm font-bold text-white">
                <BadgeCheck className="h-4 w-4 text-brand" /> 30-सेकंड का सार
              </p>
              <ul className="space-y-2 font-body text-sm leading-relaxed text-ev-text/75">
                <li>• <strong className="text-white">केंद्रीय (PM E-DRIVE):</strong> e-2W और e-3W के लिए ₹2,500/kWh (₹5,000 तक सीमित)। <strong className="text-white">इलेक्ट्रिक कारों को कोई केंद्रीय नकद सब्सिडी नहीं मिलती</strong> — इसके बदले उन्हें 5% GST मिलता है।</li>
                <li>• <strong className="text-white">GST:</strong> EVs पर सिर्फ़ <strong className="text-white">5%</strong> बनाम पेट्रोल/डीज़ल पर 18–40%।</li>
                <li>• <strong className="text-white">राज्य सब्सिडी और रोड-टैक्स छूट</strong> ही असली बड़ी बचत हैं — लेकिन ये बहुत अलग-अलग होती हैं और अक्सर बदलती रहती हैं (नीचे दी गई तालिका देखें)।</li>
                <li>• <strong className="text-white">Section 80EEB</strong> (₹1.5 लाख की लोन-ब्याज कटौती) <strong className="text-white">नए लोन के लिए बंद है</strong> (स्वीकृति विंडो 31 मार्च 2023 को समाप्त हुई)।</li>
              </ul>
            </div>

            <h2 className="flex items-center gap-2"><Landmark className="h-5 w-5 text-brand" /> केंद्र सरकार की योजनाएँ</h2>

            <h3>PM E-DRIVE — मुख्य राष्ट्रीय योजना</h3>
            <p>
              <strong>PM E-DRIVE</strong> (PM Electric Drive Revolution in Innovative Vehicle Enhancement)
              प्रमुख केंद्रीय EV योजना है, जिसका परिव्यय <strong>₹10,900 करोड़</strong> है। यह 1 अक्टूबर 2024 को
              शुरू हुई — FAME-II की जगह, जो 31 मार्च 2024 को समाप्त हुई — और अब
              <strong> 31 मार्च 2028</strong> तक चलती है। यह सीधे इलेक्ट्रिक दोपहिया, तिपहिया, बसों, ट्रकों और
              एम्बुलेंस को, साथ ही सार्वजनिक चार्जिंग इंफ्रास्ट्रक्चर को सब्सिडी देती है।
            </p>
            <p>
              e-2W और e-3W के लिए खरीदार-केंद्रित डिमांड इंसेंटिव मौजूदा चरण में <strong>बैटरी क्षमता के प्रति kWh
              ₹2,500 है, जो प्रति वाहन ₹5,000 तक सीमित है</strong>। अहम बात यह है कि इलेक्ट्रिक दोपहिया
              प्रोत्साहन <strong>31 जुलाई 2026</strong> को समाप्त होना तय है, जबकि e-रिक्शा और e-कार्ट के लिए
              सहायता मार्च 2028 तक जारी रहती है। यह इंसेंटिव डीलर के पास एक आधार-प्रमाणित e-Voucher के ज़रिए
              लागू होता है, इसलिए अलग से कोई क्लेम दाखिल नहीं करना पड़ता।
            </p>
            <p className="not-prose flex items-start gap-2 rounded-xl border border-amber-400/30 bg-amber-400/5 p-4 font-body text-sm text-ev-text/75">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
              <span><strong className="text-white">इलेक्ट्रिक कारें PM E-DRIVE में शामिल नहीं हैं।</strong> केंद्र का रुख यह है कि 5% GST पहले ही e-कारों को सस्ता बना देता है। कार प्रोत्साहन, जहाँ मौजूद हैं, कुछ राज्यों से आते हैं।</span>
            </p>

            <h3>5% GST — सबसे बड़ी छिपी हुई बचत</h3>
            <p>
              हर EV — दोपहिया, तिपहिया या कार — पर बिना किसी कॉम्पेंसेशन सेस के सिर्फ़ <strong>5% GST</strong>
              लगता है। इसके उलट, 22 सितंबर 2025 से लागू GST 2.0 ढाँचे के तहत पेट्रोल और डीज़ल वाहनों पर
              <strong>18% या 40%</strong> लगता है। EV चार्जर पर भी 5% टैक्स है। एक मध्यम-कीमत वाली कार के लिए
              यही एक अंतर समकक्ष पेट्रोल मॉडल की तुलना में लाखों की बचत के बराबर है।
            </p>

            <h3>Section 80EEB आयकर कटौती (नए लोन के लिए बंद)</h3>
            <p>
              Section 80EEB एक व्यक्ति को EV लोन पर चुकाए गए ब्याज में से <strong>प्रति वर्ष ₹1.5 लाख तक</strong>
              की कटौती की अनुमति देता है। हालाँकि, यह केवल उन लोन पर लागू होता है जो <strong>1 अप्रैल 2019 और
              31 मार्च 2023 के बीच स्वीकृत</strong> हुए हों, और केवल पुरानी कर व्यवस्था के तहत। उस विंडो के बाद
              लिए गए लोन पात्र नहीं हैं। अगर आपने समय रहते एक पात्र लोन लिया था, तो आप उसके चुकाने तक हर साल यह
              कटौती क्लेम करते रह सकते हैं।
            </p>

            <h3>स्क्रैपेज प्रोत्साहन</h3>
            <p>
              राष्ट्रीय वाहन-स्क्रैपेज कार्यक्रम के तहत, एक वैध स्क्रैपिंग सर्टिफ़िकेट के बदले नया वाहन खरीदने पर
              निजी वाहनों के लिए लगभग <strong>25% तक रोड-टैक्स रिबेट</strong> मिलता है, साथ ही आमतौर पर 4–6%
              निर्माता छूट भी। ये अलग-अलग राज्यों द्वारा संचालित होते हैं, इसलिए सटीक रकम अधिसूचना अनुसार बदलती है।
            </p>

            <AdPlaceholder format="leaderboard" slot="7777777777" className="my-10" />

            <h2 className="flex items-center gap-2"><MapPin className="h-5 w-5 text-brand" /> राज्यवार सब्सिडी और रोड टैक्स</h2>
            <p>
              यहीं असली बचत — और सबसे ज़्यादा भ्रम — मौजूद हैं। राज्य की EV नीतियाँ लगातार बदलती रहती हैं: कुछ
              समाप्त हो चुकी हैं, कुछ वापस ले ली गई हैं, और Delhi की नई नीति अब भी ड्राफ्ट में है। नीचे दी गई तालिका
              <strong>{UPDATED}</strong> तक की मौजूदा स्थिति दर्शाती है; खरीदने से पहले हमेशा अपने राज्य के परिवहन
              या EV पोर्टल पर लाइव आँकड़े सत्यापित कर लें।
            </p>

            <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-ev-border">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-ev-surface/60 font-mono text-[11px] uppercase tracking-wider text-ev-muted">
                    <th className="px-4 py-3">राज्य</th>
                    <th className="px-4 py-3">खरीद सब्सिडी (उपभोक्ता)</th>
                    <th className="px-4 py-3">रोड टैक्स</th>
                    <th className="px-4 py-3">स्थिति</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ev-border/60">
                  {stateRows.map((r) => {
                    const chip = statusChip(r.status);
                    return (
                      <tr key={r.state} className="align-top">
                        <td className="px-4 py-3 font-display font-bold text-white">{r.state}</td>
                        <td className="px-4 py-3 font-body text-ev-text/75">{r.subsidy}</td>
                        <td className="px-4 py-3 font-body text-ev-text/75">{r.roadTax}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-block whitespace-nowrap rounded-full border px-2 py-0.5 font-mono text-[10px] ${chip.cls}`}>{chip.label}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-ev-muted">
              आँकड़े संकेतात्मक और संक्षिप्त हैं। कई राज्यों की विंडो (Gujarat, West Bengal, Meghalaya,
              Madhya Pradesh टैक्स विस्तार) मार्च 2026 के आसपास की अधिसूचनाओं पर निर्भर हैं — नवीनतम स्थिति
              सत्यापित करें।
            </p>

            <h2 className="flex items-center gap-2"><Calculator className="h-5 w-5 text-brand" /> अपनी बचत वास्तव में कैसे क्लेम करें</h2>
            <ol>
              <li><strong>केंद्रीय (PM E-DRIVE):</strong> डीलर के पास आधार e-Voucher के ज़रिए अपने-आप — आपको खुद कुछ दाखिल नहीं करना।</li>
              <li><strong>राज्य सब्सिडी:</strong> आमतौर पर रजिस्ट्रेशन के बाद आपके बैंक में Direct Benefit Transfer, राज्य के EV/परिवहन पोर्टल के ज़रिए क्लेम की जाती है (लगभग 30–45 दिन)।</li>
              <li><strong>रोड-टैक्स / रजिस्ट्रेशन छूट:</strong> रजिस्ट्रेशन के समय RTO पर लागू होती है — पुष्टि करें कि डीलर ने इसे आपकी ऑन-रोड कीमत में जोड़ा है।</li>
              <li><strong>स्क्रैपेज लाभ:</strong> किसी Registered Vehicle Scrapping Facility से Certificate of Deposit लें और खरीद/रजिस्ट्रेशन के दौरान पेश करें।</li>
            </ol>

            <h2>अक्सर पूछे जाने वाले सवाल</h2>
            <div className="not-prose space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-ev-border bg-ev-card p-5">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-sm font-bold text-white">
                    {f.q}
                    <span className="text-brand transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 font-body text-sm leading-relaxed text-ev-text/70">{f.a}</p>
                </details>
              ))}
            </div>

            <h2>आगे पढ़ें</h2>
            <p>
              जानना चाहते हैं कि प्रोत्साहन किसी खास कार की असली लागत को कैसे बदलते हैं? इस्तेमाल करें{" "}
              <Link href={localizedHref("/tools", "hi")}>कॉस्ट और सेविंग्स कैलकुलेटर</Link>, मॉडलों को आमने-सामने रखें{" "}
              <Link href={localizedHref("/compare", "hi")}>कम्पेयर टूल</Link> में, या ब्राउज़ करें{" "}
              <Link href={localizedHref("/catalog/all", "hi")}>पूरा EV कैटलॉग</Link>। गहरी नीति-पृष्ठभूमि के लिए पढ़ें{" "}
              <Link href={localizedHref("/blog/ev-subsidies-road-tax-by-state-india-2026", "hi")}>राज्यवार EV सब्सिडी, रोड टैक्स और प्रोत्साहन</Link>।
              इसे व्यावसायिक रूप से लगाने की योजना है? देखें हमारी गाइड{" "}
              <Link href={localizedHref("/ev-charging-station-setup-india", "hi")}>भारत में EV चार्जिंग स्टेशन लगाने पर</Link>।
            </p>

            <ToolsCTA locale="hi" tools={["emi", "cost", "compare"]} className="not-prose my-8" />

            <h2>स्रोत और अस्वीकरण</h2>
            <p className="text-sm text-ev-muted">
              प्रमुख स्रोतों में शामिल हैं{" "}
              <a href="https://pmedrive.heavyindustries.gov.in/" target="_blank" rel="noopener noreferrer">PM E-DRIVE पोर्टल (Ministry of Heavy Industries)</a>,
              PIB विज्ञप्तियाँ, GST Council, और अलग-अलग राज्यों के परिवहन/EV-नीति पोर्टल। सब्सिडी योजनाएँ अक्सर
              बदलती रहती हैं और कई राज्यों की विंडो मार्च 2026 के आसपास समाप्त होती हैं। यह पेज केवल सामान्य
              जानकारी के लिए है और यह वित्तीय या कानूनी सलाह नहीं है — खरीद का निर्णय लेने से पहले हमेशा संबंधित
              आधिकारिक पोर्टल पर मौजूदा पात्रता सत्यापित करें। अंतिम समीक्षा {UPDATED}।
            </p>
          </article>
        </div>
      </main>
      <Footer locale="hi" />
      <JsonLd
        data={[
          webPageSchema(
            "भारत में EV सब्सिडी और प्रोत्साहन 2026",
            "भारत में केंद्र और राज्य की EV सब्सिडी, रोड-टैक्स छूट, GST और कर लाभ, साथ में इन्हें क्लेम करने का मार्गदर्शन।",
            "/ev-subsidies-india"
          ),
          articleSchema({
            title: "भारत में EV सब्सिडी और प्रोत्साहन (2026): केंद्र + राज्य गाइड",
            description: "PM E-DRIVE, राज्य सब्सिडी, रोड टैक्स, 5% GST और Section 80EEB की व्याख्या, साथ में क्लेम करने का तरीका।",
            path: "/ev-subsidies-india",
            section: "Policy & Incentives",
          }),
          faqPageSchema(faqs),
        ]}
      />
    </>
  );
}
