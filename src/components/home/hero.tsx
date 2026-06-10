"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 size-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 size-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="shrink-0"
          >
            <div className="relative size-48 md:size-56 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-xl shadow-primary/10">
              <Image
                src="/images/profile.jpg"
                alt="葛杨"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>
          </motion.div>

          {/* Text */}
          <div className="text-center md:text-left flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center md:justify-start gap-2 mb-4"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                <Sparkles className="size-3" />
                澳大利亚CPA · 税务专家
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
            >
              <span className="text-gradient">葛杨</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-2"
            >
              拥有税务机关、5A税务师事务所和制造业上市集团
              <span className="text-primary font-medium">三段完整经历</span>的复合型税务人才
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base text-muted-foreground/70 max-w-2xl mb-8"
            >
              澳大利亚注册会计师 · 会计硕士 · 十年专注制造业全税种实务与跨境税务
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            >
              <Link href="/about">
                <Button size="lg" className="group rounded-full">
                  了解我的经历
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/tools">
                <Button variant="outline" size="lg" className="rounded-full">AI 税务工具</Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-xl"
            >
              {[
                { label: "税务从业", value: "13+" },
                { label: "服务企业", value: "30+" },
                { label: "节税金额", value: "8,000万+" },
                { label: "上市公司", value: "集团税务" },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="size-6 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center"
        >
          <div className="size-1.5 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
