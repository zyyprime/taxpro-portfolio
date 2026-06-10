"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@/sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

const config = projectId
  ? defineConfig({
      basePath: "/admin/studio",
      projectId,
      dataset,
      title: "TaxPro 后台管理",
      plugins: [
        structureTool({ title: "内容管理" }),
        visionTool({ title: "查询工具" }),
      ],
      schema: { types: schemaTypes },
    })
  : null;

export default config;
