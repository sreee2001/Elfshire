import styles from "./Home.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to SPEC Global Solutions Inc.</h1>
      <p className={styles.intro}>
        At SPEC Global Solutions Inc., we empower organizations with innovative
        IT services, expert staffing, and tailored software solutions. Our
        commitment is to deliver excellence, agility, and measurable results for
        every client.
      </p>
      <div className={styles.sections}>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            IT Consulting & Digital Transformation
          </div>
          <div className={styles.sectionText}>
            Unlock your business potential with our expert IT consulting, cloud
            migration, and digital transformation services. We help you
            modernize operations, enhance security, and drive innovation for a
            competitive edge.
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>Staffing & Talent Solutions</div>
          <div className={styles.sectionText}>
            Access top-tier technology talent through our flexible staffing
            solutions. Whether you need contract, contract-to-hire, or permanent
            placements, we deliver skilled professionals who fit your culture
            and goals.
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>Custom Software Development</div>
          <div className={styles.sectionText}>
            From web and mobile apps to enterprise platforms, our development
            teams build secure, scalable, and user-friendly solutions tailored
            to your unique business needs.
          </div>
        </div>
      </div>
    </div>
  );
}
