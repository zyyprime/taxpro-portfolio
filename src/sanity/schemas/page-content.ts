import { defineType, defineField } from "sanity";

export default defineType({
  name: "pageContent",
  title: "页面内容",
  type: "document",
  fields: [
    defineField({
      name: "pageId",
      title: "页面标识",
      type: "string",
      options: {
        list: [
          { title: "首页", value: "home" },
          { title: "关于我", value: "about" },
          { title: "工具", value: "tools" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "页面标题",
      type: "string",
    }),
    defineField({
      name: "content",
      title: "内容",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "pageId",
    },
  },
});
