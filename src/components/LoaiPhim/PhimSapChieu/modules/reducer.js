import * as types from "../modules/constants";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

const fechMovieComingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FECTH_MOVIE_COMING_SOON_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case types.FECTH_MOVIE_COMING_SOON_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    case types.FECTH_MOVIE_COMING_SOON_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return {...state};

    default:
      return { ...state };
  }
};

export default fechMovieComingReducer;
