import axios from "axios";
import * as types from "../modules/constants";

const fecthDetailMovie = (id) => {
  return (dispacth) => {
    dispacth(actDetailRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
      method: "GET",
    })
      .then((res) => {
        setTimeout(() => {
          dispacth(actDetailSuccess(res.data));
        }, 2000);
      })
      .catch((err) => {
        dispacth(actDetailFailed(err));
      });
  };
};

const actDetailRequest = () => {
  return {
    type: types.FECTH_DETAIL_MOVIE_REQUEST,
  };
};

const actDetailSuccess = (data) => {
  return {
    type: types.FECTH_DETAIL_MOVIE_SUCCESS,
    payload: data,
  };
};

const actDetailFailed = (err) => {
  return {
    type: types.FECTH_DETAIL_MOVIE_FAILED,
    payload: err,
  };
};

export default fecthDetailMovie;
