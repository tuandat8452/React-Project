import React, { Component } from "react";
import MobileImg from "../../assets/mobile.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "../../assets/slide1.jpg";
import Slider2 from "../../assets/slide2.jpg";
import Slider3 from "../../assets/slide3.jpg";
import Slider4 from "../../assets/slide8.jpg";
import Slider5 from "../../assets/slide10.jpg";
import Slider6 from "../../assets/slide11.jpg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

class Application extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
    };
    return (
      <div id="ungdung" className="application">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 appli-left">
              <h3>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h3>
              <p>
                Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                và đổi quà hấp dẫn.
              </p>
              <button className="btn">
                App miễn phí - Tải về ngay!
              </button>
              <span>
                TIX có hai phiên bản <a href="#!">IOS</a> và{" "}
                <a href="#!">Android</a>{" "}
              </span>
            </div>
         
            <div className="col-lg-6 appli-right">
              <div className="app  position-relative">
                <div className="mobile">
                  <img src={MobileImg} alt="Mobile" />
                </div>
                <Slider className="slider" {...settings}>
                  <div className="item">
                    <LazyLoadImage effect="blur" src={Slider1} alt="slider1" />
                  </div>
                  <div className="item">
                    <LazyLoadImage effect="blur" src={Slider2} alt="slider2" />
                  </div>
                  <div className="item">
                    <LazyLoadImage effect="blur" src={Slider3} alt="slider3" />
                  </div>
                  <div className="item">
                    <LazyLoadImage effect="blur" src={Slider4} alt="slider4" />
                  </div>
                  <div className="item">
                    <LazyLoadImage effect="blur" src={Slider5} alt="slider5" />
                  </div>
                  <div className="item">
                    <LazyLoadImage effect="blur" src={Slider6} alt="slider6" />
                  </div>
                 
                </Slider>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    );
  }
}

export default Application;
