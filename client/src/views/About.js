import React, {useState, useEffect} from "react";
import ImportComponent from "../components/Import.component";
import { state } from "../state/state";
import { AboutComponent } from "../components/About.component";
const About = () => {
  const [auth, setAuth] = useState(false)
  useEffect(()=>{
    setAuth(state.auth)
  },[])
  return (
    <article className="container about__us--wrapper text-white pb-5 my-3">
      <ImportComponent />
    <AboutComponent/>
    </article>
  );
};

export default About;
