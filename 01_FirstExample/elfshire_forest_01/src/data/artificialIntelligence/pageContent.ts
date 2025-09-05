// src/data/pagesContent.ts
export type PageContent = {
  title: string;
  subtitle: string;
  sections: { heading: string; text: string }[];
  services: string[];
  leadership: { name: string; title: string; bio: string }[];
  stats: { label: string; value: string }[];
};

const pagesContent: Record<string, PageContent> = {
  artificialIntelligence: {
    title: "AI That Meets You Where You Are",
    subtitle: "AI That Works for You",
    sections: [
      {
        heading: "Support build-vs-buy decisions, team growth, and architecture",
        text: "Empowering your organization to lead with clarity and confidence in intelligent application development.",
      },
      {
        heading: "Strengthen Your AI Foundation",
        text: "AI success begins with a foundation tailored to your current state. Apex unifies cloud, data, and apps, while upskilling teams and embedding scalable governance. Enable enterprise technical readiness across development, testing, and production—aligning with your goals for scale, trust, and risk.",
      },
      {
        heading: "Scale AI with Purpose-Built Tools",
        text: "Apex offers customizable, prebuilt solution accelerators—from GenAI agents to simulation and optimization tools. We also help you design agents that go beyond automation, built for reasoning, and real business impact.",
      },
      {
        heading: "Partnering for Real AI Impact",
        text: "Apex combines deep consulting expertise with end-to-end support to help you build scalable AI solutions, accelerate time-to-value, and optimize performance. Our approach integrates seamlessly across cloud, data, and application tools—ensuring your AI initiatives are aligned, efficient, and built to last.",
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
        title: "Global Head",
        bio: "Before founding SPEC Global Solutions Inc., Srikanth Tangella worked as a Principal Technical Specialist at Microsoft, within the AI Global Black Belt team, Microsoft Research, and the Innovation Hub. His expertise includes the data, BI, machine learning, AI, IoT and autonomous systems domains. Srikanth has a background in customer-centric technical consulting, including over 10 years in AI strategy, envisioning, problem solving, technical architecture, builds and deployments.",
      },
      {
        name: "Pratyusha Yarlagadda",
        title: "AI Solutions Leader",
        bio: "Before joining Apex as AI Solution Leader, Pratyusha Yarlagadda held senior consulting roles at Softchoice, including as an AI Consultant within the Cloud AI Consulting team and a Digital Transformation Consultant in the Design Studio. Her expertise spans AI strategy, data modernization, cloud adoption, and digital innovation. Pratyusha has a background in customer-centric consulting and technical leadership, with over 20 years of experience in solution development, executive facilitation, and strategic sales.",
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