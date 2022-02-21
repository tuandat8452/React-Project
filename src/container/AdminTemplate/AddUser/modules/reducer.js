import * as actTypes from "./constant";

const initialState = {
  isLoading: false,
  data: null,
  err: null,
};
const addUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actTypes.ADD_USER_REQUEST:
      return { ...state, isLoading: true };
    case actTypes.ADD_USER_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case actTypes.ADD_USER_FAILED:
     
      return { ...state, err: action.payload };
    default:
      return { ...state };
  }
};

export default addUserReducer;
