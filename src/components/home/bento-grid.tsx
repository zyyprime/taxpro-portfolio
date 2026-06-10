"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileText,
  Shield,
  Sparkles,
  Globe,
  Calculator,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "税务咨询服务",
    description: "国际税务筹划、企业并购税务架构设计、跨境交易合规咨询",
    icon: Globe,
    href: "/about",
    className: "md:col-span-2 md:row-span-1",
    gradient: "from-primary/20 via-primary/5 to-transparent",
  },
  {
    title: "专业文章",
    description: "深度解读最新税收政策，分享实务操作经验",
    icon: FileText,
    href: "/blog",
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-secondary/20 via-secondary/5 to-transparent",
  },
  {
    title: "AI 智能工具",
    description: "税务问答、发票识别、年终奖计算，让工作更高效",
    icon: Sparkles,
    href: "/tools",
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-primary/20 via-primary/5 to-transparent",
  },
  {
    title: "合规与筹划",
    description: "企业所得税汇算清缴、增值税合规、转让定价文档准备",
    icon: Shield,
    href: "/about",
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-secondary/20 via-secondary/5 to-transparent",
  },
  {
    title: "财税数据分析",
    description: "利用数据分析技术，为企业提供精准的财税决策支持",
    icon: TrendingUp,
    href: "/blog",
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-primary/20 via-primary/5 to-transparent",
  },
  {
    title: "年终奖计算器",
    description: "一键对比不同计税方式，智能推荐最优方案",
    icon: Calculator,
    href: "/tools/bonus-calculator",
    className: "md:col-span-3 md:row-span-1",
    gradient: "from-secondary/20 via-secondary/5 to-transparent",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function BentoGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">专业服务</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            深耕税务领域多年，为企业提供全方位的财税解决方案
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[200px]"
        >
          {items.map((item) => (
            <motion.div key={item.title} variants={itemAnim}>
              <Link href={item.href} className="block h-full group">
                <div
                  className={cn(
                    "relative h-full rounded-2xl border border-border/50 p-6 overflow-hidden transition-all duration-300",
                    "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
                    "bg-gradient-to-br",
                    item.gradient,
                    item.className
                  )}
                >
                  <div className="absolute top-0 right-0 size-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <item.icon className="size-5 text-primary" />
                      </div>
                      <h3 className="font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground flex-1">{item.description}</p>
                    <div className="flex items-center gap-1 text-xs text-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      了解更多 <ArrowRight className="size-3" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
