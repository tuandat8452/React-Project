import axios from "axios";
import * as actTypes from "../modules/constant";

export const fetchListUser = () => {
  return (dispatch) => {
    dispatch(actFetchListUserRequest());
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP05",
      method: "GET",
    })
      .then((res) => {
        setTimeout(() => {
          dispatch(actFetchListUserSuccess(res.data));
        }, 2000);
      
      })
      .catch((err) => {
        dispatch(actFetchListUserFailed(err));
      });
  };
};

const actFetchListUserRequest = () => {
  return {
    type: actTypes.FECTH_LIST_USER_REQUEST,
  };
};

const actFetchListUserSuccess = (data) => {
  return {
    type: actTypes.FECTH_LIST_USER_SUCCESS,
    payload: data,
  };
};

const actFetchListUserFailed = (err) => {
  return {
    type: actTypes.FECTH_LIST_USER_FAILED,
    payload: err,
  };
};

export const fecthDetailUser = (user) => {
  return (dispatch) => {
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      method: "POST",
      data: user,
    })
      .then((res) => {
        dispatch({
          type: actTypes.FECTH_DETAIL_USER_SUCCESS,
          payload: res.data,
        });
        localStorage.setItem("Infouser",JSON.stringify(res.data));
      })
      .catch((err) => {
        dispatch({
          type: actTypes.FECTH_DETAIL_USER_FAILED,
          payload: err,
        });
      });
  };
};
