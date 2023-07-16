import React, { useContext } from "react";
import { Context } from "../../state/appContext";
import { CheckAuthHelper } from "../utils/CheckAuth.helper";

export const HomeProfileComponent = () => {
  const { store } = useContext(Context);

  return (
    <section className="container my-3">
      <CheckAuthHelper />
      <h2 className="bg--primary text-white p-3">
        dev4Wear.greet(user);
        <p className="mt-3">
          // Welcome,{" "}
          {store.user &&
            store.countries &&
            `${
              store.user ? store.user.firstName : ""
            }  `}
        </p>
      </h2>
      <div className="row my-3">
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
          Lastest orders
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
          Lastest favorites
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
          Lastest codes
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
          Something else here
        </div>
      </div>
    </section>
  );
};
