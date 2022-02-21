import React, { Component } from "react";
import CertificationImg from "../../assets/certification.png";
import Logo from "../../assets/web-logo.png";
import { animateScroll as scroll } from "react-scroll";
import { LazyLoadImage } from 'react-lazy-load-image-component';
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row border-bottom">
              <div className="col-lg-3 col-md-6 footer-item">
                <h4>TIX</h4>
                <ul>
                  <li>
                    <a href="#!"> Giới thiệu</a>
                  </li>
                  <li>
                    <a href="#!">Thông tin đối tác</a>
                  </li>
                  <li>
                    <a href="#!">Tuyển dụng</a>
                  </li>
                  <li>
                    <a href="#!">Liên hệ quảng cáo</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-item">
                <h4>Điều khoản sử dụng</h4>
                <ul>
                  <li>
                    <a href="#!">Điều khoản chung</a>
                  </li>
                  <li>
                    <a href="#!">Điều khoản giao dịch</a>
                  </li>
                  <li>
                    <a href="#!">Chính sách bảo mật</a>
                  </li>
                  <li>
                    <a href="#!">Câu hỏi thường gặp</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-item">
                <h4>Kết nối với chúng tôi</h4>
                <a href="https://www.facebook.com/">
                  <i class="fab fa-facebook-square"></i>
                </a>
                <a href="https://www.youtube.com/">
                  <i class="fab fa-youtube-square"></i>
                </a>
                <a href="https://www.instagram.com/">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/">
                  <i class="fab fa-linkedin"></i>
                </a>
                <LazyLoadImage src={CertificationImg} alt="Chứng nhận bộ công thương" />
              </div>
              <div className="col-lg-3 col-md-6 footer-item">
                <h4>Chăm sóc khách hàng</h4>
                <p>Hotline : 1900 2021</p>
                <p>
                  Email : <a href="#!">support@tix.vn</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-2 logo">
                <a style={{cursor:'pointer'}}
                  onClick={() => {
                    scroll.scrollToTop();
                  }}
                >
                  <LazyLoadImage src={Logo} alt="logo" />
                </a>
              </div>
              <div className="col-md-10 content">
                <h3>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h3>
                <span>
                  Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp.
                  Hồ Chí Minh, Việt Nam.
                </span>
                <span>
                  Giấy chứng nhận đăng ký kinh doanh số: 0101659783, đăng ký
                  thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch
                  và đầu tư Thành phố Hồ Chí Minh cấp.
                </span>
                <span>Số Điện Thoại (Hotline): 1900 545 436</span>
                <p>
                  Copyright © by{" "}
                  <a target="__blank" href="https://tix.vn/">
                    Tix.vn
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
