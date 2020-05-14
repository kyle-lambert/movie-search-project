import {
  GET_TV_DETAILS_SUCCESS,
  GET_TV_DETAILS_LOADING,
  GET_TV_DETAILS_ERROR,
  RESET_TV_DETAILS,
} from "../types";

const initState = {
  data: null,
  loading: true,
  error: "",
};

const tvDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_TV_DETAILS_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case GET_TV_DETAILS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_TV_DETAILS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case RESET_TV_DETAILS:
      return initState;
    default:
      return state;
  }
};

export default tvDetailsReducer;
