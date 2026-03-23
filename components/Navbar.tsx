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

const NAV_LINKS = ["Product", "Why TeamSense", "Resources"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Logo */}
        <a href="#" className={styles.logo}>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a3ff7de3889e43a68ed3513edf11d104943f4cb2?width=359"
            alt="TeamSense"
            className={styles.logoImage}
          />
        </a>

        {/* Desktop nav */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {NAV_LINKS.map((label) => (
            <a key={label} href="#" className={styles.navLink}>
              {label} <CaretIcon />
            </a>
          ))}
          <a href="#" className={`${styles.navLink} ${styles.navLinkPlain}`}>
            Pricing
          </a>
        </nav>

        {/* Desktop CTA buttons */}
        <div className={styles.desktopActions}>
          <a href="#" className={styles.signInBtn}>Sign in</a>
          <a href="#" className={styles.bookDemoBtn}>Book a Demo</a>
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
          {[...NAV_LINKS, "Pricing"].map((label) => (
            <a
              key={label}
              href="#"
              className={styles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className={styles.mobileActions}>
          <a href="#" className={styles.mobileSignIn} onClick={() => setMenuOpen(false)}>
            Sign in
          </a>
          <a href="#" className={styles.mobileBookDemo} onClick={() => setMenuOpen(false)}>
            Book a Demo
          </a>
        </div>
      </div>
    </header>
  );
}
