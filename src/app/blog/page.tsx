import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { client } from "@/sanity/client";
import { allPostsQuery } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.image";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Style Journal",
  description:
    "Style tips, wardrobe wisdom, and lifestyle insights from Johana — personal stylist serving Punta Gorda, Sarasota, and Naples, FL.",
};

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  category: string;
  excerpt: string;
  mainImage?: { asset: { _ref: string }; alt?: string };
}

const categoryColors: Record<string, string> = {
  "Wardrobe Wisdom": "#6D2B3D",
  "Local Guide": "#C9A84C",
  "Style Education": "#5a3d6b",
  "Behind the Brand": "#3d5a5a",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(allPostsQuery);
  const [featured, ...rest] = posts;

  if (!posts.length) {
    return (
      <>
        <section className="pt-40 pb-20 text-center" style={{ backgroundColor: "#6D2B3D" }}>
          <div className="max-w-2xl mx-auto px-6 flex flex-col items-center gap-4">
            <p className="text-xs tracking-widest uppercase" style={{ color: "#C9A84C", fontFamily: "var(--font-raleway), sans-serif" }}>
              The Style Journal
            </p>
            <h1 className="text-5xl md:text-6xl" style={{ fontFamily: "var(--font-cormorant), serif", color: "#FBF7F0", fontWeight: 300 }}>
              Style, Wisdom &amp; Life
            </h1>
            <div className="gold-divider mt-4" />
          </div>
        </section>
        <section className="section-padding text-center" style={{ backgroundColor: "#FBF7F0" }}>
          <p className="text-sm opacity-60" style={{ fontFamily: "var(--font-raleway), sans-serif" }}>
            The first post is on its way. Check back soon.
          </p>
        </section>
      </>
    );
  }

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
      {featured && (
        <section className="section-padding" style={{ backgroundColor: "#FBF7F0" }}>
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs tracking-widest uppercase mb-8" style={{ color: "#C9A84C", fontFamily: "var(--font-raleway), sans-serif" }}>
              Featured Post
            </p>
            <Link href={`/blog/${featured.slug.current}`} className="group block">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="h-72 md:h-auto relative flex items-center justify-center" style={{ backgroundColor: "#F5E6C8", border: "1px solid #E8D5A3" }}>
                  {featured.mainImage ? (
                    <Image
                      src={urlFor(featured.mainImage).width(800).height(600).url()}
                      alt={featured.mainImage.alt ?? featured.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <p className="text-xs tracking-widest uppercase opacity-30" style={{ color: "#6D2B3D", fontFamily: "var(--font-raleway), sans-serif" }}>
                      Featured Image
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-4 p-10" style={{ border: "1px solid #E8D5A3", borderLeft: "none" }}>
                  <div className="flex items-center gap-4">
                    {featured.category && (
                      <span className="text-xs tracking-widest uppercase px-3 py-1" style={{ backgroundColor: categoryColors[featured.category] ?? "#6D2B3D", color: "#FBF7F0", fontFamily: "var(--font-raleway), sans-serif" }}>
                        {featured.category}
                      </span>
                    )}
                    <span className="text-xs opacity-50 flex items-center gap-1" style={{ fontFamily: "var(--font-raleway), sans-serif" }}>
                      <Calendar size={12} /> {formatDate(featured.publishedAt)}
                    </span>
                  </div>
                  <h2 className="text-3xl leading-snug" style={{ fontFamily: "var(--font-cormorant), serif", color: "#6D2B3D" }}>
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
      )}

      {/* POST GRID */}
      {rest.length > 0 && (
        <section className="section-padding" style={{ backgroundColor: "#F5E6C8" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((post) => (
                <Link key={post._id} href={`/blog/${post.slug.current}`} className="group flex flex-col">
                  <div className="h-52 relative flex items-center justify-center" style={{ backgroundColor: "#FBF7F0", border: "1px solid #E8D5A3" }}>
                    {post.mainImage ? (
                      <Image
                        src={urlFor(post.mainImage).width(600).height(400).url()}
                        alt={post.mainImage.alt ?? post.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <p className="text-xs tracking-widest uppercase opacity-30" style={{ color: "#6D2B3D", fontFamily: "var(--font-raleway), sans-serif" }}>
                        Post Image
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-3 p-6 flex-1" style={{ border: "1px solid #E8D5A3", borderTop: "none", backgroundColor: "#fff" }}>
                    <div className="flex items-center gap-3">
                      {post.category && (
                        <span className="text-xs tracking-widest uppercase px-2 py-0.5" style={{ backgroundColor: categoryColors[post.category] ?? "#6D2B3D", color: "#FBF7F0", fontFamily: "var(--font-raleway), sans-serif", fontSize: "10px" }}>
                          {post.category}
                        </span>
                      )}
                      <span className="text-xs opacity-40" style={{ fontFamily: "var(--font-raleway), sans-serif" }}>
                        {formatDate(post.publishedAt)}
                      </span>
                    </div>
                    <h3 className="text-xl leading-snug group-hover:opacity-70 transition-opacity" style={{ fontFamily: "var(--font-cormorant), serif", color: "#6D2B3D" }}>
                      {post.title}
                    </h3>
                    <p className="text-sm leading-relaxed opacity-60" style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#1A1A1A" }}>
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
      )}
    </>
  );
}
