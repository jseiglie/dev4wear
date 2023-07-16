import React from "react";
import SeparatorComponent from "../utils/Separator.component";
import BannerComponent from "./Banner.component";

const HeaderComponent = () => {
  return (
    <header className="container-fluid gx-0">
      <BannerComponent />
    </header>
  );
};

export default HeaderComponent;
