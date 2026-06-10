"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  Images,
  MessageSquare,
  Settings,
  ExternalLink,
} from "lucide-react";

const navItems = [
  { href: "/admin", label: "仪表盘", icon: LayoutDashboard },
  { href: "/admin/studio", label: "内容管理", icon: FileText },
  { href: "/admin/messages", label: "留言管理", icon: MessageSquare },
  { href: "/admin/studio/structure/gallery", label: "相册管理", icon: Images },
  { href: "/admin/studio/structure/siteSettings", label: "网站设置", icon: Settings },
];

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-60 border-r border-border/40 bg-card shrink-0 hidden md:block">
        <div className="p-4 border-b border-border/40">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="gold-gradient size-8 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              T
            </div>
            <span className="font-semibold">管理后台</span>
          </Link>
        </div>
        <nav className="p-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className="size-4" />
              {item.label}
            </Link>
          ))}
          <div className="pt-3 mt-3 border-t border-border/40">
            <Link
              href="/"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <ExternalLink className="size-4" />
              查看网站
            </Link>
          </div>
        </nav>
      </aside>

      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl p-3 flex items-center gap-3">
        <Link href="/admin" className="flex items-center gap-2">
          <div className="gold-gradient size-7 rounded-lg flex items-center justify-center text-white font-bold text-xs">
            T
          </div>
          <span className="font-semibold text-sm">管理后台</span>
        </Link>
        <div className="flex gap-1 ml-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-2 py-1.5 rounded-md text-xs font-medium",
                pathname === item.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 overflow-auto">
        <div className="md:pt-0 pt-14">{children}</div>
      </main>
    </div>
  );
}
