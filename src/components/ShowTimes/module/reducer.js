import {
  FETCH_LISTLOGO_SHOWTIME_SUCCESS, FETCH_LISTCINEMA_SHOWTIME_SUCCESS, FETCH_MAHETHONGRAP_LOGOSHOWTIME, FETCH_MACUMRAP_SHOWTIME, FETCH_LISTFILM_SHOWTIME,
} from "./constants";

const initialState = {
  listLogo: [],
  listCinema: [],
  listFilm: [],
  maHeThongRap: "BHDStar",
  maCumRap: "",


  loading: false,
  error: null,
}
export const ShowTimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LISTLOGO_SHOWTIME_SUCCESS:
      state.listLogo = action.data;
      return { ...state };
    case FETCH_LISTCINEMA_SHOWTIME_SUCCESS:
      state.listCinema = action.data;
      state.maCumRap = action.data[0].maCumRap;
      return { ...state };
    case FETCH_MAHETHONGRAP_LOGOSHOWTIME:
      state.maHeThongRap = action.maHT;
      return { ...state };
    case FETCH_MACUMRAP_SHOWTIME:
      state.maCumRap = action.maCR;
      return { ...state };
    case FETCH_LISTFILM_SHOWTIME:
      state.listFilm = action.data;
      return { ...state };
    default:
      return { ...state };
  }
}