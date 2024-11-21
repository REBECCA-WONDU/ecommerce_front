import React, { Component, Fragment } from "react";

import NavMenuMobile from "../components/common/NavMenuMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import Cart from "../components/Cart/Cart";

class CartPages extends Component {
  // componentDidMount() {
  //   window.scroll(0, 0);
  // }
  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
        </div>

        <Cart />

        <div className="Desktop">
          <FooterDesktop />
        </div>
        <div className="Mobile">
          <FooterMobile />
        </div>
      </Fragment>
    );
  }
}

export default CartPages;
