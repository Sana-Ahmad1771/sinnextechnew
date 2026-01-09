import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const payload = await request.json();
    console.error("[client-log]", JSON.stringify(payload, null, 2));
    return new NextResponse(null, { status: 204 });
  } catch (err) {
    console.error("[client-log] invalid payload", err);
    return new NextResponse(null, { status: 400 });
  }
}
