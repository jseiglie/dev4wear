import React from "react";
import cssImg from "./../imgs/css.webp";
import tshirtexample from "./../imgs/dev4wear-example.webp";
const HookComponent = () => {
  return (
    <article className="container-fluid hook__wrapper">
      <h2 className="hook__how__text hook__how__subtitle text-center m-0 container-fluid">
        <span className="logo_font font--200">dev4Wear();</span>
      </h2>
      <p className="hook__how__text text-center mb-5">style out of code</p>
      <div className="row w-75 border--orange p-4">
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-between hook__how__wrapper">
          <article>
            <img
              className="hook__how__img img-fluid"
              src={cssImg}
              alt="CSS powered design"
            />

            <p className="hook__how__text">
              We as developer breathe and transpire code, we dream with black
              screens and white pointers... The code follows us like some singer
              would say on
            </p>
            <blockquote className="hook__how__quote">
              every step you take
            </blockquote>
            <p className="hook__how__text">
              So, why not take the code out off the screen and wear it?
            </p>
            <p className="hook__how__text text-center">
              That's what we do at dev4Wear();
            </p>
          </article>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 hook__how__wrapper">
          <img
            className="t-shirt__example img-fluid p-3"
            src={tshirtexample}
            alt="T-shirts with CSS desings"
          />
        </div>
      </div>
    </article>
  );
};

export default HookComponent;
