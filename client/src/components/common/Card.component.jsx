import React from "react";
import PropTypes from "prop-types";

export const CardComponent = (props) => {
  return (
    <article className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
      <article className="card">
        <section className="card-body">
          <figure className="card img-top">
            <img className="img-fluid" src={props.src} alt={props.alt} />
            <figcaption className="bg--primary p-2 text-white">
              {props.caption}
            </figcaption>
          </figure>
        </section>
        <p>{props.text1}</p>
        <p>{props.text2}</p>
        <button className="btn btn--primary orange" onClick={e=>props.event}>d4w.contact();</button>
      </article>
    </article>
  );
};

CardComponent.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  caption: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  event: PropTypes.func,
};
