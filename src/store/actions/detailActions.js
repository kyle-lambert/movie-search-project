import axios from "axios";

import {
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_LOADING,
  GET_MOVIE_DETAILS_ERROR,
  GET_TV_DETAILS_SUCCESS,
  GET_TV_DETAILS_LOADING,
  GET_TV_DETAILS_ERROR,
  GET_PERSON_DETAILS_SUCCESS,
  GET_PERSON_DETAILS_LOADING,
  GET_PERSON_DETAILS_ERROR,
} from "../types";

const API_KEY = process.env.REACT_APP_API_KEY;

export const getMovieDetails = (movieId) => {
  return (dispatch, getState) => {
    dispatch({
      type: GET_MOVIE_DETAILS_LOADING,
      payload: true,
    });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
      )
      .then((data) => {
        dispatch({
          type: GET_MOVIE_DETAILS_SUCCESS,
          payload: data.data,
        });
        dispatch({
          type: GET_MOVIE_DETAILS_LOADING,
          payload: false,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_MOVIE_DETAILS_ERROR,
          payload: error,
        });
        dispatch({
          type: GET_MOVIE_DETAILS_LOADING,
          payload: false,
        });
      });
  };
};

export const getTvDetails = (tvId) => {
  return (dispatch, getState) => {
    dispatch({
      type: GET_TV_DETAILS_LOADING,
      payload: true,
    });
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${tvId}?api_key=${API_KEY}&language=en-US`
      )
      .then((data) => {
        dispatch({
          type: GET_TV_DETAILS_SUCCESS,
          payload: data.data,
        });
        dispatch({
          type: GET_TV_DETAILS_LOADING,
          payload: false,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_TV_DETAILS_ERROR,
          payload: error,
        });
        dispatch({
          type: GET_TV_DETAILS_LOADING,
          payload: false,
        });
      });
  };
};

export const getPersonDetails = (personId) => {
  return (dispatch, getState) => {
    dispatch({
      type: GET_PERSON_DETAILS_LOADING,
      payload: true,
    });
    setTimeout(() => {
      axios
        .get(
          `https://api.themoviedb.org/3/person/${personId}?api_key=${API_KEY}&language=en-US`
        )
        .then((data) => {
          dispatch({
            type: GET_PERSON_DETAILS_SUCCESS,
            payload: data.data,
          });
          dispatch({
            type: GET_PERSON_DETAILS_LOADING,
            payload: false,
          });
        })
        .catch((error) => {
          dispatch({
            type: GET_PERSON_DETAILS_ERROR,
            payload: error,
          });
          dispatch({
            type: GET_PERSON_DETAILS_LOADING,
            payload: false,
          });
        });
    }, 7000);
  };
};
