import React, { lazy, Suspense, useContext, useState } from "react";
import { Context } from "../state/appContext";
import { ColorBoxComponent } from "./ColorBox.component";
import { useNavigate } from "react-router-dom";
import ImportComponent from "./Import.component";
const CarouselComponent = lazy(() => import("./Carousel.component"));

const DetailsComponent = () => {
  const { store, actions } = useContext(Context);
  const [product] = useState(store.productDetails);
  const navigate = useNavigate();

  const handleAdd = (e) => {
    if (!store.auth) {
      actions.needLogin();
      navigate("/login");
    }
    actions.add_to_cart(e);
  };
  const handleBuy = (e) => {
    if (!store.auth) {
      actions.needLogin();
      navigate("/login");
    }
    actions.buyNow(e);
  };

  return (
    <article className="container my-5">
      <ImportComponent />
      <div className="row border">
        <section className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <Suspense fallback={<h3>loading</h3>}>
            <CarouselComponent obj={product} />
          </Suspense>
          <section className="d-flex flex-column">
            <button
              className="btn text-white bg--primary w-50 align-self-center mt-3 btn__details"
              onClick={(e) => handleBuy(e)}
            >
              <span className="fa-solid fa-cash-register"></span>
              <span>d4w.buy(); </span>
            </button>
            <button
              className="btn text-white bg--primary w-50 align-self-center mt-3 btn__details"
              onClick={(e) => handleAdd(e)}
            >
              <span className="fa-solid fa-cart-plus"></span>
              <span>d4w.add(); </span>
            </button>
          </section>
        </section>
        <section className="col-sm-12 col-md-8 col-lg-8 col-xl-8 mt-5 ">
          <div className="row">
            <div className="container my-3 d-flex flex-column">
              <h3 className="bg--primary text-white fs-2 p-3">
                {`Model({__`}
                {product.title}
                {`__});`}
              </h3>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column">
              <h4 className="my-3 align-self-start">colorSelect();</h4>
              <section className="colors__sizes-wrapper container">
                
                {product.options[0].values.map((el, i) => (
                  <div key={i} className="form-check d-flex ">
                    <input
                      className="form-check-input "
                      type="checkbox"
                      id={el.title}
                      value={el.title}
                    />
                    <label
                      className="form-label d-flex mx-3"
                      htmlFor={`#${el.title}`}
                    >
                      {" "}
                      <ColorBoxComponent
                        color={el.colors[0]}
                      ></ColorBoxComponent>{" "}
                      <span className="mx-3">{el.title}</span>
                    </label>
                  </div>
                ))}
              </section>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column ">
              <h4 className="my-3 align-self-start">sizeSelect();</h4>
              <section className="colors__sizes-wrapper container">
                {product.options[1].values.map((el, i) => (
                  <div key={i} className="form-check d-flex ">
                    <input
                      className="form-check-input "
                      type="checkbox"
                      id={el.title}
                      value={el.title}
                    />
                    <label
                      className="form-label d-flex mx-3"
                      htmlFor={`#${el.title}`}
                    >
                      <span className="mx-3">{el.title}</span>
                    </label>
                  </div>
                ))}
              </section>
            </div>
          </div>
        </section>
        <div
          className=" description__wrapper container overflow-x-auto "
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></div>
      </div>
    </article>
  );
};
export default DetailsComponent;
