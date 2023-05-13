import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../state/appContext";
const BannerComponent = () => {
  
  const { store, actions } = useContext(Context);
  const navigate = useNavigate()
  return (
    <section className="banner container-fluid d-flex gx-0 d-flex justify-content-between">
      <div className="container-fluid ">
        <div className="row p-0 gx-0 ">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
            <h1 className="container p-0 gx-0 my-3">
              <Link to={"/"} className="banner_logo_link">
                <span className="logo ">dev4Wear();</span>
              </Link>
            </h1>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 p-0 gx-0 ">
            {store.auth ? (
              <section className="d-flex flex-column  align-items-center">
                <div className="d-flex flex-column justify-content-center align-items-center text-center">
                  <Link to={"/profile"} className="user--register">
                    <span className="fa-regular fa-circle-user user__icon"></span>
                    <p>{store.userEmail}</p>
                  </Link>
                  <button
                    className="btn text-dark banner_btn__logout"
                    onClick={async () => {
                      await actions.logout();
                      navigate("/");
                    }}
                  >
                    LogOut();
                  </button>
                </div>
              </section>
            ) : (
              <section className="user my-3 ">
                <span className="fa-regular fa-circle-user user__icon"></span>
                <div className="user__register-login--container">
                  <Link to={"/signup"} className="user--register">
                    dev4Wear.register(newUser);
                  </Link>
                  <span className="user-separator">
                    /*--------------------------*/
                  </span>
                  <Link to={"/login"} className="user--login">
                    dev4Wear.login(email, password);
                  </Link>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerComponent;
