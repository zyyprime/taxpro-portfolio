"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function AdminLogin() {
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) return;
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        toast.error("密码错误");
        return;
      }

      const data = await res.json();
      localStorage.setItem("admin_token", data.token);
      router.push("/admin");
    } catch {
      toast.error("登录失败");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-sm mx-auto px-4">
        <div className="rounded-2xl border border-border/50 bg-card p-8">
          <div className="text-center mb-6">
            <div className="rose-gradient size-12 rounded-xl flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
              T
            </div>
            <h1 className="text-xl font-bold">管理员登录</h1>
            <p className="text-sm text-muted-foreground mt-1">TaxPro 后台管理</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                type={showPw ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="输入管理员密码"
                className="pl-10 pr-10 h-12"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPw(!showPw)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPw ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>

            <Button type="submit" className="w-full h-12" disabled={loading}>
              {loading ? "验证中..." : "登录"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
