import styles from "./RolesSection.module.css";
import { SectionHeading } from "./ui";

export interface RoleCard {
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  accentColor?: string;
}

export interface RolesSectionProps {
  heading?: string;
  subheading?: string;
  roles?: RoleCard[];
}

const DEFAULT_ROLES: RoleCard[] = [
  {
    title: "Manufacturing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "",
    imageAlt: "Graphic representing manufacturing",
    accentColor: "#EFF6F5",
  },
  {
    title: "Human Resources",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "",
    imageAlt: "Graphic representing hr",
    accentColor: "#FEF8E9",
  },
  {
    title: "Operations",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "",
    imageAlt: "Graphic representing ops",
    accentColor: "#FDE3D3",
  },
];

export default function RolesSection({
  heading = "Designed for every role",
  subheading = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  roles = DEFAULT_ROLES,
}: RolesSectionProps) {
  return (
    <section className={styles.section}>
      <SectionHeading title={heading} subtitle={subheading} />

      <div className={styles.cardsGrid}>
        {roles.map((role, i) => (
          <div
            key={i}
            className={styles.roleCard}
            style={{ background: role.accentColor }}
          >
            <div className={styles.cardContent}>
              <h3 className={styles.roleTitle}>{role.title}</h3>
              <p className={styles.roleDescription}>{role.description}</p>
            </div>
            <div className={styles.imageArea}>
              {role.imageUrl ? (
                <img
                  src={role.imageUrl}
                  alt={role.imageAlt || role.title}
                  className={styles.roleImage}
                />
              ) : (
                <span className={styles.imagePlaceholder}>{role.imageAlt}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
