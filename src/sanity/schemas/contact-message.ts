import { defineType, defineField } from "sanity";

export default defineType({
  name: "contactMessage",
  title: "留言",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "姓名",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "email",
      title: "邮箱",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "message",
      title: "留言内容",
      type: "text",
      readOnly: true,
    }),
    defineField({
      name: "replied",
      title: "已回复",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "replyContent",
      title: "回复内容",
      type: "text",
      rows: 5,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "email",
    },
  },
  orderings: [
    {
      title: "最新优先",
      name: "createdAtDesc",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],
});
