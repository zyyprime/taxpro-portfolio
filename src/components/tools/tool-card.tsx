"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Bot, Calculator, FileText } from "lucide-react";
import type { ToolItem } from "@/types";

const iconMap: Record<string, React.ReactNode> = {
  bot: <Bot className="size-7" />,
  calculator: <Calculator className="size-7" />,
  fileText: <FileText className="size-7" />,
};

interface Props {
  tool: ToolItem;
  index: number;
}

export function ToolCard({ tool, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={tool.href} className="block h-full group">
        <div
          className="relative h-full rounded-2xl border border-border/50 p-8 overflow-hidden
                    bg-gradient-to-br from-white/5 via-white/5 to-transparent
                    backdrop-blur-xl
                    hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5
                    transition-all duration-500"
        >
          {/* Glass reflection effect */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="relative z-10">
            <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 text-primary">
              {iconMap[tool.icon] || <Bot className="size-7" />}
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {tool.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {tool.description}
            </p>

            {tool.status === "coming-soon" ? (
              <span className="inline-flex items-center text-xs text-muted-foreground border border-border/50 rounded-full px-3 py-1">
                即将推出
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                立即使用 <ArrowRight className="size-4" />
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
