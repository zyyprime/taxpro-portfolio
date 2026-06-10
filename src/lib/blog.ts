import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "@/types";

const contentDir = path.join(process.cwd(), "content", "blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(contentDir)) return [];
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));
  const posts = files.map((file) => parsePost(file));
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const file = path.join(contentDir, `${slug}.md`);
    if (!fs.existsSync(file)) return null;
    return parsePost(`${slug}.md`);
  } catch {
    return null;
  }
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set<string>();
  posts.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter((p) => p.tags.includes(tag));
}

function parsePost(filename: string): BlogPost {
  const filePath = path.join(contentDir, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 300));
  return {
    slug: filename.replace(/\.md$/, ""),
    title: data.title || "",
    date: data.date ? new Date(data.date).toISOString().split("T")[0] : "",
    excerpt: data.excerpt || "",
    content,
    tags: data.tags || [],
    coverImage: data.coverImage || "",
    author: data.author || "",
    readingTime,
  };
}
