import Link from "next/link";
import { FileText, Shield, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="gold-gradient size-8 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                T
              </div>
              <span className="font-semibold text-lg">TaxPro</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              用专业解读税法，用科技赋能财税。提供税务咨询、政策解读与智能财税工具。
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">快捷导航</h3>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">关于我</Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">财税博客</Link>
              <Link href="/tools" className="text-sm text-muted-foreground hover:text-foreground transition-colors">AI 工具</Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">联系我</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">特色服务</h3>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground flex items-center gap-2"><FileText className="size-3" /> 税务咨询</span>
              <span className="text-sm text-muted-foreground flex items-center gap-2"><Shield className="size-3" /> 合规筹划</span>
              <span className="text-sm text-muted-foreground flex items-center gap-2"><Sparkles className="size-3" /> AI 工具</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2024 财税专业工作室 · 专业 诚信 创新</p>
          <p className="text-xs text-muted-foreground">
            用科技赋能财税未来
          </p>
        </div>
      </div>
    </footer>
  );
}
