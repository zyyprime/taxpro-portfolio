<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# TaxPro - 个人展示网站项目

## 技术栈
- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 + Shadcn/ui
- Framer Motion (动画)
- Markdown-based 博客系统 (gray-matter)

## 项目结构
```
src/
├── app/           # 页面路由 (App Router)
│   ├── page.tsx          # 首页
│   ├── about/            # 关于我
│   ├── blog/             # 博客 (列表+详情)
│   ├── tools/            # AI 工具 (税务问答/发票识别/年终奖计算)
│   ├── gallery/          # 相册
│   └── contact/          # 联系
├── components/
│   ├── ui/               # Shadcn UI 组件
│   ├── layout/           # 布局组件 (Header/Footer/ThemeProvider)
│   ├── home/             # 首页组件 (Hero/BentoGrid/FeaturedPosts)
│   ├── blog/             # 博客组件 (Card/TagFilter/SearchBar)
│   ├── tools/            # 工具组件 (ToolCard)
│   └── gallery/          # 相册组件
├── lib/                  # 工具库 (blog/rate-limit/utils)
├── i18n/                 # 国际化配置
└── types/                # TypeScript 类型定义
content/blog/             # Markdown 博客内容
```

## 开发命令
- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run start` - 启动生产服务器
- `npm run lint` - 代码检查

## SEO 关键词
税务咨询、财税干货、国际税务、税务筹划、AI财税工具

## 部署
兼容 Vercel 一键部署。在 Vercel 中导入项目即可自动部署。
