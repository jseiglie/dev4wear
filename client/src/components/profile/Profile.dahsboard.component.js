import React from "react";
import ProfileFormComponent from "./ProfileForm.component";
import { PaymentMethodsComponent } from "../payment/PaymentMethods.component";
import { HomeProfileComponent } from "./Home.Profile.component";
import { FavoritesProfileComponent } from "./Favorites.Profile.component";
import { OrderHistoryProfileComponent } from "./OrderHistory.Profile.component";
import { GetCart } from "../utils/GetCart";

export const ProfileCahsboardComponent = () => {
  return (
    <section className="my-5 d-flex flex-column align-items-center ">
      <GetCart />
      <ul
        className="nav nav-tabs justify-content-center"
        id="myTab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            home();
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="false"
          >
            profile();
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="Payment-Methods-tab"
            data-bs-toggle="tab"
            data-bs-target="#Payment-Methods-tab-pane"
            type="button"
            role="tab"
            aria-controls="Payment-Methods-tab-pane"
            aria-selected="false"
          >
            paymentMethods();
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="orderHistory-tab"
            data-bs-toggle="tab"
            data-bs-target="#orderHistory-tab-pane"
            type="button"
            role="tab"
            aria-controls="orderHistory-tab-pane"
            aria-selected="false"
          >
            orderHistory();
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="favorites-tab"
            data-bs-toggle="tab"
            data-bs-target="#favorites-tab-pane"
            type="button"
            role="tab"
            aria-controls="favorites-tab-pane"
            aria-selected="false"
          >
            favorites();
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabIndex="0"
        >
          <HomeProfileComponent />
        </div>
        <div
          className="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabIndex="0"
        >
          <ProfileFormComponent />
        </div>
        <div
          className="tab-pane fade"
          id="Payment-Methods-tab-pane"
          role="tabpanel"
          aria-labelledby="Payment-Methods-tab"
          tabIndex="0"
        >
          <PaymentMethodsComponent />
        </div>
        <div
          className="tab-pane fade"
          id="orderHistory-tab-pane"
          role="tabpanel"
          aria-labelledby="disabled-tab"
          tabIndex="0"
        >
          <OrderHistoryProfileComponent />
        </div>
        <div
          className="tab-pane fade"
          id="favorites-tab-pane"
          role="tabpanel"
          aria-labelledby="disabled-tab"
          tabIndex="0"
        >
          <FavoritesProfileComponent />
        </div>
      </div>
    </section>
  );
};
