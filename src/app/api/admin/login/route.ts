import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || "taxpro-admin-session";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") || "unknown";

  const { allowed } = rateLimit(`admin-login-${ip}`, 5, 60000);
  if (!allowed) {
    return NextResponse.json({ error: "尝试次数过多" }, { status: 429 });
  }

  try {
    const { password } = await request.json();

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: "密码错误" }, { status: 401 });
    }

    return NextResponse.json({ success: true, token: ADMIN_TOKEN });
  } catch {
    return NextResponse.json({ error: "请求无效" }, { status: 400 });
  }
}
