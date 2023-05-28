import React, { useContext, useEffect, useState } from "react";
import { Context } from "../state/appContext";

export const AdminCategoriesComponent = () => {
  const { store, actions } = useContext(Context);
  const [category, setCategory] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await actions.addCategory(category);
    console.log(await resp);
  };

  useEffect(() => {
    actions.getCategories();
  }, []);
  return (
    <article className="container">
      <section className="d-flex ">
        <h3>Categories:</h3>
        <ul className="d-flex">
          {store.categories &&
            store.categories.map((el, i) => (
              <li className="m-3" key={i}>
                {el.category}
              </li>
            ))}
        </ul>
      </section>
      <form
        className="form-control d-flex flex-column bg--primary text-white"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="input-group">
          <label className="form-label" htmlFor="category">
            Category:{" "}
          </label>
          <input
            className="form-control"
            type="text"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <input type="submit" className="btn text-white" />
      </form>
    </article>
  );
};
