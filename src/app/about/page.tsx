import type { Metadata } from "next";
import { AboutContent } from "./content";

export const metadata: Metadata = {
  title: "关于我",
  description: "资深税务顾问，十年从业经验，专注国际税务筹划与企业财税合规",
};

export default function AboutPage() {
  return <AboutContent />;
}
