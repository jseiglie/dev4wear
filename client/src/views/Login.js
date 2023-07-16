import React, { useContext, useEffect } from "react";
import { Logincomponent } from "../components/loginRegister/Login.component";
import { Context } from "../state/appContext";

export const Login = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (store.needLogin) {
      alert("You need to login to make that action");
      store.needLogin = false;
    }
  }, []);

  return <Logincomponent endpoint={"login"} />;
};
