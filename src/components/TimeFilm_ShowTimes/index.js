import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2';

function TimeFilmShowTime(props) {
  // console.log(props.Time);
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
  return (
    <div className="ml-4 my-2">
      <div className="thoiGianChieu px-3" onClick={() => handleClickFilmShowTime(props.Time.maLichChieu)}>
        <p><span>{new Date(props.Time.ngayChieuGioChieu).getHours()}:{new Date(props.Time.ngayChieuGioChieu).getMinutes()}</span><span className="time__end">~{new Date(props.Time.ngayChieuGioChieu).getHours() + 2}:{new Date(props.Time.ngayChieuGioChieu).getMinutes()}</span></p>
      </div>
    </div>
  )
}

// const mapDispatchToProps = dispatch => {
//   return {
//     handleClickMaLichChieu: (maLC) => {
//       dispatch(actFetchMaLichChieuFilmShowTime(maLC));
//     }
//   }
// }
export default connect()(TimeFilmShowTime);
