import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { webPageSchema } from "@/lib/seo";
import type { Metadata } from "next";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  alternates: altsFor("/terms", "hi"),
  title: "उपयोग की शर्तें",
  description: "EVSelect.in की उपयोग की शर्तें — हमारे EV जानकारी और तुलना मंच के आपके उपयोग को नियंत्रित करने वाले नियम।",
};

const EFFECTIVE_DATE = "May 31, 2026";
const CONTACT_EMAIL = "akash.nigam@evselect.in";
const SITE = "EVSelect.in";
const DOMAIN = "evselect.in";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 mb-12">
      <h2 className="font-display font-bold text-white text-xl mb-5 pb-3 border-b border-ev-border/50 flex items-center gap-3">
        <span className="w-1 h-6 rounded-full bg-ev-amber inline-block shrink-0" />
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
          <span className="w-1.5 h-1.5 rounded-full bg-ev-amber mt-1.5 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const toc = [
  { id: "acceptance",      label: "शर्तों की स्वीकृति" },
  { id: "description",     label: "सेवा का विवरण" },
  { id: "permitted-use",   label: "अनुमत उपयोग" },
  { id: "prohibited",      label: "निषिद्ध आचरण" },
  { id: "ip",              label: "बौद्धिक संपदा" },
  { id: "disclaimer",      label: "वारंटी का अस्वीकरण" },
  { id: "liability",       label: "दायित्व की सीमा" },
  { id: "accuracy",        label: "जानकारी की सटीकता" },
  { id: "third-party",     label: "तृतीय-पक्ष लिंक और विज्ञापन" },
  { id: "indemnification", label: "क्षतिपूर्ति" },
  { id: "governing-law",   label: "शासी कानून" },
  { id: "changes",         label: "शर्तों में बदलाव" },
  { id: "contact",         label: "संपर्क" },
];

export default function TermsPage() {
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
              items={[{ name: "उपयोग की शर्तें", path: "/hi/terms" }]}
              className="mb-6"
            />
            <p className="text-xs font-mono text-ev-amber tracking-widest uppercase mb-3">कानूनी</p>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-white mb-4">
              उपयोग की <span style={{ background: "linear-gradient(135deg,#ffb800,#f43f5e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>शर्तें</span>
            </h1>
            <p className="text-ev-text/50 font-body text-sm">
              प्रभावी तिथि: <span className="text-ev-amber font-mono">{EFFECTIVE_DATE}</span>
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
                        className="flex items-center gap-2.5 text-xs font-body text-ev-muted hover:text-ev-amber transition-colors py-1 group"
                      >
                        <span className="font-mono text-[10px] text-ev-border group-hover:text-ev-amber w-5">
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

              <Section id="acceptance" title="शर्तों की स्वीकृति">
                <P>
                  वेबसाइट{" "}
                  <span className="font-mono text-ev-cyan">{DOMAIN}</span> ("साइट") तक पहुँचकर या उसका उपयोग
                  करके, आप इन उपयोग की शर्तों ("शर्तें") और हमारी गोपनीयता नीति से बंधे होने के लिए सहमत होते हैं।
                  ये शर्तें आपके और {SITE} के बीच एक कानूनी रूप से बाध्यकारी समझौता बनाती हैं।
                </P>
                <P>
                  यदि आप इन शर्तों से सहमत नहीं हैं, तो आपको साइट तक पहुँचना या उसका उपयोग नहीं करना चाहिए। हम
                  अनुशंसा करते हैं कि आप हमारी सेवाओं का उपयोग करने से पहले इन शर्तों को ध्यान से पढ़ें।
                </P>
              </Section>

              <Section id="description" title="सेवा का विवरण">
                <P>
                  {SITE} एक स्वतंत्र ऑनलाइन मंच है जो भारत के उपयोगकर्ताओं को सूचित EV खरीद निर्णय लेने में मदद
                  करने के लिए इलेक्ट्रिक वाहन (EV) जानकारी, विनिर्देश, तुलना टूल और संपादकीय सामग्री प्रदान करता है।
                </P>
                <P>हमारी सेवाओं में शामिल हैं, लेकिन इन्हीं तक सीमित नहीं हैं:</P>
                <UL items={[
                  "कारों, बाइक, स्कूटर और बसों को कवर करने वाला EV विनिर्देश डेटाबेस।",
                  "साथ-साथ EV तुलना टूल।",
                  "संपादकीय लेख, समीक्षाएँ और खरीद गाइड।",
                  "बैटरी तकनीक से जुड़ी शैक्षिक सामग्री।",
                  "कीमत सूची और बाज़ार जानकारी (केवल सांकेतिक)।",
                ]} />
                <P>
                  {SITE} एक स्वतंत्र मंच है और किसी भी वाहन निर्माता, डीलर या सरकारी निकाय से संबद्ध, समर्थित या
                  प्रायोजित नहीं है, जब तक कि स्पष्ट रूप से न कहा गया हो।
                </P>
              </Section>

              <Section id="permitted-use" title="अनुमत उपयोग">
                <P>आप साइट का उपयोग केवल वैध, व्यक्तिगत और गैर-व्यावसायिक उद्देश्यों के लिए कर सकते हैं। आपको इसकी अनुमति है:</P>
                <UL items={[
                  "व्यक्तिगत निर्णय लेने के लिए साइट पर मौजूद जानकारी को ब्राउज़ करना, पढ़ना और उपयोग करना।",
                  "हमारे लेखों और पृष्ठों के लिंक सोशल मीडिया पर या ईमेल के माध्यम से साझा करना।",
                  "व्यक्तिगत, गैर-व्यावसायिक संदर्भ के लिए पृष्ठों को प्रिंट या सहेजना।",
                  "अपने स्वयं के शोध के लिए हमारे तुलना टूल का उपयोग करना।",
                ]} />
              </Section>

              <Section id="prohibited" title="निषिद्ध आचरण">
                <P>आप निम्नलिखित में से किसी में भी संलग्न न होने के लिए सहमत होते हैं:</P>
                <UL items={[
                  "लिखित अनुमति के बिना व्यावसायिक उद्देश्यों के लिए हमारी सामग्री की नकल, पुनरुत्पादन या पुनर्वितरण।",
                  "साइट से थोक में डेटा निकालने के लिए स्क्रैपिंग, क्रॉलिंग या स्वचालित टूल का उपयोग।",
                  "साइट या उसके बैकएंड सिस्टम के किसी भी हिस्से तक अनधिकृत पहुँच प्राप्त करने का प्रयास।",
                  "किसी भी दुर्भावनापूर्ण कोड, वायरस या हानिकारक सामग्री को अपलोड या प्रसारित करना।",
                  "साइट का किसी भी तरह से उपयोग जो लागू भारतीय कानून या विनियमन का उल्लंघन करता हो।",
                  "EVSelect.in या इसके प्रतिनिधियों का प्रतिरूपण करना।",
                  "किसी भी ऐसी गतिविधि में संलग्न होना जो साइट के बुनियादी ढाँचे को बाधित, अधिभारित या क्षतिग्रस्त करे।",
                  "साइट की किसी भी सुरक्षा या एक्सेस-कंट्रोल सुविधा को दरकिनार करना।",
                ]} />
              </Section>

              <Section id="ip" title="बौद्धिक संपदा">
                <div className="bg-ev-card border border-ev-amber/20 rounded-xl p-5">
                  <P>
                    <strong className="text-ev-text">© {new Date().getFullYear()} {SITE}. All rights reserved.</strong>{" "}
                    इस साइट पर सभी मूल सामग्री — इसके सोर्स कोड, वेबसाइट डिज़ाइन और लेआउट, लिखित लेख और गाइड,
                    इसके विनिर्देश और तुलना डेटा के संगठन व प्रस्तुति, टूल और अन्य संपादकीय सामग्री सहित — {SITE}
                    की विशेष संपत्ति है और कॉपीराइट अधिनियम, 1957 (भारत) तथा लागू अंतरराष्ट्रीय कॉपीराइट कानून
                    (बर्न कन्वेंशन सहित) के तहत मौलिक रचना के रूप में संरक्षित है। इस कार्य का कॉपीराइट इसके निर्माण
                    के क्षण से {SITE} में निहित है।
                  </P>
                </div>
                <P>
                  {SITE} पर सभी सामग्री — टेक्स्ट, ग्राफ़िक्स, लोगो, आइकन, छवियाँ, पृष्ठ लेआउट, तुलना डेटा और
                  संपादकीय लेखों सहित लेकिन इन्हीं तक सीमित नहीं — {SITE} या इसके लाइसेंसकर्ताओं की बौद्धिक संपदा है
                  और कॉपीराइट अधिनियम, 1957 (भारत) तथा लागू अंतरराष्ट्रीय कॉपीराइट कानून के तहत संरक्षित है।
                </P>
                <P>
                  इस साइट का कोई भी हिस्सा {SITE} की पूर्व लिखित अनुमति के बिना — पूर्ण या आंशिक रूप से, किसी भी
                  माध्यम में — कॉपी, पुनरुत्पादित, पुनः प्रकाशित, स्क्रैप, मिरर, फ़्रेम, अनुकूलित, अनुवादित या अन्यथा
                  उपयोग नहीं किया जा सकता। हमारी सामग्री का अनधिकृत उपयोग, पुनरुत्पादन या वितरण टेकडाउन कार्रवाई और
                  लागू कानून के तहत उपलब्ध कानूनी उपायों का कारण बन सकता है।
                </P>
                <P>
                  आप {SITE} की स्पष्ट लिखित अनुमति के बिना हमारी सामग्री के किसी भी हिस्से को पुनरुत्पादित, वितरित,
                  संशोधित नहीं कर सकते, व्युत्पन्न कार्य नहीं बना सकते या उसका उपयोग नहीं कर सकते। लाइसेंसिंग या
                  सिंडिकेशन पूछताछ के लिए, कृपया हमसे{" "}
                  <span className="font-mono text-ev-cyan">{CONTACT_EMAIL}</span> पर संपर्क करें।
                </P>
                <P>
                  तृतीय-पक्ष निर्माताओं (जैसे Tata Motors, Ather Energy, Ola Electric) के ट्रेडमार्क, ब्रांड नाम और
                  मॉडल नाम उनके संबंधित स्वामियों के हैं। {SITE} पर उनकी उपस्थिति केवल सूचनात्मक और संपादकीय
                  उद्देश्यों के लिए है।
                </P>
              </Section>

              <Section id="disclaimer" title="वारंटी का अस्वीकरण">
                <div className="bg-ev-card border border-ev-amber/20 rounded-xl p-5 space-y-3">
                  <P>
                    साइट और इसकी सामग्री "जैसी है" और "जैसी उपलब्ध है" आधार पर किसी भी प्रकार की वारंटी के बिना,
                    चाहे व्यक्त हो या निहित, प्रदान की जाती है, जिसमें व्यापारिकता, किसी विशेष उद्देश्य के लिए
                    उपयुक्तता या गैर-उल्लंघन की वारंटी शामिल है लेकिन इन्हीं तक सीमित नहीं है।
                  </P>
                  <P>
                    {SITE} इस बात की गारंटी नहीं देता कि साइट निर्बाध, त्रुटि-रहित या वायरस व अन्य हानिकारक घटकों
                    से मुक्त होगी। हम साइट पर किसी भी जानकारी की सटीकता, पूर्णता या समयबद्धता की गारंटी नहीं देते।
                  </P>
                </div>
              </Section>

              <Section id="liability" title="दायित्व की सीमा">
                <P>
                  लागू कानून द्वारा अनुमत अधिकतम सीमा तक, {SITE} और इसके मालिक, कर्मचारी, सहयोगी और भागीदार
                  निम्नलिखित से उत्पन्न होने वाले किसी भी अप्रत्यक्ष, आकस्मिक, विशेष, परिणामी या दंडात्मक नुकसान
                  के लिए ज़िम्मेदार नहीं होंगे:
                </P>
                <UL items={[
                  "साइट का आपका उपयोग या उपयोग करने में असमर्थता।",
                  "सामग्री में कोई त्रुटि, चूक या अशुद्धि।",
                  "साइट पर पाई गई जानकारी के आधार पर लिए गए कोई भी खरीद निर्णय।",
                  "हमारे सर्वर या उसमें संग्रहीत किसी भी व्यक्तिगत जानकारी तक अनधिकृत पहुँच या उपयोग।",
                  "साइट के माध्यम से सुलभ कोई भी तृतीय-पक्ष सामग्री या लिंक।",
                ]} />
                <P>
                  इन शर्तों या साइट के आपके उपयोग से उत्पन्न किसी भी दावे के लिए आपके प्रति हमारा कुल दायित्व
                  INR 1,000 (केवल एक हज़ार भारतीय रुपये) से अधिक नहीं होगा।
                </P>
              </Section>

              <Section id="accuracy" title="जानकारी की सटीकता">
                <P>
                  {SITE} पर प्रकाशित EV विनिर्देश, कीमतें और उपलब्धता जानकारी सार्वजनिक रूप से उपलब्ध डेटा, निर्माता
                  घोषणाओं और संपादकीय शोध से प्राप्त की जाती है। हालाँकि हम सटीकता के लिए प्रयास करते हैं, यह जानकारी:
                </P>
                <UL items={[
                  "हो सकता है कि सबसे वर्तमान कीमत, विनिर्देश या उपलब्धता को न दर्शाए।",
                  "भौगोलिक क्षेत्रों, डीलरशिप या मॉडल वेरिएंट के बीच भिन्न हो सकती है।",
                  "खरीद निर्णय के एकमात्र आधार के रूप में इस पर भरोसा नहीं किया जाना चाहिए।",
                ]} />
                <P>
                  खरीदारी करने से पहले हमेशा निर्माता या अधिकृत डीलर से सीधे वर्तमान कीमत और विनिर्देशों की पुष्टि
                  करें। {SITE} इस साइट पर पाई गई जानकारी के आधार पर लिए गए निर्णयों के लिए सभी दायित्व का अस्वीकरण
                  करता है।
                </P>
              </Section>

              <Section id="third-party" title="तृतीय-पक्ष लिंक और विज्ञापन">
                <P>
                  साइट में तृतीय-पक्ष वेबसाइटों के लिंक हो सकते हैं और Google AdSense सहित तृतीय-पक्ष विज्ञापन
                  नेटवर्क द्वारा परोसे गए विज्ञापन प्रदर्शित हो सकते हैं। ये लिंक और विज्ञापन सुविधा के लिए प्रदान
                  किए जाते हैं और {SITE} द्वारा समर्थन का गठन नहीं करते।
                </P>
                <P>
                  तृतीय-पक्ष वेबसाइटों की सामग्री, गोपनीयता प्रथाओं या उपलब्धता पर हमारा कोई नियंत्रण नहीं है। किसी भी
                  तृतीय-पक्ष साइट का आपका उपयोग आपके अपने जोखिम पर है और उस साइट की शर्तों व नीतियों के अधीन है।
                </P>
                <P>
                  {SITE} पर प्रदर्शित विज्ञापन स्वचालित सिस्टम द्वारा परोसे जाते हैं। किसी विज्ञापन की उपस्थिति का
                  अर्थ विज्ञापित उत्पाद, सेवा या कंपनी की हमारी अनुशंसा या समर्थन नहीं है।
                </P>
              </Section>

              <Section id="indemnification" title="क्षतिपूर्ति">
                <P>
                  आप {SITE} और इसके मालिकों, अधिकारियों, कर्मचारियों और एजेंटों का बचाव करने, क्षतिपूर्ति करने और
                  निम्नलिखित से उत्पन्न होने वाले किसी भी दावे, नुकसान, हानि, देयता, लागत और खर्च (उचित कानूनी शुल्क
                  सहित) से हानिरहित रखने के लिए सहमत होते हैं:
                </P>
                <UL items={[
                  "इन शर्तों के उल्लंघन में साइट का आपका उपयोग।",
                  "किसी भी लागू कानून या तृतीय-पक्ष अधिकारों का आपका उल्लंघन।",
                  "कोई भी सामग्री जो आप साइट के माध्यम से सबमिट या प्रसारित करते हैं।",
                ]} />
              </Section>

              <Section id="governing-law" title="शासी कानून और विवाद समाधान">
                <P>
                  ये शर्तें भारत के कानूनों द्वारा शासित और उनके अनुसार व्याख्यायित होंगी। इन शर्तों से या उनके संबंध
                  में उत्पन्न होने वाले किसी भी विवाद को पहले लिखित सूचना के माध्यम से सौहार्दपूर्ण ढंग से हल करने का
                  प्रयास किया जाएगा।
                </P>
                <P>
                  यदि 30 दिनों के भीतर हल नहीं होता है, तो विवाद{" "}
                  <strong className="text-ev-text">नई दिल्ली, भारत</strong> के न्यायालयों के विशेष क्षेत्राधिकार के
                  अधीन होंगे।
                </P>
              </Section>

              <Section id="changes" title="इन शर्तों में बदलाव">
                <P>
                  हम किसी भी समय इन शर्तों को संशोधित करने का अधिकार सुरक्षित रखते हैं। बदलाव अपडेट की गई "प्रभावी
                  तिथि" के साथ साइट पर पोस्ट होने पर तुरंत प्रभावी होंगे। बदलाव पोस्ट होने के बाद साइट का आपका निरंतर
                  उपयोग संशोधित शर्तों की आपकी स्वीकृति माना जाएगा।
                </P>
                <P>
                  हम आपको समय-समय पर इन शर्तों की समीक्षा करने के लिए प्रोत्साहित करते हैं। महत्वपूर्ण बदलावों के लिए,
                  हम साइट पर एक बैनर के माध्यम से सूचना दे सकते हैं।
                </P>
              </Section>

              <Section id="contact" title="संपर्क">
                <P>इन शर्तों के संबंध में प्रश्नों या चिंताओं के लिए, कृपया हमसे संपर्क करें:</P>
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
        data={webPageSchema("Terms of Use", "EVSelect.in terms of use.", "/terms")}
      />
    </>
  );
}
