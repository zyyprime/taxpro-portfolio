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
  Building,
  CheckCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experience = [
  {
    year: "2023.07 - 至今",
    title: "税务经理",
    org: "前沿生物药业（南京）股份有限公司",
    highlights: [
      "负责集团10家主体公司全税种申报、税负分析、合同条款审阅",
      "主导各级税务检查与自查，成功化解房产税、企业所得税等争议，涉及税款超500万元",
      "申请增值税留抵退税1,400万元；架构重组节税5,000万元",
      "累计归集研发费用约4亿元，预计可抵减企业所得税约900万元",
    ],
  },
  {
    year: "2019.08 - 2022.04",
    title: "税务和商务咨询部高级顾问",
    org: "致同（北京）税务师事务所上海分所（5A级）",
    highlights: [
      "负责近20家企业全税种申报及汇算清缴，含2家年营收超10亿元的集团企业",
      "主导高新技术企业认定及复审，协助客户享受研发加计扣除及高企税率优惠超500万元",
      "撰写近10份符合OECD标准的转让定价本地文档，含年关联交易额近50亿的龙头企业",
      "主导10+项税务尽职调查，累计识别税务问题60+项",
    ],
  },
  {
    year: "2011.12 - 2016.05",
    title: "宣传咨询科助征员",
    org: "江苏省南通市地方税务局第一税务分局",
    highlights: [
      "负责日常税收政策咨询及解读，参与线上知识库更新（累计更新词条50+）",
      "组织新办纳税人、企业所得税汇算清缴等专题培训10+场，覆盖纳税人近千名",
      "参与处理纳税人异议及税务争议10+起，擅长政策适用分歧的专业研判",
      "轮岗至税务大厅，独立办理全流程涉税事项",
    ],
  },
];

const qualifications = [
  { name: "澳大利亚注册会计师", org: "CPA Australia", icon: Award },
  { name: "会计硕士（高级）", org: "澳大利亚麦考瑞大学", icon: GraduationCap },
  { name: "管理学学士", org: "苏州大学 · 财务管理专业", icon: BookOpen },
];

const expertise = [
  { label: "全税种实务", icon: FileText, desc: "增值税、企业所得税、个税等全税种申报与合规管理" },
  { label: "税务稽查应对", icon: Shield, desc: "检查自查资料准备、疑点解释、政策谈判，成功化解超500万元争议" },
  { label: "高新企业税务", icon: TrendingUp, desc: "高企资质维护、研发费用加计扣除归集，累计4亿元研发费用管理" },
  { label: "跨境税务", icon: Globe, desc: "非贸付汇、转让定价文档（OECD标准）、常设机构风险排查" },
  { label: "税务筹划", icon: Building, desc: "架构重组、留抵退税、许可协议筹划，累计节税超8,000万元" },
  { label: "税务合规鉴证", icon: CheckCircle, desc: "税务尽职调查、健康检查、资产损失鉴证报告出具" },
];

import { FileText } from "lucide-react";

export function AboutContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-0 right-0 size-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 size-96 bg-secondary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge variant="secondary" className="mb-4">关于我</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              三段经历 · 一个<span className="text-gradient">税务专家</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              拥有税务机关、5A税务师事务所和制造业上市集团三段完整经历的复合型税务人才。
              曾在南通市地方税务局第一税务分局从事征管服务4年多，深刻了解税务机关的风险模型、征管逻辑和争议处理方式。
            </p>
            <p className="text-base text-muted-foreground/70 leading-relaxed">
              后在致同税务师事务所上海分所担任税务顾问，积累了大量企业端合规与筹划经验；
              目前在前沿生物药业担任税务经理，负责集团10家主体的全税种税务管理工作。
              持有澳大利亚注册会计师（CPA Australia）资质，熟悉国内税收政策与国际税收规则。
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
                className="relative pl-20 pb-10 last:pb-0"
              >
                <div className="absolute left-6 top-1 size-4 rounded-full border-2 border-primary bg-background" />
                <div className="text-xs text-primary font-medium mb-1">{item.year}</div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <div className="text-sm text-muted-foreground mb-3">{item.org}</div>
                <ul className="space-y-2">
                  {item.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-muted-foreground/80 flex items-start gap-2">
                      <span className="text-primary mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-10"
          >
            教育与资质
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {qualifications.map((q, i) => (
              <motion.div
                key={q.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-xl border border-border/50 bg-card"
              >
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <q.icon className="size-6 text-primary" />
                </div>
                <div className="text-sm font-medium">{q.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{q.org}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
