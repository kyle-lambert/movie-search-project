import axios from "axios";

import {
  GET_POPULAR_TV_SUCCESS,
  GET_TOP_RATED_TV_SUCCESS,
  GET_ON_THE_AIR_TV_SUCCESS,
  GET_DAILY_TRENDING_TV_SUCCESS,
  GET_WEEKLY_TRENDING_TV_SUCCESS,
  GET_TV_GENRES_SUCCESS,
  GET_POPULAR_TV_LOADING,
  GET_TOP_RATED_TV_LOADING,
  GET_ON_THE_AIR_TV_LOADING,
  GET_DAILY_TRENDING_TV_LOADING,
  GET_WEEKLY_TRENDING_TV_LOADING,
  GET_TV_GENRES_LOADING,
  GET_POPULAR_TV_ERROR,
  GET_TOP_RATED_TV_ERROR,
  GET_ON_THE_AIR_TV_ERROR,
  GET_DAILY_TRENDING_TV_ERROR,
  GET_WEEKLY_TRENDING_TV_ERROR,
  GET_TV_GENRES_ERROR,
} from "../types";

const API_KEY = process.env.REACT_APP_API_KEY;

export const getPopularTv = () => {
  return (dispatch, getState) => {
    dispatch({ type: GET_POPULAR_TV_LOADING, payload: true });
    axios
      .get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`)
      .then((data) => {
        dispatch({
          type: GET_POPULAR_TV_SUCCESS,
          payload: data.data.results,
        });
        dispatch({
          type: GET_POPULAR_TV_LOADING,
          payload: false,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_POPULAR_TV_ERROR,
          payload: error,
        });
        dispatch({
          type: GET_POPULAR_TV_LOADING,
          payload: false,
        });
      });
  };
};

export const getTopRatedTv = () => {
  return (dispatch, getState) => {
    dispatch({ type: GET_TOP_RATED_TV_LOADING, payload: true });
    axios
      .get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`)
      .then((data) => {
        dispatch({
          type: GET_TOP_RATED_TV_SUCCESS,
          payload: data.data.results,
        });
        dispatch({
          type: GET_TOP_RATED_TV_LOADING,
          payload: false,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_TOP_RATED_TV_ERROR,
          payload: error,
        });
        dispatch({
          type: GET_TOP_RATED_TV_LOADING,
          payload: false,
        });
      });
  };
};

export const getOnTheAirTv = () => {
  return (dispatch, getState) => {
    dispatch({ type: GET_ON_THE_AIR_TV_LOADING, payload: true });
    axios
      .get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}`)
      .then((data) => {
        dispatch({
          type: GET_ON_THE_AIR_TV_SUCCESS,
          payload: data.data.results,
        });
        dispatch({
          type: GET_ON_THE_AIR_TV_LOADING,
          payload: false,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ON_THE_AIR_TV_ERROR,
          payload: error,
        });
        dispatch({
          type: GET_ON_THE_AIR_TV_LOADING,
          payload: false,
        });
      });
  };
};

export const getDailyTrendingTv = () => {
  return (dispatch, getState) => {
    dispatch({ type: GET_DAILY_TRENDING_TV_LOADING, payload: true });
    axios
      .get(`https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`)
      .then((data) => {
        dispatch({
          type: GET_DAILY_TRENDING_TV_SUCCESS,
          payload: data.data.results,
        });
        dispatch({
          type: GET_DAILY_TRENDING_TV_LOADING,
          payload: false,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_DAILY_TRENDING_TV_ERROR,
          payload: error,
        });
        dispatch({
          type: GET_DAILY_TRENDING_TV_LOADING,
          payload: false,
        });
      });
  };
};

export const getWeeklyTrendingTv = () => {
  return (dispatch, getState) => {
    dispatch({ type: GET_WEEKLY_TRENDING_TV_LOADING, payload: true });
    axios
      .get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`)
      .then((data) => {
        dispatch({
          type: GET_WEEKLY_TRENDING_TV_SUCCESS,
          payload: data.data.results,
        });
        dispatch({
          type: GET_WEEKLY_TRENDING_TV_LOADING,
          payload: false,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_WEEKLY_TRENDING_TV_ERROR,
          payload: error,
        });
        dispatch({
          type: GET_WEEKLY_TRENDING_TV_LOADING,
          payload: false,
        });
      });
  };
};

export const getTvGenres = () => {
  return (dispatch, getState) => {
    dispatch({ type: GET_TV_GENRES_LOADING, payload: true });
    axios
      .get(
        `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=en-US`
      )
      .then((data) => {
        dispatch({
          type: GET_TV_GENRES_SUCCESS,
          payload: data.data.genres,
        });
        dispatch({
          type: GET_TV_GENRES_LOADING,
          payload: false,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_TV_GENRES_ERROR,
          payload: error,
        });
        dispatch({
          type: GET_TV_GENRES_LOADING,
          payload: false,
        });
      });
  };
};
