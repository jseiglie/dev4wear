import React from "react";

const CarouselComponent = (props) => {
  //console.log("Carousel", props.obj);
  return (
    <div id="carousel" className="carousel carousel-dark slide">
      <div className="carousel-inner">
        {props.obj.images.map((el, i) => (
          <div key={i} className={`carousel-item ${i === 1 ? "active" : ""}`}>
            <figure>
              <img
                src={el.src}
                className="d-block w-100"
                alt={props.obj.title}
              />
              <figcaption className="carousel__item__caption">
                {props.obj.title}
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselComponent;
