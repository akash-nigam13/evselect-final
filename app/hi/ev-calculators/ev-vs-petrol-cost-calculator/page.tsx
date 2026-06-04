import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Aurora";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import AdPlaceholder from "@/components/AdPlaceholder";
import CostCalculator from "@/components/tools/CostCalculator";
import ToolsCTA from "@/components/ToolsCTA";
import Link from "next/link";
import { altsFor, localizedHref } from "@/lib/i18n";
import { webPageSchema, webAppSchema, faqPageSchema } from "@/lib/seo";

const DESC =
  "भारत में इलेक्ट्रिक वाहन बनाम पेट्रोल कार के असली चलने के खर्च की तुलना करें। अपना सालाना किलोमीटर, बिजली का टैरिफ और पेट्रोल की कीमत डालकर प्रति-km खर्च, सालाना बचत और ब्रेक-ईवन पॉइंट देखें — असली 2026 efficiency आँकड़ों पर आधारित।";

export const metadata: Metadata = {
  title:
    "EV vs Petrol Cost Calculator (India 2026) — Running Cost & Savings | EVSelect.in",
  description: DESC,
  alternates: altsFor("/ev-calculators/ev-vs-petrol-cost-calculator", "hi"),
  openGraph: {
    title: "EV vs Petrol Cost Calculator (India 2026) — Running Cost & Savings",
  },
};

const faqs = [
  {
    q: "एक EV पेट्रोल कार से प्रति km कितनी सस्ती होती है?",
    a: "भारत की ज़्यादातर परिस्थितियों में एक इलेक्ट्रिक कार बिजली पर लगभग ₹1–₹2 प्रति km खर्च करती है, जबकि पेट्रोल कार ईंधन पर ₹6–₹8 प्रति km। यानी एक EV आमतौर पर 'फ्यूल' पर 70–85% तक सस्ती पड़ती है। असली अंतर आपके बिजली टैरिफ, EV की efficiency, पेट्रोल कार के mileage और मौजूदा पेट्रोल कीमत पर निर्भर करता है — और यही calculator आपके आँकड़ों के लिए निकालकर देता है।",
  },
  {
    q: "घर पर EV को फुल चार्ज करने में कितना खर्च आता है?",
    a: "usable बैटरी साइज़ को अपने टैरिफ से गुणा करें, फिर चार्जिंग लॉस के लिए लगभग 10% जोड़ें। उदाहरण के लिए, ₹8 प्रति यूनिट पर 40 kWh बैटरी का खर्च लगभग 40 × 8 × 1.1 ≈ ₹352 बैठता है एक लगभग-फुल चार्ज के लिए, जो 300–350 km की वास्तविक रेंज दे सकता है। स्लैब टैरिफ, टाइम-ऑफ-डे रेट और एक अलग EV मीटर इसे बदल सकते हैं, इसलिए calculator आपके अपने ₹/यूनिट आँकड़े का उपयोग करता है।",
  },
  {
    q: "पेट्रोल की तुलना में ब्रेक-ईवन तक पहुँचने में कितने साल लगते हैं?",
    a: "ब्रेक-ईवन खरीद के समय कीमत के अंतर और आप कितना चलाते हैं, इस पर निर्भर करता है। साल में 12,000–15,000 km चलाने वाला खरीदार अक्सर EV की ज़्यादा शुरुआती कीमत ईंधन और मेंटेनेंस की बचत से लगभग 4–6 साल में वसूल कर लेता है; ज़्यादा चलने वाले इससे जल्दी ब्रेक-ईवन कर सकते हैं। सब्सिडी, रोड-टैक्स छूट और EVs पर 5% GST payback को और छोटा कर देते हैं।",
  },
  {
    q: "क्या EVs को सचमुच कम मेंटेनेंस की ज़रूरत होती है?",
    a: "हाँ। एक इलेक्ट्रिक मोटर में पेट्रोल इंजन की तुलना में बहुत कम मूविंग पार्ट्स होते हैं — कोई स्पार्क प्लग नहीं, कोई टाइमिंग बेल्ट नहीं, कोई क्लच नहीं और बदलने के लिए कोई इंजन ऑयल नहीं। regenerative braking ब्रेक-पैड की घिसाई भी कम करती है। सर्विसिंग ज़्यादातर टायर, ब्रेक फ्लुइड, कूलेंट और केबिन फ़िल्टर तक सीमित रहती है, इसलिए सालाना मेंटेनेंस आमतौर पर बराबर की पेट्रोल कार के मुकाबले बहुत कम होता है।",
  },
  {
    q: "क्या calculator चार्जिंग लॉस को ध्यान में रखता है?",
    a: "हाँ। घर की AC चार्जिंग 100% efficient नहीं होती — कुछ ऊर्जा चार्जर और बैटरी में गर्मी के रूप में नष्ट हो जाती है। हम लगभग 10% लॉस को शामिल करते हैं, इसलिए जिस बिजली का आप असल में भुगतान करते हैं वह बैटरी में संग्रहित ऊर्जा से थोड़ी ज़्यादा होती है। इससे प्रति-km अनुमान आशावादी के बजाय यथार्थवादी रहता है।",
  },
  {
    q: "क्या कार चलाने के लिए बिजली हमेशा पेट्रोल से सस्ती ही होती है?",
    a: "भारत में लगभग हमेशा, पर असीमित रूप से नहीं। अगर आप घर पर चार्ज करने के बजाय ₹18–₹24 प्रति यूनिट वाले commercial DC fast charger पर बहुत निर्भर रहते हैं, तो आपका प्रति-km खर्च तेज़ी से बढ़ जाता है और एक बहुत efficient पेट्रोल कार के करीब पहुँच सकता है। ज़्यादातर मालिक जो मुख्य रूप से घर पर चार्ज करते हैं, उनके लिए बिजली नाटकीय रूप से सस्ती बनी रहती है।",
  },
  {
    q: "क्या यह calculator कार की खरीद कीमत या EMI शामिल करता है?",
    a: "नहीं। यह टूल चलने के खर्च पर केंद्रित है — ईंधन बनाम बिजली, साथ ही मेंटेनेंस का फ़ायदा — ताकि आपकी निरंतर बचत और मोटा payback दिखाया जा सके। फाइनेंसिंग वाले हिस्से के लिए EV EMI Calculator का उपयोग करें, और EV सब्सिडी गाइड पर मौजूदा प्रोत्साहन देखें ताकि पता चले कि वे प्रभावी खरीद कीमत को कैसे घटाते हैं।",
  },
  {
    q: "बचत के आँकड़े कितने सटीक हैं?",
    a: "ये एक अच्छा दिशात्मक अनुमान हैं, गारंटी नहीं। असली खर्च ड्राइविंग स्टाइल, मौसम, ट्रैफ़िक, इलाके और समय के साथ कीमतों में बदलाव से बदलते रहते हैं। calculator जानबूझकर बैटरी degradation, महँगाई और बीमा के अंतर को छोड़ देता है, इसलिए नतीजे को indicative मानें और अपने शहर के लिए मौजूदा टैरिफ़ और ईंधन कीमतें ज़रूर जाँच लें।",
  },
];

export default function EvVsPetrolCostCalculatorPageHi() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-ev-border/40">
          <Aurora variant="dual" />
          <div className="relative mx-auto max-w-4xl px-4 pb-12 pt-12 sm:px-6 lg:px-8">
            <Breadcrumbs
              homeName="होम"
              homeHref="/hi"
              items={[
                { name: "टूल्स", path: "/ev-calculators" },
                {
                  name: "EV बनाम पेट्रोल कॉस्ट कैलकुलेटर",
                  path: "/ev-calculators/ev-vs-petrol-cost-calculator",
                },
              ]}
              className="mb-6"
            />
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-brand">
              फ्री टूल · रनिंग कॉस्ट
            </p>
            <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl text-balance">
              EV बनाम पेट्रोल कॉस्ट कैलकुलेटर
            </h1>
            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-ev-text/60 sm:text-lg">
              देखें कि इलेक्ट्रिक अपनाकर आप कितनी बचत करते हैं। अपनी ड्राइविंग की
              आदतें, बिजली का टैरिफ और पेट्रोल की कीमत डालकर असली प्रति-km रनिंग
              कॉस्ट, अपनी सालाना बचत और EV कितनी जल्दी payback देती है — इन सबकी
              तुलना करें, असली 2026 efficiency आँकड़ों पर आधारित।
            </p>
          </div>
        </section>

        {/* Calculator */}
        <CostCalculator />

        {/* Ad */}
        <div className="mx-auto my-4 max-w-7xl px-4 sm:px-6 lg:px-8">
          <AdPlaceholder format="leaderboard" slot="3333333356" />
        </div>

        {/* Content */}
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              हम आपकी बचत कैसे निकालते हैं
            </h2>
            <p className="font-body text-base leading-relaxed text-ev-text/70">
              calculator कुछ सरल इनपुट को एक साफ़ रुपए के आँकड़े में बदल देता है। आप
              इसे अपना{" "}
              <strong className="text-white">सालाना किलोमीटर</strong> बताते हैं — यानी
              एक सामान्य साल में आप कितना चलाते हैं — और यह सब कुछ उसी दूरी के हिसाब
              से तय करता है। आपका{" "}
              <strong className="text-white">बिजली टैरिफ (₹/यूनिट)</strong> घर पर
              चार्जिंग की कीमत तय करता है; एक यूनिट यानी एक किलोवाट-घंटा (kWh), और
              ज़्यादातर भारतीय घर स्लैब और राज्य के हिसाब से ₹6 से ₹10 प्रति यूनिट के
              बीच भुगतान करते हैं।
            </p>
            <p className="font-body text-base leading-relaxed text-ev-text/70">
              EV वाले हिस्से में सबसे अहम आँकड़ा उसकी{" "}
              <strong className="text-white">असली efficiency</strong> है, जो kWh प्रति
              km में बताई जाती है — यानी एक किलोमीटर तय करने में कार असल में कितनी
              ऊर्जा खर्च करती है। हम इसे लैब के दावों के बजाय वास्तविक आँकड़ों पर
              आधारित रखते हैं, क्योंकि यही आपके बिजली बिल पर दिखता है। ख़ास बात — हम{" "}
              <strong className="text-white">होम-चार्जिंग लॉस के लिए लगभग 10%</strong>{" "}
              जोड़ते हैं: AC चार्जिंग में कुछ ऊर्जा गर्मी के रूप में नष्ट होती है,
              इसलिए जिन यूनिट का आप भुगतान करते हैं वे बैटरी में संग्रहित ऊर्जा से थोड़ी
              ज़्यादा होती हैं।
            </p>
            <p className="font-body text-base leading-relaxed text-ev-text/70">
              तुलना के लिए, आप मौजूदा{" "}
              <strong className="text-white">पेट्रोल की कीमत (₹/लीटर)</strong> और अपनी
              पेट्रोल कार का{" "}
              <strong className="text-white">mileage (km/लीटर)</strong> डालते हैं। ईंधन
              की कीमत को mileage से भाग देने पर प्रति km पेट्रोल खर्च मिलता है; EV
              efficiency को आपके टैरिफ से गुणा करने पर प्रति km बिजली का खर्च मिलता
              है। यह अंतर, आपके सालाना किलोमीटर के हिसाब से, आपकी ईंधन बचत है — और यह
              मेंटेनेंस को गिनने से पहले की बात है।
            </p>

            <h2 className="mt-10 font-display text-2xl font-bold text-white sm:text-3xl">
              EVs चलाने में सस्ती क्यों होती हैं
            </h2>
            <p className="font-body text-base leading-relaxed text-ev-text/70">
              मुख्य वजह है{" "}
              <strong className="text-white">प्रति km ऊर्जा-खर्च का अंतर</strong>।
              इलेक्ट्रिक मोटर अपनी इनपुट ऊर्जा का कहीं बड़ा हिस्सा गति में बदल देती है
              बनिस्बत पेट्रोल इंजन के, और बिजली प्रति यूनिट उपयोगी काम के लिए पेट्रोल
              से सस्ती ही पड़ती है। व्यवहार में एक EV घर पर चार्ज करने पर अक्सर ₹1–₹2
              प्रति km पड़ती है, जबकि पेट्रोल ₹6–₹8 प्रति km — और साल में हज़ारों
              किलोमीटर पर यह अंतर तेज़ी से जुड़ता जाता है।
            </p>
            <p className="font-body text-base leading-relaxed text-ev-text/70">
              दूसरी बड़ी बचत है{" "}
              <strong className="text-white">मेंटेनेंस</strong>। एक EV में बहुत कम
              मूविंग पार्ट्स होते हैं: कोई स्पार्क प्लग नहीं, कोई टाइमिंग बेल्ट नहीं,
              कोई क्लच नहीं, कोई मल्टी-स्पीड गियरबॉक्स नहीं और हर कुछ हज़ार किलोमीटर पर
              बदलने के लिए कोई इंजन ऑयल नहीं। इससे आवर्ती सर्विस खर्च की एक पूरी श्रेणी
              ही हट जाती है। नियमित देखभाल सिमटकर टायर, ब्रेक फ्लुइड, कूलेंट, केबिन
              फ़िल्टर और सॉफ़्टवेयर तक रह जाती है — आमतौर पर बराबर की पेट्रोल कार के
              सालाना सर्विस खर्च का एक छोटा हिस्सा।
            </p>
            <p className="font-body text-base leading-relaxed text-ev-text/70">
              <strong className="text-white">regenerative braking</strong> एक और
              शांत बचत जोड़ती है। जब आप एक्सेलरेटर से पैर हटाते हैं या हल्का ब्रेक
              लगाते हैं, तो मोटर ऊर्जा को ब्रेक-पैड में गर्मी के रूप में बर्बाद करने के
              बजाय वापस बैटरी में लौटा देती है। यह वापस मिली ऊर्जा आपकी रेंज बढ़ाती है
              और इसका मतलब है कि ब्रेक पैड और डिस्क पेट्रोल कार के मुकाबले कहीं ज़्यादा
              लंबे चलते हैं।
            </p>

            <h2 className="mt-10 font-display text-2xl font-bold text-white sm:text-3xl">
              ब्रेक-ईवन तक पहुँचना
            </h2>
            <p className="font-body text-base leading-relaxed text-ev-text/70">
              EVs आमतौर पर बराबर के पेट्रोल मॉडल से खरीदने में ज़्यादा महँगी होती हैं,
              पर चलाने में बहुत सस्ती।{" "}
              <strong className="text-white">ब्रेक-ईवन</strong> — या payback — वह बिंदु
              है जहाँ चलने के खर्च की बचत उस ज़्यादा खरीद कीमत को पूरी तरह वसूल कर लेती
              है। आप जितना ज़्यादा चलाते हैं, उतनी जल्दी वहाँ पहुँचते हैं: एक ज़्यादा
              चलने वाला कम्यूटर हर रोज़ प्रति-km बचत जमा करता है, जबकि कम चलाने वाले को
              शुरुआती प्रीमियम वसूलने में ज़्यादा समय लगता है।
            </p>
            <p className="font-body text-base leading-relaxed text-ev-text/70">
              दो चीज़ें यह इंतज़ार छोटा करती हैं। पहली, कीमत का अंतर खुद ही उतना बड़ा
              नहीं रहता जितना स्टिकर बताता है, एक बार आप{" "}
              <Link
                href={localizedHref("/ev-subsidies-india", "hi")}
                className="text-brand hover:underline"
              >
                EV सब्सिडी और प्रोत्साहन
              </Link>{" "}
              लागू कर देते हैं — राज्य की खरीद सहायता, रोड-टैक्स और रजिस्ट्रेशन छूट, और
              EVs पर 5% GST। दूसरी, चलने के खर्च की बचत हर साल पर्दे के पीछे काम करती
              रहती है। अगर आप कार फाइनेंस कर रहे हैं, तो{" "}
              <Link
                href={localizedHref("/ev-calculators/ev-emi-calculator", "hi")}
                className="text-brand hover:underline"
              >
                EV EMI Calculator
              </Link>{" "}
              आपको यह देखने में मदद करता है कि मासिक किस्त उन ईंधन बचतों के सामने कहाँ
              बैठती है।
            </p>

            <h2 className="mt-10 font-display text-2xl font-bold text-white sm:text-3xl">
              अनुमान में क्या शामिल है और क्या नहीं
            </h2>
            <p className="font-body text-base leading-relaxed text-ev-text/70">
              ईमानदार रहने के लिए, किनारों को साफ़ कर देना ज़रूरी है। calculator चलने
              के खर्च की कहानी पर केंद्रित है — बिजली बनाम पेट्रोल, साथ ही मेंटेनेंस का
              फ़ायदा — और जानबूझकर कई असली पर मुश्किल-से-अनुमान वाले कारकों को छोड़
              देता है। यह{" "}
              <strong className="text-white">बैटरी degradation</strong> (बैटरी कई
              सालों में धीरे-धीरे क्षमता खोती है),{" "}
              <strong className="text-white">महँगाई</strong> (बिजली या ईंधन की कीमतों
              में), या एक EV और पेट्रोल कार के बीच{" "}
              <strong className="text-white">बीमा प्रीमियम</strong> के अंतर को{" "}
              <strong className="text-white">नहीं</strong> मॉडल करता।
            </p>
            <p className="font-body text-base leading-relaxed text-ev-text/70">
              यह यह भी मानकर चलता है कि आप ज़्यादातर घर पर अपने बताए टैरिफ़ पर चार्ज
              करते हैं; महँगे पब्लिक DC fast charger पर निर्भर रहने से आपका असली
              प्रति-km खर्च बढ़ जाएगा। नतीजे को अपने फैसले को दिशा देने वाला एक मज़बूत,
              दिशात्मक अनुमान मानें — कोई सटीक भविष्यवाणी नहीं। और गहराई में जाने के
              लिए,{" "}
              <Link
                href={localizedHref("/catalog/all", "hi")}
                className="text-brand hover:underline"
              >
                पूरा EV कैटलॉग
              </Link>{" "}
              ब्राउज़ करें या{" "}
              <Link
                href={localizedHref("/compare-electric-vehicles", "hi")}
                className="text-brand hover:underline"
              >
                कम्पेयर टूल
              </Link>{" "}
              में ख़ास मॉडलों को आमने-सामने रखें।
            </p>

            <p className="mt-6 rounded-xl border border-ev-border bg-ev-card p-4 font-body text-sm leading-relaxed text-ev-muted">
              केवल indicative। आँकड़े आपके दिए गए इनपुट और सामान्य वास्तविक परिस्थितियों
              पर आधारित अनुमान हैं। असली खर्च ड्राइविंग स्टाइल, मौसम, ट्रैफ़िक, बिजली
              स्लैब और ईंधन कीमतों से बदलते हैं — खरीद का फैसला लेने से पहले अपने शहर के
              लिए मौजूदा टैरिफ़ ज़रूर जाँच लें।
            </p>

            <h2 className="mt-10 font-display text-2xl font-bold text-white sm:text-3xl">
              अक्सर पूछे जाने वाले सवाल
            </h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-ev-border bg-ev-card p-5"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-sm font-bold text-white">
                    {f.q}
                    <span className="text-brand transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 font-body text-sm leading-relaxed text-ev-text/70">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>

            <ToolsCTA
              locale="hi"
              tools={["emi", "compare", "range"]}
              className="my-8"
            />
          </section>
        </div>
      </main>

      <Footer locale="hi" />

      <JsonLd
        data={[
          webPageSchema(
            "EV vs Petrol Cost Calculator (India 2026)",
            DESC,
            "/ev-calculators/ev-vs-petrol-cost-calculator",
          ),
          webAppSchema(
            "EV vs Petrol Cost Calculator",
            DESC,
            "/ev-calculators/ev-vs-petrol-cost-calculator",
          ),
          faqPageSchema(faqs),
        ]}
      />
    </>
  );
}
