import {
  GET_PERSON_DETAILS_SUCCESS,
  GET_PERSON_DETAILS_LOADING,
  GET_PERSON_DETAILS_ERROR,
  RESET_PERSON_DETAILS,
} from "../types";

const initState = {
  data: null,
  loading: true,
  error: "",
};

const personDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PERSON_DETAILS_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case GET_PERSON_DETAILS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_PERSON_DETAILS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case RESET_PERSON_DETAILS:
      return initState;
    default:
      return state;
  }
};

export default personDetailsReducer;
