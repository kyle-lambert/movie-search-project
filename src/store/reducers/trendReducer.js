import { GET_DAILY_TRENDING_MOVIES, GET_DAILY_TRENDING_TV } from "../types";

const initState = {
  movie_daily: [],
  tv_daily: [],
};

const trendReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_DAILY_TRENDING_MOVIES:
      return {
        ...state,
        movie_daily: action.payload,
      };
    case GET_DAILY_TRENDING_TV:
      return {
        ...state,
        tv_daily: action.payload,
      };
    default:
      return state;
  }
};

export default trendReducer;
