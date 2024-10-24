import type { HTMLAttributes, PropsWithChildren } from "react";

import "./Product.scss";

type TProductProps = HTMLAttributes<HTMLDivElement>;

export function Product({ children, ...props }: PropsWithChildren<TProductProps>) {
  return (
    <article className="product" {...props}>
      {children}
    </article>
  );
}
