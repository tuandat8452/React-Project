import * as actTypes from "../modules/constants";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actTypes.FECTH_AUTH_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case actTypes.FECTH_AUTH_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case actTypes.FECTH_AUTH_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default authReducer;
