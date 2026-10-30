"use client";

import { useState } from "react";
import { projects, type Link, type Track } from "@/content/site";

type Filter = "All" | Track;
const FILTERS: Filter[] = ["All", "Security", "Full-stack", "Web3"];

function LinkList({ links }: { links: Link[] }) {
  const shown = links.filter((l) => l.href);
  if (!shown.length) return null;
  return (
    <div className="links">
      {shown.map((l) => (
        <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
          {l.label}
        </a>
      ))}
    </div>
  );
}

export default function Work() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = projects.filter((p) => filter === "All" || p.tags.includes(filter));

  return (
    <section id="work" className="section">
      <div className="work-head">
        <h2 className="label">Selected work</h2>
        <div className="chips" role="group" aria-label="Filter projects">
          {FILTERS.map((t) => (
            <button key={t} className="chip" aria-pressed={filter === t} onClick={() => setFilter(t)}>
              {t}
              <span className="count">
                {t === "All" ? projects.length : projects.filter((p) => p.tags.includes(t)).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid">
        {visible.map((p) => (
          <article key={p.title} className="card">
            <h3>{p.title}</h3>
            <p>{p.blurb}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span key={t} className={`tag tag-${t}`}>{t}</span>
              ))}
            </div>
            <LinkList links={p.links} />
          </article>
        ))}
      </div>
    </section>
  );
}
