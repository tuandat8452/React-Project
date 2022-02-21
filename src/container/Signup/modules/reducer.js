import * as actTypes from "../modules/constants";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case actTypes.FECTH_SIGNUP_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case actTypes.FECTH_SIGNUP_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case actTypes.FECTH_SIGNUP_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default signUpReducer;
