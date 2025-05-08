// app/api/rmbg/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const authHeader = req.headers.get("authorization") as string;
  const userAgent = req.headers.get("user-agent") as string;

  const response = await fetch(
    "https://be-prod-1.snapedit.app/api/object_removal/v7/auto_suggest",
    {
      method: "POST",
      headers: {
        Authorization: authHeader,
        "User-Agent": userAgent,
      },
      body: formData,
    }
  );

  const data = await response.json();

  return NextResponse.json(data);
}
