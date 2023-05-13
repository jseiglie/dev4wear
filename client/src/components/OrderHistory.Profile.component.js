import React from "react";

export const OrderHistoryProfileComponent = () => {
  return (
    <section className="container-fluid oh_wrapper">
      <h2>orderHistory();</h2>
      <div className="table-responsive oh__table">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Order No.</th>
              <th scope="col">Item(s)</th>
              <th scope="col">price</th>
              <th scope="col">payed</th>
              <th scope="col">date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">5487qrdfaq6we21aa</th>
              <td>Item1</td>
              <td>25.00</td>
              <td>visa</td>
              <td>24/10/22</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
