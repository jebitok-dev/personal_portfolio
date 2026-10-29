export type Post = {
  title: string;
  excerpt: string;
  href: string;
  date: string;
};

function pick(item: string, tag: string): string {
  const m = item.match(new RegExp(`<${tag}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${tag}>`));
  return m ? m[1].trim() : "";
}

function decode(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

// Fetches the latest posts from the blog's RSS feed at build time.
// Returns [] if the feed can't be reached, so the build never fails on it.
export async function getPosts(feedUrl: string, limit = 4): Promise<Post[]> {
  try {
    const res = await fetch(feedUrl, { signal: AbortSignal.timeout(10_000) });
    if (!res.ok) return [];
    const xml = await res.text();
    const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];
    return items.slice(0, limit).map((item) => {
      const pub = new Date(pick(item, "pubDate"));
      return {
        title: decode(pick(item, "title")),
        excerpt: decode(pick(item, "description")),
        href: pick(item, "link"),
        date: isNaN(pub.getTime())
          ? ""
          : pub.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
      };
    });
  } catch {
    return [];
  }
}
