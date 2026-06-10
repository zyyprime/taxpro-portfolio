"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calculator, Info, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

function calcTax(income: number): number {
  if (income <= 36000) return income * 0.03;
  if (income <= 144000) return income * 0.1 - 2520;
  if (income <= 300000) return income * 0.2 - 16920;
  if (income <= 420000) return income * 0.25 - 31920;
  if (income <= 660000) return income * 0.3 - 52920;
  if (income <= 960000) return income * 0.35 - 85920;
  return income * 0.45 - 181920;
}

function calcYearEndBonusTax(bonus: number): number {
  const monthly = bonus / 12;
  let rate = 0.03;
  let quickDeduction = 0;
  if (monthly > 80000) { rate = 0.45; quickDeduction = 15160; }
  else if (monthly > 55000) { rate = 0.35; quickDeduction = 7160; }
  else if (monthly > 35000) { rate = 0.30; quickDeduction = 4410; }
  else if (monthly > 25000) { rate = 0.25; quickDeduction = 2660; }
  else if (monthly > 12000) { rate = 0.20; quickDeduction = 1410; }
  else if (monthly > 3000) { rate = 0.10; quickDeduction = 210; }
  return bonus * rate - quickDeduction;
}

export function BonusCalculatorClient() {
  const [bonus, setBonus] = useState<string>("");
  const [annualSalary, setAnnualSalary] = useState<string>("200000");
  const [result, setResult] = useState<{
    separate: number;
    combined: number;
    saving: number;
    recommended: string;
  } | null>(null);

  const calculate = () => {
    const b = parseFloat(bonus);
    const s = parseFloat(annualSalary);
    if (isNaN(b) || b <= 0 || isNaN(s) || s <= 0) return;

    const separateTax = calcYearEndBonusTax(b);
    const combinedTax = calcTax(s + b) - calcTax(s);

    setResult({
      separate: Math.max(0, separateTax),
      combined: Math.max(0, combinedTax),
      saving: Math.abs(separateTax - combinedTax),
      recommended: separateTax <= combinedTax ? "单独计税" : "并入综合所得",
    });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="size-4" />
            返回工具列表
          </Link>

          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">AI 工具</Badge>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">年终奖计算器</h1>
            <p className="text-muted-foreground">对比不同计税方式，智能推荐最优方案</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Input */}
            <div className="rounded-2xl border border-border/50 bg-card p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Calculator className="size-4" />
                输入信息
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">年终奖金额（元）</label>
                  <Input
                    type="number"
                    value={bonus}
                    onChange={(e) => setBonus(e.target.value)}
                    placeholder="例如：50000"
                    className="h-12 text-lg"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">全年应纳税所得额（元）</label>
                  <Input
                    type="number"
                    value={annualSalary}
                    onChange={(e) => setAnnualSalary(e.target.value)}
                    placeholder="例如：200000"
                    className="h-12 text-lg"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    扣除起征点、三险一金及专项附加扣除后的应纳税所得额
                  </p>
                </div>
                <Button onClick={calculate} className="w-full h-12 text-base" disabled={!bonus}>
                  开始计算
                </Button>
              </div>
            </div>

            {/* Results */}
            <div className="rounded-2xl border border-border/50 bg-card p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <TrendingDown className="size-4" />
                计算结果
              </h3>

              {result ? (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-center">
                    <div className="text-sm text-muted-foreground mb-1">推荐方案</div>
                    <div className="text-2xl font-bold text-primary">{result.recommended}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-muted/50 p-4 text-center">
                      <div className="text-sm text-muted-foreground mb-1">单独计税</div>
                      <div className="text-xl font-bold text-foreground">
                        ¥{result.separate.toLocaleString()}
                      </div>
                    </div>
                    <div className="rounded-xl bg-muted/50 p-4 text-center">
                      <div className="text-sm text-muted-foreground mb-1">并入综合所得</div>
                      <div className="text-xl font-bold text-foreground">
                        ¥{result.combined.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-center">
                    <div className="text-sm text-green-600 dark:text-green-400 mb-1">
                      {result.recommended === "单独计税" ? "单独计税更优" : "并入综合所得更优"}
                    </div>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      可节税 ¥{result.saving.toLocaleString()}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-64 flex items-center justify-center">
                  <div className="text-center">
                    <Calculator className="size-10 text-muted-foreground/30 mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">
                      输入年终奖和年薪信息后开始计算
                    </p>
                    <p className="text-xs text-muted-foreground/50 mt-1">
                      计算结果仅供参考
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
                <Info className="size-3 mt-0.5 shrink-0" />
                <p>本计算器结果仅供参考。实际税额以税务机关核定为准。如有疑问请咨询专业税务顾问。</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
