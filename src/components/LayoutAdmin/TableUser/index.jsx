import { TablePagination } from "@material-ui/core";
import React, { Component } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router-dom";
import ModalUser from "./Modal";

class UserMain extends Component {
  state = {
    rowsPerPage: 10,
    page: 0,
    search: "",
    detailUser: "",
    edit: "",
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({
      rowsPerPage: parseInt(event.target.value, 10),
      page: 0,
    });
  };

  handlePageChange = (event, newPage) => {
    this.setState({
      page: newPage,
    });
  };

  deleteUser = (taiKhoan) => {
    Swal.fire({
      title: "Bạn có muốn xóa?",
      text: "Bạn sẽ không thể phục hồi sau khi xóa!",
      icon: "warning",
      confirmButtonText: "Đồng ý",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "green",
    }).then((result) => {
      if (result.isConfirmed) {
        let accessToken = "";
        if (sessionStorage.getItem("Adminlogin")) {
          accessToken = JSON.parse(
            sessionStorage.getItem("Adminlogin")
          ).accessToken;
        }
        axios({
          url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
          method: "DELETE",
          data: taiKhoan,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
          .then(() => {
            Swal.fire("Xóa tài khoản thành công!", "", "success").then(
              (res) => {
                if (res.isConfirmed) {
                  window.location.reload();
                }
              }
            );
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: `${error.response.data}`,
            });
          });
      }
    });
  };

  renderListUser = () => {
    const { listUser } = this.props;
    const { search, page, rowsPerPage } = this.state;
    const filteredName = listUser.filter((user) => {
      return user.taiKhoan.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    if (listUser && listUser.length > 0) {
      return filteredName
        .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
        .map((user, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.taiKhoan}</td>
              <td>{user.hoTen}</td>
              <td>{user.email}</td>
              <td>{user.soDt}</td>
              <td>{user.maLoaiNguoiDung}</td>
              <td>
                <div className="d-flex">
                  <i
                    style={{ cursor: "pointer", color: "blue" }}
                    class="fa fa-edit mr-2"
                    onClick={() => {
                      this.passData(user);
                    }}
                    data-toggle="modal"
                    data-target="#userModal"
                  ></i>
                  <i
                    style={{ cursor: "pointer", color: "red" }}
                    class="fa fa-trash-alt"
                    onClick={() => {
                      this.deleteUser(user.taiKhoan);
                    }}
                  ></i>
                </div>
              </td>
            </tr>
          );
        });
    }
  };

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  passData = (dataUser) => {
    this.setState(
      {
        detailUser: dataUser,
      },
     
    );
  };

  render() {
    return (
      <>
        <div className="d-flex align-items-center row content__top">
          <div className="col-lg-6 position-relative search">
            <i className="fa fa-search"></i>
            <input
              type="text"
              placeholder="Tìm kiếm người dùng..."
              onChange={this.handleSearch}
            />
          </div>
          <div className="text-right col-lg-6">
            <Link to="/add-user">
              <button className="btn btn-primary">
                <i className="fa fa-plus mr-2"></i>Thêm người dùng
              </button>
            </Link>
          </div>
        </div>
        <table className="table ">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tài khoản</th>
              <th>Họ và tên</th>
              <th>Email</th>
              <th>SĐT</th>
              <th>Mã loại người dùng</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderListUser()}</tbody>
        </table>
        <TablePagination
          component="div"
          count={this.props.listUser.length}
          onChangePage={this.handlePageChange}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
          page={this.state.page}
          rowsPerPage={this.state.rowsPerPage}
          rowsPerPageOptions={[10, 20, 50]}
        />
        <ModalUser detailUser={this.state.detailUser} dispatch={this.props.dispatch} />
      </>
    );
  }
  
}

export default UserMain;
