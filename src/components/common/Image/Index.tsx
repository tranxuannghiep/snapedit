import * as React from "react";
import NextImage from "next/image";

export interface Props {
  className?: string;
  width?: number;
  height?: number;
  src: string;
  alt?: string;
}

export function Image({
  className,
  width = 0,
  height = 0,
  src,
  alt = "",
}: Props) {
  return (
    <NextImage
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
    />
  );
}
