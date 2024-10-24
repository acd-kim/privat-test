import type { HTMLAttributes } from "react";

import "./ProductImage.scss";

type TProductImageProps = {
  src: string;
  alt?: string;
} & HTMLAttributes<HTMLPictureElement>;

export function ProductImage({ src, alt = "", ...props }: TProductImageProps) {
  return (
    <picture className="product-image" {...props}>
      <img className="product-image__img" src={src} alt={alt} />
    </picture>
  );
}
