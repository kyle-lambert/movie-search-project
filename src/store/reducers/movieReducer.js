const initState = {
  popular: {
    results: [],
    networkError: null,
    isLoading: true,
  },
  nowPlaying: {
    results: [],
    networkError: null,
    isLoading: true,
  },
  topRated: {
    results: [],
    networkError: null,
    isLoading: true,
  },
};

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_POPULAR_MOVIES":
      return {
        ...state,
        popular: {
          results: action.payload,
          networkError: false,
          isLoading: false,
        },
      };
    case "GET_POPULAR_MOVIES_ERROR":
      return {
        ...state,
        popular: {
          results: [],
          networkError: true,
          isLoading: false,
        },
      };

    case "GET_NOW_PLAYING_MOVIES":
      return {
        ...state,
        nowPlaying: {
          results: action.payload,
          networkError: false,
          isLoading: false,
        },
      };
    case "GET_NOW_PLAYING_MOVIES_ERROR":
      return {
        ...state,
        nowPlaying: {
          results: [],
          networkError: true,
          isLoading: false,
        },
      };

    case "GET_TOP_RATED_MOVIES":
      return {
        ...state,
        topRated: {
          results: action.payload,
          networkError: false,
          isLoading: false,
        },
      };
    case "GET_TOP_RATED_MOVIES_ERROR":
      return {
        ...state,
        topRated: {
          results: [],
          networkError: true,
          isLoading: false,
        },
      };

    default:
      return state;
  }
};

export default movieReducer;
