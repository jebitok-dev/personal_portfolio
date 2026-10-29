import Work, { TrackButton } from "@/components/Work";
import { about, badges, contacts, profile, skills, stats } from "@/content/site";
import { getPosts } from "@/lib/posts";

const NAV = [
  ["#work", "Work"],
  ["#research", "Research"],
  ["#writing", "Writing"],
  ["#skills", "Skills"],
  ["/resources/", "Resources"],
  ["#contact", "Contact"],
];

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default async function Home() {
  const posts = await getPosts(profile.blogRss);

  return (
    <div className="page">
      <div className="wrap">
        <nav className="nav">
          <span className="brand">{profile.handle}</span>
          <span className="spacer" />
          {NAV.map(([href, label]) => (
            <a key={href} href={href} className="item">{label}</a>
          ))}
        </nav>

        <header className="hero">
          <div className="eyebrow"><span className="dot" /><span>{profile.eyebrow}</span></div>
          <h1>{profile.name}</h1>
          <p className="tagline">
            {profile.tagline[0]} <span className="sep">|</span> {profile.tagline[1]}
          </p>
          <div className="ctas">
            <TrackButton track="Security" className="btn btn-primary">
              Web3 &amp; Security work <span className="arrow">→</span>
            </TrackButton>
            <TrackButton track="Full-stack" className="btn btn-ghost">
              Full-stack work <span className="arrow">→</span>
            </TrackButton>
          </div>
        </header>

        <section className="section about">
          <h2 className="label">About</h2>
          <p>{about.text}</p>
        </section>

        <Work />

        <section id="research" className="section">
          <h2 className="label">Security research</h2>
          <div className="stats">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <div className="k">{s.label}</div>
                <div className={s.accent ? "v accent" : "v"}>{s.value}</div>
                <div className="n">{s.note}</div>
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
          {posts.length > 0 && (
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
          )}
          <a href={profile.blogUrl} className="all" {...ext}>See all posts on CyberWithSharon →</a>
        </section>

        <section id="skills" className="section">
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
            <a href={profile.resumeUrl} className="btn btn-solid" {...ext}>
              Resume <span className="arrow">PDF</span>
            </a>
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
