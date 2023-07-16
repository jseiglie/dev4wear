import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../state/appContext";

const FooterComponent = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  return (
    <footer className="container-fluid footer--wrapper">
      <section className="row">
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
          <div className="footer__links">
            <p className="text-white">
              export <span className="orange">class</span> dev4Wear(){" "}
              <span className="orange">{`{`}</span>
            </p>
            <ul>
              <li className="link footer__link">
                <Link className="link footer__link" to={"/"}>
                  Home<span className="orange">()</span>;
                </Link>
              </li>
              <li className="link footer__link">
                <Link className="link footer__link" to={"/designs"}>
                  Designs<span className="orange">()</span>;
                </Link>
              </li>
              <li className="link footer__link">
                <Link className="link footer__link" to={"/products"}>
                  Products<span className="orange">()</span>;
                </Link>
              </li>
              <li className="link footer__link">
                <Link className="link footer__link" to={"/buy"}>
                  Buy<span className="orange">()</span>;
                </Link>
              </li>
              <li className="link footer__link">
                <Link className="link footer__link" to={"/about"}>
                  About<span className="orange">()</span>;
                </Link>
              </li>
              <li className="link footer__link">
                <Link className="link footer__link" to={"/contact"}>
                  Contact<span className="orange">()</span>;
                </Link>
              </li>
            </ul>
            <br />
            <p>
              <span className="orange">{`}`};</span>
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 footer__col__logo">
          <div className="footer__logo">
            <p className="logo logo--footer">dev4Wear();</p>
            <p className="text-white">
              <a
                className="footer__link"
                href="https://www.seiglie.com"
                target="_blank"
              >
                Seiglie
              </a>{" "}
              <span className="fa-regular fa-registered"></span>{" "}
              <span className="fa-regular fa-copyright"></span>
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 footer__col__logo">
          {store.auth ? (
            <section>
              <Link to={"/profile"} className="user--register">
                <span className="fa-regular fa-circle-user user__icon text-white"></span>
                <p className="text-white">{store.userEmail}</p>
              </Link>
              <button
                className="btn text-white"
                onClick={async () => {
                  await actions.logout();
                  navigate("/");
                }}
              >
                LogOut();
              </button>
            </section>
          ) : (
            <div className="user footer__user">
              <i className="fa-regular fa-circle-user user__icon"></i>
              <div className="user__register-login--container ">
                <Link
                  className="user--register footer__register"
                  to={"/signup/#"}
                >
                  dev4Wear.register(newUser);
                </Link>
                <span className="user-separator">/*---------------*/</span>
                <Link className="user--login footer__login" to={"/login"}>
                  dev4Wear.login(email, password);
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </footer>
  );
};

export default FooterComponent;
