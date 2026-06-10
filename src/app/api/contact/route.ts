import { NextResponse } from "next/server";
import { writeClient, isSanityConfigured } from "@/sanity/lib/client";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const { allowed } = rateLimit(`contact-${ip}`, 5, 60000);
    if (!allowed) {
      return NextResponse.json(
        { error: "请求过于频繁，请稍后再试" },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "请填写所有必填字段" },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "邮箱格式不正确" },
        { status: 400 }
      );
    }

    if (isSanityConfigured() && writeClient) {
      await writeClient.create({
        _type: "contactMessage",
        name,
        email,
        message,
        replied: false,
      });
    }

    // Even if Sanity isn't configured, accept the submission
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "发送失败，请稍后重试" },
      { status: 500 }
    );
  }
}
