import axios from "axios";
import * as actType from "../modules/constants";

const fecthMovieComing = () => {
  return (dispatch) => {
    dispatch(actFecthMovieComingRequest());
    axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP08",
      method: "GET",
    })
      .then((res) => {
        dispatch(actFechMovieComingSuccess(res.data));
      })
      .catch((err) => {
        dispatch(actFechMovieComingFailed(err));
      });
  };
};

const actFecthMovieComingRequest = () => {
  return {
    type: actType.FECTH_MOVIE_COMING_SOON_REQUEST,
  };
};

const actFechMovieComingSuccess = (data) => {
  return {
    type: actType.FECTH_MOVIE_COMING_SOON_SUCCESS,
    payload: data,
  };
};

const actFechMovieComingFailed = (err) => {
  return {
    type: actType.FECTH_MOVIE_COMING_SOON_FAILED,
    payload: err,
  };
};

export default fecthMovieComing;
