"use client";

import { useState } from "react";
import styles from "./TrackAbsences.module.css";
import { Button, SectionHeading } from "./ui";

export interface TrackAbsencesFeature {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

export interface TrackAbsencesProps {
  heading?: string;
  features?: TrackAbsencesFeature[];
  screenshotUrl?: string;
  screenshotAlt?: string;
}

const DEFAULT_FEATURES: TrackAbsencesFeature[] = [
  {
    title: "Skip the voicemails",
    description:
      "No more lengthy messages or missed details. Employees can text their absence in just a few taps, selecting a reason for quick, accurate documentation. Absences sync instantly with your HRIS, making time tracking effortless.",
    ctaText: "Learn more",
    ctaHref: "#",
  },
  {
    title: "Multilingual team messaging",
    description:
      "Communicate with your entire workforce in their preferred language. TeamSense automatically translates messages, ensuring every employee understands and can respond without barriers.",
    ctaText: "Learn more",
    ctaHref: "#",
  },
  {
    title: "Transparency driving accountability",
    description:
      "Give managers real-time visibility into attendance patterns. Clear records and automated documentation create a culture of accountability across every shift and department.",
    ctaText: "Learn more",
    ctaHref: "#",
  },
  {
    title: "Real-time absence alerts",
    description:
      "Supervisors are instantly notified the moment an employee calls off, with all the context they need to act fast — no chasing down voicemails or waiting for HR to relay the message.",
    ctaText: "Learn more",
    ctaHref: "#",
  },
];

const DEFAULT_SCREENSHOT =
  "https://api.builder.io/api/v1/image/assets/TEMP/c3be0c9a53aa2e731301928f4cbf5f3db4b55972?width=1000";

const CaretDown = ({ color }: { color: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M20.2959 9.79598L12.7959 17.296C12.6914 17.4009 12.5672 17.4841 12.4304 17.5409C12.2937 17.5976 12.1471 17.6269 11.999 17.6269C11.851 17.6269 11.7043 17.5976 11.5676 17.5409C11.4309 17.4841 11.3067 17.4009 11.2021 17.296L3.70215 9.79598C3.4908 9.58464 3.37207 9.29799 3.37207 8.9991C3.37207 8.70022 3.4908 8.41357 3.70215 8.20223C3.91349 7.99089 4.20014 7.87215 4.49902 7.87215C4.79791 7.87215 5.08455 7.99089 5.2959 8.20223L12 14.9063L18.704 8.20129C18.9154 7.98995 19.202 7.87122 19.5009 7.87122C19.7998 7.87122 20.0864 7.98995 20.2978 8.20129C20.5091 8.41264 20.6278 8.69928 20.6278 8.99817C20.6278 9.29705 20.5091 9.5837 20.2978 9.79504L20.2959 9.79598Z"
      fill={color}
    />
  </svg>
);

export default function TrackAbsences({
  heading = "A simple way to track absences",
  features = DEFAULT_FEATURES,
  screenshotUrl = DEFAULT_SCREENSHOT,
  screenshotAlt = "TeamSense absence reporting interface",
}: TrackAbsencesProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.section}>
      <SectionHeading title={heading} />

      <div className={styles.contentArea}>
        {/* Left: accordion */}
        <div className={styles.accordion}>
          {features.map((feature, i) => {
            const isActive = activeIndex === i;
            return (
              <div
                key={i}
                className={`${styles.accordionItem} ${isActive ? styles.accordionItemActive : ""}`}
              >
                <button
                  className={styles.accordionHeader}
                  onClick={() => setActiveIndex(i)}
                  aria-expanded={isActive}
                >
                  <span
                    className={styles.accordionTitle}
                    data-state={isActive ? "active" : "inactive"}
                  >
                    {feature.title}
                  </span>
                  <CaretDown color={isActive ? "#0A2C29" : "#767E7D"} />
                </button>

                {isActive && (
                  <div className={styles.accordionBody}>
                    <p className={styles.accordionDescription}>
                      {feature.description}
                    </p>
                    <Button href={feature.ctaHref} variant="gold" size="md">
                      {feature.ctaText}
                    </Button>
                  </div>
                )}

                {!isActive && <div className={styles.divider} />}
              </div>
            );
          })}
        </div>

        {/* Right: product screenshot */}
        <div className={styles.screenshotWrapper}>
          <img
            src={screenshotUrl}
            alt={screenshotAlt}
            className={styles.screenshot}
          />
        </div>
      </div>
    </section>
  );
}
