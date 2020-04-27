import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

export const getPopularTV = () => {
  return (dispatch, getState) => {
    axios
      .get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`)
      .then((data) => {
        dispatch({
          type: "GET_POPULAR_TV",
          payload: data.data.results,
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_POPULAR_TV_ERROR",
          payload: true,
        });
      });
  };
};

export const getOnTheAirTV = () => {
  return (dispatch, getState) => {
    axios
      .get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}`)
      .then((data) => {
        dispatch({
          type: "GET_ON_THE_AIR_TV",
          payload: data.data.results,
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_ON_THE_AIR_ERROR",
          payload: true,
        });
      });
  };
};

export const getTopRatedTV = () => {
  return (dispatch, getState) => {
    axios
      .get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`)
      .then((data) => {
        dispatch({
          type: "GET_TOP_RATED_TV",
          payload: data.data.results,
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_TOP_RATED_TV_ERROR",
          payload: true,
        });
      });
  };
};
