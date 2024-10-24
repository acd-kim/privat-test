import { createSelector } from "@reduxjs/toolkit";

import type { TRootState } from "../../../store/store";

export const getProductsSelector = (store: TRootState) => store.products.items;

export const getProductsStatusSelector = (store: TRootState) => store.products.status;

export const getProductsTermSelector = (store: TRootState) => store.products.term;

export const getFilteredProductsSelector = createSelector(
  [getProductsSelector, getProductsTermSelector],
  (products, term) => {
    if (!term) {
      return products;
    }

    return products.filter((product) => {
      return product.title.toLowerCase().includes(term);
    });
  },
);
