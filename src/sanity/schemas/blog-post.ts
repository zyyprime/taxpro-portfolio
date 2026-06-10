import { defineType, defineField } from "sanity";

export default defineType({
  name: "blogPost",
  title: "博客文章",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "文章标题",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL 标识",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "author",
      title: "作者",
      type: "string",
      initialValue: "TaxPro",
    }),
    defineField({
      name: "publishedAt",
      title: "发布日期",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "封面图片",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "excerpt",
      title: "摘要",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "tags",
      title: "标签",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "body",
      title: "正文内容",
      type: "blockContent",
    }),
    defineField({
      name: "readingTime",
      title: "阅读时间（分钟）",
      type: "number",
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "publishedAt",
      media: "coverImage",
    },
  },
});
