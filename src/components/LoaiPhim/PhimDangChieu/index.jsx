import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from "react-redux";
import PhimDangChieuItem from "../PhimDangChieuItem";


class PhimDangChieu extends Component {
  // state = {
  //   data: [],
  // };

  renderMovieItem = () =>
    this.props.listMovie?.slice(0,59).map((item) => (
      <div className="col-12" key={item.maPhim}>
        <PhimDangChieuItem data={item} />
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
            rows:2,
          },
        },
      ],
    };

    return (
      <section className="list-movie py-3">
        <Slider {...settings}>{this.renderMovieItem()}</Slider>
      </section>
    );
  }
  // componentDidMount() {
  //   this.setState({ data: this.props.listMovie });
  // }
}

const mapStateToProps = (state) => {
  return {
    listMovie: state.fechMovieReducer.data,
  };
};

export default connect(mapStateToProps)(PhimDangChieu);
