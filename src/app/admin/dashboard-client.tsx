"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import { FileText, Images, MessageSquare, ArrowRight } from "lucide-react";

type Stats = {
  posts: number;
  messages: number;
  unreadMessages: number;
  gallery: number;
};

export function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      if (!client || !isSanityConfigured()) {
        setStats({ posts: 0, messages: 0, unreadMessages: 0, gallery: 0 });
        return;
      }
      try {
        const [posts, messages, unread, gallery] = await Promise.all([
          client.fetch(`count(*[_type == "blogPost"])`),
          client.fetch(`count(*[_type == "contactMessage"])`),
          client.fetch(`count(*[_type == "contactMessage" && replied == false])`),
          client.fetch(`count(*[_type == "gallery"])`),
        ]);
        setStats({ posts, messages, unreadMessages: unread, gallery });
      } catch {
        setStats({ posts: 0, messages: 0, unreadMessages: 0, gallery: 0 });
      }
    };
    fetchStats();
  }, []);

  const cards = [
    {
      label: "博客文章",
      value: stats?.posts ?? "-",
      icon: FileText,
      href: "/admin/studio/structure/blogPost",
      color: "from-primary/20 to-primary/5",
    },
    {
      label: "相册图片",
      value: stats?.gallery ?? "-",
      icon: Images,
      href: "/admin/studio/structure/gallery",
      color: "from-secondary/20 to-secondary/5",
    },
    {
      label: "访客留言",
      value: stats?.messages ?? "-",
      icon: MessageSquare,
      href: "/admin/messages",
      color: "from-primary/20 to-secondary/5",
    },
    {
      label: "未回复留言",
      value: stats?.unreadMessages ?? "-",
      icon: MessageSquare,
      href: "/admin/messages",
      color: "from-destructive/10 to-destructive/5",
      highlight: true,
    },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">管理仪表盘</h1>
        <p className="text-muted-foreground text-sm mt-1">TaxPro 网站内容概览</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="rounded-xl border border-border/50 bg-card p-5 hover:border-primary/30 transition-colors group"
          >
            <div className={`size-10 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center mb-3`}>
              <card.icon className={`size-5 ${card.highlight ? "text-destructive" : "text-primary"}`} />
            </div>
            <div className={`text-2xl font-bold mb-0.5 ${card.highlight ? "text-destructive" : ""}`}>
              {card.value}
            </div>
            <div className="text-sm text-muted-foreground flex items-center gap-1">
              {card.label}
              <ArrowRight className="size-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </div>
          </Link>
        ))}
      </div>

      <div className="rounded-xl border border-border/50 bg-card p-6">
        <h2 className="font-semibold mb-4">快速入口</h2>
        <div className="space-y-3">
          {[
            { label: "撰写新文章", href: "/admin/studio/structure/blogPost;create", desc: "发布新的博客文章" },
            { label: "查看留言", href: "/admin/messages", desc: "查看和回复访客留言" },
            { label: "上传图片", href: "/admin/studio/structure/gallery;create", desc: "添加相册图片" },
            { label: "网站设置", href: "/admin/studio/structure/siteSettings", desc: "修改网站标题、SEO 等" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors"
            >
              <div>
                <div className="font-medium text-sm">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
              <ArrowRight className="size-4 text-muted-foreground" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
