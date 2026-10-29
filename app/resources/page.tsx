import type { Metadata } from "next";
import { getResources } from "@/lib/resources";
import { profile } from "@/content/site";

export const metadata: Metadata = {
  title: "Resources · Sharon Jebitok",
  description: "CTF and security reference notes: recon, enumeration, privesc and more.",
};

export default async function Resources() {
  const docs = await getResources();

  return (
    <div className="page">
      <div className="wrap">
        <nav className="nav">
          <a href="/" className="brand">{profile.handle}</a>
          <span className="spacer" />
          <a href="/" className="item">← Back to portfolio</a>
        </nav>

        <header className="hero res-hero">
          <div className="eyebrow"><span className="dot" /><span>Resource center</span></div>
          <h1>Resources</h1>
          <p className="tagline">Reference notes I keep coming back to during CTFs and security work.</p>
        </header>

        {docs.map((doc) => (
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
      </div>
    </div>
  );
}
