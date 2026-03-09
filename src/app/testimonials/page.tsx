import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Testimonials",
  description:
    "Hear from women across Punta Gorda, Sarasota, and Naples, FL who have transformed their style with J.Style personal styling and wardrobe consulting services.",
};

const testimonials = [
  {
    name: "Charlotte M.",
    location: "Sarasota, FL",
    service: "Personal Styling Session",
    quote:
      "Working with Johana was transformative. She helped me rediscover my own style — not someone else's idea of it. I walked away with outfits I actually love wearing, and a clarity I didn't know I was missing.",
    featured: true,
  },
  {
    name: "Diana R.",
    location: "Naples, FL",
    service: "Wardrobe Audit",
    quote:
      "Every appointment felt like a gift to myself. I walk out of my closet with confidence now. That's priceless. Johana has an incredible eye and an even better ability to listen.",
    featured: true,
  },
  {
    name: "Marguerite L.",
    location: "Punta Gorda, FL",
    service: "Shopping Accompaniment",
    quote:
      "I've worked with stylists before, but Johana is in a different league. She listens, she sees you, and she delivers. My shopping trips used to be exhausting. Now they're my favorite appointments.",
    featured: true,
  },
  {
    name: "Isabelle T.",
    location: "Naples, FL",
    service: "Virtual Styling",
    quote:
      "I was skeptical about virtual styling, but Johana made it seamless. She sent me a full look book and a shopping list that felt completely tailored to my life. Worth every penny.",
    featured: false,
  },
  {
    name: "Renata V.",
    location: "Sarasota, FL",
    service: "Wardrobe Audit",
    quote:
      "My closet was chaos. Now it's curated. Johana helped me let go of things I was holding onto for the wrong reasons — and fill the gaps with pieces I truly love.",
    featured: false,
  },
  {
    name: "Camille B.",
    location: "Punta Gorda, FL",
    service: "Personal Styling Session",
    quote:
      "There is no one quite like Johana. She brought elegance and warmth to every moment of our session. I finally feel like myself — polished, intentional, and confident.",
    featured: false,
  },
];

const featured = testimonials.filter((t) => t.featured);
const rest = testimonials.filter((t) => !t.featured);

export default function TestimonialsPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="pt-40 pb-20 text-center" style={{ backgroundColor: "#6D2B3D" }}>
        <div className="max-w-2xl mx-auto px-6 flex flex-col items-center gap-4">
          <p className="text-xs tracking-widest uppercase" style={{ color: "#C9A84C", fontFamily: "var(--font-raleway), sans-serif" }}>
            Client Stories
          </p>
          <h1 className="text-5xl md:text-6xl" style={{ fontFamily: "var(--font-cormorant), serif", color: "#FBF7F0", fontWeight: 300 }}>
            Words from the Women I&apos;ve Styled
          </h1>
          <div className="gold-divider mt-4" />
        </div>
      </section>

      {/* FEATURED TESTIMONIALS */}
      <section className="section-padding" style={{ backgroundColor: "#FBF7F0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {featured.map((t) => (
              <div
                key={t.name}
                className="flex flex-col gap-5 p-10 relative"
                style={{ border: "1px solid #E8D5A3", backgroundColor: "#fff" }}
              >
                <Quote size={32} style={{ color: "#E8D5A3" }} className="absolute top-6 right-6" />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="#C9A84C" color="#C9A84C" />
                  ))}
                </div>
                <p
                  className="text-lg italic leading-relaxed"
                  style={{ fontFamily: "var(--font-cormorant), serif", color: "#1A1A1A" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-auto pt-4 border-t" style={{ borderColor: "#E8D5A3" }}>
                  <p className="text-sm font-medium" style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#6D2B3D" }}>
                    {t.name}
                  </p>
                  <p className="text-xs opacity-50 mt-1" style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#1A1A1A" }}>
                    {t.location} · {t.service}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MORE TESTIMONIALS */}
      <section className="section-padding" style={{ backgroundColor: "#F5E6C8" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl" style={{ fontFamily: "var(--font-cormorant), serif", color: "#6D2B3D" }}>
              More Client Experiences
            </h2>
            <div className="gold-divider mt-4" />
          </div>
          <div className="flex flex-col gap-6">
            {rest.map((t) => (
              <div
                key={t.name}
                className="flex flex-col md:flex-row md:items-center gap-6 p-8"
                style={{ backgroundColor: "#fff", border: "1px solid #E8D5A3" }}
              >
                <div className="flex gap-1 md:flex-col md:items-center shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} fill="#C9A84C" color="#C9A84C" />
                  ))}
                </div>
                <div className="flex-1">
                  <p className="text-base italic leading-relaxed" style={{ fontFamily: "var(--font-cormorant), serif", color: "#1A1A1A" }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="shrink-0 text-right md:text-right">
                  <p className="text-sm font-medium" style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#6D2B3D" }}>
                    {t.name}
                  </p>
                  <p className="text-xs opacity-50" style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#1A1A1A" }}>
                    {t.location}
                  </p>
                  <p className="text-xs opacity-40 mt-0.5" style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#6D2B3D" }}>
                    {t.service}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: "#6D2B3D" }}>
        <div className="max-w-xl mx-auto px-6 flex flex-col items-center gap-6">
          <h2 className="text-4xl" style={{ fontFamily: "var(--font-cormorant), serif", color: "#FBF7F0" }}>
            Ready to write your own story?
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
