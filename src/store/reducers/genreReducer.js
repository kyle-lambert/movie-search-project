import { GET_MOVIE_GENRES, GET_TV_GENRES } from "../types";

const initState = {
  movie: [],
  tv: [],
};

const genreReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_MOVIE_GENRES:
      return {
        ...state,
        movie: action.payload,
      };
    case GET_TV_GENRES:
      return {
        ...state,
        tv: action.payload,
      };
    default:
      return state;
  }
};

export default genreReducer;
