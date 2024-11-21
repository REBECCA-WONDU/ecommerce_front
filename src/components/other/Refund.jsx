import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import AppURL from "../../api/AppURL";
// import axios from "axios";
import ReactHtmlParser from "react-html-parser";
export class Refund extends Component {
  constructor() {
    super();
    this.state = {
      refund: "",
      loaderDiv: "",
      mainDiv: "d-none",
    };
  }

  // componentDidMount() {
  //   axios
  //     .get(AppURL.SiteInfoDetails)
  //     .then((response) => {
  //       let StatusCode = response.status;
  //       console.log("Response:", response); // Log the entire response
  //       if (StatusCode === 200) {
  //         let jsonData = response.data[0]["refund"];
  //         console.log("refund:", jsonData); // Log the data you're setting in the state
  //         this.setState({
  //           refund: jsonData,
  //           loaderDiv: "d-none",
  //           mainDiv: "",
  //         });
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching site info:", error);
  //     });
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
              <h4 className="section-title-login"> Refund Policy Page </h4>
              <p className="section-title-contact">
                {ReactHtmlParser(this.state.refund)}
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Refund;