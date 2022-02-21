import axios from "axios";
import Swal from "sweetalert2";
import * as actType from "./constant";

const addMovie = (movie, history) => {
  let accessToken = "";
  if (sessionStorage.getItem("Adminlogin")) {
    accessToken = JSON.parse(sessionStorage.getItem("Adminlogin")).accessToken;
  }
  return (dispatch) => {
    dispatch({
      type: actType.ADD_MOVIE_REQUEST,
    });
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim",
      method: "POST",
      data: movie,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        dispatch({
          type: actType.ADD_MOVIE_SUCCESS,
          payload: res.data,
        });
        Swal.fire("Thêm phim thành công", "", "success").then(
          (result) => {
            if (result.isConfirmed) {
              history.push("/movie-manager");
            }
          }
        );
      })
      .catch((err) => {
        dispatch({
          type: actType.ADD_MOVIE_FAILED,
          payload: err,
        });
        Swal.fire({
          icon: "error",
          title: "Thêm thất bại",
          text: `${err.response.data}`,
        });
      });
  };
};

export default addMovie;
