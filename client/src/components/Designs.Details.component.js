import React, { useContext, useEffect } from "react";
import { Image } from "cloudinary-react";
import { Context } from "../state/appContext";
import { useNavigate } from "react-router-dom";
export const DesignsDetailsComponent = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.productsDetails(store.itemId);
  }, []);

  const navigate = useNavigate();

  return (
    <article className="container border my-5 row mx-auto">
      <section className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
        <Image
          className="border p-3"
          cloudName={process.env.REACT_APP_CLOUDNAME}
          publicId={store.itemDetails && store.itemDetails.cloudinary_id}
          width="300"
          crop="scale"
        />
      </section>

      <section className="col-sm-12 col-md-12 col-lg-6 col-xl-6 align-self-center">
        <h3 className="my-3">
          Model: {store.itemDetails && store.itemDetails.name}
        </h3>
        <p className="my-3">
          Technology: {store.itemDetails && store.itemDetails.category}
        </p>
        <p className="my-1">
          Price: {store.itemDetails && store.itemDetails.price}.00
        </p>
        <p className="text-muted text--comments">Prices are for T-Shirts</p>
      </section>

      <button
        className="btn btn--primary my-3 w-25 mx-auto"
        onClick={async () => {
          await actions.productsDetails(`${store.itemId}`);
          navigate(`/details/${store.itemId}`);
        }}
      >
        d4w.display();
      </button>

      <p className="my-5">
        Description: It is a long established fact that a reader will be
        distracted by the readable content of a page when looking at its layout.
        The point of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using 'Content here, content
        here', making it look like readable English. Many desktop publishing
        packages and web page editors now use Lorem Ipsum as their default model
        text, and a search for 'lorem ipsum' will uncover many web sites still
        in their infancy. Various versions have evolved over the years,
        sometimes by accident, sometimes on purpose (injected humour and the
        like).
      </p>
    </article>
  );
};
