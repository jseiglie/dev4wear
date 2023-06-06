import React, { useContext, useEffect } from "react";
import { Context } from "../state/appContext";
import { Image } from "cloudinary-react";
import { useNavigate } from "react-router-dom";

export const DesignsComponent = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    actions.cloudinaryImages();
  }, []);

  const goToDetails = (id) => {
    // const aux = id.split("/")
    // console.log(id)
    navigate(`/design_details/${id}`);
  };

  return (
    <article className="container">
      <section className="row">
        {store.cloudinaryImages &&
          store.cloudinaryImages.map((el, i) => (
            <section
              key={i}
              className="col-sm-12 col-md-6 col-lg-4 col-xl-3 my-3 design__wrapper"
              onClick={(e) => goToDetails(el)}
            >
              <Image
                key={i}
                cloudName={process.env.REACT_APP_CLOUDNAME}
                publicId={el}
                width="300"
                crop="scale"
              />
            </section>
          ))}
      </section>
    </article>
  );
};
