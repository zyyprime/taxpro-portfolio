import type { Metadata } from "next";
import { ContactClient } from "./client";

export const metadata: Metadata = {
  title: "联系我",
  description: "如有税务咨询或合作需求，欢迎随时联系",
};

export default function ContactPage() {
  return <ContactClient />;
}
