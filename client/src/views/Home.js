import React from "react";
import { ExampleComponent } from "../components/ExampleComponent";
import HeaderComponent from "../components/Header.component";
import BannerComponent from "../components/Banner.component";
import ImportComponent from "../components/Import.component";
import NavbarComponent from "../components/Navbar.component";
import SeparatorComponent from "../components/Separator.component";
import HookComponent from "../components/Hook.component";
import LatestComponent from "../components/Latest.component";
import FooterComponent from "../components/Footer.component";

export const Home = () => {
  return (
    <div>
      <SeparatorComponent/>
      <HeaderComponent/>
      <ImportComponent/>
      <NavbarComponent/>
      <SeparatorComponent/>
      <HookComponent/>
      <SeparatorComponent/>
      <LatestComponent/>
      <SeparatorComponent/>
      <FooterComponent/>
    </div>
  );
};
