import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Aurora";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import AdPlaceholder from "@/components/AdPlaceholder";
import EmiCalculator from "@/components/tools/EmiCalculator";
import ToolsCTA from "@/components/ToolsCTA";
import { altsFor, localizedHref } from "@/lib/i18n";
import { webPageSchema, webAppSchema, faqPageSchema } from "@/lib/seo";

const TITLE = "EV लोन EMI कैलकुलेटर (India 2026) — मासिक किस्त | EVSelect.in";
const DESC =
  "भारत के लिए फ्री EV लोन EMI कैलकुलेटर। EV की on-road कीमत, अपना down payment, ब्याज दर और tenure डालें और अपनी सटीक मासिक EMI तथा कुल ब्याज देखें — 2026 के EV खरीदारों के लिए बनाया गया।";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: altsFor("/tools/ev-emi-calculator", "hi"),
  openGraph: {
    title: "EV लोन EMI कैलकुलेटर (India 2026) — मासिक किस्त",
    type: "website",
  },
};

const faqs = [
  {
    q: "EV की EMI कैसे निकाली जाती है?",
    a: "आपकी EMI तीन इनपुट से तय होती है: लोन का principal (on-road कीमत में से down payment घटाकर), मासिक ब्याज दर (सालाना दर को 12 से भाग देकर), और महीनों में tenure। मानक reducing-balance फ़ॉर्मूला है EMI = P·r·(1+r)^n ÷ ((1+r)^n − 1), जहाँ P principal है, r मासिक दर है और n मासिक किस्तों की संख्या है। हर EMI में कुछ हिस्सा ब्याज और कुछ principal चुकाता है, और समय के साथ ब्याज का हिस्सा घटता जाता है।",
  },
  {
    q: "भारत में EV लोन पर ब्याज दर कितनी होती है?",
    a: "भारत में EV कार लोन की दरें आमतौर पर लगभग 9–11% सालाना के दायरे में रहती हैं, जो सामान्य कार लोन के बराबर ही हैं, और सटीक दर lender, आपके credit score, लोन राशि और tenure पर निर्भर करती है। कुछ बैंक और EV-केंद्रित lenders कभी-कभी कम 'green vehicle' दरें भी देते हैं। किसी भी बताई गई दर को indicative मानें और साइन करने से पहले अंतिम आँकड़ा अपने बैंक या dealer से पक्का करें।",
  },
  {
    q: "कितना down payment सही रहता है?",
    a: "इसका कोई एक तय जवाब नहीं है, लेकिन on-road कीमत का लगभग 15–25% down payment आम है और इससे आपकी EMI तथा कुल ब्याज नियंत्रण में रहते हैं। बड़ा down payment principal को घटाता है, जिससे आपकी मासिक EMI और लोन की अवधि में कुल ब्याज दोनों कम होते हैं। बस insurance, accessories और emergency के लिए पर्याप्त नकदी अलग रखना न भूलें।",
  },
  {
    q: "क्या EV subsidy से मेरी EMI घटती है?",
    a: "अप्रत्यक्ष रूप से, हाँ। subsidy, road-tax waiver या 5% GST का फ़ायदा EV की on-road कीमत को घटाता है। कम on-road कीमत का मतलब है छोटा लोन principal (समान down payment पर), जो बदले में आपकी EMI और कुल ब्याज को घटाता है। subsidy अपने आप में कोई अलग EMI छूट नहीं है — यह उस कीमत को घटाकर काम करती है जिस पर आप लोन लेते हैं।",
  },
  {
    q: "कौन सा लोन tenure सबसे अच्छा है?",
    a: "यह एक trade-off है। लंबा tenure (मान लीजिए 5–7 साल) आपकी मासिक EMI को घटाता है पर लोन की अवधि में चुकाया जाने वाला कुल ब्याज बढ़ा देता है। छोटा tenure (2–3 साल) का मतलब है ऊँची EMI पर कुल मिलाकर बहुत कम ब्याज। cash flow के हिसाब से जितना लंबा tenure आपको सुविधाजनक लगे चुनें, फिर जब हो सके prepay करके ब्याज घटाएँ — लेकिन पहले यह ज़रूर देखें कि आपका lender prepayment शुल्क तो नहीं लेता।",
  },
  {
    q: "क्या मुझे EV पर 100% financing मिल सकती है?",
    a: "पूरी 100% on-road financing आम नहीं है। ज़्यादातर lenders ex-showroom या on-road मूल्य को एक loan-to-value सीमा तक ही finance करते हैं और बाकी राशि, साथ ही insurance और registration, down payment के रूप में आपसे चाहते हैं। कुछ promotional schemes ऊँची financing का विज्ञापन करती हैं, पर effective दर या processing fees ज़्यादा हो सकती हैं, इसलिए शर्तें ध्यान से पढ़ें।",
  },
  {
    q: "क्या मुझे insurance और accessories लोन में जोड़ने चाहिए?",
    a: "कुछ मामलों में आप जोड़ सकते हैं, लेकिन add-ons को finance करने से आपका principal और इसलिए ब्याज लागत बढ़ती है। यदि आपका बजट इजाज़त दे, तो आमतौर पर पहले साल का insurance और accessories upfront चुका देना सस्ता रहता है और लोन को वाहन की on-road कीमत तक सीमित रखना बेहतर होता है।",
  },
  {
    q: "क्या EV लोन prepay करने से पैसे बचेंगे?",
    a: "लगभग हमेशा, क्योंकि ब्याज बकाया राशि पर लगता है। lump-sum prepayment, या EMI बढ़ाना, principal को तेज़ी से घटाता है और कुल ब्याज कम करता है। पहले अपना लोन अनुबंध देख लें — व्यक्तियों के floating-rate लोन पर आमतौर पर कोई prepayment penalty नहीं होती, पर अपने lender से पक्का कर लेना अच्छा रहता है।",
  },
];

export default function EvEmiCalculatorPageHi() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-16">
        {/* ─── Hero ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-ev-border/40">
          <Aurora variant="dual" />
          <div className="relative mx-auto max-w-4xl px-4 pb-12 pt-12 sm:px-6 lg:px-8">
            <Breadcrumbs
              homeName="होम"
              homeHref="/hi"
              items={[
                { name: "टूल्स", path: "/tools" },
                { name: "EV EMI कैलकुलेटर", path: "/tools/ev-emi-calculator" },
              ]}
              className="mb-6"
            />
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-brand">
              फ्री टूल
            </p>
            <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl text-balance">
              EV लोन EMI कैलकुलेटर
            </h1>
            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-ev-text/60 sm:text-lg">
              अपने इलेक्ट्रिक वाहन के लोन की मासिक EMI कुछ ही सेकंड में निकालें।
              on-road कीमत, अपना down payment, ब्याज दर और tenure डालें और अपनी
              सटीक मासिक किस्त तथा लोन की अवधि में चुकाया जाने वाला कुल ब्याज
              देखें।
            </p>
          </div>
        </section>

        {/* ─── Interactive tool ─────────────────────────────── */}
        <section id="emi" className="scroll-mt-24">
          <EmiCalculator />
        </section>

        {/* Ad */}
        <div className="mx-auto my-4 max-w-7xl px-4 sm:px-6 lg:px-8">
          <AdPlaceholder format="leaderboard" slot="3333333355" />
        </div>

        {/* ─── Content ──────────────────────────────────────── */}
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              EV लोन की EMI कैसे निकाली जाती है
            </h2>
            <p className="font-body text-base leading-relaxed text-ev-text/70">
              EMI (Equated Monthly Instalment) वह तय राशि है जो आप हर महीने अपने
              lender को तब तक चुकाते हैं जब तक लोन पूरा न हो जाए। यह तीन चीज़ों से
              बनती है: <strong className="text-white">principal</strong> (वह राशि
              जो आप वास्तव में उधार लेते हैं, यानी EV की on-road कीमत में से आपका
              down payment घटाकर), <strong className="text-white">मासिक ब्याज
              दर</strong> (आपकी सालाना दर को 12 से भाग देकर), और{" "}
              <strong className="text-white">महीनों में tenure</strong> (5 साल का
              लोन यानी 60 महीने)।
            </p>
            <p className="font-body text-base leading-relaxed text-ev-text/70">
              lenders reducing-balance फ़ॉर्मूला इस्तेमाल करते हैं:
            </p>
            <p className="rounded-xl border border-ev-border bg-ev-card px-5 py-4 text-center font-mono text-sm text-white">
              EMI = P·r·(1 + r)<sup>n</sup> ÷ ((1 + r)<sup>n</sup> − 1)
            </p>
            <p className="font-body text-base leading-relaxed text-ev-text/70">
              यहाँ <strong className="text-white">P</strong> principal है,{" "}
              <strong className="text-white">r</strong> दशमलव में मासिक ब्याज दर
              है (उदाहरण के लिए, 10% सालाना यानी 0.10 ÷ 12 ≈ 0.00833 प्रति महीना),
              और <strong className="text-white">n</strong> मासिक किस्तों की संख्या
              है। हालाँकि आपकी EMI हर महीने एक जैसी रहती है, उसका बँटवारा बदलता है:
              शुरुआती किस्तें ज़्यादातर ब्याज होती हैं, जबकि बाद की किस्तें ज़्यादा
              principal चुकाती हैं। इसीलिए लोन की शुरुआत में prepay करना सबसे
              ज़्यादा बचत कराता है।
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              आपकी EMI को क्या प्रभावित करता है
            </h2>
            <h3 className="font-display text-lg font-bold text-white">
              Down payment
            </h3>
            <p className="font-body text-base leading-relaxed text-ev-text/70">
              आप जितना ज़्यादा upfront चुकाते हैं, उतना ही छोटा principal आप
              finance करते हैं — और छोटे principal का मतलब है कम EMI तथा कम कुल
              ब्याज। down payment में मामूली बढ़ोतरी भी आपके मासिक खर्च को
              उल्लेखनीय रूप से घटा सकती है।
            </p>
            <h3 className="font-display text-lg font-bold text-white">
              ब्याज दर
            </h3>
            <p className="font-body text-base leading-relaxed text-ev-text/70">
              भारत में EV कार लोन की दरें आमतौर पर लगभग 9–11% सालाना रहती हैं,
              हालाँकि सटीक आँकड़ा lender, आपके credit profile और लोन राशि तथा
              tenure पर निर्भर करता है। बहु-वर्षीय लोन में एक प्रतिशत अंक का अंतर भी
              आपके कुल ब्याज को ख़ासा बदल सकता है, इसलिए तुलना करके चुनना फ़ायदेमंद
              है। जो भी दर आप देखें उसे तब तक indicative मानें जब तक आपका बैंक उसे
              पक्का न कर दे।
            </p>
            <h3 className="font-display text-lg font-bold text-white">
              Tenure
            </h3>
            <p className="font-body text-base leading-relaxed text-ev-text/70">
              Tenure एक क्लासिक trade-off है। लोन को ज़्यादा महीनों में फैलाने से
              हर EMI घटती है, जिससे मासिक cash flow आसान होता है — लेकिन आप ज़्यादा
              समय तक ब्याज चुकाते हैं, इसलिए कुल लागत बढ़ती है। छोटा tenure इसका
              उलटा करता है: ऊँची EMI, पर कुल मिलाकर बहुत कम ब्याज। तय करने से पहले
              ऊपर दिए कैलकुलेटर में अलग-अलग tenure पर अंतर महसूस करें।
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              अपनी EMI घटाने के टिप्स
            </h2>
            <ul className="space-y-3 font-body text-base leading-relaxed text-ev-text/70">
              <li>
                • <strong className="text-white">बड़ा down payment करें।</strong>{" "}
                principal घटाना आपकी EMI और कुल ब्याज दोनों को कम करने का सबसे
                सीधा तरीका है।
              </li>
              <li>
                • <strong className="text-white">अगर वहन कर सकें तो छोटा tenure
                चुनें।</strong> ऊँची मासिक EMI चुभती है, पर लोन की पूरी अवधि में आप
                ब्याज पर काफ़ी बचत करते हैं।
              </li>
              <li>
                • <strong className="text-white">lenders की तुलना करें।</strong>{" "}
                बैंक, NBFC और EV-केंद्रित financiers अलग-अलग कीमत रखते हैं। कम दर या
                माफ़ की गई processing fee आपकी सोच से ज़्यादा बचा सकती है।
              </li>
              <li>
                • <strong className="text-white">subsidy और waivers का ध्यान
                रखें।</strong> राज्य की purchase subsidy, road-tax waiver या 5% GST
                का फ़ायदा on-road कीमत घटाता है — और कम कीमत का मतलब है छोटा लोन और
                छोटी EMI।
              </li>
              <li>
                • <strong className="text-white">जब हो सके prepay करें।</strong>{" "}
                lump-sum prepayment बकाया principal को घटाता है और ब्याज कम करता
                है, ख़ासकर शुरुआती सालों में। बस पहले किसी prepayment शुल्क की
                जाँच कर लें।
              </li>
            </ul>
          </section>

          <section className="mt-10">
            <div className="rounded-2xl border border-brand/25 bg-ev-card p-6">
              <p className="font-body text-base leading-relaxed text-ev-text/70">
                सबसे पहले उस कीमत को ही घटाना चाहते हैं जिस पर आप लोन लेते हैं? हमारी{" "}
                <Link
                  href={localizedHref("/ev-subsidies-india", "hi")}
                  className="text-brand hover:underline"
                >
                  EV subsidies और incentives गाइड
                </Link>{" "}
                पढ़ें ताकि देख सकें कि क्या-क्या आपकी on-road कीमत घटाता है। यह
                जाँचने के लिए कि EV running cost में अपनी कीमत वसूल करती है या नहीं,{" "}
                <Link
                  href={localizedHref("/tools/ev-vs-petrol-cost-calculator", "hi")}
                  className="text-brand hover:underline"
                >
                  EV बनाम पेट्रोल कॉस्ट कैलकुलेटर
                </Link>{" "}
                आज़माएँ। और उधार लेने से पहले सही मॉडल चुनने के लिए{" "}
                <Link
                  href={localizedHref("/compare", "hi")}
                  className="text-brand hover:underline"
                >
                  कम्पेयर टूल
                </Link>{" "}
                में कुछ मॉडल आमने-सामने रखें।
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-12">
            <h2 className="mb-6 font-display text-2xl font-bold text-white sm:text-3xl">
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
          </section>

          <p className="mt-8 font-body text-sm leading-relaxed text-ev-muted">
            यह कैलकुलेटर एक indicative अनुमान देता है, वित्तीय सलाह नहीं। आपकी
            वास्तविक EMI, ब्याज दर और पात्रता lender पर निर्भर करती है — प्रतिबद्ध
            होने से पहले अंतिम आँकड़े हमेशा अपने बैंक या dealer से पक्के करें।
          </p>

          <ToolsCTA
            locale="hi"
            tools={["cost", "compare", "range"]}
            className="my-8"
          />
        </div>
      </main>

      <Footer locale="hi" />
      <JsonLd
        data={[
          webPageSchema(TITLE, DESC, "/tools/ev-emi-calculator"),
          webAppSchema("EV EMI Calculator", DESC, "/tools/ev-emi-calculator"),
          faqPageSchema(faqs),
        ]}
      />
    </>
  );
}
