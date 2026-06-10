import type { Metadata } from "next";
import { ToolsClient } from "./client";

export const metadata: Metadata = {
  title: "AI 小工具",
  description: "智能财税工具集 - 税务问答、发票识别、年终奖计算",
};

export default function ToolsPage() {
  return <ToolsClient />;
}
