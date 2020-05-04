import axios from "axios";

import {
  GET_TV_DETAILS_SUCCESS,
  GET_TV_DETAILS_LOADING,
  GET_TV_DETAILS_ERROR,
  RESET_TV_DETAILS,
} from "../types";

const API_KEY = process.env.REACT_APP_API_KEY;

export const getTvDetails = (movieId) => {
  return (dispatch, getState) => {
    dispatch({
      type: GET_TV_DETAILS_LOADING,
      payload: true,
    });
    setTimeout(() => {
      axios
        .get(
          `https://api.themoviedb.org/3/tv/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=credits,reviews,similar`
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
    }, 1000);
  };
};

export const resetTvDetails = () => {
  return (dispatch, getState) => {
    console.log("tv details reset");
    dispatch({
      type: RESET_TV_DETAILS,
    });
  };
};
