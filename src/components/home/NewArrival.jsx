import React, { Component, Fragment } from "react";
import { Container, Row, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class NewArrival extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplayspeed: 2000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      arrow: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>
              Featured Products &nbsp;
              <a className="btn btn-sm ml-2 site-btn" onClick={this.previous}>
                <i className="fa fa-angle-left"></i>
              </a>
              &nbsp;
              <a className="btn btn-sm ml-2 site-btn" onClick={this.next}>
                <i className="fa fa-angle-right"></i>
              </a>
            </h2>

            <p>Some of Our Exclusive Collection, You May Like</p>
          </div>

          <Row>
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              <div>
                <Card className="image-box card w-100">
                  <img
                    className="center w-75"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/o/f/v/m-linen106-dimmy-original-imahfk9nmusngzcn.jpeg?q=70"
                    alt="phone"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Men Regular Fit Self Design Button Down Collar Casual
                      Shirt
                    </p>
                    <p className="product-price-on-card">Price:$100</p>
                  </Card.Body>
                </Card>{" "}
              </div>

              <div>
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/mobile/d/o/c/-original-imagtnqjmfqxxbj2.jpeg?q=70"
                    alt="phone"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Samsung Galaxy S21 FE 5G with Snapdragon 888 (Graphite,
                      128 GB)
                    </p>
                    <p className="product-price-on-card">Price:$1000</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
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
              </div>
              <div>
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
              </div>
              <div>
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
              </div>
              <div>
                <Card className="image-box card w-100">
                  <img
                    className="center w-75"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/o/f/v/m-linen106-dimmy-original-imahfk9nmusngzcn.jpeg?q=70"
                    alt="phone"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Men Regular Fit Self Design Button Down Collar Casual
                      Shirt
                    </p>
                    <p className="product-price-on-card">Price:$100</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
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
              </div>
              <div>
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
              </div>
            </Slider>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default NewArrival;
