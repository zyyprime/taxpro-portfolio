import Link from "next/link";
import { FileText, Shield, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="rose-gradient size-8 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                G
              </div>
              <span className="font-semibold text-lg">葛杨 · 税务</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              澳大利亚CPA，拥有税务机关、5A事务所和上市集团三段完整经历的复合型税务人才。
              专注制造业全税种实务、高新企业税务管理与跨境税务。
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">快捷导航</h3>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">关于我</Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">专业文章</Link>
              <Link href="/tools" className="text-sm text-muted-foreground hover:text-foreground transition-colors">AI 工具</Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">联系我</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">专业领域</h3>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground flex items-center gap-2"><FileText className="size-3" /> 全税种合规</span>
              <span className="text-sm text-muted-foreground flex items-center gap-2"><Shield className="size-3" /> 稽查应对</span>
              <span className="text-sm text-muted-foreground flex items-center gap-2"><Sparkles className="size-3" /> 高新企业税务</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2024 葛杨 · 税务专业工作室</p>
          <p className="text-xs text-muted-foreground">
            合规底线之上，为企业创造税务价值
          </p>
        </div>
      </div>
    </footer>
  );
}
