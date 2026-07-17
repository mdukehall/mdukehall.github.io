import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownContent } from "@/components/MarkdownContent";
import { TerminalWindow } from "@/components/TerminalWindow";
import { formatTerminalDate } from "@/lib/dates";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "404" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <TerminalWindow title={`less ~/log/${post.slug}.md`}>
      <Link href="/" className="post-back">
        <span className="text-phosphor-dim">←</span> cd ~/log
      </Link>
      <p className="post-meta">
        <span className="text-phosphor-dim">[</span>
        {formatTerminalDate(post.date)}
        <span className="text-phosphor-dim">]</span>
        <span className="text-phosphor-dim"> :: </span>
        <span className="text-cyan-glow">{post.slug}.md</span>
      </p>
      <MarkdownContent content={post.content} />
    </TerminalWindow>
  );
}
