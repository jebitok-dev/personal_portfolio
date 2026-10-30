"use client";

import { useEffect, useRef, useState } from "react";

type Doc = { slug: string; title: string };

// A heading plus the blocks under it, up to the next heading.
type Chunk = {
  level: number;
  heading?: Element;
  headingText: string;
  els: Element[];
  text: string;
  parents: Chunk[];
};

const HIDDEN = "is-hidden";

function buildChunks(prose: Element): Chunk[] {
  const chunks: Chunk[] = [];
  const stack: Chunk[] = [];
  let current: Chunk = { level: 0, headingText: "", els: [], text: "", parents: [] };
  chunks.push(current);

  for (const el of Array.from(prose.children)) {
    const m = /^H([1-6])$/.exec(el.tagName);
    if (m) {
      const level = Number(m[1]);
      while (stack.length && (stack.at(-1) as Chunk).level >= level) stack.pop();
      current = { level, heading: el, headingText: el.textContent ?? "", els: [el], text: "", parents: [...stack] };
      stack.push(current);
      chunks.push(current);
    } else {
      current.els.push(el);
    }
  }
  for (const c of chunks) c.text = c.els.map((e) => e.textContent ?? "").join(" ").toLowerCase();
  return chunks;
}

/** Hide blocks that don't match the query. Returns true if anything in this doc matched. */
function applyFilter(chunks: Chunk[], terms: string[]): boolean {
  const matches = (text: string) => terms.every((t) => text.includes(t));
  const shown = new Set<Chunk>();
  const headingOnly = new Set<Chunk>();

  for (const c of chunks) {
    const hit = matches(c.text) || c.parents.some((p) => matches(p.headingText.toLowerCase()));
    if (!hit) continue;
    shown.add(c);
    for (const p of c.parents) headingOnly.add(p); // keep the section headings above a match for context
  }

  for (const c of chunks) {
    c.els.forEach((el) => {
      const visible = terms.length === 0 || shown.has(c) || (headingOnly.has(c) && el === c.heading);
      el.classList.toggle(HIDDEN, !visible);
    });
  }
  return shown.size > 0;
}

function addCopyButtons() {
  document.querySelectorAll<HTMLPreElement>(".prose pre").forEach((pre) => {
    if (pre.querySelector(".copy-btn")) return;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "copy-btn";
    btn.textContent = "Copy";
    btn.setAttribute("aria-label", "Copy code to clipboard");
    btn.addEventListener("click", async () => {
      const code = pre.querySelector("code")?.textContent ?? "";
      try {
        await navigator.clipboard.writeText(code.replace(/\n$/, ""));
        btn.textContent = "Copied";
      } catch {
        btn.textContent = "Copy failed";
      }
      setTimeout(() => (btn.textContent = "Copy"), 1500);
    });
    pre.appendChild(btn);
  });
}

export default function CheatsheetBar({ docs, brand }: { docs: Doc[]; brand: string }) {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState<number | null>(null);
  const input = useRef<HTMLInputElement>(null);
  const chunksByDoc = useRef(new Map<string, Chunk[]>());

  useEffect(() => {
    addCopyButtons();
    for (const d of docs) {
      const prose = document.querySelector(`#${CSS.escape(d.slug)} .prose`);
      if (prose) chunksByDoc.current.set(d.slug, buildChunks(prose));
    }
  }, [docs]);

  // "/" or Cmd/Ctrl+K focuses the filter; Esc clears it.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = e.target instanceof HTMLElement && /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName);
      if ((e.key === "/" && !typing) || (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey))) {
        e.preventDefault();
        input.current?.focus();
        input.current?.select();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    let matchedDocs = 0;
    for (const d of docs) {
      const section = document.getElementById(d.slug);
      const chunks = chunksByDoc.current.get(d.slug);
      if (!section || !chunks) continue;
      const hit = applyFilter(chunks, terms);
      section.classList.toggle(HIDDEN, terms.length > 0 && !hit);
      if (hit) matchedDocs++;
    }
    document.querySelectorAll(".cheat-intro").forEach((el) => el.classList.toggle(HIDDEN, terms.length > 0));
    setCount(terms.length ? matchedDocs : null);
  }, [query, docs]);

  return (
    <nav className="nav cheat-bar">
      <a href="/" className="brand">
        <img src="/logo.png" alt="" width={28} height={28} className="brand-logo" />
        <span>{brand}</span>
      </a>

      <div className="cheat-search">
        <input
          ref={input}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Escape" && setQuery("")}
          placeholder="Filter: nmap, 445, sudo…"
          aria-label="Filter the cheatsheet"
        />
        <kbd>/</kbd>
      </div>

      <select
        className="cheat-jump"
        aria-label="Jump to a cheatsheet"
        value=""
        onChange={(e) => {
          if (e.target.value) document.getElementById(e.target.value)?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <option value="">Jump to…</option>
        {docs.map((d) => (
          <option key={d.slug} value={d.slug}>{d.title}</option>
        ))}
      </select>

      <a href="/" className="item back">← Portfolio</a>

      {count !== null && (
        <div className="cheat-status" role="status">
          {count === 0 ? "No matches. Try a tool name, port or keyword." : `Matches in ${count} of ${docs.length} cheatsheets · Esc to clear`}
        </div>
      )}
    </nav>
  );
}
