import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Aurora";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import AdPlaceholder from "@/components/AdPlaceholder";
import RangeEstimator from "@/components/tools/RangeEstimator";
import ToolsCTA from "@/components/ToolsCTA";
import { altsFor, localizedHref } from "@/lib/i18n";
import { webPageSchema, webAppSchema, faqPageSchema } from "@/lib/seo";

const DESC =
  "किसी भी 2026 भारतीय EV की वास्तविक रेंज और चार्जिंग समय का अनुमान लगाएँ। देखें कि स्पीड, AC, इलाका और तापमान ARAI के आँकड़े को कितना घटाते हैं — और AC या DC चार्ज में असल में कितना समय लगता है।";

export const metadata: Metadata = {
  title: "EV रेंज और चार्जिंग कैलकुलेटर (भारत 2026) — वास्तविक रेंज | EVSelect.in",
  description: DESC,
  alternates: altsFor("/ev-calculators/ev-range-calculator", "hi"),
  openGraph: {
    title: "EV रेंज और चार्जिंग कैलकुलेटर (भारत 2026) — वास्तविक रेंज",
  },
};

const faqs = [
  {
    q: "मेरी EV की वास्तविक रेंज ARAI के आँकड़े से कम क्यों है?",
    a: "ARAI (और इसके आधार MIDC) रेंज एक नियंत्रित लैब साइकिल में मापी जाती है — कम औसत स्पीड, बिना AC, हल्का त्वरण और एकदम नई बैटरी के साथ। असल ड्राइविंग में — हाईवे स्पीड, AC, ट्रैफ़िक, चढ़ाई, पूरा भार — प्रति km ज़्यादा ऊर्जा लगती है, इसलिए ज़्यादातर EVs दावे वाले आँकड़े से करीब 20–30% कम रेंज देती हैं। ARAI के नंबर को मॉडलों की आपस में तुलना का पैमाना मानें, सड़क पर मिलने वाली रेंज का वादा नहीं।",
  },
  {
    q: "मैं अपनी वास्तविक रेंज का अनुमान कैसे लगाऊँ?",
    a: "एक आसान नियम है: ARAI रेंज को मिश्रित ड्राइविंग के लिए करीब 0.7–0.8 से गुणा करें, या अगर आप ज़्यादातर हाईवे स्पीड पर AC चलाकर चलते हैं तो 0.6 तक। ऊपर दिया कैलकुलेटर यह काम और सटीक तरीके से करता है — आपकी ड्राइविंग स्टाइल, AC उपयोग, इलाके, भार और बैटरी की सेहत के हिसाब से, ताकि आपको एक आशावादी नंबर के बजाय वास्तविक रेंज का बैंड मिले।",
  },
  {
    q: "EV चार्ज होने में कितना समय लगता है?",
    a: "यह पूरी तरह चार्जर पर निर्भर करता है। एक 3.3 kW होम AC पॉइंट से कार की बैटरी फुल होने में 8–15 घंटे लग सकते हैं, 7.4 kW वॉल-बॉक्स से करीब 6–9 घंटे, और 50–150 kW DC फ़ास्ट चार्जर एक सामान्य EV को 10% से 80% तक करीब 30–60 मिनट में पहुँचा देता है। AC चार्जिंग का मोटा अनुमान है — बैटरी kWh भाग चार्जर kW; DC चार्जिंग तेज़ है पर 80% के ऊपर काफ़ी धीमी (taper) हो जाती है।",
  },
  {
    q: "क्या AC से EV की रेंज घटती है?",
    a: "हाँ। केबिन एयर-कंडीशनिंग EV में ड्राइविंग के अलावा सबसे बड़े लोड में से एक है और हल्के मौसम में रेंज को 5% से लेकर भीषण गर्मी के दिन AC के पूरा चलने पर 15–20% तक घटा सकता है। सबसे बढ़िया तरकीब है — जब कार चार्जर से जुड़ी हो तभी केबिन को पहले से ठंडा कर लें, ताकि यह ऊर्जा ग्रिड से आए, आपकी बैटरी से नहीं।",
  },
  {
    q: "क्या ठंडा या गर्म मौसम रेंज को प्रभावित करता है?",
    a: "दोनों करते हैं। लिथियम-आयन बैटरी ठंड में कम ऊर्जा देती है और धीमे चार्ज होती है, जबकि अत्यधिक गर्मी कूलिंग सिस्टम और AC पर लोड बढ़ा देती है। भारत में मुख्य कारक गर्मी और भारी AC उपयोग है; पहाड़ी इलाकों और सुदूर उत्तर में ठंडी सुबहें भी रेंज घटा सकती हैं। सबसे कम वास्तविक रेंज सबसे गर्म और सबसे ठंडे दिनों में मिलने की उम्मीद रखें।",
  },
  {
    q: "क्या ड्राइविंग स्टाइल से रेंज बदलती है?",
    a: "काफ़ी हद तक। तेज़ त्वरण और ऊँची क्रूज़िंग स्पीड (करीब 80 km/h से ऊपर) खपत को असमान रूप से बढ़ा देती है, क्योंकि वायुगतिकीय खिंचाव (drag) स्पीड के वर्ग के अनुपात में बढ़ता है। स्मूद इनपुट, मध्यम स्पीड और शहरी ट्रैफ़िक में regenerative ब्रेकिंग का अच्छा उपयोग आक्रामक स्टाइल की तुलना में आपकी रेंज में आसानी से 10–20% जोड़ सकता है।",
  },
  {
    q: "क्या DC फ़ास्ट चार्जिंग 80% से 100% तक धीमी होती है?",
    a: "हाँ, और यह सामान्य है। सेल्स की सुरक्षा के लिए बैटरी मैनेजमेंट सिस्टम पैक भरते-भरते चार्जिंग पावर घटा (taper) देता है, इसलिए आख़िरी 20% को पहले 60–70% जितना ही समय लग सकता है। लंबी यात्रा में आम तौर पर करीब 80% तक चार्ज करके आगे बढ़ना ज़्यादा तेज़ रहता है, बजाय पूरे 100% का इंतज़ार करने के।",
  },
  {
    q: "क्या बैटरी की सेहत (state of health) रेंज को प्रभावित करती है?",
    a: "सालों में बैटरी धीरे-धीरे थोड़ी उपयोगी क्षमता खोती है, जिससे रेंज थोड़ी घट जाती है। ज़्यादातर आधुनिक EV पैक करीब 8 साल या 1.5–1.6 लाख km के बाद लगभग 70% क्षमता बनाए रखने की वारंटी देते हैं, और अगर आप लगातार 100% चार्जिंग और भीषण गर्मी में बार-बार रैपिड चार्जिंग से बचें तो वास्तविक गिरावट आम तौर पर मामूली रहती है।",
  },
];

export default function EvRangeCalculatorPageHi() {
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
                { name: "EV रेंज कैलकुलेटर", path: "/ev-calculators/ev-range-calculator" },
              ]}
              className="mb-6"
            />
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-brand">
              मुफ़्त टूल
            </p>
            <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl text-balance">
              EV रेंज और चार्जिंग कैलकुलेटर
            </h1>
            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-ev-text/60 sm:text-lg">
              जानें कि एक इलेक्ट्रिक वाहन आपको असल में कितनी दूर ले जाएगा — और
              चार्ज होने में कितना समय लगेगा। 2026 की कोई भारतीय EV चुनें, अपनी
              ड्राइविंग स्टाइल, AC उपयोग, इलाका और भार सेट करें, और आशावादी ARAI
              स्टिकर आँकड़े के बजाय एक वास्तविक रेंज बैंड पाएँ।
            </p>
          </div>
        </section>

        {/* Calculator */}
        <RangeEstimator embedded />

        {/* Ad */}
        <div className="mx-auto my-4 max-w-7xl px-4 sm:px-6 lg:px-8">
          <AdPlaceholder format="leaderboard" slot="3333333357" />
        </div>

        {/* Content */}
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            ARAI रेंज बनाम वास्तविक रेंज
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-ev-text/70">
            भारत में बिकने वाली हर EV एक हेडलाइन रेंज बताती है जो ARAI टेस्ट के
            तहत प्रमाणित होती है, और जिसका आधार Modified Indian Driving Cycle
            (MIDC) है। यह साइकिल मध्यम, स्थिर स्पीड पर चलती है — बिना
            एयर-कंडीशनिंग, हल्के त्वरण और एकदम नई बैटरी के साथ — ऐसी आदर्श
            परिस्थितियाँ जो रोज़मर्रा के उपयोग में लगभग कभी नहीं बनतीं। नतीजा एक
            ऐसा नंबर है जो एक मॉडल की दूसरे से तुलना के लिए वाक़ई उपयोगी है, पर
            सड़क पर मिलने वाली रेंज से लगातार ज़्यादा रहता है।
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-ev-text/70">
            एक व्यावहारिक नियम के तौर पर, भारत में ज़्यादातर EVs मिश्रित वास्तविक
            ड्राइविंग में अपने ARAI आँकड़े से करीब{" "}
            <strong className="text-white">20–30% कम</strong> रेंज देती हैं, और यह
            अंतर और बढ़ सकता है अगर आप काफ़ी समय हाईवे स्पीड पर AC चलाकर बिताते
            हैं। यानी 500 km ARAI वाली कार असल में किसी सामान्य दिन 350–400 km की
            कार है। दावे वाले आँकड़े को अधिकतम सीमा मानें, औसत नहीं।
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-white sm:text-3xl">
            आपकी वास्तविक रेंज को क्या प्रभावित करता है
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-ev-text/70">
            कई कारक आपकी वास्तविक रेंज को लैब नंबर से नीचे खींचते हैं, और ये एक के
            ऊपर एक जुड़ते जाते हैं:
          </p>
          <h3 className="mt-6 font-display text-lg font-bold text-white">
            स्पीड और सड़क का प्रकार
          </h3>
          <p className="mt-2 font-body text-base leading-relaxed text-ev-text/70">
            वायुगतिकीय खिंचाव स्पीड के वर्ग के अनुपात में बढ़ता है, इसलिए 100–120
            km/h पर लगातार हाईवे क्रूज़िंग, शहरी या उपनगरीय ड्राइविंग से कहीं
            ज़्यादा ऊर्जा खाती है। हैरानी की बात यह है कि EVs अक्सर धीमे शहरी
            ट्रैफ़िक में सबसे ज़्यादा कुशल होती हैं, जहाँ regenerative ब्रेकिंग हर
            रुकाव पर ऊर्जा वापस लेती है।
          </p>
          <h3 className="mt-6 font-display text-lg font-bold text-white">
            एयर-कंडीशनिंग और हीटिंग
          </h3>
          <p className="mt-2 font-body text-base leading-relaxed text-ev-text/70">
            भारतीय परिस्थितियों में केबिन AC सबसे बड़ा एक्सेसरी लोड है। गर्म दिन
            पर AC के पूरा चलने पर यह आपकी रेंज से 10–20% तक काट सकता है। ठंडे
            इलाकों में जहाँ केबिन हीटिंग का उपयोग होता है, वहाँ इसका असर भी ऐसा ही
            होता है।
          </p>
          <h3 className="mt-6 font-display text-lg font-bold text-white">
            इलाका और भार
          </h3>
          <p className="mt-2 font-body text-base leading-relaxed text-ev-text/70">
            चढ़ाई चढ़ने में ऊर्जा लगती है, हालाँकि इसका कुछ हिस्सा उतराई पर regen
            के ज़रिए वापस आ जाता है। पाँच यात्रियों और सामान से भरी कार, या रूफ
            कैरियर लगी कार, उसी कार के अकेले चलने की तुलना में प्रति km काफ़ी
            ज़्यादा ऊर्जा खर्च करती है।
          </p>
          <h3 className="mt-6 font-display text-lg font-bold text-white">
            तापमान, ड्राइविंग स्टाइल और बैटरी की सेहत
          </h3>
          <p className="mt-2 font-body text-base leading-relaxed text-ev-text/70">
            अत्यधिक गर्मी या ठंड दोनों उपयोगी रेंज घटाते हैं और चार्जिंग धीमी करते
            हैं। आक्रामक त्वरण और तेज़ ब्रेकिंग ऊर्जा बर्बाद करते हैं, जबकि स्मूद
            इनपुट इसे बचाते हैं। आख़िर में, बैटरी जैसे-जैसे पुरानी होती है, थोड़ी
            उपयोगी क्षमता खोती है, इसलिए पुरानी EV की वास्तविक रेंज नई के मुक़ाबले
            थोड़ी कम होती है।
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-white sm:text-3xl">
            चार्जिंग समय कैसे काम करता है
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-ev-text/70">
            EV चार्जिंग मोटे तौर पर दो तरह की होती है।{" "}
            <strong className="text-white">AC (धीमी) चार्जिंग</strong> — 3.3 kW होम
            सॉकेट, 7.4 kW वॉल-बॉक्स या सार्वजनिक AC पॉइंट — जिसका उपयोग आप घर या
            दफ़्तर में रातभर करेंगे। समय का मोटा अनुमान बस इतना है — बैटरी की
            उपयोगी kWh भाग चार्जर के kW: 3.3 kW पॉइंट पर 40 kWh बैटरी को करीब 12
            घंटे लगते हैं, जबकि उसी बैटरी को 7.4 kW बॉक्स पर करीब 5–6 घंटे।
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-ev-text/70">
            <strong className="text-white">DC फ़ास्ट चार्जिंग</strong> (आम तौर पर
            30–150 kW या उससे ज़्यादा) रास्ते में टॉप-अप के लिए है। यहाँ हेडलाइन
            आँकड़ा आम तौर पर 10–80% के रूप में बताया जाता है, क्योंकि सेल्स की
            सुरक्षा के लिए 80% के ऊपर चार्जिंग जानबूझकर धीमी (taper) हो जाती है।
            इसका मतलब है कि{" "}
            <strong className="text-white">DC पर 10% से 80% तक जाना कहीं तेज़ है</strong>{" "}
            — अक्सर 30–60 मिनट — बजाय 80% से 100% तक रेंगने के, जिसमें लगभग उतना ही
            समय फिर लग सकता है। लंबी यात्रा में आम तौर पर करीब 80% तक चार्ज करके
            आगे बढ़ते रहना सबसे समझदारी है।
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-white sm:text-3xl">
            रेंज बढ़ाने के सुझाव
          </h2>
          <ul className="mt-4 space-y-3 font-body text-base leading-relaxed text-ev-text/70">
            <li>
              <strong className="text-white">स्मूद ड्राइव करें।</strong> हल्का
              त्वरण और आगे का अनुमान, तेज़ लॉन्च और देर से ब्रेकिंग से ज़्यादा
              कुशल रहते हैं।
            </li>
            <li>
              <strong className="text-white">स्पीड मध्यम रखें।</strong> हाईवे पर
              110–120 km/h के बजाय 80–90 km/h पर क्रूज़ करने से रेंज में अच्छा
              इज़ाफ़ा हो सकता है।
            </li>
            <li>
              <strong className="text-white">प्लग-इन रहते हुए पहले से ठंडा करें।</strong>{" "}
              निकलने से पहले चार्जर से केबिन को ठंडा (या गर्म) कर लें, ताकि बड़ा
              शुरुआती AC लोड आपकी बैटरी से न आए।
            </li>
            <li>
              <strong className="text-white">टायर प्रेशर जाँचें।</strong> सही
              प्रेशर रोलिंग रेज़िस्टेंस घटाता है — कम हवा वाले टायर चुपचाप आपकी
              रेंज खा जाते हैं।
            </li>
            <li>
              <strong className="text-white">eco और regen मोड का उपयोग करें।</strong>{" "}
              eco मोड थ्रॉटल को नरम करते हैं, और तेज़ regenerative ब्रेकिंग स्टॉप-गो
              ट्रैफ़िक में ऊर्जा वापस लेती है।
            </li>
          </ul>

          <p className="mt-8 font-body text-base leading-relaxed text-ev-text/70">
            और गहराई में जाना चाहते हैं? पढ़ें हमारा पूरा विश्लेषण —{" "}
            <Link href={localizedHref("/blog/real-world-range-vs-arai-india", "hi")} className="text-brand hover:underline">
              वास्तविक रेंज बनाम ARAI आँकड़ा
            </Link>
            , अपनी चार्जिंग की योजना बनाएँ{" "}
            <Link href={localizedHref("/ev-charging-station-setup-india", "hi")} className="text-brand hover:underline">
              EV चार्जिंग स्टेशन सेटअप गाइड
            </Link>{" "}
            से, देखें{" "}
            <Link href={localizedHref("/catalog/all", "hi")} className="text-brand hover:underline">
              पूरी EV कैटलॉग
            </Link>
            , या दो मॉडल को{" "}
            <Link href={localizedHref("/compare-electric-vehicles", "hi")} className="text-brand hover:underline">
              तुलना टूल
            </Link>{" "}
            में आमने-सामने रखें।
          </p>

          {/* FAQ */}
          <h2 className="mt-12 font-display text-2xl font-bold text-white sm:text-3xl">
            अक्सर पूछे जाने वाले सवाल
          </h2>
          <div className="mt-6 space-y-3">
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

          <p className="mt-8 font-body text-sm leading-relaxed text-ev-muted">
            इस कैलकुलेटर के सभी आँकड़े सिर्फ़ संकेतात्मक अनुमान हैं। वास्तविक रेंज
            और चार्जिंग समय विशिष्ट वाहन, परिस्थितियों, चार्जर और बैटरी की सेहत के
            साथ बदलते हैं — परिणामों को हमेशा एक मार्गदर्शक मानें, गारंटी नहीं।
          </p>

          <ToolsCTA locale="hi" tools={["emi", "cost", "compare"]} className="my-8" />
        </div>
      </main>

      <Footer locale="hi" />
      <JsonLd
        data={[
          webPageSchema(
            "EV रेंज और चार्जिंग कैलकुलेटर (भारत 2026)",
            DESC,
            "/ev-calculators/ev-range-calculator",
          ),
          webAppSchema(
            "EV रेंज और चार्जिंग कैलकुलेटर",
            DESC,
            "/ev-calculators/ev-range-calculator",
          ),
          faqPageSchema(faqs),
        ]}
      />
    </>
  );
}
