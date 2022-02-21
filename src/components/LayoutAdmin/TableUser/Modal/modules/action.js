import axios from "axios";
import Swal from "sweetalert2";
import * as actTypes from "../modules/constant";

export const editUser = (user) => {
    return (dispatch) => {
      let accessToken = "";
      if (sessionStorage.getItem("Adminlogin")) {
        accessToken = JSON.parse(
          sessionStorage.getItem("Adminlogin")
        ).accessToken;
      }
      axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
        method: "PUT",
        data: user,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => {
          dispatch(actEditUserSuccess(res.data));
          Swal.fire(
            'Cập nhật thành công',
            '',
            'success'
          ).then(result => {
            if(result.isConfirmed) {
              window.location.reload();
            }
          })
        })
        .catch((err) => {
          dispatch(actEditUserFailed(err));
          Swal.fire(
            'Lỗi',
            `${err.response.data}`,
            'error'
          )
        });
    };
  };
  
  const actEditUserSuccess = (data) => {
    return {
      type: actTypes.EDIT_USER_SUCCESS,
      payload: data,
    };
  };
  
  const actEditUserFailed = (err) => {
    return {
      type: actTypes.EDIT_USER_FAILED,
      payload: err,
    };
  };