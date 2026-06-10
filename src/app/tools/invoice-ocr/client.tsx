"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Upload, FileText, X, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface InvoiceData {
  invoiceNumber: string;
  date: string;
  amount: string;
  taxAmount: string;
  totalAmount: string;
  sellerName: string;
  buyerName: string;
  taxRate: string;
}

export function InvoiceOCRClient() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<InvoiceData | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;

    setFile(f);
    setResult(null);

    const reader = new FileReader();
    reader.onload = (ev) => setPreview(ev.target?.result as string);
    reader.readAsDataURL(f);
  };

  const handleAnalyze = () => {
    if (!file) return;
    setLoading(true);

    // Simulate OCR processing
    setTimeout(() => {
      setResult({
        invoiceNumber: `INV-${String(Math.random()).slice(2, 10)}`,
        date: "2024-03-15",
        amount: "9,174.31",
        taxAmount: "825.69",
        totalAmount: "10,000.00",
        sellerName: "××科技有限公司",
        buyerName: "××集团有限公司",
        taxRate: "9%",
      });
      setLoading(false);
    }, 1500);
  };

  const reset = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="size-4" />
            返回工具列表
          </Link>

          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">AI 工具</Badge>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">发票智能识别</h1>
            <p className="text-muted-foreground">上传发票图片，自动识别提取关键信息</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Upload area */}
            <div className="rounded-2xl border border-border/50 bg-card p-6">
              <h3 className="font-semibold mb-4">上传发票</h3>

              {!preview ? (
                <label className="flex flex-col items-center justify-center h-64 rounded-xl border-2 border-dashed border-border/50 cursor-pointer hover:border-primary/30 transition-colors">
                  <Upload className="size-10 text-muted-foreground mb-3" />
                  <p className="text-sm font-medium mb-1">点击上传发票图片</p>
                  <p className="text-xs text-muted-foreground">支持 JPG、PNG、PDF 格式</p>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              ) : (
                <div className="relative">
                  <img
                    src={preview}
                    alt="发票预览"
                    className="w-full h-64 object-contain rounded-xl bg-muted"
                  />
                  <button
                    onClick={reset}
                    className="absolute top-2 right-2 size-8 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors"
                  >
                    <X className="size-4" />
                  </button>
                </div>
              )}

              {file && !result && (
                <Button
                  onClick={handleAnalyze}
                  disabled={loading}
                  className="w-full mt-4"
                >
                  {loading ? (
                    <>
                      <Loader2 className="size-4 mr-2 animate-spin" />
                      识别中...
                    </>
                  ) : (
                    <>
                      <FileText className="size-4 mr-2" />
                      开始识别
                    </>
                  )}
                </Button>
              )}
            </div>

            {/* Result area */}
            <div className="rounded-2xl border border-border/50 bg-card p-6">
              <h3 className="font-semibold mb-4">识别结果</h3>

              {result ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-green-500 mb-4">
                    <CheckCircle className="size-4" />
                    识别完成
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {[
                      { label: "发票号码", value: result.invoiceNumber },
                      { label: "开票日期", value: result.date },
                      { label: "金额", value: `¥${result.amount}` },
                      { label: "税额", value: `¥${result.taxAmount}` },
                      { label: "价税合计", value: `¥${result.totalAmount}` },
                      { label: "税率", value: result.taxRate },
                      { label: "销售方", value: result.sellerName },
                      { label: "购买方", value: result.buyerName },
                    ].map((item) => (
                      <div key={item.label} className="rounded-lg bg-muted/50 p-2.5">
                        <div className="text-xs text-muted-foreground mb-0.5">{item.label}</div>
                        <div className="font-medium text-sm">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="h-64 flex flex-col items-center justify-center text-center">
                  <FileText className="size-10 text-muted-foreground/30 mb-3" />
                  <p className="text-sm text-muted-foreground">
                    {file ? "点击" : "上传发票"}开始识别
                  </p>
                  <p className="text-xs text-muted-foreground/50 mt-1">
                    识别结果将在此处展示
                  </p>
                </div>
              )}
            </div>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-6">
            当前为演示模式，模拟OCR识别效果。生产环境将集成真实的OCR API。
          </p>
        </motion.div>
      </div>
    </div>
  );
}
