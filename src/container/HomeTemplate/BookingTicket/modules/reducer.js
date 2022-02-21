import * as actType from "./constant";

const initialState = {
  loading: false,
  data: {},
  err: null,
};

const fetchMaLichChieuReducer = (state = initialState, action) => {
  switch (action.type) {
    case actType.FETCH_MALICHCHIEU_FILM_SHOWTIME_REQUEST:
      return { ...state, loading: true };
    case actType.FETCH_MALICHCHIEU_FILM_SHOWTIME_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case actType.FETCH_MALICHCHIEU_FILM_SHOWTIME_FAILED:
      return { ...state, err: action.payload };
    default:
      return { ...state };
  }
};

export default fetchMaLichChieuReducer;
