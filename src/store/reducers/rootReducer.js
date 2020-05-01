import { combineReducers } from "redux";

import loadingReducer from "../reducers/loadingReducer";
import errorReducer from "../reducers/errorReducer";
import movieReducer from "../reducers/movieReducer";
import tvReducer from "../reducers/tvReducer";
import detailReducer from "../reducers/detailReducer";

const rootReducer = combineReducers({
  movies: movieReducer,
  tv: tvReducer,
  loading: loadingReducer,
  errors: errorReducer,
  details: detailReducer,
});

export default rootReducer;
