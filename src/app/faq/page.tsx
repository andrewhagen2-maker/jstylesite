"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "Where do you offer services?",
    answer:
      "I work in person with clients across Punta Gorda, Sarasota, and Naples, FL — and virtually with clients anywhere in the world. If you're unsure whether I travel to your area, reach out and we'll figure it out.",
  },
  {
    question: "How do I know which service is right for me?",
    answer:
      "That's exactly what our discovery call is for. It's complimentary, no-pressure, and gives us both a chance to explore where you are and what would serve you most. Book a call and we'll find the right fit together.",
  },
  {
    question: "Do you offer virtual styling services?",
    answer:
      "Yes — virtual styling is one of my core offerings. Through video consultations, digital look books, and curated shopping lists, you receive the same level of expertise and personal attention as an in-person session.",
  },
  {
    question: "What should I expect from a personal styling session?",
    answer:
      "Every session begins with a deep conversation about your lifestyle, goals, and aesthetic. From there, we move into your wardrobe (virtually or in person), build outfits, identify gaps, and create a clear style direction. You'll leave with a look book and actionable next steps.",
  },
  {
    question: "How long does a wardrobe audit take?",
    answer:
      "A full wardrobe audit typically takes 2–4 hours depending on the size of your closet and how many decisions we need to make together. We'll schedule appropriately so you never feel rushed.",
  },
  {
    question: "Do you offer packages or one-time sessions?",
    answer:
      "Both. I offer standalone sessions for each service, as well as combined packages for clients who want a more comprehensive transformation. We'll discuss options during your discovery call.",
  },
  {
    question: "How do I prepare for my appointment?",
    answer:
      "For a wardrobe audit or personal styling session, try to have your closet accessible and reasonably organized beforehand. For virtual sessions, I'll send you a photo guide in advance. For shopping accompaniment, we'll plan the stores together before we go.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "[Cancellation policy details will be added here. Placeholder for Johana to specify terms — e.g., 48-hour cancellation window, rescheduling policy, etc.]",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: "1px solid #E8D5A3" }}>
      <button
        className="w-full flex items-start justify-between gap-4 py-6 text-left"
        onClick={() => setOpen(!open)}
      >
        <span
          className="text-lg leading-snug"
          style={{ fontFamily: "var(--font-cormorant), serif", color: "#6D2B3D" }}
        >
          {question}
        </span>
        <span className="shrink-0 mt-1" style={{ color: "#C9A84C" }}>
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "500px" : "0" }}
      >
        <p
          className="text-sm leading-relaxed pb-6 opacity-70"
          style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#1A1A1A" }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="pt-40 pb-20 text-center" style={{ backgroundColor: "#6D2B3D" }}>
        <div className="max-w-2xl mx-auto px-6 flex flex-col items-center gap-4">
          <p className="text-xs tracking-widest uppercase" style={{ color: "#C9A84C", fontFamily: "var(--font-raleway), sans-serif" }}>
            FAQ
          </p>
          <h1 className="text-5xl md:text-6xl" style={{ fontFamily: "var(--font-cormorant), serif", color: "#FBF7F0", fontWeight: 300 }}>
            Questions, Answered
          </h1>
          <div className="gold-divider mt-4" />
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="section-padding" style={{ backgroundColor: "#FBF7F0" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div style={{ borderTop: "1px solid #E8D5A3" }}>
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          {/* Still have questions */}
          <div
            className="mt-16 p-10 text-center flex flex-col items-center gap-4"
            style={{ backgroundColor: "#F5E6C8", border: "1px solid #E8D5A3" }}
          >
            <p className="text-xs tracking-widest uppercase" style={{ color: "#C9A84C", fontFamily: "var(--font-raleway), sans-serif" }}>
              Still Have Questions?
            </p>
            <h2 className="text-3xl" style={{ fontFamily: "var(--font-cormorant), serif", color: "#6D2B3D" }}>
              I&apos;d love to hear from you.
            </h2>
            <p className="text-sm leading-relaxed opacity-70 max-w-sm" style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#1A1A1A" }}>
              If your question isn&apos;t answered here, reach out directly or book a call — I&apos;m happy to help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs tracking-widest uppercase px-6 py-3 transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: "#6D2B3D", color: "#FBF7F0", fontFamily: "var(--font-raleway), sans-serif" }}
              >
                Send a Message <ArrowRight size={12} />
              </Link>
              <Link
                href="https://calendly.com/jstyle-placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs tracking-widest uppercase px-6 py-3 transition-all duration-200 hover:opacity-90"
                style={{ border: "1px solid #6D2B3D", color: "#6D2B3D", fontFamily: "var(--font-raleway), sans-serif" }}
              >
                Book a Call <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
