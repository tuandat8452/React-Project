import React, { Component } from "react";
import Btnplay from "../../../assets/play.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

class PhimSapChieuItem extends Component {
  render() {
    const { hinhAnh, tenPhim ,trailer} = this.props.data;
    return (
      <React.Fragment>
        <div className="item">
          <div className="item-top position-relative">
            <LazyLoadImage effect="blur" src={hinhAnh} style={{ width: "100%" }} alt={tenPhim} />
            <a href={trailer} data-lity>
              <div className="hover-img"></div>
              <div className="img-play">
              <img src={Btnplay} alt="btnplay" />
            </div>
            </a>
           
            <div className="text-coming">
              <h4>
                <b>
                  <i> COMING SOON</i>
                </b>
              </h4>
            </div>
          </div>
          <div className="item-bot mt-2 position-relative">
            <span className="age">C13</span>
            <p className="mb-2">{tenPhim}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PhimSapChieuItem;
