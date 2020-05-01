import { combineReducers } from "redux";

import loadingReducer from "../reducers/loadingReducer";
import errorReducer from "../reducers/errorReducer";
import movieReducer from "../reducers/movieReducer";

const rootReducer = combineReducers({
  movies: movieReducer,
  loading: loadingReducer,
  errors: errorReducer,
});

export default rootReducer;
