// Cyber cheatsheet entries. Two kinds:
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

// Quick-reference links to the frameworks and lookups I reach for mid-challenge.
export const quickLinks: { label: string; href: string }[] = [
  { label: "GTFOBins", href: "https://gtfobins.github.io/" },
  { label: "LOLBAS", href: "https://lolbas-project.github.io/" },
  { label: "MITRE ATT&CK", href: "https://attack.mitre.org/" },
  { label: "MITRE ATLAS", href: "https://atlas.mitre.org/" },
  { label: "OWASP Top 10", href: "https://owasp.org/www-project-top-ten/" },
  { label: "OWASP LLM Top 10", href: "https://genai.owasp.org/llm-top-10/" },
  { label: "PayloadsAllTheThings", href: "https://github.com/swisskyrepo/PayloadsAllTheThings" },
  { label: "HackTricks", href: "https://book.hacktricks.xyz/" },
  { label: "CyberChef", href: "https://gchq.github.io/CyberChef/" },
  { label: "Reverse Shell Generator", href: "https://www.revshells.com/" },
  { label: "Exploit-DB", href: "https://www.exploit-db.com/" },
  { label: "CrackStation", href: "https://crackstation.net/" },
];

export const resources: Resource[] = [
  {
    slug: "ctf-cheatsheet",
    title: "Recon & exploitation (CTF)",
    description:
      "Recon, enumeration, brute-forcing, privilege escalation, stego and service-by-service notes.",
    file: "ctf-cheatsheet.md",
  },
  {
    slug: "field-manual",
    title: "Pentest field manual",
    description:
      "Methodology, vulnerability types, enumeration, privilege escalation, reverse/web shells, CVE research and post-exploitation - a living knowledge base for CTFs and labs.",
    file: "field-manual.md",
  },
  {
    slug: "pentest-cheatsheet",
    title: "Pentest quick cheatsheet",
    description:
      "Fast command reference for recon, enumeration, exploitation and privilege escalation.",
    file: "pentest-cheatsheet.md",
  },
  {
    slug: "pentest-methodology",
    title: "Pentest methodology (by phase)",
    description:
      "Phase-by-phase reference: recon & enumeration, exploitation, privilege escalation, post-exploitation & lateral movement, and cleanup, with common ports and tools.",
    file: "pentest-methodology.md",
  },
  {
    slug: "red-team-methodology",
    title: "Red team methodology (offensive ↔ blue-team)",
    description:
      "An offensive methodology index mapping each attack category to the blue-team signal it produces - recon, web exploitation, credential attacks, privesc, AD paths, lateral movement, persistence and exfil. Methodology only, not payloads.",
    file: "red-team-methodology.md",
  },
  {
    slug: "soc-dfir-cti",
    title: "SOC, DFIR & threat intel",
    description:
      "Blue-team reference from hands-on Splunk investigations: investigation method and honest reporting, Splunk search patterns, Sysmon and Windows/PowerShell event IDs, logon types, credential-attack indicators, M365 operations, and the ATT&CK attack chain with LOLBins. (Sections 01-03 so far.)",
    file: "soc-dfir-cti.md",
  },
  {
    slug: "networking",
    title: "Networking & ports",
    description: "Common ports and services with their attack vectors and notes.",
    file: "networking.md",
  },
  {
    slug: "shells",
    title: "Shells & payloads",
    description: "Msfvenom payloads and reverse, bind and web shell one-liners across platforms.",
    file: "shells.md",
  },
  {
    slug: "cryptography",
    title: "Cryptography",
    description: "Go-to crypto tools, classical ciphers, hashing and encoding references.",
    file: "cryptography.md",
  },
  {
    slug: "osint",
    title: "OSINT",
    description: "Google dorks and open-source intelligence techniques and sources.",
    file: "osint.md",
  },
  {
    slug: "ai-webapp-checklist",
    title: "AI security checklist (web app)",
    description:
      "A condensed on-page checklist for securing web apps with an AI layer: auth, access control, injection, prompt injection, output encoding, headers, API, AI context isolation, dependencies, logging and a pre-launch minimum. Full version in the repo.",
    file: "ai-webapp-checklist.md",
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
