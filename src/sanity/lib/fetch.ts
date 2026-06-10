import { client, isSanityConfigured } from "./client";
import { getAllPosts as getLocalPosts, getPostBySlug as getLocalPost } from "@/lib/blog";
import type { BlogPost } from "@/types";
import {
  blogPostsQuery,
  blogPostQuery,
  blogTagsQuery,
  galleryQuery,
} from "./queries";

function mapSanityPost(post: any): BlogPost | null {
  if (!post) return null;
  const isSanityBlock = Array.isArray(post.body) && post.body.length > 0 && post.body[0]?._type === "block";
  return {
    slug: post.slug?.current || "",
    title: post.title || "",
    date: post.publishedAt ? post.publishedAt.split("T")[0] : "",
    excerpt: post.excerpt || "",
    content: isSanityBlock ? "" : (typeof post.body === "string" ? post.body : ""),
    body: isSanityBlock ? post.body : undefined,
    tags: post.tags || [],
    coverImage: post.coverImage || "",
    author: post.author || "葛杨",
    readingTime: post.readingTime || 1,
  };
}

export async function fetchAllPosts(): Promise<BlogPost[]> {
  if (!isSanityConfigured() || !client) return getLocalPosts();
  try {
    const posts = await client.fetch(blogPostsQuery);
    return posts.map(mapSanityPost).filter(Boolean) as BlogPost[];
  } catch {
    return getLocalPosts();
  }
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!isSanityConfigured() || !client) return getLocalPost(slug);
  try {
    const post = await client.fetch(blogPostQuery, { slug });
    return mapSanityPost(post);
  } catch {
    return getLocalPost(slug);
  }
}

export async function fetchAllTags(): Promise<string[]> {
  if (!isSanityConfigured() || !client) {
    const { getAllTags } = await import("@/lib/blog");
    return getAllTags();
  }
  try {
    const tags = await client.fetch(blogTagsQuery);
    return [...new Set<string>(tags.filter(Boolean))].sort();
  } catch {
    const { getAllTags } = await import("@/lib/blog");
    return getAllTags();
  }
}

export async function fetchGallery() {
  if (!isSanityConfigured() || !client) return [];
  try {
    return await client.fetch(galleryQuery);
  } catch {
    return [];
  }
}
