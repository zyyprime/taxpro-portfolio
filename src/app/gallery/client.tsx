"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Loader2, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { fetchGallery } from "@/sanity/lib/fetch-gallery";
import { isSanityConfigured } from "@/sanity/lib/client";

interface GalleryItem {
  _id: string;
  title: string;
  image?: string;
  category: string;
  description?: string;
}

const fallbackItems: GalleryItem[] = [
  { _id: "1", title: "国际税务论坛 2024", category: "会议" },
  { _id: "2", title: "企业税务培训", category: "活动" },
  { _id: "3", title: "行业交流", category: "社交" },
];

const categories = ["全部", "会议", "活动", "社交", "演讲"];

export function GalleryClient() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("全部");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  useEffect(() => {
    fetchGallery().then((data) => {
      if (data && data.length > 0) {
        setItems(data);
      } else {
        setItems(fallbackItems);
      }
    }).catch(() => {
      setItems(fallbackItems);
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  const filtered = activeCategory === "全部"
    ? items
    : items.filter((item) => item.category === activeCategory);

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

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <Loader2 className="size-6 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item._id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => setSelected(item)}
                    className="w-full h-full rounded-2xl overflow-hidden group relative aspect-[4/3]"
                  >
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 flex items-center justify-center">
                        <ImageIcon className="size-12 text-muted-foreground/30" />
                      </div>
                    )}
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
        )}
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-3xl p-0 bg-transparent border-none shadow-none">
          {selected && (
            <div className="relative">
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-12 right-0 text-white/60 hover:text-white z-10"
              >
                <X className="size-6" />
              </button>
              {selected.image ? (
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full rounded-2xl"
                />
              ) : (
                <div className="w-full aspect-video rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 flex items-center justify-center">
                  <ImageIcon className="size-16 text-muted-foreground/30" />
                </div>
              )}
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
