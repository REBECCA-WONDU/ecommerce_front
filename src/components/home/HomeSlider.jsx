import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "../../asset/images/slider1.jpg";
import Slider2 from "../../asset/images/slider2 (2).jpg";
import Slider3 from "../../asset/images/slider3 (2).jpg";

export class HomeSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplayspeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      arrow: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
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
      <div>
        <Slider {...settings}>
          <div>
            <img className="slider-img" src={Slider1} alt="slider-img" />
          </div>
          <div>
            <img className="slider-img" src={Slider2} alt="slider-img" />
          </div>
          <div>
            <img className="slider-img" src={Slider3} alt="slider-img" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default HomeSlider;
