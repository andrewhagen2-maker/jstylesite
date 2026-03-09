import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Style Journal",
  description:
    "Style tips, wardrobe wisdom, and lifestyle insights from Johana — personal stylist serving Punta Gorda, Sarasota, and Naples, FL.",
};

// Placeholder posts — will be replaced by Sanity CMS in Phase 3
const posts = [
  {
    slug: "how-to-build-a-capsule-wardrobe",
    title: "How to Build a Capsule Wardrobe That Actually Works For Your Life",
    excerpt:
      "A capsule wardrobe isn't about minimalism for minimalism's sake. It's about curating pieces that do real work — so getting dressed becomes effortless, not exhausting.",
    date: "February 20, 2026",
    category: "Wardrobe Wisdom",
    readTime: "6 min read",
  },
  {
    slug: "best-boutiques-sarasota",
    title: "The Best Boutiques in Sarasota for Elevated, Everyday Dressing",
    excerpt:
      "Sarasota has a quietly sophisticated shopping scene. Here are the boutiques I return to again and again when styling clients who want quality, not fast fashion.",
    date: "February 5, 2026",
    category: "Local Guide",
    readTime: "5 min read",
  },
  {
    slug: "color-analysis-guide",
    title: "What Color Analysis Really Tells You (And What It Doesn't)",
    excerpt:
      "Color analysis is a useful tool — not a rulebook. Here's how to use it to your advantage without letting it box you in.",
    date: "January 18, 2026",
    category: "Style Education",
    readTime: "7 min read",
  },
  {
    slug: "shopping-punta-gorda",
    title: "Where to Shop in Punta Gorda: A Stylist's Local Guide",
    excerpt:
      "Punta Gorda's boutiques are full of hidden gems. Whether you're dressing for the waterfront lifestyle or a night out downtown, I've done the scouting for you.",
    date: "January 4, 2026",
    category: "Local Guide",
    readTime: "4 min read",
  },
  {
    slug: "wardrobe-audit-guide",
    title: "The 5-Step Wardrobe Audit You Can Do This Weekend",
    excerpt:
      "You don't need a professional for every closet refresh. Here's a simple, honest process to help you edit what you own and clarify what you actually need.",
    date: "December 12, 2025",
    category: "Wardrobe Wisdom",
    readTime: "8 min read",
  },
  {
    slug: "virtual-styling-tips",
    title: "Getting the Most Out of Your Virtual Styling Session",
    excerpt:
      "Virtual styling works — when you prepare. Here's exactly how to set yourself up so our remote session is just as effective as being in the same room.",
    date: "November 28, 2025",
    category: "Style Education",
    readTime: "5 min read",
  },
];

const categoryColors: Record<string, string> = {
  "Wardrobe Wisdom": "#6D2B3D",
  "Local Guide": "#C9A84C",
  "Style Education": "#5a3d6b",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      {/* PAGE HEADER */}
      <section className="pt-40 pb-20 text-center" style={{ backgroundColor: "#6D2B3D" }}>
        <div className="max-w-2xl mx-auto px-6 flex flex-col items-center gap-4">
          <p className="text-xs tracking-widest uppercase" style={{ color: "#C9A84C", fontFamily: "var(--font-raleway), sans-serif" }}>
            The Style Journal
          </p>
          <h1 className="text-5xl md:text-6xl" style={{ fontFamily: "var(--font-cormorant), serif", color: "#FBF7F0", fontWeight: 300 }}>
            Style, Wisdom &amp; Life
          </h1>
          <div className="gold-divider mt-4" />
          <p className="text-sm leading-relaxed opacity-70 mt-4" style={{ color: "#FBF7F0", fontFamily: "var(--font-raleway), sans-serif" }}>
            Thoughts on style, wardrobe, and living beautifully from a Southwest Florida perspective.
          </p>
        </div>
      </section>

      {/* FEATURED POST */}
      <section className="section-padding" style={{ backgroundColor: "#FBF7F0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-widest uppercase mb-8" style={{ color: "#C9A84C", fontFamily: "var(--font-raleway), sans-serif" }}>
            Featured Post
          </p>
          <Link href={`/blog/${featured.slug}`} className="group block">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image placeholder */}
              <div
                className="h-72 md:h-auto flex items-center justify-center"
                style={{ backgroundColor: "#F5E6C8", border: "1px solid #E8D5A3" }}
              >
                <p className="text-xs tracking-widest uppercase opacity-30" style={{ color: "#6D2B3D", fontFamily: "var(--font-raleway), sans-serif" }}>
                  Featured Image
                </p>
              </div>
              {/* Content */}
              <div
                className="flex flex-col gap-4 p-10"
                style={{ border: "1px solid #E8D5A3", borderLeft: "none" }}
              >
                <div className="flex items-center gap-4">
                  <span
                    className="text-xs tracking-widest uppercase px-3 py-1"
                    style={{
                      backgroundColor: categoryColors[featured.category] ?? "#6D2B3D",
                      color: "#FBF7F0",
                      fontFamily: "var(--font-raleway), sans-serif",
                    }}
                  >
                    {featured.category}
                  </span>
                  <span className="text-xs opacity-50 flex items-center gap-1" style={{ fontFamily: "var(--font-raleway), sans-serif" }}>
                    <Calendar size={12} /> {featured.date}
                  </span>
                </div>
                <h2
                  className="text-3xl leading-snug group-hover:text-wine transition-colors duration-200"
                  style={{ fontFamily: "var(--font-cormorant), serif", color: "#6D2B3D" }}
                >
                  {featured.title}
                </h2>
                <p className="text-sm leading-relaxed opacity-70" style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#1A1A1A" }}>
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-2 mt-auto text-xs tracking-widest uppercase" style={{ color: "#C9A84C", fontFamily: "var(--font-raleway), sans-serif" }}>
                  Read Article <ArrowRight size={12} />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* POST GRID */}
      <section className="section-padding" style={{ backgroundColor: "#F5E6C8" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col">
                {/* Image placeholder */}
                <div
                  className="h-52 flex items-center justify-center"
                  style={{ backgroundColor: "#FBF7F0", border: "1px solid #E8D5A3" }}
                >
                  <p className="text-xs tracking-widest uppercase opacity-30" style={{ color: "#6D2B3D", fontFamily: "var(--font-raleway), sans-serif" }}>
                    Post Image
                  </p>
                </div>
                <div className="flex flex-col gap-3 p-6 flex-1" style={{ border: "1px solid #E8D5A3", borderTop: "none", backgroundColor: "#fff" }}>
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xs tracking-widest uppercase px-2 py-0.5"
                      style={{
                        backgroundColor: categoryColors[post.category] ?? "#6D2B3D",
                        color: "#FBF7F0",
                        fontFamily: "var(--font-raleway), sans-serif",
                        fontSize: "10px",
                      }}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs opacity-40 flex items-center gap-1" style={{ fontFamily: "var(--font-raleway), sans-serif" }}>
                      {post.readTime}
                    </span>
                  </div>
                  <h3
                    className="text-xl leading-snug group-hover:opacity-70 transition-opacity duration-200"
                    style={{ fontFamily: "var(--font-cormorant), serif", color: "#6D2B3D" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-60 text-sm" style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#1A1A1A" }}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-auto pt-3 text-xs tracking-widest uppercase" style={{ color: "#C9A84C", fontFamily: "var(--font-raleway), sans-serif" }}>
                    Read <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
