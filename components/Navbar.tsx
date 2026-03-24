"use client";

import { useState } from "react";
import styles from "./Navbar.module.css";

const CaretIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.94354 8.94313C7.25108 8.63559 7.7497 8.63559 8.05724 8.94313L12.5004 13.3863L16.9435 8.94313C17.2511 8.63559 17.7497 8.63559 18.0572 8.94313C18.3648 9.25067 18.3648 9.74928 18.0572 10.0568L13.0572 15.0568C12.7497 15.3644 12.2511 15.3644 11.9435 15.0568L6.94354 10.0568C6.63601 9.74928 6.63601 9.25067 6.94354 8.94313Z"
      fill="#145851"
    />
  </svg>
);

export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface NavbarProps {
  logoUrl?: string;
  logoAlt?: string;
  logoHref?: string;
  navLinks?: NavLink[];
  signInText?: string;
  signInHref?: string;
  ctaText?: string;
  ctaHref?: string;
}

const DEFAULT_NAV_LINKS: NavLink[] = [
  { label: "Product", href: "#", hasDropdown: true },
  { label: "Why TeamSense", href: "#", hasDropdown: true },
  { label: "Resources", href: "#", hasDropdown: true },
  { label: "Pricing", href: "#", hasDropdown: false },
];

export default function Navbar({
  logoUrl = "https://api.builder.io/api/v1/image/assets/TEMP/a3ff7de3889e43a68ed3513edf11d104943f4cb2?width=359",
  logoAlt = "TeamSense",
  logoHref = "#",
  navLinks = DEFAULT_NAV_LINKS,
  signInText = "Sign in",
  signInHref = "#",
  ctaText = "Book a Demo",
  ctaHref = "#",
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Logo */}
        <a href={logoHref} className={styles.logo}>
          <img src={logoUrl} alt={logoAlt} className={styles.logoImage} />
        </a>

        {/* Desktop nav */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`${styles.navLink} ${link.hasDropdown ? "" : styles.navLinkPlain}`}
            >
              {link.label} {link.hasDropdown && <CaretIcon />}
            </a>
          ))}
        </nav>

        {/* Desktop CTA buttons */}
        <div className={styles.desktopActions}>
          <a href={signInHref} className={styles.signInBtn}>{signInText}</a>
          <a href={ctaHref} className={styles.bookDemoBtn}>{ctaText}</a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`${styles.hamburgerBar} ${menuOpen ? styles["hamburgerBar--top-open"] : ""}`} />
          <span className={`${styles.hamburgerBar} ${menuOpen ? styles["hamburgerBar--mid-open"] : ""}`} />
          <span className={`${styles.hamburgerBar} ${menuOpen ? styles["hamburgerBar--bot-open"] : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? "" : styles["mobileMenu--hidden"]}`}>
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className={styles.mobileActions}>
          <a href={signInHref} className={styles.mobileSignIn} onClick={() => setMenuOpen(false)}>
            {signInText}
          </a>
          <a href={ctaHref} className={styles.mobileBookDemo} onClick={() => setMenuOpen(false)}>
            {ctaText}
          </a>
        </div>
      </div>
    </header>
  );
}
