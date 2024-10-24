import type { HTMLAttributes } from "react";

import { Button } from "../../Button";
import "./ProductDescription.scss";

type TProductDescriptionProps = {
  text: string;
  category: string;
  count: number;
  rate: number;
} & HTMLAttributes<HTMLDivElement>;

export function ProductDescription({ text, category, count, rate, ...props }: TProductDescriptionProps) {
  return (
    <div className="product-description" {...props}>
      <p className="product-description__text" dangerouslySetInnerHTML={{ __html: text }} />

      <Button type="button" fullWidth>
        Add to cart
      </Button>

      <dl className="product-description-list">
        <dt className="product-description-list__prop">Category:</dt>
        <dd className="product-description-list__value">{category}</dd>

        <dt className="product-description-list__prop">Count:</dt>
        <dd className="product-description-list__value">{count}</dd>

        <dt className="product-description-list__prop">Rate:</dt>
        <dd className="product-description-list__value">{rate}</dd>
      </dl>

      <p className="product-description__category"></p>
    </div>
  );
}
