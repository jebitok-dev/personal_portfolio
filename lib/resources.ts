import { readFile } from "fs/promises";
import { join } from "path";
import { marked } from "marked";
import { resources, type Resource } from "@/content/resources";

export type Section = { id: string; title: string };
export type RenderedResource = Resource & { html: string; sections: Section[] };

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

// Reads a resource's markdown and renders it to HTML, adding ids to the
// top-level (h1) headings so the on-page table of contents can link to them.
export async function renderResource(resource: Resource): Promise<RenderedResource> {
  const raw = await readFile(join(process.cwd(), "content/resources", resource.file), "utf8");
  const sections: Section[] = [];
  const renderer = new marked.Renderer();

  renderer.heading = ({ tokens, depth }) => {
    const text = tokens.map((t) => ("raw" in t ? t.raw : "")).join("");
    const id = slugify(text);
    if (depth === 1) sections.push({ id, title: text });
    return `<h${depth} id="${id}">${marked.parseInline(text)}</h${depth}>`;
  };

  const html = await marked.parse(raw, { renderer, gfm: true });
  return { ...resource, html, sections };
}

export async function getResources(): Promise<RenderedResource[]> {
  return Promise.all(resources.map(renderResource));
}
