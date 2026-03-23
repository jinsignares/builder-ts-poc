import styles from "./SocialProof.module.css";

const testimonials = [
  {
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/58a7f17a0a8515fbbe99b7d53632a83bf748fada?width=250",
    logoAlt: "Kenco",
    quote: "Reduced absenteeism by 39% within three months",
  },
  {
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/d2585c660b4f5c9b22b109691bdfc425bc99b639?width=258",
    logoAlt: "Hello Fresh",
    quote: "Saves $2.6M a year by reducing overtime expenses and no-call and no-shows",
  },
];

export default function SocialProof() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        Proudly serving leading manufacturing and logistics companies
      </h2>
      <div className={styles.testimonialsRow}>
        {testimonials.map((t) => (
          <div key={t.logoAlt} className={styles.testimonialCard}>
            <img
              src={t.logo}
              alt={t.logoAlt}
              className={styles.companyLogo}
            />
            <p className={styles.quoteText}>{t.quote}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
