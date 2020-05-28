import { combineReducers } from "redux";

import movieReducer from "../reducers/movieReducer";
import tvReducer from "../reducers/tvReducer";
import movieDetailsReducer from "../reducers/movieDetailsReducer";
import tvDetailsReducer from "../reducers/tvDetailsReducer";
import personDetailsReducer from "../reducers/personDetailsReducer";

const rootReducer = combineReducers({
  movies: movieReducer,
  tv: tvReducer,
  movieDetails: movieDetailsReducer,
  tvDetails: tvDetailsReducer,
  personDetails: personDetailsReducer,
});

export default rootReducer;
