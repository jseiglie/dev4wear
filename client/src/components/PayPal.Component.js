import React from "react";

export const PayPalComponent = () => {
  const handlePayPal = async () => {
    const resp = await fetch(`${process.env.REACT_APP_API}/create_order`, {
      method: "POST",
    });
    const data = await resp.json();
    console.log(data);
    window.location.href = data.links[1].href;
  };

  return (
    <div className="container">
      <button className="btn btn-paypal" onClick={handlePayPal}>
        <span className="fa-brands fa-paypal"></span> Paypal
      </button>
    </div>
  );
};
