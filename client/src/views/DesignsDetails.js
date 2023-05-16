import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../state/appContext";

export const DesignsDetails = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const fullId = `dev4weardesigns/${id}`;
  useEffect(() => {
    actions.designDetails(fullId);
  }, []);
  console.log(store.DesignsDetails);
  return <div>DesignsDetails</div>
};
