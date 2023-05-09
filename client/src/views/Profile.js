import React, { useContext, useEffect } from "react";
import { ProfileCahsboardComponent } from "../components/Profile.dahsboard.component";
import { Context } from "../state/appContext";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    if (!store.user || !store.token) navigate("/login");
  }, []);
  return (
    <article className="container gx-0">
      <ProfileCahsboardComponent />
    </article>
  );
};
