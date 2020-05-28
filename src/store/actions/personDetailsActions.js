import axios from "axios";

import {
  GET_PERSON_DETAILS_SUCCESS,
  GET_PERSON_DETAILS_LOADING,
  GET_PERSON_DETAILS_ERROR,
  RESET_PERSON_DETAILS,
} from "../types";

const API_KEY = process.env.REACT_APP_API_KEY;

export const getPersonDetails = (contentId) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      axios
        .get(
          `https://api.themoviedb.org/3/person/${contentId}?api_key=${API_KEY}&language=en-US&append_to_response=movie_credits,tv_credits`
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
    }, 750);
  };
};

export const resetPersonDetails = () => {
  console.log("person details reset");
  return {
    type: RESET_PERSON_DETAILS,
  };
};
