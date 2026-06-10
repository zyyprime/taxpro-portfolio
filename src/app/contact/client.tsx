"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export function ContactClient() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("发送失败");
      setSent(true);
      toast.success("留言已发送，感谢您的联系！");
    } catch {
      toast.error("发送失败，请稍后重试");
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="size-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="size-10 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold mb-2">感谢您的留言！</h2>
          <p className="text-muted-foreground mb-6">
            我已收到您的信息，会尽快回复您。
          </p>
          <Button onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}>
            发送新留言
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4">联系</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">联系我</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            如有税务咨询或合作需求，欢迎随时联系。期待与您交流
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-4">
            {[
              { icon: Mail, label: "邮箱", value: "geyang@taxpro.com" },
              { icon: MapPin, label: "所在地", value: "南京市" },
            ].map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="rounded-xl border border-border/50 bg-card p-5"
              >
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <item.icon className="size-5 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground mb-0.5">{item.label}</div>
                <div className="font-medium">{item.value}</div>
              </motion.div>
            ))}
          </div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="md:col-span-2 rounded-2xl border border-border/50 bg-card p-6 space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">姓名</label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="您的姓名"
                  required
                  className="h-12"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">邮箱</label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                  className="h-12"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">留言内容</label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="请描述您的问题或合作意向..."
                required
                className="min-h-[160px] resize-none"
              />
            </div>

            <Button type="submit" disabled={sending} className="w-full h-12">
              {sending ? (
                <>发送中...</>
              ) : (
                <>
                  <Send className="size-4 mr-2" />
                  发送留言
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
