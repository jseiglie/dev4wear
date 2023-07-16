import React from "react";
import { CardComponent } from "./Card.component";

export const ServicesComponent = () => {
  const test = () => console.log("pepe")
  return (
    <article className="container bg--primary">
      <h2 className="logo text-white py-3">dev4Wear()</h2>
      <p className="text-white fs-3">services({`{}`})</p>
      <section className="row my-5 d-flex justify-content-center">
        <CardComponent
          alt=""
          src=""
          caption="ownDesign();"
          text1="You have a desing made with a developing tool or programming language and want to wear it?"
          text2="Contact us and send us your code to check it, we'll get in touch with you!"
          event={""}
        />
        <CardComponent
          alt=""
          src=""
          caption="makePack();"
          text1="You want to create a personalize pack?"
          text2="Contact us and let us know which items you would want and what design are you interested on to make it special!"
          event={""}
        />
        <CardComponent
          alt=""
          src=""
          caption="companyBranding();"
          text1="Want to have us make your logo and brand?"
          text2="Contact us and let us know about your company, business idea and what you have in mind. We'll make it happen!"
          event={e=>test(e)}
        />
      </section>
    </article>
  );
};
