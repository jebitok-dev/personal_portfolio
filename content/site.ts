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
  resumeUrl:
    "https://drive.google.com/file/d/10IfejZ5ggvEI1i3CQo__-5CjauZOfAdR/view?usp=sharing", // TODO: update to the current resume
  blogUrl: "https://www.sharonjebitok.com",
  blogRss: "https://www.sharonjebitok.com/rss.xml",
};

export const about = {
  text:
    "I started in full-stack development, building and shipping web applications with JavaScript, React and Ruby on Rails, alongside open-source, technical writing and community work. That led me into Web3 engineering — building a wallet-authenticated trust graph platform, where reading contracts, signatures and auth flows every day pulled my attention toward how these systems break. Since 2024 I've spent most of my time in security: hunting bugs on Intigriti, Immunefi and YesWeHack, auditing smart contracts on CodeHawks, working through SOC and DFIR labs on TryHackMe, and building tooling for AI/ML security. The full-stack foundation hasn't gone anywhere; it's what lets me read an unfamiliar codebase quickly.",
};

// Featured audit finding. Hidden on the live site until `ready` is true.
// The text below is placeholder copy from the design, not a real finding.
export const featuredFinding = {
  ready: false,
  severity: "Medium severity",
  source: "CodeHawks · competitive audit",
  title: "Accounting flaw in reward distribution",
  summary:
    "A medium-severity finding submitted in a CodeHawks competitive audit: a state update ordering issue that let a caller receive rewards twice within a single accounting period.",
  finding:
    "The claim path transferred value before zeroing the caller's accrued balance, leaving a window where the stored balance and the actual entitlement disagreed.",
  impact:
    "Any participant could drain a share of the reward pool beyond their allocation, diluting every other depositor in the round.",
  recommendation:
    "Reorder to a checks-effects-interactions pattern: clear accrued state before the external transfer, and assert the invariant after.",
  links: [
    { label: "Submission →", href: "" }, // TODO
    { label: "CodeHawks profile →", href: "" }, // TODO
  ] as Link[],
};

export const projects: Project[] = [
  {
    title: "UTU Trust Graph Platform",
    blurb:
      "Wallet-authenticated trust graph: signature-based auth, on-chain identity linking and a React front end. Current role at UTU Technologies.",
    tags: ["Web3", "Full-stack"],
    links: [{ label: "Live →", href: "https://utu.io" }],
  },
  {
    title: "ai_audit.sh",
    blurb:
      "Shell tooling that automates reconnaissance and misconfiguration checks across AI/ML deployment surfaces.",
    tags: ["Security"],
    links: [
      { label: "Source →", href: "" }, // TODO
      { label: "Writeup →", href: "" }, // TODO
    ],
  },
  {
    title: "TryHackMe & SOC writeups",
    blurb:
      "Walkthroughs of SOC, DFIR, Splunk, OSINT and AI security challenges: alert triage, log analysis, phishing and intrusion investigations.",
    tags: ["Security"],
    links: [{ label: "Blog →", href: "https://www.sharonjebitok.com" }],
  },
  {
    title: "Bug bounty writeups",
    blurb:
      "Public disclosures from Intigriti, Immunefi and YesWeHack engagements: access control, business logic and auth flaws.",
    tags: ["Security"],
    links: [{ label: "Writeups →", href: "" }], // TODO
  },
  {
    title: "Smart contract audit notes",
    blurb:
      "Working notes from CodeHawks competitive audits: recurring vulnerability classes and the review checklist built from them.",
    tags: ["Security", "Web3"],
    links: [{ label: "Notes →", href: "" }], // TODO
  },
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
    links: [
      { label: "Source →", href: "https://github.com/jebitok-dev/Twitter-Redesign" },
    ],
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
];

export const stats = [
  { label: "TryHackMe", value: "Top 1%", note: "Global ranking", accent: true },
  { label: "CodeHawks", value: "1 Medium", note: "Competitive audit finding", accent: true },
  { label: "Bounty platforms", value: "3 active", note: "Intigriti, Immunefi, YesWeHack", accent: false },
  { label: "CTF", value: "AI Odyssey", note: "2026 participant", accent: false },
];

export const badges: Link[] = [
  { label: "TryHackMe", href: "" }, // TODO: profile URLs
  { label: "CodeHawks", href: "" },
  { label: "Intigriti", href: "" },
  { label: "Immunefi", href: "" },
  { label: "YesWeHack", href: "" },
];

export const skills = [
  {
    name: "Security & Web3",
    items: ["Solidity", "Smart contract auditing", "Foundry", "Burp Suite", "Nmap", "Metasploit", "Wireshark", "Gobuster", "Splunk", "OSINT"],
  },
  {
    name: "Languages & frameworks",
    items: ["JavaScript / TypeScript", "React / React Native", "Next.js", "Ruby on Rails / RSpec", "Node.js", "Python", "HTML / CSS"],
  },
  {
    name: "Platform & practice",
    items: ["Ethers.js / Wagmi", "PostgreSQL", "Git / GitHub Actions", "Docker", "Linux", "Technical writing", "Open source & community"],
  },
];

export const contacts: (Link & { value: string })[] = [
  { label: "Email", value: "", href: "" }, // TODO: add the email you want public
  { label: "GitHub", value: "@jebitok-dev", href: "https://github.com/jebitok-dev" },
  { label: "X", value: "@sharonjebitok", href: "https://x.com/sharonjebitok" },
  { label: "LinkedIn", value: "in/sharon-jebitok", href: "https://www.linkedin.com/in/sharon-jebitok/" },
  { label: "Blog", value: "sharonjebitok.com", href: "https://www.sharonjebitok.com" },
];
