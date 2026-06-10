import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "网站设置",
  type: "document",
  fields: [
    defineField({
      name: "siteTitle",
      title: "网站标题",
      type: "string",
    }),
    defineField({
      name: "siteDescription",
      title: "网站描述",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "seoKeywords",
      title: "SEO 关键词",
      type: "string",
      description: "用英文逗号分隔",
    }),
    defineField({
      name: "socialLinks",
      title: "社交链接",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", title: "平台", type: "string" },
            { name: "url", title: "链接", type: "url" },
          ],
        },
      ],
    }),
  ],
});
