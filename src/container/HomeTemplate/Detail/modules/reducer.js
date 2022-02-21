import * as actTypes from "../modules/constants";

const initialState = {
  loading: false,
  data: {},
  err : null,
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case actTypes.FECTH_DETAIL_MOVIE_REQUEST:
      state.loading = true;
      state.data = {};
      state.err = null;
      return { ...state };
    case actTypes.FECTH_DETAIL_MOVIE_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case actTypes.FECTH_DETAIL_MOVIE_FAILED:
      state.loading = false;
      state.data = {};
      state.err = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default detailReducer;
