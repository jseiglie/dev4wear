import React, { Suspense, lazy, useContext } from "react";
//// const CarouselComponent = lazy(() => import("./Carousel.component"));
import { useNavigate } from "react-router-dom";
import { Context } from "../state/appContext";

const ProductsComponent = (props) => {
  const { store, actions } = useContext(Context);
  const products = props.products;
  const navigate = useNavigate();

  const handleFavorite = (e) => {
    const id = e.target.parentElement.parentElement.id;
    if (!store.user) {
      navigate("/login");
      return;
    }
    actions.add_removeFavorite(store.user.id, id);
  };

  return (
    <section className="container">
      <article className="row">
        {products &&
          products.data.map((el, i) => (
            <article
              className="col-sm-12 col-md-6 col-lg-4 col-xl-3 my-3"
              key={i}
            >
              <section
                id={el.id}
                className="card"
                onClick={async () => {
                  await actions.productsDetails(`${el.id}`);
                  navigate(`/details/${el.id}`);
                }}
              >
                <section className="card-body p-0">
                  <figure>
                    <img className="img-top img-fluid" src={el.images[0].src} alt={el.title}/>
                    <figcaption className="bg--secondary p-2">({`{${el.title}}`}) </figcaption>
                  </figure>
                  {/* <Suspense fallback={<h1>loading carousel</h1>}>
                    <CarouselComponent className="img-top" obj={el} />
                  </Suspense> */}
                  {/* <span>{el.title}</span> */}
                </section>
                <section className="card-footer products__card__footer text-white bg--primary">
                  <span className="fa-solid fa-cart-shopping products__icon"></span>
                  <span>price: 25.00 </span>
                  <span
                    className="fa-regular fa-heart products__icon"
                    onClick={(e) => handleFavorite(e)}
                  ></span>
                </section>
              </section>
            </article>
          ))}
      </article>
    </section>
  );
};

export default ProductsComponent;
