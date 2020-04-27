import movieReducer from "./movieReducer";
import tvReducer from "./tvReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  movies: movieReducer,
  tv: tvReducer,
});

export default rootReducer;
