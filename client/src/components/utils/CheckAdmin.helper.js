import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../state/appContext";

export const CheckAdminHelper = () => {
  const { store } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    if (!store.isAdmin) navigate("/admin");
  }, []);
};
