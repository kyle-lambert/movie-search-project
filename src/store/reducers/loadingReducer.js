import {
  GET_POPULAR_MOVIES_LOADING,
  GET_TOP_RATED_MOVIES_LOADING,
  GET_NOW_PLAYING_MOVIES_LOADING,
  GET_DAILY_TRENDING_MOVIES_LOADING,
  GET_WEEKLY_TRENDING_MOVIES_LOADING,
  GET_MOVIE_GENRES_LOADING,
  GET_POPULAR_TV_LOADING,
  GET_TOP_RATED_TV_LOADING,
  GET_ON_THE_AIR_TV_LOADING,
  GET_DAILY_TRENDING_TV_LOADING,
  GET_WEEKLY_TRENDING_TV_LOADING,
  GET_TV_GENRES_LOADING,
} from "../types";

const initState = {
  popularMoviesLoading: false,
  topRatedMoviesLoading: false,
  nowPlayingMoviesLoading: false,
  dailyTrendingMoviesLoading: false,
  weeklyTrendingMoviesLoading: false,
  movieGenresLoading: false,
  popularTvLoading: false,
  topRatedTvLoading: false,
  onTheAirTvLoading: false,
  dailyTrendingTvLoading: false,
  weeklyTrendingTvLoading: false,
  tvGenresLoading: false,
};

const loadingReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_POPULAR_MOVIES_LOADING:
      return {
        ...state,
        popularMoviesLoading: action.payload,
      };
    case GET_TOP_RATED_MOVIES_LOADING:
      return {
        ...state,
        topRatedMoviesLoading: action.payload,
      };
    case GET_NOW_PLAYING_MOVIES_LOADING:
      return {
        ...state,
        nowPlayingMoviesLoading: action.payload,
      };
    case GET_DAILY_TRENDING_MOVIES_LOADING:
      return {
        ...state,
        dailyTrendingMoviesLoading: action.payload,
      };
    case GET_WEEKLY_TRENDING_MOVIES_LOADING:
      return {
        ...state,
        weeklyTrendingMoviesLoading: action.payload,
      };
    case GET_MOVIE_GENRES_LOADING:
      return {
        ...state,
        movieGenresLoading: action.payload,
      };
    case GET_POPULAR_TV_LOADING:
      return {
        ...state,
        popularTvLoading: action.payload,
      };
    case GET_TOP_RATED_TV_LOADING:
      return {
        ...state,
        topRatedTvLoading: action.payload,
      };
    case GET_ON_THE_AIR_TV_LOADING:
      return {
        ...state,
        onTheAirTvLoading: action.payload,
      };
    case GET_DAILY_TRENDING_TV_LOADING:
      return {
        ...state,
        dailyTrendingTvLoading: action.payload,
      };
    case GET_WEEKLY_TRENDING_TV_LOADING:
      return {
        ...state,
        weeklyTrendingTvLoading: action.payload,
      };
    case GET_TV_GENRES_LOADING:
      return {
        ...state,
        tvGenresLoading: action.payload,
      };
    default:
      return state;
  }
};

export default loadingReducer;
