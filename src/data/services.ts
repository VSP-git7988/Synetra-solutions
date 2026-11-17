import type { IconName } from "@/lib/icons";

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  icon: IconName;
  heroTagline: string;
  overview: [string, string];
  offerings: { title: string; description: string }[];
  process: { title: string; description: string }[];
  benefits: { title: string; description: string }[];
  relatedIndustries: string[];
};

export const services: Service[] = [
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    shortDescription:
      "Practical AI strategy, custom models and intelligent automation that move from pilot to production.",
    icon: "BrainCircuit",
    heroTagline: "Turn AI ambition into dependable, measurable business outcomes.",
    overview: [
      "Most organizations don't lack AI ideas. What they lack is a clear path from experiment to everyday use. Synetra helps you find where AI creates real value, build solutions that fit your data and workflows, and put the right guardrails around them.",
      "Our teams pair data scientists and ML engineers with consultants who understand your industry. We favor pragmatic architectures, explainable models and a real adoption plan, so the capability you build keeps paying off long after launch.",
    ],
    offerings: [
      { title: "AI Strategy & Roadmapping", description: "Rank use cases by value, feasibility and risk, then sequence them into a funded, phased plan." },
      { title: "Generative AI & LLM Applications", description: "Copilots, knowledge assistants and document automation grounded in your own content." },
      { title: "Machine Learning & Predictive Analytics", description: "Forecasting, scoring and optimization models engineered for production use." },
      { title: "Intelligent Process Automation", description: "Combine AI with workflow tooling to remove manual, repetitive work end to end." },
      { title: "MLOps & Model Operations", description: "Pipelines, monitoring and retraining that keep models accurate, observable and auditable." },
      { title: "Responsible AI & Governance", description: "Policies, risk assessments and controls aligned with emerging AI regulation." },
    ],
    process: [
      { title: "Assess", description: "Map opportunities, data readiness and constraints to build a prioritized backlog." },
      { title: "Prototype", description: "Prove value quickly with a focused pilot measured against agreed success criteria." },
      { title: "Build & Integrate", description: "Engineer the solution into your systems, security model and day-to-day workflows." },
      { title: "Scale & Govern", description: "Roll out, monitor performance and hand over the playbooks to run it confidently." },
    ],
    benefits: [
      { title: "Faster, sharper decisions", description: "Put predictive insight in front of the people who act on it." },
      { title: "Lower operating cost", description: "Automate high-volume tasks and redeploy talent to higher-value work." },
      { title: "Managed risk", description: "Transparent models, clear ownership and controls built in from day one." },
      { title: "Lasting capability", description: "Knowledge transfer that leaves your teams able to extend what we build." },
    ],
    relatedIndustries: ["financial-services", "consumer-retail", "healthcare-life-sciences"],
  },
  {
    slug: "executive-search",
    title: "Executive Search",
    shortDescription:
      "Confidential, research-led search for the leaders who will shape your organization's next chapter.",
    icon: "Award",
    heroTagline: "Find leaders who fit your strategy, your culture and your moment.",
    overview: [
      "A senior hire can accelerate a strategy or quietly stall it. Our executive search practice combines deep market research with rigorous assessment to present leaders who have delivered in situations like yours, not just on paper.",
      "We work as an extension of your board and leadership team, handling every search with discretion. From the first brief to the first hundred days, you get a single accountable partner and a clear view of progress at every stage.",
    ],
    offerings: [
      { title: "C-Suite & Board Search", description: "CEO, CFO, COO and non-executive director appointments for growth and transformation." },
      { title: "Technology & AI Leadership", description: "CTOs, CIOs, CDOs and heads of AI who can turn digital strategy into results." },
      { title: "Functional Leadership", description: "Senior finance, operations, commercial and people leaders across the enterprise." },
      { title: "Leadership Assessment", description: "Structured, evidence-based evaluation of finalists and internal successors." },
      { title: "Market Mapping & Talent Intelligence", description: "A clear view of the leadership landscape, compensation and competitor teams." },
      { title: "Onboarding & Integration", description: "Support through the first months to make sure new leaders land well." },
    ],
    process: [
      { title: "Define", description: "Clarify the mandate, success profile and must-have experience with key stakeholders." },
      { title: "Research", description: "Map the market and engage a targeted, diverse pool of proven leaders." },
      { title: "Assess", description: "Evaluate shortlisted candidates through structured interviews and referencing." },
      { title: "Close & Integrate", description: "Guide offer negotiation and support a smooth transition into the role." },
    ],
    benefits: [
      { title: "Stronger shortlists", description: "Candidates selected for proven impact, not just availability." },
      { title: "Complete discretion", description: "Confidential processes that protect your organization and candidates." },
      { title: "Reduced hiring risk", description: "Rigorous assessment that improves long-term retention and fit." },
      { title: "Predictable timelines", description: "Clear milestones and regular reporting from brief to appointment." },
    ],
    relatedIndustries: ["financial-services", "consumer-retail", "healthcare-life-sciences"],
  },
  {
    slug: "staffing-solutions",
    title: "Staffing Solutions",
    shortDescription:
      "Flexible contract, contract-to-hire and permanent talent that scales with your demand.",
    icon: "Users",
    heroTagline: "The right people, ready when your business needs them.",
    overview: [
      "Demand rarely moves in a straight line. Our staffing solutions give you quick access to pre-vetted professionals across technology, data, finance and operations, so you can scale up for a launch or fill a critical gap without slowing down.",
      "Every placement is backed by careful screening, transparent pricing and a dedicated account team. We handle compliance, onboarding and payroll so your managers can stay focused on the work itself.",
    ],
    offerings: [
      { title: "Contract Staffing", description: "Skilled professionals for short and long-term assignments, ready to start quickly." },
      { title: "Contract-to-Hire", description: "Evaluate fit on the job before committing to a permanent offer." },
      { title: "Permanent Placement", description: "Targeted recruitment for hard-to-fill mid-level and specialist roles." },
      { title: "Managed Teams", description: "Pre-assembled pods of engineers, analysts or specialists under one engagement." },
      { title: "Volume & Project Hiring", description: "Ramp up quickly for go-lives, seasonal peaks or new site openings." },
      { title: "Workforce Compliance & Payroll", description: "Classification, background checks, payroll and benefits handled for you." },
    ],
    process: [
      { title: "Understand", description: "Capture the role, team dynamics, timeline and budget in a short intake call." },
      { title: "Source", description: "Draw on our active talent network and targeted outreach for best-fit profiles." },
      { title: "Screen", description: "Technical, behavioral and reference checks before anyone reaches your desk." },
      { title: "Deploy & Support", description: "Onboard smoothly, check in regularly and adjust as your needs change." },
    ],
    benefits: [
      { title: "Speed to hire", description: "Qualified shortlists in days, not weeks." },
      { title: "Flexible capacity", description: "Scale headcount up or down without long-term overhead." },
      { title: "Quality you can trust", description: "Consistent screening standards across every placement." },
      { title: "Less admin", description: "Compliance and payroll taken off your team's plate." },
    ],
    relatedIndustries: ["financial-services", "consumer-retail", "healthcare-life-sciences"],
  },
  {
    slug: "project-solutions",
    title: "Project Solutions",
    shortDescription:
      "Outcome-based delivery teams that take complex initiatives from plan to go-live.",
    icon: "Workflow",
    heroTagline: "Accountable delivery for the initiatives that matter most.",
    overview: [
      "Strategy only creates value once it's delivered. Synetra's project solutions provide experienced leaders and cross-functional teams who own the outcome, whether that's a platform migration, a new operating model or an enterprise-wide transformation.",
      "We bring proven delivery frameworks, honest status reporting and the flexibility to work in agile, hybrid or traditional ways. You get clear scope, clear ownership and progress you can see week by week.",
    ],
    offerings: [
      { title: "Program & Project Management", description: "Experienced leaders who drive scope, schedule, budget and risk to completion." },
      { title: "PMO Setup & Advisory", description: "Governance, portfolio reporting and standards that bring order to complex change." },
      { title: "Digital Transformation Delivery", description: "End-to-end execution of new platforms, processes and customer experiences." },
      { title: "Cloud & Technology Implementation", description: "Migrations, integrations and system rollouts delivered with minimal disruption." },
      { title: "Agile Delivery Coaching", description: "Help teams adopt agile practices that fit your culture and constraints." },
      { title: "Managed Delivery (SOW-based)", description: "Fixed-scope engagements where we commit to defined deliverables and outcomes." },
    ],
    process: [
      { title: "Scope", description: "Agree objectives, deliverables, success measures and constraints up front." },
      { title: "Plan", description: "Build the roadmap, team, governance cadence and risk register." },
      { title: "Execute", description: "Deliver in visible increments with transparent reporting and fast issue resolution." },
      { title: "Transition", description: "Hand over to business-as-usual with documentation, training and support." },
    ],
    benefits: [
      { title: "On-time delivery", description: "Disciplined planning and early warning on risks and dependencies." },
      { title: "Clear accountability", description: "One partner responsible for the outcome, not just the hours." },
      { title: "Full transparency", description: "Dashboards and status reports leadership can actually use." },
      { title: "Smooth adoption", description: "Change management built in, so new ways of working stick." },
    ],
    relatedIndustries: ["financial-services", "consumer-retail", "healthcare-life-sciences"],
  },
  {
    slug: "data-intelligence",
    title: "Intelligence for Data Management",
    shortDescription:
      "Governed, high-quality, AI-ready data that your teams can trust and act on.",
    icon: "Database",
    heroTagline: "Trusted data is the foundation of every intelligent decision.",
    overview: [
      "AI and analytics are only as good as the data beneath them. We help organizations bring order to fragmented, inconsistent data with clear governance, measurable quality and a single trusted view of customers, products and operations.",
      "From stewardship models and master data to modern cloud platforms, we design data foundations that are secure, well-documented and ready for analytics and AI. The result is less time reconciling numbers and more time acting on them.",
    ],
    offerings: [
      { title: "Data Governance & Stewardship", description: "Ownership, policies, catalogs and lineage that make data accountable." },
      { title: "Data Quality Management", description: "Profiling, rules and monitoring that catch issues before they reach reports." },
      { title: "Master Data Management (MDM)", description: "A single, consistent record for customers, products, suppliers and locations." },
      { title: "Modern Data Platforms", description: "Cloud warehouses, lakehouses and pipelines designed for scale and cost control." },
      { title: "Analytics & Business Intelligence", description: "Self-service dashboards and KPIs that leaders trust and teams actually use." },
      { title: "AI-Ready Data Foundations", description: "Feature stores, vector search and curated datasets that accelerate AI projects." },
    ],
    process: [
      { title: "Assess", description: "Benchmark data maturity, quality issues and the decisions that depend on them." },
      { title: "Architect", description: "Design the target platform, governance model and data domains." },
      { title: "Implement", description: "Build pipelines, quality rules and master data in prioritized waves." },
      { title: "Operate", description: "Monitor, steward and continuously improve with clear ownership." },
    ],
    benefits: [
      { title: "One version of the truth", description: "Consistent definitions and numbers across every team." },
      { title: "Higher data quality", description: "Fewer errors, fewer manual fixes and more confident reporting." },
      { title: "Faster time to insight", description: "Analysts spend time on answers rather than wrangling data." },
      { title: "AI readiness", description: "Clean, governed data that shortens every future AI initiative." },
    ],
    relatedIndustries: ["financial-services", "consumer-retail", "healthcare-life-sciences"],
  },
  {
    slug: "environmental-data-science",
    title: "Environmental Data Science Management",
    shortDescription:
      "Turn environmental monitoring and ESG data into compliant, decision-ready insight.",
    icon: "Leaf",
    heroTagline: "Make environmental data accurate, auditable and actionable.",
    overview: [
      "Environmental data arrives from sensors, labs, field teams, satellites and suppliers, often in different formats and on different schedules. We help organizations consolidate it into a reliable system of record that stands up to regulators, investors and auditors.",
      "Our environmental data scientists combine geospatial analytics, statistical modeling and reporting expertise to turn raw measurements into clear insight. That means faster compliance reporting, credible ESG disclosures and better-informed sustainability decisions.",
    ],
    offerings: [
      { title: "Environmental Monitoring Data", description: "Ingest, validate and manage air, water, soil and emissions data from any source." },
      { title: "ESG Data & Reporting", description: "Collect and reconcile ESG metrics aligned with major disclosure frameworks." },
      { title: "Geospatial & Remote Sensing Analytics", description: "GIS and satellite analysis for land use, site risk and natural capital." },
      { title: "Regulatory Compliance Data", description: "Permit tracking, audit trails and submission-ready datasets for regulators." },
      { title: "Climate Risk & Scenario Analysis", description: "Model physical and transition risks across assets, sites and supply chains." },
      { title: "Sustainability Dashboards", description: "Live views of targets, progress and hotspots for leaders and stakeholders." },
    ],
    process: [
      { title: "Inventory", description: "Catalog data sources, obligations, reporting frameworks and gaps." },
      { title: "Integrate", description: "Centralize and validate data with documented lineage and QA/QC rules." },
      { title: "Analyze", description: "Apply geospatial, statistical and scenario models to surface insight." },
      { title: "Report & Monitor", description: "Automate disclosures and dashboards with continuous monitoring." },
    ],
    benefits: [
      { title: "Audit-ready disclosures", description: "Traceable numbers that withstand external assurance." },
      { title: "Reduced compliance risk", description: "Fewer missed deadlines, exceedances and reporting errors." },
      { title: "Clearer sustainability strategy", description: "Data that shows where action will have the most impact." },
      { title: "Less manual effort", description: "Automated collection and reporting replace spreadsheet workflows." },
    ],
    relatedIndustries: ["financial-services", "consumer-retail", "healthcare-life-sciences"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
