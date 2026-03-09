import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Personal styling, wardrobe audits, shopping accompaniment, and virtual styling services in Punta Gorda, Sarasota, and Naples, FL. Elevate your image with J.Style.",
};

const services = [
  {
    number: "01",
    title: "Personal Styling Session",
    description:
      "A deeply personalized one-on-one styling experience built entirely around your lifestyle, body, goals, and aesthetic. We begin with an in-depth consultation to understand how you live, how you want to be perceived, and where you want to go — then translate that into a wardrobe that works for you, not against you.",
    includes: [
      "Style assessment & lifestyle consultation",
      "Body type and color analysis",
      "Outfit curation from your existing wardrobe",
      "Look book with photography references",
      "Ongoing email support after your session",
    ],
    ideal: "Ideal for: Women seeking a full style reset or a refined, intentional look.",
  },
  {
    number: "02",
    title: "Wardrobe Audit",
    description:
      "A thorough, compassionate edit of everything in your closet. Together we go piece by piece, identifying what truly serves you, what needs to be released, and what gaps need to be filled. You'll finish with a streamlined, purposeful wardrobe — and the clarity to maintain it.",
    includes: [
      "Full closet assessment and edit",
      "Identification of wardrobe gaps",
      "Organization system recommendations",
      "Donation and consignment guidance",
      "Shopping priority list",
    ],
    ideal: "Ideal for: Women who feel overwhelmed by their closet or stuck in a style rut.",
  },
  {
    number: "03",
    title: "Shopping Accompaniment",
    description:
      "Skip the decision fatigue and frustration of shopping alone. Johana accompanies you in person — navigating stores, curating options, and ensuring every purchase is intentional, flattering, and aligned with your style identity. You leave with pieces you'll actually wear.",
    includes: [
      "Pre-shopping planning session",
      "In-store guidance and curation",
      "Fit and proportion coaching",
      "Budget management support",
      "Post-shopping integration session",
    ],
    ideal: "Ideal for: Women who struggle to shop efficiently or confidently.",
  },
  {
    number: "04",
    title: "Virtual Styling",
    description:
      "The complete J.Style experience — delivered remotely. Perfect for clients outside of Southwest Florida or those who prefer the flexibility of a virtual format. Through video consultations, digital look books, and curated shopping lists, you receive the same level of expertise and attention from anywhere in the world.",
    includes: [
      "Video-based style consultation",
      "Digital wardrobe audit via photo submission",
      "Curated online shopping recommendations",
      "Digital look book delivery",
      "Follow-up check-in session",
    ],
    ideal: "Ideal for: Remote clients or those who prefer flexibility.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="pt-40 pb-20 text-center" style={{ backgroundColor: "#6D2B3D" }}>
        <div className="max-w-2xl mx-auto px-6 flex flex-col items-center gap-4">
          <p className="text-xs tracking-widest uppercase" style={{ color: "#C9A84C", fontFamily: "var(--font-raleway), sans-serif" }}>
            Services
          </p>
          <h1 className="text-5xl md:text-6xl" style={{ fontFamily: "var(--font-cormorant), serif", color: "#FBF7F0", fontWeight: 300 }}>
            What I Offer
          </h1>
          <div className="gold-divider mt-4" />
          <p className="text-sm leading-relaxed opacity-70 mt-4" style={{ color: "#FBF7F0", fontFamily: "var(--font-raleway), sans-serif" }}>
            Each service is tailored to where you are and where you want to go. Serving Punta Gorda, Sarasota, and Naples, FL.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="section-padding" style={{ backgroundColor: "#FBF7F0" }}>
        <div className="max-w-5xl mx-auto px-6 flex flex-col gap-20">
          {services.map((s, i) => (
            <div
              key={s.number}
              className={`grid md:grid-cols-2 gap-12 items-start ${i % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              {/* Left: text */}
              <div className="flex flex-col gap-5">
                <span
                  className="text-6xl leading-none"
                  style={{ fontFamily: "var(--font-cormorant), serif", color: "#E8D5A3", fontWeight: 300 }}
                >
                  {s.number}
                </span>
                <h2 className="text-3xl" style={{ fontFamily: "var(--font-cormorant), serif", color: "#6D2B3D" }}>
                  {s.title}
                </h2>
                <div className="w-8 h-px" style={{ backgroundColor: "#C9A84C" }} />
                <p className="text-sm leading-relaxed opacity-70" style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#1A1A1A" }}>
                  {s.description}
                </p>
                <p className="text-xs tracking-wide italic opacity-60 mt-1" style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#6D2B3D" }}>
                  {s.ideal}
                </p>
              </div>

              {/* Right: includes */}
              <div className="p-8 flex flex-col gap-4" style={{ backgroundColor: "#F5E6C8", border: "1px solid #E8D5A3" }}>
                <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#C9A84C", fontFamily: "var(--font-raleway), sans-serif" }}>
                  What&apos;s Included
                </p>
                {s.includes.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check size={14} className="mt-0.5 shrink-0" style={{ color: "#C9A84C" }} />
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#1A1A1A" }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: "#6D2B3D" }}>
        <div className="max-w-xl mx-auto px-6 flex flex-col items-center gap-6">
          <p className="text-xs tracking-widest uppercase" style={{ color: "#C9A84C", fontFamily: "var(--font-raleway), sans-serif" }}>
            Not Sure Where to Start?
          </p>
          <h2 className="text-4xl" style={{ fontFamily: "var(--font-cormorant), serif", color: "#FBF7F0" }}>
            Let&apos;s find the right fit together.
          </h2>
          <p className="text-sm leading-relaxed opacity-70" style={{ color: "#FBF7F0", fontFamily: "var(--font-raleway), sans-serif" }}>
            Book a complimentary discovery call and we&apos;ll figure out exactly what you need.
          </p>
          <Link
            href="https://calendly.com/jstyle-placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase px-8 py-4 transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "#C9A84C", color: "#FBF7F0", fontFamily: "var(--font-raleway), sans-serif" }}
          >
            Book a Free Call <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
