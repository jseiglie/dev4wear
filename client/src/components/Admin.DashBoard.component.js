import React, { useContext, useEffect } from "react";
import { Context } from "../state/appContext";
import { useNavigate } from "react-router-dom";
import { AdminUploaderComponent } from "./Admin.Uploader.component";
import { AdminCategoriesComponent } from "./AdminCategories.component";

export const AdminDashBoardComponent = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    if (!store.isAdmin) navigate("/admin");
    actions.getCategories();
  }, []);
  return (
    <article className="container-fluid d-flex flex-column">
      <button className="btn btn--primary align-self-end my-3">
        <span className="fa-solid fa-arrow-right-from-bracket"></span>
      </button>
      <div className="d-flex align-items-start">
        <div
          className="nav flex-column nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            className="nav-link active "
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-home"
            type="button"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            Home
          </button>
          <button
            className="nav-link "
            id="v-pills-Upload-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-Upload"
            type="button"
            role="tab"
            aria-controls="v-pills-Upload"
            aria-selected="false"
          >
            Upload
          </button>
          <button
            className="nav-link"
            id="v-pills-categories-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-categories"
            type="button"
            role="tab"
            aria-controls="v-pills-categories"
            aria-selected="false"
            
          >
            Categories
          </button>
          <button
            className="nav-link"
            id="v-pills-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-messages"
            type="button"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >
            Messages
          </button>
          <button
            className="nav-link"
            id="v-pills-settings-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-settings"
            type="button"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >
            Settings
          </button>
        </div>
        <div className="tab-content container-fluid" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
            tabIndex="0"
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-Upload"
            role="tabpanel"
            aria-labelledby="v-pills-Upload-tab"
            tabIndex="0"
          >
            <AdminUploaderComponent/>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-categories"
            role="tabpanel"
            aria-labelledby="v-pills-categories-tab"
            tabIndex="0"
          >
            <AdminCategoriesComponent/>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
            tabIndex="0"
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
            tabIndex="0"
          >
            ...
          </div>
        </div>
      </div>
    </article>
  );
};
