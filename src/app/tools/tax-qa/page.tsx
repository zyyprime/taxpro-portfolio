import type { Metadata } from "next";
import { TaxQAClient } from "./client";

export const metadata: Metadata = {
  title: "税务问答机器人",
  description: "基于AI的税务问答工具，快速解答您的税务相关问题",
};

export default function TaxQAPage() {
  return <TaxQAClient />;
}
