import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import { altsFor, localizedHref } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Ather ने Rizta की कीमतें बढ़ाईं; अब ₹1.21 लाख से शुरू",
  description:
    "Ather Energy ने अपनी सबसे ज़्यादा बिकने वाली Rizta फैमिली स्कूटर की कीमतें ₹3,000–4,000 बढ़ाईं, जो 1 जून 2026 से लागू हैं। लाइनअप अब ₹1.21–1.59 लाख एक्स-शोरूम तक। यहाँ वेरिएंट-वार ब्योरा है।",
  alternates: altsFor("/blog/ather-rizta-price-hike-june-2026", "hi"),
  openGraph: {
    title: "Ather ने Rizta की कीमतें बढ़ाईं; अब ₹1.21 लाख से शुरू",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="ather-rizta-price-hike-june-2026" locale="hi">
      <p>
        <Link href={localizedHref("/brand/ather", "hi")}>Ather Energy</Link> ने अपनी
        सबसे ज़्यादा बिकने वाली फैमिली स्कूटर Rizta की पूरी रेंज पर कीमतें बढ़ा दी
        हैं, और संशोधित दरें <strong>1 जून 2026</strong> से लागू हैं। वेरिएंट के
        अनुसार, यह ई-स्कूटर अब <strong>₹3,000–4,000 महँगा</strong> है, और चार-वेरिएंट
        रेंज लगभग ₹1.21 लाख से ₹1.59 लाख (एक्स-शोरूम) तक फैली है।
      </p>

      <h2>वेरिएंट-वार ब्योरा</h2>
      <p>
        2.9 kWh पैक वाला एंट्री S अब करीब ₹1,21,046 से शुरू होता है — ₹3,000 की बढ़त।
        Z 2.9 kWh लगभग ₹1,39,045 पर, S 3.7 kWh करीब ₹1,43,547 पर, और टॉप Z 3.7 kWh
        करीब ₹1,59,046 पर पहुँचता है — हर एक ₹4,000 तक महँगा। लाइनअप और फ़ीचर्स अन्यथा
        अपरिवर्तित हैं; यह कीमत संशोधन है, मॉडल अपडेट नहीं।
      </p>

      <h2>कीमतें क्यों बढ़ीं</h2>
      <p>
        Ather ने इस बढ़ोतरी का कारण कच्चे माल और उत्पादन लागत में वृद्धि बताया है — वही
        इनपुट-कॉस्ट दबाव जो समय-समय पर पूरे उद्योग में टू-व्हीलर कीमतें ऊपर धकेलता है।
        इस तरह की छोटी, मध्य-चक्र की बढ़त आम है और आमतौर पर बिना किसी ऐलान के चुपचाप
        लागू कर दी जाती है।
      </p>

      <h2>खरीदारों के लिए इसका मतलब</h2>
      <p>
        कुछ हज़ार रुपये एक व्यावहारिक फैमिली ई-स्कूटर के रूप में Rizta का पक्ष नहीं
        बदलेंगे, लेकिन यह याद दिलाता है कि पिछले महीने जो ऑन-रोड कीमत बताई गई थी वह अब
        शायद न टिके। अगर आप तुलना कर रहे हैं, तो प्रतिद्वंद्वियों से अंतर बस मामूली कम
        हुआ है। ध्यान दें कि केंद्र की PM E-Drive प्रोत्साहन और कोई भी राज्य सब्सिडी
        अलग से लागू होती है — इसलिए आपकी असल लागत इस पर बहुत निर्भर करती है कि आप कहाँ
        खरीदते हैं। ताज़ा सहायता हमारी{" "}
        <Link href={localizedHref("/ev-subsidies-india", "hi")}>
          EV सब्सिडी गाइड
        </Link>{" "}
        में देखें।
      </p>

      <h2>निष्कर्ष</h2>
      <p>
        बढ़ोतरी मामूली है और प्रतिबद्ध खरीदारों को रोकने की संभावना नहीं, लेकिन बुकिंग
        से पहले एक ताज़ा, आइटमवार कोट लेना सही रहेगा। तय करने से पहले हमारे{" "}
        <Link href={localizedHref("/catalog/electric-scooters", "hi")}>
          इलेक्ट्रिक स्कूटर कैटलॉग
        </Link>{" "}
        में Rizta की तुलना बाक़ी विकल्पों से करें।
      </p>

      <h2>स्रोत</h2>
      <p>
        कीमत विवरण{" "}
        <a href="https://www.bikedekho.com/news/category-price-updates/ather-rizta-prices-increased-by-up-to-rs-4000-now-starts-at-rs-121-lakh-19601" target="_blank" rel="noopener noreferrer">
          BikeDekho
        </a>{" "}
        ·{" "}
        <a href="https://www.drivespark.com/two-wheelers/2026/ather-energy-hikes-rizta-family-electric-scooter-prices-085891.html" target="_blank" rel="noopener noreferrer">
          DriveSpark
        </a>{" "}
        द्वारा रिपोर्ट किए गए।
      </p>
    </ArticleShell>
  );
}
