import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

// Placeholder — will be replaced by Sanity in Phase 3
const placeholderPost = {
  title: "How to Build a Capsule Wardrobe That Actually Works For Your Life",
  date: "February 20, 2026",
  readTime: "6 min read",
  category: "Wardrobe Wisdom",
  content: `
    A capsule wardrobe isn't about minimalism for minimalism's sake. It's about curating pieces that do real work — so getting dressed becomes effortless, not exhausting.

    [This is a placeholder blog post. Real content will be added through the Sanity CMS in Phase 3. Each post will have full rich-text content, images, and proper formatting.]

    The concept of a capsule wardrobe was first popularized by British fashion consultant Susie Faux in the 1970s, and later brought to mainstream awareness by Donna Karan's "Seven Easy Pieces" collection. But the principles have evolved far beyond their origins.

    Today, a capsule wardrobe isn't a rigid formula — it's a philosophy. It's about understanding your life, your lifestyle, and your aesthetic well enough to build a wardrobe that supports both.

    Here's where most women go wrong: they build a capsule wardrobe based on what they see in Pinterest boards, not based on their actual lives. The result? A closet full of beautiful pieces they never wear.

    The right capsule wardrobe starts with your life, not with a list.
  `,
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: placeholderPost.title,
    description: "A style journal entry from J.Style — personal stylist and lifestyle consultant in Southwest Florida.",
  };
}

export default function BlogPostPage() {
  return (
    <>
      {/* POST HEADER */}
      <section className="pt-40 pb-16" style={{ backgroundColor: "#6D2B3D" }}>
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase mb-8 opacity-60 hover:opacity-100 transition-opacity"
            style={{ color: "#FBF7F0", fontFamily: "var(--font-raleway), sans-serif" }}
          >
            <ArrowLeft size={12} /> Back to Journal
          </Link>
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#C9A84C", fontFamily: "var(--font-raleway), sans-serif" }}>
            {placeholderPost.category}
          </p>
          <h1
            className="text-4xl md:text-5xl leading-tight mb-6"
            style={{ fontFamily: "var(--font-cormorant), serif", color: "#FBF7F0", fontWeight: 300 }}
          >
            {placeholderPost.title}
          </h1>
          <div className="flex items-center gap-6 opacity-60">
            <span className="flex items-center gap-1.5 text-xs" style={{ color: "#FBF7F0", fontFamily: "var(--font-raleway), sans-serif" }}>
              <Calendar size={12} /> {placeholderPost.date}
            </span>
            <span className="flex items-center gap-1.5 text-xs" style={{ color: "#FBF7F0", fontFamily: "var(--font-raleway), sans-serif" }}>
              <Clock size={12} /> {placeholderPost.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* POST CONTENT */}
      <section className="section-padding" style={{ backgroundColor: "#FBF7F0" }}>
        <div className="max-w-3xl mx-auto px-6">
          {/* Featured image placeholder */}
          <div
            className="h-72 flex items-center justify-center mb-12"
            style={{ border: "1px solid #E8D5A3", backgroundColor: "#F5E6C8" }}
          >
            <p className="text-xs tracking-widest uppercase opacity-30" style={{ color: "#6D2B3D", fontFamily: "var(--font-raleway), sans-serif" }}>
              Featured Image
            </p>
          </div>

          {/* Article body */}
          <div
            className="prose-sm max-w-none space-y-5"
            style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#1A1A1A" }}
          >
            {placeholderPost.content.trim().split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-base leading-loose opacity-75">
                {paragraph.trim()}
              </p>
            ))}
          </div>

          {/* Author block */}
          <div
            className="mt-16 p-8 flex items-center gap-6"
            style={{ border: "1px solid #E8D5A3", backgroundColor: "#F5E6C8" }}
          >
            <div
              className="w-16 h-16 rounded-full shrink-0 flex items-center justify-center"
              style={{ border: "1px solid #C9A84C", backgroundColor: "rgba(109,43,61,0.08)" }}
            >
              <span style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", color: "#C9A84C", fontSize: "20px" }}>
                J
              </span>
            </div>
            <div>
              <p className="text-sm font-medium" style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#6D2B3D" }}>
                Written by Johana
              </p>
              <p className="text-xs opacity-60 mt-1" style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#1A1A1A" }}>
                Lifestyle &amp; fashion consultant serving Punta Gorda, Sarasota, and Naples, FL.
              </p>
            </div>
          </div>

          {/* Back to blog */}
          <div className="mt-12 pt-8" style={{ borderTop: "1px solid #E8D5A3" }}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-200 hover:opacity-70"
              style={{ color: "#6D2B3D", fontFamily: "var(--font-raleway), sans-serif" }}
            >
              <ArrowLeft size={12} /> Back to the Style Journal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
