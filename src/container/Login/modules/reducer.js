import * as actTypes from "../modules/constants";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

const logInReducer = (state = initialState, action) => {
  switch (action.type) {
    case actTypes.FECTH_LOGIN_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case actTypes.FECTH_LOGIN_SUCCESS:
      // state.loading = false;
      // state.data = action.payload;
      // state.err = null;
      return { ...state, data: action.payload };
    case actTypes.FECTH_LOGIN_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default logInReducer;
