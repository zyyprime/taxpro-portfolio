"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Bot, Send, User, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const sampleQuestions = [
  "增值税专用发票和普通发票有什么区别？",
  "小规模纳税人的税收优惠有哪些？",
  "个人所得税专项附加扣除包括哪些项目？",
];

const initialBotMessage = `您好！我是 TaxPro AI 助手。我可以回答您关于税务方面的问题，例如：

- 税收政策解读
- 发票管理问题
- 纳税申报指导
- 税收优惠政策

请告诉我您想了解的税务问题，我会尽力为您解答。`;

export function TaxQAClient() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: initialBotMessage },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setLoading(true);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const responses: Record<string, string> = {
        "增值税": `关于增值税的问题，我来为您解答：

**增值税专用发票与普通发票的主要区别：**

1. **抵扣功能**：增值税专用发票可以用于进项税额抵扣，而普通发票一般不能抵扣（农产品收购发票等特殊情形除外）。

2. **使用主体**：一般纳税人可以使用专票和普票；小规模纳税人通常只能开具普票（部分行业可自开专票）。

3. **联次不同**：专票有三联（记账联、抵扣联、发票联）；普票通常只有两联（记账联、发票联）。

4. **信息要求**：专票需要填写完整的购销双方信息、商品分类编码等；普票信息要求相对简单。

如需更详细的咨询，建议联系专业税务顾问。`,
        "个税": `关于个人所得税的问题，我来为您解答：

**个人所得税专项附加扣除项目包括：**

1. **子女教育**：每个子女每月2000元
2. **继续教育**：每月400元或当年3600元
3. **大病医疗**：每年80000元限额内据实扣除
4. **住房贷款利息**：每月1000元
5. **住房租金**：每月800-1500元（按城市）
6. **赡养老人**：每月2000-3000元
7. **3岁以下婴幼儿照护**：每个婴幼儿每月2000元

以上扣除标准以最新政策为准，如有变动请以税务机关公布的政策为准。`,
      };

      let response = "感谢您的提问。这是一个模拟回答示例。在生产环境中，这里将集成AI模型进行智能回答。";

      for (const [keyword, answer] of Object.entries(responses)) {
        if (userMsg.includes(keyword)) {
          response = answer;
          break;
        }
      }

      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setLoading(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">税务问答机器人</h1>
            <p className="text-muted-foreground">基于AI技术，快速解答您的税务问题</p>
          </div>

          {/* Chat interface */}
          <div className="rounded-2xl border border-border/50 bg-card overflow-hidden">
            {/* Messages */}
            <div className="h-[500px] overflow-y-auto p-6 space-y-4">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`size-8 rounded-full flex items-center justify-center shrink-0 ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {msg.role === "user" ? (
                      <User className="size-4" />
                    ) : (
                      <Bot className="size-4" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {loading && (
                <div className="flex gap-3">
                  <div className="size-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Bot className="size-4 text-secondary-foreground" />
                  </div>
                  <div className="bg-muted rounded-2xl px-4 py-3">
                    <RefreshCw className="size-4 animate-spin" />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Sample questions */}
            <div className="px-6 pb-2">
              <div className="flex flex-wrap gap-2">
                {sampleQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => setInput(q)}
                    className="text-xs px-3 py-1.5 rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border/50">
              <div className="flex gap-2">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="输入您的税务问题..."
                  className="min-h-[44px] max-h-[120px] resize-none"
                  rows={1}
                />
                <Button
                  onClick={handleSend}
                  disabled={!input.trim() || loading}
                  className="shrink-0"
                >
                  <Send className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                当前为演示模式，生产环境将集成AI API。回答仅供参考，具体税务问题请咨询专业顾问。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
