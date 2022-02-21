import React, { Component } from "react";
import Slide from "react-reveal/Slide";

class Infomation extends Component {
  render() {
    const infoUser = JSON.parse(localStorage.getItem("Infouser"));
    return (
      <Slide top>
        <form className="show__infomation">
          <div className="form-group">
            <span>Tài khoản</span>
            <input type="text" defaultValue={infoUser.taiKhoan} disabled />
          </div>
          <div className="form-group">
            <span>Mật khẩu</span>
            <input type="password" defaultValue={infoUser.matKhau} disabled />
          </div>
          <div className="form-group">
            <span>Họ tên</span>
            <input type="text" defaultValue={infoUser.hoTen} disabled />
          </div>
          <div className="form-group">
            <span>Email</span>
            <input type="email" defaultValue={infoUser.email} disabled />
          </div>
          <div className="form-group">
            <span>Số điện thoại</span>
            <input type="text" defaultValue={infoUser.soDT} disabled />
          </div>
        </form>
      </Slide>
    );
  }
}

export default Infomation;
