import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import ErrImg from "../../assets/404error.jpg";

class PageNotFound extends Component {
    render() {
        return (
            <div className="error-page">
               <img src={ErrImg} alt="error"/>
               <h3><b>Địa chỉ không hợp lệ</b></h3>
               <p>Địa chỉ URL bạn yêu cầu không tìm thấy trên sever.</p>
               <p>Có thể bạn gõ sai địa chỉ hoặc dữ liệu này đã bị xóa khỏi sever.</p>
               <NavLink className="back-home" exact to="/">Trở về trang chủ.</NavLink>
            </div>
        );
    }
}

export default PageNotFound;