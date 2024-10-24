import type { HTMLAttributes } from "react";

import "./ProductHeading.scss";
import { formatterCurrency } from "../../../helpers/formatter.ts";

type TProductHeadingProps = {
  title: string;
  price: number;
} & HTMLAttributes<HTMLDivElement>;

export function ProductHeading({ title, price, ...props }: TProductHeadingProps) {
  const currency = formatterCurrency("en-US", "USD");

  return (
    <div className="product-heading" {...props}>
      <h1 className="product-heading__title">{title}</h1>
      <h3 className="product-heading__price">{currency.format(price)}</h3>
    </div>
  );
}
