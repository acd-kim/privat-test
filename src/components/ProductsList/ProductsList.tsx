import { HTMLAttributes, ReactNode } from "react";

import "./ProductsList.scss";

type TProductsListProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLUListElement>;

export function ProductsList({ children, ...props }: TProductsListProps) {
  return (
    <ul className="products-list" {...props}>
      {children}
    </ul>
  );
}
