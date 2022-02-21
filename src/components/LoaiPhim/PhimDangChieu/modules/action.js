import axios from "axios";
import * as actType from "../modules/constants";

const fecthMovie = () => {
  return (dispatch) => {
    dispatch(actFecthMovieRequest());
    axios({
      url:"https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP10",
      method: "GET",
    })
      .then((res) => {
        setTimeout(() => {
          dispatch(actFechMovieSuccess(res.data));
        }, 2000);
      })
      .catch((err) => {
        dispatch(actFechMovieFailed(err));
      });
  };
};

const actFecthMovieRequest = () => {
  return {
    type: actType.FECTH_MOVIE_REQUEST,
  };
};

const actFechMovieSuccess = (data) => {
  return {
    type: actType.FECTH_MOVIE_SUCCESS,
    payload: data,
  };
};

const actFechMovieFailed = (err) => {
  return {
    type: actType.FECTH_MOVIE_FAILED,
    payload: err,
  };
};

export default fecthMovie;
