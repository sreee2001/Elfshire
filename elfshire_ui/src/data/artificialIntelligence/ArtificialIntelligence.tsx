import pagesContent from "./ArtificialIntelligence.content";
import styles from "./ArtificialIntelligence.module.css";
import commonStyles from "../../styles/CommonSections.module.css";

const aiContent = pagesContent["artificialIntelligence"];

export default function ArtificialIntelligencePage() {
  return (
    <div className={commonStyles.container}>
      <div className={commonStyles.content}>
        <h1>{aiContent.title}</h1>
        {/* 2x2 grid for first four sections */}
        <div className={commonStyles.gridSections}>
          {aiContent.sections.slice(0, 4).map((section) => (
            <div key={section.header} className={commonStyles.gridSectionItem}>
              <div className={commonStyles.gridSectionHeader}>
                {section.header}
              </div>
              <div className={commonStyles.gridSectionContent}>
                {section.text}
              </div>
            </div>
          ))}
        </div>
        {/* Render any remaining sections as before */}
        {aiContent.sections.slice(4).map((section) => (
          <section key={section.header} className={commonStyles.section}>
            <div className={commonStyles.sectionTitle}>{section.header}</div>
            <div className={commonStyles.sectionText}>{section.text}</div>
          </section>
        ))}
        <h3>Our Services</h3>
        <ul className={styles.servicesList}>
          {aiContent.services.map((service) => (
            <li key={service} className={styles.serviceItem}>
              {service}
            </li>
          ))}
        </ul>
        <h3>Partnering for Real AI Impact</h3>
        <p>
          SPEC Global Solutions Inc. combines deep consulting expertise with
          end-to-end support to help you build scalable AI solutions, accelerate
          time-to-value, and optimize performance.
        </p>
        <h3>Our Experience</h3>
        <ul className={styles.statsList}>
          {aiContent.stats.map((stat) => (
            <li key={stat.label}>
              <div className={styles.statValue}>{stat.value}</div>
              <div>{stat.label}</div>
            </li>
          ))}
        </ul>
        <h3>Leadership</h3>
        {aiContent.leadership.map((leader) => (
          <div key={leader.name} className={styles.leader}>
            <strong>{leader.name}</strong> - {leader.title}
            <p className={styles.leaderBio}>{leader.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
