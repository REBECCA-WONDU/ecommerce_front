import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export class Collection extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>PRODUCT COLLECTION</h2>
            <p>Some of Our Exclusive Collection, You May Like</p>
          </div>
          <Row>
            <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/o/f/v/m-linen106-dimmy-original-imahfk9nmusngzcn.jpeg?q=70"
                  alt="phone"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Men Regular Fit Self Design Button Down Collar Casual Shirt
                  </p>
                  <p className="product-price-on-card">Price:$100</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src="https://rukminim2.flixcart.com/image/612/612/xif0q/dress/r/m/3/xxl-l2296-6071-pt-jovo-original-imah2gpjbsbk5tye.jpeg?q=70"
                  alt="phone"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Women A-line Multicolor Dress
                  </p>
                  <p className="product-price-on-card">Price:$120</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/8/a/u/xl-mfs-13788-q-02-white-mufti-original-imagmhgysvtbebcw.jpeg?q=70"
                  alt="phone"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Men Oversized Fit Printed Spread Collar Casual Shirt
                  </p>
                  <p className="product-price-on-card">Price:$80</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/c/w/a/s-mt-formal-shirt-metronaut-original-imagwj64pqq5gf2g.jpeg?q=70"
                  alt="phone"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Men Regular Fit Self Design Button Down Collar Casual Shirt
                  </p>
                  <p className="product-price-on-card">Price:$100</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/9/n/e/xl-p44-olive-c2-leotude-original-imahft3wkhwbmtzy.jpeg?q=70"
                  alt="phone"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Men Colorblock Polo Neck Cotton Blend Green T-Shirt
                  </p>
                  <p className="product-price-on-card">Price:$100</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src="https://rukminim2.flixcart.com/image/612/612/xif0q/skirt/g/j/h/m-midi-skirt-alyne-original-imagtvga9hqrzhbw.jpeg?q=70"
                  alt="phone"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Women Solid Pencil Brown Skirt
                  </p>
                  <p className="product-price-on-card">Price:$100</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src="https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/f/u/s/s-rs29h-front-98-navy-sll-woostro-original-imagwfx2cqqgfkzr.jpeg?q=70"
                  alt="phone"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Men Full Sleeve Printed Hooded Sweatshirt
                  </p>
                  <p className="product-price-on-card">Price:$100</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src="https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/h/8/s/xl-men-hd-sweatshirt-grey-being-wanted-original-imagspeewhthkzxr.jpeg?q=70"
                  alt="phone"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Men Full Sleeve Solid Hooded Sweatshirt
                  </p>
                  <p className="product-price-on-card">Price:$100</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Collection;
