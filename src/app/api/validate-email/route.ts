import { NextRequest, NextResponse } from "next/server";

const TOOLBOX_URL = process.env.TOOLBOX_API_URL || "http://localhost:3100";
const TOOLBOX_KEY = process.env.TOOLBOX_API_KEY || "test-key-123";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json({ success: false, error: "email is required" }, { status: 400 });
    }

    const res = await fetch(`${TOOLBOX_URL}/v1/validate-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOOLBOX_KEY}`,
      },
      body: JSON.stringify({ email: email.trim() }),
      signal: AbortSignal.timeout(15000),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json({ success: false, error: "Validation service unavailable" }, { status: 502 });
  }
}
