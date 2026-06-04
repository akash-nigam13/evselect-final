import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Aurora";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { webPageSchema, SITE } from "@/lib/seo";
import { altsFor, localizedHref } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "संपादकीय और डेटा नीति — EVSelect.in रिसर्च और तथ्य-जाँच कैसे करता है",
  description:
    "EVSelect.in EV स्पेसिफिकेशन और कीमतें कैसे जुटाता है, सामग्री को सटीक और अद्यतन कैसे रखता है, स्वतंत्र कैसे रहता है और सुधारों को कैसे संभालता है।",
  alternates: altsFor("/editorial-policy", "hi"),
};

export default function EditorialPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden border-b border-ev-border/40">
          <Aurora variant="dual" />
          <div className="relative mx-auto max-w-4xl px-4 pb-12 pt-12 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: "संपादकीय और डेटा नीति", path: "/editorial-policy" }]} homeName="होम" homeHref="/hi" className="mb-6" />
            <h1 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              संपादकीय और <span className="text-gradient-brand">डेटा नीति</span>
            </h1>
            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-ev-text/60 sm:text-lg">
              EVSelect.in पर आप जो कुछ भी पढ़ते हैं, उस पर हम रिसर्च, स्रोत, तथ्य-जाँच और अपडेट कैसे करते हैं।
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <article className="prose-ev max-w-none">
            <h2>हमारा डेटा कहाँ से आता है</h2>
            <p>
              वाहन के स्पेसिफिकेशन, कीमतें और आँकड़े प्राथमिक और प्रतिष्ठित सार्वजनिक स्रोतों से
              संकलित किए जाते हैं: आधिकारिक निर्माता वेबसाइटें और ब्रोशर, ARAI/IDC के दावा किए गए
              आँकड़े, सरकारी पोर्टल (जैसे PM E-DRIVE पोर्टल, PIB और राज्य परिवहन विभाग), और
              प्रतिष्ठित ऑटोमोटिव प्रकाशन। जब तक अन्यथा न बताया जाए, कीमतें एक्स-शोरूम और सांकेतिक हैं।
            </p>

            <h2>हम सामग्री को सटीक और अद्यतन कैसे रखते हैं</h2>
            <p>
              EV बाज़ार हर हफ़्ते बदलता है, इसलिए EVSelect.in की नियमित चक्र पर समीक्षा और
              ताज़ा अपडेट किया जाता है। नए लॉन्च कैटलॉग में जोड़े जाते हैं, समाचार टाइमलाइन अपडेट
              की जाती है, और हमारे नीति पृष्ठ — जिनमें{" "}
              <Link href={localizedHref("/ev-subsidies-india", "hi")}>सब्सिडी</Link> और{" "}
              <Link href={localizedHref("/ev-charging-station-setup-india", "hi")}>चार्जिंग-स्टेशन गाइडेंस</Link> शामिल हैं —
              आधिकारिक स्रोतों के साथ नियमित समय-सारणी पर दोबारा जाँचे जाते हैं। तेज़ी से बदलते
              आँकड़ों पर निर्भर पृष्ठ एक &quot;अंतिम अपडेट&quot; तिथि दिखाते हैं।
            </p>

            <h2>सटीकता और हमारी जानकारी की सीमाएँ</h2>
            <p>
              हम सटीक रहने का पूरा प्रयास करते हैं, लेकिन स्पेसिफिकेशन, कीमतें और सरकारी प्रोत्साहन
              वेरिएंट, शहर, डीलर और तिथि के अनुसार बदलते रहते हैं, और बिना सूचना के बदल सकते हैं।
              हमारी सामग्री केवल सामान्य जानकारी के लिए है और यह वित्तीय, कानूनी या खरीदारी संबंधी
              सलाह नहीं है। खरीदने से पहले हमेशा किसी आधिकारिक डीलर या सरकारी पोर्टल से ताज़ा
              जानकारी सत्यापित करें।
            </p>

            <h2>स्वतंत्रता</h2>
            <p>
              हमारा संपादकीय निर्णय विज्ञापनदाताओं और निर्माताओं से स्वतंत्र है। प्रायोजन और
              विज्ञापन कभी भी हमारी रैंकिंग, तुलनाओं या सिफ़ारिशों को तय नहीं करते। साइट कैसे
              वित्तपोषित है, यह जानने के लिए हमारा{" "}
              <Link href={localizedHref("/advertising-disclosure", "hi")}>विज्ञापन प्रकटीकरण</Link> देखें।
            </p>

            <h2>सुधार</h2>
            <p>
              यदि आपको कोई त्रुटि या कुछ पुराना दिखे, तो कृपया{" "}
              <Link href={localizedHref("/contact", "hi")}>संपर्क फ़ॉर्म</Link> के माध्यम से या{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a> पर ईमेल करके हमें बताएँ। हम रिपोर्ट
              की गई समस्याओं की तुरंत समीक्षा करते हैं और सत्यापित सुधारों को आमतौर पर कुछ ही
              कार्यदिवसों में अपडेट कर देते हैं।
            </p>

            <h2>लेखकत्व</h2>
            <p>
              सामग्री EVSelect संपादकीय टीम द्वारा तैयार और समीक्षित की जाती है तथा साइट के
              संस्थापक की देखरेख में होती है। अधिक जानें हमारे{" "}
              <Link href={localizedHref("/about", "hi")}>हमारे बारे में पृष्ठ</Link> पर।
            </p>
          </article>
        </div>
      </main>
      <Footer locale="hi" />
      <JsonLd
        data={webPageSchema(
          "संपादकीय और डेटा नीति — EVSelect.in",
          "EVSelect.in EV डेटा कैसे जुटाता, तथ्य-जाँच और अपडेट करता है, स्वतंत्र कैसे रहता है और सुधारों को कैसे संभालता है।",
          "/editorial-policy"
        )}
      />
    </>
  );
}
