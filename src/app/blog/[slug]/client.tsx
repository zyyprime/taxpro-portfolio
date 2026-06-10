"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { BlogPost } from "@/types";

interface Props {
  post: BlogPost;
}

export function BlogDetailClient({ post }: Props) {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="size-4" />
            返回博客列表
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                <Tag className="size-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{post.title}</h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1">
              <Calendar className="size-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="size-4" />
              {post.readingTime} 分钟阅读
            </span>
          </div>

          <Separator className="mb-8" />

          <article className="prose prose-lg dark:prose-invert max-w-none">
            {post.content.split("\n").map((line, i) => {
              if (line.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-bold mt-8 mb-4">
                    {line.slice(3)}
                  </h2>
                );
              }
              if (line.startsWith("### ")) {
                return (
                  <h3 key={i} className="text-xl font-semibold mt-6 mb-3">
                    {line.slice(4)}
                  </h3>
                );
              }
              if (line.trim() === "") {
                return <div key={i} className="h-4" />;
              }
              return (
                <p key={i} className="leading-relaxed text-muted-foreground mb-4">
                  {line}
                </p>
              );
            })}
          </article>
        </motion.div>
      </div>
    </div>
  );
}
