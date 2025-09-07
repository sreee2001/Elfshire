import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>About Us</h1>
        <p className={styles.intro}>
          SPEC Global Solutions Inc. is dedicated to delivering innovative IT
          services, expert staffing, and custom software solutions. Our team is
          passionate about helping organizations achieve their goals through
          technology, talent, and transformation.
        </p>
        <div className={styles.sections}>
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Our Mission</div>
            <div className={styles.sectionText}>
              To empower businesses with technology and talent, driving
              measurable results and sustainable growth.
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Our Vision</div>
            <div className={styles.sectionText}>
              To be a trusted partner for organizations worldwide, recognized
              for our expertise, integrity, and commitment to client success.
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Our Values</div>
            <div className={styles.sectionText}>
              Excellence, Agility, Collaboration, and Innovation are at the
              heart of everything we do.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
