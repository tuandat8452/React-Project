import axios from "axios";
import * as actType from "./constant";

const actFetchMaLichChieuFilmShowTime = (maLC) => {
    return (dispatch) => {
        dispatch(actFetchMaLichChieuFilmShowTimeRequest());
      axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLC}`,
        method: "GET",
      })
        .then((res) => {
          dispatch(actFetchMaLichChieuFilmShowTimeSuccess(res.data));
        })
        .catch((err) => {
          dispatch(actFetchMaLichChieuFilmShowTimeFailed(err));
        });
    };
  };

  const actFetchMaLichChieuFilmShowTimeRequest = () => {
      return {
          type: actType.FETCH_MALICHCHIEU_FILM_SHOWTIME_REQUEST
      }
  }

const actFetchMaLichChieuFilmShowTimeSuccess = (data) => {
    return {
      type: actType.FETCH_MALICHCHIEU_FILM_SHOWTIME_SUCCESS,
      payload : data,
    };
  };
  
  const actFetchMaLichChieuFilmShowTimeFailed = (err) => {
    return {
      type: actType.FETCH_MALICHCHIEU_FILM_SHOWTIME_FAILED,
      payload: err
    };
  };

  export default actFetchMaLichChieuFilmShowTime;