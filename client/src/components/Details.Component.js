import React, { lazy, Suspense, useContext, useState } from "react";
import { Context } from "../state/appContext";
const CarouselComponent = lazy(() => import("./Carousel.component"));

const DetailsComponent = props => {
  const { store, actions } = useContext(Context);
  const [product] = useState(store.productDetails);
  return (
    <article className="container">
      <div className="row border">
        <section className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <Suspense fallback={<>loading</>}>
            <CarouselComponent obj={product} />
          </Suspense>
        </section>
        <section className="col-sm-12 col-md-6 col-lg-6 col-xl-6"></section>
        {product && <span>{product.title}</span>}
      </div>
    </article>
  );
};
export default DetailsComponent;
