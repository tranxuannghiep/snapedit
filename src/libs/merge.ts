import sharp from "sharp";

export interface ImageLayer {
  buffer: Buffer; // Ảnh nhỏ
  x: number; // Tọa độ x trên ảnh gốc
  y: number; // Tọa độ y trên ảnh gốc
  width: number; // Resize width
  height: number; // Resize height
}

export async function mergeImageLayersAndGetBase64(
  width: number, // width ảnh gốc
  height: number, // height ảnh gốc
  layers: ImageLayer[]
) {
  // Resize từng layer theo kích thước và tạo composite input
  const compositeInputs = await Promise.all(
    layers.map(async (layer) => {
      const resized = await sharp(layer.buffer)
        .resize(layer.width, layer.height)
        .toBuffer();

      return {
        input: resized,
        top: layer.y,
        left: layer.x,
      };
    })
  );

  // Tạo ảnh nền trong suốt
  const finalBuffer = await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }, // trong suốt
    },
  })
    .composite(compositeInputs)
    .png()
    .toBuffer();

  const base64 = finalBuffer.toString("base64");
  const base64Image = `data:image/png;base64,${base64}`;
  return base64Image;
}
