"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  Images,
  MessageSquare,
  Settings,
  ExternalLink,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ADMIN_TOKEN_KEY = "admin_token";

const navItems = [
  { href: "/admin", label: "仪表盘", icon: LayoutDashboard },
  { href: "/admin/studio", label: "内容管理", icon: FileText },
  { href: "/admin/messages", label: "留言管理", icon: MessageSquare },
  { href: "/admin/studio/structure/gallery", label: "相册管理", icon: Images },
  { href: "/admin/studio/structure/siteSettings", label: "网站设置", icon: Settings },
];

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem(ADMIN_TOKEN_KEY);
    if (token) {
      setAuthed(true);
    } else if (pathname !== "/admin/login") {
      router.replace("/admin/login");
      return;
    }
    setChecking(false);
  }, [pathname, router]);

  // Login page gets its own layout (no sidebar)
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="size-6 rounded-full border-2 border-primary border-t-transparent animate-spin" />
      </div>
    );
  }

  if (!authed) return null;

  const handleLogout = () => {
    localStorage.removeItem(ADMIN_TOKEN_KEY);
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-60 border-r border-border/40 bg-card shrink-0 hidden md:flex md:flex-col">
        <div className="p-4 border-b border-border/40">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="gold-gradient size-8 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              T
            </div>
            <span className="font-semibold">管理后台</span>
          </Link>
        </div>
        <nav className="p-3 space-y-1 flex-1">
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
        <div className="p-3 border-t border-border/40">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className="w-full justify-start text-muted-foreground"
          >
            <LogOut className="size-4 mr-2" />
            退出登录
          </Button>
        </div>
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
          <button onClick={handleLogout} className="px-2 py-1.5 text-xs text-muted-foreground">
            <LogOut className="size-3" />
          </button>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 overflow-auto">
        <div className="md:pt-0 pt-14">{children}</div>
      </main>
    </div>
  );
}
