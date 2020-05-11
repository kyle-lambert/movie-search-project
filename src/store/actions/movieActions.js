import axios from "axios";

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

const API_KEY = process.env.REACT_APP_API_KEY;

export const getPopularMovies = () => {
  return (dispatch, getState) => {
    dispatch({ type: GET_POPULAR_MOVIES_LOADING, payload: true });
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((data) => {
        dispatch({
          type: GET_POPULAR_MOVIES_SUCCESS,
          payload: data.data.results,
        });
        dispatch({
          type: GET_POPULAR_MOVIES_LOADING,
          payload: false,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_POPULAR_MOVIES_ERROR,
          payload: error,
        });
        dispatch({
          type: GET_POPULAR_MOVIES_LOADING,
          payload: false,
        });
      });
  };
};

export const getTopRatedMovies = () => {
  return (dispatch, getState) => {
    dispatch({ type: GET_TOP_RATED_MOVIES_LOADING, payload: true });
    axios
      .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
      .then((data) => {
        dispatch({
          type: GET_TOP_RATED_MOVIES_SUCCESS,
          payload: data.data.results,
        });
        dispatch({
          type: GET_TOP_RATED_MOVIES_LOADING,
          payload: false,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_TOP_RATED_MOVIES_ERROR,
          payload: error,
        });
        dispatch({
          type: GET_TOP_RATED_MOVIES_LOADING,
          payload: false,
        });
      });
  };
};

export const getNowPlayingMovies = () => {
  return (dispatch, getState) => {
    dispatch({ type: GET_NOW_PLAYING_MOVIES_LOADING, payload: true });
    axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
      .then((data) => {
        dispatch({
          type: GET_NOW_PLAYING_MOVIES_SUCCESS,
          payload: data.data.results,
        });
        dispatch({
          type: GET_NOW_PLAYING_MOVIES_LOADING,
          payload: false,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_NOW_PLAYING_MOVIES_ERROR,
          payload: error,
        });
        dispatch({
          type: GET_NOW_PLAYING_MOVIES_LOADING,
          payload: false,
        });
      });
  };
};

export const getDailyTrendingMovies = () => {
  return (dispatch, getState) => {
    dispatch({ type: GET_DAILY_TRENDING_MOVIES_LOADING, payload: true });
    setTimeout(() => {
      axios
        .get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
        )
        .then((data) => {
          dispatch({
            type: GET_DAILY_TRENDING_MOVIES_SUCCESS,
            payload: data.data.results,
          });
          dispatch({
            type: GET_DAILY_TRENDING_MOVIES_LOADING,
            payload: false,
          });
        })
        .catch((error) => {
          dispatch({
            type: GET_DAILY_TRENDING_MOVIES_ERROR,
            payload: error,
          });
          dispatch({
            type: GET_DAILY_TRENDING_MOVIES_LOADING,
            payload: false,
          });
        });
    }, 1500);
  };
};

export const getWeeklyTrendingMovies = () => {
  return (dispatch, getState) => {
    dispatch({ type: GET_WEEKLY_TRENDING_MOVIES_LOADING, payload: true });
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
      )
      .then((data) => {
        dispatch({
          type: GET_WEEKLY_TRENDING_MOVIES_SUCCESS,
          payload: data.data.results,
        });
        dispatch({
          type: GET_WEEKLY_TRENDING_MOVIES_LOADING,
          payload: false,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_WEEKLY_TRENDING_MOVIES_ERROR,
          payload: error,
        });
        dispatch({
          type: GET_WEEKLY_TRENDING_MOVIES_LOADING,
          payload: false,
        });
      });
  };
};
