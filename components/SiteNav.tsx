"use client";

import { useEffect, useState } from "react";

const NAV: [string, string][] = [
  ["#work", "Work"],
  ["#research", "Research"],
  ["#writing", "Writing"],
  ["#skills", "Skills"],
  ["/cheatsheet/", "Cyber cheatsheet"],
  ["#contact", "Contact"],
];

export default function SiteNav({ brand }: { brand: string }) {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="nav">
      <a href="/" className="brand">{brand}</a>
      <span className="spacer" />

      <div className="nav-links">
        {NAV.map(([href, label]) => (
          <a key={href} href={href} className="item">{label}</a>
        ))}
      </div>

      <button
        className="nav-toggle"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <span /><span /><span />
      </button>

      {open && <div className="nav-backdrop" onClick={() => setOpen(false)} />}

      <aside className={open ? "nav-drawer open" : "nav-drawer"} aria-hidden={!open}>
        <button className="nav-close" aria-label="Close menu" onClick={() => setOpen(false)}>×</button>
        {NAV.map(([href, label]) => (
          <a key={href} href={href} className="item" onClick={() => setOpen(false)}>{label}</a>
        ))}
      </aside>
    </nav>
  );
}
