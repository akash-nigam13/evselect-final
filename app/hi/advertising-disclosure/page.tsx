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
  title: "विज्ञापन और एफ़िलिएट प्रकटीकरण — EVSelect.in",
  description:
    "EVSelect.in कैसे वित्तपोषित होता है: डिस्प्ले विज्ञापन, प्रायोजन और एफ़िलिएट लिंक — और हमारी प्रतिबद्धता कि ये हमारी संपादकीय सामग्री को कभी प्रभावित नहीं करते।",
  alternates: altsFor("/advertising-disclosure", "hi"),
};

export default function DisclosurePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden border-b border-ev-border/40">
          <Aurora variant="dual" />
          <div className="relative mx-auto max-w-4xl px-4 pb-12 pt-12 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: "विज्ञापन प्रकटीकरण", path: "/advertising-disclosure" }]} homeName="होम" homeHref="/hi" className="mb-6" />
            <h1 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              विज्ञापन और <span className="text-gradient-brand">एफ़िलिएट प्रकटीकरण</span>
            </h1>
            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-ev-text/60 sm:text-lg">
              EVSelect.in कैसे मुफ़्त रहता है — और स्वतंत्रता पर हमारा वादा।
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <article className="prose-ev max-w-none">
            <h2>हम कैसे वित्तपोषित होते हैं</h2>
            <p>
              EVSelect.in उपयोग के लिए मुफ़्त है। इसे ऐसा बनाए रखने के लिए हम{" "}
              <strong>डिस्प्ले विज्ञापन</strong> (Google AdSense सहित) से राजस्व अर्जित करते हैं,
              और हम <strong>प्रायोजित सामग्री</strong> और <strong>एफ़िलिएट लिंक</strong> से भी
              कमा सकते हैं, जहाँ आप किसी पार्टनर पर क्लिक करके कोई कार्रवाई करते हैं तो हमें कमीशन
              मिलता है — आप पर बिना किसी अतिरिक्त लागत के।
            </p>

            <h2>विज्ञापन</h2>
            <p>
              Google सहित तृतीय-पक्ष विक्रेता, उपयोगकर्ता की इस और अन्य वेबसाइटों पर पिछली विज़िट
              के आधार पर विज्ञापन दिखाने के लिए कुकीज़ का उपयोग करते हैं। आप अपनी ब्राउज़र सेटिंग्स
              और Google की Ads Settings के माध्यम से अपनी प्राथमिकताएँ प्रबंधित कर सकते हैं। हम एक
              कुकी सूचना दिखाते हैं ताकि आप ग़ैर-ज़रूरी कुकीज़ को स्वीकार या अस्वीकार कर सकें।
              डेटा संबंधी जानकारी के लिए, हमारी{" "}
              <Link href={localizedHref("/privacy", "hi")}>गोपनीयता नीति</Link> देखें।
            </p>

            <h2>हमारा स्वतंत्रता का वादा</h2>
            <p>
              विज्ञापन और एफ़िलिएट संबंध <strong>कभी भी</strong> हमारी संपादकीय सामग्री, वाहन
              डेटा, तुलनाओं या सिफ़ारिशों को प्रभावित नहीं करते। प्रायोजित आइटम, जहाँ वे दिखाई देते
              हैं, स्पष्ट रूप से उसी रूप में लेबल किए जाते हैं। हम रिसर्च और तथ्य-जाँच कैसे करते
              हैं, यह हमारी{" "}
              <Link href={localizedHref("/editorial-policy", "hi")}>संपादकीय नीति</Link> में बताया गया है।
            </p>

            <h2>हमारे साथ काम करें</h2>
            <p>
              विज्ञापन, प्रायोजन या साझेदारी में रुचि है?{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a> पर ईमेल करें या{" "}
              <Link href={localizedHref("/contact", "hi")}>संपर्क फ़ॉर्म</Link> का उपयोग करें और
              &quot;Advertise on EVSelect.in&quot; चुनें।
            </p>
          </article>
        </div>
      </main>
      <Footer locale="hi" />
      <JsonLd
        data={webPageSchema(
          "विज्ञापन और एफ़िलिएट प्रकटीकरण — EVSelect.in",
          "EVSelect.in विज्ञापन और एफ़िलिएट लिंक के माध्यम से कैसे वित्तपोषित होता है, और हमारी संपादकीय-स्वतंत्रता की प्रतिबद्धता।",
          "/advertising-disclosure"
        )}
      />
    </>
  );
}
