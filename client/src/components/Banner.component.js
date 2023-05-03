import React from "react";

const BannerComponent = () => {
  return (
    <section className="banner container-fluid d-flex gx-0 d-flex justify-content-between">
      <div className="container-fluid ">
        <div className="row p-0 gx-0 " >
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
            <h1 className="container p-0 gx-0 my-3">
              <span className="logo ">wearCode();</span>
            </h1>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 p-0 gx-0 ">
            <section className="user my-3 ">
              <span className="fa-regular fa-circle-user user__icon"></span>
              <div className="user__register-login--container">
                <a className="user--register" href="#">
                  wearCode.register(newUser);
                </a>
                <span className="user-separator">
                  /*--------------------------*/
                </span>
                <a className="user--login" href="#">
                  wearcode.login(email, password);
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerComponent;
