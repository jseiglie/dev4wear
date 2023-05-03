import React from "react";

const FooterComponent = () => {
  return (
    <footer class="container-fluid footer--wrapper">
      <section className="row">
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
          <div class="footer__links">
            <p class="text-white">
              export <span class="orange">class</span> wearCode(){" "}
              <span class="orange">{`{`}</span>
            </p>
            <ul>
              <li class="link footer__link">
                <a class="link footer__link" href="#">
                  Home<span class="orange">()</span>;
                </a>
              </li>
              <li class="link footer__link">
                <a class="link footer__link" href="#">
                  Designs<span class="orange">()</span>;
                </a>
              </li>
              <li class="link footer__link">
                <a class="link footer__link" href="#">
                  Products<span class="orange">()</span>;
                </a>
              </li>
              <li class="link footer__link">
                <a class="link footer__link" href="#">
                  Buy<span class="orange">()</span>;
                </a>
              </li>
              <li class="link footer__link">
                <a class="link footer__link" href="#">
                  About<span class="orange">()</span>;
                </a>
              </li>
              <li class="link footer__link">
                <a class="link footer__link" href="#">
                  Contact<span class="orange">()</span>;
                </a>
              </li>
            </ul>
            <br />
            <p>
              <span class="orange">{`}`};</span>
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 d-flex justify-content-center">
          <div class="footer__logo">
            <p class="logo logo--footer">wearCode();</p>
            <p class="text-white"> <a className="footer__link" href="https://www.seiglie.com" target="_blank">Seiglie</a>{" "}<span class="fa-regular fa-registered"></span>{" "}<span class="fa-regular fa-copyright"></span></p>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 footer__col__logo">
          <div class="user footer__user">
            <i class="fa-regular fa-circle-user user__icon"></i>
            <div class="user__register-login--container ">
              <a class="user--register footer__register" href="#">
                wearCode.register(newUser);
              </a>
              <span class="user-separator">
                /*------------------*/
              </span>
              <a class="user--login footer__login" href="#">
                wearcode.login(email, password);
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default FooterComponent;
