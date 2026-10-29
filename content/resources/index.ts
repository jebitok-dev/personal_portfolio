// Resource center. Two kinds of entry:
//  - embedded:  set `file` to a markdown file in content/resources/ (rendered on the page)
//  - external:  set `href` to link out to a repo or page instead of embedding
export type Resource = {
  slug: string;
  title: string;
  description: string;
  file?: string; // embedded markdown, filename inside content/resources/
  href?: string; // external link (used when there is no file)
  meta?: string; // small label for external links, e.g. "GitHub"
};

export const resources: Resource[] = [
  {
    slug: "ctf-cheatsheet",
    title: "CTF recon & exploitation cheatsheet",
    description:
      "Working reference I reach for during CTFs: recon, enumeration, brute-forcing, privilege escalation, stego and service-by-service notes.",
    file: "ctf-cheatsheet.md",
  },
  {
    slug: "ai-security-checklists",
    title: "AI security checklists",
    description:
      "Practitioner checklists for securing web apps with an AI layer: OWASP LLM Top 10, OWASP Top 10, MITRE ATLAS and STRIDE mapped to concrete checks, with fintech/health variants and a prompt-injection payload library.",
    href: "https://github.com/jebitok-dev/AI-Security-Checklists",
    meta: "GitHub",
  },
  {
    slug: "ai-security-writeups",
    title: "AI security writeups & reports",
    description:
      "Walkthroughs, formal pentest reports and checklists from TryHackMe AI-security rooms (HealthGPT, Token City / AI Odyssey CTF).",
    href: "https://github.com/jebitok-dev/ai-security-writeups",
    meta: "GitHub",
  },
];
