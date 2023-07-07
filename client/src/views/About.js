import React from "react";
import ImportComponent from "../components/Import.component";
import { AboutComponent } from "../components/About.component";
const About = () => {
  return (
    <article className="container about__us--wrapper text-white pb-5 my-3">
      <ImportComponent />
      <AboutComponent />
    </article>
  );
};

export default About;