import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import { faqPageSchema } from "@/lib/seo";
import { altsFor } from "@/lib/i18n";

const faqs = [
  {
    q: "Do electric cars need special tyres in India?",
    a: "Not strictly, but it helps. Any tyre with a load index high enough for your EV's kerb weight is safe to fit. Purpose-built EV tyres add reinforced sidewalls, a higher load rating, low-rolling-resistance compounds and acoustic foam — which improve range, ride quality and cabin noise, but a correctly rated standard tyre will still get you through your service life safely.",
  },
  {
    q: "Why do EV tyres wear out faster?",
    a: "Two reasons: EVs are 200–300 kg heavier than an equivalent petrol car because of the battery pack, and electric motors deliver full torque instantly from a standstill. Together, extra weight and instant torque put more stress on the contact patch, so EV tyres typically wear about 20–30% faster than on a comparable petrol car.",
  },
  {
    q: "How much range can low-rolling-resistance tyres add?",
    a: "Independent tests from tyre makers show gains of roughly 5–12% in efficiency from switching to a dedicated low-rolling-resistance EV tyre, which on a 400 km-range car works out to an extra 20–45 km per full charge. The effect is real but modest — it will not replace a discount you already applied for real-world range.",
  },
  {
    q: "How often should I rotate or replace tyres on my EV?",
    a: "Rotate every 8,000–10,000 km to even out the front-heavier wear pattern, and budget for replacement anywhere from 25,000 km (aggressive city driving on standard tyres) to 45,000–50,000 km (highway-heavy use on EV-rated tyres). Check tread depth and sidewall condition at every service regardless of the odometer figure.",
  },
  {
    q: "Is tyre pressure more important on an EV?",
    a: "Yes. Under-inflated tyres increase rolling resistance and quietly cut into your range, on top of the usual safety and wear risks. Check pressure monthly against the value on the door-jamb sticker, which is usually set a notch higher than on a petrol car to handle the added weight.",
  },
  {
    q: "Which tyre brands sell EV-specific options in India?",
    a: "CEAT (EnergyDrive EV), MRF (higher-load-index Zapper variants), Apollo, JK Tyre and global brands like Michelin (e.Primacy) and Continental (EcoContact) all sell tyres designed or rated for EV use in the Indian market, sold both as OEM fitment and in the replacement aftermarket.",
  },
];

export const metadata: Metadata = {
  title: "EV Tyres in India (2026): Do Electric Cars Need Special Tyres?",
  description:
    "Do electric cars need special tyres in India? A 2026 guide to EV tyre technology — why EVs wear tyres faster, what higher load index and low rolling resistance actually mean, top CEAT, MRF, Apollo and Michelin options, and when to replace.",
  alternates: altsFor("/blog/ev-tyres-india", "en"),
  openGraph: {
    title: "EV Tyres in India (2026): Do Electric Cars Need Special Tyres?",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="ev-tyres-india">
      <p>
        Most new EV owners in India think about the battery, the charger and the range figure —
        and then, a year or so in, get a small shock at the tyre shop. Electric cars chew through
        tyres noticeably faster than the petrol car they replaced, and the reason has nothing to do
        with bad luck. It comes down to two things every EV has: extra weight from the battery pack,
        and instant torque from the electric motor. Understanding what that means for the rubber
        under your car — and whether you actually need to buy something different — saves both
        money and a nasty surprise on a highway drive.
      </p>

      <h2>Why EVs are harder on tyres than petrol cars</h2>
      <p>
        A mid-size electric SUV typically weighs 200–300 kg more than its petrol equivalent, almost
        entirely because of the battery pack sitting low in the floor. That extra mass presses the
        contact patch into the road harder with every corner and every stop. Add to that an electric
        motor that delivers 100% of its torque the instant you touch the accelerator — with no gear
        change or turbo lag to soften it — and you get a car that is genuinely tougher on its front
        tyres in particular. Between the weight and the torque, EV tyres in India commonly wear about
        20–30% faster than on a comparable petrol car, a figure that shows up consistently across
        owner reports and workshop data. It is one of the few running costs where an EV actually
        costs <em>more</em> than petrol, which is worth knowing before you total up the savings in our{" "}
        <Link href="/blog/ev-maintenance-cost-india">EV maintenance cost guide</Link>.
      </p>

      <h2>What "EV tyre" technology actually means</h2>
      <p>
        Tyre makers did not invent a new wheel for EVs — they adapted three things about a normal
        tyre to suit how electric cars behave on the road:
      </p>
      <ul>
        <li>
          <strong>Higher load index (HL / XL rating):</strong> reinforced casings and sidewalls built
          to carry the extra battery weight without the tyre flexing or overheating under load.
        </li>
        <li>
          <strong>Low rolling resistance compounds:</strong> tread rubber and tread patterns tuned to
          waste less energy as the tyre flexes, which translates directly into extra kilometres per
          charge.
        </li>
        <li>
          <strong>Acoustic foam liners:</strong> a layer of foam inside the tyre that absorbs road
          noise, added because EVs have no engine sound to mask it — a quiet cabin makes tyre roar
          far more noticeable than it ever was in a petrol car.
        </li>
      </ul>
      <p>
        None of this is exotic technology; it is mostly a re-tuned version of tyre engineering that
        already existed. But together, these three changes are what separates a tyre marketed for
        EVs from a standard passenger-car tyre of the same size.
      </p>

      <h2>Do you actually need to buy "EV-specific" tyres?</h2>
      <p>
        Honestly, not always. What matters most is that the tyre's load index and speed rating meet
        or exceed what your EV's manufacturer specifies — check the door-jamb sticker or owner's
        manual, not the tyre that happens to be on sale. A correctly rated standard tyre is safe and
        legal to fit. Where EV-specific tyres earn their price premium is in the details: a few
        percent more range from lower rolling resistance, a quieter cabin, and — because they are
        built for the load — often slightly more even wear over the tyre's life. If you drive mostly
        in the city at moderate speed, the difference is marginal. If you do a lot of fast highway
        driving, where rolling resistance and heat buildup matter more, a dedicated EV tyre is the
        better buy.
      </p>

      <h2>How much range do low-rolling-resistance tyres actually add?</h2>
      <p>
        Tyre-maker tests typically show a 5–12% efficiency gain from switching to a dedicated
        low-rolling-resistance EV tyre compared with a standard equivalent. On a car rated for 400 km,
        that works out to roughly 20–45 extra kilometres per full charge — genuinely useful on a long
        drive, but not a substitute for realistic range planning. If you want to understand how much
        of your car's brochure range you can expect to see day to day before tyres even enter the
        picture, our guide to{" "}
        <Link href="/blog/real-world-range-vs-arai-india">real-world range vs ARAI claims</Link>{" "}
        covers the bigger factors — heat, speed and AC use — that move the needle far more than tyre
        choice alone.
      </p>

      <h2>EV tyre options available in India</h2>
      <p>
        The Indian tyre market has caught up quickly with EV demand, and most major manufacturers now
        sell tyres pitched specifically at electric cars, sold both as original equipment and in the
        replacement aftermarket.
      </p>
      <table>
        <thead>
          <tr>
            <th>Brand &amp; range</th>
            <th>What it focuses on</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CEAT EnergyDrive EV</td>
            <td>Low rolling resistance and reinforced construction built for Indian EVs</td>
          </tr>
          <tr>
            <td>MRF Zapper (higher load-index variants)</td>
            <td>Widely available OEM and replacement fitment, tuned load ratings for EV weight</td>
          </tr>
          <tr>
            <td>Apollo</td>
            <td>EV-suitable ranges with reinforced sidewalls for the segment</td>
          </tr>
          <tr>
            <td>JK Tyre</td>
            <td>EV-rated options aimed at the growing replacement market</td>
          </tr>
          <tr>
            <td>Michelin e.Primacy</td>
            <td>Premium low-rolling-resistance tyre with a strong efficiency and comfort focus</td>
          </tr>
          <tr>
            <td>Continental EcoContact</td>
            <td>Class-leading rolling resistance, aimed at maximising range</td>
          </tr>
        </tbody>
      </table>
      <p>
        Prices vary widely by size and brand, so get quotes for your specific tyre size rather than
        assuming a flat premium — on some sizes the EV-rated option costs barely more than the
        standard equivalent, while premium global brands sit noticeably higher.
      </p>

      <h2>Tyre pressure: a small habit that protects both range and rubber</h2>
      <p>
        Under-inflated tyres are a double loss on an EV — they increase rolling resistance, which
        quietly eats into your range, and they wear unevenly, shortening tyre life on top of it. Most
        EVs specify a slightly higher pressure than an equivalent petrol car to compensate for the
        extra weight, so always check the number on the door-jamb sticker rather than assuming a
        generic value. A monthly pressure check, ideally done when the tyres are cold, is one of the
        cheapest things you can do to protect both your running costs and your safety margin.
      </p>

      <h2>Rotation, replacement and what to budget for</h2>
      <p>
        Rotate tyres every 8,000–10,000 km to spread out the front-heavier wear that instant torque
        causes, and get tread depth checked at every service rather than waiting for a visible
        problem. In practice, expect a full set to last anywhere from around 25,000 km under hard
        city driving on standard tyres to 45,000–50,000 km on EV-rated tyres with a gentler driving
        style and regular rotation. Because tyres are one of the few line items where an EV can cost
        more than petrol, it is worth factoring into your running-cost math — our{" "}
        <Link href="/blog/cost-of-owning-an-electric-car-in-india">
          complete guide to the cost of owning an electric car in India
        </Link>{" "}
        puts this alongside charging, servicing, insurance and resale so you see the full picture,
        and the{" "}
        <Link href="/ev-calculators/ev-vs-petrol-cost-calculator">EV vs petrol cost calculator</Link>{" "}
        lets you model your own numbers.
      </p>

      <h2>EV tyres — frequently asked questions</h2>
      <FaqAccordion items={faqs} className="my-6" />

      <p>
        Tyres are a small line item that quietly shapes three things at once — your range, your ride
        quality and your running costs — and they are one of the easiest things to get right once you
        know what to look for. Check the load index, keep the pressure correct, and rotate on
        schedule, and the extra wear an EV puts on its tyres stops being a surprise and just becomes
        routine maintenance. If you are still shortlisting your first electric car, browse the{" "}
        <Link href="/catalog/electric-cars">electric car catalog</Link> or put two contenders head to
        head with the <Link href="/compare-electric-vehicles">EV comparison tool</Link>.
      </p>

      <JsonLd data={faqPageSchema(faqs)} />
    </ArticleShell>
  );
}
