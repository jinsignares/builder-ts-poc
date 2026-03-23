"use client";

import { useState } from "react";

const CaretIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.94354 8.94313C7.25108 8.63559 7.7497 8.63559 8.05724 8.94313L12.5004 13.3863L16.9435 8.94313C17.2511 8.63559 17.7497 8.63559 18.0572 8.94313C18.3648 9.25067 18.3648 9.74928 18.0572 10.0568L13.0572 15.0568C12.7497 15.3644 12.2511 15.3644 11.9435 15.0568L6.94354 10.0568C6.63601 9.74928 6.63601 9.25067 6.94354 8.94313Z"
      fill="#145851"
    />
  </svg>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "2px",
    padding: "4px 4px 4px 8px",
    borderRadius: "4px",
    textDecoration: "none",
    color: "#145851",
    fontFamily: "Urbanist, -apple-system, Roboto, Helvetica, sans-serif",
    fontSize: "16px",
    fontWeight: 800,
    lineHeight: "22px",
    letterSpacing: "0.16px",
    whiteSpace: "nowrap" as const,
  };

  const plainNavLinkStyle: React.CSSProperties = {
    ...navLinkStyle,
    padding: "4px 8px",
  };

  return (
    <header
      className="w-full sticky top-0 z-[100] bg-white"
      style={{ boxShadow: "2px 4px 12px 0 rgba(95,99,104,0.16), 0 8px 32px 0 rgba(95,99,104,0.04)" }}
    >
      {/* Desktop / main bar */}
      <div className="max-w-[1200px] mx-auto px-8 h-[90px] flex items-center justify-between gap-6">

        {/* Logo */}
        <a href="#" className="flex items-center shrink-0 no-underline">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a3ff7de3889e43a68ed3513edf11d104943f4cb2?width=359"
            alt="TeamSense"
            style={{ width: "180px", height: "32px", objectFit: "contain" }}
          />
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-2 flex-1 justify-center">
          <a href="#" style={navLinkStyle}>
            Product <CaretIcon />
          </a>
          <a href="#" style={navLinkStyle}>
            Why TeamSense <CaretIcon />
          </a>
          <a href="#" style={navLinkStyle}>
            Resources <CaretIcon />
          </a>
          <a href="#" style={plainNavLinkStyle}>
            Pricing
          </a>
        </nav>

        {/* Desktop CTA buttons */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href="#"
            className="flex items-center justify-center no-underline"
            style={{
              height: "56px",
              padding: "16px 24px",
              borderRadius: "8px",
              background: "#fff",
              color: "#1C7E74",
              fontFamily: "Urbanist, -apple-system, Roboto, Helvetica, sans-serif",
              fontSize: "16px",
              fontWeight: 800,
              lineHeight: "22px",
              letterSpacing: "0.16px",
              whiteSpace: "nowrap",
            }}
          >
            Sign in
          </a>
          <a
            href="#"
            className="flex items-center justify-center no-underline"
            style={{
              height: "56px",
              padding: "16px 24px",
              borderRadius: "8px",
              background: "#F6B725",
              color: "#0E3F3A",
              fontFamily: "Urbanist, -apple-system, Roboto, Helvetica, sans-serif",
              fontSize: "16px",
              fontWeight: 800,
              lineHeight: "22px",
              letterSpacing: "0.16px",
              whiteSpace: "nowrap",
            }}
          >
            Book a Demo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] bg-transparent border-none cursor-pointer p-1"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className="block w-6 bg-[#145851] rounded-sm transition-all duration-250 origin-center"
            style={{ height: "2px", transform: menuOpen ? "translateY(7px) rotate(45deg)" : undefined }}
          />
          <span
            className="block w-6 bg-[#145851] rounded-sm transition-all duration-250"
            style={{ height: "2px", opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-6 bg-[#145851] rounded-sm transition-all duration-250 origin-center"
            style={{ height: "2px", transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : undefined }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden flex flex-col gap-6 px-8 py-6 bg-white"
          style={{ borderTop: "1px solid rgba(20,88,81,0.12)" }}
        >
          <nav className="flex flex-col gap-4">
            {["Product", "Why TeamSense", "Resources", "Pricing"].map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "#145851",
                  fontFamily: "Urbanist, -apple-system, Roboto, Helvetica, sans-serif",
                  fontSize: "16px",
                  fontWeight: 800,
                  lineHeight: "22px",
                  letterSpacing: "0.16px",
                  textDecoration: "none",
                }}
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              style={{
                height: "48px",
                padding: "12px 20px",
                borderRadius: "8px",
                background: "#fff",
                color: "#1C7E74",
                fontFamily: "Urbanist, -apple-system, Roboto, Helvetica, sans-serif",
                fontSize: "16px",
                fontWeight: 800,
                letterSpacing: "0.16px",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              Sign in
            </a>
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              style={{
                height: "48px",
                padding: "12px 20px",
                borderRadius: "8px",
                background: "#F6B725",
                color: "#0E3F3A",
                fontFamily: "Urbanist, -apple-system, Roboto, Helvetica, sans-serif",
                fontSize: "16px",
                fontWeight: 800,
                letterSpacing: "0.16px",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
