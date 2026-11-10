// All site copy lives here.
// Upwork rule: no email, phone, LinkedIn, or other off-platform contact details
// anywhere on this site. Clients reach Prasanga through Upwork only.

export const profile = {
  name: "Prasanga Tiwari",
  role: "Senior full-stack and blockchain engineer",
  location: "New York",
  // Paste the public Upwork profile URL here. The hire button stays hidden until it is set.
  upworkUrl: "https://www.upwork.com/freelancers/~013d177ed2f0a26f4e",
  intro:
    "I design and run production software: the data model, the boundaries between services, the rules for who can do what and who pays for it, and the release process that keeps it all safe to change. I work across web platforms, AI features and blockchain systems, and I plan for what can go wrong before it does.",
  availability: "Open to new contracts on Upwork",
};

export type Decision = { title: string; detail: string };

export type CaseStudy = {
  id: string;
  client: string;
  role: string;
  period: string;
  summary: string;
  context: string;
  decisions: Decision[];
  risks: string[];
  outcomes: string[];
  stack: string;
  demo?: "wacc";
};

export const caseStudies: CaseStudy[] = [
  {
    id: "investalytix",
    client: "Investalytix",
    role: "Software engineer",
    period: "Nov 2025 – May 2026",
    summary: "Stabilized a live financial research product and designed its paid tier.",
    context:
      "A live equity research product. Pages were breaking on inconsistent data, nothing checked a change before it shipped, and the business needed a paid tier it could rely on.",
    decisions: [
      {
        title: "Fix the data model before adding features",
        detail:
          "I traced the broken pages back to the data model and corrected it first. New financial features now sit on consistent data instead of patches.",
      },
      {
        title: "Keep data sourcing apart from the maths",
        detail:
          "I designed the WACC and intrinsic value calculators so fetching Federal Reserve rates and company financials is separate from the calculation. Each part can be checked and replaced on its own.",
      },
      {
        title: "Billing decides access",
        detail:
          "Stripe webhook events drive plan changes. Role and subscription checks run on the server, so hiding a button is never the only lock.",
      },
      {
        title: "One gate for every change",
        detail:
          "Every repo got the same CI pipeline: typecheck, lint, test, build. Each service runs in Docker, so it behaves the same on a laptop, in CI and in production.",
      },
    ],
    risks: [
      "Users keeping premium access after cancelling, or losing it after paying",
      "Stale or rate-limited market data reaching users",
      "Untested changes reaching a live product",
      "Services that behave differently from one environment to the next",
    ],
    outcomes: [
      "Upgrades and downgrades follow billing automatically",
      "Expensive financial queries served from a Redis cache",
      "Every pull request passes the same checks before merge",
    ],
    stack: "Next.js, Express, MongoDB, Redis, Stripe, Docker, GitHub Actions",
    demo: "wacc",
  },
  {
    id: "ghostrep",
    client: "Ghostrep.ai",
    role: "Contract full-stack engineer",
    period: "Aug 2025 – Nov 2025",
    summary: "Fixed access control and built AI voice coaching for a sales training platform.",
    context:
      "Roofing contractors use Ghostrep to hire sales reps and train them with AI role-play. Admins were getting locked out of their own teams, and dashboards broke on the phones reps actually use.",
    decisions: [
      {
        title: "Fix access where it is enforced",
        detail:
          "I traced the admin bugs to the Clerk and Convex authorization flow and fixed them there. Patching around them in the UI would have left the real bug in place.",
      },
      {
        title: "Design the AI loop around the rep",
        detail:
          "I built voice feedback on VAPI so reps get coaching right after a practice call, while it is still useful.",
      },
      {
        title: "Do the work on the server",
        detail:
          "I moved logic into tuned Next.js Server Actions and fixed rendering issues, so dashboards load fast and look the same on every device.",
      },
    ],
    risks: [
      "Admins locked out, or users seeing data they shouldn't",
      "Slow AI responses making coaching feel broken",
      "Field reps unable to use the product on their phones",
    ],
    outcomes: [
      "Admins manage their teams again",
      "Reps get spoken feedback after each practice call",
      "Dashboards work on phones, tablets and desktops",
    ],
    stack: "Next.js, Clerk, Convex, VAPI",
  },
  {
    id: "spooons",
    client: "Spooons",
    role: "Software engineer",
    period: "Jan 2025 – May 2025",
    summary: "Designed a secure backend for private journals, with AI that finds stressors.",
    context:
      "Spooons is a journaling app. People write about their mental health, so the data is about as sensitive as it gets, and an LLM reads every entry to find what is stressing them.",
    decisions: [
      {
        title: "Treat the data as sensitive from the start",
        detail:
          "I designed the models and endpoints around private data from day one. JWT rotation and safer token storage in the browser close the common session gaps.",
      },
      {
        title: "Keep the LLM behind the API",
        detail:
          "Gemini runs on the server. Its output is validated into a PostgreSQL model that links each entry to its stressors, so AI results land as structured data that can be queried.",
      },
      {
        title: "Measure, then optimize",
        detail: "I profiled slow endpoints and tuned the queries and responses behind them.",
      },
    ],
    risks: [
      "Leaking private journal entries",
      "Sessions hijacked through stolen tokens",
      "Unvalidated AI output corrupting the data",
    ],
    outcomes: ["25% fewer token-related auth errors", "15% faster backend responses", "Stressors extracted from every entry"],
    stack: "Django REST Framework, PostgreSQL, React, Gemini API",
  },
];

export const blockchain = {
  intro:
    "On-chain code is hard to patch and mistakes cost real money. So I start with the threat model and the failure modes, and write the code after.",
  chains: "EVM chains (Ethereum, Base, Polygon, Arbitrum), Solana and other L1 and L2 networks",
  areas: [
    {
      name: "Smart contracts and audits",
      detail:
        "I design, test and review contracts: access control, upgrade paths, invariants, and checks for reentrancy and other well-known attack patterns.",
    },
    {
      name: "dApps and wallet UX",
      detail:
        "Wallet sign-in, clear signing prompts, and transaction status people can follow from submitted to final, including when a transaction fails or gets replaced.",
    },
    {
      name: "Indexing and backends",
      detail:
        "Event indexers, RPC failover, and reconciliation, so off-chain databases stay in sync with what actually happened on-chain.",
    },
    {
      name: "Tokens, NFTs and DeFi",
      detail: "Fungible tokens, NFTs, minting, staking and swap flows, built on audited standards.",
    },
  ],
  risks: [
    "Reentrancy and broken access control",
    "Compromised admin or upgrade keys",
    "Chain reorganizations and dropped transactions",
    "RPC provider outages",
    "Off-chain records drifting from on-chain state",
    "Oracle and price manipulation",
    "Users signing transactions they don't understand",
  ],
};

export const practices = [
  {
    name: "Design before code",
    detail:
      "I write down the data model, the service boundaries and the failure modes before building. Most expensive bugs are design bugs.",
  },
  {
    name: "Name the risks early",
    detail:
      "Who can access what, what happens when a provider goes down, how money and data move. I raise these at the start, when they are still cheap to fix.",
  },
  {
    name: "Own it in production",
    detail:
      "CI on every change, containers that behave the same everywhere, and plain fixes for the real cause rather than workarounds.",
  },
  {
    name: "Use AI, keep the judgment",
    detail:
      "I ship with AI coding tools, including multi-agent workflows. My job is deciding what gets built, reviewing what gets generated, and catching what it misses.",
  },
];

export const toolbelt =
  "TypeScript, Python, Solidity and Rust. React, Next.js, Node, Express, Django. PostgreSQL, MongoDB, Redis, Convex. Stripe, Clerk, Docker, GitHub Actions. Gemini and VAPI.";

export const timeline = [
  { when: "May 2026 – now", what: "Software engineer", where: "Day & Nite / All Service", note: "Designing and building a Django and React web platform." },
  { when: "Nov 2025 – May 2026", what: "Software engineer", where: "Investalytix", note: "Stabilized production, designed paid access, set up CI/CD." },
  { when: "Aug 2025 – Nov 2025", what: "Contract full-stack engineer", where: "Ghostrep.ai", note: "Access control and AI voice coaching." },
  { when: "Jan 2025 – May 2025", what: "Software engineer", where: "Spooons", note: "Secure API for sensitive data, with LLM extraction." },
];

export const education = {
  school: "Hunter College, CUNY",
  degree: "BA in Computer Science",
  years: "2020 – 2025",
};

export const languages = [
  { name: "English", level: "Native or bilingual" },
  { name: "Nepali", level: "Full professional" },
  { name: "Hindi", level: "Professional working" },
];
