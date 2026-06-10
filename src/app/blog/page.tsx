import type { Metadata } from "next";
import { getAllPosts, getAllTags } from "@/lib/blog";
import { BlogListClient } from "./client";

export const metadata: Metadata = {
  title: "财税博客",
  description: "深度解读最新税收政策，分享税务实务操作经验与行业洞察",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return <BlogListClient posts={posts} tags={tags} />;
}
