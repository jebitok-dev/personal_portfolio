import SiteNav from "@/components/SiteNav";
import Work from "@/components/Work";
import { about, badges, contacts, profile, skills, stats, tryhackme, writing } from "@/content/site";
import { getPosts } from "@/lib/posts";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

// Keep the three writing columns equal length; the rest live on the blog.
const WRITING_PER_CATEGORY = 8;

export default async function Home() {
  const posts = await getPosts(profile.blogRss);

  return (
    <div className="page">
      <div className="wrap">
        <SiteNav brand={profile.handle} />

        <header className="hero">
          <div className="eyebrow"><span className="dot" /><span>{profile.eyebrow}</span></div>
          <h1>{profile.name}</h1>
          <p className="tagline">
            {profile.tagline[0]} <span className="sep">|</span> {profile.tagline[1]}
          </p>
          <div className="ctas">
            {profile.resumes.map((r, i) => (
              <a key={r.href} href={r.href} className={i === 0 ? "btn btn-primary" : "btn btn-ghost"} {...ext}>
                {r.label} <span className="arrow">PDF</span>
              </a>
            ))}
            <a href="#contact" className="btn btn-ghost">
              Get in touch <span className="arrow">→</span>
            </a>
          </div>

          <div className="stats hero-stats">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <div className="k">{s.label}</div>
                <div className={s.accent ? "v accent" : "v"}>{s.value}</div>
                <div className="n">{s.note}</div>
              </div>
            ))}
          </div>
        </header>

        <section className="section about">
          <h2 className="label">About</h2>
          <div className="about-body">
            <p className="lead">{about.lead}</p>
            <dl className="about-points">
              {about.points.map((pt) => (
                <div key={pt.label}>
                  <dt>{pt.label}</dt>
                  <dd>{pt.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <Work />

        <section id="research" className="section">
          <h2 className="label">Security research</h2>
          <h3 className="subhead">TryHackMe career paths</h3>
          <div className="paths">
            {tryhackme.tracks.map((t) => (
              <div key={t.name} className="track">
                <div className="track-name">{t.name}</div>
                <span className="track-note">{t.note}</span>
                {t.paths.map((p) => (
                  <div key={p.name} className="path">
                    <div className="path-head">
                      <span>{p.name}</span>
                      {p.pct != null ? (
                        <span className="path-pct">{p.pct}%</span>
                      ) : (
                        <span className="path-ongoing">ongoing</span>
                      )}
                    </div>
                    {p.pct != null && (
                      <div className="bar"><span style={{ width: `${p.pct}%` }} /></div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="badges">
            {badges.map((b) =>
              b.href ? (
                <a key={b.label} href={b.href} className="badge" {...ext}>{b.label}</a>
              ) : (
                <span key={b.label} className="badge">{b.label}</span>
              ),
            )}
          </div>
        </section>

        <section id="writing" className="section">
          <h2 className="label">Writing</h2>

          <div className="writing-groups">
            {writing.map((group) => (
              <div key={group.name} className="writing-group">
                <h3 className="subhead">{group.name}</h3>
                <div className="linklist">
                  {group.items.slice(0, WRITING_PER_CATEGORY).map((w) => (
                    <a key={w.href} href={w.href} title={w.title} {...ext}>
                      <span className="t">{w.title}</span>
                      <span className="d">{w.date}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {posts.length > 0 && (
            <>
              <h3 className="subhead">Latest posts</h3>
              <div className="posts">
                {posts.map((post) => (
                  <a key={post.href} href={post.href} className="post" {...ext}>
                    <div className="date">{post.date}</div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <span className="more">Read post →</span>
                  </a>
                ))}
              </div>
            </>
          )}

          <a href={profile.blogUrl} className="all" {...ext}>See all posts on CyberWithSharon →</a>
        </section>

        <section id="skills" className="section tight">
          <h2 className="label">Skills</h2>
          <div className="skills">
            {skills.map((g) => (
              <div key={g.name}>
                <h3>{g.name}</h3>
                <ul>{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <div>
            <h2>Open to security research<br />&amp; engineering roles.</h2>
            <div className="ctas">
              {profile.resumes.map((r, i) => (
                <a key={r.href} href={r.href} className={i === 0 ? "btn btn-solid" : "btn btn-ghost"} {...ext}>
                  {r.label} <span className="arrow">PDF</span>
                </a>
              ))}
            </div>
          </div>
          <div className="contact-list">
            {contacts.filter((c) => c.href).map((c) => (
              <a key={c.label} href={c.href} {...ext}>
                <span className="k">{c.label}</span>
                <span>{c.value}</span>
              </a>
            ))}
          </div>
        </section>

        <footer className="footer">© {new Date().getFullYear()} {profile.name}</footer>
      </div>
    </div>
  );
}
