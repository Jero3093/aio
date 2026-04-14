import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function DELETE() {
  const cookieStore = await cookies();

  cookieStore.delete("session");

  return NextResponse.json({
    message: "Sesión cerrada correctamente",
    value: true,
  });
}
