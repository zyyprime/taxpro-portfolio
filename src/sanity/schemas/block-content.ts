import { defineType, defineArrayMember } from "sanity";

export default defineType({
  name: "blockContent",
  title: "正文内容",
  type: "array",
  of: [
    defineArrayMember({
      title: "块",
      type: "block",
      styles: [
        { title: "正文", value: "normal" },
        { title: "标题 2", value: "h2" },
        { title: "标题 3", value: "h3" },
        { title: "标题 4", value: "h4" },
        { title: "引用", value: "blockquote" },
      ],
      lists: [
        { title: "无序列表", value: "bullet" },
        { title: "有序列表", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "加粗", value: "strong" },
          { title: "斜体", value: "em" },
          { title: "代码", value: "code" },
        ],
        annotations: [
          {
            title: "链接",
            name: "link",
            type: "object",
            fields: [
              { name: "href", title: "URL", type: "url" },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "alt", title: "替代文字", type: "string" },
        { name: "caption", title: "图注", type: "string" },
      ],
    }),
  ],
});
