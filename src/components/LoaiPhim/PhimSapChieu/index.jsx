import React, { Component } from "react";
import PhimSapChieuItem from "../PhimSapChieuItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from "react-redux";

class PhimSapChieu extends Component {
  

    renderMovieItem = () =>
    this.props.listMovie?.map((item) => (
      <div className="col-12" key={item.maPhim}>
        <PhimSapChieuItem data={item} />
      </div>
    ));
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      rows: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            arrows: false,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            rows: 2,
          },
        },
      ],
    };

    return (
      <section className="list-movie-coming py-3">
        <Slider {...settings}>{this.renderMovieItem()}</Slider>
      </section>
    );
  }

}

const mapStateToProps = (state) => {
    return {
      listMovie: state.fechMovieComingReducer.data,
    };
  };

export default connect(mapStateToProps)(PhimSapChieu);
