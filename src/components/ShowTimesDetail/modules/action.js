import axios from "axios";
import * as actTypes from "../modules/constant";

const fecthShowTimeDetail = (id) => {
  return (dispatch) => {
    dispatch(actShowTimeDetailRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
      method: "GET",
    })
    .then(res => {
        dispatch(actShowTimeDetailSuccess(res.data));
    })
    .catch(err => {
        dispatch(actShowTimeDetailFailed(err));
    });
  };
};

const actShowTimeDetailRequest = () => {
  return {
    type: actTypes.FECTH_SHOWTIME_DETAIL_REQUEST,
  };
};
const actShowTimeDetailSuccess = (data) => {
  return {
    type: actTypes.FECTH_SHOWTIME_DETAIL_SUCCESS,
    payload: data,
  };
};
const actShowTimeDetailFailed = (err) => {
  return {
    type: actTypes.FECTH_SHOWTIME_DETAIL_FAILED,
    payload: err,
  };
};

export default fecthShowTimeDetail;
