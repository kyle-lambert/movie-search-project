import {
  GET_POPULAR_TV_SUCCESS,
  GET_TOP_RATED_TV_SUCCESS,
  GET_ON_THE_AIR_TV_SUCCESS,
  GET_DAILY_TRENDING_TV_SUCCESS,
  GET_WEEKLY_TRENDING_TV_SUCCESS,
  GET_TV_GENRES_SUCCESS,
} from "../types";

const initState = {
  popular: [],
  topRated: [],
  onTheAir: [],
  dailyTrending: [],
  weeklyTrending: [],
  genres: [],
};

const tvReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_POPULAR_TV_SUCCESS:
      return {
        ...state,
        popular: action.payload,
      };
    case GET_TOP_RATED_TV_SUCCESS:
      return {
        ...state,
        topRated: action.payload,
      };
    case GET_ON_THE_AIR_TV_SUCCESS:
      return {
        ...state,
        onTheAir: action.payload,
      };
    case GET_DAILY_TRENDING_TV_SUCCESS:
      return {
        ...state,
        dailyTrending: action.payload,
      };
    case GET_WEEKLY_TRENDING_TV_SUCCESS:
      return {
        ...state,
        weeklyTrending: action.payload,
      };
    case GET_TV_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload,
      };
    default:
      return state;
  }
};

export default tvReducer;
