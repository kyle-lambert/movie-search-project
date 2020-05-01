import {
  GET_POPULAR_MOVIES_SUCCESS,
  GET_TOP_RATED_MOVIES_SUCCESS,
  GET_NOW_PLAYING_MOVIES_SUCCESS,
  GET_DAILY_TRENDING_MOVIES_SUCCESS,
  GET_WEEKLY_TRENDING_MOVIES_SUCCESS,
  GET_MOVIE_GENRES_SUCCESS,
} from "../types";

const initState = {
  popular: [],
  topRated: [],
  nowPlaying: [],
  dailyTrending: [],
  weeklyTrending: [],
  genres: [],
};

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        popular: action.payload,
      };
    case GET_TOP_RATED_MOVIES_SUCCESS:
      return {
        ...state,
        topRated: action.payload,
      };
    case GET_NOW_PLAYING_MOVIES_SUCCESS:
      return {
        ...state,
        nowPlaying: action.payload,
      };
    case GET_DAILY_TRENDING_MOVIES_SUCCESS:
      return {
        ...state,
        dailyTrending: action.payload,
      };
    case GET_WEEKLY_TRENDING_MOVIES_SUCCESS:
      return {
        ...state,
        weeklyTrending: action.payload,
      };
    case GET_MOVIE_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
