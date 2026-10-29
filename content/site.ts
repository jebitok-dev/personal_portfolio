// All portfolio content lives here. Edit this file to update the site.
// Links left as "" are hidden on the page until you fill them in.

export type Track = "Web3" | "Security" | "Full-stack";

export type Link = { label: string; href: string };

export type Project = {
  title: string;
  blurb: string;
  tags: Track[];
  links: Link[];
};

export const profile = {
  name: "Sharon Jebitok",
  handle: "Sharon Jebitok",
  eyebrow: "Security Research · Software Engineering",
  tagline: ["Security Researcher", "Software Engineer"],
  location: "Nairobi, Kenya",
  // Two résumés, matching the two tracks on the page.
  resumes: [
    { label: "Security résumé", href: "/resume-security.pdf" },
    { label: "Engineering résumé", href: "/resume-engineering.pdf" },
  ] as Link[],
  blogUrl: "https://www.sharonjebitok.com",
  blogRss: "https://www.sharonjebitok.com/rss.xml",
};

export const about = {
  text:
    "I've spent 4+ years building production software in TypeScript, React and Node.js - SDKs, browser extensions, APIs and smart contracts. Threat-modelling features, reviewing code for exploitable flaws and auditing dependencies before they shipped pulled me steadily deeper into security. I'm now ranked in the top 1% globally on TryHackMe across SOC Level 1, Jr Penetration Tester and AI Security; I publish AI-security writeups and practitioner checklists that map the OWASP LLM Top 10 and MITRE ATLAS onto real systems; and I found and reported a medium-severity smart-contract audit finding. I'm moving into vulnerability disclosure, bug-bounty and AI red-teaming - including Gray Swan's jailbreaking arena - across web, smart-contract and LLM targets. I read alerts, logs and code with an understanding of how systems actually break.",
};

// Curated writeups grouped by track (verified links). Edit freely; add more from the blog.
export const writing: { name: string; items: { title: string; date: string; href: string }[] }[] = [
  {
    name: "AI security",
    items: [
      { title: "The Concierge Knows Too Much - AI Security", date: "Sep 2026", href: "https://www.sharonjebitok.com/the-concierge-knows-too-much-ai-security-tryhackme" },
      { title: "LLM Pentesting", date: "Sep 2026", href: "https://www.sharonjebitok.com/llm-pentesting-tryhackme" },
      { title: "HealthGPT - AI Security CTF", date: "Jul 2026", href: "https://www.sharonjebitok.com/healthgpt-tryhackme" },
      { title: "Token City - AI Odyssey CTF", date: "Jun 2026", href: "https://www.sharonjebitok.com/token-city-ai-odyssey-ctf-tryhackme" },
      { title: "LLMborghini - Prompt Injection", date: "Jun 2026", href: "https://www.sharonjebitok.com/llmborghini-tryhackme-ai-chatbot-prompt-injection-real-world-examples" },
      { title: "Vectara - AI Odyssey CTF", date: "May 2026", href: "https://www.sharonjebitok.com/vectara-tryhackme-ai-odyssey-ctf" },
      { title: "AI Threat Modelling", date: "May 2026", href: "https://www.sharonjebitok.com/ai-threat-modelling-tryhackme" },
      { title: "Jailbreaking", date: "May 2026", href: "https://www.sharonjebitok.com/jailbreaking-tryhackm" },
      { title: "Prompt Injection", date: "May 2026", href: "https://www.sharonjebitok.com/prompt-injection-tryhackme" },
      { title: "CupidBot - AI Security CTF", date: "Feb 2026", href: "https://www.sharonjebitok.com/cupidbot-ai-security-challenge-writeup-tryhackme-ctf" },
    ],
  },
  {
    name: "Red team · offensive",
    items: [
      { title: "Operation Coldstart", date: "Sep 2026", href: "https://www.sharonjebitok.com/challenge-operation-coldstart-tryhackme" },
      { title: "Hammer", date: "Sep 2026", href: "https://www.sharonjebitok.com/challenge-hammer-tryhackme" },
      { title: "Expose", date: "Sep 2026", href: "https://www.sharonjebitok.com/challenge-expose-tryhackme" },
      { title: "Linux Privilege Escalation: Automation", date: "Sep 2026", href: "https://www.sharonjebitok.com/linux-privilege-escalation-automation" },
      { title: "Operation Promotion", date: "Aug 2026", href: "https://www.sharonjebitok.com/operation-promotion-tryhackme" },
      { title: "Metasploit: Scanning & Exploitation", date: "Jun 2026", href: "https://www.sharonjebitok.com/metasploit-scanning-and-exploitation-tryhackme" },
      { title: "CVE-2026-31431: Copy-Fail", date: "Jun 2026", href: "https://www.sharonjebitok.com/cve-2026-31431-copy-fail-tryhackme" },
      { title: "Madness - Joker CTF × Steganography", date: "Feb 2026", href: "https://www.sharonjebitok.com/madness-joker-ctf-x-steganography-tryhackme" },
      { title: "Attacktive Directory", date: "2025", href: "https://www.sharonjebitok.com/challenges-attacktive-directory-tryhackme" },
      { title: "Windows Privilege Escalation", date: "2025", href: "https://www.sharonjebitok.com/privilege-escalation-windows-privilege-escalation-tryhackme" },
      { title: "Brute It", date: "2025", href: "https://www.sharonjebitok.com/challenges-brute-it-tryhackme" },
      { title: "Wonderland", date: "2026", href: "https://www.sharonjebitok.com/wonderland-ctf-challenge-thm" },
    ],
  },
  {
    name: "Blue team · defensive",
    items: [
      { title: "The O365 Intrusion - Splunk", date: "Oct 2026", href: "https://www.sharonjebitok.com/the-o365-intrusion-splunk-tryhackme" },
      { title: "The Finance Trail - Splunk", date: "Oct 2026", href: "https://www.sharonjebitok.com/the-finance-trail-splunk-tryhackme" },
      { title: "Benign - Splunk", date: "Oct 2026", href: "https://www.sharonjebitok.com/benign-splunk-tryhackme" },
      { title: "Intro to Detection Engineering", date: "Sep 2026", href: "https://www.sharonjebitok.com/intro-to-detection-engineering-tryhackme" },
      { title: "Investigating with Splunk", date: "Sep 2026", href: "https://www.sharonjebitok.com/challenge-investigating-with-splunk-tryhackme" },
      { title: "Microsoft Intune Monitoring", date: "Mar 2026", href: "https://www.sharonjebitok.com/microsoft-intune-monitoring-tryhackme" },
      { title: "Detecting AD Post-Exploitation", date: "Mar 2026", href: "https://www.sharonjebitok.com/detecting-ad-post-exploitation-tryhackme" },
      { title: "Detecting AD Initial Access", date: "Mar 2026", href: "https://www.sharonjebitok.com/detecting-ad-initial-access-tryhackme" },
      { title: "Entra ID Monitoring", date: "Mar 2026", href: "https://www.sharonjebitok.com/entra-id-monitoring-tryhackme" },
      { title: "Intro to Malware Analysis", date: "Mar 2026", href: "https://www.sharonjebitok.com/intro-to-malware-analysis-tryhackme" },
      { title: "Phishing Analysis Tools", date: "Mar 2026", href: "https://www.sharonjebitok.com/phishing-analysis-tools-tryhackme" },
      { title: "SOC Role in Blue Team", date: "2025", href: "https://www.sharonjebitok.com/soc-role-in-blue-team-tryhackme" },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "AI security writeups & pentest reports",
    blurb:
      "Narrative walkthroughs and formal pentest reports from TryHackMe AI-security rooms - HealthGPT and Token City (AI Odyssey CTF) - covering 17 findings across the LLM/ML attack surface: unauthenticated model APIs, prompt injection, SSRF to internal model enumeration, data poisoning and agentic trust-boundary bypass.",
    tags: ["Security"],
    links: [{ label: "GitHub →", href: "https://github.com/jebitok-dev/ai-security-writeups" }],
  },
  {
    title: "AI security checklists",
    blurb:
      "Practitioner checklists for securing web apps with an AI layer - OWASP LLM Top 10, OWASP Top 10, MITRE ATLAS and STRIDE mapped to concrete checks, with fintech and health variants and a categorised prompt-injection payload library.",
    tags: ["Security"],
    links: [{ label: "GitHub →", href: "https://github.com/jebitok-dev/AI-Security-Checklists" }],
  },
  {
    title: "Secure code review & incident response",
    blurb:
      "Security-minded code reviews, dependency auditing and incident-response procedures for a production browser extension - including detecting and containing a targeted social-engineering campaign before any payload executed.",
    tags: ["Security"],
    links: [],
  },
  {
    title: "Smart-contract audit portfolio",
    blurb:
      "A growing set of CodeHawks First Flight audits (ThunderLoan, Stratax, MyCut, Puppy Raffle, Snowman Merkle Airdrop and more), each with a custom Foundry audit.sh that automates recon, Slither/Aderyn static analysis, testing and a pre-filled report, alongside the written findings. Includes a reported medium-severity finding.",
    tags: ["Security"],
    links: [{ label: "GitHub →", href: "https://github.com/jebitok-dev/web3-auditing-projects" }],
  },
  {
    title: "CTF, SOC & security writeups",
    blurb:
      "Walkthroughs of SOC, DFIR, Splunk, OSINT and AI-security challenges from TryHackMe: alert triage, log analysis, phishing and intrusion investigations.",
    tags: ["Security"],
    links: [{ label: "Blog →", href: "https://www.sharonjebitok.com" }],
  },
  {
    title: "LLM trust-summary service",
    blurb:
      "Provider-agnostic LLM integration (OpenAI, Groq, Ollama) with response caching. Authored the AI integration strategy and technical spec adopted by the team.",
    tags: ["Full-stack"],
    links: [],
  },
  /* Microverse bootcamp projects - dropped for now; restore by uncommenting.
  {
    title: "Bookstore",
    blurb:
      "Bookstore dashboard to add and remove books, browse the catalogue and track reading progress. Built with React and Redux.",
    tags: ["Full-stack"],
    links: [
      { label: "Source →", href: "https://github.com/jebitok-dev/bookstore" },
      { label: "Live →", href: "https://bookstore-rrdx.netlify.app/" },
    ],
  },
  {
    title: "Twitter Redesign",
    blurb:
      "Social app with sign-up and log-in, tweeting and following other users. Built with Ruby on Rails and SCSS.",
    tags: ["Full-stack"],
    links: [{ label: "Source →", href: "https://github.com/jebitok-dev/Twitter-Redesign" }],
  },
  {
    title: "Adopt Pets",
    blurb: "Pet catalogue with filtering by category and a detail view for each pet. Built with React and SCSS.",
    tags: ["Full-stack"],
    links: [
      { label: "Source →", href: "https://github.com/jebitok-dev/catalogue-of-pets/" },
      { label: "Live →", href: "https://catalogue-of-pets.netlify.app/" },
    ],
  },
  {
    title: "Weather App",
    blurb: "Search any city for real-time weather, using JavaScript and the OpenWeather API.",
    tags: ["Full-stack"],
    links: [
      { label: "Source →", href: "https://github.com/jebitok-dev/Weather-App" },
      { label: "Live →", href: "https://weather-app-async.netlify.app/" },
    ],
  },
  {
    title: "Phaser platform game",
    blurb: "Browser platform game built with JavaScript, HTML5 and Phaser.",
    tags: ["Full-stack"],
    links: [
      { label: "Source →", href: "https://github.com/jebitok-dev/platform-game" },
      { label: "Play →", href: "https://platform-game-with-phaser.netlify.app/" },
    ],
  },
  {
    title: "Restaurant page",
    blurb: "Restaurant landing page with about, menu and contact tabs, rendered with JavaScript.",
    tags: ["Full-stack"],
    links: [
      { label: "Source →", href: "https://github.com/jebitok-dev/RestaurantPage" },
      { label: "Live →", href: "https://deal-restaurantjs.netlify.app/" },
    ],
  },
  {
    title: "PataShule",
    blurb: "Landing page for a directory of schools, built with HTML and Bootstrap.",
    tags: ["Full-stack"],
    links: [
      { label: "Source →", href: "https://github.com/jebitok-dev/Capstone1-html" },
      { label: "Live →", href: "https://patashule-capstone.netlify.app/" },
    ],
  },
  */
  {
    title: "Wallet-authenticated trust SDK",
    blurb:
      "Published npm SDK and embeddable web components that surface on-chain trust signals - ratings, reviews, video attestations and endorsements - on partner platforms.",
    tags: ["Web3", "Full-stack"],
    links: [{ label: "npm →", href: "" }], // TODO: add the npm package link if you want it public
  },
  {
    title: "Wallet-auth browser extension",
    blurb:
      "React/TypeScript browser extension (WebExtensions API) with wallet-based authentication and per-page and per-URL visibility controls.",
    tags: ["Web3", "Full-stack"],
    links: [],
  },
  {
    title: "ICP-Ethereum proxy contracts",
    blurb:
      "Rust proxy contracts bridging Internet Computer and Ethereum, with smart contracts deployed across multiple EVM networks.",
    tags: ["Web3"],
    links: [],
  },
];

export const stats = [
  { label: "TryHackMe", value: "Top 1%", note: "SOC L1 · Jr Pen Tester · AI Security", accent: true },
  { label: "AI security", value: "17 findings", note: "HealthGPT & Token City AI CTFs", accent: true },
  { label: "Smart-contract audits", value: "10 audits", note: "CodeHawks First Flights · 1 Medium reported", accent: false },
  { label: "Engineering", value: "4+ yrs", note: "Production TypeScript / React / Node", accent: false },
];

// TryHackMe career paths - the main learning platform. pct: null = enrolled / ongoing.
export const tryhackme = {
  profileUrl: "", // TODO: add your TryHackMe profile URL
  tracks: [
    {
      name: "Security Analyst",
      note: "Blue team · SOC / DFIR",
      paths: [
        { name: "SOC Level 1", pct: 58 },
        { name: "SOC Level 2", pct: 47 },
        { name: "Advanced Endpoint Investigations", pct: 5 },
        { name: "Windows IR & Forensics", pct: null },
        { name: "Defending Azure", pct: null },
      ],
    },
    {
      name: "Penetration Tester",
      note: "Red team · offensive",
      paths: [
        { name: "Jr Penetration Tester", pct: 92 },
        { name: "Web Application Pentesting", pct: 45 },
        { name: "Web Application Red Teaming", pct: 27 },
        { name: "Red Teaming", pct: 12 },
      ],
    },
    {
      name: "Security Engineer",
      note: "Secure dev · DevSecOps",
      paths: [
        { name: "Security Engineer", pct: 69 },
        { name: "DevSecOps", pct: 43 },
        { name: "Defending AWS", pct: null },
      ],
    },
    {
      name: "AI Security",
      note: "LLM / ML · 17 findings",
      paths: [
        { name: "AI Security", pct: 100 },
      ],
    },
  ],
};

export const badges: Link[] = [
  { label: "TryHackMe", href: "" }, // TODO: profile URL
  { label: "Gray Swan - AI red-teaming", href: "https://www.grayswan.ai/" },
  { label: "Google Cybersecurity Professional Certificate", href: "" }, // TODO: credential URL
];

export const skills = [
  {
    name: "Security",
    items: [
      "Threat modelling",
      "Secure code review",
      "Vulnerability research",
      "OWASP Top 10 / LLM Top 10",
      "MITRE ATT&CK / ATLAS",
      "SIEM / Splunk",
      "Malware & log analysis",
      "OSINT",
      "Nmap",
      "Burp Suite",
      "Metasploit",
      "Wireshark",
    ],
  },
  {
    name: "Languages & frameworks",
    items: [
      "TypeScript / JavaScript",
      "React / Next.js / React Native",
      "Node.js",
      "Ruby on Rails",
      "Python",
      "Rust",
      "Solidity",
      "Bash",
      "PowerShell",
    ],
  },
  {
    name: "Blockchain & data",
    items: [
      "EVM smart contracts",
      "Foundry",
      "The Graph (subgraphs)",
      "Internet Computer (ICP)",
      "Wallet authentication",
      "npm SDK publishing",
      "GraphQL (Apollo)",
      "Neo4j",
    ],
  },
  {
    name: "AI, cloud & tooling",
    items: [
      "LLM integration (OpenAI / Groq / Ollama)",
      "Prompt design",
      "Claude Code",
      "AWS",
      "Docker",
      "Linux",
      "Git / GitLab CI",
      "Netlify / Vercel",
    ],
  },
];

export const contacts: (Link & { value: string })[] = [
  { label: "Email", value: "sharonkosgei4@gmail.com", href: "mailto:sharonkosgei4@gmail.com" },
  { label: "GitHub", value: "@jebitok-dev", href: "https://github.com/jebitok-dev" },
  { label: "LinkedIn", value: "in/sharon-jebitok", href: "https://www.linkedin.com/in/sharon-jebitok/" },
  { label: "Blog", value: "sharonjebitok.com", href: "https://www.sharonjebitok.com" },
];
