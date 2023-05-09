import React, { useState } from "react";

export const FavoritesProfileComponent = () => {
  const [favorites] = useState([
    { item: "item1", design: "design", price: "25.00" },
  ]);
  return (
    <section className="container">
      {favorites.map((el) => (
        <div className="card">
          <div className="img-top">
            <figure>
              <img src={el.design} alt={el.item} className="img-fluid" />
              <figcaption>{el.item}</figcaption>
            </figure>
            <div className="card-body">
              <p>{el.item}</p>
              <p>{el.price}</p>
            </div>
            <div className="card-footer">
              <button id={el.id} className="btn">
                buy();
              </button>
              <button className="btn">toCart();</button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
