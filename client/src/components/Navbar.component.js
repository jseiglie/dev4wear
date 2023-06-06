import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../state/appContext";

const NavbarComponent = () => {
  const { store } = useContext(Context);
  return (
    <nav
      className="navbar navbar-expand-lg navbar--wrapper"
      aria-label="navbar"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          {`dev4Wear();//`}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample05"
          aria-controls="navbarsExample05"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample05">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item nav__link">
              <Link className="nav-link nav__link" to={"/"}>
                d4w.home();
              </Link>
            </li>

            <li className="nav-item nav__link">
              <Link className="nav-link nav__link" to={"/designs"}>
                d4w.designs();
              </Link>
            </li>
            <li className="nav-item nav__link">
              <Link className="nav-link nav__link" to={"/products"}>
                d4w.products();
              </Link>
            </li>
            <li className="nav-item nav__link">
              <Link className="nav-link nav__link" to={"/faq"}>
                d4w.faq();
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav  ">
            {store.auth ? (
              <li className="nav-item nav__link">
                <Link className="nav-link nav__link" to={"/profile"}>
                  d4w.user(profile);
                </Link>
              </li>
            ) : (
              ""
            )}
            <li className="nav-item nav__link">
              <Link className="nav-link nav__link" to={"/about"}>
                d4w.about();
              </Link>
            </li>
            <li className="nav-item nav__link">
              <Link className="nav-link nav__link" to={"/contact"}>
                d4w.contact();
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
