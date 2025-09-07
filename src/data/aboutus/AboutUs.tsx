import commonStyles from "../../styles/CommonSections.module.css";

export default function AboutUs() {
  return (
    <div className={commonStyles.container}>
      <div className={commonStyles.content}>
        <h1 className={commonStyles.heading}>About Us</h1>
        <p className={commonStyles.intro}>
          SPEC Global Solutions Inc. is dedicated to delivering innovative IT
          services, expert staffing, and custom software solutions. Our team is
          passionate about helping organizations achieve their goals through
          technology, talent, and transformation.
        </p>
        <div className={commonStyles.sections}>
          <div className={commonStyles.section}>
            <div className={commonStyles.sectionTitle}>Our Mission</div>
            <div className={commonStyles.sectionText}>
              To empower businesses with technology and talent, driving
              measurable results and sustainable growth.
            </div>
          </div>
          <div className={commonStyles.section}>
            <div className={commonStyles.sectionTitle}>Our Vision</div>
            <div className={commonStyles.sectionText}>
              To be a trusted partner for organizations worldwide, recognized
              for our expertise, integrity, and commitment to client success.
            </div>
          </div>
          <div className={commonStyles.section}>
            <div className={commonStyles.sectionTitle}>Our Values</div>
            <div className={commonStyles.sectionText}>
              Excellence, Agility, Collaboration, and Innovation are at the
              heart of everything we do.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
