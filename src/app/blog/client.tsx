"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { SearchBar } from "@/components/blog/search-bar";
import { TagFilter } from "@/components/blog/tag-filter";
import { BlogCard } from "@/components/blog/blog-card";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";
import type { BlogPost } from "@/types";

interface Props {
  posts: BlogPost[];
  tags: string[];
}

export function BlogListClient({ posts, tags }: Props) {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchSearch =
        !search ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchTag = !selectedTag || post.tags.includes(selectedTag);
      return matchSearch && matchTag;
    });
  }, [posts, search, selectedTag]);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4">博客</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">财税博客</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            深度解读最新税收政策，分享税务实务操作经验与行业洞察
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1">
              <SearchBar value={search} onChange={setSearch} />
            </div>
          </div>

          <div className="mb-8">
            <TagFilter tags={tags} selected={selectedTag} onSelect={setSelectedTag} />
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <BookOpen className="size-12 mx-auto text-muted-foreground/50 mb-4" />
              <p className="text-lg text-muted-foreground">暂无匹配的文章</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
