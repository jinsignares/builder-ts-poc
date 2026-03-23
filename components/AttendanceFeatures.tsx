"use client";

import { useState } from "react";
import styles from "./AttendanceFeatures.module.css";

const TABS = [
  "Lorem ipsum",
  "Lorem ipsum",
  "Lorem ipsum",
  "Lorem ipsum",
  "Lorem ipsum",
];

export default function AttendanceFeatures() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Attendance is just the beginning</h2>
        <p className={styles.subheading}>
          One habit builds trust. What follows powers the entire shift.
        </p>
      </div>

      <nav className={styles.tabNav} aria-label="Feature tabs">
        {TABS.map((label, i) => (
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
            src="https://api.builder.io/api/v1/image/assets/TEMP/7b2be460f77ddfe42d630981bd909e4b2f6ff33c?width=1434"
            alt="TeamSense feature diagram showing the attendance and workflow cycle"
            className={styles.diagramImage}
          />
        </div>
      </div>
    </section>
  );
}
