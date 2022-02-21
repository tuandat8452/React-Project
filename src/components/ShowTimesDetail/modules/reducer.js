import * as actType from "../modules/constant";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

const showTimeDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case actType.FECTH_SHOWTIME_DETAIL_REQUEST:
      return { ...state, loading: true };

    case actType.FECTH_SHOWTIME_DETAIL_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case actType.FECTH_SHOWTIME_DETAIL_FAILED:
      return { ...state, err: action.payload };

    default:
      return { ...state };
  }
};

export default showTimeDetailReducer;
