import * as actType from "./constant";

const initialState = {
  isLoading: false,
  data: null,
  err: null,
};

const addMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case actType.ADD_MOVIE_REQUEST:
      return { ...state, isLoading: true };
    case actType.ADD_MOVIE_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case actType.ADD_MOVIE_FAILED:
      return { ...state, err: action.payload };
    default:
      return { ...state };
  }
};

export default addMovieReducer;
