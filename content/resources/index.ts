// Resource center. Add a markdown file to content/resources/ and list it here.
export type Resource = {
  slug: string;
  title: string;
  description: string;
  file: string; // filename inside content/resources/
};

export const resources: Resource[] = [
  {
    slug: "ctf-cheatsheet",
    title: "CTF recon & exploitation cheatsheet",
    description:
      "Working reference I reach for during CTFs: recon, enumeration, brute-forcing, privesc, stego and service-by-service notes.",
    file: "ctf-cheatsheet.md",
  },
];
