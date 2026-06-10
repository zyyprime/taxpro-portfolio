"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface Props {
  tags: string[];
  selected: string | null;
  onSelect: (tag: string | null) => void;
}

export function TagFilter({ tags, selected, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge
        variant={selected === null ? "default" : "outline"}
        className="cursor-pointer"
        onClick={() => onSelect(null)}
      >
        全部
      </Badge>
      {tags.map((tag) => (
        <motion.div
          key={tag}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Badge
            variant={selected === tag ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => onSelect(tag === selected ? null : tag)}
          >
            {tag}
          </Badge>
        </motion.div>
      ))}
    </div>
  );
}
