export type Industry = {
  slug: string;
  title: string;
  icon: 'landmark' | 'shopping' | 'heart';
  summary: string;
  overview: string;
  points: string[];
  hasDetail?: boolean;
  detail?: {
    tagline: string;
    intro: string[];
    challenges: { title: string; text: string }[];
    help: { title: string; text: string; service: string }[];
    services: string[];
  };
};

export const industries: Industry[] = [
  {
    slug: 'financial-services',
    title: 'Financial Services',
    icon: 'landmark',
    summary: 'Secure, compliant technology for banks, lenders, insurers and fintechs.',
    overview:
      'Financial institutions are asked to move faster while carrying more regulation and more risk than almost any other sector. We help them modernise core systems, put AI to work on fraud and risk, and hire the specialists who are hardest to find.',
    points: ['AI-driven fraud and anomaly detection', 'Legacy core modernisation and cloud migration', 'Compliance-ready data and reporting'],
    hasDetail: true,
    detail: {
      tagline: 'Modernise with confidence: secure technology, trusted data and specialist talent for regulated finance.',
      intro: [
        'Banks, lenders, insurers and fintechs face the same squeeze: customers expect digital speed, regulators expect complete control, and the systems underneath were often built decades ago.',
        'Synetra helps financial organisations move forward without adding risk. We combine AI, cloud and data expertise with deep knowledge of compliance-heavy environments, and we can staff the specialist roles your programmes depend on.',
      ],
      challenges: [
        { title: 'Fraud and financial risk', text: 'Attack patterns change faster than rule-based systems can keep up.' },
        { title: 'Regulatory pressure', text: 'Reporting, audit trails and data privacy demands keep growing.' },
        { title: 'Legacy core systems', text: 'Ageing platforms slow product launches and raise running costs.' },
        { title: 'Scarce specialist talent', text: 'Cloud, data and AI engineers with finance experience are hard to hire.' },
      ],
      help: [
        { title: 'AI for fraud and risk', text: 'Models that score transactions in real time and send analysts the alerts that matter.', service: 'ai-solutions' },
        { title: 'Core modernisation and cloud', text: 'Phased migration of legacy workloads to secure, compliant AWS or Azure environments.', service: 'project-solutions' },
        { title: 'Governed, audit-ready data', text: 'Data quality, lineage and reporting that stand up to regulatory review.', service: 'data-intelligence' },
        { title: 'Specialist finance IT talent', text: 'Pre-screened engineers, architects and leaders who know regulated environments.', service: 'staffing-solutions' },
      ],
      services: ['ai-solutions', 'project-solutions', 'data-intelligence', 'staffing-solutions'],
    },
  },
  {
    slug: 'consumer-retail',
    title: 'Consumer & Retail',
    icon: 'shopping',
    summary: 'Data, AI and talent that help brands know their customers and move with demand.',
    overview:
      'Retail margins are won on knowing customers and getting stock in the right place. We connect commerce, supply chain and customer data, add personalisation and forecasting, and flex your team for seasonal peaks.',
    points: ['Personalisation and recommendation engines', 'Demand forecasting and unified omnichannel data', 'Scalable teams for seasonal peaks'],
  },
  {
    slug: 'healthcare-life-sciences',
    title: 'Health Care & Life Sciences',
    icon: 'heart',
    summary: 'Privacy-first technology for providers, payers and research organisations.',
    overview:
      'Health organisations hold some of the most sensitive data there is. We help them use it responsibly, with secure cloud platforms, governed clinical and operational data, analytics for research, and hard-to-find specialist talent.',
    points: ['Secure, compliant cloud and data platforms', 'Clinical and operational analytics', 'Specialist health IT recruitment'],
  },
];

export const industryHref = (i: Industry) => (i.hasDetail ? `/industries/${i.slug}/` : `/industries/#${i.slug}`);
