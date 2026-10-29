import type { Metadata } from "next";
import { getResources } from "@/lib/resources";
import { quickLinks } from "@/content/resources";
import { profile } from "@/content/site";

export const metadata: Metadata = {
  title: "Cyber cheatsheet · Sharon Jebitok",
  description: "A searchable cyber cheatsheet: recon, exploitation, privesc, shells, networking, crypto and OSINT references for CTFs.",
};

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default async function Cheatsheet() {
  const docs = await getResources();
  const external = docs.filter((d) => !d.file && d.href);
  const embedded = docs.filter((d) => d.file);

  return (
    <div className="page">
      <div className="wrap">
        <nav className="nav">
          <a href="/" className="brand">{profile.handle}</a>
          <span className="spacer" />
          <a href="/" className="item">← Back to portfolio</a>
        </nav>

        <header className="hero res-hero">
          <div className="eyebrow"><span className="dot" /><span>Cyber cheatsheet</span></div>
          <h1>Cyber cheatsheet</h1>
          <p className="tagline">The references I reach for during CTFs and security work, in one searchable place.</p>
        </header>

        <section className="section">
          <h2 className="label">Quick references</h2>
          <div className="quick-links">
            {quickLinks.map((l) => (
              <a key={l.href} href={l.href} {...ext}>{l.label} ↗</a>
            ))}
          </div>

          <h2 className="label" style={{ marginTop: 36 }}>Jump to</h2>
          <div className="cheat-index">
            {embedded.map((doc) => (
              <a key={doc.slug} href={`#${doc.slug}`}>{doc.title}</a>
            ))}
            {external.map((doc) => (
              <a key={doc.slug} href={doc.href} {...ext}>{doc.title} ↗</a>
            ))}
          </div>
        </section>

        {embedded.map((doc) => (
          <section key={doc.slug} id={doc.slug} className="section res">
            <div className="res-head">
              <h2 className="res-title">{doc.title}</h2>
              <p className="res-desc">{doc.description}</p>
              {doc.sections.length > 1 && (
                <nav className="toc" aria-label={`${doc.title} contents`}>
                  {doc.sections.map((s) => (
                    <a key={s.id} href={`#${s.id}`}>{s.title}</a>
                  ))}
                </nav>
              )}
            </div>
            <article className="prose" dangerouslySetInnerHTML={{ __html: doc.html }} />
          </section>
        ))}

        {external.length > 0 && (
          <section className="section">
            <h2 className="label">Reference repos</h2>
            <div className="grid">
              {external.map((doc) => (
                <a key={doc.slug} href={doc.href} className="card" {...ext}>
                  <h3>{doc.title}</h3>
                  <p>{doc.description}</p>
                  <div className="links">
                    <span>{doc.meta ?? "Open"} →</span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
