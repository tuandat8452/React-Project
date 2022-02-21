import React, { Component } from "react";
import PhimDangChieu from "./PhimDangChieu";
import PhimSapChieu from "./PhimSapChieu";
import Pulse from 'react-reveal/Pulse';


class LoaiPhim extends Component {

  render() {
    return (
      <Pulse>
      <div id="lichchieu" className="lich-chieu container pt-4">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="danhsachphimdangchieu"
              data-toggle="tab"
              href="#phimdangchieu"
              role="tab"
            >
              Đang chiếu
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="danhsachphimsapchieu"
              data-toggle="tab"
              href="#phimsapchieu"
              role="tab"
            >
              Sắp chiếu
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="phimdangchieu"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <PhimDangChieu />
          </div>
          <div
            className="tab-pane fade "
            id="phimsapchieu"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <PhimSapChieu />
          </div>
        </div>
       
      </div>
      </Pulse>
    );
  }
 
}


export default LoaiPhim;
