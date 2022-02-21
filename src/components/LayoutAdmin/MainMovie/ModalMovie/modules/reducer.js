import * as actType from "./constant";

const initialState = {
  movieUpdate: {},
  err: null,
};

const updateMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case actType.UPDATE_MOVIE_SUCCESS:
      return { ...state, movieUpdate: action.payload };
    case actType.UPDATE_MOVIE_FAILED:
      return { ...state, err: action.payload };

    default:
      return { ...state };
  }
};

export default updateMovieReducer;