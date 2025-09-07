import styles from "./Home.module.css";
import sectionStyles from "../styles/CommonSections.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Welcome to SPEC Global Solutions Inc.
        </h1>
        <p className={styles.intro}>
          At SPEC Global Solutions Inc., we empower organizations with
          innovative IT services, expert staffing, and tailored software
          solutions. Our commitment is to deliver excellence, agility, and
          measurable results for every client.
        </p>
        <div className={sectionStyles.sections}>
          <div className={sectionStyles.section}>
            <div className={sectionStyles.sectionTitle}>
              IT Consulting & Digital Transformation
            </div>
            <div className={sectionStyles.sectionText}>
              Unlock your business potential with our expert IT consulting,
              cloud migration, and digital transformation services. We help you
              modernize operations, enhance security, and drive innovation for a
              competitive edge.
            </div>
          </div>
          <div className={sectionStyles.section}>
            <div className={sectionStyles.sectionTitle}>
              Staffing & Talent Solutions
            </div>
            <div className={sectionStyles.sectionText}>
              Access top-tier technology talent through our flexible staffing
              solutions. Whether you need contract, contract-to-hire, or
              permanent placements, we deliver skilled professionals who fit
              your culture and goals.
            </div>
          </div>
          <div className={sectionStyles.section}>
            <div className={sectionStyles.sectionTitle}>
              Custom Software Development
            </div>
            <div className={sectionStyles.sectionText}>
              From web and mobile apps to enterprise platforms, our development
              teams build secure, scalable, and user-friendly solutions tailored
              to your unique business needs.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
