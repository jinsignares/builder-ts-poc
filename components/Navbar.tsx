"use client";

import { builder } from "@builder.io/sdk";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import styles from "./Navbar.module.css";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

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
  href?: string;
  noFollow?: boolean;
  openInNewTab?: boolean;
  linkDescription?: string;
  shortLabel?: string;
  children?: NavLink[];
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
  useGlobalSettings?: boolean;
  siteSettingsData?: SiteSettingsData;
}

const DEFAULT_NAV_LINKS: NavLink[] = [
  {
    label: "Product",
    children: [
      { label: "Attendance", href: "#", linkDescription: "Automated absence reporting and attendance insights." },
      { label: "Messaging", href: "#", linkDescription: "Text-first communication for frontline teams." },
      { label: "Integrations", href: "#", linkDescription: "Connect with your HRIS and workforce tools." },
    ],
  },
  {
    label: "Why TeamSense",
    children: [
      { label: "Manufacturing", href: "#" },
      { label: "Logistics", href: "#" },
      { label: "Food & Beverage", href: "#" },
    ],
  },
  {
    label: "Resources",
    children: [
      {
        label: "Resources",
        linkDescription: "Educational content, tools, and customer stories.",
      },
      {
        label: "Learn",
        shortLabel: "LEARN",
        children: [
          { label: "Blog", href: "/blog" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "Webinars", href: "/webinars" },
        ],
      },
      {
        label: "Connect",
        shortLabel: "CONNECT",
        children: [
          { label: "Contact", href: "/contact" },
          { label: "Book a Demo", href: "/demo" },
        ],
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
];

export type SiteSettingsData = {
  headerMenu?: unknown;
  signInText?: string;
  signInHref?: string;
  ctaText?: string;
  ctaHref?: string;
};

function isExternalUrl(href?: string): boolean {
  if (!href) return false;
  return href.startsWith("http://") || href.startsWith("https://");
}

function normalizeNavItem(raw: unknown, depth = 1): NavLink | null {
  if (!raw || typeof raw !== "object" || depth > 3) {
    return null;
  }

  const item = raw as Record<string, unknown>;
  const labelValue = item.label ?? item.title ?? item.name;
  if (typeof labelValue !== "string" || !labelValue.trim()) {
    return null;
  }

  const hrefValue = item.href ?? item.buttonUrl ?? item.url;
  const href = typeof hrefValue === "string" && hrefValue.length ? hrefValue : undefined;

  const childrenSource =
    item.children ?? item.items ?? item.subLinks ?? item.links ?? item.grandChildren;
  const children = Array.isArray(childrenSource)
    ? childrenSource
        .map((child) => normalizeNavItem(child, depth + 1))
        .filter((child): child is NavLink => !!child)
    : undefined;

  return {
    label: labelValue,
    href,
    noFollow: Boolean(item.noFollow),
    openInNewTab:
      typeof item.openInNewTab === "boolean"
        ? item.openInNewTab
        : typeof item.newTab === "boolean"
          ? item.newTab
          : isExternalUrl(href),
    linkDescription:
      typeof item.linkDescription === "string"
        ? item.linkDescription
        : typeof item.description === "string"
          ? item.description
          : undefined,
    shortLabel: typeof item.shortLabel === "string" ? item.shortLabel : undefined,
    children: children?.length ? children : undefined,
  };
}

function normalizeHeaderMenu(rawMenu: unknown): NavLink[] {
  if (!Array.isArray(rawMenu)) return DEFAULT_NAV_LINKS;

  const menu = rawMenu
    .map((item) => normalizeNavItem(item))
    .filter((item): item is NavLink => !!item);

  return menu.length ? menu : DEFAULT_NAV_LINKS;
}

function getAnchorProps(link: NavLink): { rel?: string; target?: "_blank" } {
  const relParts: string[] = [];

  if (link.noFollow) {
    relParts.push("nofollow");
  }

  if (link.openInNewTab) {
    relParts.push("noopener", "noreferrer");
  }

  const rel = relParts.length ? relParts.join(" ") : undefined;
  const target = link.openInNewTab ? "_blank" : undefined;
  return { rel, target };
}

function flattenMenuLinks(items: NavLink[]): NavLink[] {
  const links: NavLink[] = [];

  for (const item of items) {
    if (item.href) {
      links.push(item);
    }

    if (item.children?.length) {
      links.push(...flattenMenuLinks(item.children));
    }
  }

  return links;
}

export default function Navbar({
  logoUrl = "https://api.builder.io/api/v1/image/assets/TEMP/a3ff7de3889e43a68ed3513edf11d104943f4cb2?width=359",
  logoAlt = "TeamSense",
  logoHref = "#",
  navLinks = DEFAULT_NAV_LINKS,
  signInText = "Sign in",
  signInHref = "#",
  ctaText = "Book a Demo",
  ctaHref = "#",
  useGlobalSettings = true,
  siteSettingsData,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fetchedSiteSettings, setFetchedSiteSettings] = useState<SiteSettingsData | null>(null);

  useEffect(() => {
    if (!useGlobalSettings || siteSettingsData) return;

    let active = true;

    const loadSiteSettings = async () => {
      try {
        const content = await builder.get("site-settings").toPromise();
        const data = (content?.data ?? {}) as SiteSettingsData;

        if (!active) return;
        setFetchedSiteSettings(data);
      } catch {
        if (!active) return;
        setFetchedSiteSettings(null);
      }
    };

    loadSiteSettings();

    return () => {
      active = false;
    };
  }, [useGlobalSettings, siteSettingsData]);

  const effectiveSiteSettings = siteSettingsData ?? fetchedSiteSettings;

  const resolvedNavLinks = useMemo(
    () =>
      effectiveSiteSettings?.headerMenu
        ? normalizeHeaderMenu(effectiveSiteSettings.headerMenu)
        : navLinks.length
          ? navLinks
          : DEFAULT_NAV_LINKS,
    [effectiveSiteSettings, navLinks]
  );

  const resolvedSignInText = effectiveSiteSettings?.signInText || signInText;
  const resolvedSignInHref = effectiveSiteSettings?.signInHref || signInHref;
  const resolvedCtaText = effectiveSiteSettings?.ctaText || ctaText;
  const resolvedCtaHref = effectiveSiteSettings?.ctaHref || ctaHref;

  const mobileLinks = useMemo(
    () => flattenMenuLinks(resolvedNavLinks).filter((item, index, array) => {
      const key = `${item.label}-${item.href}`;
      return array.findIndex((link) => `${link.label}-${link.href}` === key) === index;
    }),
    [resolvedNavLinks]
  );

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Logo */}
        <a href={logoHref} className={styles.logo}>
          <Image src={logoUrl} alt={logoAlt} className={styles.logoImage} width={180} height={32} priority />
        </a>

        {/* Desktop nav */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {resolvedNavLinks.map((link) => {
            const hasDropdown = Boolean(link.children?.length);

            if (!hasDropdown && link.href) {
              const anchorProps = getAnchorProps(link);
              return (
                <a key={link.label} href={link.href} className={`${styles.navLink} ${styles.navLinkPlain}`} {...anchorProps}>
                  {link.label}
                </a>
              );
            }

            return (
              <div key={link.label} className={styles.navItem}>
                {link.href ? (
                  <a href={link.href} className={styles.navLink} {...getAnchorProps(link)}>
                    {link.label} {hasDropdown && <CaretIcon />}
                  </a>
                ) : (
                  <button type="button" className={styles.navTrigger}>
                    {link.label} {hasDropdown && <CaretIcon />}
                  </button>
                )}

                {hasDropdown ? (
                  <div
                    className={`${styles.dropdown} ${link.label.toLowerCase() === "resources" ? styles.dropdownResources : ""}`}
                  >
                    {link.label.toLowerCase() === "resources" ? (
                      <ul className={styles.dropdownList}>
                        {link.children?.map((child) => {
                          if (child.label === "Resources" && !child.children?.length) {
                            return (
                              <li key={child.label} className={styles.dropdownHeader}>
                                <span>{child.label}</span>
                                {child.linkDescription ? <small>{child.linkDescription}</small> : null}
                              </li>
                            );
                          }

                          if (child.children?.length) {
                            return (
                              <li key={child.label}>
                                <span className={styles.dropdownSectionTitle}>{child.shortLabel || child.label}</span>
                                <ul className={styles.dropdownNestedList}>
                                  {child.children.map((grandChild) => (
                                    <li key={`${child.label}-${grandChild.label}`}>
                                      {grandChild.href ? (
                                        <a href={grandChild.href} className={styles.dropdownLink} {...getAnchorProps(grandChild)}>
                                          {grandChild.label}
                                        </a>
                                      ) : (
                                        <span className={styles.dropdownText}>{grandChild.label}</span>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            );
                          }

                          if (child.href) {
                            return (
                              <li key={child.label}>
                                <a href={child.href} className={styles.dropdownLink} {...getAnchorProps(child)}>
                                  {child.label}
                                </a>
                              </li>
                            );
                          }

                          return null;
                        })}
                      </ul>
                    ) : (
                      <ul className={styles.dropdownList}>
                        {link.children?.map((child) => (
                          <li key={child.label}>
                            {child.href ? (
                              <a href={child.href} className={styles.dropdownLink} {...getAnchorProps(child)}>
                                {child.label}
                              </a>
                            ) : (
                              <span className={styles.dropdownText}>{child.label}</span>
                            )}
                            {child.linkDescription ? <small>{child.linkDescription}</small> : null}
                            {child.children?.length ? (
                              <ul className={styles.dropdownNestedList}>
                                {child.children.map((grandChild) => (
                                  <li key={`${child.label}-${grandChild.label}`}>
                                    {grandChild.href ? (
                                      <a href={grandChild.href} className={styles.dropdownLink} {...getAnchorProps(grandChild)}>
                                        {grandChild.label}
                                      </a>
                                    ) : (
                                      <span className={styles.dropdownText}>{grandChild.label}</span>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        {/* Desktop CTA buttons */}
        <div className={styles.desktopActions}>
          <a href={resolvedSignInHref} className={styles.signInBtn}>{resolvedSignInText}</a>
          <a href={resolvedCtaHref} className={styles.bookDemoBtn}>{resolvedCtaText}</a>
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
          {mobileLinks.map((link) => (
            <a
              key={`${link.label}-${link.href}`}
              href={link.href || "#"}
              className={styles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
              {...getAnchorProps(link)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className={styles.mobileActions}>
          <a href={resolvedSignInHref} className={styles.mobileSignIn} onClick={() => setMenuOpen(false)}>
            {resolvedSignInText}
          </a>
          <a href={resolvedCtaHref} className={styles.mobileBookDemo} onClick={() => setMenuOpen(false)}>
            {resolvedCtaText}
          </a>
        </div>
      </div>
    </header>
  );
}
