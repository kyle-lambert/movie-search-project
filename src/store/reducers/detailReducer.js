import {
  GET_MOVIE_DETAILS_SUCCESS,
  GET_TV_DETAILS_SUCCESS,
  GET_PERSON_DETAILS_SUCCESS,
} from "../types";

const initState = {
  movieDetails: null,
  tvDetails: null,
  personDetails: null,
};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movieDetails: action.payload,
      };
    case GET_TV_DETAILS_SUCCESS:
      return {
        ...state,
        tvDetails: action.payload,
      };
    case GET_PERSON_DETAILS_SUCCESS:
      return {
        ...state,
        personDetails: action.payload,
      };
    default:
      return state;
  }
};

export default detailReducer;
