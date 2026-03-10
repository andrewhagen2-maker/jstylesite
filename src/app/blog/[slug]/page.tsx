import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/client";
import { postBySlugQuery, allPostSlugsQuery } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.image";

export const revalidate = 60;

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  category: string;
  excerpt: string;
  mainImage?: { asset: { _ref: string }; alt?: string };
  body: unknown[];
}

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(allPostSlugsQuery);
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post: Post | null = await client.fetch(postBySlugQuery, { slug });
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

const portableTextComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-base leading-loose opacity-75 mb-5" style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#1A1A1A" }}>
        {children}
      </p>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-3xl mt-10 mb-4" style={{ fontFamily: "var(--font-cormorant), serif", color: "#6D2B3D" }}>
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-2xl mt-8 mb-3" style={{ fontFamily: "var(--font-cormorant), serif", color: "#6D2B3D" }}>
        {children}
      </h3>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="text-xl italic pl-6 py-2 my-6 border-l-2" style={{ fontFamily: "var(--font-cormorant), serif", color: "#6D2B3D", borderColor: "#C9A84C" }}>
        {children}
      </blockquote>
    ),
  },
  types: {
    image: ({ value }: { value: { asset: { _ref: string }; alt?: string } }) => (
      <div className="my-8 relative h-72 md:h-96">
        <Image
          src={urlFor(value).width(900).url()}
          alt={value.alt ?? ""}
          fill
          className="object-cover"
        />
      </div>
    ),
  },
};

function readTime(body: unknown[]): string {
  const text = JSON.stringify(body);
  const words = text.split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post: Post | null = await client.fetch(postBySlugQuery, { slug });

  if (!post) notFound();

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
          {post.category && (
            <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#C9A84C", fontFamily: "var(--font-raleway), sans-serif" }}>
              {post.category}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl leading-tight mb-6" style={{ fontFamily: "var(--font-cormorant), serif", color: "#FBF7F0", fontWeight: 300 }}>
            {post.title}
          </h1>
          <div className="flex items-center gap-6 opacity-60">
            <span className="flex items-center gap-1.5 text-xs" style={{ color: "#FBF7F0", fontFamily: "var(--font-raleway), sans-serif" }}>
              <Calendar size={12} /> {formattedDate}
            </span>
            <span className="flex items-center gap-1.5 text-xs" style={{ color: "#FBF7F0", fontFamily: "var(--font-raleway), sans-serif" }}>
              <Clock size={12} /> {readTime(post.body)}
            </span>
          </div>
        </div>
      </section>

      {/* POST CONTENT */}
      <section className="section-padding" style={{ backgroundColor: "#FBF7F0" }}>
        <div className="max-w-3xl mx-auto px-6">
          {post.mainImage && (
            <div className="relative h-72 md:h-96 mb-12">
              <Image
                src={urlFor(post.mainImage).width(900).height(500).url()}
                alt={post.mainImage.alt ?? post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="max-w-none">
            <PortableText value={post.body as Parameters<typeof PortableText>[0]["value"]} components={portableTextComponents} />
          </div>

          {/* Author block */}
          <div className="mt-16 p-8 flex items-center gap-6" style={{ border: "1px solid #E8D5A3", backgroundColor: "#F5E6C8" }}>
            <div className="w-16 h-16 rounded-full shrink-0 flex items-center justify-center" style={{ border: "1px solid #C9A84C", backgroundColor: "rgba(109,43,61,0.08)" }}>
              <span style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", color: "#C9A84C", fontSize: "20px" }}>J</span>
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
