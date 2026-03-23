"use client";

import { useState } from "react";
import styles from "./AttendanceFeatures.module.css";
import { SectionHeading } from "./ui";

export interface AttendanceFeaturesProps {
  heading?: string;
  subheading?: string;
  tabs?: string[];
  diagramUrl?: string;
}

const DEFAULT_TABS = [
  "Absence Reporting",
  "Attendance Tracking",
  "Team Messaging",
  "Alerts & Notifications",
  "HRIS Integration",
];

const DEFAULT_DIAGRAM =
  "https://api.builder.io/api/v1/image/assets/TEMP/7b2be460f77ddfe42d630981bd909e4b2f6ff33c?width=1434";

export default function AttendanceFeatures({
  heading = "Attendance is just the beginning",
  subheading = "One habit builds trust. What follows powers the entire shift.",
  tabs = DEFAULT_TABS,
  diagramUrl = DEFAULT_DIAGRAM,
}: AttendanceFeaturesProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className={styles.section}>
      <SectionHeading title={heading} subtitle={subheading} />

      <nav className={styles.tabNav} aria-label="Feature tabs">
        {tabs.map((label, i) => (
          <button
            key={i}
            className={`${styles.tab} ${activeTab === i ? styles.tabActive : ""}`}
            onClick={() => setActiveTab(i)}
            aria-selected={activeTab === i}
            role="tab"
          >
            <span className={styles.tabLabel}>{label}</span>
            <span className={styles.tabUnderline} />
          </button>
        ))}
      </nav>

      <div className={styles.contentArea}>
        <div className={styles.overlayShape} />
        <div className={styles.diagramWrapper}>
          <img
            src={diagramUrl}
            alt="TeamSense feature diagram showing the attendance and workflow cycle"
            className={styles.diagramImage}
          />
        </div>
      </div>
    </section>
  );
}
