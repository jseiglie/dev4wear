import React, { useContext, useState } from "react";
import {useNavigate} from "react-router-dom"
import logo from "../imgs/dev4wearLogo-white.webp"
import { state } from "../state/state";
import { Context } from "../state/appContext";

export const Logincomponent = (props) => {
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const url = process.env.REACT_APP_API + "/" + props.endpoint;
  const {store, actions} = useContext(Context)
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || email.length < 4) {
      setErrorEmail(true);
      throw new Error("Email is not valid");
    }
    if (!password || password.trim().length < 6) {
      setErrorPassword(true);
      throw new Error("Password is not valid");
    }
    await actions.login_register(url, email, password).then(()=>navigate("/profile"))
  }
  return (
    <div className="container">
      {props.endpoint == "login" ? (
        <h2 className="register__subtitle my-5">dev4Wear.login(email, password);</h2>
      ) : (
        <h2 className="register__subtitle my-5">dev4Wear.register(newUser);</h2>
      )}

      <article className="login_register__wrapper row my-5 p-3">
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 my-5 d-flex justify-content-center">
          <figure className="d-flex justify-content-center align-items-center">
            <img src={logo} className="img-fluid" alt="dev4wear();"/>
          </figure>

        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 my-5">
        <form className={`form-control regiser_login__form`} onSubmit={(e) => handleSubmit(e)}>
          <label className="form-label" htmlFor="email">
            email:
          </label>
          <input
            className={`form-control ${errorEmail ? `bg-danger` : ""}`}
            id="email"
            name="email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            />
          {errorEmail ? (
            <span className="bg-danger">
              Error: Failed to execute, email is not valid
            </span>
          ) : (
            ""
          )}
          <label className="form-label" htmlFor="password">
            password:
          </label>
          <input
            className={`form-control ${errorPassword ? `bg-danger` : ""}`}
            id="password"
            name="password"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            />
          {errorPassword ? (
            <span className="bg-danger">
              Error: Failed to execute, password is not valid
            </span>
          ) : (
            ""
            )}
          <input
            className="form-control my-3 form__btn"
            value={"execute();"}
            role="submit"
            type="submit"
            />
        </form>
            </div>
      </article>
    </div>
  );
};
