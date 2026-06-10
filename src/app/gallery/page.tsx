import type { Metadata } from "next";
import { GalleryClient } from "./client";

export const metadata: Metadata = {
  title: "相册",
  description: "行业会议、团队活动与生活摄影展示",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
