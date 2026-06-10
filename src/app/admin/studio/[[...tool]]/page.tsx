"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";
import { isSanityConfigured } from "@/sanity/lib/client";

export default function StudioPage() {
  if (!config || !isSanityConfigured()) {
    return (
      <div className="p-12 text-center">
        <h2 className="text-xl font-bold mb-2">Sanity 尚未配置</h2>
        <p className="text-muted-foreground">
          请在 .env.local 中设置 NEXT_PUBLIC_SANITY_PROJECT_ID
        </p>
      </div>
    );
  }
  return <NextStudio config={config} />;
}
