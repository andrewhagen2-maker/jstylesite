import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Johana",
  description:
    "Meet Johana, lifestyle and fashion consultant serving Punta Gorda, Sarasota, and Naples, FL. Learn about her philosophy, background, and approach to personal styling.",
};

export default function AboutPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section
        className="pt-40 pb-20 text-center"
        style={{ backgroundColor: "#6D2B3D" }}
      >
        <div className="max-w-2xl mx-auto px-6 flex flex-col items-center gap-4">
          <p className="text-xs tracking-widest uppercase" style={{ color: "#C9A84C", fontFamily: "var(--font-raleway), sans-serif" }}>
            About
          </p>
          <h1 className="text-5xl md:text-6xl" style={{ fontFamily: "var(--font-cormorant), serif", color: "#FBF7F0", fontWeight: 300 }}>
            The Woman Behind J.Style
          </h1>
          <div className="gold-divider mt-4" />
        </div>
      </section>

      {/* INTRO */}
      <section className="section-padding" style={{ backgroundColor: "#FBF7F0" }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <div
            className="relative h-[500px] flex items-center justify-center"
            style={{ border: "1px solid rgba(201, 168, 76, 0.5)", backgroundColor: "rgba(109,43,61,0.04)" }}
          >
            <div className="text-center">
              <div
                className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ border: "1px solid #C9A84C" }}
              >
                <span style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", color: "#C9A84C", fontSize: "28px" }}>
                  J
                </span>
              </div>
              <p className="text-xs tracking-widest uppercase opacity-40" style={{ color: "#6D2B3D", fontFamily: "var(--font-raleway), sans-serif" }}>
                Portrait of Johana
              </p>
            </div>
            <span className="absolute top-0 left-0 w-10 h-10 border-t border-l" style={{ borderColor: "#C9A84C" }} />
            <span className="absolute bottom-0 right-0 w-10 h-10 border-b border-r" style={{ borderColor: "#C9A84C" }} />
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-6">
            <p className="text-xs tracking-widest uppercase" style={{ color: "#C9A84C", fontFamily: "var(--font-raleway), sans-serif" }}>
              My Story
            </p>
            <h2 className="text-4xl" style={{ fontFamily: "var(--font-cormorant), serif", color: "#6D2B3D" }}>
              Johana
            </h2>
            <p className="text-sm leading-relaxed opacity-70" style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#1A1A1A" }}>
              [Johana&apos;s personal story and background will go here. Share your journey — where you came from, what drew you to the world of fashion and lifestyle consulting, and what drives you to do this work every day.]
            </p>
            <p className="text-sm leading-relaxed opacity-70" style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#1A1A1A" }}>
              [A second paragraph about your experience, training, certifications, or the moments that shaped your approach. Be personal — this is where clients fall in love with you before they ever meet you.]
            </p>
            <p className="text-sm leading-relaxed opacity-70" style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#1A1A1A" }}>
              Based in Southwest Florida, I serve clients across Punta Gorda, Sarasota, and Naples — and virtually, anywhere in the world.
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section-padding" style={{ backgroundColor: "#F5E6C8" }}>
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8">
          <p className="text-xs tracking-widest uppercase" style={{ color: "#C9A84C", fontFamily: "var(--font-raleway), sans-serif" }}>
            My Philosophy
          </p>
          <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "var(--font-cormorant), serif", color: "#6D2B3D" }}>
            Style is not about fashion. It&apos;s about identity.
          </h2>
          <div className="gold-divider" />
          <p className="text-base leading-loose opacity-75 max-w-2xl" style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#1A1A1A" }}>
            [This is where you share your core styling philosophy — what you believe about style, image, confidence, and how they intersect with a woman&apos;s life. Write from the heart. This section sets the tone for everything else on your site.]
          </p>
          <p className="text-base leading-loose opacity-75 max-w-2xl" style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#1A1A1A" }}>
            [A second paragraph diving deeper into your approach — how you work, what makes your method different, and what transformation looks like for your clients.]
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-padding" style={{ backgroundColor: "#FBF7F0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#C9A84C", fontFamily: "var(--font-raleway), sans-serif" }}>
              What I Stand For
            </p>
            <h2 className="text-4xl" style={{ fontFamily: "var(--font-cormorant), serif", color: "#6D2B3D" }}>
              The J.Style Values
            </h2>
            <div className="gold-divider mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { value: "Authenticity", desc: "Every look is built around who you are — not a trend, not an ideal, not someone else's vision. You." },
              { value: "Intentionality", desc: "Every piece in your wardrobe should have a reason to be there. We shop, edit, and style with purpose." },
              { value: "Timelessness", desc: "Style that lasts doesn't chase fast fashion. I help you invest in looks that age beautifully, just like you." },
            ].map((v) => (
              <div key={v.value} className="flex flex-col gap-4 text-center items-center">
                <div className="w-px h-12" style={{ backgroundColor: "#C9A84C" }} />
                <h3 className="text-2xl" style={{ fontFamily: "var(--font-cormorant), serif", color: "#6D2B3D" }}>
                  {v.value}
                </h3>
                <p className="text-sm leading-relaxed opacity-70" style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#1A1A1A" }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: "#6D2B3D" }}>
        <div className="max-w-xl mx-auto px-6 flex flex-col items-center gap-6">
          <h2 className="text-4xl" style={{ fontFamily: "var(--font-cormorant), serif", color: "#FBF7F0" }}>
            Ready to work together?
          </h2>
          <Link
            href="https://calendly.com/jstyle-placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase px-8 py-4 transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "#C9A84C", color: "#FBF7F0", fontFamily: "var(--font-raleway), sans-serif" }}
          >
            Book a Discovery Call <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
