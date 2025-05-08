// app/api/rmbg/route.ts
import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const imageFile = formData.get("file") as File;
  const buffer = Buffer.from(await imageFile.arrayBuffer());
  const x = parseInt(req.headers.get("x") || "0");
  const y = parseInt(req.headers.get("y") || "0");
  const width = parseInt(req.headers.get("width") || "0");
  const height = parseInt(req.headers.get("height") || "0");

  const image = sharp(buffer);
  const metadata = await image.metadata();
  const imageWidth = metadata.width || 0;
  const imageHeight = metadata.height || 0;

  const safeX = Math.max(0, x);
  const safeY = Math.max(0, y);
  const safeWidth = Math.min(width, imageWidth - safeX);
  const safeHeight = Math.min(height, imageHeight - safeY);

  const croppedBuffer = await image
    .extract({
      left: safeX,
      top: safeY,
      width: Math.abs(safeWidth),
      height: Math.abs(safeHeight),
    })
    .resize(200) // hoặc không resize tùy ý
    .toBuffer();

  const base64 = croppedBuffer.toString("base64");

  return NextResponse.json(`data:image/png;base64,${base64}`);
}
