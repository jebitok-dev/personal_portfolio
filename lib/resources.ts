import { readFile } from "fs/promises";
import { join } from "path";
import { marked } from "marked";
import { resources, type Resource } from "@/content/resources";

export type Section = { id: string; title: string };
export type RenderedResource = Resource & { html: string; sections: Section[] };

// GitHub-style heading slugs ("Tools & Tips" -> "tools--tips"), so the markdown's own
// "[link](#heading)" tables of contents keep working.
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s/g, "-");
}

// Reads a resource's markdown and renders it to HTML. Heading ids are prefixed with the
// resource slug because every doc is on one page and many share headings
// ("Privilege Escalation"); in-doc "#anchor" links are rewritten to match.
// Top-level (h1) headings also feed the on-page table of contents.
// External resources (no `file`, just an `href`) are returned as-is.
export async function renderResource(resource: Resource): Promise<RenderedResource> {
  if (!resource.file) return { ...resource, html: "", sections: [] };
  const raw = await readFile(join(process.cwd(), "content/resources", resource.file), "utf8");
  const sections: Section[] = [];
  const used = new Map<string, number>();
  const renderer = new marked.Renderer();

  renderer.heading = ({ tokens, depth }) => {
    const text = tokens.map((t) => ("raw" in t ? t.raw : "")).join("");
    const base = `${resource.slug}-${slugify(text)}`;
    const seen = used.get(base) ?? 0;
    used.set(base, seen + 1);
    const id = seen ? `${base}-${seen}` : base; // repeated headings get -1, -2... like GitHub
    if (depth === 1) sections.push({ id, title: text });
    return `<h${depth} id="${id}">${marked.parseInline(text)}</h${depth}>`;
  };

  const html = (await marked.parse(raw, { renderer, gfm: true })).replace(
    /href="#([^"]+)"/g,
    (_, anchor: string) => `href="#${resource.slug}-${anchor}"`,
  );
  return { ...resource, html, sections };
}

export async function getResources(): Promise<RenderedResource[]> {
  return Promise.all(resources.map(renderResource));
}
