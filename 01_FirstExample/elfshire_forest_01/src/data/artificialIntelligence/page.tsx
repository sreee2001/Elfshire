import pagesContent from "./pageContent";

const aiContent = pagesContent["artificialIntelligence"];

export default function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>{aiContent.title}</h1>
      <h2 style={{ color: "#0056b3" }}>{aiContent.subtitle}</h2>
      {aiContent.sections.map((section, idx) => (
        <section key={idx} style={{ margin: "2rem 0" }}>
          <h3 style={{ marginBottom: "0.5rem" }}>{section.heading}</h3>
          <p>{section.text}</p>
        </section>
      ))}
      <h3>Our Services</h3>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          listStyle: "none",
          padding: 0,
        }}
      >
        {aiContent.services.map((service) => (
          <li
            key={service}
            style={{
              background: "#e5f0fa",
              padding: "0.5rem 1rem",
              borderRadius: "6px",
            }}
          >
            {service}
          </li>
        ))}
      </ul>
      <h3>Partnering for Real AI Impact</h3>
      <p>
        Apex combines deep consulting expertise with end-to-end support to help
        you build scalable AI solutions, accelerate time-to-value, and optimize
        performance.
      </p>
      <h3>Our Experience</h3>
      <ul
        style={{ display: "flex", gap: "2rem", listStyle: "none", padding: 0 }}
      >
        {aiContent.stats.map((stat) => (
          <li key={stat.label}>
            <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
              {stat.value}
            </div>
            <div>{stat.label}</div>
          </li>
        ))}
      </ul>
      <h3>Leadership</h3>
      {aiContent.leadership.map((leader) => (
        <div key={leader.name} style={{ marginBottom: "1.5rem" }}>
          <strong>{leader.name}</strong> - {leader.title}
          <p style={{ margin: "0.5rem 0 0 0" }}>{leader.bio}</p>
        </div>
      ))}
    </div>
  );
}
