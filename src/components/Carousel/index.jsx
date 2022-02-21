import React, { Component } from "react";
import carousel1 from "../../assets/carousel-1.jpg";
import carousel2 from "../../assets/carousel-2.png";
import carousel3 from "../../assets/carousel-3.png";
import carousel4 from "../../assets/carousel-4.png";
import carousel5 from "../../assets/carousel-5.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: false,
          },
        },
      ],
    };
    return (
      <div className="carousel position-relative">
        <Slider {...settings}>
          <img src={carousel1} alt="Kiều" />
          <img src={carousel2} alt="Motal Kombat" />

          <img src={carousel3} alt="Người Nhân Bản" />

          <img src={carousel4} alt="Lật Mặt 48H" />

          <img src={carousel5} alt="Bàn Tay Diệt Quỷ" />
        </Slider>
      </div>
    );
  }
}

export default Carousel;
