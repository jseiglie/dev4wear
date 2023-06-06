import React, { useContext, useEffect } from "react";
import { Context } from "../../state/appContext";

export const GetCountries = () => {
  const { actions } = useContext(Context);
  useEffect(() => {
    actions.countries();
  }, []);
};
