import type { Metadata } from "next";
import { AboutContent } from "./content";

export const metadata: Metadata = {
  title: "关于葛杨",
  description: "澳大利亚注册会计师，13年税务从业经验，横跨税务机关、5A事务所和上市集团。专注制造业全税种实务、高新企业税务管理与跨境税务筹划。",
};

export default function AboutPage() {
  return <AboutContent />;
}
