import { combineReducers } from "redux";

import genreReducer from "./genreReducer";
import trendReducer from "./trendReducer";

const rootReducer = combineReducers({
  genres: genreReducer,
  trending: trendReducer,
});

export default rootReducer;
