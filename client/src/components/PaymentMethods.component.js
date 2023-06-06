import React, { useState } from "react";

export const PaymentMethodsComponent = () => {
  const [cardName] = useState("Pepe Mandinga la Torre");
  const [cardNumber] = useState("2426 5485 6598 3265");
  const [cardAlias] = useState("visa");
  const [cardExpDate] = useState("12/28");
  const [cardCVV] = useState("456");
  return (
    <section className="container">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${cardAlias}`}
              aria-expanded="true"
              aria-controls={`${cardAlias}`}
            >
              {`${cardAlias}`}
            </button>
          </h2>
          <div
            id={`${cardAlias}`}
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="pm__card__wrapper"></div>
              <div className="pm__card__details d-flex justiyf-content-between">
                <div className="p-3 text-left">
                  <p>name: {cardName}</p>
                  <p>card_number: {cardNumber}</p>
                </div>
                <div className="p-3 text-left">
                  <p>exp_date: {cardExpDate}</p>
                  <p>cvv: {cardCVV}</p>
                </div>
                <div className="p-3">
                  <button className="btn bg-danger">Delete();</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pm__item_wrapper"></div>
    </section>
  );
};
