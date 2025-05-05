// app/api/rmbg/route.ts
import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const file = formData.get("input_image") as unknown as any;
  const imageBuffer = await file!.arrayBuffer();

  const authHeader = req.headers.get("authorization") as string;
  const userAgent = req.headers.get("user-agent") as string;

  const response = await fetch("https://be-prod-1.snapedit.app/api/rmbg/v1/", {
    method: "POST",
    headers: {
      Authorization: authHeader,
      "User-Agent": userAgent,
    },
    body: formData,
  });

  const data = await response.json();

  const maskBase64 = data.output;
  const maskBuffer = Buffer.from(maskBase64, "base64");

  const transparentImageBuffer = await sharp(Buffer.from(imageBuffer))
    .ensureAlpha() // Đảm bảo ảnh có kênh alpha
    .composite([
      {
        input: maskBuffer, // Mask ảnh
        blend: "dest-in", // Kết hợp ảnh với mask
      },
    ])
    .png() // Đảm bảo ảnh xuất ra dưới dạng PNG
    .toBuffer();
  const transparentImageBase64 = transparentImageBuffer.toString("base64");
  return NextResponse.json(transparentImageBase64);
}
