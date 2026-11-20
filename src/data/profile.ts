// All site content lives here. Edit this file to update the portfolio.

export interface Link { label: string; href: string }
export interface Project {
  name: string
  description: string
  features?: string[]
  tags: string[]
  status?: string
  links: Link[]
  featured?: boolean
}
export interface Job {
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
}
export interface SkillGroup { title: string; items: string[] }

export const profile = {
  name: 'Lakshya Sinha',
  title: 'Software Engineer · Backend & Full-Stack · 7+ years',
  location: 'Noida, India',
  tagline:
    'I build backend services, scalable APIs and distributed business systems across healthcare technology, fintech and logistics.',
  // TODO: add a resume link (without phone number) and a button will appear. e.g. '/Lakshya_Sinha_Resume.pdf'
  resumeUrl: null as string | null,
  // TODO: set the public contact email here.
  email: 'lakshya.sinha.in@gmail.com',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lakshya-sinha-b4301a56' },
    { label: 'GitHub', href: 'https://github.com/thefreakedcoder' },
    { label: 'LeetCode', href: 'https://leetcode.com/u/lakshyasinha71' },
  ] as Link[],
  about:
    'Software Engineer with 7+ years of experience architecting and delivering backend services, scalable APIs, and distributed business systems across healthcare technology, fintech, and logistics. Proficient in Java, Spring Boot, Node.js, Python, PHP, React.js, and AWS, with deep hands-on expertise in healthcare billing platforms, EHR integrations, event-driven workflows, and high-volume production operations. Track record in end-to-end feature ownership, cross-functional collaboration, code reviews, and mentorship. Daily practitioner of AI-assisted software engineering with GitHub Copilot and Claude.',
  highlights: [
    { value: '7+', label: 'yrs experience' },
    { value: '₹12 Cr/day', label: 'lending volume handled' },
    { value: '20K+', label: 'daily WhatsApp messages' },
    { value: '85%', label: 'fewer support escalations' },
  ],
  projects: [
    {
      name: 'WorshipSync',
      description:
        'Church music & worship app. A native Android app (Kotlin, Jetpack Compose) with a React web companion, backed by Firebase. Serves an active community of ~50 members; built with AI-assisted workflows.',
      features: [
        'Song library with chords (chord engine and transposition)',
        'Set lists',
        'Live sessions that band members join to follow along in sync',
        'Add songs and login',
      ],
      tags: ['Kotlin', 'Android', 'Firebase', 'React', 'Vite'],
      status: 'Live · internal',
      links: [{ label: 'Open web app', href: 'https://worshipstudio-af3bc.web.app' }],
      featured: true,
    },
    {
      name: 'Agentic Coding Planner',
      description:
        "Turns a learner's goal into a personalised, day-by-day agentic-coding study plan with a progress tracker. AI-generated plans (Gemini or Claude, with server-side validation of model output), curated sources, X bookmarks sync, link import from files, and daily reminders via Telegram/email.",
      tags: ['Next.js', 'TypeScript', 'Prisma', 'Postgres (Neon)', 'Auth.js', 'Vercel'],
      status: 'Live · beta',
      links: [{ label: 'Visit', href: 'https://agentic-coding-planner.vercel.app' }],
      featured: true,
    },
    {
      name: 'This portfolio',
      description: 'Small, static and fast. Vite + React + TypeScript, hosted on Vercel.',
      tags: ['Vite', 'React', 'TypeScript'],
      links: [{ label: 'Source', href: 'https://github.com/thefreakedcoder/lakshya-portfolio' }],
    },
  ] as Project[],
  experience: [
    {
      company: 'Health Arc',
      role: 'Technical Lead',
      period: 'Dec 2025 – Present',
      location: 'Healthcare Technology',
      bullets: [
        'Spearheaded backend engineering for a configurable healthcare billing platform supporting RPM, CCM and PCM programs.',
        'Engineered billing configuration and calculation engines governing CPT codes, time-based thresholds, unit limits and automated monthly billing outputs, with practice-specific pricing plans and hospital-level rules.',
        'Delivered EHR integration pipelines including Practice Fusion connectivity, FHIR-based patient context sync, document exchange and embedded clinical flows using Node.js, React.js, PHP, Python and AWS (Batch, RDS, SNS, Lambda).',
      ],
    },
    {
      company: 'Prozo Distribution Pvt. Ltd.',
      role: 'Senior Software Engineer (Backend)',
      period: 'May 2023 – Dec 2025',
      location: 'Noida (Remote)',
      bullets: [
        'Architected a high-throughput WhatsApp logistics platform processing 20,000+ daily messages for order tracking, address verification, NDR resolution and B2B pickup coordination.',
        'Reduced NDR rates by 28% and RTO rates by 18% through workflow automation, rule-based reattempt scheduling and interactive address-confirmation journeys.',
        'Integrated courier partners (Shipyaari, Shadowfax) via a unified API with standardised status/NDR codes; automated Axis Bank COD remittance with 99.95% reconciliation accuracy and 30% faster settlement, while mentoring 3+ engineers.',
      ],
    },
    {
      company: 'Paytm – Lending',
      role: 'Software Engineer (Backend)',
      period: 'Dec 2021 – May 2023',
      location: 'Noida',
      bullets: [
        'Owned core engineering operations for a high-volume EMI lending product processing ~₹12 Crore and 200,000+ orders daily: Spring State Machine workflows, production alerting, reporting and feature delivery.',
        'Drove reliability initiatives cutting customer support escalations by 85% (~70 to ~10 tickets/day); migrated APIs to internal domains and Kafka topics to a dedicated cluster for traceability and lower infra cost.',
      ],
    },
    {
      company: 'Paytm – Lending',
      role: 'Senior Python Developer (Backend)',
      period: 'Jun 2020 – Nov 2021',
      location: 'Noida',
      bullets: [
        'Built Python early-delinquency monitoring pipelines, raising DPD 1–30 resolution from ~70% to 92% and cutting reported NPA losses from ~₹10 Crore to ₹5 Crore.',
        'Automated collection-system billing verification (manual QA from 40+ hours to ~2 hours) and applied K-means clustering on payment histories for proactive NPA prevention.',
      ],
    },
    {
      company: 'Magicpin',
      role: 'Python Developer (Backend)',
      period: 'Jun 2019 – Mar 2020',
      location: 'Gurugram',
      bullets: [
        'Automated an end-to-end referral rewards engine, boosting participation from 45% to 69%, and built automated MIS reporting pipelines for executive metrics.',
      ],
    },
  ] as Job[],
  skills: [
    { title: 'Languages & Frontend', items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'PHP', 'SQL', 'React.js', 'Kotlin'] },
    { title: 'Backend & Architecture', items: ['Spring Boot', 'Node.js', 'REST APIs', 'Microservices', 'Spring State Machine', 'Event-driven systems'] },
    { title: 'Databases & Cloud', items: ['MySQL', 'MongoDB', 'Redis', 'Amazon RDS', 'AWS Lambda', 'AWS Batch', 'SNS', 'Athena', 'Apache Kafka', 'BigQueue', 'Firebase'] },
    { title: 'Data, Monitoring & AI', items: ['Databricks', 'BigQuery', 'Sigma Computing', 'Kibana', 'Grafana', 'Git', 'GitHub Copilot', 'Claude'] },
    { title: 'Healthcare Tech', items: ['FHIR', 'HL7', 'EHR Integrations', 'RPM/CCM/PCM billing'] },
  ] as SkillGroup[],
  education: {
    degree: 'B.Tech in Electrical Engineering',
    school: 'Delhi Technological University (formerly DCE), New Delhi',
    year: '2019',
  },
  contactCta: 'Open to interesting backend, platform and AI-assisted engineering work.',
}
