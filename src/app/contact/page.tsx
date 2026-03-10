"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { ArrowRight, Send, MapPin, Mail, Calendar } from "lucide-react";

// ── Zod validation schema ──────────────────────────────────────────────────
const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  website: z.string().optional(), // honeypot — must stay empty
});

type ContactFormData = z.infer<typeof contactSchema>;

type FormStatus = "idle" | "loading" | "success" | "error";

// ── Field error helper ─────────────────────────────────────────────────────
function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p
      className="text-xs mt-1"
      style={{ color: "#800020", fontFamily: "var(--font-raleway), sans-serif" }}
    >
      {message}
    </p>
  );
}

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [status, setStatus] = useState<FormStatus>("idle");

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* PAGE HEADER */}
      <section className="pt-40 pb-20 text-center" style={{ backgroundColor: "#6D2B3D" }}>
        <div className="max-w-2xl mx-auto px-6 flex flex-col items-center gap-4">
          <p
            className="text-xs tracking-widest uppercase"
            style={{ color: "#C9A84C", fontFamily: "var(--font-raleway), sans-serif" }}
          >
            Get in Touch
          </p>
          <h1
            className="text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-cormorant), serif", color: "#FBF7F0", fontWeight: 300 }}
          >
            Let&apos;s Connect
          </h1>
          <div className="gold-divider mt-4" />
        </div>
      </section>

      {/* CONTENT */}
      <section className="section-padding" style={{ backgroundColor: "#FBF7F0" }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* LEFT — info */}
          <div className="flex flex-col gap-10">
            {/* Calendly CTA */}
            <div
              className="p-8 flex flex-col gap-4"
              style={{ backgroundColor: "#F5E6C8", border: "1px solid #E8D5A3" }}
            >
              <p
                className="text-xs tracking-widest uppercase"
                style={{ color: "#C9A84C", fontFamily: "var(--font-raleway), sans-serif" }}
              >
                Preferred Method
              </p>
              <h2
                className="text-3xl"
                style={{ fontFamily: "var(--font-cormorant), serif", color: "#6D2B3D" }}
              >
                Book a Discovery Call
              </h2>
              <p
                className="text-sm leading-relaxed opacity-70"
                style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#1A1A1A" }}
              >
                A complimentary 20-minute call is the best way to start. We&apos;ll talk through
                your needs and find the right path forward — no commitment required.
              </p>
              <Link
                href="https://calendly.com/jstyle-placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs tracking-widest uppercase px-6 py-3 self-start transition-all duration-200 hover:opacity-90"
                style={{
                  backgroundColor: "#6D2B3D",
                  color: "#FBF7F0",
                  fontFamily: "var(--font-raleway), sans-serif",
                }}
              >
                <Calendar size={12} /> Schedule on Calendly
              </Link>
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <MapPin size={16} style={{ color: "#C9A84C", marginTop: "2px" }} className="shrink-0" />
                <div>
                  <p
                    className="text-sm font-medium"
                    style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#1A1A1A" }}
                  >
                    Service Areas
                  </p>
                  <p
                    className="text-sm opacity-60"
                    style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#1A1A1A" }}
                  >
                    Punta Gorda · Sarasota · Naples, FL
                    <br />
                    Virtual services available worldwide
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={16} style={{ color: "#C9A84C", marginTop: "2px" }} className="shrink-0" />
                <div>
                  <p
                    className="text-sm font-medium"
                    style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#1A1A1A" }}
                  >
                    Email
                  </p>
                  <p
                    className="text-sm opacity-60"
                    style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#1A1A1A" }}
                  >
                    hello@jstyle.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — form */}
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-6"
              style={{ color: "#C9A84C", fontFamily: "var(--font-raleway), sans-serif" }}
            >
              Or Send a Message
            </p>

            {status === "success" ? (
              <div
                className="p-10 text-center flex flex-col items-center gap-4"
                style={{ border: "1px solid #E8D5A3", backgroundColor: "#F5E6C8" }}
              >
                <div className="w-px h-12" style={{ backgroundColor: "#C9A84C" }} />
                <h3
                  className="text-2xl"
                  style={{ fontFamily: "var(--font-cormorant), serif", color: "#6D2B3D" }}
                >
                  Message Received
                </h3>
                <p
                  className="text-sm opacity-70"
                  style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#1A1A1A" }}
                >
                  Thank you for reaching out. I&apos;ll be in touch within 1–2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>

                {/* Honeypot — hidden from real users, bots fill it */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0 }}
                  {...register("website")}
                />

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs tracking-widest uppercase"
                    style={{ color: "#6D2B3D", fontFamily: "var(--font-raleway), sans-serif" }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    className="w-full px-4 py-3 text-sm outline-none focus:ring-1"
                    style={{
                      border: errors.name ? "1px solid #800020" : "1px solid #E8D5A3",
                      backgroundColor: "#fff",
                      fontFamily: "var(--font-raleway), sans-serif",
                      color: "#1A1A1A",
                    }}
                    placeholder="Your name"
                  />
                  <FieldError message={errors.name?.message} />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs tracking-widest uppercase"
                    style={{ color: "#6D2B3D", fontFamily: "var(--font-raleway), sans-serif" }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className="w-full px-4 py-3 text-sm outline-none focus:ring-1"
                    style={{
                      border: errors.email ? "1px solid #800020" : "1px solid #E8D5A3",
                      backgroundColor: "#fff",
                      fontFamily: "var(--font-raleway), sans-serif",
                      color: "#1A1A1A",
                    }}
                    placeholder="your@email.com"
                  />
                  <FieldError message={errors.email?.message} />
                </div>

                {/* Service interest */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs tracking-widest uppercase"
                    style={{ color: "#6D2B3D", fontFamily: "var(--font-raleway), sans-serif" }}
                  >
                    Service Interest
                  </label>
                  <select
                    {...register("service")}
                    className="w-full px-4 py-3 text-sm outline-none"
                    style={{
                      border: "1px solid #E8D5A3",
                      backgroundColor: "#fff",
                      fontFamily: "var(--font-raleway), sans-serif",
                      color: "#1A1A1A",
                    }}
                  >
                    <option value="">Select a service...</option>
                    <option value="Personal Styling Session">Personal Styling Session</option>
                    <option value="Wardrobe Audit">Wardrobe Audit</option>
                    <option value="Shopping Accompaniment">Shopping Accompaniment</option>
                    <option value="Virtual Styling">Virtual Styling</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs tracking-widest uppercase"
                    style={{ color: "#6D2B3D", fontFamily: "var(--font-raleway), sans-serif" }}
                  >
                    Message *
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className="w-full px-4 py-3 text-sm outline-none resize-none"
                    style={{
                      border: errors.message ? "1px solid #800020" : "1px solid #E8D5A3",
                      backgroundColor: "#fff",
                      fontFamily: "var(--font-raleway), sans-serif",
                      color: "#1A1A1A",
                    }}
                    placeholder="Tell me a bit about yourself and what you're looking for..."
                  />
                  <FieldError message={errors.message?.message} />
                </div>

                {status === "error" && (
                  <p
                    className="text-xs opacity-70"
                    style={{ color: "#800020", fontFamily: "var(--font-raleway), sans-serif" }}
                  >
                    Something went wrong. Please try again or book a call directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || status === "loading"}
                  className="inline-flex items-center justify-center gap-2 text-xs tracking-widest uppercase px-8 py-4 transition-all duration-200 hover:opacity-90 disabled:opacity-50"
                  style={{
                    backgroundColor: "#6D2B3D",
                    color: "#FBF7F0",
                    fontFamily: "var(--font-raleway), sans-serif",
                  }}
                >
                  {isSubmitting || status === "loading"
                    ? "Sending..."
                    : <><span>Send Message</span> <Send size={12} /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section
        className="py-16 text-center"
        style={{ backgroundColor: "#F5E6C8", borderTop: "1px solid #E8D5A3" }}
      >
        <div className="max-w-xl mx-auto px-6 flex flex-col items-center gap-4">
          <h2
            className="text-3xl"
            style={{ fontFamily: "var(--font-cormorant), serif", color: "#6D2B3D" }}
          >
            Prefer to browse first?
          </h2>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-200 hover:opacity-70"
            style={{ color: "#6D2B3D", fontFamily: "var(--font-raleway), sans-serif" }}
          >
            Explore Services <ArrowRight size={12} />
          </Link>
        </div>
      </section>
    </>
  );
}
