import React, {useContext, useEffect} from "react";
import SeparatorComponent from "../components/utils/Separator.component";
import HookComponent from "../components/common/Hook.component";
import LatestComponent from "../components/common/Latest.component";
import { Context } from "../state/appContext";
export const Home = () => {
  const {store, actions} = useContext(Context)
  useEffect(()=>{
    if (store.products== null) {
        actions.products()
    }
},[])
  return (
    <main>
      <HookComponent />
      <SeparatorComponent />
      <LatestComponent />
    </main>
  );
};
