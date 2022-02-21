import axios from "axios";
import * as type from "../modules/constants";
import Swal from "sweetalert2";

const fetchSignUp = (user, history) => {
  return (dispatch) => {
    dispatch(actSignUpRequest());
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data: user,
    })
      .then((res) => {
        dispatch(actSignUpSuccess(res.data));
        Swal.fire({
          icon: "success",
          title: "Đăng ký thành công",
          text: "Tới trang đăng nhập",
        }).then((result) => {
          if (result.isConfirmed) {
            history.replace("/login");
          }
        });
      })
      .catch((err) => {
        dispatch(actSignUpFailed(err));
        Swal.fire({
          icon: "error",
          title:'Đăng ký thất bại',
          text: err.response.data,
        });
      });
  };
};

const actSignUpRequest = () => {
  return {
    type: type.FECTH_SIGNUP_REQUEST,
  };
};

const actSignUpSuccess = (data) => {
  return {
    type: type.FECTH_SIGNUP_SUCCESS,
    payload: data,
  };
};

const actSignUpFailed = (err) => {
  return {
    type: type.FECTH_SIGNUP_FAILED,
    payload: err,
  };
};

export default fetchSignUp;
