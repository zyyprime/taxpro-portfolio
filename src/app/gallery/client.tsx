"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  color: string;
  size: "small" | "medium" | "large";
}

const items: GalleryItem[] = [
  { id: "1", title: "国际税务论坛 2024", category: "会议", color: "from-primary/20 to-secondary/20", size: "large" },
  { id: "2", title: "团队研讨会", category: "活动", color: "from-secondary/20 to-primary/10", size: "medium" },
  { id: "3", title: "年度税务峰会", category: "会议", color: "from-primary/10 to-accent/10", size: "small" },
  { id: "4", title: "企业培训现场", category: "活动", color: "from-accent/10 to-secondary/20", size: "medium" },
  { id: "5", title: "行业交流晚宴", category: "社交", color: "from-secondary/10 to-primary/20", size: "small" },
  { id: "6", title: "财税科技沙龙", category: "活动", color: "from-primary/20 to-accent/10", size: "large" },
  { id: "7", title: "专业知识分享", category: "演讲", color: "from-accent/10 to-primary/15", size: "small" },
  { id: "8", title: "团队建设活动", category: "活动", color: "from-secondary/20 to-accent/10", size: "medium" },
  { id: "9", title: "税务政策研讨会", category: "会议", color: "from-primary/15 to-secondary/10", size: "medium" },
];

const categories = ["全部", "会议", "活动", "社交", "演讲"];

export function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("全部");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const filtered = activeCategory === "全部"
    ? items
    : items.filter((item) => item.category === activeCategory);

  const sizeClass = (size: string) => {
    switch (size) {
      case "large": return "md:col-span-2 md:row-span-2";
      case "medium": return "md:col-span-1 md:row-span-2";
      default: return "md:col-span-1 md:row-span-1";
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4">相册</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">精彩瞬间</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            记录行业会议、团队活动与专业分享的精彩时刻
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={cn("h-64 md:h-auto", sizeClass(item.size))}
              >
                <button
                  onClick={() => setSelected(item)}
                  className="w-full h-full rounded-2xl overflow-hidden group relative"
                >
                  <div
                    className={`w-full h-full bg-gradient-to-br ${item.color} flex items-center justify-center`}
                  >
                    <span className="text-6xl opacity-30">📸</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                    <div className="text-left">
                      <div className="text-white font-semibold">{item.title}</div>
                      <div className="text-white/60 text-sm">{item.category}</div>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-3xl p-0 bg-transparent border-none shadow-none">
          {selected && (
            <div className="relative">
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-12 right-0 text-white/60 hover:text-white"
              >
                <X className="size-6" />
              </button>
              <div
                className={`w-full aspect-video rounded-2xl bg-gradient-to-br ${selected.color} flex items-center justify-center`}
              >
                <span className="text-8xl opacity-40">📸</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent rounded-2xl">
                <h3 className="text-white font-semibold text-lg">{selected.title}</h3>
                <p className="text-white/60 text-sm">{selected.category}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
