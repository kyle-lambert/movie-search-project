import axios from "axios";

import { GET_MOVIE_GENRES, GET_TV_GENRES } from "../types";

const API_KEY = process.env.REACT_APP_API_KEY;

export const getMovieGenres = () => {
  return (dispatch, getState) => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
      )
      .then((data) => {
        dispatch({
          type: GET_MOVIE_GENRES,
          payload: data.data.genres ? data.data.genres : [],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getTvGenres = () => {
  return (dispatch, getState) => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=en-US`
      )
      .then((data) => {
        dispatch({
          type: GET_TV_GENRES,
          payload: data.data.genres ? data.data.genres : [],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
