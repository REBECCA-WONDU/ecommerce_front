import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export class SuggestedProduct extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>YOU MAY ALSO LIKE</h2>
            <p>Some of Our Exclusive Collection, You May Like</p>
          </div>
          <Row>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Link to={"/productdetails"}>
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/c/4/d/-original-imaghx9qygjjg8hz.jpeg?q=70&crop=false"
                    alt="phone"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Apple iPhone 14 Plus (Blue, 128 GB)
                    </p>
                    <p className="product-price-on-card">Price:$1000</p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/a/c/k/-original-imagtc5fuzkvczr7.jpeg?q=70&crop=false"
                  alt="phone"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Apple iPhone 15 (Pink, 128 GB)
                  </p>
                  <p className="product-price-on-card">Price:$1200</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/j/t/5/galaxy-m34-without-charger-sm-m346b-samsung-original-imagrue3vhfgvwjz.jpeg?q=70&crop=false"
                  alt="phone"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    SAMSUNG Galaxy M34 5G (Waterfall Blue, 128 GB) (8 GB RAM)
                  </p>
                  <p className="product-price-on-card">Price:$120</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://rukminim2.flixcart.com/image/612/612/xif0q/mobile/d/o/c/-original-imagtnqjmfqxxbj2.jpeg?q=70"
                  alt="phone"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Samsung Galaxy S21 FE 5G with Snapdragon 888 (Graphite, 128
                    GB)
                  </p>
                  <p className="product-price-on-card">Price:$1000</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://rukminim2.flixcart.com/image/416/416/ksnjp8w0/mobile/w/u/8/galaxy-z-flip3-5g-sm-f711bzeeinu-samsung-original-imag662adrayy6cg.jpeg?q=70&crop=false"
                  alt="phone"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    SAMSUNG Galaxy Z Flip3 5G (Cream, 128 GB) (8 GB RAM)
                  </p>
                  <p className="product-price-on-card">Price:$900</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/q/9/-original-imagzm8r8jzcumfa.jpeg?q=70&crop=false"
                  alt="phone"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    SAMSUNG Galaxy S23 5G (Green, 128 GB) (8 GB RAM)
                  </p>
                  <p className="product-price-on-card">Price:$950</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default SuggestedProduct;
