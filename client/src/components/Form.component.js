import React, { useState } from "react";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [errorMail, setErrorEmail] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const opt = {
    method: "POST",
    Headers: {
      "Content-Type": "application/JSON",
    },
    body: JSON.stringify({ name: name, email: email, msg: msg }),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || name.trim().length < 2) {
      setErrorName(true);
      setSuccess("no");
      throw new Error("Name is missing");
    }
    if (!email || email.trim().length < 4) {
      setErrorEmail(true);
      setSuccess("no");

      throw new Error("Email is missing");
    }

    if (!msg || msg.trim().length < 10) {
      setErrorMsg(true);
      setSuccess("no");
      throw new Error("Msg are missing");
    }
    try {
      const resp = fetch(`${process.env.REACT_APP_API}/contact`, opt);
      if (resp.status != "OK") {
        setSuccess("no");
        throw new Error("Failed, status: ", resp.status);
      } else {
        setErrorName(false);
        setErrorEmail(false);
        setErrorMsg(false);
        setSuccess("ok");
      }
    } catch (error) {
      console.error("Couldn't send form data, error: ", error);
      setSuccess("no");
    }
  };
  return (
    <form
      className="container form-control d-flex flex-column bg--primary text-white p-5"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="row">
        <div className="col-sm-12 colmd-12 col-lg-6 col-xl-6">
          <label
            className={`form-label mx-3 ${errorName ? `bg-danger` : ""}`}
            htmlFor="name"
          >{`name{}`}</label>
          <input
            className={`form-control ${errorName ? `bg-danger` : ""}`}
            id="name"
            name="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          {errorName ? (
            <span className="bg-danger">
              Error: Failed to execute(), field is required
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="col-sm-12 colmd-12 col-lg-6 col-xl-6">
          <label
            className={`form-label mx-3 ${errorMail ? `bg-danger` : ""}`}
            htmlFor="email"
          >{`email{}`}</label>
          <input
            className={`form-control ${errorMail ? `bg-danger` : ""}`}
            id="email"
            name="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorMail ? (
            <span className="bg-danger">
              Error: Failed to execute(), field is required
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="col-12">
          <label
            className={`form-label my-3 ${errorMsg ? `bg-danger` : ""}`}
            htmlFor="msg"
          >{`message{}`}</label>
          <textarea
            className={`form-control ${errorMsg ? `bg-danger` : ""}`}
            id="msg"
            name="msg"
            cols="50"
            rows="10"
            onChange={(e) => setMsg(e.target.value)}
          ></textarea>
          {errorMsg ? (
            <span className="bg-danger">
              Error: Failed to execute(), field is required
            </span>
          ) : (
            ""
          )}
        </div>
        <input
          className="form-control mt-5 w-50 mx-auto"
          type="submit"
          role="submit"
          value={"execute();"}
        />
        {success == "ok" ? (
          <span className="form-label bg-success mt-5 rounded">ok!</span>
        ) : success == "no" ? (
          <span className="form-label bg-danger mt-5 rounded">
            console.log(failed)
          </span>
        ) : (
          ""
        )}
      </div>
    </form>
  );
};

export default FormComponent;
