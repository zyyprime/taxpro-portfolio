import type { Metadata } from "next";
import { BonusCalculatorClient } from "./client";

export const metadata: Metadata = {
  title: "年终奖计算器",
  description: "对比不同计税方式，智能推荐最优年终奖计税方案",
};

export default function BonusCalculatorPage() {
  return <BonusCalculatorClient />;
}
