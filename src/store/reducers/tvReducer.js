const initState = {
  popular: {
    results: [],
    networkError: null,
    isLoading: true,
  },
  onTheAir: {
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

const tvReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_POPULAR_TV":
      return {
        ...state,
        popular: {
          results: action.payload,
          networkError: false,
          isLoading: false,
        },
      };
    case "GET_ON_THE_AIR_TV":
      return {
        ...state,
        onTheAir: {
          results: action.payload,
          networkError: false,
          isLoading: false,
        },
      };
    case "GET_TOP_RATED_TV":
      return {
        ...state,
        topRated: {
          results: action.payload,
          networkError: false,
          isLoading: false,
        },
      };
    case "GET_POPULAR_TV_ERROR":
      return {
        ...state,
        popular: {
          results: [],
          networkError: true,
          isLoading: false,
        },
      };
    case "GET_ON_THE_AIR_TV_ERROR":
      return {
        ...state,
        onTheAir: {
          results: [],
          networkError: true,
          isLoading: false,
        },
      };
    case "GET_TOP_RATED_TV_ERROR":
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

export default tvReducer;
