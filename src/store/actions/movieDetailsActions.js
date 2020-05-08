import axios from "axios";

import {
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_LOADING,
  GET_MOVIE_DETAILS_ERROR,
  RESET_MOVIE_DETAILS,
} from "../types";

const API_KEY = process.env.REACT_APP_API_KEY;

export const getMovieDetails = (movieId) => {
  return (dispatch, getState) => {
    dispatch({
      type: GET_MOVIE_DETAILS_LOADING,
      payload: true,
    });
    setTimeout(() => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=credits,reviews,similar,recommendations`
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
    }, 1500);
  };
};

export const resetMovieDetails = () => {
  return (dispatch, getState) => {
    // console.log("movie details reset");
    dispatch({
      type: RESET_MOVIE_DETAILS,
    });
  };
};
