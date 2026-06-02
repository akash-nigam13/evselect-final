import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { webPageSchema } from "@/lib/seo";
import type { Metadata } from "next";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  alternates: altsFor("/privacy", "hi"),
  title: "गोपनीयता नीति",
  description: "EVSelect.in की गोपनीयता नीति — हम आपका डेटा कैसे एकत्र करते, उपयोग करते और सुरक्षित रखते हैं।",
};

const EFFECTIVE_DATE = "June 1, 2024";
const CONTACT_EMAIL = "akash.nigam@evselect.in";
const SITE = "EVSelect.in";
const DOMAIN = "evselect.in";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 mb-12">
      <h2 className="font-display font-bold text-white text-xl mb-5 pb-3 border-b border-ev-border/50 flex items-center gap-3">
        <span className="w-1 h-6 rounded-full bg-ev-cyan inline-block shrink-0" />
        {title}
      </h2>
      <div className="space-y-4 text-ev-text/70 font-body text-sm leading-relaxed">{children}</div>
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>;
}

function UL({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-ev-cyan mt-1.5 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const toc = [
  { id: "overview",        label: "अवलोकन" },
  { id: "information",     label: "हम कौन-सी जानकारी एकत्र करते हैं" },
  { id: "use",             label: "हम आपकी जानकारी का उपयोग कैसे करते हैं" },
  { id: "cookies",         label: "कुकीज़ और ट्रैकिंग" },
  { id: "adsense",         label: "Google AdSense और विज्ञापन" },
  { id: "third-parties",   label: "तृतीय-पक्ष सेवाएँ" },
  { id: "data-retention",  label: "डेटा प्रतिधारण" },
  { id: "your-rights",     label: "आपके अधिकार" },
  { id: "children",        label: "बच्चों की गोपनीयता" },
  { id: "changes",         label: "इस नीति में बदलाव" },
  { id: "contact",         label: "हमसे संपर्क करें" },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">

        {/* Hero */}
        <div className="border-b border-ev-border/30 bg-ev-surface/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <Breadcrumbs
              homeName="होम"
              homeHref="/hi"
              items={[{ name: "गोपनीयता नीति", path: "/hi/privacy" }]}
              className="mb-6"
            />
            <p className="text-xs font-mono text-ev-cyan tracking-widest uppercase mb-3">कानूनी</p>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-white mb-4">
              गोपनीयता <span className="text-gradient-cyan">नीति</span>
            </h1>
            <p className="text-ev-text/50 font-body text-sm">
              प्रभावी तिथि: <span className="text-ev-cyan font-mono">{EFFECTIVE_DATE}</span>
              &nbsp;·&nbsp; अंतिम अपडेट: <span className="font-mono">{EFFECTIVE_DATE}</span>
            </p>
            <p className="mt-4 text-ev-text/45 font-body text-xs leading-relaxed max-w-2xl">
              यह अनुवाद सुविधा के लिए है; किसी मतभेद की स्थिति में अंग्रेज़ी संस्करण मान्य होगा।
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-[280px_1fr] gap-14">

            {/* Sticky TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 bg-ev-card border border-ev-border rounded-2xl p-5">
                <p className="text-[10px] font-mono text-ev-muted uppercase tracking-widest mb-4">विषय-सूची</p>
                <ul className="space-y-1">
                  {toc.map(({ id, label }, i) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        className="flex items-center gap-2.5 text-xs font-body text-ev-muted hover:text-ev-cyan transition-colors py-1 group"
                      >
                        <span className="font-mono text-[10px] text-ev-border group-hover:text-ev-cyan w-5">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Content */}
            <article>

              <Section id="overview" title="अवलोकन">
                <P>
                  {SITE} ("{SITE}", "हम", "हमारा" या "हमें") में आपका स्वागत है। हम वेबसाइट{" "}
                  <span className="font-mono text-ev-cyan">{DOMAIN}</span> संचालित करते हैं, जो मुख्य रूप से
                  भारत के उपयोगकर्ताओं के लिए एक इलेक्ट्रिक वाहन जानकारी और तुलना मंच है।
                </P>
                <P>
                  यह गोपनीयता नीति बताती है कि जब आप हमारी वेबसाइट पर आते हैं तो हम कौन-सी जानकारी एकत्र करते हैं,
                  उसका उपयोग कैसे करते हैं और आपकी जानकारी के संबंध में आपके पास कौन-से विकल्प हैं। {SITE} का
                  उपयोग करके, आप इस नीति में वर्णित प्रथाओं से सहमत होते हैं।
                </P>
                <P>
                  यदि आप इस नीति के किसी भी हिस्से से सहमत नहीं हैं, तो कृपया हमारी वेबसाइट का उपयोग तुरंत बंद कर दें।
                </P>
              </Section>

              <Section id="information" title="हम कौन-सी जानकारी एकत्र करते हैं">
                <P><strong className="text-ev-text">A. जानकारी जो आप सीधे प्रदान करते हैं</strong></P>
                <UL items={[
                  "संपर्क फ़ॉर्म भरते समय या न्यूज़लेटर की सदस्यता लेते समय आपका नाम और ईमेल पता।",
                  "हमारे संपर्क पृष्ठ के माध्यम से आप हमें जो संदेश या प्रश्न भेजते हैं।",
                  "कोई भी प्रतिक्रिया, रेटिंग या टिप्पणी जो आप देना चुनते हैं।",
                ]} />
                <P><strong className="text-ev-text">B. स्वतः एकत्र की जाने वाली जानकारी</strong></P>
                <UL items={[
                  "IP पता, ब्राउज़र प्रकार, ऑपरेटिंग सिस्टम और डिवाइस प्रकार।",
                  "देखे गए पृष्ठ, पृष्ठों पर बिताया गया समय और नेविगेशन पथ (एनालिटिक्स टूल के माध्यम से)।",
                  "रेफ़रिंग URL — हमारी साइट पर आने से पहले आप जिस पृष्ठ से आए थे।",
                  "आपके IP पते से प्राप्त सामान्य भौगोलिक स्थान (शहर/देश स्तर पर)।",
                  "कुकीज़ और इसी तरह की ट्रैकिंग तकनीकें (नीचे कुकीज़ अनुभाग देखें)।",
                ]} />
                <P><strong className="text-ev-text">C. जानकारी जो हम एकत्र नहीं करते</strong></P>
                <P>
                  हम संवेदनशील व्यक्तिगत जानकारी जैसे आधार नंबर, PAN कार्ड विवरण, वित्तीय खाता जानकारी या
                  स्वास्थ्य डेटा एकत्र नहीं करते।
                </P>
              </Section>

              <Section id="use" title="हम आपकी जानकारी का उपयोग कैसे करते हैं">
                <P>हम एकत्र की गई जानकारी का उपयोग निम्नलिखित उद्देश्यों के लिए करते हैं:</P>
                <UL items={[
                  "EVSelect.in वेबसाइट और इसकी सुविधाओं को संचालित करने, बनाए रखने और बेहतर बनाने के लिए।",
                  "पूछताछ का जवाब देने और ग्राहक सहायता प्रदान करने के लिए।",
                  "आपके द्वारा सदस्यता ली गई न्यूज़लेटर या अपडेट भेजने के लिए (आप किसी भी समय सदस्यता रद्द कर सकते हैं)।",
                  "उपयोग के पैटर्न का विश्लेषण करने और उपयोगकर्ता अनुभव व सामग्री की गुणवत्ता सुधारने के लिए।",
                  "तकनीकी समस्याओं या धोखाधड़ी गतिविधि का पता लगाने, रोकने और समाधान के लिए।",
                  "लागू भारतीय कानून, सूचना प्रौद्योगिकी अधिनियम, 2000 सहित, के तहत कानूनी दायित्वों का पालन करने के लिए।",
                  "Google AdSense और अन्य विज्ञापन भागीदारों के माध्यम से प्रासंगिक विज्ञापन दिखाने के लिए (नीचे देखें)।",
                ]} />
              </Section>

              <Section id="cookies" title="कुकीज़ और ट्रैकिंग तकनीकें">
                <P>
                  {SITE} कुकीज़ — आपके डिवाइस पर संग्रहीत छोटी टेक्स्ट फ़ाइलें — और इसी तरह की तकनीकों का उपयोग
                  आपके अनुभव को बेहतर बनाने, यह समझने कि आप हमारी साइट का उपयोग कैसे करते हैं, और प्रासंगिक
                  विज्ञापन दिखाने के लिए करता है।
                </P>
                <P><strong className="text-ev-text">हम जिन प्रकार की कुकीज़ का उपयोग करते हैं:</strong></P>
                <UL items={[
                  "आवश्यक कुकीज़: वेबसाइट के सही ढंग से काम करने के लिए ज़रूरी। इन्हें अक्षम नहीं किया जा सकता।",
                  "एनालिटिक्स कुकीज़: Google Analytics द्वारा सेट की जाती हैं ताकि हम ट्रैफ़िक पैटर्न समझ सकें और सामग्री सुधार सकें।",
                  "विज्ञापन कुकीज़: Google AdSense और अन्य विज्ञापन नेटवर्क द्वारा आपकी रुचियों और ब्राउज़िंग इतिहास के आधार पर व्यक्तिगत विज्ञापन दिखाने के लिए सेट की जाती हैं।",
                  "प्राथमिकता कुकीज़: आपकी सेटिंग्स और प्राथमिकताएँ याद रखती हैं (जैसे वाहन फ़िल्टर)।",
                ]} />
                <P>
                  आप अपने ब्राउज़र सेटिंग्स के माध्यम से कुकीज़ को नियंत्रित कर सकते हैं। कुकीज़ अक्षम करने से
                  वेबसाइट के कुछ हिस्सों की कार्यक्षमता प्रभावित हो सकती है। अधिकांश ब्राउज़र विशेष रूप से तृतीय-पक्ष
                  कुकीज़ को ब्लॉक करने के विकल्प प्रदान करते हैं, जो मुख्य साइट सुविधाओं को प्रभावित किए बिना विज्ञापन
                  ट्रैकिंग को सीमित करता है।
                </P>
                <P>
                  कुकीज़ प्रबंधित करने के निर्देशों के लिए, अपने ब्राउज़र के सहायता अनुभाग पर जाएँ या{" "}
                  <span className="font-mono text-ev-cyan">aboutcookies.org</span> देखें।
                </P>
              </Section>

              <Section id="adsense" title="Google AdSense और विज्ञापन">
                <P>
                  {SITE} वेबसाइट से कमाई के लिए प्रासंगिक और रुचि-आधारित विज्ञापन के माध्यम से{" "}
                  <strong className="text-ev-text">Google AdSense</strong> कार्यक्रम में भाग लेता है।
                  Google, एक तृतीय-पक्ष विक्रेता के रूप में, हमारे आगंतुकों को इस साइट और इंटरनेट की अन्य साइटों
                  पर उनकी विज़िट के आधार पर विज्ञापन दिखाने के लिए कुकीज़ ({" "}
                  <span className="font-mono text-ev-cyan">DART कुकी</span> सहित) का उपयोग करता है।
                </P>

                {/* AdSense callout */}
                <div className="bg-ev-card border border-ev-cyan/20 rounded-xl p-5 my-4 space-y-3">
                  <p className="text-xs font-mono text-ev-cyan uppercase tracking-widest">Google AdSense — मुख्य बिंदु</p>
                  <UL items={[
                    "Google इस और अन्य वेबसाइटों पर आपकी विज़िट के डेटा का उपयोग करके आपको व्यक्तिगत विज्ञापन दिखा सकता है।",
                    "DART कुकी Google को Google के साथ साझेदारी करने वाली साइटों पर आपके ब्राउज़िंग इतिहास के आधार पर विज्ञापन दिखाने में सक्षम बनाती है।",
                    "Google द्वारा विज्ञापन कुकीज़ का उपयोग उसे और उसके भागीदारों को हमारी वेबसाइट और/या इंटरनेट की अन्य वेबसाइटों पर आपकी पिछली विज़िट के आधार पर विज्ञापन दिखाने में सक्षम बनाता है।",
                    "आप g.co/adsettings पर Google की Ads Settings पर जाकर या aboutads.info पर जाकर व्यक्तिगत विज्ञापन से ऑप्ट आउट कर सकते हैं।",
                    "आप networkadvertising.org/choices पर Network Advertising Initiative ऑप्ट-आउट पृष्ठ पर जाकर तृतीय-पक्ष विक्रेताओं द्वारा कुकीज़ के उपयोग से भी ऑप्ट आउट कर सकते हैं।",
                    "ऑप्ट आउट करने से विज्ञापन दिखना बंद नहीं होता — इसका मतलब है कि आपको दिखने वाले विज्ञापन आपकी रुचियों के लिए कम प्रासंगिक होंगे।",
                  ]} />
                </div>

                <P>
                  हमारी वेबसाइट का उपयोग करते समय Google कैसे डेटा एकत्र और उपयोग करता है, इसके बारे में अधिक
                  जानकारी के लिए कृपया देखें:{" "}
                  <span className="font-mono text-ev-cyan">policies.google.com/technologies/partner-sites</span>
                </P>
                <P>
                  हम भविष्य में अन्य विज्ञापन नेटवर्क या एफ़िलिएट कार्यक्रमों का भी उपयोग कर सकते हैं। इस नीति को
                  तदनुसार अपडेट किया जाएगा। {SITE} पर सभी विज्ञापन भागीदारों के लिए अपनी डेटा प्रथाओं का खुलासा
                  करने वाली अपनी गोपनीयता नीतियाँ रखना आवश्यक है।
                </P>
              </Section>

              <Section id="third-parties" title="तृतीय-पक्ष सेवाएँ">
                <P>हमारी वेबसाइट निम्नलिखित तृतीय-पक्ष सेवाओं को एकीकृत करती है, जिनमें से प्रत्येक की अपनी गोपनीयता प्रथाएँ हैं:</P>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-ev-border">
                        {["सेवा", "उद्देश्य", "गोपनीयता नीति"].map((h) => (
                          <th key={h} className="px-3 py-2.5 text-left font-mono text-ev-muted uppercase tracking-wider text-[10px]">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Google Analytics", "वेबसाइट एनालिटिक्स और ट्रैफ़िक विश्लेषण", "policies.google.com/privacy"],
                        ["Google AdSense", "डिस्प्ले विज्ञापन", "policies.google.com/privacy"],
                        ["Google Fonts", "टाइपोग्राफ़ी (फ़ॉन्ट लोडिंग)", "policies.google.com/privacy"],
                        ["Vercel", "वेबसाइट होस्टिंग और डिप्लॉयमेंट", "vercel.com/legal/privacy-policy"],
                      ].map(([svc, purpose, policy], i) => (
                        <tr key={svc} className={`border-b border-ev-border/30 ${i % 2 !== 0 ? "bg-ev-surface/20" : ""}`}>
                          <td className="px-3 py-2.5 font-display font-semibold text-white">{svc}</td>
                          <td className="px-3 py-2.5 text-ev-text/60">{purpose}</td>
                          <td className="px-3 py-2.5 font-mono text-ev-cyan">{policy}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <P>
                  हम इन तृतीय-पक्ष सेवाओं की गोपनीयता प्रथाओं के लिए ज़िम्मेदार नहीं हैं। हम आपको उनकी संबंधित
                  गोपनीयता नीतियों की समीक्षा करने के लिए प्रोत्साहित करते हैं।
                </P>
              </Section>

              <Section id="data-retention" title="डेटा प्रतिधारण">
                <P>
                  हम व्यक्तिगत जानकारी केवल उतने समय तक रखते हैं जितना इस नीति में उल्लिखित उद्देश्यों को पूरा करने
                  के लिए आवश्यक है, जब तक कि कानून द्वारा लंबी प्रतिधारण अवधि आवश्यक न हो।
                </P>
                <UL items={[
                  "संपर्क फ़ॉर्म सबमिशन: 12 महीने तक रखे जाते हैं, फिर सुरक्षित रूप से हटा दिए जाते हैं।",
                  "एनालिटिक्स डेटा: एकत्रित और अनाम डेटा अनिश्चित काल तक रखा जा सकता है; पहचान योग्य डेटा Google Analytics की डिफ़ॉल्ट प्रतिधारण सेटिंग्स (14 महीने) के अनुसार रखा जाता है।",
                  "न्यूज़लेटर सब्सक्राइबर डेटा: तब तक रखा जाता है जब तक आप सदस्यता रद्द नहीं करते, उसके बाद 30 दिनों के भीतर हटा दिया जाता है।",
                ]} />
              </Section>

              <Section id="your-rights" title="आपके अधिकार">
                <P>
                  लागू कानून (भारत के डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम, 2023 सहित) के आधार पर, आपके पास
                  निम्नलिखित अधिकार हो सकते हैं:
                </P>
                <UL items={[
                  "आपके बारे में हमारे पास मौजूद व्यक्तिगत डेटा तक पहुँच प्राप्त करना।",
                  "गलत या अधूरे डेटा में सुधार का अनुरोध करना।",
                  "अपने व्यक्तिगत डेटा को हटाने का अनुरोध करना ('भूल जाने का अधिकार')।",
                  "जहाँ सहमति कानूनी आधार है, वहाँ डेटा प्रोसेसिंग के लिए सहमति वापस लेना।",
                  "किसी भी समय मार्केटिंग संचार से ऑप्ट आउट करना।",
                  "संबंधित डेटा संरक्षण प्राधिकरण के पास शिकायत दर्ज करना।",
                ]} />
                <P>
                  इनमें से किसी भी अधिकार का उपयोग करने के लिए, कृपया हमसे{" "}
                  <span className="font-mono text-ev-cyan">{CONTACT_EMAIL}</span> पर संपर्क करें। हम आपका
                  अनुरोध प्राप्त होने के 30 दिनों के भीतर जवाब देंगे।
                </P>
              </Section>

              <Section id="children" title="बच्चों की गोपनीयता">
                <P>
                  {SITE} 13 वर्ष से कम उम्र के बच्चों के लिए नहीं है। हम जानबूझकर बच्चों से व्यक्तिगत जानकारी
                  एकत्र नहीं करते। यदि आपको लगता है कि किसी बच्चे ने हमें व्यक्तिगत जानकारी प्रदान की है, तो कृपया
                  हमसे तुरंत{" "}
                  <span className="font-mono text-ev-cyan">{CONTACT_EMAIL}</span> पर संपर्क करें और हम ऐसी
                  जानकारी को हटाने के लिए कदम उठाएँगे।
                </P>
              </Section>

              <Section id="changes" title="इस नीति में बदलाव">
                <P>
                  हम अपनी प्रथाओं, तकनीक या लागू कानून में बदलाव को दर्शाने के लिए समय-समय पर इस गोपनीयता नीति को
                  अपडेट कर सकते हैं। जब हम महत्वपूर्ण बदलाव करते हैं, तो हम इस पृष्ठ के शीर्ष पर "प्रभावी तिथि"
                  अपडेट करेंगे और, जहाँ उपयुक्त हो, हमारी वेबसाइट पर सूचना के माध्यम से या ईमेल द्वारा आपको सूचित
                  करेंगे।
                </P>
                <P>
                  बदलाव पोस्ट होने के बाद {SITE} का आपका निरंतर उपयोग अपडेट की गई नीति की स्वीकृति माना जाएगा।
                  हम आपको समय-समय पर इस पृष्ठ की समीक्षा करने के लिए प्रोत्साहित करते हैं।
                </P>
              </Section>

              <Section id="contact" title="हमसे संपर्क करें">
                <P>
                  यदि इस गोपनीयता नीति या हमारी डेटा प्रथाओं के संबंध में आपके कोई प्रश्न, चिंता या अनुरोध हैं, तो
                  कृपया संपर्क करें:
                </P>
                <div className="bg-ev-card border border-ev-border rounded-xl p-5 space-y-2">
                  <div className="flex gap-3 text-sm"><span className="text-ev-muted w-20 shrink-0">वेबसाइट</span><span className="font-mono text-ev-cyan">{DOMAIN}</span></div>
                  <div className="flex gap-3 text-sm"><span className="text-ev-muted w-20 shrink-0">ईमेल</span><span className="font-mono text-ev-cyan">{CONTACT_EMAIL}</span></div>
                  <div className="flex gap-3 text-sm"><span className="text-ev-muted w-20 shrink-0">देश</span><span>भारत</span></div>
                </div>
              </Section>

            </article>
          </div>
        </div>
      </main>
      <Footer locale="hi" />
      <JsonLd
        data={webPageSchema("Privacy Policy", "EVSelect.in privacy policy.", "/privacy")}
      />
    </>
  );
}
