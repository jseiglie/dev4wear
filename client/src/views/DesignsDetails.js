import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../state/appContext";
import { Image } from "cloudinary-react";
import { DesignsDetailsComponent } from "../components/Designs.Details.component";
export const DesignsDetails = () => {
  const { id } = useParams();
  const { actions } = useContext(Context);
  
  useEffect(() => {
    actions.designDetails(id);
  }, []);
  return <article><DesignsDetailsComponent/></article>
};
