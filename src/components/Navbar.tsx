"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled || !isHome ? "rgba(109, 43, 61, 0.97)" : "transparent",
        backdropFilter: scrolled || !isHome ? "blur(8px)" : "none",
        boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.15)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo variant="light" size="sm" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs tracking-widest uppercase transition-colors duration-200"
              style={{
                fontFamily: "var(--font-raleway), sans-serif",
                color: pathname === link.href ? "#C9A84C" : "#FBF7F0",
                borderBottom: pathname === link.href ? "1px solid #C9A84C" : "1px solid transparent",
                paddingBottom: "2px",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://calendly.com/jstyle-placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase px-5 py-2.5 transition-all duration-200 hover:opacity-90"
            style={{
              fontFamily: "var(--font-raleway), sans-serif",
              backgroundColor: "#C9A84C",
              color: "#FBF7F0",
              border: "1px solid #C9A84C",
            }}
          >
            Book a Call
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          style={{ color: "#FBF7F0" }}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? "500px" : "0",
          backgroundColor: "rgba(109, 43, 61, 0.98)",
        }}
      >
        <nav className="px-6 pb-6 pt-2 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs tracking-widest uppercase transition-colors duration-200"
              style={{
                fontFamily: "var(--font-raleway), sans-serif",
                color: pathname === link.href ? "#C9A84C" : "#FBF7F0",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://calendly.com/jstyle-placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase px-5 py-3 text-center transition-all duration-200"
            style={{
              fontFamily: "var(--font-raleway), sans-serif",
              backgroundColor: "#C9A84C",
              color: "#FBF7F0",
            }}
          >
            Book a Call
          </Link>
        </nav>
      </div>
    </header>
  );
}
