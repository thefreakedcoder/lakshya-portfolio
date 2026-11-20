// All site content lives here. Edit this file to update the portfolio.

export interface Link { label: string; href: string }
export interface Project {
  name: string
  description: string
  features: string[]
  tags: string[]
  status: string
  link: Link
  shot: 'worshipsync' | 'planner'
}
export interface Role { title: string; period: string; location?: string; bullets: string[] }
export interface Company { company: string; location: string; roles: Role[] }
export interface SkillGroup { title: string; items: string[] }

export const profile = {
  name: 'Lakshya Sinha',
  summary: 'Software engineer building backend systems for healthcare, fintech and logistics. 7+ years.',
  current: { role: 'Technical Lead', company: 'Health Arc', location: 'Noida, India' },
  email: 'lakshya.sinha.in@gmail.com',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lakshya-sinha-b4301a56' },
    { label: 'GitHub', href: 'https://github.com/thefreakedcoder' },
    { label: 'LeetCode', href: 'https://leetcode.com/u/lakshyasinha71' },
  ] as Link[],
  about: [
    'Seven-plus years of designing and delivering backend services, scalable APIs and distributed business systems across healthcare technology, fintech and logistics.',
    'Deep hands-on work in healthcare billing platforms, EHR integrations, event-driven workflows and high-volume production operations, in Java, Spring Boot, Node.js, Python, PHP, React.js and AWS. End-to-end feature ownership, code reviews, mentoring. Daily AI-assisted engineering with GitHub Copilot and Claude.',
  ],
  projects: [
    {
      name: 'WorshipSync',
      description:
        'Church music and worship app: native Android (Kotlin, Jetpack Compose) with a React web companion, backed by Firebase. Used by an active community of about 50 members; built with AI-assisted workflows.',
      features: [
        'Song library with a chord engine and transposition',
        'Set lists',
        'Live sessions that band members join to follow along in sync',
        'Add songs and login',
      ],
      tags: ['Kotlin', 'Android', 'Firebase', 'React', 'Vite'],
      status: 'Live, internal',
      link: { label: 'Open app', href: 'https://worshipstudio-af3bc.web.app' },
      shot: 'worshipsync',
    },
    {
      name: 'Agentic Coding Planner',
      description:
        "Turns a learner's goal into a personalised, day-by-day agentic-coding study plan with a progress tracker.",
      features: [
        'AI-generated plans (Gemini or Claude) with server-side validation of model output',
        'Curated sources, X bookmarks sync and link import from files',
        'Daily reminders via Telegram or email',
      ],
      tags: ['Next.js', 'TypeScript', 'Prisma', 'Postgres (Neon)', 'Auth.js', 'Vercel'],
      status: 'Live, beta',
      link: { label: 'Open app', href: 'https://agentic-coding-planner.vercel.app' },
      shot: 'planner',
    },
  ] as Project[],
  site: {
    text: 'This site: Vite, React, TypeScript on Vercel',
    link: { label: 'source', href: 'https://github.com/thefreakedcoder/lakshya-portfolio' },
  },
  experience: [
    {
      company: 'Health Arc',
      location: 'Healthcare technology',
      roles: [
        {
          title: 'Technical Lead',
          period: 'Dec 2025 – Present',
          bullets: [
            'Lead backend engineering for a configurable healthcare billing platform supporting RPM, CCM and PCM programs.',
            'Built billing configuration and calculation engines governing CPT codes, time-based thresholds, unit limits and automated monthly billing outputs, with practice-specific pricing plans and hospital-level rules.',
            'Delivered EHR integration pipelines: Practice Fusion connectivity, FHIR-based patient context sync, document exchange and embedded clinical flows, on Node.js, React.js, PHP, Python and AWS (Batch, RDS, SNS, Lambda).',
          ],
        },
      ],
    },
    {
      company: 'Prozo Distribution Pvt. Ltd.',
      location: 'Noida (Remote)',
      roles: [
        {
          title: 'Senior Software Engineer, Backend',
          period: 'May 2023 – Dec 2025',
          bullets: [
            'Architected a WhatsApp logistics platform processing 20,000+ messages a day for order tracking, address verification, NDR resolution and B2B pickup coordination.',
            'Reduced NDR rates by 28% and RTO rates by 18% with workflow automation, rule-based reattempt scheduling and interactive address-confirmation journeys.',
            'Integrated courier partners (Shipyaari, Shadowfax) behind a unified API with standardised status and NDR codes. Automated Axis Bank COD remittance at 99.95% reconciliation accuracy and 30% faster settlement. Mentored 3+ engineers.',
          ],
        },
      ],
    },
    {
      company: 'Paytm, Lending',
      location: 'Noida',
      roles: [
        {
          title: 'Software Engineer, Backend',
          period: 'Dec 2021 – May 2023',
          bullets: [
            'Owned core engineering for a high-volume EMI lending product handling about ₹12 Crore and 200,000+ orders a day: Spring State Machine workflows, production alerting, reporting and feature delivery.',
            'Cut customer support escalations by 85% (about 70 to about 10 tickets a day). Moved APIs to internal domains and Kafka topics to a dedicated cluster for traceability and lower infra cost.',
          ],
        },
        {
          title: 'Senior Python Developer, Backend',
          period: 'Jun 2020 – Nov 2021',
          bullets: [
            'Built Python early-delinquency monitoring pipelines: DPD 1–30 resolution rose from about 70% to 92%, reported NPA losses fell from about ₹10 Crore to ₹5 Crore.',
            'Automated collection-system billing verification (manual QA from 40+ hours to about 2) and applied K-means clustering on payment histories for proactive NPA prevention.',
          ],
        },
      ],
    },
    {
      company: 'Magicpin',
      location: 'Gurugram',
      roles: [
        {
          title: 'Python Developer, Backend',
          period: 'Jun 2019 – Mar 2020',
          bullets: [
            'Automated an end-to-end referral rewards engine, lifting participation from 45% to 69%, and built automated MIS reporting pipelines for executive metrics.',
          ],
        },
      ],
    },
  ] as Company[],
  skills: [
    { title: 'Languages & frontend', items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'PHP', 'SQL', 'React.js', 'Kotlin'] },
    { title: 'Backend & architecture', items: ['Spring Boot', 'Node.js', 'REST APIs', 'Microservices', 'Spring State Machine', 'Event-driven systems'] },
    { title: 'Databases & cloud', items: ['MySQL', 'MongoDB', 'Redis', 'Amazon RDS', 'AWS Lambda', 'AWS Batch', 'SNS', 'Athena', 'Apache Kafka', 'BigQueue', 'Firebase'] },
    { title: 'Data, monitoring & AI', items: ['Databricks', 'BigQuery', 'Sigma Computing', 'Kibana', 'Grafana', 'Git', 'GitHub Copilot', 'Claude'] },
    { title: 'Healthcare tech', items: ['FHIR', 'HL7', 'EHR integrations', 'RPM/CCM/PCM billing'] },
  ] as SkillGroup[],
  education: {
    degree: 'B.Tech in Electrical Engineering',
    school: 'Delhi Technological University (formerly DCE), New Delhi',
    year: '2019',
  },
  contact: 'Open to backend, platform and AI-assisted engineering work.',
  domain: 'lakshyasinha.in',
}
