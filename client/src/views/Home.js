import React, {useContext, useEffect} from "react";
import SeparatorComponent from "../components/Separator.component";
import HookComponent from "../components/Hook.component";
import LatestComponent from "../components/Latest.component";
import { Context } from "../state/appContext";

export const Home = () => {
  const {store, actions} = useContext(Context)
  useEffect(()=>{
    if (store.products== null) {
        actions.products()
    }
},[])
  return (
    <div>
      <HookComponent />
      <SeparatorComponent />
      <LatestComponent />
    </div>
  );
};
