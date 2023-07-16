import React, { useContext } from "react";
import { PayPalComponent } from "./PayPal.Component";
import { CheckAuthHelper } from "../utils/CheckAuth.helper";
import { Context } from "../../state/appContext";
import { Link } from "react-router-dom";
export const CartComponent = () => {
  const { store, actions } = useContext(Context);
  return (
    <article className="container row d-flex justify-content-between mx-auto my-5 border">
      <CheckAuthHelper />
      {store.cart == null ? (
        <div className="my-5">
          Error: No designs added, check them out{" "}
          <p className="mt-5">
            <Link className="link" to={"/products"}>
              <span className="bg--primary text-white p-2 rounded link">{`d4w.goTo(Products)`}</span>
            </Link>
          </p>
        </div>
      ) : (
        <>
          <section className="col-sm-12 col-md-6 col-lg-6 col-xl-6 my-5">
            <h3 className="bg--primary p-2 text-white fs-3 rounded">
              d4v.getItems();
            </h3>
            {store.cart &&
              store.cart.map((el, i) => (
                <article className="container-fluid border my-3" key={i}>
                  <div className="row ">
                    <figure className=" col-sm-12 col-md-6 col-lg-6 bg--primary d-flex flex-column ">
                      <img
                        className="img-fluid img--sm mx-auto"
                        src={el.images[0].src}
                      />
                      <figcaption className="text-white">{el.title}</figcaption>
                    </figure>
                    <section className="col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex  cart__item__info">
                      <div className="d-flex flex-column  ">
                        <p>Model:{el.title}</p>
                        <p>Size: M </p>
                        <p>Color: Red</p>
                        <p>Price: 25.00 €</p>
                      </div>
                      <div className="d-flex flex-column ">
                        <span
                          className="fa-regular fa-trash-can icon--trash"
                          onClick={(e) => actions.remove_from_cart(el.id)}
                        ></span>
                      </div>
                    </section>
                  </div>
                </article>
              ))}
          </section>

          <section className="col-sm-12 col-md-6 col-lg-6 col-xl-6 my-5 d-flex flex-column align-self-center">
            <h3></h3>
            <p className="mt-3">Ammount of items: {store.cart.length}</p>
            <p className="my-3">Total: {25.0 * store.cart.length}.00€</p>
            <PayPalComponent />
          </section>
        </>
      )}
    </article>
  );
};
