import { ImageLayer, mergeImageLayersAndGetBase64 } from "@/libs/merge";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const count = Number(formData.get("count") as unknown as any);
  const width = Number(formData.get("width") as unknown as any);
  const height = Number(formData.get("height") as unknown as any);

  const layers: ImageLayer[] = [];

  for (let i = 0; i < count; i++) {
    const file = formData.get("image" + i) as unknown as any;
    const layerString = formData.get("layer" + i) as unknown as any;

    const layer = {
      ...JSON.parse(layerString),
      buffer: Buffer.from(await file!.arrayBuffer()),
    } as ImageLayer;

    layers.push(layer);
  }

  const base64 = await mergeImageLayersAndGetBase64(width, height, layers);

  return NextResponse.json(base64);
}
