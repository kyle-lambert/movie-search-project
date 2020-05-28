import {
  GET_POPULAR_TV_SUCCESS,
  GET_TOP_RATED_TV_SUCCESS,
  GET_ON_THE_AIR_TV_SUCCESS,
  GET_DAILY_TRENDING_TV_SUCCESS,
  GET_WEEKLY_TRENDING_TV_SUCCESS,
  GET_POPULAR_TV_LOADING,
  GET_TOP_RATED_TV_LOADING,
  GET_ON_THE_AIR_TV_LOADING,
  GET_DAILY_TRENDING_TV_LOADING,
  GET_WEEKLY_TRENDING_TV_LOADING,
  GET_POPULAR_TV_ERROR,
  GET_TOP_RATED_TV_ERROR,
  GET_ON_THE_AIR_TV_ERROR,
  GET_DAILY_TRENDING_TV_ERROR,
  GET_WEEKLY_TRENDING_TV_ERROR,
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
  onTheAir: {
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

const tvReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_POPULAR_TV_SUCCESS:
      return {
        ...state,
        popular: {
          ...state.popular,
          data: action.payload,
        },
      };
    case GET_TOP_RATED_TV_SUCCESS:
      return {
        ...state,
        topRated: {
          ...state.topRated,
          data: action.payload,
        },
      };
    case GET_ON_THE_AIR_TV_SUCCESS:
      return {
        ...state,
        onTheAir: {
          ...state.onTheAir,
          data: action.payload,
        },
      };
    case GET_DAILY_TRENDING_TV_SUCCESS:
      return {
        ...state,
        dailyTrending: {
          ...state.dailyTrending,
          data: action.payload,
        },
      };
    case GET_WEEKLY_TRENDING_TV_SUCCESS:
      return {
        ...state,
        weeklyTrending: {
          ...state.weeklyTrending,
          data: action.payload,
        },
      };
    case GET_POPULAR_TV_LOADING:
      return {
        ...state,
        popular: {
          ...state.popular,
          loading: action.payload,
        },
      };
    case GET_TOP_RATED_TV_LOADING:
      return {
        ...state,
        topRated: {
          ...state.topRated,
          loading: action.payload,
        },
      };
    case GET_ON_THE_AIR_TV_LOADING:
      return {
        ...state,
        onTheAir: {
          ...state.onTheAir,
          loading: action.payload,
        },
      };
    case GET_DAILY_TRENDING_TV_LOADING:
      return {
        ...state,
        dailyTrending: {
          ...state.dailyTrending,
          loading: action.payload,
        },
      };
    case GET_WEEKLY_TRENDING_TV_LOADING:
      return {
        ...state,
        weeklyTrending: {
          ...state.weeklyTrending,
          loading: action.payload,
        },
      };
    case GET_POPULAR_TV_ERROR:
      return {
        ...state,
        popular: {
          ...state.popular,
          error: action.payload,
        },
      };
    case GET_TOP_RATED_TV_ERROR:
      return {
        ...state,
        topRated: {
          ...state.topRated,
          error: action.payload,
        },
      };
    case GET_ON_THE_AIR_TV_ERROR:
      return {
        ...state,
        onTheAir: {
          ...state.onTheAir,
          error: action.payload,
        },
      };
    case GET_DAILY_TRENDING_TV_ERROR:
      return {
        ...state,
        dailyTrending: {
          ...state.dailyTrending,
          error: action.payload,
        },
      };
    case GET_WEEKLY_TRENDING_TV_ERROR:
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

export default tvReducer;
