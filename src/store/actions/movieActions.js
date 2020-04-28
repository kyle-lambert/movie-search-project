import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

export const getPopularMovies = () => {
  return (dispatch, getState) => {
    setTimeout(() => {
      axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
        .then((data) => {
          dispatch({
            type: "GET_POPULAR_MOVIES",
            payload: data.data.results,
          });
        })
        .catch((error) => {
          dispatch({
            type: "GET_POPULAR_MOVIES_ERROR",
            payload: true,
          });
        });
    }, 3000);
  };
};

export const getNowPlayingMovies = () => {
  return (dispatch, getState) => {
    axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
      .then((data) => {
        dispatch({
          type: "GET_NOW_PLAYING_MOVIES",
          payload: data.data.results,
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_NOW_PLAYING_MOVIES_ERROR",
          payload: true,
        });
      });
  };
};

export const getTopRatedMovies = () => {
  return (dispatch, getState) => {
    axios
      .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
      .then((data) => {
        dispatch({
          type: "GET_TOP_RATED_MOVIES",
          payload: data.data.results,
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_TOP_RATED_MOVIES_ERROR",
          payload: true,
        });
      });
  };
};
