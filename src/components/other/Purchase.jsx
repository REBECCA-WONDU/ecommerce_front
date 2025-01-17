import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import AppURL from "../../api/AppURL";
// import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class Purchase extends Component {
  constructor() {
    super();
    this.state = {
      purchase: "",
      loaderDiv: "",
      mainDiv: "d-none",
    };
  }

  // componentDidMount() {
  //   let SiteInfoPurchase = sessionStorage.getItem("SiteInfoDetails");

  //   if (SiteInfoPurchase == null) {
  //     axios
  //       .get(AppURL.SiteInfoDetails)
  //       .then((response) => {
  //         let StatusCode = response.status;
  //         if (StatusCode === 200) {
  //           let JsonData = response.data[0]["purchase_guide"];
  //           this.setState({
  //             purchase: JsonData,
  //             loaderDiv: "d-none",
  //             mainDiv: "",
  //           });

  //           sessionStorage.setItem("SiteInfoPurchase", JsonData);
  //         } else {
  //           toast.error("Somthing Went Wrong", {
  //             position: "bottom-center",
  //             theme: "colored",
  //           });
  //         }
  //       })
  //       .catch((error) => {
  //         toast.error("Somthing Went Wrong", {
  //           position: "bottom-center",
  //           theme: "colored",
  //         });
  //       });
  //   } // end If Conditon
  //   else {
  //     this.setState({
  //       purchase: SiteInfoPurchase,
  //       loaderDiv: "d-none",
  //       mainDiv: "",
  //     });
  //   }
  // }

  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <div className={this.state.loaderDiv}>
                <div class="ph-item">
                  <div class="ph-col-12">
                    <div class="ph-row">
                      <div class="ph-col-4"></div>
                      <div class="ph-col-8 empty"></div>
                      <div class="ph-col-6"></div>
                      <div class="ph-col-6 empty"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                    </div>
                  </div>
                </div>

                <div class="ph-item">
                  <div class="ph-col-12">
                    <div class="ph-row">
                      <div class="ph-col-4"></div>
                      <div class="ph-col-8 empty"></div>
                      <div class="ph-col-6"></div>
                      <div class="ph-col-6 empty"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={this.state.mainDiv}>
                <h4 className="section-title-login">Purchase Page </h4>
                <p className="section-title-contact">
                  {ReactHtmlParser(this.state.purchase)}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    );
  }
}

export default Purchase;
