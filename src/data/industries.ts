import type { IconName } from "@/lib/icons";

export type Industry = {
  slug: string;
  title: string;
  shortDescription: string;
  icon: IconName;
  heroTagline: string;
  overview: string;
  challenges: { title: string; description: string }[];
  howWeHelp: { title: string; description: string }[];
  relevantServices: string[];
};

export const industries: Industry[] = [
  {
    slug: "financial-services",
    title: "Financial Services",
    shortDescription:
      "Data, AI and specialist talent for banks, insurers, asset managers and fintechs navigating rapid change.",
    icon: "Landmark",
    heroTagline: "Modernize with confidence in a highly regulated world.",
    overview:
      "Financial institutions are under pressure to modernize legacy systems, adopt AI responsibly and meet rising regulatory expectations, all while protecting margins and customer trust. Synetra brings the data foundations, delivery capability and specialist talent to do all three at once.",
    challenges: [
      { title: "Legacy complexity", description: "Core platforms and siloed data slow product launches and reporting." },
      { title: "Regulatory pressure", description: "Evolving rules demand traceable data, explainable models and strong controls." },
      { title: "Scarce specialist talent", description: "Competition for data, risk and AI professionals is intense." },
      { title: "Rising customer expectations", description: "Clients expect personalized, digital-first experiences at every touchpoint." },
    ],
    howWeHelp: [
      { title: "Responsible AI for risk and operations", description: "Fraud detection, credit decisioning and service automation with governance built in." },
      { title: "Trusted regulatory data", description: "Governed data lineage and quality controls that simplify reporting and audits." },
      { title: "Specialist hiring at speed", description: "Pre-vetted risk, compliance, data and technology professionals." },
      { title: "Transformation delivery", description: "Experienced program leaders for core modernization and cloud migration." },
    ],
    relevantServices: ["ai-solutions", "data-intelligence", "executive-search", "project-solutions"],
  },
  {
    slug: "consumer-retail",
    title: "Consumer & Retail",
    shortDescription:
      "Customer insight, supply chain intelligence and flexible talent for brands that move at the speed of the shopper.",
    icon: "ShoppingBag",
    heroTagline: "Know your customer, sharpen your operations, grow with agility.",
    overview:
      "Consumer and retail businesses compete on relevance, availability and margin. Synetra helps brands and retailers unify customer and product data, apply AI to demand and pricing decisions, and scale their workforce for every peak and new channel.",
    challenges: [
      { title: "Fragmented customer data", description: "Disconnected channels make a single customer view hard to achieve." },
      { title: "Demand volatility", description: "Shifting preferences and disruption make forecasting and inventory difficult." },
      { title: "Margin pressure", description: "Rising costs demand smarter pricing, promotion and fulfillment decisions." },
      { title: "Seasonal workforce needs", description: "Peaks and new store or channel launches require fast, flexible hiring." },
    ],
    howWeHelp: [
      { title: "Unified customer and product data", description: "MDM and analytics that connect every channel into one view." },
      { title: "AI for demand and pricing", description: "Forecasting and optimization models that reduce stockouts and markdowns." },
      { title: "Sustainable supply chains", description: "ESG and supplier data management to meet growing transparency demands." },
      { title: "Scalable talent", description: "Contract and volume hiring that flexes with your trading calendar." },
    ],
    relevantServices: ["data-intelligence", "ai-solutions", "staffing-solutions", "environmental-data-science"],
  },
  {
    slug: "healthcare-life-sciences",
    title: "Healthcare & Life Sciences",
    shortDescription:
      "Secure data, compliant AI and hard-to-find expertise for providers, payers, pharma and medtech.",
    icon: "HeartPulse",
    heroTagline: "Better data and better teams for better outcomes.",
    overview:
      "Healthcare and life sciences organizations hold enormous amounts of valuable data, yet much of it is locked in silos and bound by strict privacy rules. Synetra helps you put that data to work safely, deliver complex programs and attract the clinical, scientific and technical talent you need.",
    challenges: [
      { title: "Siloed clinical and operational data", description: "Records, claims and research data rarely connect cleanly." },
      { title: "Privacy and compliance", description: "HIPAA, GxP and data-protection obligations shape every initiative." },
      { title: "Workforce shortages", description: "Clinical, scientific and health-tech roles are hard to fill." },
      { title: "Pressure to innovate", description: "Leaders must adopt AI and digital tools without disrupting care or research." },
    ],
    howWeHelp: [
      { title: "Compliant data foundations", description: "Governed, secure data platforms that respect privacy by design." },
      { title: "AI with clinical guardrails", description: "Operational and research AI with validation, monitoring and oversight." },
      { title: "Specialist talent", description: "Health-tech, data, regulatory and leadership talent through search and staffing." },
      { title: "Program delivery", description: "EHR, data platform and digital health initiatives delivered end to end." },
    ],
    relevantServices: ["data-intelligence", "ai-solutions", "staffing-solutions", "project-solutions"],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
