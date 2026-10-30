# Sharon Jebitok - Portfolio

Personal portfolio covering security research (AI security, web security, SOC/DFIR, smart-contract audits, bug bounty), software engineering, and Web3.

## Built with

- Next.js 16 (App Router, static export) · React 19 · TypeScript
- Plain CSS (`app/globals.css`), Archivo + Azeret Mono via `next/font`
- pnpm
- Claude Code

## Getting started

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # static site written to ./out
```

## Editing content

All text, projects, stats, skills and links are in `content/site.ts`.

- A link with an empty `href` is hidden on the page. Search for `TODO` to find the ones left to fill in.
- The featured audit finding is shown in `pnpm dev` only, until `featuredFinding.ready` is set to `true`.
- The Writing section pulls the latest posts from the blog's RSS feed (`sharonjebitok.com/rss.xml`) at build time, so rebuild to refresh it.

## Project layout

```
app/          layout, page, global styles
components/   Work section (filters + featured finding)
content/      site.ts: all editable content
lib/          RSS feed reader for blog posts
```

## Deploying

`pnpm build` outputs plain static files in `out/`, which can be hosted on Vercel, Netlify (build command `pnpm build`, publish directory `out`) or GitHub Pages.

## Author

- GitHub: [@jebitok-dev](https://github.com/jebitok-dev)
- LinkedIn: [sharon-jebitok](https://www.linkedin.com/in/sharon-jebitok/)
- Blog: [sharonjebitok.com](https://www.sharonjebitok.com)
