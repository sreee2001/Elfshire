import pagesContent from "./ArtificialIntelligence.content";
import styles from "./ArtificialIntelligence.module.css";

const aiContent = pagesContent["artificialIntelligence"];

export default function ArtificialIntelligencePage() {
  return (
    <div className={styles.container}>
      <h1>{aiContent.title}</h1>
      {aiContent.sections.map((section, idx) => (
        <section key={idx} className={styles.section}>
          <h4>{section.header}</h4>
          <p>{section.text}</p>
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
  );
}
