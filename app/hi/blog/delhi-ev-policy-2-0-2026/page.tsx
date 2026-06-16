import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import { altsFor, localizedHref } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "दिल्ली EV नीति 2.0: ₹1 लाख तक सब्सिडी, पुरानी कार स्क्रैप करने से जुड़ी",
  description:
    "दिल्ली के बजट 2026 में EV नीति 2.0 — ₹15 लाख से कम की EV पर ₹1 लाख तक, ई-टू-व्हीलर पर ₹10,000, स्क्रैपेज-लिंक्ड फ़ायदे और तेज़ DBT भुगतान। जानिए क्या पुष्टि हुई है।",
  alternates: altsFor("/blog/delhi-ev-policy-2-0-2026", "hi"),
  openGraph: {
    title: "दिल्ली EV नीति 2.0: ₹1 लाख तक सब्सिडी, पुरानी कार स्क्रैप करने से जुड़ी",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="delhi-ev-policy-2-0-2026" locale="hi">
      <p>
        दिल्ली ने अपने बजट 2026 के हिस्से के रूप में <strong>EV नीति 2.0</strong> पेश की
        है, जिसे राजधानी में बैटरी-चालित वाहनों को बढ़ावा देने के लिए{" "}
        <strong>₹200 करोड़ के समर्पित परिव्यय</strong> का समर्थन है। यह ढाँचा संशोधन न
        होने तक 31 मार्च 2030 तक लागू रहेगा — और इसकी सबसे ख़ास बात यह है कि अब सबसे बड़े
        प्रोत्साहन <strong>पुराने पेट्रोल या डीज़ल वाहन को स्क्रैप करने</strong> से जुड़े
        हैं।
      </p>

      <h2>आप क्या क्लेम कर सकते हैं</h2>
      <p>
        ₹15 लाख से कम कीमत वाली निजी इलेक्ट्रिक कारों पर{" "}
        <strong>₹1 लाख तक</strong> की सब्सिडी मिल सकती है, जो पहले 1 लाख आवेदकों तक सीमित
        है। इलेक्ट्रिक टू-व्हीलर पर सपाट <strong>₹10,000</strong> का प्रोत्साहन, जबकि
        इलेक्ट्रिक थ्री-व्हीलर (L5M) पर नई EV की खरीद पर <strong>₹25,000</strong> का
        स्क्रैपेज प्रोत्साहन है। ऊँचे सब्सिडी ब्रैकेट जानबूझकर दिल्ली में रजिस्टर्ड पुराने,
        ज़्यादा प्रदूषण फैलाने वाले Bharat Stage (BS)-IV और पुराने वाहनों को हटाने से जोड़े
        गए हैं।
      </p>

      <h2>बड़ा सुधार: तेज़ भुगतान</h2>
      <p>
        भारतीय EV सब्सिडी के साथ एक पुरानी शिकायत इंतज़ार की रही है। दिल्ली का कहना है कि
        EV नीति 2.0 के तहत सभी प्रोत्साहन सीधे खरीदार के बैंक खाते में{" "}
        <strong>डायरेक्ट बेनिफ़िट ट्रांसफ़र (DBT)</strong> से दिए जाएँगे — जिससे भुगतान
        का समय 40 दिनों से अधिक से घटकर एक हफ़्ते से कम रह जाएगा। अगर यह वादे के अनुसार
        काम करता है, तो यह कागज़ पर सब्सिडी के साथ EV खरीदने की सबसे बड़ी झुँझलाहटों में
        से एक — महीनों की देरी — को दूर कर देता है।
      </p>

      <h2>स्क्रैपेज पहलू क्यों मायने रखता है</h2>
      <p>
        सबसे बड़े फ़ायदों को पुरानी ICE कार स्क्रैप करने से जोड़कर दिल्ली एक साथ दो काम
        करने की कोशिश कर रही है — सबसे प्रदूषणकारी वाहनों को सड़कों से हटाना और उस माँग को
        EVs की ओर मोड़ना। एक पुरानी पेट्रोल या डीज़ल कार पर बैठे परिवार के लिए, स्क्रैपेज
        फ़ायदा और EV सब्सिडी की कुल कीमत स्विच करने का गणित काफ़ी बदल सकती है, ख़ासकर
        ₹15 लाख से कम के ब्रैकेट में जहाँ भारत की अधिकतर{" "}
        <Link href={localizedHref("/blog/best-electric-cars-under-15-lakh-india", "hi")}>
          किफ़ायती EVs
        </Link>{" "}
        बैठती हैं।
      </p>

      <h2>यह राष्ट्रीय तस्वीर में कैसे फ़िट होती है</h2>
      <p>
        राज्य प्रोत्साहन केंद्र की PM E-Drive योजना के ऊपर जुड़ते हैं — और दोनों आपस में
        असर डालते हैं। ध्यान दें कि केंद्र की{" "}
        <Link href={localizedHref("/blog/pm-e-drive-2w-subsidy-deadline-july-2026", "hi")}>
          PM E-Drive टू-व्हीलर सब्सिडी फंड-सीमित है और 31 जुलाई को खत्म होती है
        </Link>
        , इसलिए दिल्ली में ई-स्कूटर खरीदार उस कैप के खत्म होने से पहले कदम उठाना चाह सकते
        हैं। आप असल में कितना बचाते हैं इसके राज्यवार ब्योरे के लिए हमारी{" "}
        <Link href={localizedHref("/blog/ev-subsidies-road-tax-by-state-india-2026", "hi")}>
          EV सब्सिडी और रोड-टैक्स गाइड
        </Link>{" "}
        और हमारे{" "}
        <Link href={localizedHref("/ev-subsidies-india", "hi")}>EV सब्सिडी हब</Link> में
        ताज़ा जानकारी देखें।
      </p>

      <h2>निष्कर्ष</h2>
      <p>
        EV नीति 2.0 भारत के अधिक आक्रामक राज्य EV क़दमों में से एक है — बड़े प्रति-वाहन
        फ़ायदे, स्वच्छ-वायु स्क्रैपेज हुक और धीमे भुगतान को ठीक करने की असल कोशिश। पेच हैं
        आवेदन कैप और शर्तें, इसलिए दिल्ली के खरीदारों को बुकिंग से पहले पात्रता और स्क्रैपेज
        आवश्यकताओं की पुष्टि करनी चाहिए। अगर आप अब भी चुन रहे हैं, तो हमारी{" "}
        <Link href={localizedHref("/blog/how-to-choose-first-ev-india", "hi")}>
          पहली-EV चेकलिस्ट
        </Link>{" "}
        से शुरू करें।
      </p>

      <h2>स्रोत</h2>
      <p>
        रिपोर्ट:{" "}
        <a href="https://www.outlookbusiness.com/news/delhi-ev-policy-20-subsidies-scrappage-benefits-and-neighborhood-charging-for-2026" target="_blank" rel="noopener noreferrer">
          Outlook Business
        </a>{" "}
        ·{" "}
        <a href="https://www.cartoq.com/car-news/delhi-budget-2026-ev-policy-2-0-scrappage-incentives/" target="_blank" rel="noopener noreferrer">
          CarToq
        </a>{" "}
        ·{" "}
        <a href="https://carhp.in/car-guide/delhi-ev-policy-2-0-push-for-scrappage-get-up-to-1-lakh-incentives" target="_blank" rel="noopener noreferrer">
          Carhp
        </a>
      </p>
    </ArticleShell>
  );
}
