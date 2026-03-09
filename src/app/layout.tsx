import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "J.Style | Personal Stylist & Lifestyle Consultant | Southwest Florida",
    template: "%s | J.Style",
  },
  description:
    "J.Style offers personal styling, wardrobe consulting, and lifestyle advisory services in Punta Gorda, Sarasota, and Naples, FL. Elevate your image with a touch of timeless elegance.",
  keywords: [
    "personal stylist Punta Gorda",
    "wardrobe consultant Sarasota",
    "fashion stylist Naples FL",
    "lifestyle consultant Southwest Florida",
    "wardrobe stylist Florida",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "J.Style",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${raleway.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
