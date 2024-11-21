import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export class Categories extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>Categories</h2>
            <p>Some of Our Exclusive Collection, You May Like</p>
          </div>
          <Row>
            <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
              <Row>
                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <img
                      className="center"
                      src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/698ba0cebe456aaf.jpg?q=100"
                      alt="phone"
                    />
                    <h5 className="category-name">Top Offers</h5>
                    <Card.Body></Card.Body>
                  </Card>
                </Col>

                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <img
                      className="center"
                      src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/44e10b16e649b691.jpg?q=100"
                      alt="phone"
                    />
                    <h5 className="category-name">MOBILE & TABLETS</h5>
                    <Card.Body></Card.Body>
                  </Card>
                </Col>

                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <img
                      className="center"
                      src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/717b5077a5e25324.jpg?q=100"
                      alt="phone"
                    />
                    <h5 className="category-name">TVs & Appliances</h5>
                    <Card.Body></Card.Body>
                  </Card>
                </Col>

                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <img
                      className="center"
                      src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/4da1d0d19350cc84.jpg?q=100"
                      alt="phone"
                    />
                    <h5 className="category-name">Electronics</h5>
                    <Card.Body></Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>

            <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
              <Row>
                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <img
                      className="center"
                      src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/9d4e9c605fc1d2d3.jpg?q=100"
                      alt="phone"
                    />
                    <h5 className="category-name">Fashion</h5>
                    <Card.Body></Card.Body>
                  </Card>
                </Col>

                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <img
                      className="center"
                      src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/a5e656672d0548dd.jpg?q=100"
                      alt="phone"
                    />
                    <h5 className="category-name">Beauty</h5>
                    <Card.Body></Card.Body>
                  </Card>
                </Col>

                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <img
                      className="center"
                      src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/5b813b64a3179898.jpg?q=100"
                      alt="phone"
                    />
                    <h5 className="category-name">Home & Kitchen</h5>
                    <Card.Body></Card.Body>
                  </Card>
                </Col>

                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <img
                      className="center"
                      src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/7a5e96c10ada8a56.jpg?q=100"
                      alt="phone"
                    />
                    <h5 className="category-name">Furniture</h5>
                    <Card.Body></Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Categories;
