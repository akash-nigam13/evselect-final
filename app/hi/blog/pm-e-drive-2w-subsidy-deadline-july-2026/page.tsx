import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import { altsFor, localizedHref } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "PM E-Drive स्कूटर सब्सिडी 31 जुलाई को खत्म — कैप खत्म होने से पहले खरीदें",
  description:
    "इलेक्ट्रिक टू-व्हीलर के लिए PM E-Drive डिमांड प्रोत्साहन 31 जुलाई 2026 को खत्म होगा, पर योजना फंड-सीमित है और जल्दी बंद हो सकती है। 24.79 लाख ई-स्कूटर स्लॉट में से ~22 लाख क्लेम हो चुके — जानिए खरीदारों को क्या जानना चाहिए।",
  alternates: altsFor("/blog/pm-e-drive-2w-subsidy-deadline-july-2026", "hi"),
  openGraph: {
    title: "PM E-Drive स्कूटर सब्सिडी 31 जुलाई को खत्म — कैप खत्म होने से पहले खरीदें",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="pm-e-drive-2w-subsidy-deadline-july-2026" locale="hi">
      <p>
        अगर आप इलेक्ट्रिक स्कूटर खरीदने की योजना बना रहे हैं और केंद्र सरकार का
        खरीद प्रोत्साहन चाहते हैं, तो समय कम है। PM E-Drive योजना के तहत इलेक्ट्रिक
        टू-व्हीलर पर डिमांड सब्सिडी अब{" "}
        <strong>31 जुलाई 2026</strong> तक चलेगी — पहले की 31 मार्च 2026 की समय-सीमा
        से चार महीने का विस्तार। लेकिन योजना फंड-सीमित है, और भारी उद्योग मंत्रालय
        स्पष्ट कर चुका है कि अगर पैसा या यूनिट कैप पहले खत्म हो गया तो यह जल्दी बंद
        हो सकती है।
      </p>

      <h2>आप कितना बचाते हैं</h2>
      <p>
        प्रोत्साहन बैटरी क्षमता के प्रति kWh ₹2,500 है, जो{" "}
        <strong>प्रति वाहन ₹5,000</strong> पर सीमित है — यह 1 अप्रैल 2025 से पहले
        लागू ₹5,000-प्रति-kWh, ₹10,000-कैप दर का आधा है। पात्र होने के लिए
        इलेक्ट्रिक टू-व्हीलर की एक्स-फ़ैक्टरी कीमत ₹1.5 लाख तक होनी चाहिए। इसमें
        ज़्यादातर मुख्यधारा कम्यूटर स्कूटर आ जाते हैं, इसलिए छूट उन्हीं मॉडलों पर
        दिखती है जिन्हें अधिकांश खरीदार असल में देख रहे होते हैं।
      </p>

      <h2>कैप क्यों मायने रखता है</h2>
      <p>
        PM E-Drive अक्टूबर 2024 में कुल ₹10,900 करोड़ के परिव्यय में से{" "}
        <strong>24.79 लाख</strong> इलेक्ट्रिक टू-व्हीलर को सहारा देने के लक्ष्य के
        साथ शुरू हुई थी। जनवरी 2026 के अंत तक योजना के तहत करीब 22.12 लाख EV को
        समर्थन मिल चुका था — यानी टू-व्हीलर आवंटन लगभग खत्म होने को है। चूँकि
        प्रोत्साहन पहले-आओ-पहले-पाओ आधार पर जारी होते हैं, अगर क्लेम मौजूदा रफ़्तार
        से आते रहे तो व्यावहारिक समय-सीमा 31 जुलाई से पहले ही आ सकती है।
      </p>

      <h2>खरीदारों को क्या करना चाहिए</h2>
      <p>
        अगर सब्सिडी वाला इलेक्ट्रिक स्कूटर आपकी शॉर्टलिस्ट में है, तो त्योहारी सीज़न
        का इंतज़ार करने के बजाय खरीद और रजिस्ट्रेशन जल्दी पूरा करना समझदारी है। डीलर
        से पुष्टि करें कि मॉडल PM E-Drive के तहत पंजीकृत है और प्रोत्साहन ऑन-रोड
        कीमत में दिया जा रहा है। याद रखें, केंद्रीय सब्सिडी राज्य-स्तरीय लाभों और
        रोड-टैक्स छूट के ऊपर जुड़ती है, जो काफ़ी अलग-अलग होते हैं — हमारी{" "}
        <Link href={localizedHref("/blog/ev-subsidies-road-tax-by-state-india-2026", "hi")}>
          राज्यवार EV सब्सिडी गाइड
        </Link>{" "}
        और{" "}
        <Link href={localizedHref("/ev-subsidies-india", "hi")}>EV सब्सिडी हब</Link>{" "}
        बताते हैं कि आप कहाँ क्या क्लेम कर सकते हैं।
      </p>

      <h2>निष्कर्ष</h2>
      <p>
        एक किफ़ायती स्कूटर पर ₹5,000 का PM E-Drive प्रोत्साहन असली बचत है, पर यह न
        तो स्थायी है और न ही 31 जुलाई तक गारंटीड — फंड कैप तय करता है। अगर आपने मॉडल
        चुन लिया है, तो विंडो बंद होने से पहले खरीदें। हमारे{" "}
        <Link href={localizedHref("/catalog/electric-scooters", "hi")}>
          इलेक्ट्रिक स्कूटर कैटलॉग
        </Link>{" "}
        में मौजूदा विकल्प देखें या{" "}
        <Link href={localizedHref("/blog/top-5-electric-scooters-india-2026", "hi")}>
          टॉप 5 इलेक्ट्रिक स्कूटर गाइड
        </Link>{" "}
        पढ़ें।
      </p>

      <h2>स्रोत</h2>
      <p>
        योजना का विवरण{" "}
        <a href="https://www.autocarindia.com/bike-news/pm-e-drive-subsidy-extended-until-july-31-for-electric-two-wheelers-439316" target="_blank" rel="noopener noreferrer">
          Autocar India
        </a>{" "}
        ·{" "}
        <a href="https://www.evmechanica.com/pm-e-drive-subsidy-extended-until-july-31-for-electric-two-wheelers-2/" target="_blank" rel="noopener noreferrer">
          EVMechanica
        </a>{" "}
        ·{" "}
        <a href="https://pmedrive.heavyindustries.gov.in/" target="_blank" rel="noopener noreferrer">
          PM E-Drive (भारी उद्योग मंत्रालय)
        </a>{" "}
        द्वारा रिपोर्ट किया गया।
      </p>
    </ArticleShell>
  );
}
