import React from "react";
import ImportComponent from "../components/utils/Import.component"
import { AboutComponent } from "../components/common/About.component";
const About = () => {
  return (
    <article className="container about__us--wrapper text-white pb-5 my-3">
      <ImportComponent />
      <AboutComponent />
    </article>
  );
};

export default About;