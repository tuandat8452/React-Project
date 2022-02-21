import * as actTypes from "../modules/constant";
const initialState = {
    loading: false,
    data: [],
    err: null,
  };

  export const editUserReducer = (state = initialState, action ) => {
    switch (action.type) {
      case actTypes.EDIT_USER_SUCCESS:
        state.data = action.payload;
       return {...state};
       case actTypes.EDIT_USER_FAILED:
        state.err = action.payload;
       return {...state};
      default:
       return {...state}
    }
  }