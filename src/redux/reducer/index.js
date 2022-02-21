import { combineReducers } from "redux";
import fechMovieReducer from "../../components/LoaiPhim/PhimDangChieu/modules/reducer";
import fechMovieComingReducer from "../../components/LoaiPhim/PhimSapChieu/modules/reducer";
import logInReducer from "../../container/Login/modules/reducer";
import signUpReducer from "../../container/Signup/modules/reducer";
import authReducer from "../../container/Auth/modules/reducer";
import detailReducer from "../../container/HomeTemplate/Detail/modules/reducer";
import { ShowTimeReducer } from "../../components/ShowTimes/module/reducer";
import showTimeDetailReducer from "../../components/ShowTimesDetail/modules/reducer";
import { fetchListUserReducer } from "../../components/LayoutAdmin/TableUser/modules/reducer";
import addUserReducer from "../../container/AdminTemplate/AddUser/modules/reducer";
import { editUserReducer } from "../../components/LayoutAdmin/TableUser/Modal/modules/reducer";
import addMovieReducer from "../../container/AdminTemplate/AddMovie/modules/reducer";
import updateMovieReducer from "../../components/LayoutAdmin/MainMovie/ModalMovie/modules/reducer";
import fetchMaLichChieuReducer from "../../container/HomeTemplate/BookingTicket/modules/reducer";
import chooseSeatReducer from "../../components/SeatItem/modules/reducer";

const reducer = combineReducers({
  fechMovieReducer,
  fechMovieComingReducer,
  ShowTimeReducer,
  detailReducer,
  showTimeDetailReducer,
  logInReducer,
  signUpReducer,
  authReducer,
  updateMovieReducer,
  fetchListUserReducer,
  addUserReducer,
  editUserReducer,
  addMovieReducer,
  fetchMaLichChieuReducer,
  chooseSeatReducer,
});

export default reducer;
