import {
  GET_POPULAR_MOVIES_SUCCESS,
  GET_TOP_RATED_MOVIES_SUCCESS,
  GET_NOW_PLAYING_MOVIES_SUCCESS,
  GET_DAILY_TRENDING_MOVIES_SUCCESS,
  GET_WEEKLY_TRENDING_MOVIES_SUCCESS,
  GET_POPULAR_MOVIES_LOADING,
  GET_TOP_RATED_MOVIES_LOADING,
  GET_NOW_PLAYING_MOVIES_LOADING,
  GET_DAILY_TRENDING_MOVIES_LOADING,
  GET_WEEKLY_TRENDING_MOVIES_LOADING,
  GET_POPULAR_MOVIES_ERROR,
  GET_TOP_RATED_MOVIES_ERROR,
  GET_NOW_PLAYING_MOVIES_ERROR,
  GET_DAILY_TRENDING_MOVIES_ERROR,
  GET_WEEKLY_TRENDING_MOVIES_ERROR,
} from "../types";

const initState = {
  popular: {
    loading: true,
    data: null,
    error: "",
  },
  topRated: {
    loading: true,
    data: null,
    error: "",
  },
  nowPlaying: {
    loading: true,
    data: null,
    error: "",
  },
  dailyTrending: {
    loading: true,
    data: null,
    error: "",
  },
  weeklyTrending: {
    loading: true,
    data: null,
    error: "",
  },
};

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        popular: {
          ...state.popular,
          data: action.payload,
        },
      };
    case GET_TOP_RATED_MOVIES_SUCCESS:
      return {
        ...state,
        topRated: {
          ...state.topRated,
          data: action.payload,
        },
      };
    case GET_NOW_PLAYING_MOVIES_SUCCESS:
      return {
        ...state,
        nowPlaying: {
          ...state.nowPlaying,
          data: action.payload,
        },
      };
    case GET_DAILY_TRENDING_MOVIES_SUCCESS:
      return {
        ...state,
        dailyTrending: {
          ...state.dailyTrending,
          data: action.payload,
        },
      };
    case GET_WEEKLY_TRENDING_MOVIES_SUCCESS:
      return {
        ...state,
        weeklyTrending: {
          ...state.weeklyTrending,
          data: action.payload,
        },
      };
    case GET_POPULAR_MOVIES_LOADING:
      return {
        ...state,
        popular: {
          ...state.popular,
          loading: action.payload,
        },
      };
    case GET_TOP_RATED_MOVIES_LOADING:
      return {
        ...state,
        topRated: {
          ...state.topRated,
          loading: action.payload,
        },
      };
    case GET_NOW_PLAYING_MOVIES_LOADING:
      return {
        ...state,
        nowPlaying: {
          ...state.nowPlaying,
          loading: action.payload,
        },
      };
    case GET_DAILY_TRENDING_MOVIES_LOADING:
      return {
        ...state,
        dailyTrending: {
          ...state.dailyTrending,
          loading: action.payload,
        },
      };
    case GET_WEEKLY_TRENDING_MOVIES_LOADING:
      return {
        ...state,
        weeklyTrending: {
          ...state.weeklyTrending,
          loading: action.payload,
        },
      };
    case GET_POPULAR_MOVIES_ERROR:
      return {
        ...state,
        popular: {
          ...state.popular,
          error: action.payload,
        },
      };
    case GET_TOP_RATED_MOVIES_ERROR:
      return {
        ...state,
        topRated: {
          ...state.topRated,
          error: action.payload,
        },
      };
    case GET_NOW_PLAYING_MOVIES_ERROR:
      return {
        ...state,
        nowPlaying: {
          ...state.nowPlaying,
          error: action.payload,
        },
      };
    case GET_DAILY_TRENDING_MOVIES_ERROR:
      return {
        ...state,
        dailyTrending: {
          ...state.dailyTrending,
          error: action.payload,
        },
      };
    case GET_WEEKLY_TRENDING_MOVIES_ERROR:
      return {
        ...state,
        weeklyTrending: {
          ...state.weeklyTrending,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default movieReducer;
