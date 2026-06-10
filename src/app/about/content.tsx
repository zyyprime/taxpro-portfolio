"use client";

import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Globe,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const experience = [
  { year: "2022 - 至今", title: "资深税务顾问", org: "某国际税务咨询公司", desc: "专注于跨境交易税务筹划、转让定价、国际税收协定咨询" },
  { year: "2018 - 2022", title: "税务经理", org: "某四大会计师事务所", desc: "负责企业并购税务尽职调查、重组税务架构设计" },
  { year: "2014 - 2018", title: "税务专员", org: "某国内税务师事务所", desc: "从事企业所得税汇算清缴、增值税合规、税务稽查应对" },
];

const certifications = [
  { name: "注册会计师 (CPA)", icon: Award },
  { name: "注册税务师 (CTA)", icon: Award },
  { name: "国际注册会计师 (ACCA)", icon: Globe },
  { name: "高级税务筹划师", icon: Shield },
];

const expertise = [
  { label: "国际税收筹划", icon: Globe, desc: "跨境投资架构设计、税收协定适用、境外税收抵免" },
  { label: "企业并购税务", icon: TrendingUp, desc: "并购税务尽调、重组税务架构、资产收购税务优化" },
  { label: "转让定价", icon: BookOpen, desc: "转让定价文档准备、同期资料、预约定价安排" },
  { label: "个税合规与筹划", icon: Users, desc: "高管个税筹划、股权激励税务、外籍人员个税" },
  { label: "税务稽查应对", icon: Shield, desc: "稽查风险识别、应对策略制定、争议协商解决" },
  { label: "税务科技", icon: GraduationCap, desc: "AI辅助税务分析、自动化合规工具、数据驱动决策" },
];

export function AboutContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-0 right-0 size-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge variant="secondary" className="mb-4">关于我</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              十年专注 <span className="text-gradient">税务领域</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              拥有超过十年的税务从业经验，先后服务于国内知名税务师事务所和国际四大会计师事务所。
              擅长国际税务筹划、企业并购重组税务设计及转让定价等领域。
              致力于将前沿科技与传统税务专业相结合，为企业提供高效、合规的财税解决方案。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-10"
          >
            专业领域
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {expertise.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="h-full rounded-xl border border-border/50 bg-card p-5 hover:border-primary/30 transition-colors">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <item.icon className="size-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-10"
          >
            从业经历
          </motion.h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />
            {experience.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-20 pb-8 last:pb-0"
              >
                <div className="absolute left-6 top-1 size-4 rounded-full border-2 border-primary bg-background" />
                <div className="text-xs text-primary font-medium mb-1">{item.year}</div>
                <h3 className="font-semibold">{item.title}</h3>
                <div className="text-sm text-muted-foreground mb-1">{item.org}</div>
                <p className="text-sm text-muted-foreground/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-10"
          >
            专业资质
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-xl border border-border/50 bg-card"
              >
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <cert.icon className="size-6 text-primary" />
                </div>
                <div className="text-sm font-medium">{cert.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
