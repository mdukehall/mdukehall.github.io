import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

export type Post = PostMeta & {
  content: string;
};

function parsePost(filename: string): Post {
  const slug = filename.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(postsDirectory, filename), "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    excerpt: String(data.excerpt ?? ""),
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const post = parsePost(filename);
      return {
        slug: post.slug,
        title: post.title,
        date: post.date,
        excerpt: post.excerpt,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
  if (!fs.existsSync(postsDirectory)) {
    return null;
  }

  const filename = `${slug}.md`;
  const filePath = path.join(postsDirectory, filename);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return parsePost(filename);
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}
