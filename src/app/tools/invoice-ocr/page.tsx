import type { Metadata } from "next";
import { InvoiceOCRClient } from "./client";

export const metadata: Metadata = {
  title: "发票智能识别",
  description: "AI发票识别工具，自动提取发票金额、税率等信息",
};

export default function InvoiceOCRPage() {
  return <InvoiceOCRClient />;
}
