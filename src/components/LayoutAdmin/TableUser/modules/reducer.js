import * as actTypes from "../modules/constant";

const initialState = {
  loading: false,
  listUser: [],
  err: null,

  infoUser:''
};

export const fetchListUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actTypes.FECTH_LIST_USER_REQUEST:
      return { ...state, loading: true };
    case actTypes.FECTH_LIST_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        listUser: action.payload,
      };

    case actTypes.FECTH_LIST_USER_FAILED:
      return { ...state, err: action.payload };
      case actTypes.FECTH_DETAIL_USER_SUCCESS:
        return { ...state, infoUser:action.payload};
        case actTypes.FECTH_DETAIL_USER_FAILED:
          return { ...state, err: action.payload};
    default:
      return { ...state };
  }
};




