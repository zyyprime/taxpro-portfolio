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
    title: "全税种合规管理",
    description: "增值税、企业所得税、个税等全税种申报与合规，累计服务30+企业，零滞纳金零罚款",
    icon: FileText,
    href: "/about",
    className: "md:col-span-2 md:row-span-1",
    gradient: "from-primary/20 via-primary/5 to-transparent",
  },
  {
    title: "税务稽查应对",
    description: "成功化解房产税、企业所得税等争议，涉及税款超500万元，妥善维护税企关系",
    icon: Shield,
    href: "/about",
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-secondary/20 via-secondary/5 to-transparent",
  },
  {
    title: "AI 税务工具",
    description: "税务问答、发票识别、年终奖计算，让税务工作更高效智能",
    icon: Sparkles,
    href: "/tools",
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-accent/20 via-accent/5 to-transparent",
  },
  {
    title: "高新企业税务管理",
    description: "累计归集研发费用约4亿元，通过加计扣除预计可抵减企业所得税约900万元",
    icon: TrendingUp,
    href: "/about",
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-primary/20 via-primary/5 to-transparent",
  },
  {
    title: "跨境税务",
    description: "非贸付汇、转让定价文档（符合OECD标准）、常设机构风险排查，保障海外业务合规",
    icon: Globe,
    href: "/about",
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-secondary/20 via-secondary/5 to-transparent",
  },
  {
    title: "年终奖计算器",
    description: "一键对比单独计税与并入综合所得，智能推荐最优方案",
    icon: Calculator,
    href: "/tools/bonus-calculator",
    className: "md:col-span-3 md:row-span-1",
    gradient: "from-accent/20 via-accent/5 to-transparent",
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
            融合税务机关、事务所与企业的三维视角，为企业提供全链条税务解决方案
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
