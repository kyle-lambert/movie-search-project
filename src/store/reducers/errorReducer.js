import {
  GET_POPULAR_MOVIES_ERROR,
  GET_TOP_RATED_MOVIES_ERROR,
  GET_NOW_PLAYING_MOVIES_ERROR,
  GET_DAILY_TRENDING_MOVIES_ERROR,
  GET_WEEKLY_TRENDING_MOVIES_ERROR,
  GET_MOVIE_GENRES_ERROR,
  GET_POPULAR_TV_ERROR,
  GET_TOP_RATED_TV_ERROR,
  GET_ON_THE_AIR_TV_ERROR,
  GET_DAILY_TRENDING_TV_ERROR,
  GET_WEEKLY_TRENDING_TV_ERROR,
  GET_TV_GENRES_ERROR,
  GET_MOVIE_DETAILS_ERROR,
  GET_TV_DETAILS_ERROR,
  GET_PERSON_DETAILS_ERROR,
} from "../types";

const initState = {
  popularMoviesError: "",
  topRatedMoviesError: "",
  nowPlayingMoviesError: "",
  dailyTrendingMoviesError: "",
  weeklyTrendingMoviesError: "",
  movieGenresError: "",
  popularTvError: "",
  topRatedTvError: "",
  onTheAirTvError: "",
  dailyTrendingTvError: "",
  weeklyTrendingTvError: "",
  tvGenresError: "",
  movieDetailsError: "",
  tvDetailsError: "",
  personDetailsError: "",
};

const errorReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_POPULAR_MOVIES_ERROR:
      return {
        ...state,
        popularMoviesError: action.payload,
      };
    case GET_TOP_RATED_MOVIES_ERROR:
      return {
        ...state,
        topRatedMoviesError: action.payload,
      };
    case GET_NOW_PLAYING_MOVIES_ERROR:
      return {
        ...state,
        nowPlayingMoviesError: action.payload,
      };
    case GET_DAILY_TRENDING_MOVIES_ERROR:
      return {
        ...state,
        dailyTrendingMoviesError: action.payload,
      };
    case GET_WEEKLY_TRENDING_MOVIES_ERROR:
      return {
        ...state,
        weeklyTrendingMoviesError: action.payload,
      };
    case GET_MOVIE_GENRES_ERROR:
      return {
        ...state,
        movieGenresError: action.payload,
      };
    case GET_POPULAR_TV_ERROR:
      return {
        ...state,
        popularTvError: action.payload,
      };
    case GET_TOP_RATED_TV_ERROR:
      return {
        ...state,
        topRatedTvError: action.payload,
      };
    case GET_ON_THE_AIR_TV_ERROR:
      return {
        ...state,
        onTheAirTvError: action.payload,
      };
    case GET_DAILY_TRENDING_TV_ERROR:
      return {
        ...state,
        dailyTrendingTvError: action.payload,
      };
    case GET_WEEKLY_TRENDING_TV_ERROR:
      return {
        ...state,
        weeklyTrendingTvError: action.payload,
      };
    case GET_TV_GENRES_ERROR:
      return {
        ...state,
        tvGenresError: action.payload,
      };
    case GET_MOVIE_DETAILS_ERROR:
      return {
        ...state,
        movieDetailsError: action.payload,
      };
    case GET_TV_DETAILS_ERROR:
      return {
        ...state,
        tvDetailsError: action.payload,
      };
    case GET_PERSON_DETAILS_ERROR:
      return {
        ...state,
        personDetailsError: action.payload,
      };

    default:
      return state;
  }
};

export default errorReducer;
