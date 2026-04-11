import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request) {
  const sessionData = await request.json();
  const cookiesStore = await cookies();

  cookiesStore.set("session", JSON.stringify(sessionData));
  return NextResponse.json({ message: "Session data saved" });
}
