import axios from "axios";

import { GET_DAILY_TRENDING_MOVIES, GET_DAILY_TRENDING_TV } from "../types";

const API_KEY = process.env.REACT_APP_API_KEY;

export const getDailyTrendingMovies = () => {
  return (dispatch, getState) => {
    axios
      .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then((data) => {
        dispatch({
          type: GET_DAILY_TRENDING_MOVIES,
          payload: data.data.results ? data.data.results : [],
        });
      })
      .catch((error) => console.log(error));
  };
};

export const getDailyTrendingTv = () => {
  return (dispatch, getState) => {
    axios
      .get(`https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`)
      .then((data) => {
        dispatch({
          type: GET_DAILY_TRENDING_TV,
          payload: data.data.results ? data.data.results : [],
        });
      })
      .catch((error) => console.log(error));
  };
};
