"use client";

import { useEffect, useState } from "react";
import { featuredFinding, projects, type Link, type Track } from "@/content/site";

type Filter = "All" | Track;
const FILTERS: Filter[] = ["All", "Web3", "Security", "Full-stack"];
const TRACK_EVENT = "portfolio:set-track";

// Lets other components (the hero buttons) switch the work filter.
export function setTrack(track: Filter) {
  window.dispatchEvent(new CustomEvent<Filter>(TRACK_EVENT, { detail: track }));
}

export function TrackButton(props: { track: Filter; className: string; children: React.ReactNode }) {
  return (
    <a href="#work" className={props.className} onClick={() => setTrack(props.track)}>
      {props.children}
    </a>
  );
}

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

function FeaturedFinding() {
  const [open, setOpen] = useState(false);
  const f = featuredFinding;
  return (
    <article className="finding">
      <div className="meta">
        <span className="sev">{f.severity}</span>
        <span className="src">{f.source}</span>
        {!f.ready && <span className="draft">draft · hidden on live site</span>}
      </div>
      <h3>{f.title}</h3>
      <p className="summary">{f.summary}</p>
      <button className="toggle" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        {open ? "Hide finding ↑" : "Read the finding ↓"}
      </button>
      {open && (
        <div className="details">
          <div><h4>Finding</h4><p>{f.finding}</p></div>
          <div><h4>Impact</h4><p>{f.impact}</p></div>
          <div><h4>Recommendation</h4><p>{f.recommendation}</p></div>
        </div>
      )}
      <LinkList links={f.links} />
    </article>
  );
}

export default function Work() {
  const [filter, setFilter] = useState<Filter>("All");

  useEffect(() => {
    const onTrack = (e: Event) => setFilter((e as CustomEvent<Filter>).detail);
    window.addEventListener(TRACK_EVENT, onTrack);
    return () => window.removeEventListener(TRACK_EVENT, onTrack);
  }, []);

  const visible = projects.filter((p) => filter === "All" || p.tags.includes(filter));
  // The finding shows in development for preview, and in production only once it's marked ready.
  const showFinding =
    filter !== "Full-stack" && (featuredFinding.ready || process.env.NODE_ENV === "development");

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

      {showFinding && <FeaturedFinding />}

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
