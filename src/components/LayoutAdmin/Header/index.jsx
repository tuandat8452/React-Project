import React, { Component } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Logo from "../../../assets/Dashboard/logo.png";

class HeaderDashboard extends Component {
  handleLogout = () => {
    Swal.fire({
      title: "Bạn có chắc muốn đăng xuất?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đăng xuất",
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem("Adminlogin");
        Swal.fire("Đã đăng xuất!", "", "success").then((res) => {
          if (res.isConfirmed) {
            window.location.reload();
          }
        });
      }
    });
  };
  render() {
    // const accountAdmin = JSON.parse(sessionStorage.getItem("Adminlogin"));
    return (
      <header className="header__admin">
        <Link to="/dashboard">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="user__logout" onClick={this.handleLogout}>
          <i class="fa fa-sign-out-alt"></i>
        </div>
      </header>
    );
  }
}

export default HeaderDashboard;
