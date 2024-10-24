import { ChangeEvent, memo, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Loader } from "../components/Loader";
import { Pagination } from "../components/Pagination";
import { ProductsList, ProductsListItem } from "../components/ProductsList";
import { Search } from "../components/Search";
import { ERequestStatus } from "../global.types";
import { useUserContext } from "../services/auth/context/useUserContext";
import { useGetProducts } from "../services/products/hooks/useGetProducts";
import { setProductsTermAction } from "../services/products/redux/productsSlice";
import { useAppDispatch } from "../store/hooks";

function MainPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { contextUserData } = useUserContext();
  const { products, status, currentPage, pageCount } = useGetProducts();
  const isLoading = status === ERequestStatus.LOADING;

  const submitSearch = useCallback((term: string) => {
    dispatch(setProductsTermAction(term));
    navigate(`/?page=${1}`);
  }, []);

  const changePage = useCallback((_event: ChangeEvent<unknown>, page: number) => {
    navigate(`/?page=${page}`);
  }, []);

  useEffect(() => {
    if (status === ERequestStatus.FAILED) {
      toast.error("Error during loading products", { position: "top-center" });
    }
  }, [status]);

  function renderContent() {
    if (isLoading) {
      return <Loader />;
    }

    if (!products.length) {
      return <p>No products are found</p>;
    }

    return (
      <>
        <ProductsList>
          {products.map(({ id, ...props }) => (
            <ProductsListItem id={id} key={id} enable={!!contextUserData?.id} {...props} />
          ))}
        </ProductsList>
        <Pagination page={currentPage} count={pageCount} onChange={changePage} />
      </>
    );
  }

  return (
    <main className="page-container">
      <Search onSubmit={submitSearch} />
      {renderContent()}
    </main>
  );
}

export default memo(MainPage);
