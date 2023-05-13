import React, { lazy, Suspense, useContext, useEffect } from "react";
import { Context } from "../state/appContext";

const ProductsComponent = lazy(() =>
  import("../components/Products.component")
);

export const Products = () => {
  const { store } = useContext(Context);
  const products = store.products;

  return (
    <Suspense fallback={<h1>loading products</h1>}>
      <ProductsComponent products={products} />
    </Suspense>
  );
};
