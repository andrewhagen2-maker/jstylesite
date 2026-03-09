import Link from "next/link";
import Logo from "./Logo";
import { Instagram } from "lucide-react";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#6D2B3D", color: "#FBF7F0" }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <Logo variant="light" size="md" />
            <p
              className="text-sm leading-relaxed opacity-70"
              style={{ fontFamily: "var(--font-raleway), sans-serif" }}
            >
              Elevating your personal style with timeless elegance. Serving Punta Gorda, Sarasota, and Naples, FL.
            </p>
            {/* Social */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://instagram.com/jstyle"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 hover:opacity-100 transition-opacity"
                aria-label="Instagram"
                style={{ color: "#C9A84C" }}
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://pinterest.com/jstyle"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 hover:opacity-100 transition-opacity"
                aria-label="Pinterest"
                style={{ color: "#C9A84C" }}
              >
                {/* Pinterest icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.76 1.24-5.26 1.24-5.26s-.32-.63-.32-1.57c0-1.47.86-2.57 1.92-2.57.91 0 1.35.68 1.35 1.5 0 .91-.58 2.29-.88 3.56-.25 1.06.52 1.93 1.56 1.93 1.87 0 3.13-2.4 3.13-5.24 0-2.16-1.47-3.78-4.13-3.78-3.01 0-4.9 2.25-4.9 4.77 0 .87.26 1.47.66 1.94.19.22.21.31.15.57-.05.18-.15.63-.2.8-.06.25-.26.35-.47.25-1.32-.54-1.94-2-1.94-3.63 0-2.69 2.27-5.93 6.79-5.93 3.64 0 6.05 2.64 6.05 5.48 0 3.76-2.08 6.57-5.14 6.57-1.03 0-2-.55-2.33-1.18l-.63 2.41c-.23.88-.85 1.98-1.27 2.65.96.29 1.97.45 3.02.45 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <p
              className="text-xs tracking-widest uppercase mb-1"
              style={{ color: "#C9A84C", fontFamily: "var(--font-raleway), sans-serif" }}
            >
              Navigate
            </p>
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                style={{ fontFamily: "var(--font-raleway), sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-4">
            <p
              className="text-xs tracking-widest uppercase mb-1"
              style={{ color: "#C9A84C", fontFamily: "var(--font-raleway), sans-serif" }}
            >
              Ready to Begin?
            </p>
            <p
              className="text-sm opacity-70 max-w-xs leading-relaxed"
              style={{ fontFamily: "var(--font-raleway), sans-serif" }}
            >
              Book a complimentary discovery call and take the first step toward your most polished self.
            </p>
            <Link
              href="https://calendly.com/jstyle-placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs tracking-widest uppercase px-6 py-3 text-center transition-all duration-200 hover:opacity-90 mt-2 self-start"
              style={{
                fontFamily: "var(--font-raleway), sans-serif",
                backgroundColor: "#C9A84C",
                color: "#FBF7F0",
              }}
            >
              Schedule a Call
            </Link>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p
            className="text-xs opacity-40"
            style={{ fontFamily: "var(--font-raleway), sans-serif" }}
          >
            © {new Date().getFullYear()} J.Style. All rights reserved.
          </p>
          <p
            className="text-xs opacity-40"
            style={{ fontFamily: "var(--font-raleway), sans-serif" }}
          >
            Punta Gorda · Sarasota · Naples, FL
          </p>
        </div>
      </div>
    </footer>
  );
}
