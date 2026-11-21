export type Service = {
  slug: string;
  title: string;
  icon: 'brain' | 'crown' | 'users' | 'server' | 'database' | 'leaf';
  image?: string;
  summary: string;
  offerings: string[];
  hasDetail?: boolean;
  detail?: ServiceDetail;
};

export type ServiceDetail = {
  tagline: string;
  overview: string[];
  offer: { title: string; text: string }[];
  approach: { title: string; text: string }[];
  useCases: { title: string; text: string; icon: string }[];
  outcomes: { value: string; label: string }[];
};

export const services: Service[] = [
  {
    slug: 'ai-solutions',
    title: 'AI Solutions',
    icon: 'brain',
    summary: 'Turn AI from an experiment into a working part of your business, from strategy to production.',
    offerings: ['AI strategy & roadmaps', 'Custom models & fine-tuning', 'AI agents & automation', 'Knowledge assistants (RAG)'],
    hasDetail: true,
    detail: {
      tagline: 'Practical AI that earns its place in your business: planned carefully, built properly and measured honestly.',
      overview: [
        'Plenty of companies have tried AI. Far fewer have it running reliably inside the processes that matter. Synetra closes that gap. We help you pick the use cases worth funding, prepare the data behind them, and build solutions that fit your existing systems instead of sitting beside them.',
        'You choose how we work with you. We can run the whole programme, work alongside your engineers, or add specialist AI talent to your team. Either way, we use cloud infrastructure so you can start without a heavy upfront investment.',
      ],
      offer: [
        { title: 'AI strategy & roadmap', text: 'Prioritise use cases by value and feasibility, and plan the path to production.' },
        { title: 'Custom models & fine-tuning', text: 'Adapt leading models to your data, language and quality bar.' },
        { title: 'Task-specific AI agents', text: 'Agents that complete defined jobs end to end, with guardrails and human review.' },
        { title: 'Workflow automation', text: 'Remove repetitive steps across departments and connect the tools you already use.' },
        { title: 'Knowledge assistants (RAG)', text: 'Secure assistants that answer from your own documents, policies and data.' },
        { title: 'Conversational & voice AI', text: 'Chat and voice experiences that support customers around the clock.' },
        { title: 'Predictive analytics', text: 'Forecasting, scoring and recommendations built on your historical data.' },
        { title: 'Systems & cloud integration', text: 'Connect AI into your ERP, CRM and data platforms on AWS or Azure.' },
      ],
      approach: [
        { title: 'Assess readiness', text: 'Goals, data, infrastructure and risk, reviewed in a short discovery.' },
        { title: 'Design & prototype', text: 'A working prototype on real data to prove value early.' },
        { title: 'Build & integrate', text: 'Production-grade engineering, security and integration.' },
        { title: 'Monitor & improve', text: 'Tracking accuracy, cost and adoption, and refining over time.' },
      ],
      useCases: [
        { icon: 'phone', title: 'Call intelligence', text: 'Transcribe, summarise and score support calls, and flag the ones that need a supervisor.' },
        { icon: 'shield', title: 'Fraud & anomaly detection', text: 'Spot unusual transactions in real time and cut hours of manual review.' },
        { icon: 'cart', title: 'Smart recommendations', text: 'Suggest the next best product based on what similar customers bought.' },
        { icon: 'scan', title: 'Visual inspection', text: 'Detect defects from images or drone footage instead of costly site visits.' },
      ],
      outcomes: [
        { value: 'Lower', label: 'operating costs through automation' },
        { value: 'Faster', label: 'time to market for new capabilities' },
        { value: 'Scalable', label: 'operations without matching headcount' },
        { value: 'Better', label: 'customer experience and retention' },
      ],
    },
  },
  {
    slug: 'project-solutions',
    title: 'Project Solutions',
    icon: 'server',
    summary: 'Cloud, infrastructure and integration projects delivered by accountable, managed teams.',
    offerings: ['Cloud migration · AWS & Azure', 'Infrastructure modernisation', 'System integration & DevOps', 'Cloud security & performance'],
  },
  {
    slug: 'staffing-solutions',
    title: 'Staffing Solutions',
    icon: 'users',
    summary: 'Skilled IT professionals when you need them, on contract, contract-to-hire or permanent terms.',
    offerings: ['Technical recruitment', 'Contract & contract-to-hire', 'Direct hire', 'Skill assessment & screening'],
  },
  {
    slug: 'executive-search',
    title: 'Executive Search',
    icon: 'crown',
    summary: 'Confidential searches for the technology leaders who will set your direction.',
    offerings: ['CIO, CTO & CDO searches', 'Senior engineering leadership', 'Leadership assessment', 'Succession planning'],
  },
  {
    slug: 'data-intelligence',
    title: 'Intelligence for Data Management',
    icon: 'database',
    summary: 'Clean, governed, connected data that your teams and your AI can trust.',
    offerings: ['Data strategy & governance', 'Data quality & MDM', 'Pipelines & engineering', 'BI dashboards & AI-ready data'],
  },
  {
    slug: 'environmental-data-science',
    title: 'Environmental Data Science Management',
    icon: 'leaf',
    summary: 'Environmental and sustainability data turned into reporting, insight and compliance.',
    offerings: ['Environmental monitoring data', 'ESG & sustainability reporting', 'Geospatial analytics', 'Regulatory compliance data'],
  },
];

export const serviceImage = (s: Service) => s.image ?? `/images/service-${s.slug}.jpg`;

export const serviceHref = (s: Service) => (s.hasDetail ? `/services/${s.slug}/` : `/services/#${s.slug}`);
