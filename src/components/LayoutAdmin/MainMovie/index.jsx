import { TablePagination } from "@material-ui/core";
import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import moment from "moment";
import "moment/locale/zh-cn";
import ModalMovie from "./ModalMovie";

class MainMovie extends Component {
  state = {
    searchMovie: "",
    rowsPerPage: 10,
    page: 0,
    infoMovie: ''
  };
  handleSearch = (e) => {
    this.setState({ searchMovie: e.target.value });
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

  deleteMovie = (maPhim) => {
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
          url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
          method: "DELETE",
          data: maPhim,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
          .then(() => {
            Swal.fire("Xóa phim thành công!", "", "success").then(
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

  getData =(movie) => {
    this.setState({
      infoMovie: movie,
    })
  }


  renderTableMovie = () => {
    const { searchMovie, page, rowsPerPage } = this.state;
    const { listMovie } = this.props;

    if (listMovie && listMovie.length > 0) {
      const filteredName = listMovie.filter((movie) => {
        return (
          movie.tenPhim.toLowerCase().indexOf(searchMovie.toLowerCase()) !== -1
        );
      });
      return filteredName
        ?.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
        .map((item) => (
          <>
            <tr key={item.maPhim}>
              <td width="100px">{item.maPhim}</td>
              <td width="120px">{item.tenPhim}</td>
              <td width="150px">
                <a href={item.trailer} data-lity>
                  [Xem trailer]
                </a>
              </td>
              <td width="60px">
                <img
                  style={{ borderRadius: 10 }}
                  src={item.hinhAnh}
                  width={80}
                  height={120}
                  alt={item.biDanh}
                />
              </td>
              <td width="450px">{item.moTa}</td>
              <td>
                {moment(item.ngayKhoiChieu).format("DD/MM/yyyy")}
              </td>
              <td>
                <div className="d-flex">
                  <i
                    style={{ cursor: "pointer", color: "blue" }}
                    class="fa fa-edit mr-2"
                    onClick={() => {
                      this.getData(item);
                    }}
                    data-toggle="modal"
                    data-target="#movieModal"
                  ></i>
                  <i
                    style={{ cursor: "pointer", color: "red" }}
                    class="fa fa-trash-alt"
                    onClick={() => {
                      this.deleteMovie(item.maPhim)
                    }}
                  ></i>
                </div>
              </td>
            </tr>
          </>
        ));
    }
  };

  render() {
    return (
      <>
        <div className="d-flex align-items-center row movie__top mb-3">
          <div className="col-lg-6 position-relative search">
            <i className="fa fa-search"></i>
            <input
              type="text"
              placeholder="Tìm kiếm phim..."
              onChange={this.handleSearch}
            />
          </div>
          <div className="text-right col-lg-6">
            <Link to="/add-movie">
              <button className="btn btn-primary">
                <i className="fa fa-plus mr-2"></i>Thêm phim
              </button>
            </Link>
          </div>
        </div>

        <table className="table table__movie">
          <thead>
            <tr>
              <th>Mã phim</th>
              <th>Tên phim</th>
              <th>Trailer</th>
              <th>Hình ảnh</th>
              <th>Mô tả</th>
              <th>Ngày khởi chiếu</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="body__list__movie">{this.renderTableMovie()}</tbody>
        </table>

        <TablePagination
          component="div"
          count={this.props.listMovie?.length}
          onChangePage={this.handlePageChange}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
          page={this.state.page}
          rowsPerPage={this.state.rowsPerPage}
          rowsPerPageOptions={[10, 20, 50]}
        />
        <ModalMovie infoMovie = {this.state.infoMovie} dispatch={this.props.dispatch} />
      </>
    );
  }
}

export default MainMovie;
