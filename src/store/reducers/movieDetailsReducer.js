import {
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_LOADING,
  GET_MOVIE_DETAILS_ERROR,
  RESET_MOVIE_DETAILS,
} from "../types";

const initState = {
  results: [],
  loading: true,
  error: "",
};

const movieDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        results: action.payload,
      };
    case GET_MOVIE_DETAILS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_MOVIE_DETAILS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case RESET_MOVIE_DETAILS:
      return initState;
    default:
      return state;
  }
};

export default movieDetailsReducer;
