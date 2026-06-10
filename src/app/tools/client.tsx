"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ToolCard } from "@/components/tools/tool-card";
import type { ToolItem } from "@/types";

const tools: ToolItem[] = [
  {
    id: "tax-qa",
    title: "税务问答机器人",
    description: "基于RAG技术，智能回答您的税务基础问题。从政策解读到实务操作，快速获取专业、准确的税务信息。",
    icon: "bot",
    href: "/tools/tax-qa",
    status: "active",
  },
  {
    id: "invoice-ocr",
    title: "发票智能识别",
    description: "上传发票图片，AI自动识别并提取发票金额、税率、纳税人信息等关键数据，一键导出结构化数据。",
    icon: "fileText",
    href: "/tools/invoice-ocr",
    status: "active",
  },
  {
    id: "bonus-calculator",
    title: "年终奖计算器",
    description: "输入年终奖金额，自动对比不同计税方式的税负差异，智能推荐最优计税方案，帮您合理节税。",
    icon: "calculator",
    href: "/tools/bonus-calculator",
    status: "active",
  },
];

export function ToolsClient() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">AI 工具集</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">AI 小工具</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            智能财税工具，让工作更高效。集成AI技术，提供从税务咨询到发票处理的全流程支持
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tools.map((tool, i) => (
            <ToolCard key={tool.id} tool={tool} index={i} />
          ))}
        </div>

        {/* Info section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <div className="rounded-2xl border border-border/50 bg-card/50 p-8">
            <h3 className="text-lg font-semibold mb-2">数据安全说明</h3>
            <p className="text-sm text-muted-foreground">
              所有上传数据仅用于当前会话处理，不会持久化存储。
              建议不要上传包含敏感个人信息的文件。
              如需处理真实税务问题，请咨询专业税务顾问。
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
