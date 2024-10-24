import { HTMLAttributes } from "react";
import { NavLink } from "react-router-dom";

import type { TProduct } from "../../../services/products/types";

import { formatterCurrency } from "../../../helpers/formatter";
import "./ProductsListItem.scss";

type TProductsListProps = {
  enable?: boolean;
} & TProduct &
  HTMLAttributes<HTMLLIElement>;

export function ProductsListItem({ enable = false, id, title, price, image, ...props }: TProductsListProps) {
  const LinkContainer = enable ? NavLink : "div";
  const currency = formatterCurrency("en-US", "USD");

  return (
    <li className="products-list-item" {...props}>
      <h2 className="products-list-item__title">
        <LinkContainer className="a_default-color" to={`/${id}`}>
          {title}
        </LinkContainer>
      </h2>
      <p className="products-list-item__price">{currency.format(price)}</p>
      <picture className="products-list-item__image">
        <img src={image} alt={title} width="200" height="200" />
      </picture>
    </li>
  );
}
