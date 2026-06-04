import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Aurora";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import AdPlaceholder from "@/components/AdPlaceholder";
import { BadgeCheck, AlertTriangle, Plug, FileCheck, IndianRupee, Gauge, TrendingUp } from "lucide-react";
import { altsFor, localizedHref } from "@/lib/i18n";
import { articleSchema, faqPageSchema, howToSchema, webPageSchema } from "@/lib/seo";
import ToolsCTA from "@/components/ToolsCTA";

const UPDATED = "जून 2026";

export const metadata: Metadata = {
  title: "भारत में EV चार्जिंग स्टेशन कैसे लगाएँ 2026 — लागत, लाइसेंस, सब्सिडी और ROI | EVSelect.in",
  description:
    "भारत में कमर्शियल/पब्लिक EV चार्जिंग स्टेशन शुरू करने की स्टेप-बाय-स्टेप 2026 गाइड: कोई लाइसेंस ज़रूरी नहीं, discom कनेक्शन प्रक्रिया, चार्जर स्टैंडर्ड (CCS2), लागत, PM E-DRIVE व राज्य सब्सिडी, और वास्तविक ROI।",
  alternates: altsFor("/ev-charging-station-setup-india", "hi"),
  openGraph: {
    title: "भारत में EV चार्जिंग स्टेशन कैसे लगाएँ (2026)",
    type: "article",
  },
};

const steps = [
  { name: "साइट और मांग का आकलन करें", text: "EV ट्रैफ़िक, रुकने का समय, दृश्यता और ग्रिड से नज़दीकी का मूल्यांकन करें। शहर ग्रिड-कवरेज लक्ष्यों का पालन करते हैं; हाईवे पर लगभग हर 20 km पर एक स्टेशन का लक्ष्य रहता है। ऐसी साइट चुनें जहाँ वाहन स्वाभाविक रूप से रुकते हैं (मॉल, हाईवे, ऑफिस, फ़्यूल स्टेशन)।" },
  { name: "ज़मीन या जगह सुनिश्चित करें", text: "मालिकाना हक, लीज़ या रेवेन्यू-शेयर मॉडल अपनाएँ। सरकारी और सार्वजनिक ज़मीन चार्जिंग के लिए ज़मीन-स्वामी एजेंसी को ₹1 प्रति kWh पर दी जाती है। समर्पित पार्किंग बे चिह्नित करें और उन्हें ढका हुआ व सुलभ रखें।" },
  { name: "अपना चार्जर मिक्स और नेटवर्क चुनें", text: "टारगेट सेगमेंट के हिसाब से AC बनाम DC और पावर रेटिंग तय करें — डेस्टिनेशन चार्जिंग के लिए Type 2 AC (7.4–22 kW), कारों और बसों के लिए CCS2 DC (50–250 kW), 2W/3W के लिए LEV DC/AC-DC कॉम्बो (12 kW तक)। BIS-प्रमाणित, टाइप-टेस्टेड चार्जर और OCPP-संगत नेटवर्क सॉफ़्टवेयर चुनें, और तय करें कि आप स्वयं संचालन करेंगे या किसी Charge Point Operator (CPO) के साथ साझेदारी करेंगे।" },
  { name: "बिजली कनेक्शन के लिए discom को आवेदन करें", text: "discom के ऑनलाइन सिंगल-विंडो के ज़रिए आवेदन जमा करें और समर्पित EV टैरिफ़ पर एक अलग मीटर्ड कनेक्शन का अनुरोध करें। discom को 3 दिन के भीतर जवाब देना होता है और कनेक्शन को 3 दिन (मेट्रो), 7 दिन (अन्य नगरपालिका) या 15 दिन (ग्रामीण) में चालू करना होता है। अपस्ट्रीम इन्फ्रास्ट्रक्चर के लिए डिमांड नोट का भुगतान करें।" },
  { name: "अपस्ट्रीम इलेक्ट्रिकल और सिविल इन्फ्रास्ट्रक्चर बनाएँ", text: "डिस्ट्रिब्यूशन ट्रांसफ़ॉर्मर, HT/LT केबलिंग, डिस्ट्रिब्यूशन बॉक्स, ब्रेकर, आइसोलेटर और अर्थिंग इंस्टॉल करें, साथ ही सिविल वर्क — माउंटिंग स्ट्रक्चर, फ़ेंसिंग, प्लेटफ़ॉर्म, वेदरप्रूफ़ शेड, बोलार्ड और साइनेज।" },
  { name: "इलेक्ट्रिकल सेफ़्टी (CEIG) मंज़ूरी लें", text: "अगर स्वीकृत लोड राज्य की सीमा (आमतौर पर लगभग 10 kW) से ज़्यादा है, तो Chief Electrical Inspector to Government (CEIG) से मंज़ूरी प्राप्त करें। कमीशनिंग से पहले निरीक्षण के लिए सिंगल-लाइन डायग्राम, लेआउट और अर्थिंग विवरण जमा करें।" },
  { name: "फ़ायर NOC प्राप्त करें", text: "ज़्यादातर राज्यों में कमर्शियल/पब्लिक चार्जिंग स्टेशनों को संचालन से पहले राज्य अग्निशमन विभाग से No-Objection Certificate की ज़रूरत होती है।" },
  { name: "नेटवर्क, पेमेंट और टैरिफ़ डिस्प्ले को एकीकृत करें", text: "चार्जर को OCPP के ज़रिए अपने सेंट्रल मैनेजमेंट सिस्टम (CSMS) से जोड़ें, RFID/ऐप/UPI पेमेंट और टाइम-ऑफ़-डे प्राइसिंग सक्षम करें, और उपयोगकर्ताओं के लिए टैरिफ़ व सर्विस चार्ज प्रमुखता से प्रदर्शित करें।" },
  { name: "नोडल एजेंसी के पास डेटा रजिस्टर करें", text: "Charge Point Operators को State Nodal Agency के ज़रिए Central Nodal Agency (BEE) के पास रजिस्टर करना होता है और तिमाही डेटा (बेची गई ऊर्जा, डाउनटाइम, सर्विस चार्ज) साझा करना होता है। PM E-DRIVE-वित्तपोषित साइटें राष्ट्रीय 'Unified Bharat eCharge' प्लेटफ़ॉर्म पर ऑनबोर्ड होती हैं।" },
  { name: "कमीशन करें और लाइव हो जाएँ", text: "स्टेशन को चालू करें, हर चार्जर और पेमेंट फ़्लो को जाँचने के लिए सॉफ़्ट लॉन्च करें, फिर निरंतर अपटाइम और फ़ॉल्ट मॉनिटरिंग के साथ पूर्ण संचालन शुरू करें।" },
];

const faqs = [
  { q: "क्या भारत में EV चार्जिंग स्टेशन खोलने के लिए लाइसेंस ज़रूरी है?", a: "नहीं। Ministry of Power के EV चार्जिंग इन्फ्रास्ट्रक्चर दिशानिर्देशों के तहत पब्लिक चार्जिंग स्टेशन लगाना एक डी-लाइसेंस्ड गतिविधि है। आपको बिजली लाइसेंस की ज़रूरत नहीं — आपको बस तकनीकी, सुरक्षा और प्रदर्शन मानकों को पूरा करना है और सामान्य इलेक्ट्रिकल (CEIG) व फ़ायर क्लियरेंस लेनी हैं।" },
  { q: "इसे कौन लगा सकता है?", a: "कोई भी व्यक्ति, व्यवसाय, हाउसिंग सोसाइटी, मॉल, होटल या ऑफिस पब्लिक चार्जिंग स्टेशन लगा सकता है, जिसमें आगंतुकों के वाहनों के लिए भी शामिल है। ध्यान दें कि सीधे PM E-DRIVE सब्सिडी आवेदक केवल सरकारी निकायों, CPSEs और राज्यों/UTs तक सीमित हैं — निजी कंपनियाँ उनकी बिडिंग के ज़रिए चुने गए Charge Point Operators के रूप में भाग लेती हैं।" },
  { q: "क्या मैं अपनी दुकान या अपार्टमेंट में कमर्शियल उपयोग के लिए चार्जिंग पॉइंट लगा सकता हूँ?", a: "हाँ। आप अपने discom से समर्पित EV टैरिफ़ वाले एक अलग मीटर्ड कनेक्शन का अनुरोध कर सकते हैं। घरों, अपार्टमेंट कॉम्प्लेक्स और दुकानों को स्पष्ट रूप से अनुमति है, और ग्रुप हाउसिंग सोसाइटियों को कम से कम 10% पार्किंग EV चार्जिंग के लिए आरक्षित रखनी होती है।" },
  { q: "EV चार्जिंग स्टेशन लगाने में कितना खर्च आता है?", a: "संकेतक 2026 रेंज: एक छोटा AC सेटअप (सोसाइटी या ऑफिस के लिए 2–3 चार्जर) लगभग ₹2–12 लाख; एक मध्यम कमर्शियल स्टेशन (एक DC फ़ास्ट चार्जर के साथ एक AC चार्जर और पूरा इन्फ्रास्ट्रक्चर) लगभग ₹15–25 लाख; और एक हाई-पावर हब (150 kW+) ₹25 लाख से ₹1 करोड़ से ज़्यादा तक जा सकता है।" },
  { q: "चार्जिंग स्टेशनों के लिए कौन सी सब्सिडी उपलब्ध है?", a: "केंद्रीय स्तर पर, PM E-DRIVE ने पब्लिक चार्जिंग के लिए ₹2,000 करोड़ निर्धारित किए हैं, जो फ़्री-एक्सेस सरकारी-परिसर साइटों के लिए लागत का 100% तक और ज़्यादातर अन्य साइटों के लिए अपस्ट्रीम इन्फ्रास्ट्रक्चर का 80% कवर करते हैं (सरकारी/CPSE/राज्य नोडल एजेंसियों के ज़रिए)। कई राज्य उपकरण लागत का लगभग 25% कैपिटल सब्सिडी जोड़ते हैं — उदाहरण के लिए Maharashtra प्रति स्टेशन ₹10 लाख तक, और Delhi की ड्राफ़्ट नीति प्रति स्लो चार्जर ₹6,000।" },
  { q: "बिजली कनेक्शन में कितना समय लगता है?", a: "2024 के दिशानिर्देशों और Electricity (Rights of Consumers) Rules के अनुसार, discom को कनेक्शन मेट्रो शहरों में 3 दिन, अन्य नगरपालिका क्षेत्रों में 7 दिन और ग्रामीण क्षेत्रों में 15 दिन के भीतर चालू करना होता है — पहाड़ी इलाकों में यह लगभग 30 दिन तक बढ़ जाता है, या जहाँ नया सब-स्टेशन या मेन्स एक्सटेंशन ज़रूरी हो वहाँ 90 दिन तक।" },
  { q: "मुझे कौन सा चार्जर और कनेक्टर टाइप लगाना चाहिए?", a: "CCS2 (IS 17017-2-3) कारों और बसों के लिए प्रमुख DC फ़ास्ट-चार्जिंग स्टैंडर्ड है (50–250 kW); Type 2 AC चार्जिंग के लिए मानक है (7.4–22 kW); और LEV DC / AC-DC कॉम्बो कनेक्टर (12 kW तक) इलेक्ट्रिक दोपहिया व तिपहिया के लिए हैं। एक पब्लिक 2W/3W/4W स्टेशन में कम से कम 7.4 kW क्षमता होनी चाहिए।" },
  { q: "मुझे कौन सा बिजली टैरिफ़ देना होगा?", a: "चार्जिंग स्टेशनों को एक रियायती सिंगल-पार्ट EV टैरिफ़ मिलता है जो दिशानिर्देशों के तहत Average Cost of Supply से ज़्यादा नहीं हो सकता, सोलर घंटों के दौरान कम दरों (0.7×) और नॉन-सोलर घंटों के दौरान ज़्यादा दरों (1.3×) के साथ। ज़्यादातर राज्यों में प्रभावी प्रति-यूनिट लागत आमतौर पर लगभग ₹5–6.50/kWh रहती है।" },
  { q: "क्या चार्जिंग स्टेशन चलाना लाभदायक है?", a: "हो सकता है, लेकिन आज औसत उपयोग अभी भी कम है (लगभग 5%)। उद्योग के अनुमान बताते हैं कि अच्छे स्थानों पर 18–36 महीने में पेबैक होता है, और ब्रेक-ईवन के लिए आमतौर पर लगभग 10–12% उपयोग ज़रूरी होता है। इन्हें संकेतक मानें — वास्तविक रिटर्न काफ़ी हद तक स्थान, फुटफॉल और बिजली लागत पर निर्भर करता है।" },
  { q: "लाइव होने से पहले मुझे कौन सी मंज़ूरियाँ चाहिए?", a: "EV-टैरिफ़ मीटर के साथ discom लोड स्वीकृति, जहाँ लोड राज्य की सीमा से ज़्यादा हो वहाँ CEIG (इलेक्ट्रिकल इंस्पेक्टर) मंज़ूरी, कमर्शियल साइटों के लिए फ़ायर NOC, टाइप-टेस्टेड BIS-संगत चार्जर, और राज्य व केंद्रीय नोडल एजेंसियों के पास डेटा रजिस्ट्रेशन।" },
];

export default function ChargingStationSetupPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden border-b border-ev-border/40">
          <Aurora variant="dual" />
          <div className="relative mx-auto max-w-4xl px-4 pb-12 pt-12 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: "लर्न", path: "/ev-guides" },
                { name: "EV चार्जिंग स्टेशन कैसे लगाएँ", path: "/ev-charging-station-setup-india" },
              ]}
              homeName="होम"
              homeHref="/hi"
              className="mb-6"
            />
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-brand">
              <Plug className="h-3 w-3" /> Charging Business · अपडेटेड {UPDATED}
            </p>
            <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl text-balance">
              भारत में कमर्शियल EV चार्जिंग स्टेशन कैसे लगाएँ <span className="text-gradient-brand">(2026)</span>
            </h1>
            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-ev-text/60 sm:text-lg">
              व्यवसायों और ज़मीन-मालिकों के लिए एक संपूर्ण, तकनीकी-पर-सहज प्लेबुक: नियम, discom
              प्रक्रिया, चार्जर स्टैंडर्ड, वास्तविक लागत, वे सब्सिडियाँ जो आप क्लेम कर सकते हैं, और
              रिटर्न पर एक ईमानदार नज़र।
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <article className="prose-ev max-w-none">
            <div className="not-prose mb-10 rounded-2xl border border-brand/25 bg-ev-card p-6">
              <p className="mb-3 flex items-center gap-2 font-display text-sm font-bold text-white">
                <BadgeCheck className="h-4 w-4 text-brand" /> 30-सेकंड का सारांश
              </p>
              <ul className="space-y-2 font-body text-sm leading-relaxed text-ev-text/75">
                <li>• <strong className="text-white">कोई लाइसेंस ज़रूरी नहीं</strong> — पब्लिक चार्जिंग एक डी-लाइसेंस्ड गतिविधि है। कोई भी इसे लगा सकता है।</li>
                <li>• आपको एक <strong className="text-white">अलग EV टैरिफ़</strong> और एक तेज़, समयबद्ध discom कनेक्शन मिलता है (3–15 दिन)।</li>
                <li>• सामान्य लागत: <strong className="text-white">₹2–12 लाख</strong> (छोटा AC) से <strong className="text-white">₹15–25 लाख</strong> (मध्यम DC स्टेशन)।</li>
                <li>• सब्सिडियाँ: योग्य साइटों के लिए <strong className="text-white">PM E-DRIVE</strong> (80–100% तक) + <strong className="text-white">~25% राज्य कैपिटल सब्सिडी</strong>।</li>
                <li>• सही स्थान पर लाभदायक, लेकिन आज का औसत उपयोग कम है — सावधानी से योजना बनाएँ।</li>
              </ul>
            </div>

            <h2 className="flex items-center gap-2"><FileCheck className="h-5 w-5 text-brand" /> नियम: लाइसेंसिंग, कौन लगा सकता है, और टैरिफ़</h2>
            <p>
              सबसे अहम बात: <strong>भारत में पब्लिक EV चार्जिंग स्टेशन चलाने के लिए आपको लाइसेंस की
              ज़रूरत नहीं है।</strong> Ministry of Power के <em>Guidelines for Installation and
              Operation of Electric Vehicle Charging Infrastructure-2024</em> (नवीनतम समेकित दिशानिर्देश,
              सितंबर 2024 में अधिसूचित) के तहत, पब्लिक चार्जिंग एक स्पष्ट रूप से <strong>डी-लाइसेंस्ड
              गतिविधि</strong> है। कोई भी व्यक्ति, कंपनी, हाउसिंग सोसाइटी, मॉल, होटल या ऑफिस इसे लगा
              सकता है, बशर्ते वह तकनीकी और सुरक्षा मानकों को पूरा करे।
            </p>
            <p>
              ऑपरेटर एक <strong>समर्पित EV टैरिफ़ पर अलग मीटर्ड कनेक्शन</strong> के हकदार हैं।
              वह टैरिफ़ Average Cost of Supply पर सीमित एक सिंगल-पार्ट टैरिफ़ है, जिसमें सोलर घंटों के
              दौरान सस्ती बिजली (0.7×) और नॉन-सोलर घंटों के दौरान महँगी (1.3×) रहती है। discom को
              कनेक्शन &quot;as-and-when&quot; आधार पर <strong>3 दिन (मेट्रो), 7 दिन (अन्य नगरपालिका) या
              15 दिन (ग्रामीण)</strong> में देना होता है — पहाड़ी इलाकों में ~30 दिन तक, या जहाँ नया
              सब-स्टेशन ज़रूरी हो वहाँ 90 दिन। सार्वजनिक/सरकारी ज़मीन चार्जिंग के लिए ज़मीन-स्वामी
              एजेंसी को मात्र <strong>₹1 प्रति kWh</strong> पर दी जाती है।
            </p>

            <h2 className="flex items-center gap-2"><Gauge className="h-5 w-5 text-brand" /> तकनीकी मानक और कनेक्टर</h2>
            <p>जिन वाहनों की सेवा करनी है उनके हिसाब से चार्जर चुनें। 2026 में भारत में जो मानक मायने रखते हैं:</p>
            <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-ev-border">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-ev-surface/60 font-mono text-[11px] uppercase tracking-wider text-ev-muted">
                    <th className="px-4 py-3">स्टैंडर्ड</th>
                    <th className="px-4 py-3">टाइप</th>
                    <th className="px-4 py-3">सामान्य पावर</th>
                    <th className="px-4 py-3">उपयोग</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ev-border/60">
                  {[
                    ["Type 2 AC", "AC", "3.3 / 7.4 / 11 / 22 kW", "डेस्टिनेशन / स्लो चार्जिंग"],
                    ["CCS2 (IS 17017-2-3)", "DC fast", "50–250 kW", "कारें और बसें — प्रमुख स्टैंडर्ड"],
                    ["LEV DC / AC-DC combo", "DC / combo", "12 kW तक", "इलेक्ट्रिक 2W और 3W"],
                    ["Bharat AC-001 / DC-001", "AC / DC", "~15 kW तक", "पुराने फ़्लीट (काफ़ी हद तक प्रतिस्थापित)"],
                  ].map((r) => (
                    <tr key={r[0]}>
                      <td className="px-4 py-3 font-display font-bold text-white">{r[0]}</td>
                      <td className="px-4 py-3 font-body text-ev-text/75">{r[1]}</td>
                      <td className="px-4 py-3 font-body text-ev-text/75">{r[2]}</td>
                      <td className="px-4 py-3 font-body text-ev-text/75">{r[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              2W/3W/4W की सेवा करने वाले पब्लिक स्टेशन में कम से कम <strong>7.4 kW</strong> क्षमता होनी
              चाहिए। हेवी-ड्यूटी EVs (ट्रक/बस) के स्टेशनों को कम से कम दो 250 kW यूनिट, या एक 500 kW
              ड्यूल-गन चार्जर चाहिए। हर चार्जर मॉडल को किसी मान्यता-प्राप्त लैब द्वारा टाइप-टेस्टेड होना
              चाहिए, और साइटों को लाइटनिंग/सर्ज प्रोटेक्शन, फ़ायर प्रोटेक्शन और वेदरप्रूफ़ साइटिंग की
              ज़रूरत होती है।
            </p>

            <AdPlaceholder format="leaderboard" slot="7777777788" className="my-10" />

            <h2>स्टेप-बाय-स्टेप: आइडिया से लेकर लाइव होने तक</h2>
            <ol className="not-prose space-y-4">
              {steps.map((s, i) => (
                <li key={s.name} id={`step-${i + 1}`} className="flex gap-4 rounded-2xl border border-ev-border bg-ev-card p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-gradient font-display text-sm font-bold text-ev-bg">{i + 1}</span>
                  <div>
                    <p className="font-display text-sm font-bold text-white">{s.name}</p>
                    <p className="mt-1 font-body text-sm leading-relaxed text-ev-text/70">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h2 className="flex items-center gap-2"><IndianRupee className="h-5 w-5 text-brand" /> लागत कितनी है (2026, संकेतक)</h2>
            <p>हार्डवेयर और इन्फ्रास्ट्रक्चर की कीमतें वेंडर और पावर रेटिंग के अनुसार बदलती हैं। संकेतक 2026 रेंज:</p>
            <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-ev-border">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-ev-surface/60 font-mono text-[11px] uppercase tracking-wider text-ev-muted">
                    <th className="px-4 py-3">मद</th>
                    <th className="px-4 py-3">संकेतक लागत</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ev-border/60">
                  {[
                    ["Type 2 AC चार्जर (7.4–22 kW)", "₹35,000 – ₹1.5 लाख"],
                    ["DC फ़ास्ट चार्जर (30–60 kW)", "₹8 – 15 लाख"],
                    ["DC फ़ास्ट चार्जर (120–240 kW)", "₹25 लाख और अधिक"],
                    ["समर्पित ट्रांसफ़ॉर्मर", "₹2 – 5 लाख"],
                    ["सिविल वर्क (शेड, फ़्लोरिंग, ब्रांडिंग)", "₹1 – 3 लाख"],
                    ["नेटवर्क/CSMS सॉफ़्टवेयर", "₹20,000 – ₹1 लाख"],
                    ["छोटा AC स्टेशन (सोसाइटी/ऑफिस)", "₹2 – 12 लाख कुल"],
                    ["मध्यम कमर्शियल स्टेशन (DC + AC + इन्फ्रा)", "₹15 – 25 लाख कुल"],
                    ["हाई-पावर हब (150 kW+)", "₹25 लाख – ₹1 करोड़+"],
                  ].map((r) => (
                    <tr key={r[0]}>
                      <td className="px-4 py-3 font-body text-ev-text/80">{r[0]}</td>
                      <td className="px-4 py-3 font-mono text-white">{r[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-ev-muted">
              संचालन लागत में बिजली (~₹5–6.50/kWh EV टैरिफ़ पर), किराया/रेवेन्यू-शेयर, रखरखाव
              (AMC), नेटवर्क/SaaS फ़ीस और पेमेंट-गेटवे चार्ज जुड़ते हैं।
            </p>

            <h2>सब्सिडी और सहायता जो आप क्लेम कर सकते हैं</h2>
            <p>
              <strong>PM E-DRIVE</strong> पब्लिक चार्जिंग के लिए <strong>₹2,000 करोड़</strong> निर्धारित
              करता है, जिसका लक्ष्य लगभग 72,000 चार्जर हैं। सहायता स्तरबद्ध है: फ़्री-एक्सेस
              सरकारी-परिसर साइटों (Category A) के लिए लागत का <strong>100%</strong> तक, फ़्यूल स्टेशन और
              ट्रांसपोर्ट हब जैसी सरकारी/PSU साइटों (Category B) के लिए <strong>80% अपस्ट्रीम + 70%
              चार्जर</strong>, और ज़्यादातर अन्य कमर्शियल साइटों (Category C) के लिए <strong>80%
              अपस्ट्रीम इन्फ्रास्ट्रक्चर</strong>। ध्यान दें कि सीधे सब्सिडी आवेदक सरकारी निकाय, CPSEs
              और राज्य हैं — निजी ऑपरेटर आमतौर पर इन्हीं निकायों द्वारा चुने गए CPOs के रूप में भाग
              लेते हैं।
            </p>
            <p>
              इसके अलावा, कई <strong>राज्य उपकरण लागत का लगभग 25% कैपिटल सब्सिडी देते हैं</strong>।
              Maharashtra की 2025 नीति पहले 250 कमर्शियल स्टेशनों के लिए प्रति स्टेशन ₹10 लाख तक देती है;
              Delhi की ड्राफ़्ट नीति प्रति स्लो चार्जर ₹6,000 प्रस्तावित करती है; Gujarat, Karnataka,
              Telangana और Kerala में मिलती-जुलती योजनाएँ चलती हैं। अपने राज्य की मौजूदा नीति में सटीक
              सीमा की पुष्टि करें।
            </p>
            <p className="not-prose flex items-start gap-2 rounded-xl border border-amber-400/30 bg-amber-400/5 p-4 font-body text-sm text-ev-text/75">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
              <span>सब्सिडी श्रेणियाँ, सीमाएँ और PM E-DRIVE टाइमलाइन आधिकारिक दिशानिर्देशों द्वारा तय की जाती हैं जिन्हें समय-समय पर संशोधित किया जाता है — पूँजी लगाने से पहले अपनी State Nodal Agency से मौजूदा शर्तों की पुष्टि करें।</span>
            </p>

            <h2 className="flex items-center gap-2"><TrendingUp className="h-5 w-5 text-brand" /> रेवेन्यू मॉडल और वास्तविक ROI</h2>
            <p>
              ऑपरेटर मुख्य रूप से एक <strong>प्रति-kWh सर्विस फ़ीस</strong> कमाते हैं — रियायती EV
              टैरिफ़ (~₹5–6.50/kWh) पर बिजली खरीदकर और चार्जिंग को लगभग ₹12–18/kWh पर बेचकर, जिससे
              फ़िक्स्ड लागत से पहले लगभग ₹5–12/kWh का ग्रॉस मार्जिन बनता है। अतिरिक्त रेवेन्यू
              सब्सक्रिप्शन, टाइम-ऑफ़-डे प्राइसिंग, विज्ञापन और रिटेल फुटफॉल से आ सकता है।
            </p>
            <p>
              रिटर्न के मामले में वास्तविक रहें। भारत में औसत चार्जर उपयोग अभी भी कम है (लगभग 5%), और
              ब्रेक-ईवन के लिए आमतौर पर लगभग 10–12% उपयोग ज़रूरी होता है। ट्रेड सूत्र अच्छे स्थानों
              (हाईवे, फ़्लीट डिपो, हाई-फुटफॉल रिटेल) पर <strong>18–36 महीने के पेबैक</strong> का हवाला
              देते हैं, जिसमें अच्छी तरह चलने वाले स्टेशनों के लिए लगभग 15–25% नेट मार्जिन रहता है। ये
              बेस्ट-केस ऑपरेटर अनुमान हैं — आपका वास्तविक रिटर्न स्थान, फुटफॉल और बिजली लागत पर निर्भर
              करता है, इसलिए सावधानी से मॉडल बनाएँ।
            </p>

            <h2>अक्सर पूछे जाने वाले सवाल</h2>
            <div className="not-prose space-y-3">
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

            <ToolsCTA locale="hi" tools={["cost", "compare", "range"]} className="not-prose my-8" />

            <h2>संबंधित</h2>
            <p>
              देखें कि आपके भावी ग्राहक कौन सी EVs चला रहे हैं —{" "}
              <Link href={localizedHref("/catalog", "hi")}>EV कैटलॉग</Link> में, चार्जिंग की बुनियादी बातें{" "}
              <Link href={localizedHref("/blog/ev-charging-infrastructure-india", "hi")}>भारत की चार्जिंग इन्फ्रास्ट्रक्चर गाइड</Link>{" "}
              में सीखें और नवीनतम नेटवर्क आँकड़े{" "}
              <Link href={localizedHref("/blog/india-ev-charging-network-2026", "hi")}>भारत का चार्जिंग नेटवर्क 30,000 स्टेशनों के करीब</Link> में पढ़ें।
              खुद EV खरीद रहे हैं? देखें{" "}
              <Link href={localizedHref("/ev-subsidies-india", "hi")}>EV सब्सिडी और प्रोत्साहन गाइड</Link>।
            </p>

            <h2>स्रोत और अस्वीकरण</h2>
            <p className="text-sm text-ev-muted">
              प्राथमिक स्रोतों में{" "}
              <a href="https://pmedrive.heavyindustries.gov.in/" target="_blank" rel="noopener noreferrer">PM E-DRIVE पोर्टल</a>,
              Ministry of Power / BEE EV चार्जिंग इन्फ्रास्ट्रक्चर दिशानिर्देश (2024), PIB रिलीज़ और
              Electricity (Rights of Consumers) Rules शामिल हैं। हार्डवेयर कीमतें, उपयोग और ROI आँकड़े
              संकेतक उद्योग अनुमान हैं और बदल सकते हैं। यह पेज सामान्य जानकारी है, वित्तीय, कानूनी या
              इंजीनियरिंग सलाह नहीं — निवेश से पहले अपने discom, State Nodal Agency और एक लाइसेंस्ड
              इलेक्ट्रिकल कॉन्ट्रैक्टर से मौजूदा कोटेशन प्राप्त करें और नियामक आवश्यकताओं की पुष्टि करें।
              अंतिम समीक्षा {UPDATED}।
            </p>
          </article>
        </div>
      </main>
      <Footer locale="hi" />
      <JsonLd
        data={[
          webPageSchema(
            "भारत में EV चार्जिंग स्टेशन कैसे लगाएँ (2026)",
            "भारत में कमर्शियल EV चार्जिंग स्टेशन के लिए लाइसेंसिंग, discom प्रक्रिया, चार्जर स्टैंडर्ड, लागत, सब्सिडी और ROI।",
            "/ev-charging-station-setup-india"
          ),
          howToSchema({
            name: "भारत में कमर्शियल EV चार्जिंग स्टेशन कैसे लगाएँ",
            description: "भारत में साइट चयन से लेकर लाइव होने तक, पब्लिक/कमर्शियल EV चार्जिंग स्टेशन खोलने की स्टेप-बाय-स्टेप प्रक्रिया।",
            path: "/ev-charging-station-setup-india",
            totalTime: "P30D",
            steps: steps.map((s) => ({ name: s.name, text: s.text })),
          }),
          articleSchema({
            title: "भारत में कमर्शियल EV चार्जिंग स्टेशन कैसे लगाएँ (2026)",
            description: "नियम, discom प्रक्रिया, चार्जर स्टैंडर्ड, लागत, PM E-DRIVE व राज्य सब्सिडी और वास्तविक ROI।",
            path: "/ev-charging-station-setup-india",
            section: "Charging",
          }),
          faqPageSchema(faqs),
        ]}
      />
    </>
  );
}
