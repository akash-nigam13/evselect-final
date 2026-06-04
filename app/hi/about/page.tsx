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
  title: "EVSelect.in के बारे में — भारत का स्वतंत्र EV नॉलेज हब",
  description:
    "EVSelect.in एक स्वतंत्र, भारत-केंद्रित इलेक्ट्रिक-वाहन रिसर्च हब है — 148+ EVs, साथ-साथ तुलना, खर्च के टूल और विशेषज्ञ गाइड। जानें कि हम कौन हैं, क्या कवर करते हैं और कैसे काम करते हैं।",
  alternates: altsFor("/about", "hi"),
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden border-b border-ev-border/40">
          <Aurora variant="dual" />
          <div className="relative mx-auto max-w-4xl px-4 pb-12 pt-12 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: "हमारे बारे में", path: "/about" }]} homeName="होम" homeHref="/hi" className="mb-6" />
            <h1 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              <span className="text-gradient-brand">EVSelect.in</span> के बारे में
            </h1>
            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-ev-text/60 sm:text-lg">
              एक स्वतंत्र, भारत-केंद्रित हब, जो इलेक्ट्रिक की ओर बदलाव को सरल, पारदर्शी और
              जटिल शब्दावली से मुक्त बनाने के लिए बना है।
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <article className="prose-ev max-w-none">
            <h2>हमारा मिशन</h2>
            <p>
              EVSelect.in का उद्देश्य भारतीय खरीदारों को इलेक्ट्रिक वाहनों पर रिसर्च करने और
              भरोसे के साथ चुनने में मदद करना है। EV बाज़ार तेज़ी से बदल रहा है, स्पेसिफिकेशन
              उलझाने वाले हैं और सब्सिडी लगातार बदलती रहती हैं — हम यह सब एक ही जगह ले आते हैं:
              एक पूरा, अद्यतन कैटलॉग, एक ईमानदार साथ-साथ तुलना टूल, व्यावहारिक खर्च और रेंज
              कैलकुलेटर, और सरल भाषा में लिखी (और हिंदी में भी) खरीदार-प्रथम गाइड।
            </p>

            <h2>हम क्या कवर करते हैं</h2>
            <p>
              हम भारत में बिक्री पर मौजूद या लॉन्च हो रही <strong>148+ इलेक्ट्रिक कारों, स्कूटरों
              और मोटरसाइकिलों</strong> को <strong>50+ ब्रांडों</strong> में ट्रैक करते हैं। हर
              वाहन के लिए आपको बैटरी, रेंज, चार्जिंग, परफॉर्मेंस और कीमत की जानकारी मिलती है, साथ
              ही{" "}
              <Link href={localizedHref("/compare", "hi")}>किन्हीं भी मॉडलों की साथ-साथ तुलना</Link>{" "}
              करने की सुविधा भी। कैटलॉग के अलावा, हम{" "}
              <Link href={localizedHref("/ev-subsidies-india", "hi")}>सब्सिडी और प्रोत्साहन</Link>,{" "}
              <Link href={localizedHref("/ev-charging-station-setup-india", "hi")}>चार्जिंग स्टेशन लगाने</Link>,
              बैटरी तकनीक, वास्तविक रेंज और ताज़ा{" "}
              <Link href={localizedHref("/news", "hi")}>भारत EV समाचार</Link> पर गाइड प्रकाशित करते हैं।
            </p>

            <h2>हम स्वतंत्र कैसे रहते हैं</h2>
            <p>
              EVSelect.in पाठक-प्रथम और संपादकीय रूप से स्वतंत्र है। हम किसी वाहन निर्माता के
              स्वामित्व में नहीं हैं, और हमारी तुलनाएँ व सिफ़ारिशें कभी भी विज्ञापनदाताओं से
              प्रभावित नहीं होतीं। यह साइट उपयोग के लिए मुफ़्त है और विज्ञापन तथा, जहाँ प्रासंगिक
              हो, एफ़िलिएट साझेदारियों से वित्तपोषित है — इसकी पूरी जानकारी हमारे{" "}
              <Link href={localizedHref("/advertising-disclosure", "hi")}>विज्ञापन प्रकटीकरण</Link> में दी गई है।
              हम अपनी सामग्री पर रिसर्च और तथ्य-जाँच कैसे करते हैं, यह हमारी{" "}
              <Link href={localizedHref("/editorial-policy", "hi")}>संपादकीय नीति</Link> में बताया गया है।
            </p>

            <h2>हम कौन हैं</h2>
            <p>
              EVSelect.in की स्थापना और संचालन <strong>Akash Nigam</strong> द्वारा किया जाता है,
              और सामग्री EVSelect संपादकीय टीम द्वारा तैयार की जाती है। हम निर्माता के डेटा और
              आधिकारिक स्रोतों की प्रत्यक्ष रिसर्च को नए वाहनों, कीमतों और नीतियों के आने पर
              निरंतर अपडेट के साथ जोड़ते हैं। कुछ पुराना या ग़लत दिखा? हम वाकई जानना चाहते हैं —
              कृपया{" "}
              <Link href={localizedHref("/contact", "hi")}>संपर्क करें</Link> और हम उसे ठीक कर देंगे।
            </p>

            <h2>महत्वपूर्ण सूचना</h2>
            <p>
              EVSelect.in एक सूचना संसाधन है, कोई डीलरशिप, निर्माता या वित्तीय सलाहकार नहीं।
              कीमतें, स्पेसिफिकेशन और सरकारी प्रोत्साहन सांकेतिक हैं और लिखे जाते समय सार्वजनिक
              रूप से उपलब्ध जानकारी पर आधारित हैं — खरीदारी का निर्णय लेने से पहले हमेशा किसी
              आधिकारिक डीलर या सरकारी पोर्टल से ताज़ा जानकारी की पुष्टि करें।
            </p>

            <p className="text-sm text-ev-muted">
              संपर्क: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
          </article>
        </div>
      </main>
      <Footer locale="hi" />
      <JsonLd
        data={webPageSchema(
          "EVSelect.in के बारे में",
          "हम कौन हैं, क्या कवर करते हैं और कैसे काम करते हैं — भारत का स्वतंत्र EV नॉलेज हब।",
          "/about"
        )}
      />
    </>
  );
}
