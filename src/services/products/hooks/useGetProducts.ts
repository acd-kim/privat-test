import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { getFilteredProductsSelector, getProductsStatusSelector } from "../redux/productsSelectors";
import { getProducts } from "../redux/productsThunk";

export function useGetProducts() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(getFilteredProductsSelector);
  const status = useAppSelector(getProductsStatusSelector);

  // load products
  useEffect(() => {
    // const promise = dispatch(getProducts());
    dispatch(getProducts());

    return () => {
      // todo: enable on prod (cause of failed request with strict mode)
      // promise.abort();
    };
  }, [dispatch]);

  // pagination
  const PER_PAGE = 5;
  const [searchParams] = useSearchParams();
  const pageFromSearch = searchParams.get("page");

  const [currentPage, setCurrentPage] = useState(pageFromSearch ? +pageFromSearch : 1);
  const pageCount = Math.ceil(products.length / PER_PAGE);

  const startIndex = (+currentPage - 1) * PER_PAGE;
  const range = [startIndex, startIndex + PER_PAGE];

  useEffect(() => {
    setCurrentPage(pageFromSearch ? +pageFromSearch : 1);
  }, [pageFromSearch]);

  // get products by range
  const slicedProducts = useMemo(() => products.slice(...range), [range]);

  return {
    products: slicedProducts,
    status,
    currentPage,
    pageCount,
  };
}
