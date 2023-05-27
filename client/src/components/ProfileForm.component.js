import React, { useContext, useState, useEffect } from "react";
import { Context } from "../state/appContext";
import { useNavigate } from "react-router-dom";
import { GetCountries } from "./utils/GetCountries";

const ProfileFormComponent = () => {
  const { store, actions } = useContext(Context);

  const navigate = useNavigate();
  useEffect(() => {
    if (!store.user || !store.token) navigate("/login");
  }, []);
  const [firstName, setFirstName] = useState(store.user? store.user.firstName : "");
  const [lastName, setLastName] = useState(store.user? store.user.lastName : "");
  const [email, setEmail] = useState(store.user? store.user.email : "");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [phone, setPhone] = useState(store.user? store.user.phone : "");
  const [address, setAddress] = useState(store.user? store.user.address : "");
  const [zip, setZip] = useState(store.user? store.user.zip : "");
  const [city, setCity] = useState(store.user? store.user.city : "");
  const [state, setState] = useState(store.user? store.user.state : "");
  const [country, setCountry] = useState(store.user? store.user.country : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.edit(
      firstName,
      lastName,
      email,
      password,
      newPassword,
      phone,
      address,
      zip,
      city,
      state,
      country,
      store.user.id
    );
  };

  return (
    <form
      id="profile__form"
      className="control profile__form"
      onSubmit={(e) => handleSubmit(e)}
    >
      <GetCountries />
      <div className="row ">
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 d-flex flex-column profile__random__img  ">
          <figure>
            <p className="text--primary bg--white fs-5">
              dev4Wear
              <br />
              .randomDesign();
            </p>
            <img className="img-fluid" src="" alt="random image design" />
            <figcaption>Random Design</figcaption>
          </figure>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 d-flex flex-column profile__form__content pb-5 form__col__wrapper_left">
          <label className="form-label my-3" htmlFor="firstName">
            firstName:
          </label>
          <input
            className="form-control text-center "
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label className="form-label my-3" htmlFor="firstName">
            lastName:
          </label>
          <input
            className="form-control text-center"
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label className="form-label my-3" htmlFor="email">
            email:
          </label>
          <input
            className="form-control text-center"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label my-3" htmlFor="password">
            password:
          </label>
          <input
            className="form-control text-center"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="form-label my-3" htmlFor="newPassword">
            New Password:
          </label>
          <input
            className="form-control text-center"
            id="newPassword"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <label className="form-label my-3" htmlFor="phone">
            phone:
          </label>
          <input
            className="form-control text-center"
            id="phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 d-flex flex-column profile__form__content pb-5 form__col__wrapper_right">
          <label className="form-label my-3" htmlFor="address">
            address:
          </label>
          <input
            className="form-control text-center"
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label className="form-label my-3" htmlFor="zip">
            zip:
          </label>
          <input
            className="form-control text-center"
            id="zip"
            type="text"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
          <label className="form-label my-3" htmlFor="city">
            city:
          </label>
          <input
            className="form-control text-center"
            id="city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <label className="form-label my-3" htmlFor="state">
            state:
          </label>
          <input
            className="form-control text-center"
            id="state"
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <label className="form-label my-3" htmlFor="country">
            country:
          </label>
          <select
            className="form-select"
            defaultValue={
              store.user.country ? store.user.country : "--Select Country--"
            }
            onChange={(e) => setCountry(e.target.value)}
          >
            {store.countries &&
              store.countries.map((el, i) => (
                <option className="form-option" key={i} value={el.name.common}>
                  {el.name.common}
                </option>
              ))}
          </select>
          {/* <input
            className="form-control text-center"
            id="country"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          /> */}
        </div>
        <div className="col-12 d-flex justify-content-around">
          <input
            className="btn text-white mt-4 profile__btn"
            type="submit"
            role="submit"
            value={"update();"}
          />
          <input
            className="btn text-white mt-4 profile__btn"
            type="submit"
            role="submit"
            value={"cancel();"}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#profile__form").reset();
            }}
          />
        </div>
      </div>
    </form>
  );
};

export default ProfileFormComponent;
