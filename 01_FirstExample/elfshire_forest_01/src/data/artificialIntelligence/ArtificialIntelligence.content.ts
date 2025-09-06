export type PageContent = {
  title: string;

  sections: { text: string, header: string }[];
  services: string[];
  leadership: { name: string; title: string; bio: string }[];
  stats: { label: string; value: string }[];
};

const pagesContent: Record<string, PageContent> = {
  artificialIntelligence: {
    title: "AI That Meets You Where You Are",
    sections: [
      {
        header: "AI That Works for You ",
        text: "Support build-vs-buy decisions, team growth, and architecture through focused advisory, training, and enterprise AI readiness—empowering your organization to lead with clarity and confidence in intelligent application development. ",
      },
      {
        header: "Strengthen Your AI Foundation",
        text: "AI success begins with a foundation tailored to your current state. Apex unifies cloud, data, and apps, while upskilling teams and embedding scalable governance. Enable enterprise technical readiness across development, testing, and production—aligning with your goals for scale, trust, and risk.",
      },
      {
        header: "Scale AI with Purpose-Built Tools",
        text: "Ready to move faster? We offer customizable, prebuilt solution accelerators—from GenAI agents to simulation and optimization tools. We also help you design agents that go beyond automation, built for reasoning, and real business impact. ",
      },
      {
        header: "Partnering for Real AI Impact",
        text: "We combine deep consulting expertise with end-to-end support to help you build scalable AI solutions, accelerate time-to-value, and optimize performance. Our approach integrates seamlessly across cloud, data, and application tools—ensuring your AI initiatives are aligned, efficient, and built to last.",
      },
    ],
    services: [
      "Advisory",
      "AI Literacy",
      "GenAI and Agents",
      "Predictive AI",
      "Scale & Governance",
      "Simulation & Optimization",
      "Solution Accelerators",
      "Trust & Risk",
    ],
    leadership: [
      {
        name: "Srikanth Tangella",
        title: "Founder & AI Solution Leader",
        bio: "Before founding SPEC Global Solutions Inc., Srikanth Tangella worked as a Principal Software Engineer and Vice President at Bank of New York Mellon, within the Information Security Team. His expertise includes the data, machine learning, cybersecurity. Srikanth has a background in customer-centric technical consulting, including over 10 years in AI strategy, envisioning, problem solving, technical architecture, builds and deployments.",
      },
      {
        name: "Pratyusha Yarlagadda",
        title: "Founder & CEO",
        bio: "Before founding SPEC Global Solutions Inc., Pratyusha Yarlagadda was an ERP global leader, including extensive experience in ERP Cloud and Leading  multi-demography teams and as Digital Transformation Consultant. Pratyusha has a background in customer-centric consulting and technical leadership, with over 20 years of experience in solution development, executive facilitation, and strategic sales.",
      },
    ],
    stats: [
      { label: "Clients Served", value: "4+" },
      { label: "Engagements Completed", value: "30" },
      //{ label: "Consultants Deployed", value: "150+" },
    ],
  },
  // Add more pages as needed
};

export default pagesContent;