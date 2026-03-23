import styles from "./Hero.module.css";

/**
 * Full-width hero banner for the TeamSense homepage.
 *
 * Displays the "Automated, Text-First Absence Reporting at Your Fingertips"
 * headline with CTA buttons and an interactive product illustration showing
 * the employee/supervisor messaging flow and dashboard mockup.
 *
 * No props — all content is hard-coded. Place directly below `<Navbar />`.
 *
 * @see design-system-docs/Hero.mdx for full usage guidelines.
 */
export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Text content */}
      <div className={styles.heroContent}>
        <div className={styles.headlines}>
          <h1 className={styles.heroTitle}>
            <span className={styles.titleWhite}>Automated, </span>
            <span className={styles.titleGold}>Text-First Absence</span>
            <span className={styles.titleWhite}> Reporting at Your Fingertips</span>
          </h1>
          <p className={styles.heroSubtitle}>
            TeamSense meets employees where they are, in their native language, with no training
            required. Employees call off via text, and the system takes care of the rest.
          </p>
        </div>
        <div className={styles.ctaButtons}>
          <a href="#" className={styles.btnDemo}>Book a Demo</a>
          <a href="#" className={styles.btnTour}>Take a Tour</a>
        </div>
      </div>

      {/* Product illustration */}
      <div className={styles.illustration}>
        {/* Dashed curved connector path */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/fddba87a48c41deca70ff3c64756b28e1c5d7668?width=1961"
          alt=""
          className={styles.connectorPath}
        />

        {/* Employee avatar — left side */}
        <div className={styles.employeeAvatar}>
          <div className={styles.avatarCircle}>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/39966aadca4fff78a940cd568df0e4c4869dc092?width=347"
              alt="Employee"
              className={styles.employeePhoto}
            />
          </div>
        </div>

        {/* Employee sick message bubble */}
        <div className={styles.sickBubble}>I&apos;m sick, I can&apos;t come in.</div>

        {/* TeamSense automated response */}
        <div className={styles.systemResponse}>
          <p className={styles.responseLabel}>TeamSense</p>
          <div className={styles.responseCard}>
            <p className={styles.responseText}>
              Sorry to hear that, Eva.
              <br />
              Complete this form to notify your supervisor of your absence
              <br />
              <span className={styles.responseLink}>https://tmsns.com/s/91ks5l1j</span>
            </p>
          </div>
        </div>

        {/* Paper plane send icon */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/9ffaaae1dd0b423b9b8e48f9d7b7208776bcfa94?width=113"
          alt=""
          className={styles.paperPlane}
        />

        {/* Center phone / dashboard mockup */}
        <div className={styles.centerMockup}>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a0aec7389b59c267fe9e6cb147a75e605ac97963?width=764"
            alt=""
            className={styles.mockupCircleBg}
          />
          <div className={styles.mockupUI}>
            <div className={styles.mockupCard}>
              <p className={styles.mockupGreeting}>Hi, Eva.</p>

              {/* Attendance points card */}
              <div className={styles.attendanceCard}>
                <div className={styles.attendanceTopRow}>
                  <div className={styles.attendanceLeft}>
                    <span className={styles.pointsNumber}>5</span>
                    <span className={styles.warningPill}>Approaching Written Warning</span>
                  </div>
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.08875 1.51666C6.78891 1.51666 5.51825 1.90211 4.43746 2.62427C3.35668 3.34643 2.51431 4.37286 2.01688 5.57376C1.51945 6.77466 1.3893 8.0961 1.64289 9.37098C1.89647 10.6458 2.52241 11.8169 3.44154 12.736C4.36067 13.6552 5.53172 14.2811 6.80659 14.5347C8.08146 14.7883 9.4029 14.6581 10.6038 14.1607C11.8047 13.6633 12.8311 12.8209 13.5533 11.7401C14.2755 10.6593 14.6609 9.38866 14.6609 8.08881C14.6591 6.34633 13.9661 4.67575 12.7339 3.44363C11.5018 2.21151 9.83123 1.5185 8.08875 1.51666ZM8.08875 13.6499C6.98888 13.6499 5.91371 13.3237 4.9992 12.7127C4.08469 12.1016 3.37192 11.2331 2.95101 10.2169C2.53011 9.20079 2.41998 8.08264 2.63456 7.00391C2.84913 5.92517 3.37877 4.93428 4.1565 4.15656C4.93423 3.37883 5.92511 2.84919 7.00385 2.63462C8.08259 2.42004 9.20073 2.53017 10.2169 2.95107C11.233 3.37197 12.1015 4.08475 12.7126 4.99926C13.3237 5.91377 13.6498 6.98894 13.6498 8.08881C13.6481 9.56318 13.0617 10.9767 12.0192 12.0192C10.9766 13.0618 9.56312 13.6482 8.08875 13.6499Z" fill="#145851"/>
                  </svg>
                </div>
                <p className={styles.attendanceLabel}>of 10 Attendance Points used</p>
                <p className={styles.attendanceDate}>as of Today at 1:48pm EST</p>
                <div className={styles.pointsSliderTrack}>
                  <div className={styles.pointsSliderFill}></div>
                </div>
              </div>

              {/* Report Absence button */}
              <div className={styles.reportAbsenceBtn}>
                <span>Report Absence</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5663 7.03874L5.35338 11.2517C5.31424 11.2908 5.26777 11.3218 5.21663 11.343C5.16548 11.3642 5.11067 11.3751 5.05531 11.3751C4.99996 11.3751 4.94515 11.3642 4.894 11.343C4.84286 11.3218 4.79639 11.2908 4.75725 11.2517C4.71811 11.2125 4.68706 11.166 4.66588 11.1149C4.64469 11.0638 4.63379 11.0089 4.63379 10.9536C4.63379 10.8982 4.64469 10.8434 4.66588 10.7923C4.68706 10.7411 4.71811 10.6947 4.75725 10.6555L8.67263 6.74067L4.75725 2.82582C4.6782 2.74677 4.63379 2.63955 4.63379 2.52776C4.63379 2.41596 4.6782 2.30875 4.75725 2.22969C4.8363 2.15064 4.94352 2.10623 5.05531 2.10623C5.16711 2.10623 5.27433 2.15064 5.35338 2.22969L9.5663 6.44261C9.60547 6.48174 9.63654 6.5282 9.65774 6.57934C9.67894 6.63049 9.68985 6.68531 9.68985 6.74067C9.68985 6.79604 9.67894 6.85086 9.65774 6.902C9.63654 6.95315 9.60547 6.99961 9.5663 7.03874Z" fill="white"/>
                </svg>
              </div>

              {/* View Attendance History button */}
              <div className={styles.viewHistoryBtn}>
                <span>View Attendance History</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.2519 6.44261C11.291 6.48174 11.3221 6.5282 11.3433 6.57934C11.3645 6.63049 11.3754 6.68531 11.3754 6.74067C11.3754 6.79604 11.3645 6.85086 11.3433 6.902C11.3221 6.95315 11.291 6.99961 11.2519 7.03874L7.03895 11.2517C6.99983 11.2908 6.95336 11.3219 6.90222 11.3431C6.85107 11.3643 6.79625 11.3752 6.74089 11.3752C6.68552 11.3752 6.6307 11.3643 6.57956 11.3431C6.52841 11.3219 6.48195 11.2908 6.44282 11.2517L2.22991 7.03874C2.15086 6.95969 2.10645 6.85247 2.10645 6.74067C2.10645 6.62888 2.15086 6.52166 2.22991 6.44261C2.30896 6.36356 2.41618 6.31915 2.52797 6.31915C2.63977 6.31915 2.74698 6.36356 2.82604 6.44261L6.74089 10.358L10.6557 6.44261C10.6949 6.40344 10.7413 6.37237 10.7925 6.35116C10.8436 6.32996 10.8984 6.31905 10.9538 6.31905C11.0092 6.31905 11.064 6.32996 11.1151 6.35116C11.1663 6.37237 11.2127 6.40344 11.2519 6.44261ZM6.44282 7.03874C6.48195 7.07791 6.52841 7.10898 6.57956 7.13018C6.6307 7.15138 6.68552 7.1623 6.74089 7.1623C6.79625 7.1623 6.85107 7.15138 6.90222 7.13018C6.95336 7.10898 6.99983 7.07791 7.03895 7.03874L11.2519 2.82582C11.3309 2.74677 11.3753 2.63955 11.3753 2.52776C11.3753 2.41596 11.3309 2.30875 11.2519 2.22969C11.1728 2.15064 11.0656 2.10623 10.9538 2.10623C10.842 2.10623 10.7348 2.15064 10.6557 2.22969L6.74089 6.14507L2.82604 2.22969C2.74698 2.15064 2.63977 2.10623 2.52797 2.10623C2.41618 2.10623 2.30896 2.15064 2.22991 2.22969C2.15086 2.30875 2.10645 2.41596 2.10645 2.52776C2.10645 2.63955 2.15086 2.74677 2.22991 2.82582L6.44282 7.03874Z" fill="#145851"/>
                </svg>
              </div>
            </div>

            {/* Absence occurrences list at bottom of mockup */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/4da86f746e4d7638efe5f703aeb2badb666e4420?width=506"
              alt="Recent absence occurrences"
              className={styles.absenceOccurrences}
            />
          </div>
        </div>

        {/* Supervisor avatar — right side */}
        <div className={styles.supervisorAvatar}>
          <div className={styles.supervisorCircle}>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/267e0a21839e42c5dd7e105652ed05e120d583b8?width=391"
              alt="Supervisor"
              className={styles.supervisorPhoto}
            />
          </div>
        </div>

        {/* TeamSense push notification */}
        <div className={styles.notificationCard}>
          <div className={styles.notifIconWrapper}>
            <div className={styles.notifIconBg}>
              <span className={styles.notifInitial}>T</span>
            </div>
            <div className={styles.notifStatusDot}></div>
          </div>
          <div className={styles.notifBody}>
            <div className={styles.notifHeader}>
              <span className={styles.notifSender}>TeamSense</span>
              <span className={styles.notifTime}>now</span>
            </div>
            <p className={styles.notifMessage}>
              There&apos;s a new Unscheduled Absence today (Eva Hernandez - Sick).{" "}
              <span className={styles.notifLink}>https://app.teamsense.com/dashbo...</span>
            </p>
          </div>
        </div>

        {/* Synced to ADP pill */}
        <div className={styles.adpSyncPill}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.1163 13.8756C13.7745 14.2173 13.2205 14.2173 12.8788 13.8756L12.1347 13.1315C11.793 12.7898 11.239 12.7898 10.8973 13.1315L10.8149 13.2139C10.4732 13.5557 10.4732 14.1097 10.8149 14.4514L12.8823 16.5188C13.224 16.8606 13.7781 16.8606 14.1198 16.5188L17.5036 13.135C17.8453 12.7933 17.8453 12.2393 17.5036 11.8976L17.4176 11.8117C17.0759 11.47 16.5219 11.47 16.1802 11.8117L14.1163 13.8756Z" fill="#EFF6F5"/>
            <path d="M8.71367 19.2861C6.04434 16.6076 5.83044 12.3792 8.07198 9.4523C8.34877 9.09088 8.89433 9.20593 9.05266 9.63274C9.2947 10.2852 10.2617 10.1117 10.2617 9.41572V6.47803C10.2617 5.99478 9.86991 5.60303 9.38666 5.60303H6.66325C5.87041 5.60303 5.65661 6.69542 6.39095 6.99431C6.86969 7.18918 6.99585 7.81247 6.67481 8.21757C3.7747 11.877 4.0163 17.2218 7.39962 20.6051C9.51819 22.7191 12.4014 23.6079 15.1619 23.2599C15.5743 23.2079 15.8663 22.8452 15.8663 22.4296V22.3534C15.8663 21.7809 15.3236 21.364 14.7541 21.4229C12.5986 21.6461 10.3634 20.9359 8.71367 19.2861Z" fill="#EFF6F5"/>
            <path d="M20.6005 7.4048C18.4819 5.28165 15.5987 4.3921 12.8382 4.74004C12.4258 4.79201 12.1338 5.15476 12.1338 5.57037V5.64653C12.1338 6.21903 12.6765 6.63601 13.246 6.5776C15.4026 6.35644 17.6408 7.07327 19.2864 8.71885C21.9656 11.398 22.1796 15.6279 19.9285 18.5549C19.6512 18.9155 19.1062 18.8001 18.9479 18.3735C18.7058 17.7208 17.7384 17.8944 17.7384 18.5906V21.5319C17.7384 22.0151 18.1302 22.4069 18.6134 22.4069H21.3406C22.1337 22.4069 22.3475 21.3141 21.6129 21.0151C21.1344 20.8204 21.008 20.1976 21.3284 19.7924C24.2254 16.1289 23.9841 10.7838 20.6005 7.4048Z" fill="#EFF6F5"/>
          </svg>
          <span className={styles.syncedLabel}>Synced to</span>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/dd4c54fcb69a6f279649575651f5406c15159a4d?width=106"
            alt="ADP"
            className={styles.adpLogo}
          />
        </div>
      </div>
    </section>
  );
}
