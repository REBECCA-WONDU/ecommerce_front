import React, { Component, Fragment } from "react";
import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import UserLoginPage from "../pages/UserLoginPage";
import ContactPage from "../pages/ContactPage";
import PurchasePage from "../pages/PurchasePage";
import PrivacyPage from "../pages/PrivacyPage";
import RefundPage from "../pages/RefundPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import NotificationPage from "../pages/NotificationPage";
import FavouritePage from "../pages/FavouritePage";
import CartPage from "../pages/CartPage";
import AboutPage from "../pages/AboutPage";
export class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/login" Component={UserLoginPage} />
          <Route path="/contact" Component={ContactPage} />

          <Route path="/purchase" Component={PurchasePage} />
          <Route path="/privacy" Component={PrivacyPage} />
          <Route path="/refund" Component={RefundPage} />
          <Route path="/about" Component={AboutPage} />

          <Route path="/productdetails" Component={ProductDetailsPage} />

          <Route path="/notification" Component={NotificationPage} />
          <Route path="/favourite" Component={FavouritePage} />
          <Route path="/cart" Component={CartPage} />
        </Routes>
      </Fragment>
    );
  }
}

export default AppRoute;
