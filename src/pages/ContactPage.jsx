import React, { Component, Fragment } from "react";

import NavMenuMobile from "../components/common/NavMenuMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import Contact from "../components/common/Contact.jsx";
// import axios from "axios";
// import AppURL from "../api/AppURL.jsx";

class ContactPage extends Component {
  // componentDidMount() {
  //   window.scroll(0, 0);
  //   // this.ContactDetails();
  // }
  // ContactDetails = () => {
  //   axios.post(AppURL.ContactDetails).then().catch();
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

        <Contact />

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

export default ContactPage;
