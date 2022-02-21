import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import PageLoading from "../../../components/PageLoading";
import Logo from "../../../assets/web-logo.png";
import Avatar from "../../../assets/avatar-img.jpg";
import actFetchMaLichChieuFilmShowTime from "./modules/action";
import Screen from "../../../assets/Booking/screen.png";
import Countdown from "react-countdown";
import Swal from "sweetalert2";
import ListSeat from "../../../components/ListSeat";
import ATM from "../../../assets/Booking/ATM.png";
import VISA from "../../../assets/Booking/visa_mastercard.png";
import CASH from "../../../assets/Booking/cash.png";
import axios from "axios";

class BookingTicket extends Component {
  state = {
    listPhongVe: "",
  };

  static getDerivedStateFromProps(props, state) {
    if (props.listPhongVe !== state.listPhongVe) {
      return {
        listPhongVe: props.listPhongVe,
      };
    }
    return null;
  }

  //Rerender time-countdown
  renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return Swal.fire({
        title: "Đã hết thời gian giữ ghế!! Bạn có muốn đặt vé lại ?",

        showCancelButton: false,
        confirmButtonText: "Đặt vé lại",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    } else {
      // Render a countdown
      if (seconds < 10) {
        return (
          <p className="time__count__down mb-0">
            0{minutes}:0{seconds}
          </p>
        );
      }
      return (
        <p className="time__count__down mb-0">
          0{minutes}:{seconds}
        </p>
      );
    }
  };

  logout = () => {
    Swal.fire({
      icon: "question",
      title: "Bạn có muốn đăng xuất?",
      showCancelButton: true,
      confirmButtonText: "Đồng ý",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("Userlogin");
        localStorage.removeItem("Infouser");

        Swal.fire("Đăng xuất thành công", "", "success").then((res) => {
          if (res.isConfirmed) {
            window.location.reload();
          }
        });
      }
    });
  };

  // Render Danh sách ghế đang chọn
  renderListSeatCurrent = () => {
    return this.props.listSeatCurrent.map((item) => {
      return (
        <span className="text-danger" style={{ fontWeight: "bold" }}>
          {" "}
          {item.tenGhe + " "}
        </span>
      );
    });
  };

  handleBooking = () => {
    const user = JSON.parse(localStorage.getItem("Userlogin"));
    const infoTicket = {
      maLichChieu: this.props.match.params.maLC,
      danhSachVe: this.props.danhSachVe,
      taiKhoanNguoiDung: user.taiKhoan,
    };
    let accessToken = "";
    if (localStorage.getItem("Userlogin")) {
      accessToken = JSON.parse(localStorage.getItem("Userlogin")).accessToken;
    }
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
      method: "POST",
      data: infoTicket,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(() => {
        Swal.fire(
          "Đặt vé thành công",
          "Thông tin vé sẽ được gửi qua email",
          "success"
        ).then((res) => {
          if (res.isConfirmed) {
            this.props.history.replace("/");
            window.location.reload();
          }
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.response.data}`,
        });
      });
  };

  render() {
    const { listPhongVe } = this.state;
    const user = JSON.parse(localStorage.getItem("Userlogin"));
    if (this.props.loading) {
      return <PageLoading />;
    } else if (user) {
      return (
        <div className="position-relative booking__ticket__room ml-0 row">
          <div className="col-md-9 pl-0 pr-0">
            {/* Header */}
            <header className=" header__booking">
              <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                {/* Brand/logo */}
                <Link to="/" className="navbar-brand">
                  <img src={Logo} width={40} alt="logo" />
                </Link>
                <ul className="navbar-nav">
                  <li className="nav-item d-flex">
                    <div className="d-flex align-items-center select__seat mr-4">
                      <span>CHỌN GHẾ & THANH TOÁN</span>
                    </div>
                  </li>
                </ul>
                {/* </div> */}
                <div className="avatar">
                  <NavLink
                    className="d-flex align-items-center mr-2 pr-2 border-right"
                    to="/profile"
                  >
                    <img src={Avatar} width={30} alt="avatar" />
                    <span className="ml-3">{user.hoTen}</span>
                  </NavLink>
                  <NavLink
                    to={window.location}
                    className="d-block"
                    onClick={this.logout}
                  >
                    <span>Đăng xuất</span>
                  </NavLink>
                </div>
              </nav>
            </header>

            {/* MainBooking */}
            <section className="main__booking container">
              <section className="detail__movie pt-4  ">
                <div className="row">
                  {/* Info Phim  */}
                  <div className="col-lg-8 d-flex align-items-center">
                    <img
                      src={listPhongVe.thongTinPhim?.hinhAnh}
                      width={60}
                      height={60}
                      alt="hinh-anh-phim"
                    />
                    <div className="info__cinema ml-3">
                      <p className="mb-2">
                        {listPhongVe.thongTinPhim?.tenCumRap} -{" "}
                        <span>{listPhongVe.thongTinPhim?.tenRap}</span>
                      </p>
                      <p className="mb-0">{listPhongVe.thongTinPhim?.diaChi}</p>
                    </div>
                  </div>

                  {/* TimeCountdown */}
                  <div className="col-lg-4 text-center mt-2">
                    <span>Thời gian giữ ghế</span>
                    <Countdown
                      date={Date.now() + 90000}
                      renderer={this.renderer}
                    />
                  </div>
                </div>
              </section>
              <div className="mt-4 screen__img">
                <img src={Screen} alt="" />
              </div>

              {/* ListSeat */}
              <ListSeat data={listPhongVe} dispatch={this.props.dispatch} />

              {/* NoteSeat */}
              <div className="note__seat d-flex mt-3">
                <div className="seat__normal text-center mr-5">
                  <button className="btn btn-secondary mb-2"></button>
                  <p>Ghế thường</p>
                </div>
                <div className="seat__vip text-center mr-5">
                  <button className="btn mb-2"></button>
                  <p>Ghế VIP</p>
                </div>
                <div className="seat__isBooking text-center mr-5">
                  <button className="btn btn-success mb-2"></button>
                  <p>Ghế đang chọn</p>
                </div>
                <div className="seat__disabled text-center">
                  <button className="btn btn-secondary mb-2" disabled></button>
                  <p>Ghế đã được chọn</p>
                </div>
              </div>
            </section>
          </div>

          {/* Payment */}

          <section className="pay__section col-md-3">
            <div className="pay__item pt-4 text-center font-weight-bold">
              <h4>
                {this.props.totalAmount.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}
              </h4>
            </div>
            <div className="pay__item font-weight-bold">
              {listPhongVe.thongTinPhim?.tenPhim}
            </div>
            <div className="pay__item">
              <div class="row">
                <div className="col-5">Suất chiếu:</div>
                <div className="col-7 text-right font-weight-bold">
                  {listPhongVe.thongTinPhim?.ngayChieu +
                    " - " +
                    listPhongVe.thongTinPhim?.gioChieu}
                </div>
              </div>
            </div>
            <div className="pay__item">
              <div class="row">
                <div className="col-5">Cụm rạp:</div>
                <div className="col-7 text-right font-weight-bold">
                  {listPhongVe.thongTinPhim?.tenCumRap}
                </div>
              </div>
            </div>
            <div className="pay__item">
              <div class="row">
                <div className="col-5">Rạp:</div>
                <div className="col-7 text-right font-weight-bold">
                  {listPhongVe.thongTinPhim?.tenRap}
                </div>
              </div>
            </div>
            <div className="pay__item">
              <div class="row">
                {this.props.listSeatCurrent.length > 0 ? (
                  <div className="col-5">
                    Ghế đã đặt: {this.renderListSeatCurrent()}
                  </div>
                ) : (
                  <div className="col-5 text-danger">Vui lòng chọn ghế</div>
                )}
                <div
                  className="col-7 text-right font-weight-bold"
                  style={{ color: "greenyellow" }}
                >
                  {this.props.totalAmount.toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  })}
                </div>
              </div>
            </div>
            <div className="pay__item">
              <div class="row">
                <div className="col-5">Ưu đãi:</div>
                <div className="col-7 text-right font-weight-bold">0%</div>
              </div>
            </div>

            <div className="pay__item">
              Hình thức thanh toán :
              <div className="payments mt-2 mb-2">
                <input type="radio" name="howToPay" checked />
                <img className="ml-3 mr-2" src={ATM} width={40} alt="atm" />
                <span>Thẻ ATM nội địa</span>
              </div>
              <div className="payments mb-2">
                <input type="radio" name="howToPay" />
                <img className="ml-3 mr-2" src={VISA} width={40} alt="atm" />
                <span>Visa, Master, JCB</span>
              </div>
              <div className="payments" style={{ zIndex: 1 }}>
                <input type="radio" name="howToPay" />
                <img className="ml-3 mr-2" src={CASH} width={40} alt="atm" />
                <span>Thanh toán tiền mặt</span>
              </div>
            </div>
            <div className="mt-2 text-center pr-3">
              <p>
                Lưu ý (<span className="text-danger">*</span>): Vé đã mua không
                thể đổi hoặc hoàn tiền. Mã vé sẽ được gửi qua tin nhắn ZMS (tin
                nhắn Zalo) và Email đã nhập.
              </p>
            </div>
            {/* Đặt Vé Button */}
            <div className="pay__booking">
              {this.props.danhSachVe.length > 0 ? (
                <button className="btn" onClick={this.handleBooking}>
                  THANH TOÁN
                </button>
              ) : (
                <button className="btn" disabled>
                  THANH TOÁN
                </button>
              )}
            </div>
          </section>
        </div>
      );
    }
    return (window.location.href = "/");
  }
  componentDidMount() {
    const { maLC } = this.props.match.params;
    this.props.dispatch(actFetchMaLichChieuFilmShowTime(maLC));
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.fetchMaLichChieuReducer.loading,
    listPhongVe: state.fetchMaLichChieuReducer.data,
    totalAmount: state.chooseSeatReducer.totalAmount,
    listSeatCurrent: state.chooseSeatReducer.danhSachVeChon,
    danhSachVe: state.chooseSeatReducer.danhSachVe,
  };
};

export default connect(mapStateToProps)(BookingTicket);
