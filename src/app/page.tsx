import Link from "next/link";
import { TerminalWindow } from "@/components/TerminalWindow";
import { formatTerminalDate } from "@/lib/dates";
import { getAllPosts } from "@/lib/blog";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <TerminalWindow title="tail -f ~/var/log/mdukehall.log">
      <p className="prompt-line">
        <span className="text-phosphor-dim">guest@mdukehall:~$</span> tail -f ./log/*.md
        <span className="cursor">█</span>
      </p>
      <h1 className="section-heading">TRANSMISSION LOG</h1>
      <p className="terminal-subline">
        New posts land here first. Drop a markdown file in{" "}
        <code>content/blog/</code> and push — the build picks it up automatically.
      </p>

      {posts.length === 0 ? (
        <p className="post-excerpt">[no entries in buffer]</p>
      ) : (
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.slug} className="post-item">
              <Link href={`/blog/${post.slug}`} className="post-link">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-meta">
                  <span className="text-phosphor-dim">[</span>
                  {formatTerminalDate(post.date)}
                  <span className="text-phosphor-dim">]</span>
                  <span className="text-phosphor-dim"> :: </span>
                  <span className="text-cyan-glow">{post.slug}.md</span>
                </p>
                <p className="post-excerpt">{post.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </TerminalWindow>
  );
}
