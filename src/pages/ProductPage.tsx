import { memo, Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

import type { TRouterLoaderData } from "../global.types";

import { Loader } from "../components/Loader";
import { Product, ProductDescription, ProductImage, ProductHeading } from "../components/Product";
import { productByIdLoader } from "../router/loaders/productLoader";

function ProductPage() {
  const data = useLoaderData() as TRouterLoaderData<typeof productByIdLoader>;

  if (!data) {
    return <div>No data find</div>;
  }

  return (
    <main className="page-container">
      <Suspense fallback={<Loader />}>
        <Await resolve={data}>
          {(resolveData) => {
            const { title, price, image, description, category, rating } = resolveData;

            return (
              <Product>
                <ProductHeading title={title} price={price} />
                <ProductImage src={image} alt={title} />
                <ProductDescription text={description} category={category} count={rating.count} rate={rating.rate} />
              </Product>
            );
          }}
        </Await>
      </Suspense>
    </main>
  );
}

export default memo(ProductPage);
