import React, { Component } from "react";
import Logo from "../../assets/web-logo.png";
import Avatar from "../../assets/avatar.png";
import AvatarUser from "../../assets/avatar-img.jpg";
import IconMenu from "../../assets/menu-options.png";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import * as Scroll from "react-scroll";

class NavbarHome extends Component {
  state = {
    isValid: false,
  };
  logOut = () => {
    Swal.fire({
      icon: "question",
      title: "Bạn có muốn đăng xuất?",
      showCancelButton: true,
      confirmButtonText: "Đồng ý",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("Userlogin");
        localStorage.removeItem("Infouser");
        this.setState({
          isValid: true,
        });
        Swal.fire("Đăng xuất thành công", "", "success").then((res) => {
          if (res.isConfirmed) {
            window.location.reload();
          }
        });
      }
    });
  };
  render() {
    if (localStorage.getItem("Userlogin") && !this.state.isValid) {
      // đổ dữ liệu từ localStorage lên
      const data = JSON.parse(localStorage.getItem("Userlogin"));
      return (
        <header className="position-fixed">
          <nav className="navbar navbar-expand-lg ">
            <NavLink className="navbar-brand" to="/">
              <img src={Logo} width={40} alt="logo" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <img src={IconMenu} width={25} alt="" />
            </button>
            <div
              className=" collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="nav-content navbar-nav mr-auto">
                <li className="nav-item active">
                  <Scroll.Link  style={{ cursor: "pointer" }}
                    to="lichchieu"
                    offset={-10}
                    smooth={true}
                    duration={1000}
                    className="nav-link">
                    Lịch chiếu
                  </Scroll.Link>
                </li>
                <li className="nav-item">
                  <Scroll.Link  style={{ cursor: "pointer" }}
                    to="cumrap"
                    offset={-50}
                    smooth={true}
                    duration={1000}
                    className="nav-link">
                    Cụm rạp
                  </Scroll.Link>
                </li>
                <li className="nav-item">
                  <Scroll.Link  style={{ cursor: "pointer" }}
                    to="tintuc"
                    offset={-30}
                    smooth={true}
                    duration={1000}
                    className="nav-link">
                    Tin tức
                  </Scroll.Link>
                </li>
                <li className="nav-item">
                  <Scroll.Link  style={{ cursor: "pointer" }}
                    to="ungdung"
                    offset={-70}
                    smooth={true}
                    duration={1000}
                    className="nav-link">
                    Ứng dụng
                  </Scroll.Link>
                </li>
              </ul>
              <div className="nav-login d-flex align-items-center mr-5">
                <div className="mr-2 pr-2 border-right d-flex align-items-center">
                  <NavLink className="d-flex align-items-center" to="/profile">
                    <img
                      src={AvatarUser}
                      width={30}
                      style={{ borderRadius: "50%", opacity: 1 }}
                      alt=""
                    />
                    <span className="ml-1" style={{ color: "#9b9b9b" }}>
                      {data.hoTen}
                    </span>
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to={window.location}
                    style={{ color: "#9b9b9b" }}
                    onClick={this.logOut}
                  >
                    Đăng xuất
                  </NavLink>
                </div>
              </div>
            </div>
          </nav>
        </header>
      );
    }
    return (
      <header className="position-fixed">
        <nav className="navbar navbar-expand-lg ">
          <NavLink exact className="navbar-brand" to="/">
            <img src={Logo} width={40} alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src={IconMenu} width={25} alt="" />
          </button>
          <div
            className=" collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="nav-content navbar-nav mr-auto">
              <li className="nav-item active">
              <Scroll.Link  style={{ cursor: "pointer" }}
                    to="lichchieu"
                    offset={-10}
                    smooth={true}
                    duration={1000}
                    className="nav-link">
                    Lịch chiếu
                  </Scroll.Link>
              </li>
              <li className="nav-item">
              <Scroll.Link  style={{ cursor: "pointer" }}
                    to="cumrap"
                    offset={-50}
                    smooth={true}
                    duration={1000}
                    className="nav-link">
                    Cụm rạp
                  </Scroll.Link>
              </li>
              <li className="nav-item">
              <Scroll.Link  style={{ cursor: "pointer" }}
                    to="tintuc"
                    offset={-30}
                    smooth={true}
                    duration={1000}
                    className="nav-link">
                    Tin tức
                  </Scroll.Link>
              </li>
              <li className="nav-item">
              <Scroll.Link  style={{ cursor: "pointer" }}
                    to="ungdung"
                    offset={-70}
                    smooth={true}
                    duration={1000}
                    className="nav-link">
                    Ứng dụng
                  </Scroll.Link>
              </li>
            </ul>
            <div className="nav-login d-flex align-items-center mr-5">
              <NavLink
                className="mr-2 pr-2 d-flex align-items-center border-right"
                to="/login"
              >
                <img src={Avatar} width={30} alt="" />
                <span>Đăng nhập</span>
              </NavLink>
              <NavLink to="/sign-up">
                <span>Đăng ký</span>
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default connect()(NavbarHome);
