export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  body?: unknown[];
  tags: string[];
  coverImage?: string;
  author: string;
  readingTime: number;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: string;
  title?: string;
}

export interface ToolItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  status: "active" | "coming-soon";
}

export type Locale = "zh" | "en";

export interface Translations {
  nav: {
    home: string;
    about: string;
    blog: string;
    tools: string;
    gallery: string;
    contact: string;
  };
  hero: {
    slogan: string;
    subtitle: string;
    cta: string;
  };
  blog: {
    title: string;
    description: string;
    search: string;
    filter: string;
    readMore: string;
    noPosts: string;
  };
  tools: {
    title: string;
    description: string;
  };
  contact: {
    title: string;
    description: string;
    name: string;
    email: string;
    message: string;
    send: string;
    success: string;
  };
  footer: {
    copyright: string;
    tagline: string;
  };
}
