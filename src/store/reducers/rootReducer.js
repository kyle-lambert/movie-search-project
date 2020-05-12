import { combineReducers } from "redux";

import movieReducer from "../reducers/movieReducer";
import tvReducer from "../reducers/tvReducer";
import movieDetailsReducer from "../reducers/movieDetailsReducer";
import tvDetailsReducer from "../reducers/tvDetailsReducer";

const rootReducer = combineReducers({
  movies: movieReducer,
  tv: tvReducer,
  movieDetails: movieDetailsReducer,
  tvDetails: tvDetailsReducer,
});

export default rootReducer;
