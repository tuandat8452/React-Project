import * as types from "../modules/constants";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

const fechMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FECTH_MOVIE_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case types.FECTH_MOVIE_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    case types.FECTH_MOVIE_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return {...state};

    default:
      return { ...state };
  }
};

export default fechMovieReducer;
