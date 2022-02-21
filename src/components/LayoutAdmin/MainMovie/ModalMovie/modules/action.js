import axios from "axios";
import Swal from "sweetalert2";
import * as actType from "./constant";

const actupdateMovie = (movie) => {
  return (dispatch) => {
    let accessToken = "";
    if (sessionStorage.getItem("Adminlogin")) {
      accessToken = JSON.parse(
        sessionStorage.getItem("Adminlogin")
      ).accessToken;
    }
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim",
      method: "POST",
      data: movie,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        dispatch(actUpdateMovieSuccess(res.data));
        Swal.fire("Cập nhật thành công", "", "success").then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      })
      .catch((err) => {
        dispatch(actUpdateMovieFailed(err));
        Swal.fire("Cập nhật thất bại", `${err.response.data}`, "error");
      });
  };
};

const actUpdateMovieSuccess = (movie) => {
  return {
    type: actType.UPDATE_MOVIE_SUCCESS,
    payload: movie,
  };
};

const actUpdateMovieFailed = (err) => {
  return {
    type: actType.UPDATE_MOVIE_FAILED,
    payload: err,
  };
};

export default actupdateMovie;
