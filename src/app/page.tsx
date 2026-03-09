import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "J.Style | Personal Stylist & Lifestyle Consultant | Southwest Florida",
  description:
    "Johana is a lifestyle and fashion stylist serving Punta Gorda, Sarasota, and Naples, FL. Wardrobe consulting, personal styling, and image transformation — elevated.",
};

const services = [
  {
    title: "Personal Styling",
    description:
      "A curated session designed around your life, body, and vision — crafting a look that is authentically and beautifully yours.",
  },
  {
    title: "Wardrobe Audit",
    description:
      "A thorough, thoughtful edit of what you own — identifying what serves you, what to let go, and what gaps to fill.",
  },
  {
    title: "Shopping Accompaniment",
    description:
      "Guided, intentional shopping with an expert eye — so every purchase earns its place in your wardrobe.",
  },
  {
    title: "Virtual Styling",
    description:
      "The full J.Style experience from anywhere. Style consultations, outfit curation, and wardrobe guidance — all remote.",
  },
];

const testimonials = [
  {
    name: "Charlotte M.",
    location: "Sarasota, FL",
    quote:
      "Working with Johana was transformative. She helped me rediscover my own style — not someone else's idea of it.",
  },
  {
    name: "Diana R.",
    location: "Naples, FL",
    quote:
      "Every appointment felt like a gift to myself. I walk out of my closet with confidence now. That's priceless.",
  },
  {
    name: "Marguerite L.",
    location: "Punta Gorda, FL",
    quote:
      "I've worked with stylists before, but Johana is in a different league. She listens, she sees you, and she delivers.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#6D2B3D" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center py-32">
          <div className="flex flex-col gap-6">
            <p
              className="text-xs tracking-widest uppercase"
              style={{ color: "#C9A84C", fontFamily: "var(--font-raleway), sans-serif" }}
            >
              Lifestyle &amp; Fashion Consultant · Southwest Florida
            </p>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl leading-tight"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                color: "#FBF7F0",
                fontWeight: 300,
              }}
            >
              Style that speaks{" "}
              <em style={{ color: "#C9A84C", fontStyle: "italic" }}>before</em>{" "}
              you do.
            </h1>
            <p
              className="text-base leading-relaxed max-w-md opacity-80"
              style={{ color: "#FBF7F0", fontFamily: "var(--font-raleway), sans-serif" }}
            >
              Johana partners with women ready to elevate their image, curate their wardrobe, and move through the world with quiet confidence.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <Link
                href="https://calendly.com/jstyle-placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs tracking-widest uppercase px-7 py-4 transition-all duration-200 hover:opacity-90"
                style={{
                  backgroundColor: "#C9A84C",
                  color: "#FBF7F0",
                  fontFamily: "var(--font-raleway), sans-serif",
                }}
              >
                Book a Discovery Call <ArrowRight size={14} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-xs tracking-widest uppercase px-7 py-4 transition-all duration-200 hover:bg-white/10"
                style={{
                  border: "1px solid rgba(251,247,240,0.4)",
                  color: "#FBF7F0",
                  fontFamily: "var(--font-raleway), sans-serif",
                }}
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Photo placeholder */}
          <div className="flex justify-center md:justify-end">
            <div
              className="relative w-72 h-96 md:w-80 md:h-[480px] flex items-center justify-center"
              style={{
                border: "1px solid rgba(201, 168, 76, 0.4)",
                backgroundColor: "rgba(201,168,76,0.06)",
              }}
            >
              <div className="text-center px-8">
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ border: "1px solid #C9A84C" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontStyle: "italic",
                      color: "#C9A84C",
                      fontSize: "20px",
                    }}
                  >
                    J
                  </span>
                </div>
                <p
                  className="text-xs tracking-widest uppercase opacity-50"
                  style={{ color: "#FBF7F0", fontFamily: "var(--font-raleway), sans-serif" }}
                >
                  Photo of Johana
                </p>
              </div>
              <span className="absolute top-0 left-0 w-8 h-8 border-t border-l" style={{ borderColor: "#C9A84C" }} />
              <span className="absolute top-0 right-0 w-8 h-8 border-t border-r" style={{ borderColor: "#C9A84C" }} />
              <span className="absolute bottom-0 left-0 w-8 h-8 border-b border-l" style={{ borderColor: "#C9A84C" }} />
              <span className="absolute bottom-0 right-0 w-8 h-8 border-b border-r" style={{ borderColor: "#C9A84C" }} />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, #C9A84C, transparent)" }} />
          <p className="text-xs tracking-widest uppercase" style={{ color: "#FBF7F0", fontFamily: "var(--font-raleway), sans-serif" }}>
            Scroll
          </p>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="section-padding" style={{ backgroundColor: "#FBF7F0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#C9A84C", fontFamily: "var(--font-raleway), sans-serif" }}>
              What I Offer
            </p>
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "var(--font-cormorant), serif", color: "#6D2B3D" }}>
              Services Crafted for You
            </h2>
            <div className="gold-divider mt-6" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="flex flex-col gap-4 p-8 transition-all duration-300 hover:-translate-y-1"
                style={{ border: "1px solid #E8D5A3", backgroundColor: "#fff" }}
              >
                <div className="w-8 h-px" style={{ backgroundColor: "#C9A84C" }} />
                <h3 className="text-xl" style={{ fontFamily: "var(--font-cormorant), serif", color: "#6D2B3D" }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-70" style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#1A1A1A" }}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-200 hover:opacity-70"
              style={{ color: "#6D2B3D", fontFamily: "var(--font-raleway), sans-serif" }}
            >
              View All Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="section-padding" style={{ backgroundColor: "#F5E6C8" }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div
            className="relative h-96 flex items-center justify-center"
            style={{ border: "1px solid rgba(201, 168, 76, 0.5)", backgroundColor: "rgba(109,43,61,0.04)" }}
          >
            <p className="text-xs tracking-widest uppercase opacity-40" style={{ color: "#6D2B3D", fontFamily: "var(--font-raleway), sans-serif" }}>
              Lifestyle Photo
            </p>
            <span className="absolute top-0 left-0 w-8 h-8 border-t border-l" style={{ borderColor: "#C9A84C" }} />
            <span className="absolute bottom-0 right-0 w-8 h-8 border-b border-r" style={{ borderColor: "#C9A84C" }} />
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-xs tracking-widest uppercase" style={{ color: "#C9A84C", fontFamily: "var(--font-raleway), sans-serif" }}>
              The Philosophy
            </p>
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "var(--font-cormorant), serif", color: "#6D2B3D" }}>
              Style is not what you wear — it&apos;s how you live.
            </h2>
            <p className="text-sm leading-relaxed opacity-75" style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#1A1A1A" }}>
              Johana believes that getting dressed is an act of self-expression, intention, and grace. Her approach blends the art of styling with the science of your lifestyle — creating looks that feel effortless because they are built around who you truly are.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase self-start transition-colors duration-200 hover:opacity-70"
              style={{ color: "#6D2B3D", fontFamily: "var(--font-raleway), sans-serif" }}
            >
              My Story <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS TEASER */}
      <section className="section-padding" style={{ backgroundColor: "#6D2B3D" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#C9A84C", fontFamily: "var(--font-raleway), sans-serif" }}>
              Client Stories
            </p>
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "var(--font-cormorant), serif", color: "#FBF7F0" }}>
              Words from the Women I&apos;ve Styled
            </h2>
            <div className="gold-divider mt-6" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col gap-5 p-8"
                style={{ border: "1px solid rgba(201,168,76,0.25)", backgroundColor: "rgba(251,247,240,0.04)" }}
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="#C9A84C" color="#C9A84C" />
                  ))}
                </div>
                <p className="text-base italic leading-relaxed" style={{ fontFamily: "var(--font-cormorant), serif", color: "#FBF7F0", opacity: 0.9 }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-medium" style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#C9A84C" }}>
                    {t.name}
                  </p>
                  <p className="text-xs opacity-50" style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#FBF7F0" }}>
                    {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-200 hover:opacity-70"
              style={{ color: "#C9A84C", fontFamily: "var(--font-raleway), sans-serif" }}
            >
              Read More Stories <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 text-center" style={{ backgroundColor: "#FBF7F0", borderTop: "1px solid #E8D5A3" }}>
        <div className="max-w-2xl mx-auto px-6 flex flex-col items-center gap-6">
          <p className="text-xs tracking-widest uppercase" style={{ color: "#C9A84C", fontFamily: "var(--font-raleway), sans-serif" }}>
            Let&apos;s Begin
          </p>
          <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "var(--font-cormorant), serif", color: "#6D2B3D" }}>
            Your most polished chapter starts here.
          </h2>
          <p className="text-sm leading-relaxed opacity-70 max-w-md" style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#1A1A1A" }}>
            Book a complimentary 20-minute discovery call. No pressure — just a conversation about where you are and where you&apos;d like to be.
          </p>
          <Link
            href="https://calendly.com/jstyle-placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase px-8 py-4 mt-2 transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "#6D2B3D", color: "#FBF7F0", fontFamily: "var(--font-raleway), sans-serif" }}
          >
            Schedule Your Call <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
