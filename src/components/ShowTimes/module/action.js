
import Axios from "axios";

import {
  FETCH_LISTLOGO_SHOWTIME_SUCCESS,
  FETCH_LISTCINEMA_SHOWTIME_SUCCESS,
  FETCH_MAHETHONGRAP_LOGOSHOWTIME,
  FETCH_MACUMRAP_SHOWTIME,
  FETCH_LISTFILM_SHOWTIME,

} from "./constants";

export const actFetchListLogoShowTime = () => {
  return (dispatch) => {
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
      method: "GET",
    })
      .then((result) => {
        dispatch(fetchListLogoShowTimeSuccess(result.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const actFetchListCinemaShowTime = (maheThong) => {
  return (dispatch) => {
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maheThong}`,
      method: "GET",
    })
      .then((result) => {
        dispatch(fetchListCinemaShowTimeSuccess(result.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const actFetchListFilmShowTime = (maHT) => {
  return (dispatch) => {
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHT}&maNhom=GP01`,
      method: "GET",
    })
      .then((result) => {
        dispatch(fetchListFilmShowTimeSuccess(result.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};



export const actFetchMaHeThongShowTime = (maHT) => {
  return {
    type: FETCH_MAHETHONGRAP_LOGOSHOWTIME,
    maHT,
  };
};

export const actFetchMaCumRapShowTime = (maCR) => {
  return {
    type: FETCH_MACUMRAP_SHOWTIME,
    maCR,
  };
};



const fetchListLogoShowTimeSuccess = (data) => {
  return {
    type: FETCH_LISTLOGO_SHOWTIME_SUCCESS,
    data,
  };
};

const fetchListCinemaShowTimeSuccess = (data) => {
  return {
    type: FETCH_LISTCINEMA_SHOWTIME_SUCCESS,
    data,
  };
};
const fetchListFilmShowTimeSuccess = (data) => {
  return {
    type: FETCH_LISTFILM_SHOWTIME,
    data,
  };
};
