import axios from "axios";
import Swal from "sweetalert2";
import * as actTypes from "./constant";

const actAddUser = (user,history) => {
    let accessToken = "";
    if (sessionStorage.getItem("Adminlogin")) {
        accessToken = JSON.parse(
          sessionStorage.getItem("Adminlogin")
        ).accessToken;
      }
    return (dispatch) => {
        dispatch(actAddUserRequest());
        axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung',
            method:'POST',
            data:user,
            headers : {
                Authorization: `Bearer ${accessToken}`,
            }
        })
        .then(res => {
            dispatch(actAddUserSuccess(res.data));
            Swal.fire(
                'Thêm người dùng thành công',
                '',
                'success'
              ).then(result => {if(result.isConfirmed){history.push('/user-manager')}})
        })
        .catch(err => {
            dispatch(actAddUserFailed(err));
            Swal.fire({
                icon: 'error',
                title: 'Không thành công',
                text: `${err.response.data}`,
              })
        })
    }
}

const actAddUserRequest = () => {
    return {
        type: actTypes.ADD_USER_REQUEST
    }
}

const actAddUserSuccess = (user) => {
    return {
        type : actTypes.ADD_USER_SUCCESS,
        payload: user
    }
}

const actAddUserFailed = err =>{
    return {
        type: actTypes.ADD_USER_FAILED,
        payload: err
    }
}

export default actAddUser;

