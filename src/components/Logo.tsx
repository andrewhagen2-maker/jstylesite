import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { box: 36, font: 16 },
  md: { box: 48, font: 21 },
  lg: { box: 64, font: 28 },
};

export default function Logo({ variant = "dark", size = "md" }: LogoProps) {
  const { box, font } = sizes[size];
  const ringColor = variant === "light" ? "#C9A84C" : "#C9A84C";
  const textColor = variant === "light" ? "#FBF7F0" : "#6D2B3D";
  const bgColor = variant === "light" ? "transparent" : "transparent";

  return (
    <Link href="/" className="flex items-center gap-3 group" aria-label="J.Style Home">
      {/* Monogram medallion */}
      <svg
        width={box}
        height={box}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="32" cy="32" r="30" stroke={ringColor} strokeWidth="1.5" fill={bgColor} />
        <circle cx="32" cy="32" r="26" stroke={ringColor} strokeWidth="0.5" opacity="0.5" />
        <text
          x="32"
          y="40"
          textAnchor="middle"
          fill={textColor}
          fontSize={font}
          fontFamily="var(--font-cormorant), Georgia, serif"
          fontStyle="italic"
          fontWeight="400"
          letterSpacing="2"
        >
          JS
        </text>
      </svg>

      {/* Wordmark */}
      <span
        className="tracking-widest uppercase transition-opacity group-hover:opacity-80"
        style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontStyle: "italic",
          fontSize: font,
          color: variant === "light" ? "#FBF7F0" : "#6D2B3D",
          letterSpacing: "0.2em",
          fontWeight: 400,
        }}
      >
        J.Style
      </span>
    </Link>
  );
}
