import React from "react";
import SeparatorComponent from "../components/Separator.component";
import HookComponent from "../components/Hook.component";
import LatestComponent from "../components/Latest.component";

export const Home = () => {
  return (
    <div>
      <HookComponent />
      <SeparatorComponent />
      <LatestComponent />
    </div>
  );
};
