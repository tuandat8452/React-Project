import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

function TimeFilmDetail(props) {
  let history = useHistory();
  const handleClickFilmShowTime = (maLichChieu) => {
    if (localStorage.getItem("Userlogin")) {
      history.push({ pathname: `/booking-ticket/${maLichChieu}` });
    } else {
      Swal.fire({
        text: "Bạn cần phải đăng nhập",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Đăng nhập'
      }).then((result) => {
        if (result.isConfirmed) {
          history.push({pathname:"/login"})
        }
      })
    }
  };
  const renderTimeFilm = () =>
//   console.log(props.data);
    props.data.lichChieuPhim.map((item, index) => {
      if (index <= 5) {
        return (
          <div className="col-lg-4 col-md-4 col-sm-6 mb-3 ">
            <div
              className="time-film-detail-item"
              onClick={() => handleClickFilmShowTime(item.maLichChieu)}
            >
              <span className="time-start">
                {new Date(item.ngayChieuGioChieu).getHours() +
                  ":" +
                  new Date(item.ngayChieuGioChieu).getMinutes()}
              </span>
              <span className="time-end">
                ~
                {new Date(item.ngayChieuGioChieu).getHours() +
                  2 +
                  ":" +
                  new Date(item.ngayChieuGioChieu).getMinutes()}
              </span>
            </div>
          </div>
        );
      }
    });

  return (
    <div className="row mb-2 time-film-detail">{renderTimeFilm()}</div>
  );
}



export default connect()(TimeFilmDetail);
