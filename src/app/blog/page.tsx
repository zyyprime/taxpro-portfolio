import type { Metadata } from "next";
import { fetchAllPosts, fetchAllTags } from "@/sanity/lib/fetch";
import { BlogListClient } from "./client";

export const metadata: Metadata = {
  title: "财税博客",
  description: "深度解读最新税收政策，分享税务实务操作经验与行业洞察",
};

export default async function BlogPage() {
  const [posts, tags] = await Promise.all([
    fetchAllPosts(),
    fetchAllTags(),
  ]);

  return <BlogListClient posts={posts} tags={tags} />;
}
