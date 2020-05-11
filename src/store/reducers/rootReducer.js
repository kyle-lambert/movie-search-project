import { combineReducers } from "redux";

import movieReducer from "../reducers/movieReducer";
import movieDetailsReducer from "../reducers/movieDetailsReducer";
import tvDetailsReducer from "../reducers/tvDetailsReducer";

const rootReducer = combineReducers({
  movies: movieReducer,
  movieDetails: movieDetailsReducer,
  tvDetails: tvDetailsReducer,
});

export default rootReducer;
